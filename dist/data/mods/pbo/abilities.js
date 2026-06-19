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
  // [PBO] Fix: vanilla onEnd emits |-end|fallenundefined when Kingambit leads
  // with no fainted allies (effectState.fallen is never set by onStart).
  supremeoverlord: {
    inherit: true,
    onEnd(pokemon) {
      if (this.effectState.fallen) {
        this.add("-end", pokemon, `fallen${this.effectState.fallen}`, "[silent]");
      }
    }
  },
  // [PBO] Cursed Body must not disable Dynahax raid boss moves — bosses have
  // tiny Max-move sets and a successful disable can softlock the encounter.
  cursedbody: {
    inherit: true,
    onDamagingHit(damage, target, source, move) {
      if (source.volatiles["disable"]) return;
      if (source.hasAbility("dynahax")) return;
      if (!move.isMax && !move.flags["futuremove"] && move.id !== "struggle") {
        if (this.randomChance(3, 10)) {
          source.addVolatile("disable", this.effectState.target);
        }
      }
    }
  },
  dynahax: {
    // Block ALL non-move damage (weather ticks, status ticks, Life Orb, hazards, item damage, etc.)
    // Mirrors: cancelsStatusEffectDamage, cancelsWeatherEffectAffect,
    //          shouldLifeOrbRecoil, shouldTakeItemDamage
    onDamage(damage, target, source, effect) {
      if (effect.effectType !== "Move") return false;
    },
    // Block all non-move healing (Grassy Terrain, Leftovers, Aqua Ring, etc.)
    // Mirrors: canPokemonGainHpFromTerrain → false, getModifiedRestorationHpFromItem → 1
    onTryHeal(damage, target, source, effect) {
      if (effect && effect.effectType !== "Move") return 0;
    },
    // [PBO] Max/G-Max moves used natively have basePower 10 in move data.
    // Boost to 130 (standard G-Max power derived from ~90 BP base moves).
    onBasePower(basePower, attacker, defender, move) {
      if (move.isMax && basePower <= 10) {
        return 130;
      }
    },
    // [PBO] Max moves are hardcoded Physical in move data. Dynahax bosses
    // use them directly (not derived from a base move), so pick the better
    // attacking stat. Uses storedStats directly (base + IVs + EVs + nature + level)
    // so stat stages, abilities, items, burns, etc. do NOT flip the category mid-battle.
    onModifyMove(move, pokemon) {
      if (move.isMax) {
        move.category = pokemon.storedStats.spa > pokemon.storedStats.atk ? "Special" : "Physical";
      }
    },
    // Block self-inflicted confusion (Outrage, Thrash, Petal Dance).
    // Enemy confusion (Confuse Ray, Dynamic Punch) still works.
    // Self-inflicted: source is null (lockedmove onEnd) or source === target.
    onTryAddVolatile(status, target, source) {
      if (status.id === "confusion" && (!source || source === target)) return null;
    },
    // Immune to all status conditions
    // Mirrors: canAddStatus → always false
    onSetStatus(status, target, source, effect) {
      this.add("-immune", target, "[from] ability: Dynahax");
      return false;
    },
    // Disable moves that bypass onTryHit or should not rely on targeting the boss.
    // Destiny Bond / Grudge / Baton Pass / Power Trick target the user.
    // Guard Split / Power Split / Speed Swap swap stats with the boss and trivialise raids.
    // Dragon Cheer targets an ally. Skill Swap and Bestow are disabled in the picker
    // instead of only failing on use (Bestow still also fails via onTryHit as a
    // catch-all for indirect calls like Metronome).
    // Pattern: same as Imprison's onFoeDisableMove.
    onFoeDisableMove(pokemon) {
      for (const moveSlot of pokemon.moveSlots) {
        if (moveSlot.id === "destinybond" || moveSlot.id === "grudge" || moveSlot.id === "batonpass" || moveSlot.id === "skillswap" || moveSlot.id === "bestow" || moveSlot.id === "powertrick" || moveSlot.id === "dragoncheer" || moveSlot.id === "guardsplit" || moveSlot.id === "powersplit" || moveSlot.id === "speedswap") {
          pokemon.disableMove(moveSlot.id);
        }
      }
    },
    // Block specific status moves, trapping moves, and OHKO moves
    // Mirrors: defenderPreventsMoveExecution (DYNAMAX_IGNORE_MOVE_LIST)
    onTryHit(target, source, move) {
      if (target === source) return;
      const blocked = /* @__PURE__ */ new Set([
        "soak",
        "magicpowder",
        "trickortreat",
        "forestscurse",
        "doodle",
        "perishsong",
        "torment",
        "taunt",
        "encore",
        "trick",
        "switcheroo",
        "bestow",
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
        "grudge",
        "batonpass",
        "leechseed"
      ]);
      if (blocked.has(move.id) || move.ohko) {
        this.add("-immune", target, "[from] ability: Dynahax");
        return null;
      }
    },
    // Block foe item theft (Magician, Pickpocket)
    // Mirrors: vetoesAbility(DYNAMAX_IGNORE_ABILITY_LIST) for item-stealing abilities
    onTakeItem(item, pokemon, source) {
      if (source && source !== pokemon) return false;
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
