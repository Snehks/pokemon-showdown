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
var items_exports = {};
__export(items_exports, {
  Items: () => Items
});
module.exports = __toCommonJS(items_exports);
const Items = {
  metronome: {
    inherit: true,
    condition: {
      onStart(pokemon) {
        this.effectState.lastMove = "";
        this.effectState.numConsecutive = 0;
        this.effectState.lastMoveSucceeded = false;
      },
      onTryMovePriority: -2,
      onTryMove(pokemon, target, move) {
        if (!pokemon.hasItem("metronome")) {
          pokemon.removeVolatile("metronome");
          return;
        }
        if (move.callsMove) return;
        if (this.effectState.lastMove === move.id && this.effectState.lastMoveSucceeded) {
          this.effectState.numConsecutive++;
        } else if (pokemon.volatiles["twoturnmove"]) {
          if (this.effectState.lastMove !== move.id) {
            this.effectState.numConsecutive = 1;
          } else {
            this.effectState.numConsecutive++;
          }
        } else {
          this.effectState.numConsecutive = 0;
        }
        this.effectState.lastMove = move.id;
      },
      onResidualOrder: 26,
      onResidual(pokemon) {
        if (pokemon.moveThisTurnResult !== void 0) {
          this.effectState.lastMoveSucceeded = pokemon.moveThisTurnResult === true;
        }
      },
      onModifyDamage(damage, source, target, move) {
        const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
        const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
        this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
        return this.chainModify([dmgMod[numConsecutive], 4096]);
      }
    }
  }
};
//# sourceMappingURL=items.js.map
