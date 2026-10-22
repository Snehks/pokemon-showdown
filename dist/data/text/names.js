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
  atk: "Attack",
  def: "Defense",
  spa: "Sp. Atk",
  spd: "Sp. Def",
  spe: "Speed",
  accuracy: "accuracy",
  evasion: "evasiveness",
  spc: "Special",
  // n.b. used in "stats were lowered" battle messages,
  // so it should be lowercase (unlike "Stats" in ui.ts)
  stats: "stats"
};
const StatMediumNames = {
  hp: "HP",
  atk: "Attack",
  def: "Defense",
  spa: "Sp. Atk",
  spd: "Sp. Def",
  spe: "Speed",
  accuracy: "Accuracy",
  evasion: "Evasiveness",
  spc: "Special"
};
const StatShortNames = {
  hp: "HP",
  atk: "Atk",
  def: "Def",
  spa: "SpA",
  spd: "SpD",
  spe: "Spe",
  spc: "Spc"
};
const TypeNames = {
  Bug: "Bug",
  Dark: "Dark",
  Dragon: "Dragon",
  Electric: "Electric",
  Fairy: "Fairy",
  Fighting: "Fighting",
  Fire: "Fire",
  Flying: "Flying",
  Ghost: "Ghost",
  Grass: "Grass",
  Ground: "Ground",
  Ice: "Ice",
  Normal: "Normal",
  Poison: "Poison",
  Psychic: "Psychic",
  Rock: "Rock",
  Steel: "Steel",
  Stellar: "Stellar",
  Water: "Water",
  "???": "???"
};
const NatureNames = {
  Adamant: "Adamant",
  Bashful: "Bashful",
  Bold: "Bold",
  Brave: "Brave",
  Calm: "Calm",
  Careful: "Careful",
  Docile: "Docile",
  Gentle: "Gentle",
  Hardy: "Hardy",
  Hasty: "Hasty",
  Impish: "Impish",
  Jolly: "Jolly",
  Lax: "Lax",
  Lonely: "Lonely",
  Mild: "Mild",
  Modest: "Modest",
  Naive: "Naive",
  Naughty: "Naughty",
  Quiet: "Quiet",
  Quirky: "Quirky",
  Rash: "Rash",
  Relaxed: "Relaxed",
  Sassy: "Sassy",
  Serious: "Serious",
  Timid: "Timid"
};
const GenderNames = {
  M: "Male",
  F: "Female",
  N: "Genderless"
};
const StatusNames = {
  brn: "Burned",
  par: "Paralyzed",
  slp: "Asleep",
  frz: "Frozen",
  psn: "Poisoned",
  tox: "Badly Poisoned",
  fnt: "Fainted",
  confusion: "Confused"
};
const TargetNames = {
  normal: "Can target any adjacent ally or foe",
  normalDoubles: "Can target ally or any foe",
  normalSingles: "Hits foe",
  normalFFA: "Can target any foe",
  self: "Hits user",
  adjacentAlly: "Can target any adjacent ally",
  adjacentAllyDoubles: "Hits your ally",
  adjacentAllySingles: "Always fails in Singles",
  adjacentAllyOrSelf: "Can target user or adjacent ally",
  adjacentAllyOrSelfDoubles: "Can target user or ally",
  adjacentFoe: "Can target any adjacent foe",
  allAdjacentFoes: "Hits adjacent foes",
  allAdjacentFoesDoubles: "Hits both foes",
  foeSide: "Hits opposing side",
  allySide: "Hits user's side",
  allyTeam: "Hits user's team",
  allAdjacent: "Hits adjacent allies and foes",
  allAdjacentDoubles: "Hits ally and both foes",
  allAdjacentFFA: "Hits all foes",
  any: "Can target distant Pok\xE9mon in Triples",
  all: "Hits all Pok\xE9mon",
  scripted: "Target chosen automatically",
  randomNormal: "Hits random adjacent foe",
  randomNormalDoubles: "Hits random foe",
  allies: "Hits user and allies"
};
const EggGroupNames = {
  Monster: "Monster",
  "Water 1": "Water 1",
  Bug: "Bug",
  Flying: "Flying",
  Field: "Field",
  // Stadium 2: "Ground"
  Fairy: "Fairy",
  Grass: "Grass",
  // Stadium 2: "Plant"
  "Human-Like": "Human-Like",
  // Stadium 2: "Humanshape"
  "Water 3": "Water 3",
  Mineral: "Mineral",
  Amorphous: "Amorphous",
  // Stadium 2: "Indeterminate"
  "Water 2": "Water 2",
  Ditto: "Ditto",
  Dragon: "Dragon",
  Undiscovered: "Undiscovered"
  // Stadium 2: "No EGGs"
};
const ColorNames = {
  Black: "Black",
  Blue: "Blue",
  Brown: "Brown",
  Gray: "Gray",
  Green: "Green",
  Pink: "Pink",
  Purple: "Purple",
  Red: "Red",
  White: "White",
  Yellow: "Yellow"
};
//# sourceMappingURL=names.js.map
