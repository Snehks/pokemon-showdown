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
  brassbond: {
    // this is literally just parental bond
    onPrepareHit(source, target, move) {
      if (move.category === "Status" || move.multihit || move.flags["noparentalbond"] || move.flags["charge"] || move.flags["futuremove"] || move.spreadHit || move.isZ || move.isMax) return;
      move.multihit = 2;
      move.multihitType = "parentalbond";
    },
    // Damage modifier implemented in BattleActions#modifyDamage()
    onSourceModifySecondaries(secondaries, target, source, move) {
      if (move.multihitType === "parentalbond" && move.id === "secretpower" && move.hit < 2) {
        return secondaries.filter((effect) => effect.volatileStatus === "flinch");
      }
    },
    flags: {},
    name: "Brass Bond",
    num: -1,
    desc: "Parental Bond clone"
  },
  protean: {
    inherit: true,
    onPrepareHit(source, target, move) {
      if (move.hasBounced || move.flags["futuremove"] || move.sourceEffect === "snatch" || move.callsMove) return;
      const type = move.type;
      if (type && type !== "???" && source.getTypes().join() !== type) {
        if (!source.setType(type)) return;
        this.add("-start", source, "typechange", type, "[from] ability: Protean");
      }
    },
    rating: 4.5
  },
  sandforce: {
    inherit: true,
    onStart(pokemon) {
      if (pokemon.species.name === "Rhyperior" || pokemon.baseSpecies.name === "Hippowdon") {
        this.field.setWeather("sandstorm");
      }
    },
    desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm. If this Pokemon is a Rhyperior, it will summon Sandstorm on switch-in."
  }
};
//# sourceMappingURL=abilities.js.map
