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
  "Repeated phrases in {ROOM}": "{ROOM}\u3067\u30EA\u30D4\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30E1\u30C3\u30BB\u30FC\u30B8",
  "There are no repeated phrases in {ROOM}.": "\u73FE\u5728 {ROOM}\u3067\u30EA\u30D4\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "Phrase": "\u30E1\u30C3\u30BB\u30FC\u30B8",
  "Identifier": "\u30BF\u30A4\u30C8\u30EB",
  "Interval": "\u9593\u9694",
  "every {MINUTES} minute(s)": "{MINUTES}\u5206\u304A\u304D",
  "every {MESSAGES} chat message(s)": "\u30E1\u30C3\u30BB\u30FC\u30B8\u6570: {MESSAGES}\u304A\u304D",
  "Raw text": "\u30B3\u30FC\u30C9",
  "Remove": "\u524A\u9664",
  "Remove all repeats": "\u5168\u3066\u306E\u30EA\u30D4\u30FC\u30C8\u3092\u524A\u9664\u3059\u308B",
  "Repeat names must include at least one alphanumeric character.": "ID\u306B\u306F\u5C11\u306A\u304F\u3068\u30821\u6587\u5B57\u4EE5\u4E0A\u306E\u534A\u89D2\u82F1\u6570\u5B57\u304C\u5FC5\u8981\u3067\u3059\u3002",
  "You must specify an interval as a number of minutes or chat messages between 1 and 1440.": "\u30EA\u30D4\u30FC\u30C8\u9593\u9694\u306F1440\u5206\u4EE5\u5185\u306E\u6570\u5B57\u3067\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
  'The phrase labeled with "{ID}" is already being repeated in this room.': '\u3053\u306E\u90E8\u5C4B\u3067\u306F\u3059\u3067\u306B\u30BF\u30A4\u30C8\u30EB\u304C "{ID}"\u306E\u30EA\u30D4\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u3059\u3002',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} minute(s).': '{USER}\u304C "{ID}"\u3067\u30EA\u30D4\u30FC\u30C8\u3092{INTERVAL}\u5206\u9593\u9694\u3067\u8A2D\u5B9A\u3057\u307E\u3057\u305F\u3002',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} chat message(s).': '{USER}\u304C "{ID}"\u3067\u30EA\u30D4\u30FC\u30C8\u3092\u30E1\u30C3\u30BB\u30FC\u30B8\u6570: {INTERVAL}\u306E\u9593\u9694\u3067\u8A2D\u5B9A\u3057\u307E\u3057\u305F\u3002',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} minute(s).': '{USER}\u304CRoom FAQ\u306E "{TOPIC}"\u306E\u30EA\u30D4\u30FC\u30C8\u3092{INTERVAL}\u5206\u9593\u9694\u3067\u8A2D\u5B9A\u3057\u307E\u3057\u305F\u3002',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} chat message(s).': '{USER}\u304CRoom FAQ\u306E "{TOPIC}"\u306E\u30EA\u30D4\u30FC\u30C8\u3092\u30E1\u30C3\u30BB\u30FC\u30B8\u6570: {INTERVAL}\u9593\u9694\u3067\u8A2D\u5B9A\u3057\u307E\u3057\u305F\u3002',
  'The phrase labeled with "{ID}" is not being repeated in this room.': '\u30BF\u30A4\u30C8\u30EB\u304C "{ID}"\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u73FE\u5728\u3053\u306E\u90E8\u5C4B\u3067\u30EA\u30D4\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002',
  'The text for the Room FAQ "{TOPIC}" is already being repeated.': 'Room FAQ\u306E "{TOPIC}"\u306F\u3059\u3067\u306B\u30EA\u30D4\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002',
  '{USER} removed the repeated phrase labeled with "{ID}".': '{USER}\u304CID: "{ID}"\u306E\u30EA\u30D4\u30FC\u30C8\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002',
  "There are no repeated phrases in this room.": "\u73FE\u5728\u3053\u306E\u90E8\u5C4B\u3067\u30EA\u30D4\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
  "{USER} removed all repeated phrases.": "{USER}\u304C\u5168\u3066\u306E\u30EA\u30D4\u30FC\u30C8\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002",
  "You must specify a room when using this command in PMs.": "\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092PM\u3067\u4F7F\u3046\u5834\u5408\u306F\u90E8\u5C4B\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"
};
//# sourceMappingURL=repeats.js.map
