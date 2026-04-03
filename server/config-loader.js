"use strict";
/**
 * Config loader
 * Pokemon Showdown - http://pokemonshowdown.com/
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
exports.load = load;
exports.cacheGroupData = cacheGroupData;
exports.checkRipgrepAvailability = checkRipgrepAvailability;
exports.flushLog = flushLog;
exports.ensureLoaded = ensureLoaded;
exports.watch = watch;
const defaults = __importStar(require("../config/config-example"));
const lib_1 = require("../lib");
/** Map<process flag, config settings for it to turn on> */
const FLAG_PRESETS = new Map([
    ['--no-security', ['nothrottle', 'noguestsecurity', 'noipchecks']],
]);
const processTypes = [
    'localartemis', 'remoteartemis', 'battlesearch', 'datasearch', 'friends',
    'chatdb', 'pm', 'modlog', 'network', 'simulator', 'validator', 'verifier',
];
const CONFIG_PATH = (0, lib_1.FS)('./config/config.js').path;
const errors = [];
function load(invalidate = false) {
    if (global.Config) {
        if (!invalidate)
            return global.Config;
        delete require.cache[CONFIG_PATH];
    }
    const config = ({ ...defaults, ...require(CONFIG_PATH) });
    // config.routes is nested - we need to ensure values are set for its keys as well.
    config.routes = { ...defaults.routes, ...config.routes };
    if (!process.send) {
        // Automatically stop startup if optional dependencies are enabled yet missing
        if (config.usesqlite) {
            try {
                require.resolve('better-sqlite3');
            }
            catch {
                throw new Error(`better-sqlite3 is not installed or could not be loaded, but Config.usesqlite is enabled.`);
            }
        }
        if (config.ofemain) {
            try {
                require.resolve('node-oom-heapdump');
            }
            catch {
                throw new Error(`node-oom-heapdump is not installed, but it is a required dependency if Config.ofemain is set to true! ` +
                    `Run npm install node-oom-heapdump and restart the server.`);
            }
        }
    }
    for (const [preset, values] of FLAG_PRESETS) {
        if (process.argv.includes(preset)) {
            for (const value of values)
                config[value] = true;
        }
    }
    cacheSubProcesses(config);
    cacheGroupData(config);
    global.Config = config;
    return config;
}
function cacheSubProcesses(config) {
    if (config.subprocesses !== undefined) {
        // Leniently accept all other falsy values, including `null`.
        const value = config.subprocesses || 0;
        if (value === 0 || value === 1) {
            // https://github.com/microsoft/TypeScript/issues/35745
            config.subprocessescache = Object.fromEntries(processTypes.map(k => [k, value]));
        }
        else if (typeof value === 'object' && !Array.isArray(value)) {
            config.subprocessescache = value;
        }
        else {
            pushError('error', `Invalid \`subprocesses\` specification. Use any of 0, 1, or a plain old object.`);
        }
    }
    config.subprocessescache ?? (config.subprocessescache = {});
    const deprecatedKeys = [];
    if ('workers' in config) {
        deprecatedKeys.push('workers');
        config.subprocessescache.network = config.workers;
    }
    for (const processType of processTypes) {
        if (processType === 'network')
            continue;
        const compatKey = `${processType}processes`;
        if (compatKey in config) {
            deprecatedKeys.push(compatKey);
            config.subprocessescache[processType] = config[compatKey];
        }
    }
    for (const compatKey of deprecatedKeys) {
        pushError('warning', `You are using \`${compatKey}\`, which is deprecated\n` +
            `Support for this may be removed.\n` +
            `Please ensure that you update your config.js to use \`subprocesses\` (see config-example.js, line 80).\n`);
    }
}
function cacheGroupData(config) {
    if (config.groups) {
        // Support for old config groups format.
        // Should be removed soon.
        pushError('warning', `You are using a deprecated version of user group specification in config.\n` +
            `Support for this may be removed.\n` +
            `Please ensure that you update your config.js to the new format (see config-example.js, line 521).\n`);
    }
    else {
        config.punishgroups = Object.create(null);
        config.groups = Object.create(null);
        config.groupsranking = [];
        config.greatergroupscache = Object.create(null);
    }
    const groups = config.groups;
    const punishgroups = config.punishgroups;
    const cachedGroups = {};
    function isPermission(key) {
        return !['symbol', 'id', 'name', 'rank', 'globalGroupInPersonalRoom'].includes(key);
    }
    function cacheGroup(symbol, groupData) {
        if (cachedGroups[symbol] === 'processing') {
            throw new Error(`Cyclic inheritance in group config for symbol "${symbol}"`);
        }
        if (cachedGroups[symbol] === true)
            return;
        for (const key in groupData) {
            if (isPermission(key)) {
                const jurisdiction = groupData[key];
                if (typeof jurisdiction === 'string' && jurisdiction.includes('s')) {
                    pushError('warning', `Outdated jurisdiction for permission "${key}" of group "${symbol}": 's' is no longer a supported jurisdiction; we now use 'ipself' and 'altsself'`);
                    delete groupData[key];
                }
            }
        }
        if (groupData['inherit']) {
            cachedGroups[symbol] = 'processing';
            const inheritGroup = groups[groupData['inherit']];
            cacheGroup(groupData['inherit'], inheritGroup);
            // Add lower group permissions to higher ranked groups,
            // preserving permissions specifically declared for the higher group.
            for (const key in inheritGroup) {
                if (key in groupData)
                    continue;
                if (!isPermission(key))
                    continue;
                groupData[key] = inheritGroup[key];
            }
            delete groupData['inherit'];
        }
        cachedGroups[symbol] = true;
    }
    if (config.grouplist) { // Using new groups format.
        const grouplist = config.grouplist;
        const numGroups = grouplist.length;
        for (let i = 0; i < numGroups; i++) {
            const groupData = grouplist[i];
            // punish groups
            if (groupData.punishgroup) {
                punishgroups[groupData.id] = groupData;
                continue;
            }
            groupData.rank = numGroups - i - 1;
            groups[groupData.symbol] = groupData;
            config.groupsranking.unshift(groupData.symbol);
        }
    }
    for (const sym in groups) {
        const groupData = groups[sym];
        cacheGroup(sym, groupData);
    }
    // hardcode default punishgroups.
    if (!punishgroups.locked) {
        punishgroups.locked = {
            name: 'Locked',
            id: 'locked',
            symbol: '\u203d',
        };
    }
    if (!punishgroups.muted) {
        punishgroups.muted = {
            name: 'Muted',
            id: 'muted',
            symbol: '!',
        };
    }
}
function checkRipgrepAvailability() {
    if (Config.ripgrepmodlog === undefined) {
        const cwd = lib_1.FS.ROOT_PATH;
        Config.ripgrepmodlog = (async () => {
            try {
                await lib_1.ProcessManager.exec(['rg', '--version'], { cwd });
                await lib_1.ProcessManager.exec(['tac', '--version'], { cwd });
                return true;
            }
            catch {
                return false;
            }
        })();
    }
    return Config.ripgrepmodlog;
}
function pushError(logLevel, msg) {
    if (process.send)
        return;
    errors.push([logLevel, `[CONFIG] ${msg}`]);
}
function flushLog() {
    for (const entry of errors) {
        Monitor.logWithLevel(entry[0], entry[1]);
    }
    errors.length = 0;
}
function ensureLoaded() {
    // Call to prevent unused import ellision
}
function watch() {
    (0, lib_1.FS)('config/config.js').onModify(() => {
        if (!Config.watchconfig)
            return;
        try {
            load(true);
            flushLog();
            // ensure that battle prefixes configured via the chat plugin are not overwritten
            // by battle prefixes manually specified in config.js
            Chat.plugins['username-prefixes']?.prefixManager.refreshConfig(true);
            Monitor.notice('Reloaded ../config/config.js');
        }
        catch (e) {
            Monitor.adminlog("Error reloading ../config/config.js: " + e.stack);
        }
    });
}
load();
// Note: Do NOT export Config name binding, so that importing it doesn't shadow global.Config
