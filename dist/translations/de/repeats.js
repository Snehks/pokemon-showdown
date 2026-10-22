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
  "Repeated phrases in {ROOM}": "Wiederholte Ausdr\xFCcke in {ROOM}",
  "There are no repeated phrases in {ROOM}.": "Es liegen keine wiederholten Ausdr\xFCcke in {ROOM} vor.",
  "Phrase": "Ausdruck",
  "Identifier": "Kennzeichnung",
  "Interval": "Zeitspanne",
  "every {MINUTES} minute(s)": "jede {MINUTES} Minute(n)",
  "every {MESSAGES} chat message(s)": "Alle {MESSAGES} Chat-Nachrichten",
  "Raw text": "Rohtext",
  "Remove": "Entfernen",
  "Remove all repeats": "Entferne alle Wiederholungen",
  "Repeat names must include at least one alphanumeric character.": "Namen von zu wiederholenden Ausdr\xFCcken m\xFCssen zumindest ein alphanumerisches Zeichen beinhalten.",
  "You must specify an interval as a number of minutes or chat messages between 1 and 1440.": "Du musst eine Zeitspanne (oder Chat-Nachrichten) als eine Zahl zwischen 1 und 1440 angeben.",
  'The phrase labeled with "{ID}" is already being repeated in this room.': 'Der Ausdruck "{ID}" wird bereits im Raum wiederholt.',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} minute(s).': '{USER} hat eingestellt, dass der Ausdruck "{ID}" jede {INTERVAL} Minute(n) wiederholt wird.',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} chat message(s).': '{USER} hat eingestellt, dass der Ausdruck "{ID}" jede {INTERVAL} Chat-Nachrichte(n) wiederholt wird.',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} minute(s).': '{USER} hat eingestellt, dass der Raum-FAQ "{TOPIC}" jede {INTERVAL} Minute(n) wiederholt wird.',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} chat message(s).': '{USER} hat eingestellt, dass der Raum-FAQ "{TOPIC}" jede {INTERVAL} Chat-Nachrichte(n) wiederholt wird.',
  'The phrase labeled with "{ID}" is not being repeated in this room.': 'Der Ausdruck "{ID}" wird gerade nicht in diesem Raum wiederholt.',
  'The text for the Room FAQ "{TOPIC}" is already being repeated.': 'Der Text f\xFCr den Raum-FAQ "{TOPIC}" wird bereits wiederholt.',
  '{USER} removed the repeated phrase labeled with "{ID}".': '{USER} hat den sich wiederholenden Ausdruck "{ID}" entfernt.',
  "There are no repeated phrases in this room.": "Es gibt keine wiederholten Ausdr\xFCcke in diesem Raum.",
  "{USER} removed all repeated phrases.": "{USER} hat alle wiederholten Ausdr\xFCcke entfernt.",
  "You must specify a room when using this command in PMs.": "Du musst einen Raum angeben, falls du diesen Befehl in einer privaten Nachricht verwendest."
};
//# sourceMappingURL=repeats.js.map
