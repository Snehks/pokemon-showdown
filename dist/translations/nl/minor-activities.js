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
  "The announcement has ended.": "De mededeling is voorbij.",
  "Battles do not support announcements.": "Mededelingen worden in gevechten niet ondersteund.",
  "You are not allowed to use filtered words in announcements.": "Je mag geen gefilterde woorden gebruiken in mededelingen.",
  "There is already a poll or announcement in progress in this room.": "Er loopt al een poll of mededeling in deze room.",
  "An announcement was started by {USER}.": "{USER}. heeft een mededeling aangemaakt.",
  "There is no announcement running in this room.": "Er zijn momenteel geen mededelingen in deze room.",
  "There is no timer to clear.": "Er loopt momenteel geen timer om de mededeling verwijderen.",
  "The announcement timer was turned off.": "De mededelingtimer is uitgezet.",
  "Invalid time given.": "Ongeldige tijd opgegeven.",
  "The announcement timer is off.": "De mededelingtimer staat uit.",
  "The announcement was ended by {USER}.": "De mededeling is be\xEBindigd door {USER}.",
  "Accepts the following commands:": "De volgende commando's worden geaccepteerd:",
  "That option is not selected.": "Die optie is niet geselecteerd.",
  "You have already voted for this poll.": "Je hebt al gestemd op deze poll.",
  "No options selected.": "Geen opties geselecteerd.",
  "you will not be able to vote after viewing results": "als je de uitslag hebt gezien kun je niet meer stemmen",
  "View results": "Bekijk de uitslag",
  "You can't vote after viewing results": "Je kunt niet stemmen nadat je de uitslag gezien hebt",
  "The poll has ended &ndash; scroll down to see the results": "De poll is voorbij &ndash; scroll naar beneden om de uitslag te zien",
  "Vote for {NUMBER}": "Stem op optie {NUMBER}",
  "Submit your vote": "Breng je stem uit",
  "Quiz": "Quiz",
  "Poll": "Poll",
  "Submit": "Verzenden",
  "ended": "be\xEBindigd",
  "votes": "stemmen",
  "delete": "verwijder",
  "Poll too long.": "De poll is te lang.",
  "Battles do not support polls.": "Polls worden in gevechten niet ondersteund.",
  "You are not allowed to use filtered words in polls.": "Je mag geen gefilterde woorden gebruiken in polls.",
  "Not enough arguments for /poll new.": "Onvoldoende argumenten (antwoordmogelijkheden) opgegeven voor /poll new.",
  "Too many options for poll (maximum is 8).": "Te veel antwoordmogelijkheden voor een poll (de limiet is 8).",
  "There are duplicate options in the poll.": "De poll bevat twee of meer identieke opties.",
  "{USER} queued a poll.": "{USER} heeft een poll in de wachtrij gezet.",
  "A poll was started by {USER}.": "{USER} heeft een poll aangemaakt.",
  "The queue is already empty.": "De wachtrij is al leeg.",
  "Cleared poll queue.": "Wachtrij leeggemaakt.",
  'Room "{ROOMID}" not found.': 'Room "{ROOMID}" is niet gevonden.',
  'Can\'t delete poll at slot {SLOT} - "{SLOT2}" is not a number.': 'Kan poll op plek {SLOT} niet verwijderen - "{SLOT2}" is geen geldig getal.',
  "There is no poll in queue at slot {SLOT}.": "Er staat geen poll op plek {SLOT} van de wachtrij.",
  "({USER} deleted the queued poll in slot {SLOT}.)": "({USER} heeft de poll op plek {SLOT} van de wachtrij verwijderd.)",
  "There is no poll running in this room.": "Er loopt momenteel geen poll in deze room.",
  "To vote, specify the number of the option.": "Specificeer het nummer van de optie om te stemmen.",
  "Option not in poll.": "Deze optie staat niet in de poll.",
  "The poll timer was turned off.": "De polltimer is uitgezet.",
  "The queued poll was started.": "De poll uit de wachtrij is gestart.",
  "The poll timer was turned on: the poll will end in {TIME} minute(s).": "De polltimer is aangezet: de poll zal over {TIME} minuten eindigen.",
  "The poll timer was set to {TIME} minute(s) by {USER}.": "{USER} heeft de polltimer op {TIME} minuten gezet.",
  "The poll timer is on and will end in {TIME} minute(s).": "De polltimer staat aan en de poll zal over {TIME} minuten eindigen.",
  "The poll timer is off.": "De polltimer staat uit.",
  "The poll was ended by {USER}.": "{USER} heeft de poll be\xEBindigd.",
  "Queued polls:": "Polls in de wachtrij:",
  "No polls queued.": "Geen polls in de wachtrij.",
  "#{NUMBER} in queue": "Plaats {NUMBER} in de wachtrij.",
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
