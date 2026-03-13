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
var abilities_exports = {};
__export(abilities_exports, {
  Abilities: () => Abilities
});
module.exports = __toCommonJS(abilities_exports);
const Abilities = {
  dynahax: {
    // Block ALL non-move damage (weather ticks, status ticks, Life Orb, hazards, item damage, etc.)
    // Mirrors: cancelsStatusEffectDamage, cancelsWeatherEffectAffect,
    //          shouldLifeOrbRecoil, shouldTakeItemDamage
    onDamage(damage, target, source, effect) {
      if (effect.effectType !== "Move") return false;
    },
    // [PBO] Max/G-Max moves used natively have basePower 10 in move data.
    // Boost to 130 (standard G-Max power derived from ~90 BP base moves).
    onBasePower(basePower, attacker, defender, move) {
      if (move.isMax && basePower <= 10) {
        return 130;
      }
    },
    // Immune to all status conditions
    // Mirrors: canAddStatus → always false
    onSetStatus(status, target, source, effect) {
      this.add("-immune", target, "[from] ability: Dynahax");
      return false;
    },
    // Block specific status moves, trapping moves, and OHKO moves
    // Mirrors: defenderPreventsMoveExecution (DYNAMAX_IGNORE_MOVE_LIST)
    onTryHit(target, source, move) {
      if (target === source) return;
      const blocked = /* @__PURE__ */ new Set([
        "soak",
        "doodle",
        "perishsong",
        "torment",
        "taunt",
        "encore",
        "trick",
        "switcheroo",
        "entrainment",
        "skillswap",
        "painsplit",
        "endeavor",
        "finalgambit",
        "simplebeam",
        "destinybond",
        "foulplay",
        "bind",
        "infestation",
        "clamp",
        "firespin",
        "magmastorm",
        "sandtomb",
        "snaptrap",
        "thundercage",
        "whirlpool",
        "wrap",
        "healpulse",
        "superfang",
        "grudge"
      ]);
      if (blocked.has(move.id) || move.ohko) {
        this.add("-immune", target, "[from] ability: Dynahax");
        return null;
      }
    },
    // Gastro Acid all non-Dynahax foes on entry
    // Mirrors: hasGastroAcidChangeableAbility
    onStart(pokemon) {
      for (const foe of pokemon.adjacentFoes()) {
        if (foe.ability !== "dynahax") {
          foe.addVolatile("gastroacid");
        }
      }
    },
    // Draining moves heal 0 HP
    // Mirrors: getHpToAbsorb → 1 (we use chainModify(0) which floors to 0)
    onSourceTryHeal(damage, target, source, effect) {
      if (effect?.id === "drain") return this.chainModify(0);
    },
    // Can't be traced, skill swapped, etc.
    flags: {
      failroleplay: 1,
      noreceiver: 1,
      noentrain: 1,
      notrace: 1,
      failskillswap: 1,
      cantsuppress: 1
    },
    name: "Dynahax",
    rating: 5,
    num: -1
    // Custom PBO ability
  }
};
//# sourceMappingURL=abilities.js.map
