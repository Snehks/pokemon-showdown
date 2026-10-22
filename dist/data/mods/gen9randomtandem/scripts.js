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
var scripts_exports = {};
__export(scripts_exports, {
  Scripts: () => Scripts
});
module.exports = __toCommonJS(scripts_exports);
const tandems = require("./tandems.json");
function buildTandemSet(tandem) {
  const move1 = this.sample(tandem.moves);
  const move2 = this.sample(tandem.moves.filter((move) => move !== move1));
  const moves = [...tandem.forcedMoves, move1, move2];
  let tandomDexSpecies = this.dex.species.get(tandem.species);
  if (tandomDexSpecies.battleOnly) {
    tandomDexSpecies = typeof tandomDexSpecies.battleOnly === "string" ? this.dex.species.get(tandomDexSpecies.battleOnly) : this.dex.species.get(tandomDexSpecies.baseSpecies);
  }
  return {
    name: tandomDexSpecies.baseSpecies,
    species: tandomDexSpecies.name,
    item: this.sample(tandem.items),
    ability: this.sample(tandem.abilities),
    gender: tandem.gender || this.sample(["M", "F"]),
    nature: tandem.nature || "Serious",
    moves,
    evs: { hp: 84, atk: 84, def: 84, spa: 84, spd: 84, spe: 84 },
    ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    level: 100,
    shiny: true,
    teraType: this.sample(tandem.teraTypes),
    happiness: 255,
    hpType: "",
    pokeball: "",
    gigantamax: false,
    dynamaxLevel: 10
  };
}
function getBaseSpeciesId(speciesName) {
  const dex = this.dex.species.get(speciesName);
  return dex.baseSpecies ? this.toID(dex.baseSpecies) : dex.id;
}
const Scripts = {
  gen: 9,
  start() {
    for (const side of this.sides) {
      for (const pokemon of side.pokemon) {
        let baseSpecies = this.toID(pokemon.species.name);
        if (baseSpecies === "keldeoresolute") baseSpecies = "keldeo";
        if (baseSpecies === "dudunsparcethreesegment") baseSpecies = "dudunsparce";
        if (!tandems[baseSpecies] || pokemon.m.tandem) continue;
        const noTandem = new Set(side.pokemon.map((p) => p.baseSpecies.id));
        const availableTands = tandems[baseSpecies].filter(
          (t) => !noTandem.has(getBaseSpeciesId.call(this, t.species))
        );
        if (!availableTands.length) continue;
        const unbuiltTandem1 = this.sample(availableTands);
        noTandem.add(getBaseSpeciesId.call(this, unbuiltTandem1.species));
        const remainingTands = availableTands.filter((t) => t !== unbuiltTandem1);
        const tandem1 = side.addPokemon(buildTandemSet.call(this, unbuiltTandem1));
        if (tandem1) tandem1.m.tandem = true;
        if (remainingTands.length) {
          const tandem2Possible = remainingTands.filter(
            (t) => !noTandem.has(getBaseSpeciesId.call(this, t.species))
          );
          const unbuiltTandem2 = this.sample(tandem2Possible.length ? tandem2Possible : remainingTands);
          const tandem2 = side.addPokemon(buildTandemSet.call(this, unbuiltTandem2));
          if (tandem2) tandem2.m.tandem = true;
        }
      }
    }
    if (this.deserialized) return;
    if (!this.sides.every((side) => !!side)) throw new Error(`Missing sides: ${this.sides.join(",")}`);
    if (this.started) throw new Error(`Battle already started`);
    const format = this.format;
    this.started = true;
    this.sides[1].foe = this.sides[0];
    this.sides[0].foe = this.sides[1];
    this.add("gen", this.gen);
    this.add("tier", format.name);
    if (this.rated) {
      if (this.rated === "Rated battle") this.rated = true;
      this.add("rated", typeof this.rated === "string" ? this.rated : "");
    }
    format.onBegin?.call(this);
    for (const rule of this.ruleTable.keys()) {
      if ("+*-!".includes(rule.charAt(0))) continue;
      const subFormat = this.dex.formats.get(rule);
      subFormat.onBegin?.call(this);
    }
    if (this.sides.some((side) => !side.pokemon[0])) {
      throw new Error("Battle not started: A player has an empty team.");
    }
    if (this.debugMode) {
      this.checkEVBalance();
    }
    if (format.customRules) {
      const plural = format.customRules.length === 1 ? "" : "s";
      const open = format.customRules.length <= 5 ? " open" : "";
      this.add(`raw|<div class="infobox"><details class="readmore"${open}><summary><strong>${format.customRules.length} custom rule${plural}:</strong></summary> ${format.customRules.join(", ")}</details></div>`);
    }
    this.runPickTeam();
    this.queue.addChoice({ choice: "start" });
    this.midTurn = true;
    if (!this.requestState) this.turnLoop();
  }
};
//# sourceMappingURL=scripts.js.map
