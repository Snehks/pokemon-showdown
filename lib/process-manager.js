"use strict";
/**
 * Process Manager
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * This file abstract out multiprocess logic involved in several tasks.
 *
 * Child processes can be queried.
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
exports.RawProcessManager = exports.StreamProcessManager = exports.QueryProcessManager = exports.ProcessManager = exports.RawProcessWrapper = exports.StreamWorker = exports.StreamProcessWrapper = exports.QueryProcessWrapper = exports.processManagers = void 0;
exports.exec = exec;
const child_process = __importStar(require("child_process"));
const cluster = __importStar(require("cluster"));
const path = __importStar(require("path"));
const Streams = __importStar(require("./streams"));
const fs_1 = require("./fs");
const repl_1 = require("./repl");
exports.processManagers = [];
function exec(args, execOptions) {
    if (Array.isArray(args)) {
        const cmd = args.shift();
        if (!cmd)
            throw new Error(`You must pass a command to ProcessManager.exec.`);
        return new Promise((resolve, reject) => {
            child_process.execFile(cmd, args, execOptions, (err, stdout, stderr) => {
                if (err)
                    reject(err);
                if (typeof stdout !== 'string')
                    stdout = stdout.toString();
                if (typeof stderr !== 'string')
                    stderr = stderr.toString();
                resolve({ stdout, stderr });
            });
        });
    }
    else {
        return new Promise((resolve, reject) => {
            child_process.exec(args, execOptions, (error, stdout, stderr) => {
                if (error)
                    reject(error);
                if (typeof stdout !== 'string')
                    stdout = stdout.toString();
                resolve(stdout);
            });
        });
    }
}
class SubprocessStream extends Streams.ObjectReadWriteStream {
    constructor(process, taskId) {
        super();
        this.process = process;
        this.taskId = taskId;
        this.process.process.send(`${taskId}\nNEW`);
    }
    _write(message) {
        if (!this.process.process.connected) {
            this.pushError(new Error(`Process disconnected (possibly crashed?)`));
            return;
        }
        this.process.process.send(`${this.taskId}\nWRITE\n${message}`);
        // responses are handled in ProcessWrapper
    }
    _writeEnd() {
        this.process.process.send(`${this.taskId}\nWRITEEND`);
    }
    _destroy() {
        if (!this.process.process.connected)
            return;
        this.process.process.send(`${this.taskId}\nDESTROY`);
        this.process.deleteStream(this.taskId);
        this.process = null;
    }
}
class RawSubprocessStream extends Streams.ObjectReadWriteStream {
    constructor(process) {
        super();
        this.process = process;
    }
    _write(message) {
        if (!this.process.getProcess().connected) {
            // no error because the crash handler should already have shown an error, and
            // sometimes harmless messages are sent during cleanup
            return;
        }
        this.process.process.send(message);
        // responses are handled in ProcessWrapper
    }
}
/** Wraps the process object in the PARENT process. */
class QueryProcessWrapper {
    constructor(file, messageCallback) {
        this.process = child_process.fork(file, [], { cwd: fs_1.FS.ROOT_PATH });
        this.taskId = 0;
        this.file = file;
        this.pendingTasks = new Map();
        this.pendingRelease = null;
        this.resolveRelease = null;
        this.messageCallback = messageCallback || null;
        this.process.on('message', (message) => {
            if (message.startsWith('THROW\n')) {
                const error = new Error();
                error.stack = `[${this.process.pid}] ${message.slice(6)}`;
                throw error;
            }
            if (message.startsWith('DEBUG\n')) {
                this.debug = message.slice(6);
                return;
            }
            if (this.messageCallback && message.startsWith(`CALLBACK\n`)) {
                this.messageCallback(message.slice(9));
                return;
            }
            const nlLoc = message.indexOf('\n');
            if (nlLoc <= 0)
                throw new Error(`Invalid response ${message}`);
            const taskId = parseInt(message.slice(0, nlLoc));
            const resolve = this.pendingTasks.get(taskId);
            if (!resolve)
                throw new Error(`Invalid taskId ${message.slice(0, nlLoc)}`);
            this.pendingTasks.delete(taskId);
            const resp = this.safeJSON(message.slice(nlLoc + 1));
            resolve(resp);
            if (this.resolveRelease && !this.getLoad())
                this.destroy();
        });
    }
    safeJSON(obj) {
        // special cases? undefined should strictly be fine
        // so let's just return it since we can't parse it
        if (obj === "undefined") {
            return undefined;
        }
        try {
            return JSON.parse(obj);
        }
        catch (e) {
            // this is in the parent, so it should usually exist, but it's possible
            // it's also futureproofing in case other external modfules require this
            // we also specifically do not throw here because this json might be sensitive,
            // so we only want it to go to emails
            global.Monitor?.crashlog?.(e, `a ${path.basename(this.file)} process`, { result: obj });
            return undefined;
        }
    }
    getProcess() {
        return this.process;
    }
    getLoad() {
        return this.pendingTasks.size;
    }
    query(input) {
        this.taskId++;
        const taskId = this.taskId;
        this.process.send(`${taskId}\n${JSON.stringify(input)}`);
        return new Promise(resolve => {
            this.pendingTasks.set(taskId, resolve);
        });
    }
    release() {
        if (this.pendingRelease)
            return this.pendingRelease;
        if (!this.getLoad()) {
            this.destroy();
        }
        else {
            this.pendingRelease = new Promise(resolve => {
                this.resolveRelease = resolve;
            });
        }
        return this.pendingRelease;
    }
    destroy() {
        if (this.pendingRelease && !this.resolveRelease) {
            // already destroyed
            return;
        }
        this.process.disconnect();
        for (const resolver of this.pendingTasks.values()) {
            // maybe we should track reject functions too...
            resolver('');
        }
        this.pendingTasks.clear();
        if (this.resolveRelease) {
            this.resolveRelease();
            this.resolveRelease = null;
        }
        else if (!this.pendingRelease) {
            this.pendingRelease = Promise.resolve();
        }
    }
}
exports.QueryProcessWrapper = QueryProcessWrapper;
/** Wraps the process object in the PARENT process. */
class StreamProcessWrapper {
    setDebug(message) {
        this.debug = (this.debug || '').slice(-32768) + '\n=====\n' + message;
    }
    constructor(file, messageCallback) {
        this.taskId = 0;
        this.activeStreams = new Map();
        this.pendingRelease = null;
        this.resolveRelease = null;
        this.process = child_process.fork(file, [], { cwd: fs_1.FS.ROOT_PATH });
        this.messageCallback = messageCallback;
        this.process.on('message', (message) => {
            if (message.startsWith('THROW\n')) {
                const error = new Error();
                error.stack = `[${this.process.pid}] ${message.slice(6)}`;
                throw error;
            }
            if (this.messageCallback && message.startsWith(`CALLBACK\n`)) {
                this.messageCallback(message.slice(9));
                return;
            }
            if (message.startsWith('DEBUG\n')) {
                this.setDebug(message.slice(6));
                return;
            }
            let nlLoc = message.indexOf('\n');
            if (nlLoc <= 0)
                throw new Error(`Invalid response ${message}`);
            const taskId = parseInt(message.slice(0, nlLoc));
            const stream = this.activeStreams.get(taskId);
            if (!stream)
                return; // stream already destroyed
            message = message.slice(nlLoc + 1);
            nlLoc = message.indexOf('\n');
            if (nlLoc < 0)
                nlLoc = message.length;
            const messageType = message.slice(0, nlLoc);
            message = message.slice(nlLoc + 1);
            if (messageType === 'END') {
                stream.pushEnd();
                this.deleteStream(taskId);
            }
            else if (messageType === 'PUSH') {
                stream.push(message);
            }
            else if (messageType === 'THROW') {
                const error = new Error();
                error.stack = message;
                stream.pushError(error, true);
            }
            else {
                throw new Error(`Unrecognized messageType ${messageType}`);
            }
        });
    }
    getLoad() {
        return this.activeStreams.size;
    }
    getProcess() {
        return this.process;
    }
    deleteStream(taskId) {
        this.activeStreams.delete(taskId);
        // try to release
        if (this.resolveRelease && !this.getLoad())
            void this.destroy();
    }
    createStream() {
        this.taskId++;
        const taskId = this.taskId;
        const stream = new SubprocessStream(this, taskId);
        this.activeStreams.set(taskId, stream);
        return stream;
    }
    release() {
        if (this.pendingRelease)
            return this.pendingRelease;
        if (!this.getLoad()) {
            void this.destroy();
        }
        else {
            this.pendingRelease = new Promise(resolve => {
                this.resolveRelease = resolve;
            });
        }
        return this.pendingRelease;
    }
    destroy() {
        if (this.pendingRelease && !this.resolveRelease) {
            // already destroyed
            return;
        }
        this.process.disconnect();
        const destroyed = [];
        for (const stream of this.activeStreams.values()) {
            destroyed.push(stream.destroy());
        }
        this.activeStreams.clear();
        if (this.resolveRelease) {
            this.resolveRelease();
            this.resolveRelease = null;
        }
        else if (!this.pendingRelease) {
            this.pendingRelease = Promise.resolve();
        }
        return Promise.all(destroyed);
    }
}
exports.StreamProcessWrapper = StreamProcessWrapper;
/**
 * A container for a RawProcessManager stream. This is usually the
 * RawProcessWrapper, but it can also be a fake RawProcessWrapper if the PM is
 * told to spawn 0 worker processes.
 */
class StreamWorker {
    constructor(stream) {
        this.load = 0;
        this.workerid = 0;
        this.stream = stream;
    }
}
exports.StreamWorker = StreamWorker;
/** Wraps the process object in the PARENT process. */
class RawProcessWrapper {
    setDebug(message) {
        this.debug = (this.debug || '').slice(-32768) + '\n=====\n' + message;
    }
    constructor(file, isCluster, env) {
        this.taskId = 0;
        this.pendingRelease = null;
        this.resolveRelease = null;
        this.workerid = 0;
        /** Not managed by RawProcessWrapper itself */
        this.load = 0;
        if (isCluster) {
            this.process = cluster.fork(env);
            this.workerid = this.process.id;
        }
        else {
            this.process = child_process.fork(file, [], { cwd: fs_1.FS.ROOT_PATH, env });
        }
        this.process.on('message', (message) => {
            this.stream.push(message);
        });
        this.stream = new RawSubprocessStream(this);
    }
    getLoad() {
        return this.load;
    }
    getProcess() {
        return this.process.process ? this.process.process : this.process;
    }
    release() {
        if (this.pendingRelease)
            return this.pendingRelease;
        if (!this.getLoad()) {
            void this.destroy();
        }
        else {
            this.pendingRelease = new Promise(resolve => {
                this.resolveRelease = resolve;
            });
        }
        return this.pendingRelease;
    }
    destroy() {
        if (this.pendingRelease && !this.resolveRelease) {
            // already destroyed
            return;
        }
        void this.stream.destroy();
        this.process.disconnect();
    }
}
exports.RawProcessWrapper = RawProcessWrapper;
/**
 * A ProcessManager wraps a query function: A function that takes a
 * string and returns a string or Promise<string>.
 */
class ProcessManager {
    constructor(id, ctx) {
        this.processes = [];
        this.releasingProcesses = [];
        this.crashedProcesses = [];
        this.crashTime = 0;
        this.crashRespawnCount = 0;
        this.id = id;
        this.filename = ctx.filename;
        this.basename = path.basename(ctx.filename);
        this.isParentProcess = (require.main !== ctx || !process.send);
        this.listen();
    }
    acquire() {
        if (!this.processes.length) {
            return null;
        }
        let lowestLoad = this.processes[0];
        for (const process of this.processes) {
            if (process.getLoad() < lowestLoad.getLoad()) {
                lowestLoad = process;
            }
        }
        return lowestLoad;
    }
    releaseCrashed(process) {
        const index = this.processes.indexOf(process);
        // The process was shut down sanely, not crashed
        if (index < 0)
            return;
        this.processes.splice(index, 1);
        this.destroyProcess(process);
        void process.release().then(() => {
            const releasingIndex = this.releasingProcesses.indexOf(process);
            if (releasingIndex >= 0) {
                this.releasingProcesses.splice(releasingIndex, 1);
            }
        });
        const now = Date.now();
        if (this.crashTime && now - this.crashTime > 30 * 60 * 1000) {
            this.crashTime = 0;
            this.crashRespawnCount = 0;
        }
        if (!this.crashTime)
            this.crashTime = now;
        this.crashRespawnCount += 1;
        // Notify any global crash logger
        void Promise.reject(new Error(`Process ${this.basename} ${process.getProcess().pid} crashed and had to be restarted`));
        this.releasingProcesses.push(process);
        this.crashedProcesses.push(process);
        // only respawn processes if there have been fewer than 5 crashes in 30 minutes
        if (this.crashRespawnCount <= 5) {
            this.spawn(this.processes.length + 1);
        }
    }
    unspawn() {
        return Promise.all([...this.processes].map(process => this.unspawnOne(process)));
    }
    async unspawnOne(process) {
        if (!process)
            return;
        this.destroyProcess(process);
        const processIndex = this.processes.indexOf(process);
        if (processIndex < 0)
            throw new Error('Process inactive');
        this.processes.splice(this.processes.indexOf(process), 1);
        this.releasingProcesses.push(process);
        await process.release();
        const index = this.releasingProcesses.indexOf(process);
        if (index < 0)
            return; // can happen if process crashed while releasing
        this.releasingProcesses.splice(index, 1);
    }
    spawn(count = 1, force) {
        if (!this.isParentProcess)
            return;
        if (ProcessManager.disabled && !force)
            return;
        const spawnCount = count - this.processes.length;
        for (let i = 0; i < spawnCount; i++) {
            this.spawnOne(force);
        }
    }
    spawnOne(force) {
        if (!this.isParentProcess)
            throw new Error('Must use in parent process');
        if (ProcessManager.disabled && !force)
            return null;
        const process = this.createProcess();
        process.process.on('disconnect', () => this.releaseCrashed(process));
        this.processes.push(process);
        return process;
    }
    respawn(count = null) {
        if (count === null)
            count = this.processes.length;
        if (count === 0)
            throw new Error(`${this.id} is not using multiple processes.`);
        const unspawned = this.unspawn();
        this.spawn(count);
        return unspawned;
    }
    startRepl(options) {
        const filename = typeof options === 'function' || !options.filename ? `${this.id}-${process.pid}` : options.filename;
        const evalFn = typeof options === 'function' ? options : options.eval;
        repl_1.Repl.start(filename, evalFn);
    }
    destroyProcess(process) { }
    destroy() {
        const index = exports.processManagers.indexOf(this);
        if (index >= 0)
            exports.processManagers.splice(index, 1);
        return this.unspawn();
    }
}
exports.ProcessManager = ProcessManager;
ProcessManager.disabled = false;
class QueryProcessManager extends ProcessManager {
    /**
     * @param timeout The number of milliseconds to wait before terminating a query. Defaults to 900000 ms (15 minutes).
     */
    constructor(id, ctx, query, timeout = 15 * 60 * 1000, debugCallback) {
        super(id, ctx);
        this._query = query;
        this.timeout = timeout;
        this.messageCallback = debugCallback;
        exports.processManagers.push(this);
    }
    async query(input, process = this.acquire()) {
        if (!process)
            return this._query(input);
        const timeout = setTimeout(() => {
            const debugInfo = process.debug || "No debug information found.";
            process.destroy();
            this.spawnOne();
            throw new Error(`A query originating in ${this.basename} took too long to complete; the process has been respawned.\n${debugInfo}`);
        }, this.timeout);
        const result = await process.query(input);
        clearTimeout(timeout);
        return result;
    }
    queryTemporaryProcess(input, force) {
        const process = this.spawnOne(force);
        const result = this.query(input, process);
        void this.unspawnOne(process);
        return result;
    }
    createProcess() {
        return new QueryProcessWrapper(this.filename, this.messageCallback);
    }
    listen() {
        if (this.isParentProcess)
            return;
        // child process
        process.on('message', (message) => {
            const nlLoc = message.indexOf('\n');
            if (nlLoc <= 0)
                throw new Error(`Invalid response ${message}`);
            const taskId = message.slice(0, nlLoc);
            message = message.slice(nlLoc + 1);
            if (taskId.startsWith('EVAL')) {
                // eslint-disable-next-line no-eval
                process.send(`${taskId}\n` + eval(message));
                return;
            }
            void Promise.resolve(this._query(JSON.parse(message))).then(response => process.send(`${taskId}\n${JSON.stringify(response)}`));
        });
        process.on('disconnect', () => {
            process.exit();
        });
    }
}
exports.QueryProcessManager = QueryProcessManager;
class StreamProcessManager extends ProcessManager {
    constructor(id, ctx, createStream, messageCallback) {
        super(id, ctx);
        this.activeStreams = new Map();
        this._createStream = createStream;
        this.messageCallback = messageCallback;
        exports.processManagers.push(this);
    }
    createStream() {
        const process = this.acquire();
        if (!process)
            return this._createStream();
        return process.createStream();
    }
    createProcess() {
        return new StreamProcessWrapper(this.filename, this.messageCallback);
    }
    async pipeStream(taskId, stream) {
        let done = false;
        while (!done) {
            try {
                let value;
                ({ value, done } = await stream.next());
                process.send(`${taskId}\nPUSH\n${value}`);
            }
            catch (err) {
                process.send(`${taskId}\nTHROW\n${err.stack}`);
            }
        }
        if (!this.activeStreams.has(taskId)) {
            // stream.destroy() was called, don't send an END message
            return;
        }
        process.send(`${taskId}\nEND`);
        this.activeStreams.delete(taskId);
    }
    listen() {
        if (this.isParentProcess)
            return;
        // child process
        process.on('message', (message) => {
            let nlLoc = message.indexOf('\n');
            if (nlLoc <= 0)
                throw new Error(`Invalid request ${message}`);
            const taskId = message.slice(0, nlLoc);
            const stream = this.activeStreams.get(taskId);
            message = message.slice(nlLoc + 1);
            nlLoc = message.indexOf('\n');
            if (nlLoc < 0)
                nlLoc = message.length;
            const messageType = message.slice(0, nlLoc);
            message = message.slice(nlLoc + 1);
            if (taskId.startsWith('EVAL')) {
                // eslint-disable-next-line no-eval
                process.send(`${taskId}\n` + eval(message));
                return;
            }
            if (messageType === 'NEW') {
                if (stream)
                    throw new Error(`NEW: taskId ${taskId} already exists`);
                const newStream = this._createStream();
                this.activeStreams.set(taskId, newStream);
                void this.pipeStream(taskId, newStream);
            }
            else if (messageType === 'DESTROY') {
                if (!stream)
                    throw new Error(`DESTROY: Invalid taskId ${taskId}`);
                void stream.destroy();
                this.activeStreams.delete(taskId);
            }
            else if (messageType === 'WRITE') {
                if (!stream)
                    throw new Error(`WRITE: Invalid taskId ${taskId}`);
                void stream.write(message);
            }
            else if (messageType === 'WRITEEND') {
                if (!stream)
                    throw new Error(`WRITEEND: Invalid taskId ${taskId}`);
                void stream.writeEnd();
            }
            else {
                throw new Error(`Unrecognized messageType ${messageType}`);
            }
        });
        process.on('disconnect', () => {
            process.exit();
        });
    }
}
exports.StreamProcessManager = StreamProcessManager;
class RawProcessManager extends ProcessManager {
    constructor(options) {
        super(options.id, options.module);
        /** full list of processes - parent process only */
        this.workers = [];
        /** if spawning 0 worker processes, the worker is instead stored here in the parent process */
        this.masterWorker = null;
        /** stream used only in the child process */
        this.activeStream = null;
        this.spawnSubscription = null;
        this.unspawnSubscription = null;
        /** worker ID of cluster worker - cluster child process only (0 otherwise) */
        this.workerid = cluster.worker?.id || 0;
        this.isCluster = !!options.isCluster;
        this._setupChild = options.setupChild;
        this.env = options.env;
        if (this.isCluster && this.isParentProcess) {
            cluster.setupMaster({
                exec: this.filename,
                cwd: fs_1.FS.ROOT_PATH,
            });
        }
        exports.processManagers.push(this);
    }
    subscribeSpawn(callback) {
        this.spawnSubscription = callback;
    }
    subscribeUnspawn(callback) {
        this.unspawnSubscription = callback;
    }
    spawn(count) {
        super.spawn(count);
        if (!this.workers.length) {
            this.masterWorker = new StreamWorker(this._setupChild());
            this.workers.push(this.masterWorker);
            this.spawnSubscription?.(this.masterWorker);
        }
    }
    createProcess() {
        const process = new RawProcessWrapper(this.filename, this.isCluster, this.env);
        this.workers.push(process);
        this.spawnSubscription?.(process);
        return process;
    }
    destroyProcess(process) {
        const index = this.workers.indexOf(process);
        if (index >= 0)
            this.workers.splice(index, 1);
        this.unspawnSubscription?.(process);
    }
    async pipeStream(stream) {
        let done = false;
        while (!done) {
            try {
                let value;
                ({ value, done } = await stream.next());
                process.send(value);
            }
            catch (err) {
                process.send(`THROW\n${err.stack}`);
            }
        }
    }
    listen() {
        if (this.isParentProcess)
            return;
        setImmediate(() => {
            this.activeStream = this._setupChild();
            void this.pipeStream(this.activeStream);
        });
        // child process
        process.on('message', (message) => {
            void this.activeStream.write(message);
        });
        process.on('disconnect', () => {
            process.exit();
        });
    }
}
exports.RawProcessManager = RawProcessManager;
