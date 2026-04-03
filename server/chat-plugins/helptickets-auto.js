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
exports.pages = exports.commands = exports.classifier = exports.checkers = exports.actionHandlers = exports.settings = void 0;
exports.punishmentsFor = punishmentsFor;
exports.determinePunishment = determinePunishment;
exports.globalModlog = globalModlog;
exports.addModAction = addModAction;
exports.getModlog = getModlog;
exports.getMessageAverages = getMessageAverages;
exports.runPunishments = runPunishments;
const lib_1 = require("../../lib");
const helptickets_1 = require("./helptickets");
const Artemis = __importStar(require("../artemis"));
const ORDERED_PUNISHMENTS = ['WARN', 'FORCERENAME', 'LOCK', 'NAMELOCK', 'WEEKLOCK', 'WEEKNAMELOCK'];
const PMLOG_IGNORE_TIME = 24 * 60 * 60 * 1000;
const WHITELIST = ['mia'];
const defaults = {
    punishments: [{
            ticketType: 'inapname',
            punishment: 'forcerename',
            severity: { type: ['sexual_explicit', 'severe_toxicity', 'identity_attack'], certainty: 0.4 },
        }, {
            ticketType: 'pmharassment',
            punishment: 'warn',
            severity: { type: ['sexual_explicit', 'severe_toxicity', 'identity_attack'], certainty: 0.15 },
        }],
    applyPunishments: false,
};
exports.settings = (() => {
    try {
        // spreading w/ default means that
        // adding new things won't crash by not existing
        return { ...defaults, ...JSON.parse((0, lib_1.FS)('config/chat-plugins/ht-auto.json').readSync()) };
    }
    catch {
        return defaults;
    }
})();
function saveSettings() {
    return (0, lib_1.FS)('config/chat-plugins/ht-auto.json').writeUpdate(() => JSON.stringify(exports.settings));
}
function visualizePunishment(punishment) {
    const buf = [`punishment: ${punishment.punishment?.toUpperCase()}`];
    buf.push(`ticket type: ${punishment.ticketType}`);
    if (punishment.severity) {
        buf.push(`severity: ${punishment.severity.certainty} (for ${punishment.severity.type.join(', ')})`);
    }
    if (punishment.modlogCount) {
        buf.push(`required modlog: ${punishment.modlogCount}`);
    }
    if (punishment.isSingleMessage) {
        buf.push(`for single messages only`);
    }
    return buf.join(', ');
}
function checkAccess(context) {
    if (!WHITELIST.includes(context.user.id))
        context.checkCan('bypassall');
}
function punishmentsFor(type) {
    return exports.settings.punishments.filter(t => t.ticketType === type);
}
/** Is punishment1 higher than punishment2 on the list? */
function supersedes(p1, p2) {
    return ORDERED_PUNISHMENTS.indexOf(p1) > ORDERED_PUNISHMENTS.indexOf(p2);
}
function determinePunishment(ticketType, results, modlog, isSingleMessage = false) {
    const punishments = punishmentsFor(ticketType);
    let action = null;
    const types = [];
    lib_1.Utils.sortBy(punishments, p => -ORDERED_PUNISHMENTS.indexOf(p.punishment));
    for (const punishment of punishments) {
        if (isSingleMessage && !punishment.isSingleMessage)
            continue;
        if (punishment.modlogCount && modlog.length < punishment.modlogCount)
            continue;
        if (punishment.severity) {
            let hit = false;
            for (const type of punishment.severity.type) {
                if (results[type] < punishment.severity.certainty)
                    continue;
                hit = true;
                types.push(type);
                break;
            }
            if (!hit)
                continue;
        }
        if (!action || supersedes(punishment.punishment, action)) {
            action = punishment.punishment;
        }
    }
    return { action, types };
}
function globalModlog(action, user, note, roomid) {
    user = Users.get(user) || user;
    void Rooms.Modlog.write(roomid || 'global', {
        action,
        ip: user && typeof user === 'object' ? user.latestIp : undefined,
        userid: toID(user) || undefined,
        loggedBy: 'artemis',
        note,
    });
}
function addModAction(message) {
    Rooms.get('staff')?.add(`|c|~|/log ${message}`).update();
}
async function getModlog(params) {
    const search = {
        note: [],
        user: [],
        ip: [],
        action: [],
        actionTaker: [],
    };
    if (params.user)
        search.user = [{ search: params.user, isExact: true }];
    if (params.ip)
        search.ip = [{ search: params.ip }];
    if (params.actions)
        search.action = params.actions.map(s => ({ search: s }));
    const res = await Rooms.Modlog.search('global', search);
    return res?.results || [];
}
function closeTicket(ticket, msg) {
    if (!ticket.open)
        return;
    ticket.open = false;
    ticket.active = false;
    ticket.resolved = {
        time: Date.now(),
        by: 'the Artemis AI', // we want it to be clear to end users that it was not a human
        seen: false,
        staffReason: '',
        result: msg || '',
        note: (`Want to learn more about the AI? ` +
            `<a href="https://www.smogon.com/forums/threads/3570628/#post-9056769">Visit the information thread</a>.`),
    };
    (0, helptickets_1.writeTickets)();
    (0, helptickets_1.notifyStaff)();
    const tarUser = Users.get(ticket.userid);
    if (tarUser) {
        helptickets_1.HelpTicket.notifyResolved(tarUser, ticket, ticket.userid);
    }
    // TODO: Support closing as invalid
    (0, helptickets_1.writeStats)(`${ticket.type}\t${Date.now() - ticket.created}\t0\t0\tresolved\tvalid\tartemis`);
}
async function lock(user, result, ticket, isWeek, isName) {
    const id = toID(user);
    let desc, type;
    const expireTime = isWeek ? Date.now() + 7 * 24 * 60 * 60 * 1000 : null;
    if (isName) {
        if (typeof user === 'object')
            user.resetName();
        desc = 'locked your username and prevented you from changing names';
        type = `locked from talking${isWeek ? ` for a week` : ""}`;
        await Punishments.namelock(id, expireTime, null, false, result.reason || "Automatically locked due to a user report");
    }
    else {
        type = isWeek ? 'weeknamelocked' : 'namelocked';
        desc = 'locked you from talking in chats, battles, and PMing regular users';
        await Punishments.lock(id, expireTime, null, false, result.reason || "Automatically locked due to a user report");
    }
    if (typeof user !== 'string') {
        let message = `|popup||html|${user.name} has ${desc} for ${isWeek ? '7' : '2'} days.`;
        if (result.reason)
            message += `\n\nReason: ${result.reason}`;
        let appeal = '';
        if (Chat.pages.help) {
            appeal += `<a href="view-help-request--appeal"><button class="button"><strong>Appeal your punishment</strong></button></a>`;
        }
        else if (Config.appealurl) {
            appeal += `appeal: <a href="${Config.appealurl}">${Config.appealurl}</a>`;
        }
        if (appeal)
            message += `\n\nIf you feel that your lock was unjustified, you can ${appeal}.`;
        message += `\n\nYour lock will expire in a few days.`;
        user.send(message);
    }
    addModAction(`${id} was ${type} by Artemis. (${result.reason || `report from ${ticket.creator}`})`);
    globalModlog(`${isWeek ? 'WEEK' : ""}${isName ? "NAME" : ""}LOCK`, id, (result.reason || `report from ${ticket.creator}`) + (result.proof ? ` PROOF: ${result.proof}` : ""));
}
exports.actionHandlers = {
    forcerename(user, result, ticket) {
        if (typeof user === 'string')
            return; // they can only submit users with existing userobjects anyway
        const id = toID(user);
        user.resetName();
        user.trackRename = id;
        Monitor.forceRenames.set(id, true);
        user.send('|nametaken|Your name was detected to be breaking our name rules. ' +
            `${result.reason ? `Reason: ${result.reason}. ` : ""}` +
            'Please change it, or submit a help ticket by typing /ht in chat to appeal this action.');
        Rooms.get('staff')?.add(`|html|<span class="username">${id}</span> ` +
            `was automatically forced to choose a new name by Artemis (report from ${ticket.userid}).`).update();
        globalModlog('FORCERENAME', id, `username determined to be inappropriate due to a report by ${ticket.creator}`, result.roomid);
        return `${id} was automatically forcerenamed. Thank you for reporting.`;
    },
    async namelock(user, result, ticket) {
        await lock(user, result, ticket, false, true);
        return `${toID(user)} was automatically namelocked. Thank you for reporting.`;
    },
    async weeknamelock(user, result, ticket) {
        await lock(user, result, ticket, true, true);
        return `${toID(user)} was automatically weeknamelocked. Thank you for reporting.`;
    },
    async lock(user, result, ticket) {
        await lock(user, result, ticket);
        return `${toID(user)} was automatically locked. Thank you for reporting.`;
    },
    async weeklock(user, result, ticket) {
        await lock(user, result, ticket, true);
        return `${toID(user)} was automatically weeklocked. Thank you for reporting.`;
    },
    warn(user, result, ticket) {
        user = toID(user);
        user = Users.get(user) || user;
        if (typeof user === 'object') {
            user.send(`|c|~|/warn ${result.reason || ""}`);
        }
        else {
            Punishments.offlineWarns.set(user, result.reason);
        }
        addModAction(`${user} was warned by Artemis. ${typeof user === 'string' ? 'while offline ' : ""}` +
            `(${result.reason || `report from ${ticket.creator}`})`);
        globalModlog('WARN', user, result.reason || `report from ${ticket.creator}`);
        return `${user} was automatically warned. Thank you for reporting.`;
    },
};
function shouldNotProcess(message) {
    return (
    // special 'command', blocks things like /log, /raw, /html
    // (but not a // message)
    (message.startsWith('/') && !message.startsWith('//')) ||
        // broadcasted chat command
        message.startsWith('!'));
}
async function getMessageAverages(messages) {
    const counts = {};
    const classified = [];
    for (const message of messages) {
        if (shouldNotProcess(message))
            continue;
        const res = await exports.classifier.classify(message);
        if (!res)
            continue;
        classified.push(res);
        for (const k in res) {
            if (!counts[k])
                counts[k] = { count: 0, raw: 0 };
            counts[k].count++;
            counts[k].raw += res[k];
        }
    }
    const averages = {};
    for (const k in counts) {
        averages[k] = counts[k].raw / counts[k].count;
    }
    return { averages, classified };
}
exports.checkers = {
    async inapname(ticket) {
        const id = toID(ticket.text[0]);
        const user = Users.getExact(id);
        if (user && !user.trusted) {
            const result = await exports.classifier.classify(user.name);
            if (!result)
                return;
            const keys = ['identity_attack', 'sexual_explicit', 'severe_toxicity'];
            const matched = keys.some(k => result[k] >= 0.4);
            if (matched) {
                const modlog = await getModlog({
                    ip: user.latestIp,
                    actions: ['FORCERENAME', 'NAMELOCK', 'WEEKNAMELOCK'],
                });
                let { action } = determinePunishment('inapname', result, modlog);
                if (!action)
                    action = 'forcerename';
                return new Map([[user.id, {
                            action,
                            user,
                            result,
                            reason: "Username detected to be breaking username rules",
                        }]]);
            }
        }
    },
    async inappokemon(ticket) {
        const actions = new Map();
        const links = [...(0, helptickets_1.getBattleLinks)(ticket.text[0]), ...(0, helptickets_1.getBattleLinks)(ticket.text[1])];
        for (const link of links) {
            const log = await (0, helptickets_1.getBattleLog)(link);
            if (!log)
                continue;
            for (const [user, pokemon] of Object.entries(log.pokemon)) {
                const userid = toID(user);
                let result = null;
                for (const set of pokemon) {
                    if (!set.name)
                        continue;
                    const results = await exports.classifier.classify(set.name);
                    if (!results)
                        continue;
                    // atm don't factor in modlog
                    const curAction = determinePunishment('inappokemon', results, []).action;
                    if (curAction && (!result || supersedes(curAction, result.action))) {
                        result = { action: curAction, name: set.name, result: results, replay: link };
                    }
                }
                if (result) {
                    actions.set(user, {
                        action: result.action,
                        user: userid,
                        result: result.result,
                        reason: `Pokemon name detected to be breaking rules - '${result.name}'`,
                        roomid: link,
                    });
                }
            }
        }
        if (actions.size)
            return actions;
    },
    async battleharassment(ticket) {
        const urls = (0, helptickets_1.getBattleLinks)(ticket.text[0]);
        const actions = new Map();
        for (const url of urls) {
            const log = await (0, helptickets_1.getBattleLog)(url);
            if (!log)
                continue;
            const messages = {};
            for (const message of log.log) {
                const [username, text] = lib_1.Utils.splitFirst(message.slice(3), '|').map(f => f.trim());
                const id = toID(username);
                if (!id)
                    continue;
                if (!messages[id])
                    messages[id] = [];
                messages[id].push(text);
            }
            for (const [id, messageList] of Object.entries(messages)) {
                const { averages, classified } = await getMessageAverages(messageList);
                const { action } = determinePunishment('battleharassment', averages, []);
                if (action) {
                    const existingPunishment = actions.get(id);
                    if (!existingPunishment || supersedes(action, existingPunishment.action)) {
                        actions.set(id, {
                            action,
                            user: toID(id),
                            result: averages,
                            reason: `Not following rules in battles (https://${Config.routes.client}/${url})`,
                            proof: urls.join(', '),
                        });
                    }
                }
                for (const result of classified) {
                    const curPunishment = determinePunishment('battleharassment', result, [], true).action;
                    if (!curPunishment)
                        continue;
                    const exists = actions.get(id);
                    if (!exists || supersedes(curPunishment, exists.action)) {
                        actions.set(id, {
                            action: curPunishment,
                            user: toID(id),
                            result: averages,
                            reason: `Not following rules in battles (https://${Config.routes.client}/${url})`,
                            proof: urls.join(', '),
                        });
                    }
                }
            }
        }
        // ensure reasons are clear
        const creatorWasPunished = actions.get(ticket.userid);
        if (creatorWasPunished) {
            let displayReason = 'You were punished for your behavior.';
            if (actions.size !== 1) { // more than 1 was punished
                displayReason += ` ${actions.size - 1} other(s) were also punished.`;
            }
            creatorWasPunished.displayReason = displayReason;
        }
        if (actions.size)
            return actions;
    },
    async pmharassment(ticket) {
        const actions = new Map();
        const targetId = toID(ticket.text[0]);
        const creator = ticket.userid;
        if (!Config.getpmlog)
            return;
        const pmLog = await Config.getpmlog(targetId, creator);
        const messages = {};
        const ids = new Set();
        // sort messages by user who sent them, also filter out old ones
        for (const { from, message, timestamp } of pmLog) {
            // ignore pmlogs more than 24h old
            if ((Date.now() - new Date(timestamp).getTime()) > PMLOG_IGNORE_TIME)
                continue;
            const id = toID(from);
            ids.add(id);
            if (!messages[id])
                messages[id] = [];
            messages[id].push(message);
        }
        for (const id of ids) {
            let punishment;
            const { averages, classified } = await getMessageAverages(messages[id]);
            const curPunishment = determinePunishment('pmharassment', averages, []).action;
            if (curPunishment) {
                if (!punishment || supersedes(curPunishment, punishment)) {
                    punishment = curPunishment;
                }
                if (punishment) {
                    actions.set(id, {
                        action: punishment,
                        user: id,
                        result: {},
                        reason: `PM harassment (against ${ticket.userid === id ? targetId : ticket.userid})`,
                    });
                }
            }
            for (const result of classified) {
                const { action } = determinePunishment('pmharassment', result, [], true);
                if (!action)
                    continue;
                const exists = actions.get(id);
                if (!exists || supersedes(action, exists.action)) {
                    actions.set(id, {
                        action,
                        user: id,
                        result: {},
                        reason: `PM harassment (against ${ticket.userid === id ? targetId : ticket.userid})`,
                    });
                }
            }
        }
        const creatorWasPunished = actions.get(ticket.userid);
        if (creatorWasPunished) {
            let displayReason = `You were punished for your behavior. `;
            if (actions.has(targetId) && targetId !== ticket.userid) {
                displayReason += ` The person you reported was also punished.`;
            }
            creatorWasPunished.displayReason = displayReason;
        }
        if (actions.size)
            return actions;
    },
};
exports.classifier = new Artemis.LocalClassifier();
async function runPunishments(ticket, typeId) {
    let result = null;
    if (exports.checkers[typeId]) {
        result = await exports.checkers[typeId](ticket) || null;
    }
    if (result) {
        if (exports.settings.applyPunishments) {
            const responses = [];
            for (const res of result.values()) {
                const curResult = await exports.actionHandlers[res.action.toLowerCase()](res.user, res, ticket);
                if (curResult)
                    responses.push([res.action, res.displayReason || curResult]);
                if (toID(res.user) === ticket.creator) {
                    // just close the ticket here.
                    closeTicket(ticket, res.displayReason);
                }
            }
            if (responses.length) {
                // if we don't have one for the user, find one.
                lib_1.Utils.sortBy(responses, r => -ORDERED_PUNISHMENTS.indexOf(r[0]));
                closeTicket(ticket, responses[0][1]);
            }
            else {
                closeTicket(ticket); // no good response. just close it, because we __have__ dispatched an action.
            }
        }
        else {
            // eslint-disable-next-line require-atomic-updates
            ticket.recommended = [];
            for (const res of result.values()) {
                Rooms.get('abuselog')?.add(`|c|~|/log [${ticket.type} Monitor] Recommended: ${res.action}: for ${res.user} (${res.reason})`).update();
                ticket.recommended.push(`${res.action}: for ${res.user} (${res.reason})`);
            }
        }
    }
}
exports.commands = {
    aht: 'autohelpticket',
    autohelpticket: {
        ''() {
            return this.parse(`/help autohelpticket`);
        },
        async test(target) {
            checkAccess(this);
            target = target.trim();
            const response = await exports.classifier.classify(target) || {};
            let buf = lib_1.Utils.html `<strong>Results for "${target}":</strong><br />`;
            buf += `<strong>Score breakdown:</strong><br />`;
            for (const k in response) {
                buf += `&bull; ${k}: ${response[k]}<br />`;
            }
            this.runBroadcast();
            this.sendReplyBox(buf);
        },
        ap: 'addpunishment',
        add: 'addpunishment',
        addpunishment(target, room, user) {
            checkAccess(this);
            if (!toID(target))
                return this.parse(`/help autohelpticket`);
            const args = Chat.parseArguments(target);
            const punishment = {};
            for (const [k, list] of Object.entries(args)) {
                if (k !== 'type' && list.length > 1)
                    throw new Chat.ErrorMessage(`More than one ${k} param provided.`);
                const val = list[0]; // if key exists, val must exist too
                switch (k) {
                    case 'type':
                    case 't':
                        const types = list.map(f => f.toLowerCase().replace(/\s/g, '_'));
                        for (const type of types) {
                            if (!Artemis.LocalClassifier.ATTRIBUTES[type]) {
                                throw new Chat.ErrorMessage(`Invalid classifier type '${type}'. Valid types are ` +
                                    Object.keys(Artemis.LocalClassifier.ATTRIBUTES).join(', '));
                            }
                        }
                        if (!punishment.severity) {
                            punishment.severity = { certainty: 0, type: [] };
                        }
                        punishment.severity.type.push(...types);
                        break;
                    case 'certainty':
                    case 'c':
                        const num = parseFloat(val);
                        if (isNaN(num) || num < 0 || num > 1) {
                            throw new Chat.ErrorMessage(`Certainty must be a number below 1 and above 0.`);
                        }
                        if (!punishment.severity) {
                            punishment.severity = { certainty: 0, type: [] };
                        }
                        punishment.severity.certainty = num;
                        break;
                    case 'modlog':
                    case 'm':
                        const count = parseInt(val);
                        if (isNaN(count) || count < 0) {
                            throw new Chat.ErrorMessage(`Modlog count must be a number above 0.`);
                        }
                        punishment.modlogCount = count;
                        break;
                    case 'ticket':
                    case 'tt':
                    case 'tickettype':
                        const type = toID(val);
                        if (!(type in exports.checkers)) {
                            throw new Chat.ErrorMessage(`The ticket type '${type}' does not exist or is not supported. ` +
                                `Supported types are ${Object.keys(exports.checkers).join(', ')}.`);
                        }
                        punishment.ticketType = type;
                        break;
                    case 'p':
                    case 'punishment':
                        const name = toID(val).toUpperCase();
                        if (!ORDERED_PUNISHMENTS.includes(name)) {
                            throw new Chat.ErrorMessage(`Punishment '${name}' not supported. ` +
                                `Supported punishments: ${ORDERED_PUNISHMENTS.join(', ')}`);
                        }
                        punishment.punishment = name;
                        break;
                    case 'single':
                    case 's':
                        if (!this.meansYes(toID(val))) {
                            throw new Chat.ErrorMessage(`The 'single' value must always be 'on'. ` +
                                `If you don't want it enabled, just do not use this argument type.`);
                        }
                        punishment.isSingleMessage = true;
                        break;
                }
            }
            if (!punishment.ticketType) {
                throw new Chat.ErrorMessage(`Must specify a ticket type to handle.`);
            }
            if (!punishment.punishment) {
                throw new Chat.ErrorMessage(`Must specify a punishment to apply.`);
            }
            if (!(punishment.severity?.certainty && punishment.severity?.type.length)) {
                throw new Chat.ErrorMessage(`A severity to monitor for must be specified (certainty).`);
            }
            for (const curP of exports.settings.punishments) {
                let matches = 0;
                for (const k in curP) {
                    if (punishment[k] === curP[k]) {
                        matches++;
                    }
                }
                if (matches === Object.keys(punishment).length) {
                    throw new Chat.ErrorMessage(`That punishment is already added.`);
                }
            }
            exports.settings.punishments.push(punishment);
            saveSettings();
            this.privateGlobalModAction(`${user.name} added a ${punishment.punishment} punishment to the Artemis helpticket handler.`);
            this.globalModlog(`AUTOHELPTICKET ADDPUNISHMENT`, null, visualizePunishment(punishment));
        },
        dp: 'deletepunishment',
        delete: 'deletepunishment',
        deletepunishment(target, room, user) {
            checkAccess(this);
            const num = parseInt(target) - 1;
            if (isNaN(num))
                return this.parse(`/h autohelpticket`);
            const punishment = exports.settings.punishments[num];
            if (!punishment)
                throw new Chat.ErrorMessage(`There is no punishment at index ${num + 1}.`);
            exports.settings.punishments.splice(num, 1);
            this.privateGlobalModAction(`${user.name} removed the Artemis helpticket ${punishment.punishment} punishment indexed at ${num + 1}`);
            this.globalModlog(`AUTOHELPTICKET REMOVE`, null, visualizePunishment(punishment));
        },
        vp: 'viewpunishments',
        view: 'viewpunishments',
        viewpunishments() {
            checkAccess(this);
            let buf = `<strong>Artemis helpticket punishments</strong><hr />`;
            if (!exports.settings.punishments.length) {
                buf += `None.`;
                return this.sendReplyBox(buf);
            }
            buf += exports.settings.punishments.map((curP, i) => `<strong>${i + 1}:</strong> ${visualizePunishment(curP)}`).join('<br />');
            return this.sendReplyBox(buf);
        },
        togglepunishments(target, room, user) {
            checkAccess(this);
            let message;
            if (this.meansYes(target)) {
                if (exports.settings.applyPunishments) {
                    throw new Chat.ErrorMessage(`Automatic punishments are already enabled.`);
                }
                exports.settings.applyPunishments = true;
                message = `${user.name} enabled automatic punishments for the Artemis ticket handler`;
            }
            else if (this.meansNo(target)) {
                if (!exports.settings.applyPunishments) {
                    throw new Chat.ErrorMessage(`Automatic punishments are already disabled.`);
                }
                exports.settings.applyPunishments = false;
                message = `${user.name} disabled automatic punishments for the Artemis ticket handler`;
            }
            else {
                throw new Chat.ErrorMessage(`Invalid setting. Must be 'on' or 'off'.`);
            }
            this.privateGlobalModAction(message);
            this.globalModlog(`AUTOHELPTICKET TOGGLE`, null, exports.settings.applyPunishments ? 'on' : 'off');
            saveSettings();
        },
        stats(target) {
            if (!target)
                target = Chat.toTimestamp(new Date()).split(' ')[0];
            return this.parse(`/j view-autohelpticket-stats-${target}`);
        },
        logs(target) {
            if (!target)
                target = Chat.toTimestamp(new Date()).split(' ')[0];
            return this.parse(`/j view-autohelpticket-logs-${target}`);
        },
        resolve(target, room, user) {
            this.checkCan('lock');
            const [ticketId, result] = lib_1.Utils.splitFirst(target, ',').map(toID);
            const ticket = helptickets_1.tickets[ticketId];
            if (!ticket?.open) {
                return this.popupReply(`The user '${ticketId}' does not have a ticket open at present.`);
            }
            if (!['success', 'failure'].includes(result)) {
                return this.popupReply(`The result must be 'success' or 'failure'.`);
            }
            (ticket.state || (ticket.state = {})).recommendResult = result;
            (0, helptickets_1.writeTickets)();
            Chat.refreshPageFor(`help-text-${ticketId}`, 'staff');
        },
    },
    autohelptickethelp: [
        `/aht addpunishment [args] - Adds a punishment with the given [args]. Requires: whitelist ~`,
        `/aht deletepunishment [index] - Deletes the automatic helpticket punishment at [index]. Requires: whitelist ~`,
        `/aht viewpunishments - View automatic helpticket punishments. Requires: whitelist ~`,
        `/aht togglepunishments [on | off] - Turn [on | off] automatic helpticket punishments. Requires: whitelist ~`,
        `/aht stats - View success rates of the Artemis ticket handler. Requires: whitelist ~`,
    ],
};
exports.pages = {
    autohelpticket: {
        async stats(query, user) {
            checkAccess(this);
            let month;
            if (query.length) {
                month = /[0-9]{4}-[0-9]{2}/.exec(query.join('-'))?.[0];
            }
            else {
                month = Chat.toTimestamp(new Date()).split(' ')[0].slice(0, -3);
            }
            if (!month) {
                throw new Chat.ErrorMessage(`Invalid month. Must be in YYYY-MM format.`);
            }
            this.title = `[Artemis Ticket Stats] ${month}`;
            this.setHTML(`<div class="pad"><h3>Artemis ticket stats</h3><hr />Searching...`);
            const found = await helptickets_1.HelpTicket.getTextLogs(['recommendResult'], month);
            const percent = (numerator, denom) => Math.floor((numerator / denom) * 100);
            let buf = `<div class="pad">`;
            buf += `<button style="float:right;" class="button" name="send" value="/join ${this.pageid}">`;
            buf += `<i class="fa fa-refresh"></i> Refresh</button>`;
            buf += `<h3>Artemis ticket stats</h3><hr />`;
            const dayStats = {};
            const total = { successes: 0, failures: 0, total: 0 };
            const failed = [];
            for (const ticket of found) {
                const day = Chat.toTimestamp(new Date(ticket.created)).split(' ')[0];
                if (!dayStats[day])
                    dayStats[day] = { successes: 0, failures: 0, total: 0 };
                dayStats[day].total++;
                total.total++;
                switch (ticket.state.recommendResult) {
                    case 'success':
                        dayStats[day].successes++;
                        total.successes++;
                        break;
                    case 'failure':
                        dayStats[day].failures++;
                        total.failures++;
                        failed.push([ticket.userid, ticket.type]);
                        break;
                }
            }
            buf += `<strong>Total:</strong> ${total.total}<br />`;
            buf += `<strong>Success rate:</strong> ${percent(total.successes, total.total)}% (${total.successes})<br />`;
            buf += `<strong>Failure rate:</strong> ${percent(total.failures, total.total)}% (${total.failures})<br />`;
            buf += `<strong>Day stats:</strong><br />`;
            buf += `<div class="ladder pad"><table>`;
            let header = '';
            let data = '';
            const sortedDays = lib_1.Utils.sortBy(Object.keys(dayStats), d => new Date(d).getTime());
            for (const [i, day] of sortedDays.entries()) {
                const cur = dayStats[day];
                if (!cur.total)
                    continue;
                header += `<th>${day.split('-')[2]} (${cur.total})</th>`;
                data += `<td><small>${cur.successes} (${percent(cur.successes, cur.total)}%)`;
                if (cur.failures) {
                    data += ` | ${cur.failures} (${percent(cur.failures, cur.total)}%)`;
                }
                else { // so one cannot confuse dead tickets ~ false hit tickets
                    data += ' | 0 (0%)';
                }
                data += '</small></td>';
                // i + 1 ensures it's above 0 always (0 % 5 === 0)
                if ((i + 1) % 5 === 0 && sortedDays[i + 1]) {
                    buf += `<tr>${header}</tr><tr>${data}</tr>`;
                    buf += `</div></table>`;
                    buf += `<div class="ladder pad"><table>`;
                    header = '';
                    data = '';
                }
            }
            buf += `<tr>${header}</tr><tr>${data}</tr>`;
            buf += `</div></table>`;
            buf += `<br />`;
            if (failed.length) {
                buf += `<details class="readmore"><summary>Marked as inaccurate</summary>`;
                buf += failed.map(([userid, type]) => (`<a href="/view-help-text-${userid}">${userid}</a> (${type})`)).join('<br />');
                buf += `</details>`;
            }
            return buf;
        },
        async logs(query, user) {
            checkAccess(this);
            let month;
            if (query.length) {
                month = /[0-9]{4}-[0-9]{2}/.exec(query.join('-'))?.[0];
            }
            else {
                month = Chat.toTimestamp(new Date()).split(' ')[0].slice(0, -3);
            }
            if (!month) {
                throw new Chat.ErrorMessage(`Invalid month. Must be in YYYY-MM format.`);
            }
            this.title = `[Artemis Ticket Logs]`;
            let buf = `<div class="pad"><h3>Artemis ticket logs</h3><hr />`;
            const allHits = await helptickets_1.HelpTicket.getTextLogs(['recommended'], month);
            lib_1.Utils.sortBy(allHits, h => -h.created);
            if (allHits.length) {
                buf += `<strong>All hits:</strong><hr />`;
                for (const hit of allHits) {
                    if (!hit.recommended)
                        continue; // ???
                    buf += `<a href="/view-help-text-${hit.userid}">${hit.userid}</a> (${hit.type}) `;
                    buf += `[${Chat.toTimestamp(new Date(hit.created))}]<br />`;
                    buf += lib_1.Utils.html `&bull; <code><small>${hit.recommended.join(', ')}</small></code><hr />`;
                }
            }
            else {
                buf += `<div class="message-error">No hits found.</div>`;
            }
            return buf;
        },
    },
};
