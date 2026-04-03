"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateMessages = exports.PM = exports.MAX_PENDING = exports.SEEN_EXPIRY_TIME = exports.EXPIRY_TIME = void 0;
/**
 * Private message handling, particularly for offline messages.
 * By Mia.
 * @author mia-pi-git
 */
const lib_1 = require("../../lib");
const ConfigLoader = __importStar(require("../config-loader"));
const user_groups_1 = require("../user-groups");
const database_1 = require("./database");
/** The time until a PM sent offline expires. Presently, 60 days. */
exports.EXPIRY_TIME = 60 * 24 * 60 * 60 * 1000;
/** The time until a PM that has been seen by the user expires. Presently, one week. */
exports.SEEN_EXPIRY_TIME = 7 * 24 * 60 * 60 * 1000;
/** The max PMs that one user can have pending to a specific user at one time */
exports.MAX_PENDING = 20;
// this would be in database.ts, but for some weird reason, if the extension and the pm are the same
// it doesn't work. all the keys in the require() result are there, but they're also set to undefined.
// no idea why.
exports.PM = (0, lib_1.SQL)('private-messages', module, {
    file: 'databases/offline-pms.db',
    extension: 'server/private-messages/database.js',
});
exports.PrivateMessages = new class {
    constructor() {
        this.database = exports.PM;
        this.clearInterval = this.nextClear();
        this.offlineIsEnabled = Config.usesqlitepms && Config.usesqlite;
    }
    async sendOffline(to, from, message, context) {
        await this.checkCanSend(to, from);
        const result = await exports.PM.transaction('send', [toID(from), toID(to), message]);
        if (result.error)
            throw new Chat.ErrorMessage(result.error);
        if (typeof from === 'object') {
            from.send(`|pm|${this.getIdentity(from)}|${this.getIdentity(to)}|${message} __[sent offline]__`);
        }
        const changed = !!result.changes;
        if (changed && context) {
            Chat.runHandlers('onMessageOffline', context, message, toID(to));
        }
        return changed;
    }
    getSettings(userid) {
        return exports.PM.get(database_1.statements.getSettings, [toID(userid)]);
    }
    deleteSettings(userid) {
        return exports.PM.run(database_1.statements.deleteSettings, [toID(userid)]);
    }
    async checkCanSend(to, from) {
        from = toID(from);
        to = toID(to);
        const setting = await this.getSettings(to);
        const requirement = setting?.view_only || Config.usesqlitepms || "friends";
        switch (requirement) {
            case 'friends':
                if (!(await Chat.Friends.findFriendship(to, from))) {
                    if (Config.usesqlitepms === 'friends') {
                        throw new Chat.ErrorMessage(`At this time, you may only send offline PMs to friends. ${to} is not friends with you.`);
                    }
                    throw new Chat.ErrorMessage(`${to} is only accepting offline PMs from friends at this time.`);
                }
                break;
            case 'trusted':
                if (!Users.globalAuth.has(toID(from))) {
                    throw new Chat.ErrorMessage(`${to} is currently blocking offline PMs from non-trusted users.`);
                }
                break;
            case 'none':
                // drivers+ can override
                if (!user_groups_1.Auth.atLeast(Users.globalAuth.get(from), '%')) {
                    throw new Chat.ErrorMessage(`${to} has indicated that they do not wish to receive offline PMs.`);
                }
                break;
            default:
                if (!user_groups_1.Auth.atLeast(Users.globalAuth.get(from), requirement)) {
                    if (setting?.view_only) {
                        throw new Chat.ErrorMessage(`That user is not allowing offline PMs from your rank at this time.`);
                    }
                    throw new Chat.ErrorMessage('You do not meet the rank requirement to send offline PMs at this time.');
                }
                break;
        }
    }
    setViewOnly(user, val) {
        const id = toID(user);
        if (!val) { // if null, no need to save
            return exports.PM.run(database_1.statements.deleteSettings, [id]);
        }
        return exports.PM.run(database_1.statements.setBlock, [id, val]);
    }
    checkCanUse(user, options = { forceBool: false, isLogin: false }) {
        if (!this.offlineIsEnabled) {
            if (options.forceBool)
                return false;
            throw new Chat.ErrorMessage(`Offline PMs are currently disabled.`);
        }
        if (!(options.isLogin ? user.registered : user.autoconfirmed)) {
            if (options.forceBool)
                return false;
            throw new Chat.ErrorMessage("To use offline messaging you must be autoconfirmed, which means being registered for at least one week and winning one rated game.");
        }
        if (!Users.globalAuth.atLeast(user, Config.usesqlitepms)) {
            if (options.forceBool)
                return false;
            throw new Chat.ErrorMessage("You do not have the needed rank to send offline PMs.");
        }
        return true;
    }
    checkCanPM(user, pmTarget) {
        this.checkCanUse(user);
        if (Config.usesqlitepms === 'friends' && !user.friends?.has(pmTarget)) {
            throw new Chat.ErrorMessage(`At this time, you may only send offline messages to friends. You do not have ${pmTarget} friended.`);
        }
    }
    async sendReceived(user) {
        const userid = toID(user);
        // we only want to send the unseen pms to them when they login - they can replay the rest at will otherwise
        const messages = await this.fetchUnseen(userid);
        for (const { message, time, sender } of messages) {
            user.send(`|pm|${this.getIdentity(sender)}|${this.getIdentity(user)}|/html ` +
                `${lib_1.Utils.escapeHTML(message)} <i>[sent offline, <time>${new Date(time).toISOString()}</time>]</i>`);
        }
    }
    getIdentity(user) {
        user = Users.getExact(user) || user;
        if (typeof user === 'object') {
            return user.getIdentity();
        }
        return `${Users.globalAuth.get(toID(user))}${user}`;
    }
    nextClear() {
        if (!exports.PM.isParentProcess)
            return null;
        const time = Date.now();
        // even though we expire once a week atm, we check once a day
        const nextMidnight = new Date();
        nextMidnight.setHours(24, 0, 0, 0);
        if (this.clearInterval)
            clearTimeout(this.clearInterval);
        this.clearInterval = setTimeout(() => {
            void this.clearOffline();
            void this.clearSeen();
            this.nextClear();
        }, nextMidnight.getTime() - time);
        return this.clearInterval;
    }
    clearSeen() {
        return exports.PM.run(database_1.statements.clearSeen, [Date.now(), exports.SEEN_EXPIRY_TIME]);
    }
    send(message, user, pmTarget, onlyRecipient = null) {
        const buf = `|pm|${user.getIdentity()}|${pmTarget.getIdentity()}|${message}`;
        if (onlyRecipient)
            return onlyRecipient.send(buf);
        user.send(buf);
        if (pmTarget !== user)
            pmTarget.send(buf);
        pmTarget.lastPM = user.id;
        user.lastPM = pmTarget.id;
    }
    async fetchUnseen(user) {
        const userid = toID(user);
        return (await exports.PM.transaction('listNew', [userid])) || [];
    }
    async fetchAll(user) {
        return (await exports.PM.all(database_1.statements.fetch, [toID(user)])) || [];
    }
    async renderReceived(user) {
        const all = await this.fetchAll(user);
        let buf = `<div class="ladder pad">`;
        buf += `<h2>PMs received offline in the last ${Chat.toDurationString(exports.SEEN_EXPIRY_TIME)}</h2>`;
        const sortedPMs = {};
        for (const curPM of all) {
            if (!sortedPMs[curPM.sender])
                sortedPMs[curPM.sender] = [];
            sortedPMs[curPM.sender].push(curPM);
        }
        for (const k in sortedPMs) {
            lib_1.Utils.sortBy(sortedPMs[k], pm => -pm.time);
        }
        buf += `<div class="mainmenuwrapper" style="margin-left:40px">`;
        for (const pair of lib_1.Utils.sortBy(Object.entries(sortedPMs), ([id]) => id)) {
            const [sender, messages] = pair;
            const group = Users.globalAuth.get(toID(sender));
            const name = Users.getExact(sender)?.name || sender;
            const id = toID(name);
            buf += lib_1.Utils.html `<div class="pm-window pm-window-${id}" width="30px" data-userid="${id}" data-name="${group}${name}" style="width:300px">`;
            buf += lib_1.Utils.html `<h3><small>${group}</small>${name}</h3>`;
            buf += `<div class="pm-log"><div class="pm-buttonbar">`;
            for (const { message, time } of messages) {
                buf += `<div class="chat chatmessage-${toID(sender)}">&nbsp;&nbsp;`;
                buf += `<small>[<time>${new Date(time).toISOString()}</time>] </small>`;
                buf += lib_1.Utils.html `<small>${group}</small>`;
                buf += lib_1.Utils.html `<span class="username" data-roomgroup="${group}" data-name="${name}"><username>${name}</username></span>: `;
                buf += `<em>${message}</em></div>`;
            }
            buf += `</div></div></div>`;
            buf += `<br />`;
        }
        buf += `</div>`;
        return buf;
    }
    clearOffline() {
        return exports.PM.run(database_1.statements.clearDated, [Date.now(), exports.EXPIRY_TIME]);
    }
    destroy() {
        void exports.PM.destroy();
    }
    start(processCount) {
        start(processCount);
    }
};
if (!exports.PM.isParentProcess) {
    ConfigLoader.ensureLoaded();
    global.Monitor = {
        crashlog(error, source = 'A private message child process', details = null) {
            const repr = JSON.stringify([error.name, error.message, source, details]);
            process.send(`THROW\n@!!@${repr}\n${error.stack}`);
        },
    };
    process.on('uncaughtException', err => {
        Monitor.crashlog(err, 'A private message database process');
    });
    process.on('unhandledRejection', err => {
        Monitor.crashlog(err, 'A private message database process');
    });
}
function start(processCount) {
    if (!Config.usesqlite) {
        return;
    }
    exports.PM.spawn(processCount['pm'] ?? 1);
    // clear super old pms on startup
    void exports.PM.run(database_1.statements.clearDated, [Date.now(), exports.EXPIRY_TIME]);
}
