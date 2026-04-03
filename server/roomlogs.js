"use strict";
/**
 * Roomlogs
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * This handles data storage for rooms.
 *
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roomlogs = exports.Roomlog = exports.roomlogTable = exports.roomlogDB = void 0;
const lib_1 = require("../lib");
const database_1 = require("../lib/database");
exports.roomlogDB = (() => {
    if (!global.Config || !Config.replaysdb || Config.disableroomlogdb)
        return null;
    return new database_1.PGDatabase(Config.replaysdb);
})();
exports.roomlogTable = exports.roomlogDB?.getTable('roomlogs');
/**
 * Most rooms have three logs:
 * - scrollback
 * - roomlog
 * - modlog
 * This class keeps track of all three.
 *
 * The scrollback is stored in memory, and is the log you get when you
 * join the room. It does not get moderator messages.
 *
 * The modlog is stored in
 * `logs/modlog/modlog_<ROOMID>.txt`
 * It contains moderator messages, formatted for ease of search.
 * Direct modlog access is handled in server/modlog/; this file is just
 * a wrapper to make other code more readable.
 *
 * The roomlog is stored in
 * `logs/chat/<ROOMID>/<YEAR>-<MONTH>/<YEAR>-<MONTH>-<DAY>.txt`
 * It contains (nearly) everything.
 */
class Roomlog {
    constructor(room, options = {}) {
        this.visibleMessageCount = 0;
        this.roomid = room.roomid;
        this.isMultichannel = !!options.isMultichannel;
        this.noAutoTruncate = !!options.noAutoTruncate;
        this.noLogTimes = !!options.noLogTimes;
        this.log = [];
        this.broadcastBuffer = [];
        this.roomlogStream = undefined;
        this.roomlogFilename = '';
        this.numTruncatedLines = 0;
        this.setupRoomlogStream();
    }
    getScrollback(channel = 0) {
        let log = this.log;
        if (!this.noLogTimes)
            log = [`|:|${~~(Date.now() / 1000)}`].concat(log);
        if (!this.isMultichannel) {
            return log.join('\n') + '\n';
        }
        log = [];
        for (let i = 0; i < this.log.length; ++i) {
            const line = this.log[i];
            const split = /\|split\|p(\d)/g.exec(line);
            if (split) {
                const canSeePrivileged = (channel === Number(split[1]) || channel === -1);
                const ownLine = this.log[i + (canSeePrivileged ? 1 : 2)];
                if (ownLine)
                    log.push(ownLine);
                i += 2;
            }
            else {
                log.push(line);
            }
        }
        return log.join('\n') + '\n';
    }
    setupRoomlogStream() {
        if (this.roomlogStream === null)
            return;
        if (!Config.logchat || this.roomid.startsWith('battle-') || this.roomid.startsWith('game-')) {
            this.roomlogStream = null;
            return;
        }
        if (exports.roomlogTable) {
            this.roomlogTable = exports.roomlogTable;
            this.roomlogStream = null;
            return;
        }
        const date = new Date();
        const dateString = Chat.toTimestamp(date).split(' ')[0];
        const monthString = dateString.split('-', 2).join('-');
        const basepath = `chat/${this.roomid}/`;
        const relpath = `${monthString}/${dateString}.txt`;
        if (relpath === this.roomlogFilename)
            return;
        Monitor.logPath(basepath + monthString).mkdirpSync();
        this.roomlogFilename = relpath;
        if (this.roomlogStream)
            void this.roomlogStream.writeEnd();
        this.roomlogStream = Monitor.logPath(basepath + relpath).createAppendStream();
        // Create a symlink to today's lobby log.
        // These operations need to be synchronous, but it's okay
        // because this code is only executed once every 24 hours.
        const link0 = basepath + 'today.txt.0';
        Monitor.logPath(link0).unlinkIfExistsSync();
        try {
            Monitor.logPath(link0).symlinkToSync(relpath); // intentionally a relative link
            Monitor.logPath(link0).renameSync(basepath + 'today.txt');
        }
        catch { } // OS might not support symlinks or atomic rename
        if (!exports.Roomlogs.rollLogTimer)
            exports.Roomlogs.rollLogs();
    }
    add(message) {
        this.roomlog(message);
        // |uhtml gets both uhtml and uhtmlchange
        // which are visible and so should be counted
        if (['|c|', '|c:|', '|raw|', '|html|', '|uhtml'].some(k => message.startsWith(k))) {
            this.visibleMessageCount++;
        }
        message = this.withTimestamp(message);
        this.log.push(message);
        this.broadcastBuffer.push(message);
        return this;
    }
    withTimestamp(message) {
        if (!this.noLogTimes && message.startsWith('|c|')) {
            return `|c:|${Math.trunc(Date.now() / 1000)}|${message.slice(3)}`;
        }
        else {
            return message;
        }
    }
    hasUsername(username) {
        const userid = toID(username);
        for (const line of this.log) {
            if (line.startsWith('|c:|')) {
                const curUserid = toID(line.split('|', 4)[3]);
                if (curUserid === userid)
                    return true;
            }
            else if (line.startsWith('|c|')) {
                const curUserid = toID(line.split('|', 3)[2]);
                if (curUserid === userid)
                    return true;
            }
        }
        return false;
    }
    clearText(userids, lineCount = 0) {
        const cleared = [];
        const clearAll = (lineCount === 0);
        this.log = this.log.reverse().filter(line => {
            const parsed = this.parseChatLine(line);
            if (parsed) {
                const userid = toID(parsed.user);
                if (userids.includes(userid)) {
                    if (!cleared.includes(userid))
                        cleared.push(userid);
                    // Don't remove messages in battle rooms to preserve evidence
                    if (!this.roomlogStream && !this.roomlogTable)
                        return true;
                    if (clearAll)
                        return false;
                    if (lineCount > 0) {
                        lineCount--;
                        return false;
                    }
                    return true;
                }
            }
            return true;
        }).reverse();
        return cleared;
    }
    uhtmlchange(name, message) {
        const originalStart = '|uhtml|' + name + '|';
        const fullMessage = originalStart + message;
        for (const [i, line] of this.log.entries()) {
            if (line.startsWith(originalStart)) {
                this.log[i] = fullMessage;
                break;
            }
        }
        this.broadcastBuffer.push(fullMessage);
    }
    attributedUhtmlchange(user, name, message) {
        const start = `/uhtmlchange ${name},`;
        const fullMessage = this.withTimestamp(`|c|${user.getIdentity()}|${start}${message}`);
        let matched = false;
        for (const [i, line] of this.log.entries()) {
            if (this.parseChatLine(line)?.message.startsWith(start)) {
                this.log[i] = fullMessage;
                matched = true;
                break;
            }
        }
        if (!matched)
            this.log.push(fullMessage);
        this.broadcastBuffer.push(fullMessage);
    }
    parseChatLine(line) {
        const prefixes = [['|c:|', 4], ['|c|', 3]];
        for (const [messageStart, section] of prefixes) {
            // const messageStart = !this.noLogTimes ? '|c:|' : '|c|';
            // const section = !this.noLogTimes ? 4 : 3; // ['', 'c' timestamp?, author, message]
            if (line.startsWith(messageStart)) {
                const parts = lib_1.Utils.splitFirst(line, '|', section);
                return { user: parts[section - 1], message: parts[section] };
            }
        }
    }
    roomlog(message, date = new Date()) {
        if (!Config.logchat)
            return;
        message = message.replace(/<img[^>]* src="data:image\/png;base64,[^">]+"[^>]*>/g, '[img]');
        if (this.roomlogTable) {
            const chatData = this.parseChatLine(message);
            const type = message.split('|')[1] || "";
            void this.insertLog((0, database_1.SQL) `INSERT INTO roomlogs (${{
                type,
                roomid: this.roomid,
                userid: toID(chatData?.user) || null,
                time: (0, database_1.SQL) `now()`,
                log: message,
            }})`);
            const dateStr = Chat.toTimestamp(date).split(' ')[0];
            void this.insertLog((0, database_1.SQL) `INSERT INTO roomlog_dates (${{
                roomid: this.roomid,
                month: dateStr.slice(0, -3),
                date: dateStr,
            }}) ON CONFLICT (roomid, date) DO NOTHING;`);
        }
        else if (this.roomlogStream) {
            const timestamp = Chat.toTimestamp(date).split(' ')[1] + ' ';
            void this.roomlogStream.write(timestamp + message + '\n');
        }
    }
    async insertLog(query, ignoreFailure = false, retries = 3) {
        try {
            await this.roomlogTable?.query(query);
        }
        catch (e) {
            if (e?.code === '42P01') { // table not found
                await exports.roomlogDB._query((0, lib_1.FS)('databases/schemas/roomlogs.sql').readSync(), []);
                return this.insertLog(query, ignoreFailure, retries);
            }
            // connection terminated / transient errors
            if (!ignoreFailure &&
                retries > 0 &&
                e.message?.includes('Connection terminated unexpectedly')) {
                // delay before retrying
                await new Promise(resolve => { setTimeout(resolve, 2000); });
                return this.insertLog(query, ignoreFailure, retries - 1);
            }
            // crashlog for all other errors
            const [q, vals] = exports.roomlogDB._resolveSQL(query);
            Monitor.crashlog(e, 'a roomlog database query', {
                query: q, values: vals,
            });
        }
    }
    modlog(entry, overrideID) {
        void Rooms.Modlog.write(this.roomid, entry, overrideID);
    }
    async rename(newID) {
        await Rooms.Modlog.rename(this.roomid, newID);
        const roomlogStreamExisted = this.roomlogStream !== null;
        await this.destroy();
        if (this.roomlogTable) {
            await this.roomlogTable.updateAll({ roomid: newID }) `WHERE roomid = ${this.roomid}`;
        }
        else {
            const roomlogPath = `chat`;
            const [roomlogExists, newRoomlogExists] = await Promise.all([
                Monitor.logPath(roomlogPath + `/${this.roomid}`).exists(),
                Monitor.logPath(roomlogPath + `/${newID}`).exists(),
            ]);
            if (roomlogExists && !newRoomlogExists) {
                await Monitor.logPath(roomlogPath + `/${this.roomid}`).rename(Monitor.logPath(roomlogPath + `/${newID}`).path);
            }
            if (roomlogStreamExisted) {
                this.roomlogStream = undefined;
                this.roomlogFilename = "";
                this.setupRoomlogStream();
            }
        }
        exports.Roomlogs.roomlogs.set(newID, this);
        this.roomid = newID;
        return true;
    }
    static rollLogs() {
        if (exports.Roomlogs.rollLogTimer === true)
            return;
        if (exports.Roomlogs.rollLogTimer) {
            clearTimeout(exports.Roomlogs.rollLogTimer);
        }
        exports.Roomlogs.rollLogTimer = true;
        for (const log of exports.Roomlogs.roomlogs.values()) {
            log.setupRoomlogStream();
        }
        const time = Date.now();
        const nextMidnight = new Date();
        nextMidnight.setHours(24, 0, 0, 0);
        exports.Roomlogs.rollLogTimer = setTimeout(() => Roomlog.rollLogs(), nextMidnight.getTime() - time);
    }
    truncate() {
        if (this.noAutoTruncate)
            return;
        if (this.log.length > 100) {
            const truncationLength = this.log.length - 100;
            this.log.splice(0, truncationLength);
            this.numTruncatedLines += truncationLength;
        }
    }
    /**
     * Returns the total number of lines in the roomlog, including truncated lines.
     */
    getLineCount(onlyVisible = true) {
        return (onlyVisible ? this.visibleMessageCount : this.log.length) + this.numTruncatedLines;
    }
    destroy() {
        const promises = [];
        if (this.roomlogStream) {
            promises.push(this.roomlogStream.writeEnd());
            this.roomlogStream = null;
        }
        exports.Roomlogs.roomlogs.delete(this.roomid);
        return Promise.all(promises);
    }
}
exports.Roomlog = Roomlog;
const roomlogs = new Map();
function createRoomlog(room, options = {}) {
    let roomlog = exports.Roomlogs.roomlogs.get(room.roomid);
    if (roomlog)
        throw new Error(`Roomlog ${room.roomid} already exists`);
    roomlog = new Roomlog(room, options);
    exports.Roomlogs.roomlogs.set(room.roomid, roomlog);
    return roomlog;
}
exports.Roomlogs = {
    create: createRoomlog,
    Roomlog,
    roomlogs,
    db: exports.roomlogDB,
    table: exports.roomlogTable,
    rollLogs: Roomlog.rollLogs,
    rollLogTimer: null,
};
