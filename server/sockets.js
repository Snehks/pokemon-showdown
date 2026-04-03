"use strict";
/**
 * Connections
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Abstraction layer for multi-process SockJS connections.
 *
 * This file handles all the communications between the users'
 * browsers, the networking processes, and users.ts in the
 * main process.
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
exports.PM = exports.ServerStream = exports.Sockets = void 0;
const fs = __importStar(require("fs"));
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const path = __importStar(require("path"));
const ConfigLoader = __importStar(require("./config-loader"));
const lib_1 = require("../lib");
const ip_tools_1 = require("./ip-tools");
const battle_1 = require("../sim/battle");
const static_server_1 = require("../lib/static-server");
exports.Sockets = new class {
    async onSpawn(worker) {
        const id = worker.workerid;
        for await (const data of worker.stream) {
            switch (data.charAt(0)) {
                case '*': {
                    // *socketid, ip, protocol
                    // connect
                    worker.load++;
                    const [socketid, ip, protocol] = data.substr(1).split('\n');
                    Users.socketConnect(worker, id, socketid, ip, protocol);
                    break;
                }
                case '!': {
                    // !socketid
                    // disconnect
                    worker.load--;
                    const socketid = data.substr(1);
                    Users.socketDisconnect(worker, id, socketid);
                    break;
                }
                case '<': {
                    // <socketid, message
                    // message
                    const idx = data.indexOf('\n');
                    const socketid = data.substr(1, idx - 1);
                    const message = data.substr(idx + 1);
                    Users.socketReceive(worker, id, socketid, message);
                    break;
                }
                default:
                // unhandled
            }
        }
    }
    onUnspawn(worker) {
        Users.socketDisconnectAll(worker, worker.workerid);
    }
    listen(port, bindAddress, processesCount) {
        if (port !== undefined && !isNaN(port)) {
            Config.port = port;
            Config.ssl = null;
        }
        else {
            port = Config.port;
            // Autoconfigure when running in cloud environments.
            try {
                const cloudenv = require('cloud-env');
                bindAddress = cloudenv.get('IP', bindAddress);
                port = cloudenv.get('PORT', port);
            }
            catch { }
        }
        if (bindAddress !== undefined) {
            Config.bindaddress = bindAddress;
        }
        if (port !== undefined) {
            Config.port = port;
        }
        const workerCount = processesCount?.['network'] ?? 1;
        exports.PM.env = { PSPORT: Config.port, PSBINDADDR: Config.bindaddress || '0.0.0.0', PSNOSSL: Config.ssl ? 0 : 1 };
        exports.PM.subscribeSpawn(worker => void this.onSpawn(worker));
        exports.PM.subscribeUnspawn(this.onUnspawn);
        exports.PM.spawn(workerCount);
    }
    socketSend(worker, socketid, message) {
        void worker.stream.write(`>${socketid}\n${message}`);
    }
    socketDisconnect(worker, socketid) {
        void worker.stream.write(`!${socketid}`);
    }
    roomBroadcast(roomid, message) {
        for (const worker of exports.PM.workers) {
            void worker.stream.write(`#${roomid}\n${message}`);
        }
    }
    roomAdd(worker, roomid, socketid) {
        void worker.stream.write(`+${roomid}\n${socketid}`);
    }
    roomRemove(worker, roomid, socketid) {
        void worker.stream.write(`-${roomid}\n${socketid}`);
    }
    channelBroadcast(roomid, message) {
        for (const worker of exports.PM.workers) {
            void worker.stream.write(`:${roomid}\n${message}`);
        }
    }
    channelMove(worker, roomid, channelid, socketid) {
        void worker.stream.write(`.${roomid}\n${channelid}\n${socketid}`);
    }
    eval(worker, query) {
        void worker.stream.write(`$${query}`);
    }
    start(processCount) {
        start(processCount);
    }
};
class ServerStream extends lib_1.Streams.ObjectReadWriteStream {
    constructor(config) {
        super();
        /** socketid:Connection */
        this.sockets = new Map();
        /** roomid:socketid:Connection */
        this.rooms = new Map();
        /** roomid:socketid:channelid */
        this.roomChannels = new Map();
        this.socketCounter = 0;
        this.receivers = {
            '$'(data) {
                // $code
                // eslint-disable-next-line no-eval
                eval(data.substr(1));
            },
            '!'(data) {
                // !socketid
                // destroy
                const socketid = data.substr(1);
                const socket = this.sockets.get(socketid);
                if (!socket)
                    return;
                socket.destroy();
                this.sockets.delete(socketid);
                for (const [curRoomid, curRoom] of this.rooms) {
                    curRoom.delete(socketid);
                    const roomChannel = this.roomChannels.get(curRoomid);
                    if (roomChannel)
                        roomChannel.delete(socketid);
                    if (!curRoom.size) {
                        this.rooms.delete(curRoomid);
                        if (roomChannel)
                            this.roomChannels.delete(curRoomid);
                    }
                }
            },
            '>'(data) {
                // >socketid, message
                // message to single connection
                const nlLoc = data.indexOf('\n');
                const socketid = data.substr(1, nlLoc - 1);
                const socket = this.sockets.get(socketid);
                if (!socket)
                    return;
                const message = data.substr(nlLoc + 1);
                socket.write(message);
            },
            '#'(data) {
                // #roomid, message
                // message to all connections in room
                // #, message
                // message to all connections
                const nlLoc = data.indexOf('\n');
                const roomid = data.substr(1, nlLoc - 1);
                const room = roomid ? this.rooms.get(roomid) : this.sockets;
                if (!room)
                    return;
                const message = data.substr(nlLoc + 1);
                for (const curSocket of room.values())
                    curSocket.write(message);
            },
            '+'(data) {
                // +roomid, socketid
                // join room with connection
                const nlLoc = data.indexOf('\n');
                const socketid = data.substr(nlLoc + 1);
                const socket = this.sockets.get(socketid);
                if (!socket)
                    return;
                const roomid = data.substr(1, nlLoc - 1);
                let room = this.rooms.get(roomid);
                if (!room) {
                    room = new Map();
                    this.rooms.set(roomid, room);
                }
                room.set(socketid, socket);
            },
            '-'(data) {
                // -roomid, socketid
                // leave room with connection
                const nlLoc = data.indexOf('\n');
                const roomid = data.slice(1, nlLoc);
                const room = this.rooms.get(roomid);
                if (!room)
                    return;
                const socketid = data.slice(nlLoc + 1);
                room.delete(socketid);
                const roomChannel = this.roomChannels.get(roomid);
                if (roomChannel)
                    roomChannel.delete(socketid);
                if (!room.size) {
                    this.rooms.delete(roomid);
                    if (roomChannel)
                        this.roomChannels.delete(roomid);
                }
            },
            '.'(data) {
                // .roomid, channelid, socketid
                // move connection to different channel in room
                const nlLoc = data.indexOf('\n');
                const roomid = data.slice(1, nlLoc);
                const nlLoc2 = data.indexOf('\n', nlLoc + 1);
                const channelid = Number(data.slice(nlLoc + 1, nlLoc2));
                const socketid = data.slice(nlLoc2 + 1);
                let roomChannel = this.roomChannels.get(roomid);
                if (!roomChannel) {
                    roomChannel = new Map();
                    this.roomChannels.set(roomid, roomChannel);
                }
                if (channelid === 0) {
                    roomChannel.delete(socketid);
                }
                else {
                    roomChannel.set(socketid, channelid);
                }
            },
            ':'(data) {
                // :roomid, message
                // message to a room, splitting `|split` by channel
                const nlLoc = data.indexOf('\n');
                const roomid = data.slice(1, nlLoc);
                const room = this.rooms.get(roomid);
                if (!room)
                    return;
                const messages = [
                    null, null, null, null, null,
                ];
                const message = data.substr(nlLoc + 1);
                const channelMessages = (0, battle_1.extractChannelMessages)(message, [0, 1, 2, 3, 4]);
                const roomChannel = this.roomChannels.get(roomid);
                for (const [curSocketid, curSocket] of room) {
                    const channelid = roomChannel?.get(curSocketid) || 0;
                    if (!messages[channelid])
                        messages[channelid] = channelMessages[channelid].join('\n');
                    curSocket.write(messages[channelid]);
                }
            },
        };
        if (!config.bindaddress)
            config.bindaddress = '0.0.0.0';
        this.isTrustedProxyIp = config.proxyip ? ip_tools_1.IPTools.checker(config.proxyip) : () => false;
        // Static HTTP server
        // This handles the custom CSS and custom avatar features, and also
        // redirects yourserver:8001 to yourserver-8001.psim.us
        // It's optional if you don't need these features.
        this.server = http.createServer();
        this.serverSsl = null;
        if (config.ssl) {
            let key;
            try {
                key = path.resolve(__dirname, config.ssl.options.key);
                if (!fs.statSync(key).isFile())
                    throw new Error();
                try {
                    key = fs.readFileSync(key);
                }
                catch (e) {
                    (0, lib_1.crashlogger)(new Error(`Failed to read the configured SSL private key PEM file:\n${e.stack}`), `Socket process ${process.pid}`);
                }
            }
            catch {
                console.warn('SSL private key config values will not support HTTPS server option values in the future. Please set it to use the absolute path of its PEM file.');
                key = config.ssl.options.key;
            }
            let cert;
            try {
                cert = path.resolve(__dirname, config.ssl.options.cert);
                if (!fs.statSync(cert).isFile())
                    throw new Error();
                try {
                    cert = fs.readFileSync(cert);
                }
                catch (e) {
                    (0, lib_1.crashlogger)(new Error(`Failed to read the configured SSL certificate PEM file:\n${e.stack}`), `Socket process ${process.pid}`);
                }
            }
            catch {
                console.warn('SSL certificate config values will not support HTTPS server option values in the future. Please set it to use the absolute path of its PEM file.');
                cert = config.ssl.options.cert;
            }
            if (key && cert) {
                try {
                    // In case there are additional SSL config settings besides the key and cert...
                    this.serverSsl = https.createServer({ ...config.ssl.options, key, cert });
                }
                catch (e) {
                    (0, lib_1.crashlogger)(new Error(`The SSL settings are misconfigured:\n${e.stack}`), `Socket process ${process.pid}`);
                }
            }
        }
        // Static server
        try {
            const roomidRegex = /^\/(?:[A-Za-z0-9][A-Za-z0-9-]*)\/?$/;
            const cssServer = new static_server_1.StaticServer('./config');
            const avatarServer = new static_server_1.StaticServer('./config/avatars');
            const staticServer = new static_server_1.StaticServer('./server/static');
            const staticRequestHandler = (req, res) => {
                // console.log(`static rq: ${req.socket.remoteAddress}:${req.socket.remotePort} -> ${req.socket.localAddress}:${req.socket.localPort} - ${req.method} ${req.url} ${req.httpVersion} - ${req.rawHeaders.join('|')}`);
                req.resume();
                req.addListener('end', () => {
                    if (config.customhttpresponse?.(req, res)) {
                        return;
                    }
                    let server = staticServer;
                    if (req.url) {
                        if (req.url === '/custom.css' || req.url.startsWith('/custom.css?')) {
                            server = cssServer;
                        }
                        else if (req.url.startsWith('/avatars/')) {
                            req.url = req.url.slice(8);
                            server = avatarServer;
                        }
                        else if (roomidRegex.test(req.url)) {
                            req.url = '/';
                        }
                    }
                    void server.serve(req, res, e => {
                        if (e.status === 404) {
                            void staticServer.serveFile('404.html', 404, {}, req, res);
                            return true;
                        }
                    });
                });
            };
            this.server.on('request', staticRequestHandler);
            if (this.serverSsl)
                this.serverSsl.on('request', staticRequestHandler);
        }
        catch {
            console.log('Could not start static server');
        }
        // SockJS server
        // This is the main server that handles users connecting to our server
        // and doing things on our server.
        const sockjs = require('sockjs');
        const options = {
            sockjs_url: `//play.pokemonshowdown.com/js/lib/sockjs-1.4.0-nwjsfix.min.js`,
            prefix: '/showdown',
            log(severity, message) {
                if (severity === 'error')
                    console.log(`ERROR: ${message}`);
            },
        };
        if (config.wsdeflate !== null) {
            try {
                const deflate = require('permessage-deflate').configure(config.wsdeflate);
                options.faye_server_options = { extensions: [deflate] };
            }
            catch {
                (0, lib_1.crashlogger)(new Error("Dependency permessage-deflate is not installed or is otherwise unaccessable. No message compression will take place until server restart."), "Sockets");
            }
        }
        const server = sockjs.createServer(options);
        process.once('disconnect', () => this.cleanup());
        process.once('exit', () => this.cleanup());
        // this is global so it can be hotpatched if necessary
        server.on('connection', connection => this.onConnection(connection));
        server.installHandlers(this.server, {});
        this.server.listen(config.port, config.bindaddress);
        console.log(`Worker ${exports.PM.workerid} now listening on ${config.bindaddress}:${config.port}`);
        if (this.serverSsl) {
            server.installHandlers(this.serverSsl, {});
            // @ts-expect-error if appssl exists, then `config.ssl` must also exist
            this.serverSsl.listen(config.ssl.port, config.bindaddress);
            // @ts-expect-error if appssl exists, then `config.ssl` must also exist
            console.log(`Worker ${exports.PM.workerid} now listening for SSL on port ${config.ssl.port}`);
        }
        console.log(`Test your server at http://${config.bindaddress === '0.0.0.0' ? 'localhost' : config.bindaddress}:${config.port}`);
    }
    /**
     * Clean up any remaining connections on disconnect. If this isn't done,
     * the process will not exit until any remaining connections have been destroyed.
     * Afterwards, the worker process will die on its own
     */
    cleanup() {
        for (const socket of this.sockets.values()) {
            try {
                socket.destroy();
            }
            catch { }
        }
        this.sockets.clear();
        this.rooms.clear();
        this.roomChannels.clear();
        this.server.close();
        if (this.serverSsl)
            this.serverSsl.close();
        // Let the server(s) finish closing.
        setImmediate(() => process.exit(0));
    }
    onConnection(socket) {
        // For reasons that are not entirely clear, SockJS sometimes triggers
        // this event with a null `socket` argument.
        if (!socket)
            return;
        if (!socket.remoteAddress) {
            // SockJS sometimes fails to be able to cache the IP, port, and
            // address from connection request headers.
            try {
                socket.destroy();
            }
            catch { }
            return;
        }
        const socketid = `${++this.socketCounter}`;
        this.sockets.set(socketid, socket);
        let socketip = socket.remoteAddress;
        if (this.isTrustedProxyIp(socketip)) {
            const ips = (socket.headers['x-forwarded-for'] || '').split(',').reverse();
            for (const ip of ips) {
                const proxy = ip.trim();
                if (!this.isTrustedProxyIp(proxy)) {
                    socketip = proxy;
                    break;
                }
            }
        }
        this.push(`*${socketid}\n${socketip}\n${socket.protocol}`);
        socket.on('data', message => {
            // drop empty messages (DDoS?)
            if (!message)
                return;
            // drop messages over 100KB
            if (message.length > (100 * 1024)) {
                socket.write(`|popup|Your message must be below 100KB`);
                console.log(`Dropping client message ${message.length / 1024} KB...`);
                console.log(message.slice(0, 160));
                return;
            }
            // drop legacy JSON messages
            if (typeof message !== 'string' || message.startsWith('{'))
                return;
            // drop blank messages (DDoS?)
            const pipeIndex = message.indexOf('|');
            if (pipeIndex < 0 || pipeIndex === message.length - 1)
                return;
            this.push(`<${socketid}\n${message}`);
        });
        socket.once('close', () => {
            this.push(`!${socketid}`);
            this.sockets.delete(socketid);
            for (const room of this.rooms.values())
                room.delete(socketid);
        });
    }
    _write(data) {
        // console.log('worker received: ' + data);
        const receiver = this.receivers[data.charAt(0)];
        if (receiver)
            receiver.call(this, data);
    }
}
exports.ServerStream = ServerStream;
/*********************************************************
 * Process manager
 *********************************************************/
exports.PM = new lib_1.ProcessManager.RawProcessManager({
    id: 'sockets',
    module,
    setupChild: () => new ServerStream(Config),
    isCluster: true,
});
if (!exports.PM.isParentProcess) {
    ConfigLoader.ensureLoaded();
    if (Config.crashguard) {
        // graceful crash - allow current battles to finish before restarting
        process.on('uncaughtException', err => {
            (0, lib_1.crashlogger)(err, `Socket process ${exports.PM.workerid} (${process.pid})`);
        });
        process.on('unhandledRejection', err => {
            (0, lib_1.crashlogger)(err || {}, `Socket process ${exports.PM.workerid} (${process.pid}) Promise`);
        });
    }
    if (Config.ofesockets) {
        try {
            require.resolve('node-oom-heapdump');
        }
        catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND')
                throw e; // should never happen
            throw new Error('node-oom-heapdump is not installed, but it is a required dependency if Config.ofesockets is set to true! ' +
                'Run npm install node-oom-heapdump and restart the server.');
        }
        // Create a heapdump if the process runs out of memory.
        global.nodeOomHeapdump = require('node-oom-heapdump')({
            addTimestamp: true,
        });
    }
    // setup worker
    if (process.env.PSPORT)
        Config.port = +process.env.PSPORT;
    if (process.env.PSBINDADDR)
        Config.bindaddress = process.env.PSBINDADDR;
    if (process.env.PSNOSSL && parseInt(process.env.PSNOSSL))
        Config.ssl = null;
    // eslint-disable-next-line no-eval
    exports.PM.startRepl({ filename: `sockets-${exports.PM.workerid}-${process.pid}`, eval: cmd => eval(cmd) });
}
function start(processCount) {
    let port;
    for (const arg of process.argv) {
        if (/^[0-9]+$/.test(arg)) {
            port = parseInt(arg);
            break;
        }
    }
    exports.Sockets.listen(port, undefined, processCount);
}
