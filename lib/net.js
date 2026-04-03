"use strict";
/**
 * Net - abstraction layer around Node's HTTP/S request system.
 * Advantages:
 * - easier acquiring of data
 * - mass disabling of outgoing requests via Config.
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
exports.Net = exports.NetRequest = exports.NetStream = exports.HttpError = void 0;
const https = __importStar(require("https"));
const http = __importStar(require("http"));
const Streams = __importStar(require("./streams"));
class HttpError extends Error {
    constructor(message, statusCode, body) {
        super(message);
        this.name = 'HttpError';
        this.statusCode = statusCode;
        this.body = body;
        Error.captureStackTrace(this, HttpError);
    }
}
exports.HttpError = HttpError;
class NetStream extends Streams.ReadWriteStream {
    constructor(uri, opts = null) {
        super();
        this.statusCode = null;
        this.headers = null;
        this.uri = uri;
        this.opts = opts;
        // make request
        this.response = null;
        this.state = 'pending';
        this.request = this.makeRequest(opts);
    }
    makeRequest(opts) {
        if (!opts)
            opts = {};
        let body = opts.body;
        if (body && typeof body !== 'string') {
            if (!opts.headers)
                opts.headers = {};
            if (!opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            body = NetStream.encodeQuery(body);
        }
        if (opts.query) {
            this.uri += (this.uri.includes('?') ? '&' : '?') + NetStream.encodeQuery(opts.query);
        }
        if (body) {
            if (!opts.headers)
                opts.headers = {};
            if (!opts.headers['Content-Length']) {
                opts.headers['Content-Length'] = Buffer.byteLength(body);
            }
        }
        const protocol = new URL(this.uri).protocol;
        const net = protocol === 'https:' ? https : http;
        let resolveResponse;
        this.response = new Promise(resolve => {
            resolveResponse = resolve;
        });
        const request = net.request(this.uri, opts, response => {
            this.state = 'open';
            this.nodeReadableStream = response;
            this.response = response;
            this.statusCode = response.statusCode || null;
            this.headers = response.headers;
            response.setEncoding('utf-8');
            resolveResponse(response);
            resolveResponse = null;
            response.on('data', data => {
                this.push(data);
            });
            response.on('error', error => {
                if (!this.atEOF)
                    this.pushError(error, true);
            });
            response.on('end', () => {
                if (this.state === 'open')
                    this.state = 'success';
                if (!this.atEOF)
                    this.pushEnd();
            });
        });
        request.on('close', () => {
            if (!this.atEOF) {
                this.state = 'error';
                this.pushError(new Error("Unexpected connection close"));
            }
            if (resolveResponse) {
                this.response = null;
                resolveResponse(null);
                resolveResponse = null;
            }
        });
        request.on('error', error => {
            if (!this.atEOF)
                this.pushError(error, true);
        });
        if (opts.timeout || opts.timeout === undefined) {
            request.setTimeout(opts.timeout || 5000, () => {
                this.state = 'timeout';
                this.pushError(new Error("Request timeout"));
                request.abort();
            });
        }
        if (body) {
            request.write(body);
            request.end();
            if (opts.writable) {
                throw new Error(`options.body is what you would have written to a NetStream - you must choose one or the other`);
            }
        }
        else if (opts.writable) {
            this.nodeWritableStream = request;
        }
        else {
            request.end();
        }
        return request;
    }
    static encodeQuery(data) {
        let out = '';
        for (const key in data) {
            if (out)
                out += `&`;
            out += `${key}=${encodeURIComponent(`${data[key]}`)}`;
        }
        return out;
    }
    _write(data) {
        if (!this.nodeWritableStream) {
            throw new Error("You must specify opts.writable to write to a request.");
        }
        const result = this.nodeWritableStream.write(data);
        if (result !== false)
            return undefined;
        if (!this.drainListeners.length) {
            this.nodeWritableStream.once('drain', () => {
                for (const listener of this.drainListeners)
                    listener();
                this.drainListeners = [];
            });
        }
        return new Promise(resolve => {
            this.drainListeners.push(resolve);
        });
    }
    _read() {
        this.nodeReadableStream?.resume();
    }
    _pause() {
        this.nodeReadableStream?.pause();
    }
}
exports.NetStream = NetStream;
class NetRequest {
    constructor(uri) {
        this.uri = uri;
    }
    /**
     * Makes a http/https get request to the given link and returns a stream.
     * The request data itself can be read with ReadStream#readAll().
     * The NetStream class also holds headers and statusCode as a property.
     *
     * @param opts request opts - headers, etc.
     * @param body POST body
     */
    getStream(opts = {}) {
        if (typeof Config !== 'undefined' && Config.noNetRequests) {
            throw new Error(`Net requests are disabled.`);
        }
        const stream = new NetStream(this.uri, opts);
        return stream;
    }
    /**
     * Makes a basic http/https request to the URI.
     * Returns the response data.
     *
     * Will throw if the response code isn't 200 OK.
     *
     * @param opts request opts - headers, etc.
     */
    async get(opts = {}) {
        const stream = this.getStream(opts);
        const response = await stream.response;
        if (response)
            this.response = response;
        if (response && response.statusCode !== 200) {
            throw new HttpError(response.statusMessage || "Connection error", response.statusCode, await stream.readAll());
        }
        return stream.readAll();
    }
    post(opts = {}, body) {
        if (!body)
            body = opts.body;
        return this.get({
            ...opts,
            method: 'POST',
            body,
        });
    }
}
exports.NetRequest = NetRequest;
exports.Net = Object.assign((path) => new NetRequest(path), {
    NetRequest, NetStream,
});
