"use strict";
/**
 * REPL
 *
 * Documented in logs/repl/README.md
 * https://github.com/smogon/pokemon-showdown/blob/master/logs/repl/README.md
 *
 * @author kota
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
exports.Repl = void 0;
const fs = __importStar(require("fs"));
const net = __importStar(require("net"));
const path = __importStar(require("path"));
const repl = __importStar(require("repl"));
const crashlogger_1 = require("./crashlogger");
const fs_1 = require("./fs");
const MAX_CONCURRENT_CLEANUP_SOCKETS = 8;
async function isSocket(pathname) {
    try {
        const stat = await fs.promises.stat(pathname);
        return stat.isSocket();
    }
    catch {
        return false;
    }
}
async function runParallelWithLimit(items, max, fn) {
    const results = [];
    const runningPromises = new Map();
    for (const item of items) {
        const p = fn(item);
        results.push(p);
        runningPromises.set(p, p.then(() => runningPromises.delete(p), () => runningPromises.delete(p)));
        if (max <= runningPromises.size) {
            await Promise.race(runningPromises.values());
        }
    }
    return Promise.all(results);
}
exports.Repl = new class {
    constructor() {
        /**
         * Contains the pathnames of all active REPL sockets.
         */
        this.socketPathnames = new Set();
        this.listenersSetup = false;
    }
    setupListeners(filename) {
        if (exports.Repl.listenersSetup)
            return;
        exports.Repl.listenersSetup = true;
        // Clean up REPL sockets and child processes on forced exit.
        process.once('exit', code => {
            for (const s of exports.Repl.socketPathnames) {
                try {
                    fs.unlinkSync(s);
                }
                catch { }
            }
            if (code === 129 || code === 130) {
                process.exitCode = 0;
            }
        });
        if (!process.listeners('SIGHUP').length) {
            process.once('SIGHUP', () => process.exit(128 + 1));
        }
        if (!process.listeners('SIGINT').length) {
            process.once('SIGINT', () => process.exit(128 + 2));
        }
        global.heapdump = (targetPath) => {
            if (!targetPath)
                targetPath = `${filename}-${new Date().toISOString()}`;
            let handler;
            try {
                handler = require('node-oom-heapdump')();
            }
            catch (e) {
                if (e.code !== 'MODULE_NOT_FOUND')
                    throw e;
                throw new Error(`node-oom-heapdump is not installed. Run \`npm install --no-save node-oom-heapdump\` and try again.`);
            }
            return handler.createHeapSnapshot(targetPath);
        };
    }
    /**
     * Delete old sockets in the REPL directory (presumably from a crashed
     * previous launch of PS).
     */
    async cleanup() {
        const config = typeof Config !== 'undefined' ? Config : {};
        if (!config.repl)
            return;
        // Clean up old REPL sockets.
        const directory = path.dirname(path.resolve(fs_1.FS.ROOT_PATH, config.replsocketprefix || 'logs/repl', 'app'));
        const files = await fs.promises.readdir(directory);
        await runParallelWithLimit(files, MAX_CONCURRENT_CLEANUP_SOCKETS, async (file) => {
            const pathname = path.resolve(directory, file);
            if (!(await isSocket(pathname)))
                return;
            await new Promise((resolve, reject) => {
                const socket = net.connect(pathname, () => {
                    socket.end();
                    socket.destroy();
                    resolve(null);
                }).on('error', () => {
                    resolve(fs.promises.unlink(pathname).catch(err => null));
                });
            });
        });
    }
    /**
     * Starts a REPL server, using a UNIX socket for IPC. The eval function
     * parameter is passed in because there is no other way to access a file's
     * non-global context.
     */
    start(filename, evalFunction) {
        const config = typeof Config !== 'undefined' ? Config : {};
        if (!config.repl)
            return;
        // eslint-disable-next-line no-eval
        if (evalFunction === eval) {
            // Direct eval is most useful for debugging, but
            // nothing prevents consumers from wrapping indirect eval if required (see startGlobal).
            throw new TypeError(`Expected 'evalFunction' to be a wrapper around direct eval.`);
        }
        // TODO: Windows does support the REPL when using named pipes. For now,
        // this only supports UNIX sockets.
        exports.Repl.setupListeners(filename);
        const server = net.createServer(socket => {
            repl.start({
                input: socket,
                output: socket,
                eval(cmd, context, unusedFilename, callback) {
                    try {
                        return callback(null, evalFunction(cmd));
                    }
                    catch (e) {
                        return callback(e, undefined);
                    }
                },
            }).on('exit', () => socket.end());
            socket.on('error', () => socket.destroy());
        });
        const pathname = path.resolve(fs_1.FS.ROOT_PATH, Config.replsocketprefix || 'logs/repl', filename);
        try {
            server.listen(pathname, () => {
                fs.chmodSync(pathname, Config.replsocketmode || 0o600);
                exports.Repl.socketPathnames.add(pathname);
            });
            server.once('error', (err) => {
                server.close();
                if (err.code === "EADDRINUSE") {
                    fs.unlink(pathname, _err => {
                        if (_err && _err.code !== "ENOENT") {
                            (0, crashlogger_1.crashlogger)(_err, `REPL: ${filename}`);
                        }
                    });
                }
                else if (err.code === "EACCES") {
                    if (process.platform !== 'win32') {
                        console.error(`Could not start REPL server "${filename}": Your filesystem doesn't support Unix sockets (everything else will still work)`);
                    }
                }
                else {
                    (0, crashlogger_1.crashlogger)(err, `REPL: ${filename}`);
                }
            });
            server.once('close', () => {
                exports.Repl.socketPathnames.delete(pathname);
            });
        }
        catch (err) {
            console.error(`Could not start REPL server "${filename}": ${err}`);
        }
    }
    startGlobal(filename) {
        /* eslint-disable @typescript-eslint/no-implied-eval */
        return this.start(filename, new Function(`script`, `return eval(script);`));
        /* eslint-enable @typescript-eslint/no-implied-eval */
    }
};
