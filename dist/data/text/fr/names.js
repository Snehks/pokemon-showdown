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
  hp: "PV",
  atk: "Attaque",
  "atk:grammar": "fs",
  def: "D\xE9fense",
  "def:grammar": "fs",
  spa: "Attaque Sp\xE9ciale",
  "spa:grammar": "fs",
  spd: "D\xE9fense Sp\xE9ciale",
  "spd:grammar": "fs",
  spe: "Vitesse",
  "spe:grammar": "fs",
  accuracy: "Pr\xE9cision",
  "accuracy:grammar": "fs",
  evasion: "Esquive",
  "evasion:grammar": "fs",
  spc: "Sp\xE9cial",
  "spc:grammar": "ms",
  // n.b. used in "stats were lowered" battle messages,
  // so it should be lowercase (unlike "Stats" in ui.ts)
  stats: "stats",
  "stats:grammar": "fp"
};
const StatMediumNames = {
  hp: "PV",
  atk: "Attaque",
  def: "D\xE9fense",
  spa: "Atq. Sp\xE9.",
  spd: "D\xE9f. Sp\xE9.",
  spe: "Vitesse",
  accuracy: "Pr\xE9cision",
  evasion: "Esquive",
  spc: "Sp\xE9cial"
};
const StatShortNames = {
  hp: "PV",
  atk: "Atq",
  def: "D\xE9f",
  spa: "ASp",
  spd: "DSp",
  spe: "Vit",
  spc: "Sp\xE9"
};
const TypeNames = {
  Bug: "Insecte",
  Dark: "T\xE9n\xE8bres",
  Dragon: "Dragon",
  Electric: "\xC9lectrik",
  Fairy: "F\xE9e",
  Fighting: "Combat",
  Fire: "Feu",
  Flying: "Vol",
  Ghost: "Spectre",
  Grass: "Plante",
  Ground: "Sol",
  Ice: "Glace",
  Normal: "Normal",
  Poison: "Poison",
  Psychic: "Psy",
  Rock: "Roche",
  Steel: "Acier",
  Stellar: "Stellaire",
  Water: "Eau",
  "???": null
  // NEEDS TRANSLATION
};
const NatureNames = {
  Adamant: "Rigide",
  Bashful: "Pudique",
  Bold: "Assur\xE9",
  Brave: "Brave",
  Calm: "Calme",
  Careful: "Prudent",
  Docile: "Docile",
  Gentle: "Gentil",
  Hardy: "Hardi",
  Hasty: "Press\xE9",
  Impish: "Malin",
  Jolly: "Jovial",
  Lax: "L\xE2che",
  Lonely: "Solo",
  Mild: "Doux",
  Modest: "Modeste",
  Naive: "Na\xEFf",
  Naughty: "Mauvais",
  Quiet: "Discret",
  Quirky: "Bizarre",
  Rash: "Foufou",
  Relaxed: "Relax",
  Sassy: "Malpoli",
  Serious: "S\xE9rieux",
  Timid: "Timide"
};
const GenderNames = {
  M: "M\xE2le",
  F: "Femelle",
  N: null
  // NEEDS TRANSLATION
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
  Black: "Noir",
  Blue: "Bleu",
  Brown: "Brun",
  Gray: "Gris",
  Green: "Vert",
  Pink: "Rose",
  Purple: "Violet",
  Red: "Rouge",
  White: "Blanc",
  Yellow: "Jaune"
};
//# sourceMappingURL=names.js.map
