"use strict";
/**
 * Team Validator
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Spawns a child process to validate teams.
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
exports.get = exports.TeamValidatorAsync = exports.PM = void 0;
exports.start = start;
exports.destroy = destroy;
const team_validator_1 = require("../sim/team-validator");
const ConfigLoader = __importStar(require("./config-loader"));
exports.PM = new process_manager_1.QueryProcessManager('team-validator', module, message => {
    const { formatid, options, team } = message;
    const parsedTeam = Teams.unpack(team);
    if (Config.debugvalidatorprocesses && process.send) {
        process.send('DEBUG\n' + JSON.stringify(message));
    }
    let problems;
    try {
        problems = team_validator_1.TeamValidator.get(formatid).validateTeam(parsedTeam, options);
    }
    catch (err) {
        Monitor.crashlog(err, 'A team validation', {
            formatid,
            team,
        });
        problems = [
            `Your team crashed the validator. We'll fix this crash within a few hours (we're automatically notified),` +
                ` but if you don't want to wait, just use a different team for now.`,
        ];
    }
    if (problems?.length) {
        return '0' + problems.join('\n');
    }
    const packedTeam = Teams.pack(parsedTeam);
    // console.log('FROM: ' + message.substr(pipeIndex2 + 1));
    // console.log('TO: ' + packedTeam);
    return '1' + packedTeam;
}, 2 * 60 * 1000);
class TeamValidatorAsync {
    constructor(format) {
        this.format = Dex.formats.get(format);
    }
    validateTeam(team, options) {
        let formatid = this.format.id;
        if (this.format.customRules)
            formatid += '@@@' + this.format.customRules.join(',');
        if (team.length > (25 * 1024 - 6)) { // don't even let it go to the child process
            return Promise.resolve('0Your team is over 25KB. Please use a smaller team.');
        }
        return exports.PM.query({ formatid, options, team });
    }
    static get(format) {
        return new TeamValidatorAsync(format);
    }
    static start(processCount) {
        start(processCount);
    }
}
exports.TeamValidatorAsync = TeamValidatorAsync;
TeamValidatorAsync.PM = exports.PM;
exports.get = TeamValidatorAsync.get;
/*********************************************************
 * Process manager
 *********************************************************/
const process_manager_1 = require("../lib/process-manager");
if (!exports.PM.isParentProcess) {
    ConfigLoader.ensureLoaded();
    global.Monitor = {
        crashlog(error, source = 'A team validator process', details = null) {
            const repr = JSON.stringify([error.name, error.message, source, details]);
            process.send(`THROW\n@!!@${repr}\n${error.stack}`);
        },
    };
    if (Config.crashguard) {
        process.on('uncaughtException', (err) => {
            Monitor.crashlog(err, `A team validator process`);
        });
        process.on('unhandledRejection', err => {
            Monitor.crashlog(err || {}, 'A team validator process Promise');
        });
    }
    global.Dex = require('../sim/dex').Dex.includeData();
    global.Teams = require('../sim/teams').Teams;
    // eslint-disable-next-line no-eval
    exports.PM.startRepl((cmd) => eval(cmd));
}
function start(processCount) {
    exports.PM.spawn(processCount['validator'] ?? 1);
}
function destroy() {
    // No need to destroy the PM under normal circumstances, since
    // hotpatching uses PM.respawn()
    void exports.PM.destroy();
}
