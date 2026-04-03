"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = exports.pages = exports.commands = exports.roomFaqs = exports.ROOMFAQ_FILE = void 0;
exports.visualizeFaq = visualizeFaq;
exports.getAlias = getAlias;
exports.start = start;
const lib_1 = require("../../lib");
exports.ROOMFAQ_FILE = 'config/chat-plugins/faqs.json';
const MAX_ROOMFAQ_LENGTH = 8192;
const MAX_HTML_ROOMFAQ_LENGTH = 10000;
exports.roomFaqs = (() => {
    const data = JSON.parse((0, lib_1.FS)(exports.ROOMFAQ_FILE).readIfExistsSync() || "{}");
    let save = false;
    for (const k in data) {
        for (const name in data[k]) {
            if (typeof data[k][name] === 'string') {
                data[k][name] = convertFaq(data[k][name]);
                save = true;
            }
        }
    }
    if (save)
        saveRoomFaqs(data);
    return data;
})();
function saveRoomFaqs(table) {
    (0, lib_1.FS)(exports.ROOMFAQ_FILE).writeUpdate(() => JSON.stringify(table || exports.roomFaqs));
}
function convertFaq(faq) {
    if (faq.startsWith('>')) {
        return {
            alias: true,
            source: faq.slice(1),
        };
    }
    return {
        source: faq,
    };
}
function visualizeFaq(faq) {
    if (faq.html) {
        return faq.source;
    }
    return Chat.formatText(faq.source, true);
}
function getAlias(roomid, key) {
    if (!exports.roomFaqs[roomid])
        return false;
    const value = exports.roomFaqs[roomid][key];
    if (value?.alias)
        return value.source;
    return false;
}
exports.commands = {
    addhtmlfaq: 'addfaq',
    addfaq(target, room, user, connection) {
        room = this.requireRoom();
        const useHTML = this.cmd.includes('html');
        this.checkCan('ban', null, room);
        if (useHTML && !user.can('addhtml', null, room, this.fullCmd)) {
            throw new Chat.ErrorMessage(`You are not allowed to use raw HTML in roomfaqs.`);
        }
        if (!room.persist)
            throw new Chat.ErrorMessage("This command is unavailable in temporary rooms.");
        if (!target)
            return this.parse('/help roomfaq');
        target = target.trim();
        const input = this.filter(target);
        if (target !== input)
            throw new Chat.ErrorMessage("You are not allowed to use filtered words in roomfaq entries.");
        let [topic, ...rest] = input.split(',');
        topic = toID(topic);
        if (!(topic && rest.length))
            return this.parse('/help roomfaq');
        let text = rest.join(',').trim();
        if (topic.length > 25)
            throw new Chat.ErrorMessage("FAQ topics should not exceed 25 characters.");
        const lengthWithoutFormatting = Chat.stripFormatting(text).length;
        if (lengthWithoutFormatting > (useHTML ? MAX_HTML_ROOMFAQ_LENGTH : MAX_ROOMFAQ_LENGTH)) {
            throw new Chat.ErrorMessage(`FAQ entries must not exceed ${(useHTML ? MAX_HTML_ROOMFAQ_LENGTH : MAX_ROOMFAQ_LENGTH)} characters.`);
        }
        else if (lengthWithoutFormatting < 1) {
            throw new Chat.ErrorMessage(`FAQ entries must include at least one character.`);
        }
        if (!useHTML) {
            text = text.replace(/^>/, '&gt;');
        }
        else {
            text = text.replace(/\n/ig, '<br />');
            text = this.checkHTML(text);
        }
        if (!exports.roomFaqs[room.roomid])
            exports.roomFaqs[room.roomid] = {};
        const exists = topic in exports.roomFaqs[room.roomid];
        exports.roomFaqs[room.roomid][topic] = {
            source: text,
            html: useHTML,
        };
        saveRoomFaqs();
        this.sendReplyBox(visualizeFaq(exports.roomFaqs[room.roomid][topic]));
        this.privateModAction(`${user.name} ${exists ? 'edited' : 'added'} an FAQ for '${topic}'`);
        this.modlog('RFAQ', null, `${exists ? 'edited' : 'added'} '${topic}'`);
    },
    removefaq(target, room, user) {
        room = this.requireRoom();
        this.checkChat();
        this.checkCan('ban', null, room);
        const topic = toID(target);
        if (!topic)
            return this.parse('/help roomfaq');
        if (!exports.roomFaqs[room.roomid]?.[topic])
            throw new Chat.ErrorMessage("Invalid topic.");
        if (room.settings.repeats?.length &&
            room.settings.repeats.filter(x => x.faq && x.id === topic).length) {
            this.parse(`/msgroom ${room.roomid},/removerepeat ${topic}`);
        }
        delete exports.roomFaqs[room.roomid][topic];
        Object.keys(exports.roomFaqs[room.roomid]).filter(val => getAlias(room.roomid, val) === topic).map(val => delete exports.roomFaqs[room.roomid][val]);
        if (!Object.keys(exports.roomFaqs[room.roomid]).length)
            delete exports.roomFaqs[room.roomid];
        saveRoomFaqs();
        this.privateModAction(`${user.name} removed the FAQ for '${topic}'`);
        this.modlog('ROOMFAQ', null, `removed ${topic}`);
        this.refreshPage(`roomfaqs-${room.roomid}`);
    },
    addalias(target, room, user) {
        room = this.requireRoom();
        this.checkChat();
        this.checkCan('ban', null, room);
        if (!room.persist)
            throw new Chat.ErrorMessage("This command is unavailable in temporary rooms.");
        const [alias, topic] = target.split(',').map(val => toID(val));
        if (!(alias && topic))
            return this.parse('/help roomfaq');
        if (alias.length > 25)
            throw new Chat.ErrorMessage("FAQ topics should not exceed 25 characters.");
        if (alias === topic)
            throw new Chat.ErrorMessage("You cannot make the alias have the same name as the topic.");
        if (exports.roomFaqs[room.roomid][alias] && !exports.roomFaqs[room.roomid][alias].alias) {
            throw new Chat.ErrorMessage("You cannot overwrite an existing topic with an alias; please delete the topic first.");
        }
        if (!(exports.roomFaqs[room.roomid] && topic in exports.roomFaqs[room.roomid])) {
            throw new Chat.ErrorMessage(`The topic ${topic} was not found in this room's faq list.`);
        }
        if (getAlias(room.roomid, topic)) {
            throw new Chat.ErrorMessage(`You cannot make an alias of an alias. Use /addalias ${alias}, ${getAlias(room.roomid, topic)} instead.`);
        }
        exports.roomFaqs[room.roomid][alias] = {
            alias: true,
            source: topic,
        };
        saveRoomFaqs();
        this.privateModAction(`${user.name} added an alias for '${topic}': ${alias}`);
        this.modlog('ROOMFAQ', null, `alias for '${topic}' - ${alias}`);
    },
    viewfaq: 'roomfaq',
    rfaq: 'roomfaq',
    roomfaq(target, room, user, connection, cmd) {
        room = this.requireRoom();
        if (!exports.roomFaqs[room.roomid])
            throw new Chat.ErrorMessage("This room has no FAQ topics.");
        let topic = toID(target);
        if (topic === 'constructor')
            return false;
        if (!topic) {
            return this.parse(`/join view-roomfaqs-${room.roomid}`);
        }
        topic = getAlias(room.roomid, topic) || topic;
        if (!exports.roomFaqs[room.roomid][topic]) {
            // tries to find a FAQ of same topic if RFAQ topic fails
            const faqCommand = Chat.commands['faq'];
            if (typeof faqCommand === 'function') {
                const normalized = toID(target);
                const validTopics = [
                    'staff', 'autoconfirmed', 'ac', 'ladder', 'ladderhelp', 'decay',
                    'tiering', 'tiers', 'tier', 'badge', 'badges', 'badgeholders',
                    'rng', 'tournaments', 'tournament', 'tours', 'tour', 'vpn',
                    'proxy', 'ca', 'customavatar', 'customavatars', 'privacy',
                    'lostpassword', 'password', 'lostpass',
                ];
                if (!validTopics.includes(normalized)) {
                    return this.errorReply(`'${target}' is an invalid topic.`);
                }
                if (!this.runBroadcast())
                    return;
                return faqCommand.call(this, target, room, user, connection, 'faq', '!');
            }
            return this.errorReply("Invalid topic.");
        }
        if (!this.runBroadcast())
            return;
        const rfaq = exports.roomFaqs[room.roomid][topic];
        this.sendReplyBox(visualizeFaq(rfaq));
        if (!this.broadcasting && user.can('ban', null, room, 'addfaq')) {
            const code = lib_1.Utils.escapeHTML(rfaq.source).replace(/\n/g, '<br />');
            const command = rfaq.html ? 'addhtmlfaq' : 'addfaq';
            this.sendReplyBox(`<details><summary>Source</summary><code style="white-space: pre-wrap; display: table; tab-size: 3">/${command} ${topic}, ${code}</code></details>`);
        }
    },
    roomfaqhelp: [
        `/roomfaq - Shows the list of all available FAQ topics`,
        `/roomfaq <topic> - Shows the FAQ for <topic>.`,
        `/addfaq <topic>, <text> - Adds an entry for <topic> in this room or updates it. Requires: @ # ~`,
        `/addhtmlfaq <topic>, <text> - Adds or updates an entry for <topic> with HTML support. Requires: # ~`,
        `/addalias <alias>, <topic> - Adds <alias> as an alias for <topic>, displaying it when users use /roomfaq <alias>. Requires: @ # ~`,
        `/removefaq <topic> - Removes the entry for <topic> in this room. If used on an alias, removes the alias. Requires: @ # ~`,
    ],
};
exports.pages = {
    roomfaqs(args, user) {
        const room = this.requireRoom();
        this.title = `[Room FAQs]`;
        // allow it for users if they can access the room
        if (!room.checkModjoin(user)) {
            throw new Chat.ErrorMessage(`<h2>Access denied.</h2>`);
        }
        let buf = `<div class="pad"><button style="float:right;" class="button" name="send" value="/join view-roomfaqs-${room.roomid}"><i class="fa fa-refresh"></i> Refresh</button>`;
        if (!exports.roomFaqs[room.roomid]) {
            return `${buf}<h2>This room has no FAQs.</h2></div>`;
        }
        buf += `<h2>FAQs for ${room.title}:</h2>`;
        const keys = Object.keys(exports.roomFaqs[room.roomid]);
        const sortedKeys = lib_1.Utils.sortBy(keys.filter(val => !getAlias(room.roomid, val)));
        for (const key of sortedKeys) {
            const topic = exports.roomFaqs[room.roomid][key];
            buf += `<div class="infobox">`;
            buf += `<h3>${key}</h3>`;
            buf += `<hr />`;
            buf += visualizeFaq(topic);
            const aliases = keys.filter(val => getAlias(room.roomid, val) === key);
            if (aliases.length) {
                buf += `<hr /><strong>Aliases:</strong> ${aliases.join(', ')}`;
            }
            if (user.can('ban', null, room, 'addfaq')) {
                const src = lib_1.Utils.escapeHTML(topic.source).replace(/\n/g, `<br />`);
                const command = topic.html ? 'addhtmlfaq' : 'addfaq';
                buf += `<hr /><details><summary>Raw text</summary>`;
                buf += `<code style="white-space: pre-wrap; display: table; tab-size: 3;">/${command} ${key}, ${src}</code></details>`;
                buf += `<hr /><button class="button" name="send" value="/msgroom ${room.roomid},/removefaq ${key}">Delete FAQ</button>`;
            }
            buf += `</div>`;
        }
        buf += `</div>`;
        return buf;
    },
};
exports.handlers = {
    onRenameRoom(oldID, newID) {
        if (exports.roomFaqs[oldID]) {
            if (!exports.roomFaqs[newID])
                exports.roomFaqs[newID] = {};
            Object.assign(exports.roomFaqs[newID], exports.roomFaqs[oldID]);
            delete exports.roomFaqs[oldID];
            saveRoomFaqs();
        }
    },
};
function start() {
    Chat.multiLinePattern.register('/add(htmlfaq|faq) ');
}
