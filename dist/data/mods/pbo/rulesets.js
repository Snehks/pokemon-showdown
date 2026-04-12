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
  },
  // ── Immune ─────────────────────────────────────────────────────────
  pboeximmune: {
    effectType: "Rule",
    name: "PBO EX Immune",
    desc: "Wild Pokemon are immune to all status conditions.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboimmunestatus");
      }
    }
  },
  pboimmunestatus: {
    name: "PBO Immune Status",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboimmunestatus");
    },
    onSetStatus(status, target, source, effect) {
      return false;
    }
  },
  // ── Unyielding ─────────────────────────────────────────────────────
  pboexunyielding: {
    effectType: "Rule",
    name: "PBO EX Unyielding",
    desc: "Wild Pokemon take 50% reduced damage from super-effective moves.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pbosereduce");
      }
    }
  },
  pbosereduce: {
    name: "PBO SE Reduce",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbosereduce");
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).typeMod > 0) {
        return this.chainModify(0.5);
      }
    }
  },
  // ── Empowered ──────────────────────────────────────────────────────
  pboexempowered: {
    effectType: "Rule",
    name: "PBO EX Empowered",
    desc: "Wild Pokemon deal 20% more damage.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboempowered");
      }
    }
  },
  pboempowered: {
    name: "PBO Empowered",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboempowered");
    },
    onBasePowerPriority: 8,
    onBasePower(basePower, attacker, defender, move) {
      return this.chainModify(1.2);
    }
  },
  // ── Primal ──────────────────────────────────────────────────────────
  pboexprimal: {
    effectType: "Rule",
    name: "PBO EX Primal",
    desc: "Wild Pokemon gain 10% boost to all stats.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboprimal");
      }
    }
  },
  pboprimal: {
    name: "PBO Primal",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboprimal");
    },
    onModifyAtk(atk) {
      return this.chainModify(1.1);
    },
    onModifyDef(def) {
      return this.chainModify(1.1);
    },
    onModifySpa(spa) {
      return this.chainModify(1.1);
    },
    onModifySpd(spd) {
      return this.chainModify(1.1);
    },
    onModifySpe(spe) {
      return this.chainModify(1.1);
    }
  },
  // ── Toughened ───────────────────────────────────────────────────────
  pboextoughened: {
    effectType: "Rule",
    name: "PBO EX Toughened",
    desc: "Wild Pokemon take 20% less damage from all attacks.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pbotoughened");
      }
    }
  },
  pbotoughened: {
    name: "PBO Toughened",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbotoughened");
    },
    onSourceModifyDamage(damage, source, target, move) {
      return this.chainModify(0.8);
    }
  },
  // ── Impenetrable ────────────────────────────────────────────────────
  pboeximpenetrable: {
    effectType: "Rule",
    name: "PBO EX Impenetrable",
    desc: "Wild Pokemon take 50% less damage from critical hits.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pbocritreduce");
      }
    }
  },
  pbocritreduce: {
    name: "PBO Crit Reduce",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbocritreduce");
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (target.getMoveHitData(move).crit) {
        return this.chainModify(0.5);
      }
    }
  },
  // ── Healing ─────────────────────────────────────────────────────────
  pboexhealing: {
    effectType: "Rule",
    name: "PBO EX Healing",
    desc: "Wild Pokemon heal 20% of max HP each turn.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboturnheal");
      }
    }
  },
  pboturnheal: {
    name: "PBO Turn Heal",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboturnheal");
    },
    onResidualOrder: 5,
    onResidualSubOrder: 5,
    onResidual(pokemon) {
      this.heal(pokemon.baseMaxhp / 5);
    }
  },
  // ── Phase 3: Inline effects (stat boosts, no volatiles) ────────
  // ── Swift (prefix) ─────────────────────────────────────────────
  pboexswift: {
    effectType: "Rule",
    name: "PBO EX Swift",
    desc: "Wild Pokemon gains +1 Speed at start of battle.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        this.boost({ spe: 1 }, pokemon);
      }
    }
  },
  // ── Resilient (prefix) ───────────────��─────────────────────────
  pboexresilient: {
    effectType: "Rule",
    name: "PBO EX Resilient",
    desc: "Wild Pokemon gains +1 Defense at start of battle.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        this.boost({ def: 1 }, pokemon);
      }
    }
  },
  // ── of Enfeeblement (suffix) ──────────────────────────────────
  pboexofenfeeblement: {
    effectType: "Rule",
    name: "PBO EX of Enfeeblement",
    desc: "Wild Pokemon gets -1 to a random stat at start of battle.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        const stat = this.sample(["atk", "def", "spa", "spd", "spe"]);
        this.boost({ [stat]: -1 }, pokemon);
      }
    }
  },
  // ── of Mist (suffix) ──────────────────────────────────────────
  pboexofmist: {
    effectType: "Rule",
    name: "PBO EX of Mist",
    desc: "Player Pokemon gets -1 Accuracy and -1 Sp. Def on every switch-in.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        this.boost({ accuracy: -1, spd: -1 }, pokemon);
      }
    }
  },
  // ── of Weakness (suffix) ──────��───────────────────────────────
  pboexofweakness: {
    effectType: "Rule",
    name: "PBO EX of Weakness",
    desc: "Player Pokemon gets -1 to a random stat on every switch-in.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        const stat = this.sample(["atk", "def", "spa", "spd", "spe"]);
        this.boost({ [stat]: -1 }, pokemon);
      }
    }
  },
  // ── of Confusion (suffix) ───────��─────────────────────────────
  pboexofconfusion: {
    effectType: "Rule",
    name: "PBO EX of Confusion",
    desc: "Player's lead Pokemon becomes confused on first switch-in only.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0] && !this.pboConfusionApplied) {
        this.pboConfusionApplied = true;
        pokemon.addVolatile("confusion");
      }
    }
  }
};
//# sourceMappingURL=rulesets.js.map
