"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactions = exports.statements = void 0;
exports.onDatabaseStart = onDatabaseStart;
/**
 * Storage handling for offline PMs.
 * By Mia.
 * @author mia-pi-git
 */
const lib_1 = require("../../lib");
const _1 = require(".");
exports.statements = {
    send: 'INSERT INTO offline_pms (sender, receiver, message, time) VALUES (?, ?, ?, ?)',
    clear: 'DELETE FROM offline_pms WHERE receiver = ?',
    fetch: 'SELECT * FROM offline_pms WHERE receiver = ?',
    fetchNew: 'SELECT * FROM offline_pms WHERE receiver = ? AND seen IS NULL',
    clearDated: 'DELETE FROM offline_pms WHERE ? - time >= ?',
    checkSentCount: 'SELECT count(*) as count FROM offline_pms WHERE sender = ? AND receiver = ?',
    setSeen: 'UPDATE offline_pms SET seen = ? WHERE receiver = ? AND seen IS NULL',
    clearSeen: 'DELETE FROM offline_pms WHERE ? - seen >= ?',
    getSettings: 'SELECT * FROM pm_settings WHERE userid = ?',
    setBlock: 'REPLACE INTO pm_settings (userid, view_only) VALUES (?, ?)',
    deleteSettings: 'DELETE FROM pm_settings WHERE userid = ?',
};
class StatementMap {
    constructor(env) {
        this.env = env;
    }
    run(name, args) {
        return this.getStatement(name).run(args);
    }
    all(name, args) {
        return this.getStatement(name).all(args);
    }
    get(name, args) {
        return this.getStatement(name).get(args);
    }
    getStatement(name) {
        const source = exports.statements[name];
        return this.env.statements.get(source);
    }
}
exports.transactions = {
    send: (args, env) => {
        const statementList = new StatementMap(env);
        const [sender, receiver, message] = args;
        const count = statementList.get('checkSentCount', [sender, receiver])?.count;
        if (count && count > _1.MAX_PENDING) {
            return { error: `You have already sent the maximum ${_1.MAX_PENDING} offline PMs to that user.` };
        }
        return statementList.run('send', [sender, receiver, message, Date.now()]);
    },
    listNew: (args, env) => {
        const list = new StatementMap(env);
        const [receiver] = args;
        const pms = list.all('fetchNew', [receiver]);
        list.run('setSeen', [Date.now(), receiver]);
        return pms;
    },
};
function onDatabaseStart(database) {
    let version;
    try {
        version = database.prepare('SELECT * FROM db_info').get().version;
    }
    catch {
        const schemaContent = (0, lib_1.FS)('databases/schemas/pms.sql').readSync();
        database.exec(schemaContent);
    }
    const migrations = (0, lib_1.FS)('databases/migrations/pms').readdirIfExistsSync();
    if (version !== migrations.length) {
        for (const migration of migrations) {
            const num = /(\d+)\.sql$/.exec(migration)?.[1];
            if (!num || version >= num)
                continue;
            database.exec('BEGIN TRANSACTION');
            try {
                database.exec((0, lib_1.FS)(`databases/migrations/pms/${migration}`).readSync());
            }
            catch (e) {
                console.log(`Error in PM migration ${migration} - ${e.message}`);
                console.log(e.stack);
                database.exec('ROLLBACK');
                continue;
            }
            database.exec('COMMIT');
        }
    }
}
