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
var core_commands_exports = {};
__export(core_commands_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(core_commands_exports);
const translations = {
  "Server version: <b>{VERSION}</b>": "Server-Version: <b>{VERSION}</b>",
  "/mee - must not start with a letter or number": "/mee - darf nicht mit einem Buchstaben oder einer Zahl anfangen",
  "What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "Wie bitte?! Wie kannst du dich nicht \xFCber einen Kampf freuen?! Sobald du bereit bist, benutze den Befehl /battle!",
  "Access denied for custom avatar - make sure you're on the right account?": "Zugriff auf einen Custom Avatar verweigert - bitte stelle sicher, dass du den richtigen Account verwendest.",
  "Invalid avatar.": "Ung\xFCltiger Avatar.",
  "Avatar changed to:": "Avatar ge\xE4ndert zu:",
  "Artist: ": "Ersteller: ",
  "No one has PMed you yet.": "Niemand hat dir bisher eine private Nachricht geschrieben.",
  "You forgot the comma.": "Du hast das Komma vergessen.",
  "User {TARGETUSER} not found. Did you misspell their name?": "Der Nutzer {TARGETUSER} wurde nicht gefunden. Hast du den Namen falsch geschrieben?",
  "User {TARGETUSER} is offline.": "Der Nutzer {TARGETUSER} ist offline.",
  'The user "{TARGETUSER}" was not found.': 'Der Nutzer "{TARGETUSER}" wurde nicht gefunden.',
  'The room "{TARGET}" was not found.': 'Der Raum "{TARGET}" wurde nicht gefunden.',
  "You do not have permission to invite people into this room.": "Du hast keine Berechtigung, Nutzer in diesen Raum einzuladen.",
  'This user is already in "{ROOM}".': 'Dieser Nutzer ist bereits in "{ROOM}".',
  "Setting status messages in /busy is no longer supported. Set a status using /status.": "Es ist nicht mehr m\xF6glich, eine Statusmeldung mit /busy einzustellen. Stelle eine Statusmeldung mit /status ein.",
  "Setting status messages in /away is no longer supported. Set a status using /status.": "Es ist nicht mehr m\xF6glich, eine Statusmeldung mit /away einzustellen. Stelle eine Statusmeldung mit /status ein.",
  "{TARGETUSER} does not have a status set.": "{TARGETUSER} hat keine Statusmeldung eingestellt.",
  '{TARGETUSER}\'s status "{STATUS}" was cleared by {USER}{REASON}': 'Die Statusmeldung "{STATUS}" von {TARGETUSER} wurde von {USER}{REASON} entfernt',
  "You don't have a status message set.": "Du hast keine Statusmeldung eingestellt.",
  "You have cleared your status message.": "Du hast deine Statusmeldung entfernt.",
  "This user has not played any ladder games yet.": "Dieser Nutzer hat noch keine Ladder-K\xE4mpfe bestritten.",
  // TRANSLATORS: initial for Wins
  "W": "S",
  // TRANSLATORS: initial for Losses
  "L": "N",
  "You already have the temporary symbol '{GROUP}'.": "Du hast bereits das vor\xFCbergehende Symbol '{GROUP}'.",
  "You must specify a valid group symbol.": "Du musst ein g\xFCltiges Gruppensymbol angeben.",
  "You may only set a temporary symbol below your current rank.": "Du darfst nur ein vor\xFCbergehendes Symbol einstellen, welches unter deinem derzeitigen Rang ist.",
  "Your temporary group symbol is now": "Dein vor\xFCbergehendes Gruppensymbol ist jetzt",
  "Currently, you're viewing Pok\xE9mon Showdown in {LANGUAGE}.": "Derzeit wird Pok\xE9mon Showdown in {LANGUAGE} angezeigt.",
  "Valid languages are: {LANGUAGES}": "G\xFCltige Sprachen sind: {LANGUAGES}",
  "Pok\xE9mon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Pok\xE9mon Showdown wird jetzt in {LANGUAGE} angezeigt (au\xDFer in Sprachr\xE4umen).",
  "Note that rooms can set their own language, which will override this setting.": "Bitte beachte, dass R\xE4ume ihre eigene Sprache einstellen k\xF6nnen, welche diese Einstellung \xFCberschreibt.",
  "/updatesettings expects JSON encoded object.": "/updatesettings verlangt ein Objekt, welches in JSON verschl\xFCsselt ist.",
  "Unable to parse settings in /updatesettings!": "Es ist nicht m\xF6glich, die Einstellungen in /updatesettings zu analysieren!",
  "Must be in a battle.": "Muss in einem Kampf sein.",
  "User {USER} not found.": "Nutzer {USER} wurde nicht gefunden.",
  "Must be a player in this battle.": "Muss ein Spieler in diesem Kampf sein.",
  "{TARGETUSER} has not requested extraction.": "{TARGETUSER} hat keine Extraktion angefordert.",
  "You have already consented to extraction with {TARGETUSER}.": "Du hast bereits einer Extraktion mit {TARGETUSER} zugestimmt.",
  "{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER} gibt das Einverst\xE4ndnis, das Kampf-Team und die Entscheidungen mit {TARGETUSER} zu teilen.",
  "No input log found.": "Kein Input-Protokoll wurde gefunden.",
  "This command only works in battle rooms.": "Dieser Befehl funktioniert nur in Kampfr\xE4umen.",
  "This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Dieser Befehl funktioniert nur, sobald der Kampf beendet wurde - falls der Kampf hinausgez\xF6gert wird, benutze /offertie",
  "Alternatively, you can end the battle with /forcetie.": "Alternativ kannst du den Kampf mit /forcetie beenden.",
  "{USER} has extracted the battle input log.": "{USER} hat das Input-Protokoll des Kampfes extrahiert.",
  "You already extracted the battle input log.": "Du hast bereits das Input-Protokoll des Kampfes extrahiert.",
  "Battle input log re-requested.": "Input-Protokoll des Kampfes wurde nochmal angefordert.",
  "Invalid input log.": "Ung\xFCltiges Input-Protokoll.",
  "Your input log contains untrusted code - you must have console access to use it.": "Dein Input-Protokoll enth\xE4lt einen nicht vertrauensw\xFCrdigen Code - du musst Zugriff auf die Konsole haben, um es zu benutzen.",
  "This command can only be used in a battle.": "Dieser Befehl kann nur in einem Kampf benutzt werden.",
  "Only players can extract their team.": "Nur Spieler k\xF6nnen ihre Teams extrahieren.",
  "Use a number between 1-6 to view a specific set.": "Benutze eine Nummer zwischen 1-6, um ein bestimmtes Set einzusehen.",
  'The Pokemon "{TARGET}" is not in your team.': 'Das Pokemon "{TARGET}" ist nicht in deinem Team.',
  "That Pokemon is not in your team.": "Dieses Pokemon ist nicht in deinem Team.",
  "View team": "Team einsehen",
  "Must be in a battle room.": "Muss in einem Kampfraum sein.",
  "User {USER} must be in the battle room already.": null,
  // NEEDS TRANSLATION
  "This server does not allow offering ties.": "Dieser Server unterst\xFCtzt es nicht, Unentschieden anzubieten.",
  "You can't offer ties in tournaments.": "Du kannst keine Unentschieden in einem Turnier anbieten.",
  "It's too early to tie, please play until turn 100.": "Es ist noch zu fr\xFCh, um ein Unentschieden anzubieten, bitte warte bis Zug 100.",
  "No other player is requesting a tie right now. It was probably canceled.": "Kein Spieler fordert gerade ein Unentschieden an. Wahrscheinlich wurde es abgebrochen.",
  "{USER} is offering a tie.": "{USER} bietet ein Unentschieden an.",
  "Accept tie": "Unentschieden akzeptieren",
  "Reject": "Ablehnen",
  "Must be a player to accept ties.": "Muss ein Spieler sein, um Unentschieden zu akzeptieren.",
  "You have already agreed to a tie.": "Du hast bereits einem Unentschieden zugestimmt.",
  "{USER} accepted the tie.": "{USER} hat das Unentschieden angenommen.",
  "All players have accepted the tie.": "Alle Spieler haben einem Unentschieden zugestimmt.",
  "Must be a player to reject ties.": "Muss ein Spieler sein, um Unentschieden abzulehnen.",
  "{USER} rejected the tie.": "{USER} hat das Unentschieden abgelehnt.",
  "This room doesn't have an active game.": " In diesem Raum findet kein aktiver Kampf statt.",
  "This kind of game can't be forfeited.": "In diesem Kampf kann man nicht aufgeben.",
  "This game doesn't support /choose": "Dieses Spiel unterst\xFCtzt nicht /choose",
  "This game doesn't support /undo": "Dieses Spiel unterst\xFCtzt nicht /undo",
  "You can only save replays for battles.": "Du kannst nur Replays f\xFCr K\xE4mpfe speichern.",
  "This battle can't have hidden replays, because the tournament is set to be forced public.": "Dieser Kampf unterst\xFCtzt keine verborgenen Replays, da das Turnier so eingestellt wurde, dass alle K\xE4mpfe \xF6ffentlich sind.",
  "The replay for this battle is already set to hidden.": "Das Replay dieses Kampfes wurde bereits verborgen.",
  "{USER} hid the replay of this battle.": "{USER} hat das Replay dieses Kampfes verborgen.",
  "You can only do this in battle rooms.": "Du kannst dies nur in Kampfr\xE4umen machen.",
  "You can only add a Player to unrated battles.": "Du kannst einen Spieler ausschlie\xDFlich in Unrated-K\xE4mpfen hinzuf\xFCgen.",
  'Player must be set to "p1" or "p2", not "{TARGET}".': 'Spieler m\xFCssen zu "p1" oder "p2" zugeordnet werden, nicht "{TARGET}".',
  "This room already has a player in slot {TARGET}.": "Dieser Raum besitzt bereits einen Spieler in Slot {TARGET}",
  "{TARGETUSER} is already a player in this battle.": "{TARGETUSER} ist bereits ein Spieler in diesem Kampf.",
  "Player 2": "Spieler 2",
  "Players could not be restored (maybe this battle already has two players?).": "Spieler konnten nicht wiederhergestellt werden (vielleicht hat dieser Kampf bereits zwei Spieler?).",
  "This game doesn't support /joingame": "Dieses Spiel unterst\xFCtzt nicht /joingame",
  "This game doesn't support /leavegame": "Dieses Spiel unterst\xFCtzt nicht /leavegame",
  "You can only do this in unrated non-tour battles.": "Du kannst dies nur in einem Unrated-Kampf machen, welcher nicht Teil eines Turniers ist.",
  "{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER} wurde aus dem Kampf von {USER} gekickt {REASON}",
  "You can only set the timer from inside a battle room.": "Du kannst den Timer nur innerhalb eines Kampfraumes einstellen.",
  "This game's timer is managed by a different command.": "Der Timer dieses Kampfes wird mit einem anderen Befehl gesteuert.",
  "The game timer is OFF.": "Der Timer des Kampfes ist ausgeschaltet.",
  "The game timer is ON (requested by {USER})": "Der Timer des Kampfes ist eingeschaltet (von {USER} angefordert)",
  "Access denied.": "Zugriff verweigert",
  "Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "Der Timer wurde vom Staff ausgeschaltet. Bitte schalte diesen nicht wieder ein, au\xDFer der Staff w\xFCnscht es.",
  "The timer is already off.": "Der Timer ist bereits ausgeschaltet.",
  '"{TARGET}" is not a recognized timer state.': '"{TARGET}" ist kein erkannter Zeitwert.',
  "Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "Der Forcetimer ist jetzt ausgeschaltet: Der Timer kann nur noch mit entsprechender Einwilligung eingeschaltet werden. (eingestellt von {USER})",
  "Forcetimer is now ON: All battles will be timed. (set by {USER})": "Der Forcetimer ist jetzt eingeschaltet: Alle K\xE4mpfe unterstehen einem Timer. (eingestellt von {USER})",
  "'{TARGET}' is not a recognized forcetimer setting.": "'{TARGET}' ist keine erkannte Einstellung bez\xFCglich des Forcetimers.",
  "This server requires you to be rank {GROUP} or higher to search for a battle.": "Dieser Server erfordert es, Rang {GROUP} oder h\xF6her zu sein, um nach K\xE4mpfen zu suchen.",
  "Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "Da du {ELO} ELO in {TARGET} erreicht hast, musst du deinen Account registrieren, um weiterhin dieses Format auf der Ladder spielen zu k\xF6nnen.",
  "Register": "Registrieren",
  "The user '{TARGETUSER}' was not found.": "Der Nutzer '{TARGETUSER}' wurde nicht gefunden.",
  "You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Du bist gesperrt und kannst andere Nutzer nicht zu einem Kampf herausfordern.",
  "You are banned from battling and cannot challenge users.": "Du bist davon ausgeschlossen, K\xE4mpfe zu bestreiten und kannst keine anderen Nutzer herausfordern.",
  "You must choose a username before you challenge someone.": "Du musst einen Nutzernamen haben, bevor du jemanden herausforderst.",
  "This server requires you to be rank {GROUP} or higher to challenge users.": "Dieser Server erfordert es, Rang {GROUP} oder h\xF6her zu sein, um Nutzer herauszufordern.",
  "This command does not support specifying multiple users": "Dieser Befehl unterst\xFCtzt es nicht, mehrere Nutzer anzugeben.",
  "Provide a valid format.": "Gib ein g\xFCltiges Format an.",
  "Please provide a valid format.": "Bitte gib ein g\xFCltiges Format an.",
  "The format '{FORMAT}' was not found.": "Das Format '{FORMAT}' wurde nicht gefunden.",
  "Your team is valid for {FORMAT}.": "Dein Team ist g\xFCltig f\xFCr {FORMAT}.",
  "Your team was rejected for the following reasons:": "Dein Team wurde aus folgenden Gr\xFCnden abgelehnt:",
  "Battles are now hidden (except to staff) in your trainer card.": "K\xE4mpfe werden jetzt in deiner Trainer-Karte verborgen (au\xDFer vom Staff).",
  "Battles are now visible in your trainer card.": "K\xE4mpfe sind jetzt in deiner Trainer-Karte \xF6ffentlich.",
  "'{COMMAND}' is a help command.": "'{COMMAND}' ist ein informativer Befehl.",
  "The command '/{TARGET}' does not exist.": "Der Befehl '/{TARGET}' existiert nicht.",
  "Could not find help for '/{TARGET}'. Try /help for general help.": "Es konnten keine Hilfestellungen f\xFCr '/{TARGET}' gefunden werden. Benutze /help um eine allgemeine Hilfestellung zu erhalten.",
  "Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "Es konnten keine Hilfestellungen f\xFCr '/{TARGET}' gefunden werden - stattdessen wird eine Hilfestellung f\xFCr '/{CLOSEST}' angezeigt.",
  "Server version: <b>{VERSION}": null,
  // NEEDS TRANSLATION
  "User {TARGETUSER} is offline. Send the message again to confirm. If you are using /msg, use /offlinemsg instead.": null,
  // NEEDS TRANSLATION
  "You are already blocking {PREFIX}private messages! To unblock, use /unblockpms": null,
  // NEEDS TRANSLATION
  "You are now blocking {PREFIX}private messages, except from staff and {TARGET}.": null,
  // NEEDS TRANSLATION
  "You are now blocking {PREFIX}private messages, except from staff, friends, and {TARGET} users.": null,
  // NEEDS TRANSLATION
  "You are now blocking {PREFIX}private messages, except from staff and friends.": null,
  // NEEDS TRANSLATION
  "You are now blocking {PREFIX}private messages, except from staff.": null,
  // NEEDS TRANSLATION
  "You are not blocking {PREFIX}private messages! To block, use /blockpms": null,
  // NEEDS TRANSLATION
  "You are no longer blocking {PREFIX}private messages.": null,
  // NEEDS TRANSLATION
  "You are now blocking room invites, except from staff and {TARGET}.": null,
  // NEEDS TRANSLATION
  "You are now blocking room invites, except from staff and {TARGET} users.": null,
  // NEEDS TRANSLATION
  "You are now blocking room invites, except from staff.": null,
  // NEEDS TRANSLATION
  "You are not opted-in to playing against bots on the ladder.": null,
  // NEEDS TRANSLATION
  "You have opted out of playing against bots on the ladder.": null,
  // NEEDS TRANSLATION
  "You are already opted-in to playing against bots on the ladder.": null,
  // NEEDS TRANSLATION
  "You have opted in to matching against bots on the ladder.": null,
  // NEEDS TRANSLATION
  "Format": null,
  // NEEDS TRANSLATION
  "You are not a player and don't have a team.": null,
  // NEEDS TRANSLATION
  'You don\'t have a Pok\xE9mon matching "{TARGET}" in your team.': null,
  // NEEDS TRANSLATION
  "You don't have a Pok\xE9mon #{NUMBER} on your team - your team only has {COUNT} Pok\xE9mon.": null,
  // NEEDS TRANSLATION
  "Must be a player to agree to open team sheets.": null,
  // NEEDS TRANSLATION
  "This format does not allow requesting open team sheets. You can both manually agree to it by using !showteam hidestats.": null,
  // NEEDS TRANSLATION
  "You cannot agree to open team sheets after Team Preview. Each player can still show their own sheet by using this command: !showteam hidestats": null,
  // NEEDS TRANSLATION
  "An opponent has already rejected open team sheets.": null,
  // NEEDS TRANSLATION
  "You have already made your decision about agreeing to open team sheets.": null,
  // NEEDS TRANSLATION
  "{USER} has agreed to open team sheets.": null,
  // NEEDS TRANSLATION
  "Must be a player to reject open team sheets.": null,
  // NEEDS TRANSLATION
  "This format does not allow requesting open team sheets.": null,
  // NEEDS TRANSLATION
  "You cannot reject open team sheets after Team Preview.": null,
  // NEEDS TRANSLATION
  "{USER} rejected open team sheets.": null,
  // NEEDS TRANSLATION
  "The user '{USER}' is not accepting challenges right now.": null,
  // NEEDS TRANSLATION
  "'/{TARGET}' is a help command.": null,
  // NEEDS TRANSLATION
  "{USER} wants to extract the battle input log.": null,
  // NEEDS TRANSLATION
  "{TARGETUSER} was kicked from a battle by {USER}.{REASON}": null,
  // NEEDS TRANSLATION
  "unlocked": null,
  // NEEDS TRANSLATION
  "friended": null,
  // NEEDS TRANSLATION
  "The player in slot {SLOT} has already been eliminated.": null
  // NEEDS TRANSLATION
};
//# sourceMappingURL=core-commands.js.map
