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
exports.readyPromise = void 0;
/**
 * Main file
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * This is the main Pokemon Showdown app, and the file that the
 * `pokemon-showdown` script runs if you start Pokemon Showdown normally.
 *
 * This file sets up our SockJS server, which handles communication
 * between users and your server, and also sets up globals. You can
 * see details in their corresponding files, but here's an overview:
 *
 * Users - from users.ts
 *
 *   Most of the communication with users happens in users.ts, we just
 *   forward messages between the sockets.js and users.ts.
 *
 *   It exports the global tables `Users.users` and `Users.connections`.
 *
 * Rooms - from rooms.ts
 *
 *   Every chat room and battle is a room, and what they do is done in
 *   rooms.ts. There's also a global room which every user is in, and
 *   handles miscellaneous things like welcoming the user.
 *
 *   It exports the global table `Rooms.rooms`.
 *
 * Dex - from sim/dex.ts
 *
 *   Handles getting data about Pokemon, items, etc.
 *
 * Ladders - from ladders.ts and ladders-remote.ts
 *
 *   Handles Elo rating tracking for players.
 *
 * Chat - from chat.ts
 *
 *   Handles chat and parses chat commands like /me and /ban
 *
 * Sockets - from sockets.js
 *
 *   Used to abstract out network connections. sockets.js handles
 *   the actual server and connection set-up.
 *
 * @license MIT
 */
try {
    require('source-map-support').install();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
}
catch (e) {
}
// NOTE: This file intentionally doesn't use too many modern JavaScript
// features, so that it doesn't crash old versions of Node.js, so we
// can successfully print the "We require Node.js 22+" message.
// I've gotten enough reports by people who don't use the launch
// script that this is worth repeating here
try {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    fetch;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
}
catch (e) {
    throw new Error("We require Node.js version 22 or later; you're using " + process.version);
}
try {
    require.resolve('ts-chacha20');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
}
catch (e) {
    throw new Error("Dependencies are unmet; run `npm ci` before launching Pokemon Showdown again.");
}
// Note that `import` declarations are run before any other code
const lib_1 = require("../lib");
const ConfigLoader = __importStar(require("./config-loader"));
const sockets_1 = require("./sockets");
function cleanupStale() {
    return lib_1.Repl.cleanup();
}
function setupGlobals() {
    const { Monitor } = require('./monitor');
    global.Monitor = Monitor;
    global.__version = { head: '' };
    void Monitor.version().then((hash) => {
        global.__version.tree = hash;
    });
    const { Dex } = require('../sim/dex');
    global.Dex = Dex;
    global.toID = Dex.toID;
    const { Chat } = require('./chat');
    global.Chat = Chat;
    const { Rooms } = require('./rooms');
    global.Rooms = Rooms;
    // We initialize the global room here because roomlogs.ts needs the Rooms global
    Rooms.global = new Rooms.GlobalRoomState();
    const { Teams } = require('../sim/teams');
    global.Teams = Teams;
    const { LoginServer } = require('./loginserver');
    global.LoginServer = LoginServer;
    const { Ladders } = require('./ladders');
    global.Ladders = Ladders;
    const { Users } = require('./users');
    global.Users = Users;
    const { Punishments } = require('./punishments');
    global.Punishments = Punishments;
    const Verifier = require('./verifier');
    global.Verifier = Verifier;
    const { Tournaments } = require('./tournaments');
    global.Tournaments = Tournaments;
    const { IPTools } = require('./ip-tools');
    global.IPTools = IPTools;
    void IPTools.loadHostsAndRanges();
    const TeamValidatorAsync = require('./team-validator-async');
    global.TeamValidatorAsync = TeamValidatorAsync;
    global.Sockets = sockets_1.Sockets;
    if (!Config.lazysockets) {
        sockets_1.Sockets.start(Config.subprocessescache);
    }
}
exports.readyPromise = cleanupStale().then(() => {
    setupGlobals();
}).then(() => {
    if (Config.usesqlite) {
        require('./modlog').start(Config.subprocessescache);
    }
    Rooms.global.start(Config.subprocessescache);
    Verifier.start(Config.subprocessescache);
    TeamValidatorAsync.start(Config.subprocessescache);
    Chat.start(Config.subprocessescache);
    /*********************************************************
     * Monitor config file and display diagnostics
     *********************************************************/
    if (Config.watchconfig) {
        ConfigLoader.watch();
    }
    ConfigLoader.flushLog();
    /*********************************************************
     * On error continue - enabled by default
     *********************************************************/
    if (Config.crashguard) {
        // graceful crash - allow current battles to finish before restarting
        process.on('uncaughtException', (err) => {
            Monitor.crashlog(err, 'The main process');
        });
        process.on('unhandledRejection', err => {
            // TODO:
            // - Compatibility with https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode
            // - Crashlogger API for reporting rejections vs exceptions
            Monitor.crashlog(err, 'A main process Promise');
        });
    }
    /*********************************************************
     * Start up the REPL server
     *********************************************************/
    lib_1.Repl.startGlobal('app');
    /*********************************************************
     * Fully initialized, run startup hook
     *********************************************************/
    if (Config.startuphook) {
        process.nextTick(Config.startuphook);
    }
    if (Config.ofemain) {
        // Create a heapdump if the process runs out of memory.
        global.nodeOomHeapdump = require('node-oom-heapdump')({
            addTimestamp: true,
        });
    }
});
