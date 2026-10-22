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
  atk: "\u653B\u51FB",
  def: "\u9632\u5FA1",
  spa: "\u7279\u653B",
  spd: "\u7279\u9632",
  spe: "\u901F\u5EA6",
  accuracy: "\u547D\u4E2D\u7387",
  evasion: "\u95EA\u907F\u7387",
  spc: "\u7279\u6B8A",
  // n.b. used in "stats were lowered" battle messages,
  // so it should be lowercase (unlike "Stats" in ui.ts)
  stats: "\u80FD\u529B"
};
const StatMediumNames = {
  hp: "HP",
  atk: "\u653B\u51FB",
  def: "\u9632\u5FA1",
  spa: "\u7279\u653B",
  spd: "\u7279\u9632",
  spe: "\u901F\u5EA6",
  accuracy: "\u547D\u4E2D",
  evasion: "\u95EA\u907F",
  spc: "\u7279\u6B8A"
};
const StatShortNames = {
  hp: "HP",
  atk: "\u653B",
  def: "\u9632",
  spa: "\u7279\u653B",
  spd: "\u7279\u9632",
  spe: "\u901F",
  spc: "\u7279"
};
const TypeNames = {
  Bug: "\u866B",
  Dark: "\u6076",
  Dragon: "\u9F99",
  Electric: "\u7535",
  Fairy: "\u5996\u7CBE",
  Fighting: "\u683C\u6597",
  Fire: "\u706B",
  Flying: "\u98DE\u884C",
  Ghost: "\u5E7D\u7075",
  Grass: "\u8349",
  Ground: "\u5730\u9762",
  Ice: "\u51B0",
  Normal: "\u4E00\u822C",
  Poison: "\u6BD2",
  Psychic: "\u8D85\u80FD\u529B",
  Rock: "\u5CA9\u77F3",
  Steel: "\u94A2",
  Stellar: "\u661F\u6676",
  Water: "\u6C34",
  "???": null
  // NEEDS TRANSLATION
};
const NatureNames = {
  Adamant: "\u56FA\u6267",
  Bashful: "\u5BB3\u7F9E",
  Bold: "\u5927\u80C6",
  Brave: "\u52C7\u6562",
  Calm: "\u6E29\u548C",
  Careful: "\u614E\u91CD",
  Docile: "\u5766\u7387",
  Gentle: "\u6E29\u987A",
  Hardy: "\u52E4\u594B",
  Hasty: "\u6025\u8E81",
  Impish: "\u6DD8\u6C14",
  Jolly: "\u723D\u6717",
  Lax: "\u4E50\u5929",
  Lonely: "\u6015\u5BC2\u5BDE",
  Mild: "\u6162\u541E\u541E",
  Modest: "\u5185\u655B",
  Naive: "\u5929\u771F",
  Naughty: "\u987D\u76AE",
  Quiet: "\u51B7\u9759",
  Quirky: "\u6D6E\u8E81",
  Rash: "\u9A6C\u864E",
  Relaxed: "\u60A0\u95F2",
  Sassy: "\u81EA\u5927",
  Serious: "\u8BA4\u771F",
  Timid: "\u80C6\u5C0F"
};
const GenderNames = {
  M: "\u96C4\u6027",
  F: "\u96CC\u6027",
  N: null
  // NEEDS TRANSLATION
};
const StatusNames = {
  brn: "\u707C\u4F24",
  par: "\u9EBB\u75F9",
  slp: "\u7761\u7720",
  frz: "\u51B0\u51BB",
  psn: "\u4E2D\u6BD2",
  tox: "\u5267\u6BD2",
  fnt: "\u6FD2\u6B7B",
  // official (Gen 7+ ability/flavor text, e.g. 引爆 "变为濒死时")
  confusion: "\u6DF7\u4E71"
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
  Black: "\u9ED1\u8272",
  Blue: "\u84DD\u8272",
  Brown: "\u8910\u8272",
  Gray: "\u7070\u8272",
  Green: "\u7EFF\u8272",
  Pink: "\u7C89\u7EA2\u8272",
  Purple: "\u7D2B\u8272",
  Red: "\u7EA2\u8272",
  White: "\u767D\u8272",
  Yellow: "\u9EC4\u8272"
};
//# sourceMappingURL=names.js.map
