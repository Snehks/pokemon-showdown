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
  hp: "PS",
  atk: "Ataque",
  "atk:grammar": "ms",
  def: "Defensa",
  "def:grammar": "fs",
  spa: "Ataque Especial",
  "spa:grammar": "ms",
  spd: "Defensa Especial",
  "spd:grammar": "fs",
  spe: "Velocidad",
  "spe:grammar": "fs",
  accuracy: "Precisi\xF3n",
  "accuracy:grammar": "fs",
  evasion: "Evasi\xF3n",
  "evasion:grammar": "fs",
  spc: "Especial",
  "spc:grammar": "ms",
  // n.b. used in "stats were lowered" battle messages,
  // so it should be lowercase (unlike "Stats" in ui.ts)
  stats: "caracter\xEDsticas",
  "stats:grammar": "fp"
};
const StatMediumNames = {
  hp: "PS",
  atk: "Ataque",
  def: "Defensa",
  spa: "At. Esp.",
  spd: "Def. Esp.",
  spe: "Velocidad",
  accuracy: "Precisi\xF3n",
  evasion: "Evasi\xF3n",
  spc: "Especial"
};
const StatShortNames = {
  hp: "PS",
  atk: "Ata",
  def: "Def",
  spa: "AEs",
  spd: "DEs",
  spe: "Vel",
  spc: "Esp"
};
const TypeNames = {
  Bug: "Bicho",
  Dark: "Siniestro",
  Dragon: "Drag\xF3n",
  Electric: "El\xE9ctrico",
  Fairy: "Hada",
  Fighting: "Lucha",
  Fire: "Fuego",
  Flying: "Volador",
  Ghost: "Fantasma",
  Grass: "Planta",
  Ground: "Tierra",
  Ice: "Hielo",
  Normal: "Normal",
  Poison: "Veneno",
  Psychic: "Ps\xEDquico",
  Rock: "Roca",
  Steel: "Acero",
  Stellar: "Astral",
  Water: "Agua",
  "???": null
  // NEEDS TRANSLATION
};
const NatureNames = {
  Adamant: "Firme",
  Bashful: "T\xEDmida",
  Bold: "Osada",
  Brave: "Audaz",
  Calm: "Serena",
  Careful: "Cauta",
  Docile: "D\xF3cil",
  Gentle: "Amable",
  Hardy: "Fuerte",
  Hasty: "Activa",
  Impish: "Agitada",
  Jolly: "Alegre",
  Lax: "Floja",
  Lonely: "Hura\xF1a",
  Mild: "Afable",
  Modest: "Modesta",
  Naive: "Ingenua",
  Naughty: "P\xEDcara",
  Quiet: "Mansa",
  Quirky: "Rara",
  Rash: "Alocada",
  Relaxed: "Pl\xE1cida",
  Sassy: "Grosera",
  Serious: "Seria",
  Timid: "Miedosa"
};
const GenderNames = {
  M: "Macho",
  F: "Hembra",
  N: "Desconocido"
};
const StatusNames = {
  brn: "Quemado",
  // verified: SV es_common 21613
  par: "Paralizado",
  // verified: SV es_common 21609
  slp: null,
  // NEEDS TRANSLATION
  frz: null,
  // NEEDS TRANSLATION
  psn: "Envenenado",
  // verified: SV es_common 21607
  tox: "Grav. envenenado",
  // verified: SV es_common 21545
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
  Black: "Negro",
  Blue: "Azul",
  Brown: "Marr\xF3n",
  Gray: "Gris",
  Green: "Verde",
  Pink: "Rosa",
  Purple: "Morado",
  Red: "Rojo",
  White: "Blanco",
  Yellow: "Amarillo"
};
//# sourceMappingURL=names.js.map
