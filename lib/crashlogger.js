"use strict";
/**
 * Crash logger
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Logs crashes, sends an e-mail notification if you've set up
 * config.js to do that.
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
exports.crashlogger = crashlogger;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const CRASH_EMAIL_THROTTLE = 5 * 60 * 1000; // 5 minutes
const logPath = path.resolve(
// not sure why this is necessary, but in Windows testing it was
__dirname, '../', __dirname.includes(`${path.sep}dist${path.sep}`) ? '..' : '', path.join(global.Config?.logsdir || 'logs', 'errors.txt'));
let lastCrashLog = 0;
let transport;
function appendCause(error) {
    let stack = ``;
    if (typeof error.cause === 'string') {
        stack += `\n\n[cause]: ${error.cause}\n`;
    }
    else {
        stack += `\n\n[cause]: ${error.cause.message}\n`;
        stack += `  ${error.cause?.stack}`;
    }
    return stack;
}
/**
 * Logs when a crash happens to console, then e-mails those who are configured
 * to receive them.
 */
function crashlogger(error, description, data = null, emailConfig = null) {
    const datenow = Date.now();
    let stack = (typeof error === 'string' ? error : error?.stack) || '';
    if (error?.cause) {
        stack += appendCause(error);
    }
    if (data) {
        stack += `\n\nAdditional information:\n`;
        for (const k in data) {
            stack += `  ${k} = ${data[k]}\n`;
        }
    }
    console.error(`\n[${Date.now()}] CRASH: ${stack}\n`);
    const out = fs.createWriteStream(logPath, { flags: 'a' });
    out.on('open', () => {
        out.write(`\n[${Date.now()}] ${stack}\n`);
        out.end();
    }).on('error', (err) => {
        console.error(`\nSUBCRASH: ${err.stack}\n`);
    });
    const emailOpts = emailConfig || global.Config?.crashguardemail;
    if (emailOpts && ((datenow - lastCrashLog) > CRASH_EMAIL_THROTTLE)) {
        lastCrashLog = datenow;
        if (!transport) {
            try {
                require.resolve('nodemailer');
            }
            catch {
                throw new Error('nodemailer is not installed, but it is required if Config.crashguardemail is configured! ' +
                    'Run npm install --no-save nodemailer and restart the server.');
            }
        }
        let text = `${description} crashed `;
        if (transport) {
            text += `again with this stack trace:\n${stack}`;
        }
        else {
            try {
                transport = require('nodemailer').createTransport(emailOpts.options);
            }
            catch {
                throw new Error("Failed to start nodemailer; are you sure you've configured Config.crashguardemail correctly?");
            }
            text += `with this stack trace:\n${stack}`;
        }
        transport.sendMail({
            from: emailOpts.from,
            to: emailOpts.to,
            subject: emailOpts.subject,
            text,
        }, (err) => {
            if (err)
                console.error(`Error sending email: ${err}`);
        });
    }
    return null;
}
