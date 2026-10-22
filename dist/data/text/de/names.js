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
  hp: "KP",
  atk: "Angriff",
  "atk:grammar": "ms",
  def: "Verteidigung",
  "def:grammar": "fs",
  spa: "Spezial-Angriff",
  "spa:grammar": "ms",
  spd: "Spezial-Verteidigung",
  "spd:grammar": "fs",
  spe: "Initiative",
  "spe:grammar": "fs",
  accuracy: "Genauigkeit",
  "accuracy:grammar": "fs",
  evasion: "Ausweichwert",
  "evasion:grammar": "ms",
  spc: "Spezial",
  "spc:grammar": "ns",
  // n.b. used in "stats were lowered" battle messages,
  // so it should be lowercase (unlike "Stats" in ui.ts)
  stats: "Statuswerte",
  "stats:grammar": "mp"
};
const StatMediumNames = {
  hp: "KP",
  atk: "Angriff",
  def: "Verteidigung",
  spa: "Sp.-Ang.",
  spd: "Sp.-Vert.",
  spe: "Initiative",
  accuracy: "Genauigkeit",
  evasion: "Ausweichwert",
  spc: "Spezial"
};
const StatShortNames = {
  hp: "KP",
  atk: "Ang",
  def: "Ver",
  spa: "SpA",
  spd: "SpV",
  spe: "Ini",
  spc: "Spz"
};
const TypeNames = {
  Bug: "K\xE4fer",
  Dark: "Unlicht",
  Dragon: "Drache",
  Electric: "Elektro",
  Fairy: "Fee",
  Fighting: "Kampf",
  Fire: "Feuer",
  Flying: "Flug",
  Ghost: "Geist",
  Grass: "Pflanze",
  Ground: "Boden",
  Ice: "Eis",
  Normal: "Normal",
  Poison: "Gift",
  Psychic: "Psycho",
  Rock: "Gestein",
  Steel: "Stahl",
  Stellar: "Stellar",
  Water: "Wasser",
  "???": null
  // NEEDS TRANSLATION
};
const NatureNames = {
  Adamant: "Hart",
  Bashful: "Zaghaft",
  Bold: "K\xFChn",
  Brave: "Mutig",
  Calm: "Still",
  Careful: "Sacht",
  Docile: "Sanft",
  Gentle: "Zart",
  Hardy: "Robust",
  Hasty: "Hastig",
  Impish: "Pfiffig",
  Jolly: "Froh",
  Lax: "Lasch",
  Lonely: "Solo",
  Mild: "Mild",
  Modest: "M\xE4\xDFig",
  Naive: "Naiv",
  Naughty: "Frech",
  Quiet: "Ruhig",
  Quirky: "Kauzig",
  Rash: "Hitzig",
  Relaxed: "Locker",
  Sassy: "Forsch",
  Serious: "Ernst",
  Timid: "Scheu"
};
const GenderNames = {
  M: "M\xE4nnlich",
  F: "Weiblich",
  N: "Unbekannt"
};
const StatusNames = {
  brn: "Verbrennungen",
  par: "Paralyse",
  slp: "Schlaf",
  frz: "Gefroren",
  psn: "Vergiftung",
  tox: "Schwere Vergiftung",
  fnt: null,
  // NEEDS TRANSLATION
  confusion: "Verwirrung"
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
  Black: "Schwarz",
  Blue: "Blau",
  Brown: "Braun",
  Gray: "Grau",
  Green: "Gr\xFCn",
  Pink: "Rosa",
  Purple: "Violett",
  Red: "Rot",
  White: "Wei\xDF",
  Yellow: "Gelb"
};
//# sourceMappingURL=names.js.map
