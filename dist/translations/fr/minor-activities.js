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
  "The announcement has ended.": "L'annonce est termin\xE9e.",
  "Battles do not support announcements.": "Les combats ne permettent pas de faire des annonces.",
  "You are not allowed to use filtered words in announcements.": "Tu n'es pas autoris\xE9 \xE0 utiliser des mots filtr\xE9s dans les annonces.",
  "There is already a poll or announcement in progress in this room.": "Il y a d\xE9j\xE0 un sondage ou une annonce dans cette room.",
  "An announcement was started by {USER}.": "Une annonce a \xE9t\xE9 lanc\xE9e par {USER}.",
  "There is no announcement running in this room.": "Il n'y a actuellement pas d'annonce dans cette room.",
  "There is no timer to clear.": "Il n'y a pas de minuteur \xE0 supprimer.",
  "The announcement timer was turned off.": "Le minuteur de l'annonce a \xE9t\xE9 d\xE9sactiv\xE9.",
  "Invalid time given.": "Temps donn\xE9 invalide.",
  "The announcement timer is off.": "Le minuteur de l'annonce n'est pas actif.",
  "The announcement was ended by {USER}.": "L'annonce a \xE9t\xE9 termin\xE9e par {USER}.",
  "Accepts the following commands:": "Accepte les commandes suivantes :",
  "That option is not selected.": "Cette option n'est pas s\xE9lectionn\xE9e.",
  "You have already voted for this poll.": "Tu as d\xE9j\xE0 vot\xE9 pour ce sondage.",
  "No options selected.": "Pas d'option s\xE9lectionn\xE9e.",
  "you will not be able to vote after viewing results": "Tu ne seras plus capable de voter apr\xE8s avoir vu les r\xE9sultats",
  "View results": "Voir les r\xE9sultats",
  "You can't vote after viewing results": "Tu ne peux pas voter apr\xE8s avoir vu les r\xE9sultats",
  "The poll has ended &ndash; scroll down to see the results": "Le sondage est termin\xE9 &ndash; descends dans le chat pour voir les r\xE9sultats.",
  "Vote for {NUMBER}": "Voter pour {NUMBER}",
  "Submit your vote": "Soumettre ton vote",
  "Quiz": "Quiz",
  "Poll": "Sondage",
  "Submit": "Soumettre",
  "ended": "termin\xE9",
  "votes": "votes",
  "delete": "supprim\xE9",
  "Poll too long.": "Sondage trop long.",
  "Battles do not support polls.": "Les combats ne permettent pas de faire des sondages.",
  "You are not allowed to use filtered words in polls.": "Tu n'es pas autoris\xE9 \xE0 utiliser des mots filtr\xE9s dans les annonces.",
  "Not enough arguments for /poll new.": "Pas assez d'arguments pour /poll new.",
  "Too many options for poll (maximum is 8).": "Il y a trop d'options pour un sondage (le maximum est de 8).",
  "There are duplicate options in the poll.": "Il y a plusieurs options identiques dans le sondage.",
  "{USER} queued a poll.": "{USER} a mis un sondage en attente.",
  "A poll was started by {USER}.": "Un sondage a \xE9t\xE9 lanc\xE9 par {USER}.",
  "The queue is already empty.": "La file d'attente est d\xE9j\xE0 vide.",
  "Cleared poll queue.": "La file d'attente des sondages a \xE9t\xE9 supprim\xE9e.",
  'Room "{ROOMID}" not found.': `La salle "{ROOMID}" n'a pas \xE9t\xE9 trouv\xE9e.`,
  'Can\'t delete poll at slot {SLOT} - "{SLOT2}" is not a number.': `Impossible de supprimer le sondage en position {SLOT} - "{SLOT2}" n'est pas un nombre.`,
  "There is no poll in queue at slot {SLOT}.": "Il n'y a pas de sondage dans la file d'attente en position {SLOT}.",
  "({USER} deleted the queued poll in slot {SLOT}.)": "{USER} a supprim\xE9 le poll en attente en position {SLOT}.",
  "There is no poll running in this room.": "Il n'y a pas de sondage actuellement dans cette room.",
  "To vote, specify the number of the option.": "Pour voter, sp\xE9cifiez le num\xE9ro de l'option.",
  "Option not in poll.": "L'option n'est pas dans le sondage.",
  "The poll timer was turned off.": "Le minuteur du sondage a \xE9t\xE9 d\xE9sactiv\xE9.",
  "The queued poll was started.": "Le sondage en attente a \xE9t\xE9 lanc\xE9.",
  "The poll timer was turned on: the poll will end in {TIME} minute(s).": "Le minuteur du sondage a \xE9t\xE9 activ\xE9 : le sondage va se terminer dans {TIME} minute(s).",
  "The poll timer was set to {TIME} minute(s) by {USER}.": "Le minuteur du sondage a \xE9t\xE9 fix\xE9 \xE0 {TIME} minute(s) par {USER}.",
  "The poll timer is on and will end in {TIME} minute(s).": "Le minuteur du sondage est activ\xE9 et se terminera dans {TIME} minute(s).",
  "The poll timer is off.": "Le minuteur du sondage est d\xE9sactiv\xE9.",
  "The poll was ended by {USER}.": "Le sondage a \xE9t\xE9 termin\xE9 par {USER}.",
  "Queued polls:": "Sondages en attente :",
  "No polls queued.": "Pas de sondages en attente.",
  "#{NUMBER} in queue": "#{NUMBER} dans la file d'attente",
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
