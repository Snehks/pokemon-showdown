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
  "The announcement has ended.": "Die Ank\xFCndigung wurde beendet.",
  "Battles do not support announcements.": "K\xE4mpfe unterst\xFCtzen keine Ank\xFCndigungen.",
  "You are not allowed to use filtered words in announcements.": "Du darfst keine gefilterten Worte in Ank\xFCndigungen verwenden.",
  "There is already a poll or announcement in progress in this room.": "Es gibt bereits eine Umfrage oder Ank\xFCndigung in diesem Raum.",
  "An announcement was started by {USER}.": "Eine Ank\xFCndigung wurde von {USER} gestartet.",
  "There is no announcement running in this room.": "Derzeit gibt es keine Ank\xFCndigung in diesem Raum.",
  "There is no timer to clear.": "Es gibt keinen Timer zum Ausschalten.",
  "The announcement timer was turned off.": "Der Ank\xFCndigungs-Timer wurde ausgeschaltet.",
  "Invalid time given.": "Ung\xFCltige Zeitangabe.",
  "The announcement timer is off.": "Der Ank\xFCndigungs-Timer ist ausgeschaltet.",
  "The announcement was ended by {USER}.": "Die Ank\xFCndigung wurde von {USER} beendet.",
  "Accepts the following commands:": "Folgende Befehle werden akzeptiert:",
  "That option is not selected.": "Diese Wahloption ist nicht ausgew\xE4hlt.",
  "You have already voted for this poll.": "Du hast bereits f\xFCr diese Umfrage abgestimmt.",
  "No options selected.": "Keine Wahloption wurde ausgew\xE4hlt.",
  "you will not be able to vote after viewing results": "du wirst nicht mehr abstimmen k\xF6nnen, nachdem du die Ergebnisse eingesehen hast",
  "View results": "Ergebnisse einsehen",
  "You can't vote after viewing results": "Du kannst nicht mehr abstimmen, nachdem du die Ergebnisse eingesehen hast",
  "The poll has ended &ndash; scroll down to see the results": "Die Umfrage wurde beendet &ndash; scrolle nach unten, um die Ergebnisse einzusehen",
  "Vote for {NUMBER}": "Stimme ab f\xFCr {NUMBER}",
  "Submit your vote": "Reiche deine Stimme ein",
  "Quiz": "Quiz",
  "Poll": "Umfrage",
  "Submit": "Einreichen",
  "ended": "beendet",
  "votes": "Stimmen",
  "delete": "l\xF6schen",
  "Poll too long.": "Die Umfrage ist zu lang.",
  "Battles do not support polls.": "K\xE4mpfe unterst\xFCtzen keine Umfragen.",
  "You are not allowed to use filtered words in polls.": "Du darfst keine gefilterten Worte in Umfragen verwenden.",
  "Not enough arguments for /poll new.": "Die Argumente f\xFCr /poll new sind nicht hinreichend.",
  "Too many options for poll (maximum is 8).": "Es liegen zu viele Wahloptionen in der Umfrage (maximal 8) vor.",
  "There are duplicate options in the poll.": "Es liegen doppelte Wahloptionen in der Umfrage vor.",
  "{USER} queued a poll.": "{USER} hat eine Umfrage in die Warteschleife gestellt.",
  "A poll was started by {USER}.": "Eine Umfrage wurde von {USER} gestartet.",
  "The queue is already empty.": "Die Warteschleife ist bereits leer.",
  "Cleared poll queue.": "Die Umfrage-Warteschleife wurde gel\xF6scht.",
  'Room "{ROOMID}" not found.': 'Room "{ROOMID}" wurde nicht gefunden.',
  'Can\'t delete poll at slot {SLOT} - "{SLOT2}" is not a number.': 'Die Umfrage kann nicht gel\xF6scht werden an der Stelle {SLOT} - "{SLOT2}" ist keine Nummer.',
  "There is no poll in queue at slot {SLOT}.": "An der Stelle {SLOT} gibt es keine Umfrage in der Warteschleife.",
  "({USER} deleted the queued poll in slot {SLOT}.)": "({USER} hat die Umfrage in der Warteschleife an der Stelle {SLOT}.) gel\xF6scht.",
  "There is no poll running in this room.": "Derzeit gibt es keine Umfrage in diesem Raum.",
  "To vote, specify the number of the option.": "Um abzustimmen, musst du dich f\xFCr eine Wahloption entscheiden.",
  "Option not in poll.": "Die Wahloption ist nicht in der Umfrage.",
  "The poll timer was turned off.": "Der Umfrage-Timer wurde ausgeschaltet.",
  "The queued poll was started.": "Die Umfrage in der Warteschleife wurde gestartet.",
  "The poll timer was turned on: the poll will end in {TIME} minute(s).": "Der Umfrage-Timer wurde eingeschaltet: Die Umfrage wird in {TIME} Minute(n) beendet.",
  "The poll timer was set to {TIME} minute(s) by {USER}.": "Der Umfrage-Timer wurde von {USER} auf {TIME} Minute(n) gestellt.",
  "The poll timer is on and will end in {TIME} minute(s).": "Der Umfrage-Timer ist eingeschaltet und wird in {TIME} Minute(n) enden.",
  "The poll timer is off.": "Der Umfrage-Timer ist ausgeschaltet.",
  "The poll was ended by {USER}.": "Die Umfrage wurde von {USER} beendet.",
  "Queued polls:": "Umfragen in der Warteschleife:",
  "No polls queued.": "Keine Umfragen befinden sich in der Warteschleife.",
  "#{NUMBER} in queue": "#{NUMBER} in der Warteschleife.",
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
