"use strict";
/**
 * Monitor
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Various utility functions to make sure PS is running healthily.
 *
 * @license MIT
 */
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
exports.Monitor = exports.TimedCounter = void 0;
const child_process_1 = require("child_process");
const lib_1 = require("../lib");
const pathModule = __importStar(require("path"));
const MONITOR_CLEAN_TIMEOUT = 2 * 60 * 60 * 1000;
/**
 * This counts the number of times an action has been committed, and tracks the
 * delta of time since the last time it was committed. Actions include
 * connecting to the server, starting a battle, validating a team, and
 * sending/receiving data over a connection's socket.
 */
class TimedCounter extends Map {
    /**
     * Increments the number of times an action has been committed by one, and
     * updates the delta of time since it was last committed.
     *
     * @returns [action count, time delta]
     */
    increment(key, timeLimit) {
        const val = this.get(key);
        const now = Date.now();
        if (!val || now > val[1] + timeLimit) {
            this.set(key, [1, Date.now()]);
            return [1, 0];
        }
        else {
            val[0]++;
            return [val[0], now - val[1]];
        }
    }
}
exports.TimedCounter = TimedCounter;
// Config.loglevel is:
// 0 = everything
// 1 = debug (same as 0 for now)
// 2 = notice (default)
// 3 = warning
// (4 is currently unused)
// 5 = supposedly completely silent, but for now a lot of PS output doesn't respect loglevel
if (('Config' in global) &&
    (typeof Config.loglevel !== 'number' || Config.loglevel < 0 || Config.loglevel > 5)) {
    Config.loglevel = 2;
}
exports.Monitor = new class {
    constructor() {
        this.connections = new TimedCounter();
        this.netRequests = new TimedCounter();
        this.battles = new TimedCounter();
        this.battlePreps = new TimedCounter();
        this.groupChats = new TimedCounter();
        this.tickets = new TimedCounter();
        this.activeIp = null;
        this.networkUse = {};
        this.networkCount = {};
        this.hotpatchLock = {};
        this.TimedCounter = TimedCounter;
        this.updateServerLock = false;
        this.cleanInterval = null;
        /**
         * Inappropriate userid : has the user logged in since the FR
         */
        this.forceRenames = new Map();
    }
    /*********************************************************
     * Logging
     *********************************************************/
    crashlog(err, source = 'The main process', details = null) {
        const error = (err || {});
        if ((error.stack || '').startsWith('@!!@')) {
            try {
                const stack = (error.stack || '');
                const nlIndex = stack.indexOf('\n');
                [error.name, error.message, source, details] = JSON.parse(stack.slice(4, nlIndex));
                error.stack = stack.slice(nlIndex + 1);
            }
            catch { }
        }
        const crashType = (0, lib_1.crashlogger)(error, source, details);
        Rooms.global.reportCrash(error, source);
        if (crashType === 'lockdown') {
            Config.autolockdown = false;
            Rooms.global.startLockdown(error);
        }
    }
    logPath(path) {
        if (Config.logsdir) {
            return (0, lib_1.FS)(pathModule.join(Config.logsdir, path));
        }
        return (0, lib_1.FS)(pathModule.join('logs', path));
    }
    log(text) {
        this.notice(text);
        const staffRoom = Rooms.get('staff');
        if (staffRoom) {
            staffRoom.add(`|c|~|${text}`).update();
        }
    }
    adminlog(text) {
        this.notice(text);
        const upperstaffRoom = Rooms.get('upperstaff');
        if (upperstaffRoom) {
            upperstaffRoom.add(`|c|~|${text}`).update();
        }
    }
    logHTML(text) {
        this.notice(text);
        const staffRoom = Rooms.get('staff');
        if (staffRoom) {
            staffRoom.add(`|html|${text}`).update();
        }
    }
    error(text) {
        const room = (Rooms.get('development') || Rooms.get('staff') || Rooms.get('lobby'));
        room?.add(`|error|${text}`).update();
        if (Config.loglevel <= 3)
            console.error(text);
    }
    debug(text) {
        if (Config.loglevel <= 1)
            console.log(text);
    }
    warn(text) {
        if (Config.loglevel <= 3)
            console.log(text);
    }
    notice(text) {
        if (Config.loglevel <= 2)
            console.log(text);
    }
    logWithLevel(level, text) {
        switch (level) {
            case 'debug':
                return this.debug(text);
            case 'notice':
                return this.notice(text);
            case 'warning':
                return this.warn(text);
            case 'error':
                return this.error(text);
        }
    }
    slow(text) {
        const logRoom = Rooms.get('slowlog');
        if (logRoom) {
            logRoom.add(`|c|~|/log ${text}`).update();
        }
        else {
            this.warn(text);
        }
    }
    /*********************************************************
     * Resource Monitor
     *********************************************************/
    clean() {
        this.clearNetworkUse();
        this.battlePreps.clear();
        this.battles.clear();
        this.connections.clear();
        IPTools.dnsblCache.clear();
    }
    /**
     * Counts a connection. Returns true if the connection should be terminated for abuse.
     */
    countConnection(ip, name = '') {
        if (Config.noipchecks || Config.nothrottle)
            return false;
        const [count, duration] = this.connections.increment(ip, 30 * 60 * 1000);
        if (count === 500) {
            this.adminlog(`[ResourceMonitor] IP ${ip} banned for cflooding (${count} times in ${Chat.toDurationString(duration)}${name ? ': ' + name : ''})`);
            return true;
        }
        if (count > 500) {
            if (count % 500 === 0) {
                const c = count / 500;
                if (c === 2 || c === 4 || c === 10 || c === 20 || c % 40 === 0) {
                    this.adminlog(`[ResourceMonitor] IP ${ip} still cflooding (${count} times in ${Chat.toDurationString(duration)}${name ? ': ' + name : ''})`);
                }
            }
            return true;
        }
        return false;
    }
    /**
     * Counts battles created. Returns true if the connection should be
     * terminated for abuse.
     */
    countBattle(ip, name = '') {
        if (Config.noipchecks || Config.nothrottle)
            return false;
        const [count, duration] = this.battles.increment(ip, 30 * 60 * 1000);
        if (duration < 5 * 60 * 1000 && count % 30 === 0) {
            this.adminlog(`[ResourceMonitor] IP ${ip} has battled ${count} times in the last ${Chat.toDurationString(duration)}${name ? ': ' + name : ''})`);
            return true;
        }
        if (count % 150 === 0) {
            this.adminlog(`[ResourceMonitor] IP ${ip} has battled ${count} times in the last ${Chat.toDurationString(duration)}${name ? ': ' + name : ''}`);
            return true;
        }
        return false;
    }
    /**
     * Counts team validations. Returns true if too many.
     */
    countPrepBattle(ip, connection) {
        if (Config.noipchecks || Config.nothrottle)
            return false;
        const count = this.battlePreps.increment(ip, 3 * 60 * 1000)[0];
        if (count <= 12)
            return false;
        if (count < 120 && Punishments.isSharedIp(ip))
            return false;
        connection.popup('Due to high load, you are limited to 12 battles and team validations every 3 minutes.');
        return true;
    }
    /**
     * Counts concurrent battles. Returns true if too many.
     */
    countConcurrentBattle(count, connection) {
        if (Config.noipchecks || Config.nothrottle)
            return false;
        if (count <= 5)
            return false;
        connection.popup(`Due to high load, you are limited to 5 games at the same time.`);
        return true;
    }
    /**
     * Counts group chat creation. Returns true if too much.
     */
    countGroupChat(ip) {
        if (Config.noipchecks)
            return false;
        const count = this.groupChats.increment(ip, 60 * 60 * 1000)[0];
        return count > 4;
    }
    /**
     * Counts commands that use HTTPs requests. Returns true if too many.
     */
    countNetRequests(ip) {
        if (Config.noipchecks || Config.nothrottle)
            return false;
        const [count] = this.netRequests.increment(ip, 1 * 60 * 1000);
        if (count <= 10)
            return false;
        if (count < 120 && Punishments.isSharedIp(ip))
            return false;
        return true;
    }
    /**
     * Counts ticket creation. Returns true if too much.
     */
    countTickets(ip) {
        if (Config.noipchecks || Config.nothrottle)
            return false;
        const count = this.tickets.increment(ip, 60 * 60 * 1000)[0];
        if (Punishments.isSharedIp(ip)) {
            return count >= 20;
        }
        else {
            return count >= 5;
        }
    }
    /**
     * Counts the data length received by the last connection to send a
     * message, as well as the data length in the server's response.
     */
    countNetworkUse(size) {
        if (!Config.emergency || typeof this.activeIp !== 'string' ||
            Config.noipchecks || Config.nothrottle) {
            return;
        }
        if (this.activeIp in this.networkUse) {
            this.networkUse[this.activeIp] += size;
            this.networkCount[this.activeIp]++;
        }
        else {
            this.networkUse[this.activeIp] = size;
            this.networkCount[this.activeIp] = 1;
        }
    }
    writeNetworkUse() {
        let buf = '';
        for (const i in this.networkUse) {
            buf += `${this.networkUse[i]}\t${this.networkCount[i]}\t${i}\n`;
        }
        void exports.Monitor.logPath('networkuse.tsv').write(buf);
    }
    clearNetworkUse() {
        if (Config.emergency) {
            this.networkUse = {};
            this.networkCount = {};
        }
    }
    /**
     * Counts roughly the size of an object to have an idea of the server load.
     */
    sizeOfObject(object) {
        const objectCache = new Set();
        const stack = [object];
        let bytes = 0;
        while (stack.length) {
            const value = stack.pop();
            switch (typeof value) {
                case 'boolean':
                    bytes += 4;
                    break;
                case 'string':
                    bytes += value.length * 2;
                    break;
                case 'number':
                    bytes += 8;
                    break;
                case 'object':
                    if (!objectCache.has(value))
                        objectCache.add(value);
                    if (Array.isArray(value)) {
                        for (const el of value)
                            stack.push(el);
                    }
                    else {
                        for (const i in value)
                            stack.push(value[i]);
                    }
                    break;
            }
        }
        return bytes;
    }
    sh(command, options = {}) {
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(command, options, (error, stdout, stderr) => {
                resolve([error?.code || 0, `${stdout}`, `${stderr}`]);
            });
        });
    }
    async version() {
        let hash;
        try {
            await (0, lib_1.FS)('.git/index').copyFile(exports.Monitor.logPath('.gitindex').path);
            const index = exports.Monitor.logPath('.gitindex');
            const options = {
                cwd: __dirname,
                env: { GIT_INDEX_FILE: index.path },
            };
            let [code, stdout, stderr] = await this.sh(`git add -A`, options);
            if (code || stderr)
                return;
            [code, stdout, stderr] = await this.sh(`git write-tree`, options);
            if (code || stderr)
                return;
            hash = stdout.trim();
            await this.sh(`git reset`, options);
            await index.unlinkIfExists();
        }
        catch { }
        return hash;
    }
};
exports.Monitor.cleanInterval = setInterval(() => exports.Monitor.clean(), MONITOR_CLEAN_TIMEOUT);
