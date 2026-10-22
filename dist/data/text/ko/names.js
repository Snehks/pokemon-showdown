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
var names_exports = {};
__export(names_exports, {
  ColorNames: () => ColorNames,
  EggGroupNames: () => EggGroupNames,
  GenderNames: () => GenderNames,
  NatureNames: () => NatureNames,
  StatMediumNames: () => StatMediumNames,
  StatNames: () => StatNames,
  StatShortNames: () => StatShortNames,
  StatusNames: () => StatusNames,
  TargetNames: () => TargetNames,
  TypeNames: () => TypeNames
});
module.exports = __toCommonJS(names_exports);
const StatNames = {
  hp: "HP",
  atk: "\uACF5\uACA9",
  def: "\uBC29\uC5B4",
  spa: "\uD2B9\uC218\uACF5\uACA9",
  spd: "\uD2B9\uC218\uBC29\uC5B4",
  spe: "\uC2A4\uD53C\uB4DC",
  accuracy: "\uBA85\uC911\uB960",
  evasion: "\uD68C\uD53C\uC728",
  spc: "\uD2B9\uC218",
  // n.b. used in "stats were lowered" battle messages,
  // so it should be lowercase (unlike "Stats" in ui.ts)
  stats: "\uC2A4\uD14C\uC774\uD130\uC2A4"
};
const StatMediumNames = {
  hp: "HP",
  atk: "\uACF5\uACA9",
  def: "\uBC29\uC5B4",
  spa: "\uD2B9\uC218\uACF5\uACA9",
  spd: "\uD2B9\uC218\uBC29\uC5B4",
  spe: "\uC2A4\uD53C\uB4DC",
  accuracy: "\uBA85\uC911",
  evasion: "\uD68C\uD53C",
  spc: "\uD2B9\uC218"
};
const StatShortNames = {
  hp: "HP",
  atk: "\uACF5",
  def: "\uBC29",
  spa: "\uD2B9\uACF5",
  spd: "\uD2B9\uBC29",
  spe: "\uC2A4\uD54F",
  spc: "\uD2B9\uC218"
};
const TypeNames = {
  Bug: "\uBC8C\uB808",
  Dark: "\uC545",
  Dragon: "\uB4DC\uB798\uACE4",
  Electric: "\uC804\uAE30",
  Fairy: "\uD398\uC5B4\uB9AC",
  Fighting: "\uACA9\uD22C",
  Fire: "\uBD88\uAF43",
  Flying: "\uBE44\uD589",
  Ghost: "\uACE0\uC2A4\uD2B8",
  Grass: "\uD480",
  Ground: "\uB545",
  Ice: "\uC5BC\uC74C",
  Normal: "\uB178\uB9D0",
  Poison: "\uB3C5",
  Psychic: "\uC5D0\uC2A4\uD37C",
  Rock: "\uBC14\uC704",
  Steel: "\uAC15\uCCA0",
  Stellar: "\uC2A4\uD154\uB77C",
  Water: "\uBB3C",
  "???": null
  // NEEDS TRANSLATION
};
const NatureNames = {
  Adamant: "\uACE0\uC9D1",
  Bashful: "\uC218\uC90D\uC74C",
  Bold: "\uB300\uB2F4",
  Brave: "\uC6A9\uAC10",
  Calm: "\uCC28\uBD84",
  Careful: "\uC2E0\uC911",
  Docile: "\uC628\uC21C",
  Gentle: "\uC58C\uC804",
  Hardy: "\uB178\uB825",
  Hasty: "\uC131\uAE09",
  Impish: "\uC7A5\uB09C\uAFB8\uB7EC\uAE30",
  Jolly: "\uBA85\uB791",
  Lax: "\uCD10\uB791",
  Lonely: "\uC678\uB85C\uC6C0",
  Mild: "\uC758\uC813",
  Modest: "\uC870\uC2EC",
  Naive: "\uCC9C\uC9C4\uB09C\uB9CC",
  Naughty: "\uAC1C\uAD6C\uC7C1\uC774",
  Quiet: "\uB0C9\uC815",
  Quirky: "\uBCC0\uB355",
  Rash: "\uB35C\uB801",
  Relaxed: "\uBB34\uC0AC\uD0DC\uD3C9",
  Sassy: "\uAC74\uBC29",
  Serious: "\uC131\uC2E4",
  Timid: "\uAC81\uC7C1\uC774"
};
const GenderNames = {
  M: "\uC218\uCEF7",
  F: "\uC554\uCEF7",
  N: "\uC131\uBCC4 \uC5C6\uC74C"
};
const StatusNames = {
  brn: null,
  // NEEDS TRANSLATION
  par: null,
  // NEEDS TRANSLATION
  slp: null,
  // NEEDS TRANSLATION
  frz: null,
  // NEEDS TRANSLATION
  psn: null,
  // NEEDS TRANSLATION
  tox: null,
  // NEEDS TRANSLATION
  fnt: null,
  // NEEDS TRANSLATION
  confusion: null
  // NEEDS TRANSLATION
};
const TargetNames = {
  normal: null,
  // NEEDS TRANSLATION
  normalDoubles: null,
  // NEEDS TRANSLATION
  normalSingles: null,
  // NEEDS TRANSLATION
  normalFFA: null,
  // NEEDS TRANSLATION
  self: null,
  // NEEDS TRANSLATION
  adjacentAlly: null,
  // NEEDS TRANSLATION
  adjacentAllyDoubles: null,
  // NEEDS TRANSLATION
  adjacentAllySingles: null,
  // NEEDS TRANSLATION
  adjacentAllyOrSelf: null,
  // NEEDS TRANSLATION
  adjacentAllyOrSelfDoubles: null,
  // NEEDS TRANSLATION
  adjacentFoe: null,
  // NEEDS TRANSLATION
  allAdjacentFoes: null,
  // NEEDS TRANSLATION
  allAdjacentFoesDoubles: null,
  // NEEDS TRANSLATION
  foeSide: null,
  // NEEDS TRANSLATION
  allySide: null,
  // NEEDS TRANSLATION
  allyTeam: null,
  // NEEDS TRANSLATION
  allAdjacent: null,
  // NEEDS TRANSLATION
  allAdjacentDoubles: null,
  // NEEDS TRANSLATION
  allAdjacentFFA: null,
  // NEEDS TRANSLATION
  any: null,
  // NEEDS TRANSLATION
  all: null,
  // NEEDS TRANSLATION
  scripted: null,
  // NEEDS TRANSLATION
  randomNormal: null,
  // NEEDS TRANSLATION
  randomNormalDoubles: null,
  // NEEDS TRANSLATION
  allies: null
  // NEEDS TRANSLATION
};
const EggGroupNames = {
  Monster: null,
  // NEEDS TRANSLATION
  "Water 1": null,
  // NEEDS TRANSLATION
  Bug: null,
  // NEEDS TRANSLATION
  Flying: null,
  // NEEDS TRANSLATION
  Field: null,
  // NEEDS TRANSLATION
  Fairy: null,
  // NEEDS TRANSLATION
  Grass: null,
  // NEEDS TRANSLATION
  "Human-Like": null,
  // NEEDS TRANSLATION
  "Water 3": null,
  // NEEDS TRANSLATION
  Mineral: null,
  // NEEDS TRANSLATION
  Amorphous: null,
  // NEEDS TRANSLATION
  "Water 2": null,
  // NEEDS TRANSLATION
  Ditto: null,
  // NEEDS TRANSLATION
  Dragon: null,
  // NEEDS TRANSLATION
  Undiscovered: null
  // NEEDS TRANSLATION
};
const ColorNames = {
  Black: "\uAC80\uC815",
  Blue: "\uD30C\uB791",
  Brown: "\uAC08\uC0C9",
  Gray: "\uD68C\uC0C9",
  Green: "\uCD08\uB85D",
  Pink: "\uB2F4\uD64D",
  Purple: "\uBCF4\uB77C",
  Red: "\uBE68\uAC15",
  White: "\uD558\uC591",
  Yellow: "\uB178\uB791"
};
//# sourceMappingURL=names.js.map
