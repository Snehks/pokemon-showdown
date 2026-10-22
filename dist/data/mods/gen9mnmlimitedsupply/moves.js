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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  terablast: {
    inherit: true,
    onModifyType(move, pokemon, target) {
      if (pokemon.terastallized) {
        move.type = pokemon.teraType;
      } else {
        switch (pokemon.item) {
          case "dousedrive":
            move.type = "Water";
            break;
          case "burndrive":
            move.type = "Fire";
            break;
          case "shockdrive":
            move.type = "Electric";
            break;
          case "chilldrive":
            move.type = "Ice";
            break;
        }
      }
    }
  }
};
//# sourceMappingURL=moves.js.map
