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
var repeats_exports = {};
__export(repeats_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(repeats_exports);
const translations = {
  "Repeated phrases in {ROOM}": null,
  "There are no repeated phrases in {ROOM}.": null,
  "Phrase": null,
  "Identifier": null,
  "Interval": null,
  "every {MINUTES} minute(s)": null,
  "every {MESSAGES} chat message(s)": null,
  "Raw text": null,
  "Remove": null,
  "Remove all repeats": null,
  "Repeat names must include at least one alphanumeric character.": null,
  "You must specify an interval as a number of minutes or chat messages between 1 and 1440.": null,
  'The phrase labeled with "{ID}" is already being repeated in this room.': null,
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} minute(s).': null,
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} chat message(s).': null,
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} minute(s).': null,
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} chat message(s).': null,
  'The phrase labeled with "{ID}" is not being repeated in this room.': null,
  'The text for the Room FAQ "{TOPIC}" is already being repeated.': null,
  '{USER} removed the repeated phrase labeled with "{ID}".': null,
  "There are no repeated phrases in this room.": null,
  "{USER} removed all repeated phrases.": null,
  "You must specify a room when using this command in PMs.": null
};
//# sourceMappingURL=repeats.js.map
