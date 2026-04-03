"use strict";
/**
 * @author mia-pi-git
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = exports.pages = exports.commands = exports.updateTimeout = exports.data = exports.PUBLIC_PHASE_LENGTH = exports.FORMAT_POOL = exports.FIXED_FORMATS = exports.BADGE_THRESHOLDS = exports.FORMATS_PER_SEASON = exports.SEASONS_PER_YEAR = void 0;
exports.getBadges = getBadges;
exports.setFormatSchedule = setFormatSchedule;
exports.generateFormatSchedule = generateFormatSchedule;
exports.getLadderTop = getLadderTop;
exports.updateBadgeholders = updateBadgeholders;
exports.saveData = saveData;
exports.rollSeason = rollSeason;
exports.rollTimer = rollTimer;
exports.destroy = destroy;
const lib_1 = require("../../lib");
exports.SEASONS_PER_YEAR = 4;
exports.FORMATS_PER_SEASON = 4;
exports.BADGE_THRESHOLDS = {
    gold: 3,
    silver: 30,
    bronze: 100,
};
exports.FIXED_FORMATS = ['randombattle', 'ou'];
exports.FORMAT_POOL = ['ubers', 'uu', 'ru', 'nu', 'pu', 'lc', 'doublesou', 'monotype'];
exports.PUBLIC_PHASE_LENGTH = 3;
try {
    exports.data = JSON.parse((0, lib_1.FS)('config/chat-plugins/seasons.json').readSync());
}
catch {
    exports.data = {
        // force a reroll
        current: { season: null, year: null, formatsGeneratedAt: null, period: null },
        formatSchedule: {},
        badgeholders: {},
    };
}
function getBadges(user, curFormat) {
    let userBadges = [];
    const season = exports.data.current.season; // don't factor in old badges
    for (const format in exports.data.badgeholders[season]) {
        const badges = exports.data.badgeholders[season][format];
        for (const type in badges) {
            if (badges[type].includes(user.id)) {
                // ex badge-bronze-gen9ou-250-1-2024
                userBadges.push({ type, format });
            }
        }
    }
    // find which ones we should prioritize showing - badge of current tier/season, then top badges of other formats for this season
    let curFormatBadge;
    for (const [i, badge] of userBadges.entries()) {
        if (badge.format === curFormat) {
            userBadges.splice(i, 1);
            curFormatBadge = badge;
        }
    }
    // now - sort by highest levels
    userBadges = lib_1.Utils.sortBy(userBadges, x => Object.keys(exports.BADGE_THRESHOLDS).indexOf(x.type))
        .slice(0, 2);
    if (curFormatBadge)
        userBadges.unshift(curFormatBadge);
    // format and return
    return userBadges;
}
function getUserHTML(user, format) {
    const buf = `<username>${user.name}</username>`;
    const badgeType = getBadges(user, format).find(x => x.format === format)?.type;
    if (badgeType) {
        let formatType = format.split(/gen\d+/)[1];
        if (!['ou', 'randombattle'].includes(formatType))
            formatType = 'rotating';
        return `<img src="https://${Config.routes.client}/sprites/misc/${formatType}_${badgeType}.png" />` + buf;
    }
    return buf;
}
function setFormatSchedule() {
    // guard heavily against this being overwritten
    if (exports.data.current.formatsGeneratedAt === getYear())
        return;
    exports.data.current.formatsGeneratedAt = getYear();
    const formats = generateFormatSchedule();
    for (const [i, formatList] of formats.entries()) {
        exports.data.formatSchedule[i + 1] = exports.FIXED_FORMATS.concat(formatList.slice());
    }
    saveData();
}
class ScheduleGenerator {
    constructor() {
        this.items = new Map();
        this.formats = new Array(exports.SEASONS_PER_YEAR).fill(null).map(() => []);
        for (const format of exports.FORMAT_POOL)
            this.items.set(format, 0);
    }
    generate() {
        for (let i = 0; i < this.formats.length; i++) {
            this.step([i, 0]);
        }
        for (let i = 1; i < exports.SEASONS_PER_YEAR; i++) {
            this.step([0, i]);
        }
        return this.formats;
    }
    swap(x, y) {
        const item = this.formats[x][y];
        for (let i = 0; i < exports.SEASONS_PER_YEAR; i++) {
            if (this.formats[i].includes(item))
                continue;
            for (const [j, cur] of this.formats[i].entries()) {
                if (cur === item)
                    continue;
                if (this.formats[x].includes(cur))
                    continue;
                this.formats[i][j] = item;
                return cur;
            }
        }
        throw new Error("Couldn't find swap target for " + item + ": " + JSON.stringify(this.formats));
    }
    select(x, y) {
        const items = Array.from(this.items).filter(entry => entry[1] < 2);
        const item = lib_1.Utils.randomElement(items);
        if (item[1] >= 2) {
            this.items.delete(item[0]);
            return this.select(x, y);
        }
        this.items.set(item[0], item[1] + 1);
        if (item[0] && this.formats[x].includes(item[0])) {
            this.formats[x][y] = item[0];
            return this.swap(x, y);
        }
        return item[0];
    }
    step(start) {
        let [x, y] = start;
        while (x < this.formats.length && y < exports.FORMATS_PER_SEASON) {
            const item = this.select(x, y);
            this.formats[x][y] = item;
            x++;
            y++;
        }
    }
}
function generateFormatSchedule() {
    return new ScheduleGenerator().generate();
}
async function getLadderTop(format) {
    try {
        const results = await (0, lib_1.Net)(`https://${Config.routes.root}/ladder/?format=${toID(format)}&json`).get();
        const reply = JSON.parse(results);
        return reply.toplist;
    }
    catch {
        return null;
    }
}
async function updateBadgeholders() {
    rollSeason();
    const period = `${exports.data.current.season}`;
    if (!exports.data.badgeholders[period]) {
        exports.data.badgeholders[period] = {};
    }
    for (const formatName of exports.data.formatSchedule[findPeriod()]) {
        const formatid = `gen${Dex.gen}${formatName}`;
        const response = await getLadderTop(formatid);
        if (!response)
            continue; // ??
        const newHolders = {};
        for (const [i, row] of response.entries()) {
            let badgeType = null;
            for (const type in exports.BADGE_THRESHOLDS) {
                if ((i + 1) <= exports.BADGE_THRESHOLDS[type]) {
                    badgeType = type;
                    break;
                }
            }
            if (!badgeType)
                break;
            if (!newHolders[badgeType])
                newHolders[badgeType] = [];
            newHolders[badgeType].push(row.userid);
        }
        exports.data.badgeholders[period][formatid] = newHolders;
    }
    saveData();
}
function getYear() {
    return new Date().getFullYear();
}
function findPeriod(modifier = 0) {
    return Math.floor((new Date().getMonth() + modifier) / (exports.SEASONS_PER_YEAR - 1)) + 1;
}
/** Are we in the last three days of the month (the public phase, where badged battles are public and the room is active?) */
function checkPublicPhase() {
    const daysInCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    // last 3 days of the month, and next month is a new season
    return new Date().getDate() >= (daysInCurrentMonth - exports.PUBLIC_PHASE_LENGTH) && findPeriod() !== findPeriod(1);
}
function saveData() {
    (0, lib_1.FS)('config/chat-plugins/seasons.json').writeUpdate(() => JSON.stringify(exports.data));
}
function rollSeason() {
    const year = getYear();
    if (exports.data.current.year !== year) {
        exports.data.current.year = year;
        setFormatSchedule();
    }
    if (findPeriod() !== exports.data.current.period) {
        exports.data.current.season++;
        exports.data.badgeholders[exports.data.current.season] = {};
        for (const k of exports.data.formatSchedule[findPeriod()]) {
            exports.data.badgeholders[exports.data.current.season][`gen${Dex.gen}${k}`] = {};
        }
        exports.data.current.period = findPeriod();
        saveData();
    }
}
exports.updateTimeout = null;
function rollTimer() {
    if (exports.updateTimeout === true)
        return;
    if (exports.updateTimeout) {
        clearTimeout(exports.updateTimeout);
    }
    exports.updateTimeout = true;
    void updateBadgeholders();
    const time = Date.now();
    const next = new Date();
    next.setHours(next.getHours() + 1, 0, 0, 0);
    exports.updateTimeout = setTimeout(() => rollTimer(), next.getTime() - time);
    const discussionRoom = Rooms.search('seasondiscussion');
    if (discussionRoom) {
        if (checkPublicPhase() && discussionRoom.settings.isPrivate) {
            discussionRoom.setPrivate(false);
            discussionRoom.settings.modchat = 'autoconfirmed';
            discussionRoom.add(`|html|<div class="broadcast-blue"><strong>The public phase of the month has now started!</strong>` +
                `<br /> Badged battles are now forced public, and this room is open for use.</div>`).update();
        }
        else if (!checkPublicPhase() && !discussionRoom.settings.isPrivate) {
            discussionRoom.setPrivate('unlisted');
            discussionRoom.add(`|html|<div class="broadcast-blue">The public phase of the month has ended.</div>`).update();
        }
    }
}
function destroy() {
    if (exports.updateTimeout && typeof exports.updateTimeout !== 'boolean') {
        clearTimeout(exports.updateTimeout);
    }
}
rollTimer();
exports.commands = {
    seasonschedule: 'seasons',
    seasons() {
        return this.parse(`/join view-seasonschedule`);
    },
};
exports.pages = {
    seasonschedule() {
        this.checkCan('globalban');
        let buf = `<div class="pad"><h2>Season schedule for ${getYear()}</h2><br />`;
        buf += `<div class="ladder pad"><table><tr><th>Season #</th><th>Formats</th></tr>`;
        for (const period in exports.data.formatSchedule) {
            const match = findPeriod() === Number(period);
            const formatString = exports.data.formatSchedule[period]
                .sort()
                .map(x => Dex.formats.get(x).name.replace(`[Gen ${Dex.gen}]`, ''))
                .join(', ');
            buf += `<tr><td>${match ? `<strong>${period}</strong>` : period}</td>`;
            buf += `<td>${match ? `<strong>${formatString}</strong>` : formatString}</td></tr>`;
        }
        buf += `</tr></table></div>`;
        return buf;
    },
    seasonladder(query, user) {
        const format = toID(query.shift());
        const season = toID(query.shift()) || `${exports.data.current.season}`;
        if (!exports.data.badgeholders[season]) {
            throw new Chat.ErrorMessage(`Season ${season} not found.`);
        }
        this.title = `[Seasons]`;
        let buf = '<div class="pad">';
        if (!Object.keys(exports.data.badgeholders[season]).includes(format)) {
            // fall back to the master list so that people can still access this easily from the ladder page of other formats
            this.title += ` All`;
            buf += `<h2>Season Records</h2>`;
            const seasonsDesc = lib_1.Utils.sortBy(Object.keys(exports.data.badgeholders), s => s.split('-').map(x => -Number(x)));
            for (const s of seasonsDesc) {
                buf += `<h3>Season ${s}</h3><hr />`;
                for (const f in exports.data.badgeholders[s]) {
                    buf += `<a class="button" name="send" target="replace" href="/view-seasonladder-${f}-${s}">${Dex.formats.get(f).name}</a>`;
                }
                buf += `<br />`;
            }
            return buf;
        }
        this.title += ` ${format} [Season ${season}]`;
        const uppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        let formatName = Dex.formats.get(format).name;
        // futureproofing for gen10/etc
        const room = Rooms.search(lib_1.Utils.splitFirst(format, /\d+/)[1] || '');
        if (room) {
            formatName = `<a href="/${room.roomid}">${formatName}</a>`;
        }
        buf += `<h2>Season results for ${formatName} [${season}]</h2>`;
        buf += `<small><a target="replace" href="/view-seasonladder">View past seasons</a></small>`;
        let i = 0;
        for (const badgeType in exports.data.badgeholders[season][format]) {
            buf += `<div class="ladder pad"><table>`;
            let formatType = format.split(/gen\d+/)[1];
            if (!['ou', 'randombattle'].includes(formatType))
                formatType = 'rotating';
            buf += `<tr><h2><img src="https://${Config.routes.client}/sprites/misc/${formatType}_${badgeType}.png" /> ${uppercase(badgeType)}</h2></tr>`;
            for (const userid of exports.data.badgeholders[season][format][badgeType]) {
                i++;
                buf += `<tr><td>${i}</td><td><a href="https://${Config.routes.root}/users/${userid}">${userid}</a></td></tr>`;
            }
            buf += `</table></div>`;
        }
        return buf;
    },
};
exports.handlers = {
    onBattleStart(user, room) {
        if (!room.battle)
            return; // should never happen, just sating TS
        // now first verify they have a badge
        const badges = getBadges(user, room.battle.format);
        if (!badges.length)
            return;
        const slot = room.battle.playerTable[user.id]?.slot;
        if (!slot)
            return; // not in battle fsr? wack
        for (const badge of badges) {
            room.add(`|badge|${slot}|${badge.type}|${badge.format}|${exports.BADGE_THRESHOLDS[badge.type]}-${exports.data.current.season}`);
        }
        if (checkPublicPhase() && !room.battle.forcedSettings.privacy &&
            badges.filter(x => x.format === room.battle.format).length && room.battle.rated) {
            room.battle.forcedSettings.privacy = 'medal';
            room.add(`|html|<div class="broadcast-red"><strong>This battle is required to be public due to one or more player having a season medal.</strong><br />` +
                `During the public phase, you can discuss the state of the ladder <a href="/seasondiscussion">in a special chatroom.</a></div>`);
            room.setPrivate(false);
            const seasonRoom = Rooms.search('seasondiscussion');
            if (seasonRoom) {
                const p1html = getUserHTML(user, room.battle.format);
                const otherPlayer = user.id === room.battle.p1.id ? room.battle.p2 : room.battle.p1;
                const otherUser = otherPlayer.getUser();
                const p2html = otherUser ? getUserHTML(otherUser, room.battle.format) : `<username>${otherPlayer.name}</username>`;
                const formatName = Dex.formats.get(room.battle.format).name;
                seasonRoom.add(`|raw|<a href="/${room.roomid}" class="ilink">${formatName} battle started between ` +
                    `${p1html} and ${p2html}. (rating: ${Math.floor(room.battle.rated)})</a>`).update();
            }
        }
        room.add(`|uhtml|medal-msg|<div class="broadcast-blue">Curious what those medals under the avatar are? PS now has Ladder Seasons!` +
            ` For more information, check out the <a href="https://www.smogon.com/forums/threads/3740067/">thread on Smogon.</a></div>`);
        room.update();
    },
};
