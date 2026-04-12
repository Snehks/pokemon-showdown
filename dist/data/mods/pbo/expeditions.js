"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var expeditions_exports = {};
__export(expeditions_exports, {
  Rulesets: () => Rulesets
});
module.exports = __toCommonJS(expeditions_exports);
const Rulesets = {
  pboexspectral: {
    effectType: "Rule",
    name: "PBO Expedition Spectral",
    desc: "Wild Pokemon gain evasion boost (accuracy penalty for moves targeting them).",
    onBattleStart(battle) {
      for (const pokemon of battle.sides[1].active) {
        if (pokemon && !pokemon.fainted) {
          pokemon.addVolatile("pboevasionboost");
        }
      }
    }
  },
  pboevasionboost: {
    name: "PBO Evasion Boost",
    effectType: "Volatile",
    onSourceModifyAccuracyPriority: -1,
    onSourceModifyAccuracy(accuracy, source, target, move) {
      if (typeof accuracy !== "number") return;
      return this.chainModify([3072, 4096]);
    }
  }
};
//# sourceMappingURL=expeditions.js.map
