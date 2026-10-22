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
  "Repeated phrases in {ROOM}": "Frases repetidas en {ROOM}",
  "There are no repeated phrases in {ROOM}.": "No hay frases repetidas en {ROOM}.",
  "Phrase": "Frase",
  "Identifier": "Identificador",
  "Interval": "Intervalo",
  "every {MINUTES} minute(s)": "cada {MINUTES} minuto(s)",
  "every {MESSAGES} chat message(s)": "cada {MESSAGES} mensaje(s) en el chat",
  "Raw text": "Texto sin formato",
  "Remove": "Eliminar",
  "Remove all repeats": "Eliminar todas las repeticiones",
  "Repeat names must include at least one alphanumeric character.": "Los nombres de repeats deben incluir al menos un car\xE1cter alfanum\xE9rico.",
  "You must specify an interval as a number of minutes or chat messages between 1 and 1440.": "Debes especificar un intervalo como un n\xFAmero de minutos o mensajes en el chat entre 1 y 1440.",
  'The phrase labeled with "{ID}" is already being repeated in this room.': 'La frase registrada como "{ID}" ya est\xE1 siendo repetida en esta sala.',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} minute(s).': '{USER} estableci\xF3 la frase como "{ID}" para ser repetida cada {INTERVAL} minuto(s).',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} chat message(s).': '{USER} estableci\xF3 la frase como "{ID}" para ser repetida cada {INTERVAL} mensaje(s) en el chat.',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} minute(s).': '{USER} estableci\xF3 el Room FAQ "{TOPIC}" para ser repetido cada {INTERVAL} minuto(s).',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} chat message(s).': '{USER} estableci\xF3 el Room FAQ "{TOPIC}" para ser repetido cada {INTERVAL} mensaje(s) en el chat.',
  'The phrase labeled with "{ID}" is not being repeated in this room.': 'La frase registrada como "{ID}" no est\xE1 siendo repetida en esta sala.',
  'The text for the Room FAQ "{TOPIC}" is already being repeated.': 'El texto para el Room FAQ "{TOPIC}" ya est\xE1 siendo repetido.',
  '{USER} removed the repeated phrase labeled with "{ID}".': '{USER} elimin\xF3 la frase que estaba siendo repetida marcada como "{ID}".',
  "There are no repeated phrases in this room.": "No hay frases repetidas en esta sala.",
  "{USER} removed all repeated phrases.": "{USER} elimin\xF3 todas las frases repetidas.",
  "You must specify a room when using this command in PMs.": "Debes especificar una sala cuando usas este comando en mensajes privados."
};
//# sourceMappingURL=repeats.js.map
