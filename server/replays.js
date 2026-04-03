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
exports.Replays = exports.replayPlayers = exports.replays = exports.replaysDB = void 0;
/**
 * Code for uploading and managing replays.
 *
 * Ported to TypeScript by Annika and Mia.
 */
const database_1 = require("../lib/database");
const crypto = __importStar(require("crypto"));
exports.replaysDB = Config.replaysdb ? new database_1.PGDatabase(Config.replaysdb) : null;
exports.replays = exports.replaysDB?.getTable('replays', 'id');
exports.replayPlayers = exports.replaysDB?.getTable('replayplayers');
exports.Replays = new class {
    constructor() {
        this.db = exports.replaysDB;
        this.replaysTable = exports.replays;
        this.replayPlayersTable = exports.replayPlayers;
        this.passwordCharacters = '0123456789abcdefghijklmnopqrstuvwxyz';
    }
    toReplay(row) {
        const replay = {
            ...row,
            players: row.players.split(',').map(player => player.startsWith('!') ? player.slice(1) : player),
        };
        if (!replay.password && replay.private === 1)
            replay.private = 2;
        return replay;
    }
    toReplays(rows) {
        return rows.map(row => exports.Replays.toReplay(row));
    }
    toReplayRow(replay) {
        const formatid = toID(replay.format);
        const replayData = {
            password: null,
            views: 0,
            ...replay,
            players: replay.players.join(','),
            formatid,
        };
        if (replayData.private === 1 && !replayData.password) {
            replayData.password = exports.Replays.generatePassword();
        }
        else {
            if (replayData.private === 2) {
                replayData.private = 1;
                replayData.password = null;
            }
        }
        return replayData;
    }
    async add(replay) {
        // obviously upsert exists but this is the easiest way when multiple things need to be changed
        const replayData = this.toReplayRow(replay);
        try {
            await exports.replays.insert(replayData);
            for (const playerName of replay.players) {
                await exports.replayPlayers.insert({
                    playerid: toID(playerName),
                    formatid: replayData.formatid,
                    id: replayData.id,
                    rating: replayData.rating,
                    uploadtime: replayData.uploadtime,
                    private: replayData.private,
                    password: replayData.password,
                    format: replayData.format,
                    players: replayData.players,
                });
            }
        }
        catch (e) {
            if (e?.routine !== 'NewUniquenessConstraintViolationError')
                throw e;
            await exports.replays.update(replay.id, {
                log: replayData.log,
                inputlog: replayData.inputlog,
                rating: replayData.rating,
                private: replayData.private,
                password: replayData.password,
            });
            await exports.replayPlayers.updateAll({
                rating: replayData.rating,
                private: replayData.private,
                password: replayData.password,
            }) `WHERE id = ${replay.id}`;
        }
        return replayData.id + (replayData.password ? `-${replayData.password}pw` : '');
    }
    async get(id) {
        const replayData = await exports.replays.get(id);
        if (!replayData)
            return null;
        await exports.replays.update(replayData.id, { views: (0, database_1.SQL) `views + 1` });
        return this.toReplay(replayData);
    }
    async edit(replay) {
        const replayData = this.toReplayRow(replay);
        await exports.replays.update(replay.id, { private: replayData.private, password: replayData.password });
    }
    generatePassword(length = 31) {
        let password = '';
        for (let i = 0; i < length; i++) {
            password += this.passwordCharacters[crypto.randomInt(0, this.passwordCharacters.length - 1)];
        }
        return password;
    }
    search(args) {
        const page = args.page || 0;
        if (page > 100)
            return Promise.resolve([]);
        let limit1 = 50 * (page - 1);
        if (limit1 < 0)
            limit1 = 0;
        const isPrivate = args.isPrivate ? 1 : 0;
        const format = args.format ? toID(args.format) : null;
        if (args.username) {
            const order = args.byRating ? (0, database_1.SQL) `ORDER BY rating DESC` : (0, database_1.SQL) `ORDER BY uploadtime DESC`;
            const userid = toID(args.username);
            if (args.username2) {
                const userid2 = toID(args.username2);
                if (format) {
                    return exports.replays.query() `SELECT 
							p1.uploadtime AS uploadtime, p1.id AS id, p1.format AS format, p1.players AS players, 
							p1.rating AS rating, p1.password AS password, p1.private AS private 
						FROM replayplayers p1 INNER JOIN replayplayers p2 ON p2.id = p1.id 
						WHERE p1.playerid = ${userid} AND p1.formatid = ${format} AND p1.private = ${isPrivate}
							AND p2.playerid = ${userid2} 
						${order} LIMIT ${limit1}, 51;`.then(this.toReplays);
                }
                else {
                    return exports.replays.query() `SELECT 
							p1.uploadtime AS uploadtime, p1.id AS id, p1.format AS format, p1.players AS players, 
							p1.rating AS rating, p1.password AS password, p1.private AS private 
						FROM replayplayers p1 INNER JOIN replayplayers p2 ON p2.id = p1.id 
						WHERE p1.playerid = ${userid} AND p1.private = ${isPrivate}
							AND p2.playerid = ${userid2} 
						${order} LIMIT ${limit1}, 51;`.then(this.toReplays);
                }
            }
            else {
                if (format) {
                    return exports.replays.query() `SELECT uploadtime, id, format, players, rating, password FROM replayplayers 
						WHERE playerid = ${userid} AND formatid = ${format} AND private = ${isPrivate} 
						${order} LIMIT ${limit1}, 51;`.then(this.toReplays);
                }
                else {
                    return exports.replays.query() `SELECT uploadtime, id, format, players, rating, password FROM replayplayers 
						WHERE playerid = ${userid} private = ${isPrivate} 
						${order} LIMIT ${limit1}, 51;`.then(this.toReplays);
                }
            }
        }
        if (args.byRating) {
            return exports.replays.query() `SELECT uploadtime, id, format, players, rating, password 
				FROM replays 
				WHERE private = ${isPrivate} AND formatid = ${format} ORDER BY rating DESC LIMIT ${limit1}, 51`
                .then(this.toReplays);
        }
        else {
            return exports.replays.query() `SELECT uploadtime, id, format, players, rating, password 
				FROM replays 
				WHERE private = ${isPrivate} AND formatid = ${format} ORDER BY uploadtime DESC LIMIT ${limit1}, 51`
                .then(this.toReplays);
        }
    }
    fullSearch(term, page = 0) {
        if (page > 0)
            return Promise.resolve([]);
        const patterns = term.split(',').map(subterm => {
            const escaped = subterm.replace(/%/g, '\\%').replace(/_/g, '\\_');
            return `%${escaped}%`;
        });
        if (patterns.length !== 1 && patterns.length !== 2)
            return Promise.resolve([]);
        const secondPattern = patterns.length >= 2 ? (0, database_1.SQL) `AND log LIKE ${patterns[1]} ` : undefined;
        return exports.replays.query() `SELECT /*+ MAX_EXECUTION_TIME(10000) */ 
			uploadtime, id, format, players, rating FROM ps_replays 
			WHERE private = 0 AND log LIKE ${patterns[0]} ${secondPattern}
			ORDER BY uploadtime DESC LIMIT 10;`.then(this.toReplays);
    }
    recent() {
        return exports.replays.selectAll((0, database_1.SQL) `uploadtime, id, format, players, rating`) `WHERE private = 0 ORDER BY uploadtime DESC LIMIT 50`.then(this.toReplays);
    }
};
exports.default = exports.Replays;
