"use strict";
/**
 * Typescript wrapper around the Python Artemis model.
 * By Mia.
 * @author mia-pi-git
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
exports.LocalClassifier = exports.PM = void 0;
exports.start = start;
const child_process = __importStar(require("child_process"));
const lib_1 = require("../../lib");
const ConfigLoader = __importStar(require("../config-loader"));
const dex_data_1 = require("../../sim/dex-data");
class ArtemisStream extends lib_1.Streams.ObjectReadWriteStream {
    constructor() {
        super();
        this.tasks = new Set();
        this.process = child_process.spawn('python3', [
            '-u', (0, lib_1.FS)('server/artemis/model.py').path, Config.debugartemisprocesses ? "debug" : "",
        ].filter(Boolean));
        this.listen();
    }
    listen() {
        this.process.stdout.setEncoding('utf8');
        this.process.stderr.setEncoding('utf8');
        this.process.stdout.on('data', data => {
            // so many bugs were created by \nready\n
            data = data.trim();
            const [taskId, dataStr] = data.split("|");
            if (this.tasks.has(taskId)) {
                this.tasks.delete(taskId);
                return this.push(`${taskId}\n${dataStr}`);
            }
            if (taskId === 'error') { // there was a major crash and the script is no longer running
                const info = JSON.parse(dataStr);
                Monitor.crashlog(new Error(info.error), "An Artemis script", info);
                try {
                    this.pushEnd(); // push end first so the stream always closes
                    this.process.disconnect();
                }
                catch { }
            }
        });
        this.process.stderr.on('data', data => {
            if (/Downloading: ([0-9]+)%/i.test(data)) {
                // this prints to stderr fsr and it should not be throwing
                return;
            }
            Monitor.crashlog(new Error(data), "An Artemis process");
        });
        this.process.on('error', err => {
            Monitor.crashlog(err, "An Artemis process");
            this.pushEnd();
        });
        this.process.on('close', () => {
            this.pushEnd();
        });
    }
    _write(chunk) {
        const [taskId, message] = lib_1.Utils.splitFirst(chunk, '\n');
        this.tasks.add(taskId);
        this.process.stdin.write(`${taskId}|${message}\n`);
    }
    destroy() {
        try {
            this.process.kill();
        }
        catch { }
        this.pushEnd();
    }
}
exports.PM = new lib_1.ProcessManager.StreamProcessManager('abusemonitor-local', module, () => new ArtemisStream(), message => {
    if (message.startsWith('SLOW\n')) {
        Monitor.slow(message.slice(5));
    }
});
class LocalClassifier {
    static destroy() {
        for (const classifier of this.classifiers)
            void classifier.destroy();
        return this.PM.destroy();
    }
    constructor() {
        this.enabled = false;
        this.requests = new Map();
        this.lastTask = 0;
        this.readyPromise = null;
        LocalClassifier.classifiers.push(this);
        void this.setupProcesses();
    }
    async setupProcesses() {
        this.readyPromise = new Promise(resolve => {
            child_process.exec('python3 -c "import detoxify"', (err, out, stderr) => {
                if (err || stderr) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
        const res = await this.readyPromise;
        this.enabled = res;
        this.readyPromise = null;
        if (res) {
            this.stream = exports.PM.createStream();
            void this.listen();
        }
    }
    async listen() {
        if (!this.stream)
            return null;
        for await (const chunk of this.stream) {
            const [rawTaskId, data] = lib_1.Utils.splitFirst(chunk, '\n');
            const task = parseInt(rawTaskId);
            const resolver = this.requests.get(task);
            if (resolver) {
                resolver(JSON.parse(data));
                this.requests.delete(task);
            }
        }
    }
    destroy() {
        LocalClassifier.classifiers.splice(LocalClassifier.classifiers.indexOf(this), 1);
        return this.stream?.destroy();
    }
    async classify(text) {
        if (this.readyPromise)
            await this.readyPromise;
        if (!this.stream)
            return null;
        const taskId = this.lastTask++;
        const data = await new Promise(resolve => {
            this.requests.set(taskId, resolve);
            void this.stream?.write(`${taskId}\n${text}`);
        });
        for (const k in data) {
            // floats have to be made into strings because python's json.dumps
            // doesn't like float32s
            data[k] = parseFloat(data[k]);
        }
        return data;
    }
    static start(processCount) {
        start(processCount);
    }
}
exports.LocalClassifier = LocalClassifier;
LocalClassifier.PM = exports.PM;
LocalClassifier.ATTRIBUTES = {
    sexual_explicit: {},
    severe_toxicity: {},
    toxicity: {},
    obscene: {},
    identity_attack: {},
    insult: {},
    threat: {},
};
LocalClassifier.classifiers = [];
if (!exports.PM.isParentProcess) {
    ConfigLoader.ensureLoaded();
    global.Monitor = {
        crashlog(error, source = 'A local Artemis child process', details = null) {
            const repr = JSON.stringify([error.name, error.message, source, details]);
            process.send(`THROW\n@!!@${repr}\n${error.stack}`);
        },
        slow(text) {
            process.send(`CALLBACK\nSLOW\n${text}`);
        },
    };
    global.toID = dex_data_1.toID;
    process.on('uncaughtException', err => {
        if (Config.crashguard) {
            Monitor.crashlog(err, 'A local Artemis child process');
        }
    });
    // eslint-disable-next-line no-eval
    exports.PM.startRepl(cmd => eval(cmd));
}
function start(processCount) {
    exports.PM.spawn(processCount['localartemis'] ?? 1);
}
