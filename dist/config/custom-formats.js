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
    ruleset: ["Cancel Mod", "HP Percentage Mod"]
  },
  {
    name: "[Gen 9] PBO NPC National Dex",
    mod: "pbo",
    ruleset: ["Cancel Mod", "HP Percentage Mod"]
  },
  {
    name: "[Gen 9] PBO PvP Battle",
    mod: "pbo",
    ruleset: ["Team Preview", "Cancel Mod", "HP Percentage Mod"]
  },
  {
    name: "[Gen 9] PBO Wild Battle",
    mod: "pbo",
    ruleset: ["Cancel Mod", "HP Percentage Mod", "No Sturdy Wild"]
  },
  {
    name: "[Gen 9] PBO PvP Battle No Preview",
    mod: "pbo",
    ruleset: ["Cancel Mod", "HP Percentage Mod"]
  }
];
//# sourceMappingURL=custom-formats.js.map
