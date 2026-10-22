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
  "Repeated phrases in {ROOM}": "Frasi ripetute in {ROOM}",
  "There are no repeated phrases in {ROOM}.": "Non ci sono frasi ripetute in {ROOM}.",
  "Phrase": "Frase",
  "Identifier": "Identificatore",
  "Interval": "Intervallo",
  "every {MINUTES} minute(s)": "ogni {MINUTES} minuto(i)",
  "every {MESSAGES} chat message(s)": "ogni {MESSAGES} messaggio(i)",
  "Raw text": "Testo",
  "Remove": "Rimuovi",
  "Remove all repeats": "Rimuovi tutti i repeat",
  "Repeat names must include at least one alphanumeric character.": "I nomi dei repeat devono contenere almeno un carattere alfanumerico.",
  "You must specify an interval as a number of minutes or chat messages between 1 and 1440.": "Devi specificare un intervallo di minuti o messaggi compreso tra 1 e 1440.",
  'The phrase labeled with "{ID}" is already being repeated in this room.': 'La frase identificata con "{ID}" viene gi\xE0 ripetuta in questa room.',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} minute(s).': '{USER} ha impostato la frase identificata con "{ID}" da ripetere ogni {INTERVAL} minuto(i).',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} chat message(s).': '{USER} ha impostato la frase identificata con "{ID}" da ripetere ogni {INTERVAL} messaggio(i).',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} minute(s).': '{USER} ha impostato il Room FAQ "{TOPIC}" da ripetere ogni {INTERVAL} minuto(i).',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} chat message(s).': '{USER} ha impostato il Room FAQ "{TOPIC}" da ripetere ogni {INTERVAL} messaggio(i).',
  'The phrase labeled with "{ID}" is not being repeated in this room.': 'La frase identificata con "{ID}" non viene ripetuta in questa room.',
  'The text for the Room FAQ "{TOPIC}" is already being repeated.': 'Il testo del Room FAQ "{TOPIC}" viene gi\xE0 ripetuto.',
  '{USER} removed the repeated phrase labeled with "{ID}".': '{USER} ha rimosso la frase ripetuta identificata con "{ID}".',
  "There are no repeated phrases in this room.": "Non ci sono frasi ripetute in questa room.",
  "{USER} removed all repeated phrases.": "{USER} ha rimosso tutte le frasi ripetute.",
  "You must specify a room when using this command in PMs.": "Devi specificare una room quando usi questo comando in PM."
};
//# sourceMappingURL=repeats.js.map
