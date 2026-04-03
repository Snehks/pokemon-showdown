"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteClassifier = exports.LocalClassifier = void 0;
exports.destroy = destroy;
exports.start = start;
/**
 * @author mia-pi-git
 */
const local_1 = require("./local");
Object.defineProperty(exports, "LocalClassifier", { enumerable: true, get: function () { return local_1.LocalClassifier; } });
const remote_1 = require("./remote");
Object.defineProperty(exports, "RemoteClassifier", { enumerable: true, get: function () { return remote_1.RemoteClassifier; } });
function destroy() {
    void local_1.LocalClassifier.destroy();
    void remote_1.RemoteClassifier.PM.destroy();
}
function start(processCount) {
    local_1.LocalClassifier.start(processCount);
    remote_1.RemoteClassifier.start(processCount);
}
