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
exports.PM = void 0;
exports.verify = verify;
exports.start = start;
exports.destroy = destroy;
/**
 * Verifier process
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * This is just an asynchronous implementation of a verifier for a
 * signed key, because Node.js's crypto functions are synchronous,
 * strangely, considering how everything else is asynchronous.
 *
 * I wrote this one day hoping it would help with performance, but
 * I don't think it had any noticeable effect.
 *
 * @license MIT
 */
const crypto = __importStar(require("crypto"));
const process_manager_1 = require("../lib/process-manager");
const ConfigLoader = __importStar(require("./config-loader"));
exports.PM = new process_manager_1.QueryProcessManager('verifier', module, ({ data, signature }) => {
    const verifier = crypto.createVerify(Config.loginserverkeyalgo);
    verifier.update(data);
    let success = false;
    try {
        success = verifier.verify(Config.loginserverpublickey, signature, 'hex');
    }
    catch { }
    return success;
});
function verify(data, signature) {
    return exports.PM.query({ data, signature });
}
if (!exports.PM.isParentProcess) {
    ConfigLoader.ensureLoaded();
    // eslint-disable-next-line no-eval
    exports.PM.startRepl((cmd) => eval(cmd));
}
function start(processCount) {
    exports.PM.spawn(processCount['verifier'] ?? 1);
}
function destroy() {
    // No need to destroy the PM under normal circumstances.
    // A potential exception is graceful shutdown.
    void exports.PM.destroy();
}
