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
var rulesets_exports = {};
__export(rulesets_exports, {
  Rulesets: () => Rulesets
});
module.exports = __toCommonJS(rulesets_exports);
const Rulesets = {
  nosturdywild: {
    effectType: "Rule",
    name: "No Sturdy Wild",
    desc: "Sturdy is suppressed for wild Pokemon (p2).",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1] && pokemon.ability === "sturdy") {
        pokemon.ability = "";
      }
    }
  },
  // ── Expedition rulesets ─────────────────────────────────────────────
  // Activated via @@@rulesetId in the format string.
  // Each rule attaches a volatile or modifies battle state for PBO expeditions.
  pboexspectral: {
    effectType: "Rule",
    name: "PBO EX Spectral",
    desc: "Wild Pokemon gain evasion boost (accuracy penalty for moves targeting them).",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboevasionboost");
      }
    }
  },
  pboevasionboost: {
    name: "PBO Evasion Boost",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboevasionboost");
    },
    onSourceModifyAccuracyPriority: -1,
    onSourceModifyAccuracy(accuracy, source, target, move) {
      if (typeof accuracy !== "number") return;
      return this.chainModify([3072, 4096]);
    }
  }
};
//# sourceMappingURL=rulesets.js.map
