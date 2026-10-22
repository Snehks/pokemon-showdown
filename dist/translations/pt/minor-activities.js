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
var minor_activities_exports = {};
__export(minor_activities_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(minor_activities_exports);
const translations = {
  "The announcement has ended.": "O an\xFAncio terminou.",
  "Battles do not support announcements.": "An\xFAncios n\xE3o funcionam em batalhas.",
  "You are not allowed to use filtered words in announcements.": "N\xE3o \xE9 permitido usar palavras filtradas em an\xFAncios.",
  "There is already a poll or announcement in progress in this room.": "J\xE1 existe uma enquete ou an\xFAncio em progresso nesta sala.",
  "An announcement was started by {USER}.": "Um an\xFAncio foi iniciado por {USER}.",
  "There is no announcement running in this room.": "N\xE3o existe um an\xFAncio ativo nesta sala.",
  "There is no timer to clear.": "N\xE3o existe nenhum temporizador para ser removido.",
  "The announcement timer was turned off.": "O temporizador do an\xFAncio foi desligado.",
  "Invalid time given.": "Tempo especificado inv\xE1lido.",
  "The announcement timer is off.": "O temporizador do an\xFAncio est\xE1 desligado.",
  "The announcement was ended by {USER}.": "O an\xFAncio foi encerrado por {USER}.",
  "Accepts the following commands:": "Aceita os seguintes comandos:",
  "That option is not selected.": "Esta op\xE7\xE3o n\xE3o est\xE1 selecionada.",
  "You have already voted for this poll.": "Voc\xEA j\xE1 votou nesta enquete.",
  "No options selected.": "Nenhuma op\xE7\xE3o selecionada.",
  "you will not be able to vote after viewing results": "voc\xEA n\xE3o poder\xE1 votar ap\xF3s ver os resultados",
  "View results": "Ver resultados",
  "You can't vote after viewing results": "Voc\xEA n\xE3o pode votar ap\xF3s ver os resultados",
  "The poll has ended &ndash; scroll down to see the results": "A enquete foi encerrada &ndash; role para baixo para ver os resultados",
  "Vote for {NUMBER}": "Voto para {NUMBER}",
  "Submit your vote": "Envie seu voto",
  "Quiz": "Quiz",
  "Poll": "Enquete",
  "Submit": "Enviar",
  "ended": "terminou",
  "votes": "votos",
  "delete": "deletar",
  "Poll too long.": "Enquete longa demais.",
  "Battles do not support polls.": "Enquetes n\xE3o funcionam em batalhas.",
  "You are not allowed to use filtered words in polls.": "N\xE3o \xE9 permitido usar palavras filtradas em enquetes.",
  "Not enough arguments for /poll new.": "Argumentos insuficientes para /poll new.",
  "Too many options for poll (maximum is 8).": "Op\xE7\xF5es demais para uma enquete (o m\xE1ximo \xE9 8).",
  "There are duplicate options in the poll.": "Existem op\xE7\xF5es duplicadas na enquete.",
  "{USER} queued a poll.": "{USER} colocou uma enquete na fila.",
  "A poll was started by {USER}.": "Uma enquete foi iniciada por {USER}.",
  "The queue is already empty.": "A fila j\xE1 est\xE1 vazia.",
  "Cleared poll queue.": "A fila de enquetes foi limpa.",
  'Room "{ROOMID}" not found.': 'Sala "{ROOMID}" n\xE3o encontrada.',
  'Can\'t delete poll at slot {SLOT} - "{SLOT2}" is not a number.': 'N\xE3o \xE9 poss\xEDvel deletar a enquete na posi\xE7\xE3o {SLOT} - "{SLOT2}" n\xE3o \xE9 um n\xFAmero',
  "There is no poll in queue at slot {SLOT}.": "N\xE3o existe uma enquete na posi\xE7\xE3o {SLOT} da fila.",
  "({USER} deleted the queued poll in slot {SLOT}.)": "({USER} deletou a enquete na posi\xE7\xE3o {SLOT} da fila).",
  "There is no poll running in this room.": "N\xE3o existe uma enquete ativa nesta sala.",
  "To vote, specify the number of the option.": "Para votar, especifique o n\xFAmero da op\xE7\xE3o.",
  "Option not in poll.": "A op\xE7\xE3o n\xE3o est\xE1 na enquete.",
  "The poll timer was turned off.": "O temporizador da enquete foi desligado.",
  "The queued poll was started.": "A enquete que estava na fila foi iniciada.",
  "The poll timer was turned on: the poll will end in {TIME} minute(s).": "O temporizador da enquete foi ligado: a enquete encerrar\xE1 em {TIME} minuto(s).",
  "The poll timer was set to {TIME} minute(s) by {USER}.": "O temporizador da enquete foi configurado para {TIME} minuto(s) por {USER}.",
  "The poll timer is on and will end in {TIME} minute(s).": "O temporizador da enquete est\xE1 ligado e encerrar\xE1 em {TIME} minuto(s).",
  "The poll timer is off.": "O temporizador da enquete est\xE1 desligado.",
  "The poll was ended by {USER}.": "A enquete foi encerrada por {USER}.",
  "Queued polls:": "Enquetes na fila:",
  "No polls queued.": "Nenhuma enquete na fila.",
  "#{NUMBER} in queue": "#{NUMBER} na fila",
  "Time should be a number of minutes less than one week.": null,
  // NEEDS TRANSLATION
  "Extra escape character. To end a poll with '\\', enter it as '\\\\'": null,
  // NEEDS TRANSLATION
  "Too many options for poll (maximum is {MAX}).": null,
  // NEEDS TRANSLATION
  "The poll timer was turned on: the poll will end in {TIME}.": null,
  // NEEDS TRANSLATION
  "The poll timer is on and will end in {TIME}.": null,
  // NEEDS TRANSLATION
  "The announcement was edited by {USER}.": null,
  // NEEDS TRANSLATION
  "That option is already selected.": null
  // NEEDS TRANSLATION
};
//# sourceMappingURL=minor-activities.js.map
