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
  },
  // ── Phase 4: Category B — Player volatile ability-hooks ────────
  // Each ruleset attaches a volatile to the player on every switch-in.
  // Volatiles drop on switch-out (Showdown default) and re-attach via the ruleset's onSwitchIn.
  // ── of Recoil (suffix) ─────────────────────────────────────────
  pboexofrecoil: {
    effectType: "Rule",
    name: "PBO EX of Recoil",
    desc: "Player Pokemon takes 10% recoil of damage dealt.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pborecoilonhit");
      }
    }
  },
  pborecoilonhit: {
    name: "PBO Recoil On Hit",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pborecoilonhit");
    },
    onAfterMove(source, target, move) {
      if (typeof move.totalDamage !== "number" || move.totalDamage <= 0) return;
      if (!source.hp) return;
      const recoil = Math.max(1, Math.floor(move.totalDamage / 10));
      this.damage(recoil, source, source, this.dex.conditions.get("pborecoilonhit"));
    }
  },
  // ── of Frailty (suffix) ─────────────────────────────────────────
  pboexoffrailty: {
    effectType: "Rule",
    name: "PBO EX of Frailty",
    desc: "Player Pokemon recovers 50% less HP from healing moves.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pbofrailheal");
      }
    }
  },
  pbofrailheal: {
    name: "PBO Frail Heal",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbofrailheal");
    },
    onTryHeal(damage, target, source, effect) {
      if (effect?.effectType === "Move") {
        return this.chainModify(0.5);
      }
    }
  },
  // ── of Exhaustion (suffix) ──────────────────────────────────────
  pboexofexhaustion: {
    effectType: "Rule",
    name: "PBO EX of Exhaustion",
    desc: "Player Pokemon consumes 1 extra PP per move used (Pressure-style).",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pboexhaustion");
      }
    }
  },
  pboexhaustion: {
    name: "PBO Exhaustion",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboexhaustion");
    },
    // onSourceDeductPP fires on the move user (source of the DeductPP event).
    // Returning 1 adds 1 extra PP drop on top of the base -1, for a total of -2 per move.
    onSourceDeductPP(target, source) {
      return 1;
    }
  },
  // ── of Blight (suffix) ──────────────────────────────────────────
  pboexofblight: {
    effectType: "Rule",
    name: "PBO EX of Blight",
    desc: "Player Pokemon takes double damage from burn/poison/toxic.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pboblight");
      }
    }
  },
  pboblight: {
    name: "PBO Blight",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboblight");
    },
    onDamage(damage, target, source, effect) {
      if (!effect) return;
      if (effect.id === "brn" || effect.id === "psn" || effect.id === "tox") {
        return damage * 2;
      }
    }
  },
  // ── of Ashes (suffix) ───────────────────────────────────────────
  // LEGACY DIRECTION (IncreaseDamageIfMoveIfOfTypeAbility): composed on the PLAYER's ability,
  // intercepts getModifiedDamageDueToAttackerAbility — ATTACKER-SIDE.
  // Player DEALS +40% damage with Fire-type moves (preserves legacy semantics, even though the
  // thematic curse framing suggests defender-side).
  pboexofashes: {
    effectType: "Rule",
    name: "PBO EX of Ashes",
    desc: "Player Pokemon deals 40% more damage with Fire-type moves.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pboashes");
      }
    }
  },
  pboashes: {
    name: "PBO Ashes",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboashes");
    },
    onBasePower(basePower, attacker, defender, move) {
      if (move.type === "Fire") {
        return this.chainModify(1.4);
      }
    }
  },
  // ── of Impotence (suffix) ───────────────────────────────────────
  pboexofimpotence: {
    effectType: "Rule",
    name: "PBO EX of Impotence",
    desc: "Player Pokemon cannot use healing moves or healing items.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pboimpotence");
      }
    }
  },
  pboimpotence: {
    name: "PBO Impotence",
    effectType: "Volatile",
    // Hardcoded healing item list matches legacy CancelHealingMoveAndItemAbility.battleHealingItems.
    onStart(target) {
      this.add("-start", target, "pboimpotence");
    },
    onTryHeal(damage, target, source, effect) {
      if (!effect) return;
      if (effect.effectType === "Move") return false;
      const healingItems = [
        "Leftovers",
        "Black Sludge",
        "Shell Bell",
        "Big Root",
        "Figy Berry",
        "Wiki Berry",
        "Mago Berry",
        "Aguav Berry",
        "Iapapa Berry",
        "Oran Berry",
        "Sitrus Berry",
        "Enigma Berry",
        "Lansat Berry"
      ];
      if (effect.effectType === "Item" && healingItems.includes(effect.name)) return false;
    }
  },
  // ── of Drought (suffix) ─────────────────────────────────────────
  pboexofdrought: {
    effectType: "Rule",
    name: "PBO EX of Drought",
    desc: "Player Pokemon deals 50% less damage with Water moves and cannot set rain weather.",
    // Showdown auto-registers rulesets with event handlers as a field-level pseudoweather
    // (sim/battle.ts:306). onSetWeather fires via findFieldEventHandlers for any SetWeather
    // event, so this intercepts both the player's Rain Dance and wild Drizzle/Primordial Sea.
    onSetWeather(target, source, weather) {
      const rainWeathers = ["raindance", "primordialsea"];
      if (rainWeathers.includes(weather.id)) return false;
    },
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pbodrought");
      }
    }
  },
  pbodrought: {
    name: "PBO Drought",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbodrought");
    },
    onBasePower(basePower, attacker, defender, move) {
      if (move.type === "Water") {
        return this.chainModify(0.5);
      }
    }
  },
  // ── of Silence (suffix) ─────────────────────────────────────────
  pboexofsilence: {
    effectType: "Rule",
    name: "PBO EX of Silence",
    desc: "Player Pokemon cannot use moves that have secondary effects.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pbosilence");
      }
    }
  },
  pbosilence: {
    name: "PBO Silence",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbosilence");
    },
    onBeforeMove(source, target, move) {
      if (move.secondaries && move.secondaries.length > 0) {
        this.attrLastMove("[still]");
        this.add("cant", source, "ability: PBO Silence", move);
        return false;
      }
    }
  },
  // ── of Misfortune (suffix) ──────────────────────────────────────
  pboexofmisfortune: {
    effectType: "Rule",
    name: "PBO EX of Misfortune",
    desc: "Player Pokemon cannot use or benefit from held items.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pbomisfortune");
      }
    }
  },
  pbomisfortune: {
    name: "PBO Misfortune",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbomisfortune");
      const heldItem = target.getItem();
      if (heldItem.exists) {
        this.singleEvent("End", heldItem, target.itemState, target);
      }
    },
    // Block healing items (Leftovers, Sitrus Berry, etc.)
    onTryHeal(damage, target, source, effect) {
      if (effect?.effectType === "Item") return false;
    },
    // Block berry consumption (attack berries, stat-boost berries)
    onTryEatItem(item, pokemon) {
      return false;
    }
  },
  // ── of Trickery (suffix) ────────────────────────────────────────
  // Rerolls the player's non-HP EVs on every switch-in, then recomputes
  // stats via the mod's `recalculateStats()` prototype extension. HP EVs
  // are intentionally preserved (mirrors legacy
  // AllPlayerPokemonEVRandomizingSuffixCondition). Boost stages in
  // `pokemon.boosts` survive recalculation because modern gens apply them
  // dynamically at getStat() time.
  pboexoftrickery: {
    effectType: "Rule",
    name: "PBO EX of Trickery",
    desc: "Player Pokemon have their non-HP EVs randomized on every switch-in.",
    onSwitchIn(pokemon) {
      if (pokemon.side !== this.sides[0]) return;
      const statOrder = ["atk", "def", "spa", "spd", "spe"];
      for (let i = statOrder.length - 1; i > 0; i--) {
        const j = this.prng.random(i + 1);
        [statOrder[i], statOrder[j]] = [statOrder[j], statOrder[i]];
      }
      let remaining = 510;
      for (const stat of statOrder) {
        const max = Math.min(252, remaining);
        const value = this.prng.random(max + 1);
        pokemon.set.evs[stat] = value;
        remaining -= value;
      }
      pokemon.recalculateStats();
      this.add("-message", `${pokemon.name}'s stats have been randomly modified.`);
    }
  },
  // ── Phase 8: Designed-but-never-built effects (CSV-only) ─────────
  // These effects existed in prefix_data.csv / suffix_data.csv as descriptions
  // but were never implemented in the legacy battle path. Implemented directly
  // on Showdown since there is no legacy parity to preserve.
  // ── Abyssal (prefix) ───────────────────────────────────────────
  pboexabyssal: {
    effectType: "Rule",
    name: "PBO EX Abyssal",
    desc: "Wild Pokemon deal 25% more damage but also take 25% more damage.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboabyssal");
      }
    }
  },
  pboabyssal: {
    name: "PBO Abyssal",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboabyssal");
    },
    onBasePowerPriority: 8,
    onBasePower(basePower) {
      return this.chainModify(1.25);
    },
    // Defender's volatile: amplifies incoming damage by 25%.
    onSourceModifyDamage(damage, source, target, move) {
      return this.chainModify(1.25);
    }
  },
  // ── Aegis (prefix) ─────────────────────────────────────────────
  // After taking damage on turn N, the wild becomes immune to move damage on
  // turn N+1. State is per-volatile (per pokemon instance).
  pboexaegis: {
    effectType: "Rule",
    name: "PBO EX Aegis",
    desc: "Wild Pokemon become immune to damage for one turn after being hit.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboaegis");
      }
    }
  },
  pboaegis: {
    name: "PBO Aegis",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboaegis");
      this.effectState.immuneOnTurn = -1;
    },
    onDamage(damage, target, source, effect) {
      const state = this.effectState;
      if (this.turn === state.immuneOnTurn && effect && effect.effectType === "Move") {
        this.add("-activate", target, "move: PBO Aegis");
        return false;
      }
    },
    onDamagingHit(damage, target, source, move) {
      this.effectState.immuneOnTurn = this.turn + 1;
    }
  },
  // ── Doomed (prefix) ────────────────────────────────────────────
  // Wild deals +50% damage but auto-faints after 5 residual ticks.
  pboexdoomed: {
    effectType: "Rule",
    name: "PBO EX Doomed",
    desc: "Wild Pokemon deals 50% more damage but faints after 5 turns.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pbodoomed");
      }
    }
  },
  pbodoomed: {
    name: "PBO Doomed",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbodoomed");
      this.effectState.countdown = 5;
    },
    onBasePowerPriority: 8,
    onBasePower(basePower) {
      return this.chainModify(1.5);
    },
    onResidualOrder: 5,
    onResidualSubOrder: 5,
    onResidual(pokemon) {
      const state = this.effectState;
      state.countdown--;
      if (state.countdown <= 0) {
        this.add("-message", `${pokemon.name}'s doom has come!`);
        pokemon.faint();
      }
    }
  },
  // ── Ethereal (prefix) ──────────────────────────────────────────
  // Mirrors Clear Body — blocks any opponent-induced negative stat changes,
  // allows self-induced drops (Overheat, Close Combat, etc.).
  pboexethereal: {
    effectType: "Rule",
    name: "PBO EX Ethereal",
    desc: "Wild Pokemon are immune to stat-lowering effects.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboethereal");
      }
    }
  },
  pboethereal: {
    name: "PBO Ethereal",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboethereal");
    },
    onTryBoost(boost, target, source, effect) {
      if (source && target === source) return;
      let blocked = false;
      let stat;
      for (stat in boost) {
        if (boost[stat] < 0) {
          delete boost[stat];
          blocked = true;
        }
      }
      if (blocked && effect && !effect.secondaries) {
        this.add("-fail", target, "unboost", "[from] move: PBO Ethereal");
      }
    }
  },
  // ── Mystic (prefix) — inline +1 SpA on switch-in ──────────────
  pboexmystic: {
    effectType: "Rule",
    name: "PBO EX Mystic",
    desc: "Wild Pokemon gains +1 Special Attack at start of battle.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        this.boost({ spa: 1 }, pokemon);
      }
    }
  },
  // ── Vigorous (prefix) — inline +1 Atk on switch-in ────────────
  pboexvigorous: {
    effectType: "Rule",
    name: "PBO EX Vigorous",
    desc: "Wild Pokemon gains +1 Attack at start of battle.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        this.boost({ atk: 1 }, pokemon);
      }
    }
  },
  // ── Reflective (prefix) — wild reflects 20% of damage taken ───
  pboexreflective: {
    effectType: "Rule",
    name: "PBO EX Reflective",
    desc: "Wild Pokemon reflect 20% of damage taken back to attacker.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pboreflective");
      }
    }
  },
  pboreflective: {
    name: "PBO Reflective",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pboreflective");
    },
    onDamagingHit(damage, target, source, move) {
      if (!source || source === target) return;
      if (source.fainted || source.hp <= 0) return;
      if (typeof damage !== "number" || damage <= 0) return;
      const reflected = Math.max(1, Math.floor(damage * 0.2));
      this.damage(reflected, source, target, this.dex.conditions.get("PBO Reflective"));
    }
  },
  // ── Vampiric (prefix) — wild heals 20% of damage dealt ────────
  pboexvampiric: {
    effectType: "Rule",
    name: "PBO EX Vampiric",
    desc: "Wild Pokemon heal 20% of damage dealt.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[1]) {
        pokemon.addVolatile("pbovampiric");
      }
    }
  },
  pbovampiric: {
    name: "PBO Vampiric",
    effectType: "Volatile",
    onStart(target) {
      this.add("-start", target, "pbovampiric");
    },
    // onSourceDamagingHit fires on the attacker (the wild) for each hit it lands.
    onSourceDamagingHit(damage, target, source, move) {
      if (typeof damage !== "number" || damage <= 0) return;
      if (target.fainted) return;
      const heal = Math.max(1, Math.floor(damage * 0.2));
      this.heal(heal, source, source, this.dex.conditions.get("PBO Vampiric"));
    }
  },
  // ── of Chains (suffix) — locked to first move + cannot switch ─
  // First move used becomes the only legal move; pokemon is also trapped.
  pboexofchains: {
    effectType: "Rule",
    name: "PBO EX of Chains",
    desc: "Player Pokemon are locked to the first move they use and cannot switch.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pbochains");
      }
    }
  },
  pbochains: {
    name: "PBO Chains",
    effectType: "Volatile",
    onStart(pokemon) {
      this.add("-start", pokemon, "pbochains");
      this.effectState.lockedMove = null;
    },
    onAfterMove(source, target, move) {
      const state = this.effectState;
      if (!state.lockedMove && move && move.id) {
        state.lockedMove = move.id;
        this.add("-message", `${source.name} is chained to ${move.name}!`);
      }
    },
    onLockMove(pokemon) {
      const state = this.effectState;
      return state.lockedMove || void 0;
    },
    onTrapPokemon(pokemon) {
      pokemon.tryTrap(true);
    }
  },
  // ── of Despair (suffix) — cannot use same move twice in a row ──
  pboexofdespair: {
    effectType: "Rule",
    name: "PBO EX of Despair",
    desc: "Player Pokemon cannot use the same move twice in a row.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pbodespair");
      }
    }
  },
  pbodespair: {
    name: "PBO Despair",
    effectType: "Volatile",
    onStart(pokemon) {
      this.add("-start", pokemon, "pbodespair");
      this.effectState.lastMove = null;
    },
    onDisableMove(pokemon) {
      const state = this.effectState;
      if (state.lastMove) {
        for (const moveSlot of pokemon.moveSlots) {
          if (moveSlot.id === state.lastMove) {
            pokemon.disableMove(moveSlot.id, false, this.effect.name);
          }
        }
      }
    },
    onAfterMove(source, target, move) {
      if (move && move.id) {
        this.effectState.lastMove = move.id;
      }
    }
  },
  // ── of Disarray (suffix) — forced to use a random move ────────
  // Uses onLockMove to force the engine to pick a random usable move each
  // turn. Random pick fires anew each call to onLockMove (i.e., each turn).
  pboexofdisarray: {
    effectType: "Rule",
    name: "PBO EX of Disarray",
    desc: "Player Pokemon are forced to use random moves during battle.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pbodisarray");
      }
    }
  },
  pbodisarray: {
    name: "PBO Disarray",
    effectType: "Volatile",
    onStart(pokemon) {
      this.add("-start", pokemon, "pbodisarray");
    },
    onLockMove(pokemon) {
      const usable = pokemon.moveSlots.filter((slot) => slot.pp > 0 && !slot.disabled).map((slot) => slot.id);
      if (usable.length === 0) return void 0;
      return this.sample(usable);
    }
  },
  // ── of Isolation (suffix) — cannot switch ─────────────────────
  pboexofisolation: {
    effectType: "Rule",
    name: "PBO EX of Isolation",
    desc: "Player cannot switch Pokemon during battle.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pboisolation");
      }
    }
  },
  pboisolation: {
    name: "PBO Isolation",
    effectType: "Volatile",
    onStart(pokemon) {
      this.add("-start", pokemon, "pboisolation");
    },
    onTrapPokemon(pokemon) {
      pokemon.tryTrap(true);
    }
  },
  // ── of Ruin (suffix) — boost reversal every 3 turns ───────────
  pboexofruin: {
    effectType: "Rule",
    name: "PBO EX of Ruin",
    desc: "Player's stat boosts are reversed every 3 turns.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pboruin");
      }
    }
  },
  pboruin: {
    name: "PBO Ruin",
    effectType: "Volatile",
    onStart(pokemon) {
      this.add("-start", pokemon, "pboruin");
      this.effectState.turnsActive = 0;
    },
    onResidualOrder: 28,
    onResidual(pokemon) {
      const state = this.effectState;
      state.turnsActive++;
      if (state.turnsActive % 3 !== 0) return;
      let changed = false;
      let stat;
      for (stat in pokemon.boosts) {
        const value = pokemon.boosts[stat];
        if (value !== 0) {
          pokemon.boosts[stat] = -value;
          changed = true;
        }
      }
      if (changed) {
        this.add("-message", `${pokemon.name}'s stat changes were reversed by Ruin!`);
      }
    }
  },
  // ── of Rupture (suffix) ──────────────────────────────────────
  // On switch-in: -1 Def / -1 SpD. When HP drops below 30%: +1 Atk / +1 SpA.
  // Rage trigger fires once per volatile lifetime (re-arms on switch-out).
  pboexofrupture: {
    effectType: "Rule",
    name: "PBO EX of Rupture",
    desc: "Player Pokemon enter with -1 Def/SpD; gain +1 Atk/SpA when HP < 30%.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pborupture");
      }
    }
  },
  pborupture: {
    name: "PBO Rupture",
    effectType: "Volatile",
    onStart(pokemon) {
      this.add("-start", pokemon, "pborupture");
      this.boost({ def: -1, spd: -1 }, pokemon, pokemon, this.effect);
      this.effectState.rageTriggered = false;
    },
    onAfterMoveSecondary(target, source, move) {
      const state = this.effectState;
      if (state.rageTriggered) return;
      if (target.hp > 0 && target.hp * 100 / target.maxhp < 30) {
        state.rageTriggered = true;
        this.boost({ atk: 1, spa: 1 }, target, target, this.effect);
      }
    },
    onResidual(pokemon) {
      const state = this.effectState;
      if (state.rageTriggered) return;
      if (pokemon.hp > 0 && pokemon.hp * 100 / pokemon.maxhp < 30) {
        state.rageTriggered = true;
        this.boost({ atk: 1, spa: 1 }, pokemon, pokemon, this.effect);
      }
    }
  },
  // ── of Wraiths (suffix) ──────────────────────────────────────
  // On switch-in: -1 Speed. Player cannot resist Ghost-type moves: any
  // negative type effectiveness contribution against Ghost is zeroed,
  // turning Dark (resists Ghost) into neutral. Immunities (Normal vs Ghost)
  // are intentionally not negated — designers can extend if needed.
  pboexofwraiths: {
    effectType: "Rule",
    name: "PBO EX of Wraiths",
    desc: "Player Pokemon cannot resist Ghost-type moves and enter with -1 Speed.",
    onSwitchIn(pokemon) {
      if (pokemon.side === this.sides[0]) {
        pokemon.addVolatile("pbowraiths");
      }
    }
  },
  pbowraiths: {
    name: "PBO Wraiths",
    effectType: "Volatile",
    onStart(pokemon) {
      this.add("-start", pokemon, "pbowraiths");
      this.boost({ spe: -1 }, pokemon, pokemon, this.effect);
    },
    onEffectiveness(typeMod, target, type, move) {
      if (move && move.type === "Ghost" && typeMod < 0) {
        return 0;
      }
    }
  }
};
//# sourceMappingURL=rulesets.js.map
