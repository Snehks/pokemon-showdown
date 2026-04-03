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
exports.RemoteClassifier = exports.PM = exports.limiter = exports.Limiter = exports.ATTRIBUTES = void 0;
exports.start = start;
/**
 * Code for using Google's Perspective API for filters.
 * @author mia-pi-git
 */
const lib_1 = require("../../lib");
const ConfigLoader = __importStar(require("../config-loader"));
const dex_data_1 = require("../../sim/dex-data");
// 20m. this is mostly here so we can use Monitor.slow()
const PM_TIMEOUT = 20 * 60 * 1000;
exports.ATTRIBUTES = {
    "SEVERE_TOXICITY": {},
    "TOXICITY": {},
    "IDENTITY_ATTACK": {},
    "INSULT": {},
    "PROFANITY": {},
    "THREAT": {},
    "SEXUALLY_EXPLICIT": {},
    "FLIRTATION": {},
};
function time() {
    return Math.floor(Math.floor(Date.now() / 1000) / 60);
}
class Limiter {
    constructor(max) {
        this.lastTick = time();
        this.count = 0;
        this.max = max;
    }
    shouldRequest() {
        const now = time();
        if (this.lastTick !== now) {
            this.count = 0;
            this.lastTick = now;
        }
        this.count++;
        return this.count < this.max;
    }
}
exports.Limiter = Limiter;
function isCommon(message) {
    message = message.toLowerCase().replace(/\?!\., ;:/g, '');
    return ['gg', 'wp', 'ggwp', 'gl', 'hf', 'glhf', 'hello', 'hi'].includes(message);
}
let throttleTime = null;
exports.limiter = new Limiter(800);
exports.PM = new lib_1.ProcessManager.QueryProcessManager('abusemonitor-remote', module, async (text) => {
    if (isCommon(text) || !exports.limiter.shouldRequest())
        return null;
    if (throttleTime && ((Date.now() - throttleTime) < 10000)) {
        return null;
    }
    if (throttleTime)
        throttleTime = null;
    const requestData = {
        // todo - support 'es', 'it', 'pt', 'fr' - use user.language? room.settings.language...?
        languages: ['en'],
        requestedAttributes: exports.ATTRIBUTES,
        comment: { text },
    };
    try {
        const raw = await (0, lib_1.Net)(`https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze`).post({
            query: {
                key: Config.perspectiveKey,
            },
            body: JSON.stringify(requestData),
            headers: {
                'Content-Type': "application/json",
            },
            timeout: 10 * 1000, // 10s
        });
        if (!raw)
            return null;
        const data = JSON.parse(raw);
        if (data.error)
            throw new Error(data.message);
        const result = {};
        for (const k in data.attributeScores) {
            const score = data.attributeScores[k];
            result[k] = score.summaryScore.value;
        }
        return result;
    }
    catch (e) {
        // eslint-disable-next-line require-atomic-updates
        throttleTime = Date.now();
        if (e.message.startsWith('Request timeout') || e.statusCode === 429 || e.code === 'ETIMEDOUT') {
            // request timeout: just ignore this. error on their end not ours.
            // 429: too many requests, we already freeze for 10s above so. not much more we can do
            return null;
        }
        Monitor.crashlog(e, 'A Perspective API request', { request: JSON.stringify(requestData) });
        return null;
    }
}, PM_TIMEOUT);
class RemoteClassifier {
    classify(text) {
        if (!Config.perspectiveKey)
            return Promise.resolve(null);
        return exports.PM.query(text);
    }
    async suggestScore(text, data) {
        if (!Config.perspectiveKey)
            return Promise.resolve(null);
        const body = {
            comment: { text },
            attributeScores: {},
        };
        for (const k in data) {
            body.attributeScores[k] = { summaryScore: { value: data[k] } };
        }
        try {
            const raw = await (0, lib_1.Net)(`https://commentanalyzer.googleapis.com/v1alpha1/comments:suggestscore`).post({
                query: {
                    key: Config.perspectiveKey,
                },
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': "application/json",
                },
                timeout: 10 * 1000, // 10s
            });
            return JSON.parse(raw);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    destroy() {
        return exports.PM.destroy();
    }
    respawn() {
        return exports.PM.respawn();
    }
    spawn(number) {
        exports.PM.spawn(number);
    }
    getActiveProcesses() {
        return exports.PM.processes.length;
    }
    static start(processCount) {
        start(processCount);
    }
}
exports.RemoteClassifier = RemoteClassifier;
RemoteClassifier.PM = exports.PM;
RemoteClassifier.ATTRIBUTES = exports.ATTRIBUTES;
if (!exports.PM.isParentProcess) {
    ConfigLoader.ensureLoaded();
    global.Monitor = {
        crashlog(error, source = 'A remote Artemis child process', details = null) {
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
            Monitor.crashlog(err, 'A remote Artemis child process');
        }
    });
    // eslint-disable-next-line no-eval
    exports.PM.startRepl(cmd => eval(cmd));
}
function start(processCount) {
    exports.PM.spawn(processCount['remoteartemis'] ?? 1);
}
