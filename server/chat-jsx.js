"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatText = exports.Component = exports.Fragment = exports.h = exports.render = void 0;
exports.html = html;
/**
 * PS custom HTML elements and Preact handling.
 * By Mia and Zarel
 */
const preact_1 = __importDefault(require("preact"));
const preact_render_to_string_1 = __importDefault(require("preact-render-to-string"));
exports.render = preact_render_to_string_1.default;
const lib_1 = require("../lib");
/** For easy concenation of Preact nodes with strings */
function html(strings, ...args) {
    let buf = strings[0];
    let i = 0;
    while (i < args.length) {
        buf += typeof args[i] === 'string' || typeof args[i] === 'number' ?
            lib_1.Utils.escapeHTML(args[i]) :
            (0, preact_render_to_string_1.default)(args[i]);
        buf += strings[++i];
    }
    return buf;
}
exports.h = preact_1.default.h;
exports.Fragment = preact_1.default.Fragment;
exports.Component = preact_1.default.Component;
class FormatText extends preact_1.default.Component {
    render() {
        const child = this.props.children;
        if (typeof child !== 'string')
            throw new Error(`Invalid props.children type: ${!child ? child : typeof child}`);
        return Chat.h("span", { dangerouslySetInnerHTML: { __html: Chat.formatText(child, this.props.isTrusted, this.props.replaceLinebreaks) } });
    }
}
exports.FormatText = FormatText;
