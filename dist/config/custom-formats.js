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
var custom_formats_exports = {};
__export(custom_formats_exports, {
  Formats: () => Formats
});
module.exports = __toCommonJS(custom_formats_exports);
const Formats = [
  { section: "PBO" },
  {
    name: "[Gen 9] PBO Standard Battle",
    mod: "pbo",
    ruleset: ["Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO NPC National Dex",
    mod: "pbo",
    ruleset: ["Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Terastal Clause", "Z-Move Clause", "Dynamax Clause", "Truant Transfer Clause"]
  },
  {
    name: "[Gen 9] PBO NPC Doubles Battle",
    mod: "pbo",
    gameType: "doubles",
    ruleset: ["Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Terastal Clause", "Z-Move Clause", "Dynamax Clause", "Truant Transfer Clause"]
  },
  {
    name: "[Gen 9] PBO Coop NPC 2v1",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [2, 1],
    ruleset: ["Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Terastal Clause", "Z-Move Clause", "Dynamax Clause", "Truant Transfer Clause"]
  },
  {
    name: "[Gen 9] PBO PvP Battle",
    mod: "pbo",
    ruleset: ["Team Preview", "Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Wild Battle",
    mod: "pbo",
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Wild Horde 1v2",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [1, 2],
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Wild Horde 1v3",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [1, 3],
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Wild Horde 1v4",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [1, 4],
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Wild Horde 1v5",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [1, 5],
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Coop Wild 2v1",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [2, 1],
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Coop Wild 2v3",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [2, 3],
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Coop Wild 2v4",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [2, 4],
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Coop Wild 2v5",
    mod: "pbo",
    gameType: "horde",
    activeSlotsPerSide: [2, 5],
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO PvP Battle No Preview",
    mod: "pbo",
    ruleset: ["Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO PvP Doubles Battle",
    mod: "pbo",
    gameType: "doubles",
    ruleset: ["Team Preview", "Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO PvP Doubles No Preview",
    mod: "pbo",
    gameType: "doubles",
    ruleset: ["Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Wild Doubles Battle",
    mod: "pbo",
    gameType: "doubles",
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Wild Triples Battle",
    mod: "pbo",
    gameType: "triples",
    ruleset: ["Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "No Sturdy Wild", "Terastal Clause", "Z-Move Clause", "Dynamax Clause"]
  },
  // [PBO] Random battles allow Terastallization — the Showdown random team generator
  // assigns a competitive teraType per set (e.g. Landorus-T Tera Flying). Dropping
  // Terastal Clause from these formats lets that value reach the client.
  // Z-Move and Dynamax clauses stay active; gen 9 random sets don't configure them.
  {
    name: "[Gen 9] PBO Random Singles Battle",
    mod: "pbo",
    ruleset: ["Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Z-Move Clause", "Dynamax Clause"]
  },
  {
    name: "[Gen 9] PBO Random Doubles Battle",
    mod: "pbo",
    gameType: "doubles",
    ruleset: ["Sleep Clause Mod", "Cancel Mod", "HP Percentage Mod", "Overflow Stat Mod", "Z-Move Clause", "Dynamax Clause"]
  }
];
//# sourceMappingURL=custom-formats.js.map
