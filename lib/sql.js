"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL = exports.DatabaseTable = exports.tables = exports.SQLDatabaseManager = exports.Statement = exports.DB_NOT_FOUND = void 0;
/**
 * Async worker thread wrapper around SQLite, written to improve concurrent performance.
 * @author mia-pi-git
 */
const process_manager_1 = require("./process-manager");
const fs_1 = require("./fs");
exports.DB_NOT_FOUND = null;
function getModule() {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore does not exist while building NPM package???
        return require('better-sqlite3');
    }
    catch {
        return null;
    }
}
class Statement {
    constructor(statement, db) {
        this.db = db;
        this.statement = statement;
    }
    run(data) {
        return this.db.run(this.statement, data);
    }
    all(data) {
        return this.db.all(this.statement, data);
    }
    get(data) {
        return this.db.get(this.statement, data);
    }
    toString() {
        return this.statement;
    }
    toJSON() {
        return this.statement;
    }
}
exports.Statement = Statement;
class SQLDatabaseManager extends process_manager_1.QueryProcessManager {
    constructor(id, module, options) {
        super(id, module, query => {
            if (!this.dbReady) {
                this.setupDatabase();
            }
            try {
                switch (query.type) {
                    case 'load-extension': {
                        if (!this.database)
                            return null;
                        this.loadExtensionFile(query.data);
                        return true;
                    }
                    case 'transaction': {
                        const transaction = this.state.transactions.get(query.name);
                        // !transaction covers db not existing, typically, but this is just to appease ts
                        if (!transaction || !this.database) {
                            return null;
                        }
                        const env = {
                            db: this.database,
                            statements: this.state.statements,
                        };
                        return transaction(query.data, env) || null;
                    }
                    case 'exec': {
                        if (!this.database)
                            return { changes: 0 };
                        this.database.exec(query.data);
                        return true;
                    }
                    case 'get': {
                        if (!this.database) {
                            return null;
                        }
                        return this.extractStatement(query).get(query.data);
                    }
                    case 'run': {
                        if (!this.database) {
                            return null;
                        }
                        return this.extractStatement(query).run(query.data);
                    }
                    case 'all': {
                        if (!this.database) {
                            return null;
                        }
                        return this.extractStatement(query).all(query.data);
                    }
                    case 'prepare':
                        if (!this.database) {
                            return null;
                        }
                        this.state.statements.set(query.data, this.database.prepare(query.data));
                        return query.data;
                }
            }
            catch (error) {
                return this.onError(error, query);
            }
        });
        this.database = null;
        this.dbReady = false;
        this.options = options;
        this.state = {
            transactions: new Map(),
            statements: new Map(),
        };
        if (!this.isParentProcess)
            this.setupDatabase();
    }
    onError(err, query) {
        err.message += ` [process ${process.pid}]`;
        if (this.options.onError) {
            const result = this.options.onError(err, query, false);
            if (result)
                return result;
        }
        return {
            queryError: {
                stack: err.stack,
                message: err.message,
                query,
            },
        };
    }
    cacheStatement(source) {
        source = source.trim();
        let statement = this.state.statements.get(source);
        if (!statement) {
            statement = this.database.prepare(source);
            this.state.statements.set(source, statement);
        }
        return statement;
    }
    registerFunction(key, cb) {
        this.database.function(key, cb);
    }
    extractStatement(query) {
        query.statement = query.statement.trim();
        const statement = query.noPrepare ?
            this.state.statements.get(query.statement) :
            this.cacheStatement(query.statement);
        if (!statement)
            throw new Error(`Missing cached statement "${query.statement}" where required`);
        return statement;
    }
    setupDatabase() {
        if (this.dbReady)
            return;
        this.dbReady = true;
        const { file, extension } = this.options;
        const Database = getModule();
        this.database = Database ? new Database(file) : null;
        if (extension)
            this.loadExtensionFile(extension);
    }
    loadExtensionFile(extension) {
        return this.handleExtensions(require('../' + extension));
    }
    handleExtensions(imports) {
        if (!this.database)
            return;
        const { functions, transactions: storedTransactions, statements: storedStatements, onDatabaseStart, } = imports;
        // migrations usually are run here, so this needs to be first
        if (onDatabaseStart) {
            onDatabaseStart.call(this, this.database);
        }
        if (functions) {
            for (const k in functions) {
                this.registerFunction(k, functions[k]);
            }
        }
        if (storedTransactions) {
            for (const t in storedTransactions) {
                const transaction = this.database.transaction(storedTransactions[t]);
                this.state.transactions.set(t, transaction);
            }
        }
        if (storedStatements) {
            for (const k in storedStatements) {
                const statement = this.database.prepare(storedStatements[k]);
                this.state.statements.set(statement.source, statement);
            }
        }
    }
    async query(input) {
        const result = await super.query(input);
        if (result?.queryError) {
            const err = new Error(result.queryError.message);
            err.stack = result.queryError.stack;
            if (this.options.onError) {
                const errResult = this.options.onError(err, result.queryError.query, true);
                if (errResult)
                    return errResult;
            }
            throw err;
        }
        return result;
    }
    all(statement, data = [], noPrepare) {
        if (typeof statement !== 'string')
            statement = statement.toString();
        return this.query({ type: 'all', statement, data, noPrepare });
    }
    get(statement, data = [], noPrepare) {
        if (typeof statement !== 'string')
            statement = statement.toString();
        return this.query({ type: 'get', statement, data, noPrepare });
    }
    run(statement, data = [], noPrepare) {
        if (typeof statement !== 'string')
            statement = statement.toString();
        return this.query({ type: 'run', statement, data, noPrepare });
    }
    transaction(name, data = []) {
        return this.query({ type: 'transaction', name, data });
    }
    async prepare(statement) {
        const source = await this.query({ type: 'prepare', data: statement });
        if (!source)
            return null;
        return new Statement(source, this);
    }
    exec(data) {
        return this.query({ type: 'exec', data });
    }
    loadExtension(filepath) {
        return this.query({ type: 'load-extension', data: filepath });
    }
    async runFile(file) {
        const contents = await (0, fs_1.FS)(file).read();
        return this.query({ type: 'exec', data: contents });
    }
}
exports.SQLDatabaseManager = SQLDatabaseManager;
exports.tables = new Map();
class DatabaseTable {
    constructor(name, primaryKeyName, database) {
        this.name = name;
        this.database = database;
        this.primaryKeyName = primaryKeyName;
        exports.tables.set(this.name, this);
    }
    async selectOne(entries, where) {
        const query = where || exports.SQL.SQL ``;
        query.append(' LIMIT 1');
        const rows = await this.selectAll(entries, query);
        return rows?.[0] || null;
    }
    selectAll(entries, where) {
        const query = exports.SQL.SQL `SELECT `;
        if (typeof entries === 'string') {
            query.append(` ${entries} `);
        }
        else {
            for (let i = 0; i < entries.length; i++) {
                query.append(entries[i]);
                if (typeof entries[i + 1] !== 'undefined')
                    query.append(', ');
            }
            query.append(' ');
        }
        query.append(`FROM ${this.name} `);
        if (where) {
            query.append(' WHERE ');
            query.append(where);
        }
        return this.all(query);
    }
    get(entries, keyId) {
        const query = exports.SQL.SQL ``;
        query.append(this.primaryKeyName);
        query.append(exports.SQL.SQL ` = ${keyId}`);
        return this.selectOne(entries, query);
    }
    updateAll(toParams, where, limit) {
        const to = Object.entries(toParams);
        const query = exports.SQL.SQL `UPDATE `;
        query.append(this.name + ' SET ');
        for (let i = 0; i < to.length; i++) {
            const [k, v] = to[i];
            query.append(`${k} = `);
            query.append(exports.SQL.SQL `${v}`);
            if (typeof to[i + 1] !== 'undefined') {
                query.append(', ');
            }
        }
        if (where) {
            query.append(` WHERE `);
            query.append(where);
        }
        if (limit)
            query.append(exports.SQL.SQL ` LIMIT ${limit}`);
        return this.run(query);
    }
    updateOne(to, where) {
        return this.updateAll(to, where, 1);
    }
    deleteAll(where, limit) {
        const query = exports.SQL.SQL `DELETE FROM `;
        query.append(this.name);
        if (where) {
            query.append(' WHERE ');
            query.append(where);
        }
        if (limit) {
            query.append(exports.SQL.SQL ` LIMIT ${limit}`);
        }
        return this.run(query);
    }
    delete(keyEntry) {
        const query = exports.SQL.SQL ``;
        query.append(this.primaryKeyName);
        query.append(exports.SQL.SQL ` = ${keyEntry}`);
        return this.deleteOne(query);
    }
    deleteOne(where) {
        return this.deleteAll(where, 1);
    }
    insert(colMap, rest, isReplace = false) {
        const query = exports.SQL.SQL ``;
        query.append(`${isReplace ? 'REPLACE' : 'INSERT'} INTO ${this.name} (`);
        const keys = Object.keys(colMap);
        for (let i = 0; i < keys.length; i++) {
            query.append(keys[i]);
            if (typeof keys[i + 1] !== 'undefined')
                query.append(', ');
        }
        query.append(') VALUES (');
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            query.append(exports.SQL.SQL `${colMap[key]}`);
            if (typeof keys[i + 1] !== 'undefined')
                query.append(', ');
        }
        query.append(') ');
        if (rest)
            query.append(rest);
        return this.database.run(query.sql, query.values);
    }
    replace(cols, rest) {
        return this.insert(cols, rest, true);
    }
    update(primaryKey, data) {
        const query = exports.SQL.SQL ``;
        query.append(this.primaryKeyName + ' = ');
        query.append(exports.SQL.SQL `${primaryKey}`);
        return this.updateOne(data, query);
    }
    // catch-alls for "we can't fit this query into any of the wrapper functions"
    run(sql) {
        return this.database.run(sql.sql, sql.values);
    }
    all(sql) {
        return this.database.all(sql.sql, sql.values);
    }
}
exports.DatabaseTable = DatabaseTable;
function getSQL(id, module, input) {
    if (typeof input === 'undefined')
        throw new Error(`SQLDatabaseManager factory requires 3 arguments.`);
    if ('processes' in input)
        throw new Error(`Passing process count to SQLDatabaseManager factory no longer supported.`);
    return new SQLDatabaseManager(id, module, input);
}
exports.SQL = Object.assign(getSQL, {
    DatabaseTable,
    SQLDatabaseManager,
    tables: exports.tables,
    SQL: (() => {
        try {
            return require('sql-template-strings');
        }
        catch {
            return () => {
                throw new Error("Using SQL-template-strings without it installed");
            };
        }
    })(),
});
