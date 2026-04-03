"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomMRTeams = void 0;
const teams_1 = __importDefault(require("../gen6/teams"));
class RandomMRTeams extends teams_1.default {
    constructor() {
        super(...arguments);
        this.randomSets = require('./sets.json');
    }
}
exports.RandomMRTeams = RandomMRTeams;
exports.default = RandomMRTeams;
