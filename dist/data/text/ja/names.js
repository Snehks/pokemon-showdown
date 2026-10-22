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
  hp: "\uFF28\uFF30",
  atk: "\u653B\u6483",
  def: "\u9632\u5FA1",
  spa: "\u7279\u653B",
  spd: "\u7279\u9632",
  spe: "\u7D20\u65E9\u3055",
  accuracy: "\u547D\u4E2D\u7387",
  evasion: "\u56DE\u907F\u7387",
  spc: "\u7279\u6B8A",
  // n.b. used in "stats were lowered" battle messages,
  // so it should be lowercase (unlike "Stats" in ui.ts)
  stats: "\u30B9\u30C6\u30FC\u30BF\u30B9"
};
const StatMediumNames = {
  hp: "\uFF28\uFF30",
  atk: "\u3053\u3046\u3052\u304D",
  def: "\u307C\u3046\u304E\u3087",
  spa: "\u3068\u304F\u3053\u3046",
  spd: "\u3068\u304F\u307C\u3046",
  spe: "\u3059\u3070\u3084\u3055",
  accuracy: "\u3081\u3044\u3061\u3085\u3046",
  evasion: "\u304B\u3044\u3072",
  spc: "\u3068\u304F\u3057\u3085"
};
const StatShortNames = {
  hp: "\uFF28",
  atk: "\uFF21",
  def: "\uFF22",
  spa: "\uFF23",
  spd: "\uFF24",
  spe: "\uFF33",
  spc: "\uFF23\uFF24"
};
const TypeNames = {
  Bug: "\u3080\u3057",
  Dark: "\u3042\u304F",
  Dragon: "\u30C9\u30E9\u30B4\u30F3",
  Electric: "\u3067\u3093\u304D",
  Fairy: "\u30D5\u30A7\u30A2\u30EA\u30FC",
  Fighting: "\u304B\u304F\u3068\u3046",
  Fire: "\u307B\u306E\u304A",
  Flying: "\u3072\u3053\u3046",
  Ghost: "\u30B4\u30FC\u30B9\u30C8",
  Grass: "\u304F\u3055",
  Ground: "\u3058\u3081\u3093",
  Ice: "\u3053\u304A\u308A",
  Normal: "\u30CE\u30FC\u30DE\u30EB",
  Poison: "\u3069\u304F",
  Psychic: "\u30A8\u30B9\u30D1\u30FC",
  Rock: "\u3044\u308F",
  Steel: "\u306F\u304C\u306D",
  Stellar: "\u30B9\u30C6\u30E9",
  Water: "\u307F\u305A",
  "???": null
  // NEEDS TRANSLATION
};
const NatureNames = {
  Adamant: "\u3044\u3058\u3063\u3071\u308A",
  Bashful: "\u3066\u308C\u3084",
  Bold: "\u305A\u3076\u3068\u3044",
  Brave: "\u3086\u3046\u304B\u3093",
  Calm: "\u304A\u3060\u3084\u304B",
  Careful: "\u3057\u3093\u3061\u3087\u3046",
  Docile: "\u3059\u306A\u304A",
  Gentle: "\u304A\u3068\u306A\u3057\u3044",
  Hardy: "\u304C\u3093\u3070\u308A\u3084",
  Hasty: "\u305B\u3063\u304B\u3061",
  Impish: "\u308F\u3093\u3071\u304F",
  Jolly: "\u3088\u3046\u304D",
  Lax: "\u306E\u3046\u3066\u3093\u304D",
  Lonely: "\u3055\u307F\u3057\u304C\u308A",
  Mild: "\u304A\u3063\u3068\u308A",
  Modest: "\u3072\u304B\u3048\u3081",
  Naive: "\u3080\u3058\u3083\u304D",
  Naughty: "\u3084\u3093\u3061\u3083",
  Quiet: "\u308C\u3044\u305B\u3044",
  Quirky: "\u304D\u307E\u3050\u308C",
  Rash: "\u3046\u3063\u304B\u308A\u3084",
  Relaxed: "\u306E\u3093\u304D",
  Sassy: "\u306A\u307E\u3044\u304D",
  Serious: "\u307E\u3058\u3081",
  Timid: "\u304A\u304F\u3073\u3087\u3046"
};
const GenderNames = {
  M: "\u30AA\u30B9",
  F: "\u30E1\u30B9",
  N: "\u305B\u3044\u3079\u3064\u306A\u3057"
};
const StatusNames = {
  // official status condition names
  brn: "\u3084\u3051\u3069",
  par: "\u307E\u3072",
  slp: "\u306D\u3080\u308A",
  frz: "\u3053\u304A\u308A",
  psn: "\u3069\u304F",
  tox: "\u3082\u3046\u3069\u304F",
  fnt: "\u3072\u3093\u3057",
  confusion: "\u3053\u3093\u3089\u3093"
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
  Black: "\u9ED2",
  Blue: "\u9752",
  Brown: "\u8336",
  Gray: "\u7070",
  Green: "\u7DD1",
  Pink: "\u6843",
  Purple: "\u7D2B",
  Red: "\u8D64",
  White: "\u767D",
  Yellow: "\u9EC4"
};
//# sourceMappingURL=names.js.map
