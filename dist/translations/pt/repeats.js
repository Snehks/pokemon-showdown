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
  "Repeated phrases in {ROOM}": "Frases repetidas em {ROOM}",
  "There are no repeated phrases in {ROOM}.": "N\xE3o h\xE1 frases repetidas em {ROOM}.",
  "Phrase": "Frase",
  "Identifier": "Identificador",
  "Interval": "Intervalo",
  "every {MINUTES} minute(s)": "a cada {MINUTES} minuto(s)",
  "every {MESSAGES} chat message(s)": "a cada {MESSAGES} mensagen(s) no chat",
  "Raw text": "Texto Puro",
  "Remove": "Remover",
  "Remove all repeats": "Remover todos os repeats",
  "Repeat names must include at least one alphanumeric character.": "Repeats devem incluir pelo menos um caractere alfanum\xE9rico.",
  "You must specify an interval as a number of minutes or chat messages between 1 and 1440.": "Voc\xEA deve especificar um intervalo como um n\xFAmero de minutos ou mensagens no chat entre 1 e 1440.",
  'The phrase labeled with "{ID}" is already being repeated in this room.': 'A frase nomeada como "{ID}" j\xE1 est\xE1 sendo repetida nesta sala.',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} minute(s).': '{USER} a frase nomeada como "{ID}" foi colocada para ser repetida a cada {INTERVAL} minuto(s).',
  '{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} chat message(s).': '{USER} a frase nomeada como "{ID}" foi colocada para ser repetida a cada {INTERVAL} mensagen(s) no chat.',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} minute(s).': '{USER} o Room FAQ "{TOPIC}" foi colocado para ser repetido a cada {INTERVAL} minuto(s).',
  '{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} chat message(s).': '{USER} o Room FAQ "{TOPIC}" foi colocado para ser repetido a cada {INTERVAL} mensagen(s) no chat.',
  'The phrase labeled with "{ID}" is not being repeated in this room.': 'A frase nomeada como "{ID}" n\xE3o est\xE1 sendo repetida nesta sala.',
  'The text for the Room FAQ "{TOPIC}" is already being repeated.': 'O texto para o Room FAQ "{TOPIC}" j\xE1 est\xE1 sendo repetido.',
  '{USER} removed the repeated phrase labeled with "{ID}".': '{USER} removeu a frase repetida nomeada como "{ID}".',
  "There are no repeated phrases in this room.": "N\xE3o h\xE1 frases repetidas nesta sala.",
  "{USER} removed all repeated phrases.": "{USER} removeu todas as frases repetidas.",
  "You must specify a room when using this command in PMs.": "Voc\xEA deve especificar uma sala quando estiver usando este comando em PMs."
};
//# sourceMappingURL=repeats.js.map
