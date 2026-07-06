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
  conquerorshaki: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.foes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Conqueror's Haki", "boost");
          activated = true;
        }
        this.boost({ atk: -1, spa: -1 }, target, pokemon, null, true);
      }
    },
    flags: {
      failroleplay: 1,
      noreceiver: 1,
      noentrain: 1,
      notrace: 1,
      failskillswap: 1,
      cantsuppress: 1
    },
    name: "Conqueror's Haki",
    rating: 5,
    num: -2
  },
  worldsstrongestcreature: {
    onDamagePriority: -40,
    onDamage(damage, target, source, effect) {
      if (this.effectState.used) return;
      if (target.hp <= 1) return;
      if (damage >= target.hp && effect?.effectType === "Move") {
        this.effectState.used = true;
        this.add("-ability", target, "World's Strongest Creature");
        return target.hp - 1;
      }
    },
    flags: {
      failroleplay: 1,
      noreceiver: 1,
      noentrain: 1,
      notrace: 1,
      failskillswap: 1,
      cantsuppress: 1
    },
    name: "World's Strongest Creature",
    rating: 5,
    num: -3
  },
  drunkendragon: {
    onAfterMoveSecondary(target, source, move) {
      const state = this.effectState;
      if (state.used) return;
      if (!source || source === target || !target.hp || !move.totalDamage) return;
      const lastAttackedBy = target.getLastAttackedBy();
      if (!lastAttackedBy) return;
      if (target.hp <= target.maxhp / 2) {
        state.used = true;
        this.add("-ability", target, "Drunken Dragon");
        this.heal(Math.floor(target.maxhp / 4), target, target, this.effect);
        this.boost({ atk: 1, spe: 1 }, target, target, null, true);
      }
    },
    flags: {
      failroleplay: 1,
      noreceiver: 1,
      noentrain: 1,
      notrace: 1,
      failskillswap: 1,
      cantsuppress: 1
    },
    name: "Drunken Dragon",
    rating: 5,
    num: -4
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
    // Soak / Magic Powder / Trick-or-Treat / Forest's Curse / Doodle change a target's
    // typing — players cast them on an ALLY (never the boss) to make the ally immune to
    // the boss's attacks, which onTryHit alone can't stop (the boss is not the target).
    // Disabling them in the picker (like Destiny Bond) blocks every target.
    // Imprison / Role Play / Copycat are banned & disabled: Imprison locks the boss out of
    // shared moves, Role Play / Copycat copy abilities/moves to break intended checks.
    // Role Play targets the boss, so it also fails via onTryHit for indirect calls
    // (Metronome). Imprison and Copycat target the USER, so onTryHit never sees them —
    // Imprison is additionally blocked at the move level (moves.ts onTry) so it can never
    // apply against a Dynahax boss by any route (Sleep Talk / Metronome / Assist / Instruct).
    // Pattern: same as Imprison's onFoeDisableMove.
    onFoeDisableMove(pokemon) {
      for (const moveSlot of pokemon.moveSlots) {
        if (moveSlot.id === "destinybond" || moveSlot.id === "grudge" || moveSlot.id === "batonpass" || moveSlot.id === "skillswap" || moveSlot.id === "bestow" || moveSlot.id === "powertrick" || moveSlot.id === "dragoncheer" || moveSlot.id === "guardsplit" || moveSlot.id === "powersplit" || moveSlot.id === "speedswap" || moveSlot.id === "soak" || moveSlot.id === "magicpowder" || moveSlot.id === "trickortreat" || moveSlot.id === "forestscurse" || moveSlot.id === "doodle" || moveSlot.id === "imprison" || moveSlot.id === "roleplay" || moveSlot.id === "copycat") {
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
        "naturesmadness",
        "guardianofalola",
        "ruination",
        "grudge",
        "batonpass",
        "leechseed",
        "imprison",
        "roleplay",
        "copycat"
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
