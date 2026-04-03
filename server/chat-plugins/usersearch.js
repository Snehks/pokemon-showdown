"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pages = exports.commands = exports.nameList = void 0;
const lib_1 = require("../../lib");
exports.nameList = new Set(JSON.parse((0, lib_1.FS)('config/chat-plugins/usersearch.json').readIfExistsSync() || "[]"));
const ONLINE_SYMBOL = ` \u25C9 `;
const OFFLINE_SYMBOL = ` \u25CC `;
class PunishmentHTML extends Chat.JSX.Component {
    render() {
        const { userid, target } = { ...this.props };
        const buf = [];
        for (const cmdName of ['Forcerename', 'Namelock', 'Weeknamelock']) {
            // We have to use dangerouslySetInnerHTML here because otherwise the `value`
            // property of the button tag is auto escaped, making &#10; into &amp;#10;
            buf.push(Chat.h("span", { dangerouslySetInnerHTML: {
                    __html: `<button class="button" name="send" value="/msgroom staff,/${toID(cmdName)} ${userid}` +
                        `&#10;/uspage ${target}">${cmdName}</button>`,
                } }));
        }
        return buf;
    }
}
class SearchUsernames extends Chat.JSX.Component {
    render() {
        const { target, page } = { ...this.props };
        const results = {
            offline: [],
            online: [],
        };
        for (const curUser of Users.users.values()) {
            if (!curUser.id.includes(target) || curUser.id.startsWith('guest'))
                continue;
            if (Punishments.isGlobalBanned(curUser))
                continue;
            if (curUser.connected) {
                results.online.push(`${!page ? ONLINE_SYMBOL : ''} ${curUser.name}`);
            }
            else {
                results.offline.push(`${!page ? OFFLINE_SYMBOL : ''} ${curUser.name}`);
            }
        }
        for (const k in results) {
            lib_1.Utils.sortBy(results[k], result => toID(result));
        }
        if (!page) {
            return Chat.h(Chat.Fragment, null,
                "Users with a name matching '",
                target,
                "':",
                Chat.h("br", null),
                !results.offline.length && !results.online.length ? (Chat.h(Chat.Fragment, null, "No users found.")) : (Chat.h(Chat.Fragment, null,
                    results.online.join('; '),
                    !!results.offline.length &&
                        Chat.h(Chat.Fragment, null,
                            !!results.online.length && Chat.h(Chat.Fragment, null,
                                Chat.h("br", null),
                                Chat.h("br", null)),
                            results.offline.join('; ')))));
        }
        return Chat.h("div", { class: "pad" },
            Chat.h("h2", null,
                "Usernames containing \"",
                target,
                "\""),
            !results.online.length && !results.offline.length ? (Chat.h("p", null, "No results found.")) : (Chat.h(Chat.Fragment, null,
                !!results.online.length && Chat.h("div", { class: "ladder pad" },
                    Chat.h("h3", null, "Online users"),
                    Chat.h("table", null,
                        Chat.h("tr", null,
                            Chat.h("th", null, "Username"),
                            Chat.h("th", null, "Punish")),
                        (() => {
                            const online = [];
                            for (const username of results.online) {
                                online.push(Chat.h("tr", null,
                                    Chat.h("td", null,
                                        Chat.h("username", null, username)),
                                    Chat.h("td", null,
                                        Chat.h(PunishmentHTML, { userid: toID(username), target: target }))));
                            }
                            return online;
                        })())),
                !!(results.online.length && results.offline.length) && Chat.h("hr", null),
                !!results.offline.length && Chat.h("div", { class: "ladder pad" },
                    Chat.h("h3", null, "Offline users"),
                    Chat.h("table", null,
                        Chat.h("tr", null,
                            Chat.h("th", null, "Username"),
                            Chat.h("th", null, "Punish")),
                        (() => {
                            const offline = [];
                            for (const username of results.offline) {
                                offline.push(Chat.h("tr", null,
                                    Chat.h("td", null,
                                        Chat.h("username", null, username)),
                                    Chat.h("td", null,
                                        Chat.h(PunishmentHTML, { userid: toID(username), target: target }))));
                            }
                            return offline;
                        })())))));
    }
}
function saveNames() {
    (0, lib_1.FS)('config/chat-plugins/usersearch.json').writeUpdate(() => JSON.stringify([...exports.nameList]));
}
exports.commands = {
    us: 'usersearch',
    uspage: 'usersearch',
    usersearchpage: 'usersearch',
    usersearch(target, room, user, connection, cmd) {
        this.checkCan('lock');
        target = toID(target);
        if (!target) { // just join directly if it's the page cmd, they're likely looking for the full list
            if (cmd.includes('page'))
                return this.parse(`/j view-usersearch`);
            return this.parse(`/help usersearch`);
        }
        if (target.length < 3) {
            throw new Chat.ErrorMessage(`That's too short of a term to search for.`);
        }
        const showPage = cmd.includes('page');
        if (showPage) {
            this.parse(`/j view-usersearch-${target}`);
            return;
        }
        return this.sendReplyBox(Chat.h(SearchUsernames, { target: target }));
    },
    usersearchhelp: [
        `/usersearch [pattern]: Looks for all names matching the [pattern]. Requires: % @ ~`,
        `Adding "page" to the end of the command, i.e. /usersearchpage OR /uspage will bring up a page.`,
        `See also /usnames for a staff-curated list of the most commonly searched terms.`,
    ],
    usnames: 'usersearchnames',
    usersearchnames: {
        '': 'list',
        list() {
            this.parse(`/join view-usersearch`);
        },
        add(target, room, user) {
            this.checkCan('lock');
            const targets = target.split(',').map(toID).filter(Boolean);
            if (!targets.length) {
                throw new Chat.ErrorMessage(`Specify at least one term.`);
            }
            for (const [i, arg] of targets.entries()) {
                if (exports.nameList.has(arg)) {
                    targets.splice(i, 1);
                    this.errorReply(`Term ${arg} is already on the usersearch term list.`);
                    continue;
                }
                if (arg.length < 3) {
                    targets.splice(i, 1);
                    this.errorReply(`Term ${arg} is too short for the usersearch term list. Must be more than 3 characters.`);
                    continue;
                }
                exports.nameList.add(arg);
            }
            if (!targets.length) {
                // fuck you too, "mia added 0 term to the usersearch name list"
                throw new Chat.ErrorMessage(`No terms could be added.`);
            }
            const count = Chat.count(targets, 'terms');
            Rooms.get('staff')?.addByUser(user, `${user.name} added the ${count} "${targets.join(', ')}" to the usersearch name list.`);
            this.globalModlog(`USERSEARCH ADD`, null, targets.join(', '));
            if (!room || room.roomid !== 'staff') {
                this.sendReply(`You added the ${count} "${targets.join(', ')}" to the usersearch name list.`);
            }
            saveNames();
        },
        remove(target, room, user) {
            this.checkCan('lock');
            const targets = target.split(',').map(toID).filter(Boolean);
            if (!targets.length) {
                throw new Chat.ErrorMessage(`Specify at least one term.`);
            }
            for (const [i, arg] of targets.entries()) {
                if (!exports.nameList.has(arg)) {
                    targets.splice(i, 1);
                    this.errorReply(`${arg} is not in the usersearch name list, and has been skipped.`);
                    continue;
                }
                exports.nameList.delete(arg);
            }
            if (!targets.length) {
                throw new Chat.ErrorMessage(`No terms could be removed.`);
            }
            const count = Chat.count(targets, 'terms');
            Rooms.get('staff')?.addByUser(user, `${user.name} removed the ${count} "${targets.join(', ')}" from the usersearch name list.`);
            this.globalModlog(`USERSEARCH REMOVE`, null, targets.join(', '));
            if (!room || room.roomid !== 'staff') {
                this.sendReply(`You removed the ${count} "${targets.join(', ')}"" from the usersearch name list.`);
            }
            saveNames();
        },
    },
    usnameshelp: [
        `/usnames add [...terms]: Adds the given [terms] to the usersearch name list. Requires: % @ ~`,
        `/usnames remove [...terms]: Removes the given [terms] from the usersearch name list. Requires: % @ ~`,
        `/usnames OR /usnames list: Shows the usersearch name list.`,
    ],
};
exports.pages = {
    usersearch(query, user) {
        this.checkCan('lock');
        const target = toID(query.shift());
        if (!target) {
            this.title = `[Usersearch Terms]`;
            const sorted = {};
            for (const curUser of Users.users.values()) {
                for (const term of exports.nameList) {
                    if (curUser.id.includes(term) && !curUser.id.startsWith('guest')) {
                        if (!(term in sorted))
                            sorted[term] = 0;
                        sorted[term]++;
                    }
                }
            }
            return Chat.h("div", { class: "pad" },
                Chat.h("strong", null, "Usersearch term list"),
                Chat.h("button", { style: { float: 'right' }, class: "button", name: "send", value: "/uspage" },
                    Chat.h("i", { class: "fa fa-refresh" }),
                    " Refresh"),
                Chat.h("hr", null),
                !exports.nameList.size ? (Chat.h("p", null, "None found.")) : (Chat.h("div", { class: "ladder pad" },
                    Chat.h("table", null,
                        Chat.h("tr", null,
                            Chat.h("th", null, "Term"),
                            Chat.h("th", null, "Current Matches"),
                            Chat.h("th", null)),
                        (() => {
                            const buf = [];
                            for (const k of lib_1.Utils.sortBy(Object.keys(sorted), v => -sorted[v])) {
                                buf.push(Chat.h("tr", null,
                                    Chat.h("td", null, k),
                                    Chat.h("td", null, sorted[k]),
                                    Chat.h("td", null,
                                        Chat.h("button", { class: "button", name: "send", value: `/uspage ${k}` }, "Search"))));
                            }
                            if (!buf.length)
                                return Chat.h("tr", null,
                                    Chat.h("td", { colSpan: 3, style: { textAlign: 'center' } }, "No names found."));
                            return buf;
                        })()))));
        }
        this.title = `[Usersearch] ${target}`;
        return Chat.h(SearchUsernames, { target: target, page: true });
    },
};
