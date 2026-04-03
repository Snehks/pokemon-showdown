"use strict";
/**
 * Database abstraction layer that's vaguely ORM-like.
 * Modern (Promises, strict types, tagged template literals), but ORMs
 * are a bit _too_ magical for me, so none of that magic here.
 *
 * @author Zarel
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
exports.PGDatabase = exports.MySQLDatabase = exports.DatabaseTable = exports.Database = exports.connectedDatabases = exports.SQLStatement = void 0;
exports.isSQL = isSQL;
exports.SQL = SQL;
const mysql = __importStar(require("mysql2"));
const pg = __importStar(require("pg"));
function isSQL(value) {
    /**
     * This addresses a scenario where objects get out of sync due to hotpatching.
     * Table A is instantiated, and retains SQLStatement at that specific point in time. Consumer A is also instantiated at
     * the same time, and both can interact freely, since consumer A and table A share the same reference to SQLStatement.
     * However, when consumer A is hotpatched, consumer A imports a new instance of SQLStatement. Thus, when consumer A
     * provides that new SQLStatement, it does not pass the `instanceof SQLStatement` check in Table A,
     * since table A is still referencing he old SQLStatement (checking that the new is an instance of the old).
     * This does not work. Thus, we're forced to check constructor name instead.
     */
    return value instanceof SQLStatement || (
    // assorted safety checks to be sure it'll actually work (theoretically preventing certain attacks)
    value?.constructor.name === 'SQLStatement' && (Array.isArray(value.sql) && Array.isArray(value.values)));
}
class SQLStatement {
    constructor(strings, values) {
        this.sql = [strings[0]];
        this.values = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.append(values[i]).appendRaw(strings[i + 1]);
        }
    }
    appendRaw(str) {
        this.sql[this.sql.length - 1] += str;
        return this;
    }
    append(value) {
        if (isSQL(value)) {
            if (!value.sql.length)
                return this;
            this.appendRaw(value.sql[0]);
            this.sql = this.sql.concat(value.sql.slice(1));
            this.values = this.values.concat(value.values);
        }
        else if (typeof value === 'string' || typeof value === 'number' || value === null) {
            this.values.push(value);
            this.sql.push('');
        }
        else if (value === undefined) {
            // do nothing
        }
        else if (Array.isArray(value)) {
            if (!value.length || isSQL(value[0])) {
                // array of SQL statements
                for (const part of value)
                    this.append(part);
            }
            else if ('"`'.includes(this.sql[this.sql.length - 1].slice(-1))) {
                // "`a`, `b`" syntax
                const quoteChar = this.sql[this.sql.length - 1].slice(-1);
                for (const col of value) {
                    this.append(col).appendRaw(`${quoteChar}, ${quoteChar}`);
                }
                this.sql[this.sql.length - 1] = this.sql[this.sql.length - 1].slice(0, -4);
            }
            else {
                // "1, 2" syntax
                for (const val of value) {
                    this.append(val).appendRaw(`, `);
                }
                this.sql[this.sql.length - 1] = this.sql[this.sql.length - 1].slice(0, -2);
            }
        }
        else if (this.sql[this.sql.length - 1].endsWith('(')) {
            // "(`a`, `b`) VALUES (1, 2)" syntax
            this.appendRaw(`"`);
            for (const col in value) {
                this.append(col).appendRaw(`", "`);
            }
            this.sql[this.sql.length - 1] = this.sql[this.sql.length - 1].slice(0, -4) + `") VALUES (`;
            for (const col in value) {
                this.append(value[col]).appendRaw(`, `);
            }
            this.sql[this.sql.length - 1] = this.sql[this.sql.length - 1].slice(0, -2);
        }
        else if (this.sql[this.sql.length - 1].toUpperCase().endsWith(' SET ')) {
            // "`a` = 1, `b` = 2" syntax
            this.appendRaw(`"`);
            for (const col in value) {
                this.append(col).appendRaw(`" = `);
                this.append(value[col]).appendRaw(`, "`);
            }
            this.sql[this.sql.length - 1] = this.sql[this.sql.length - 1].slice(0, -3);
        }
        else {
            throw new Error(`Objects can only appear in (obj) or after SET; ` +
                `unrecognized: ${this.sql[this.sql.length - 1]}[obj]`);
        }
        return this;
    }
}
exports.SQLStatement = SQLStatement;
/**
 * Tag function for SQL, with some magic.
 *
 * * `` SQL`UPDATE table SET a = ${'hello"'}` ``
 *   * `` `UPDATE table SET a = 'hello'` ``
 *
 * Values surrounded by `"` or `` ` `` become identifiers:
 *
 * * ``` SQL`SELECT * FROM "${'table'}"` ```
 *   * `` `SELECT * FROM "table"` ``
 *
 * (Make sure to use `"` for Postgres and `` ` `` for MySQL.)
 *
 * Objects preceded by SET become setters:
 *
 * * `` SQL`UPDATE table SET ${{a: 1, b: 2}}` ``
 *   * `` `UPDATE table SET "a" = 1, "b" = 2` ``
 *
 * Objects surrounded by `()` become keys and values:
 *
 * * `` SQL`INSERT INTO table (${{a: 1, b: 2}})` ``
 *   * `` `INSERT INTO table ("a", "b") VALUES (1, 2)` ``
 *
 * Arrays become lists; surrounding by `"` or `` ` `` turns them into lists of names:
 *
 * * `` SQL`INSERT INTO table ("${['a', 'b']}") VALUES (${[1, 2]})` ``
 *   * `` `INSERT INTO table ("a", "b") VALUES (1, 2)` ``
 *
 * SQL statements can be nested:
 *
 * * `` SQL`SELECT * FR${SQL`OM table`})` ``
 *   * `` `SELECT * FROM table` ``
 *
 * Raw unescaped strings can be put inside SQL() but I can't actually think of a
 * use case, so probably don't ever do this:
 *
 * * `` secondPart = SQL('OM table'); SQL`SELECT * FR${secondPart})` ``
 *   * `` `SELECT * FROM table` ``
 */
function SQL(strings, ...values) {
    if (typeof strings === 'string')
        strings = [strings];
    return new SQLStatement(strings, values);
}
exports.connectedDatabases = [];
class Database {
    constructor(connection, prefix = '') {
        this.type = '';
        this.prefix = prefix;
        this.connection = connection;
        exports.connectedDatabases.push(this);
    }
    query(sql) {
        if (!sql)
            return (strings, ...rest) => this.query(new SQLStatement(strings, rest));
        const [query, values] = this._resolveSQL(sql);
        return this._query(query, values);
    }
    queryOne(sql) {
        if (!sql)
            return (strings, ...rest) => this.queryOne(new SQLStatement(strings, rest));
        return this.query(sql).then(res => Array.isArray(res) ? res[0] : res);
    }
    queryExec(sql) {
        if (!sql)
            return (strings, ...rest) => this.queryExec(new SQLStatement(strings, rest));
        const [query, values] = this._resolveSQL(sql);
        return this._queryExec(query, values);
    }
    getTable(name, primaryKeyName = null) {
        return new DatabaseTable(this, name, primaryKeyName);
    }
    close() {
        void this.connection.end();
    }
}
exports.Database = Database;
// Row extends SQLRow but TS doesn't support closed types so we can't express this
class DatabaseTable {
    constructor(db, name, primaryKeyName = null) {
        this.db = db;
        this.name = db.prefix + name;
        this.primaryKeyName = primaryKeyName;
    }
    escapeId(param) {
        return this.db.escapeId(param);
    }
    query(sql) {
        return this.db.query(sql);
    }
    queryOne(sql) {
        return this.db.queryOne(sql);
    }
    queryExec(sql) {
        return this.db.queryExec(sql);
    }
    // low-level
    selectAll(entries) {
        if (!entries)
            entries = SQL `*`;
        if (Array.isArray(entries))
            entries = SQL `"${entries}"`;
        return (strings, ...rest) => this.query() `SELECT ${entries} FROM "${this.name}" ${new SQLStatement(strings, rest)}`;
    }
    selectOne(entries) {
        if (!entries)
            entries = SQL `*`;
        if (Array.isArray(entries))
            entries = SQL `"${entries}"`;
        return (strings, ...rest) => this.queryOne() `SELECT ${entries} FROM "${this.name}" ${new SQLStatement(strings, rest)} LIMIT 1`;
    }
    updateAll(partialRow) {
        return (strings, ...rest) => this.queryExec() `UPDATE "${this.name}" SET ${partialRow} ${new SQLStatement(strings, rest)}`;
    }
    updateOne(partialRow) {
        return (s, ...r) => this.queryExec() `UPDATE "${this.name}" SET ${partialRow} ${new SQLStatement(s, r)}`;
    }
    deleteAll() {
        return (strings, ...rest) => this.queryExec() `DELETE FROM "${this.name}" ${new SQLStatement(strings, rest)}`;
    }
    deleteOne() {
        return (strings, ...rest) => this.queryExec() `DELETE FROM "${this.name}" ${new SQLStatement(strings, rest)} LIMIT 1`;
    }
    eval() {
        return (strings, ...rest) => this.queryOne() `SELECT ${new SQLStatement(strings, rest)} AS result FROM "${this.name}" LIMIT 1`
            .then(row => row?.result);
    }
    // high-level
    insert(partialRow, where) {
        return this.queryExec() `INSERT INTO "${this.name}" (${partialRow}) ${where}`;
    }
    insertIgnore(partialRow, where) {
        return this.queryExec() `INSERT IGNORE INTO "${this.name}" (${partialRow}) ${where}`;
    }
    async tryInsert(partialRow, where) {
        try {
            return await this.insert(partialRow, where);
        }
        catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return undefined;
            }
            throw err;
        }
    }
    upsert(partialRow, partialUpdate = partialRow, where) {
        if (this.db.type === 'pg') {
            return this.queryExec() `INSERT INTO "${this.name}" (${partialRow}) ON CONFLICT (${this.primaryKeyName}) DO UPDATE SET ${partialUpdate} ${where}`;
        }
        return this.queryExec() `INSERT INTO "${this.name}" (${partialRow}) ON DUPLICATE KEY UPDATE ${partialUpdate} ${where}`;
    }
    replace(partialRow, where) {
        if (this.db.type === 'pg') {
            if (!this.primaryKeyName)
                throw new Error(`Cannot replace() without a single-column primary key`);
            return this.queryExec() `INSERT INTO "${this.name}" (${partialRow}) ON CONFLICT ("${this.primaryKeyName}") DO UPDATE SET ${partialRow} ${where}`;
        }
        return this.queryExec() `REPLACE INTO "${this.name}" (${partialRow}) ${where}`;
    }
    get(primaryKey, entries) {
        if (!this.primaryKeyName)
            throw new Error(`Cannot get() without a single-column primary key`);
        return this.selectOne(entries) `WHERE "${this.primaryKeyName}" = ${primaryKey}`;
    }
    delete(primaryKey) {
        if (!this.primaryKeyName)
            throw new Error(`Cannot delete() without a single-column primary key`);
        return this.deleteAll() `WHERE "${this.primaryKeyName}" = ${primaryKey}`;
    }
    update(primaryKey, data) {
        if (!this.primaryKeyName)
            throw new Error(`Cannot update() without a single-column primary key`);
        return this.updateAll(data) `WHERE "${this.primaryKeyName}" = ${primaryKey}`;
    }
}
exports.DatabaseTable = DatabaseTable;
class MySQLDatabase extends Database {
    constructor(config) {
        const prefix = config.prefix || "";
        if (config.prefix) {
            config = { ...config };
            delete config.prefix;
        }
        super(mysql.createPool(config), prefix);
        this.type = 'mysql';
    }
    _resolveSQL(query) {
        let sql = query.sql[0];
        const values = [];
        for (let i = 0; i < query.values.length; i++) {
            const value = query.values[i];
            if (query.sql[i + 1].startsWith('`') || query.sql[i + 1].startsWith('"')) {
                sql = sql.slice(0, -1) + this.escapeId(`${value}`) + query.sql[i + 1].slice(1);
            }
            else {
                sql += '?' + query.sql[i + 1];
                values.push(value);
            }
        }
        return [sql, values];
    }
    _query(query, values) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (e, results) => {
                if (e) {
                    return reject(new Error(`${e.message} (${query}) (${values}) [${e.code}]`));
                }
                if (Array.isArray(results)) {
                    for (const row of results) {
                        for (const col in row) {
                            if (Buffer.isBuffer(row[col]))
                                row[col] = row[col].toString();
                        }
                    }
                }
                return resolve(results);
            });
        });
    }
    _queryExec(sql, values) {
        return this._query(sql, values);
    }
    escapeId(id) {
        return mysql.escapeId(id);
    }
}
exports.MySQLDatabase = MySQLDatabase;
class PGDatabase extends Database {
    constructor(config) {
        super(config ? new pg.Pool(config) : null);
        this.type = 'pg';
    }
    _resolveSQL(query) {
        let sql = query.sql[0];
        const values = [];
        let paramCount = 0;
        for (let i = 0; i < query.values.length; i++) {
            const value = query.values[i];
            if (query.sql[i + 1].startsWith('`') || query.sql[i + 1].startsWith('"')) {
                sql = sql.slice(0, -1) + this.escapeId(`${value}`) + query.sql[i + 1].slice(1);
            }
            else {
                paramCount++;
                sql += `$${paramCount}` + query.sql[i + 1];
                values.push(value);
            }
        }
        return [sql, values];
    }
    _query(query, values) {
        return this.connection.query(query, values).then(res => res.rows);
    }
    _queryExec(query, values) {
        return this.connection.query(query, values).then(res => ({ affectedRows: res.rowCount }));
    }
    escapeId(id) {
        // @ts-expect-error @types/pg really needs to be updated
        return pg.escapeIdentifier(id);
    }
}
exports.PGDatabase = PGDatabase;
