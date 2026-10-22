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
  "Server version: <b>{VERSION}</b>": "Versi\xF3n del servidor: <b>{VERSION}</b>",
  "/mee - must not start with a letter or number": "/mee - no debe empezar con una letra o un n\xFAmero",
  "What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "\xA1\xBFQu\xE9?! \xA1\xBFC\xF3mo no est\xE1s m\xE1s emocionado por combatir?! Prueba usando /battle para demostrarme que est\xE1s listo.",
  "Access denied for custom avatar - make sure you're on the right account?": "Acceso denegado a custom avatar - aseg\xFArate de estar en la cuenta correcta",
  "Invalid avatar.": "Avatar inv\xE1lido.",
  "Avatar changed to:": "Avatar cambiado a:",
  "Artist: ": "Artista:",
  "No one has PMed you yet.": "Nadie te ha enviado mensaje privado a\xFAn.",
  "You forgot the comma.": "Olvidaste una coma.",
  "User {TARGETUSER} not found. Did you misspell their name?": "Usuario {TARGETUSER} no encontrado. \xBFLo escribiste mal?",
  "User {TARGETUSER} is offline.": "El usuario {TARGETUSER} est\xE1 desconectado.",
  'The user "{TARGETUSER}" was not found.': 'El usuario "{TARGETUSER}" no fue encontrado.',
  'The room "{TARGET}" was not found.': 'La sala "{TARGET}" no fue encontrada.',
  "You do not have permission to invite people into this room.": "T\xFA no tienes permiso para invitar gente a esta sala.",
  'This user is already in "{ROOM}".': 'Este usuario ya est\xE1 en la sala "{ROOM}".',
  "Setting status messages in /busy is no longer supported. Set a status using /status.": "Poner mensajes de estado en /busy ya no est\xE1 disponible. Pon un estado utilizando /status.",
  "Setting status messages in /away is no longer supported. Set a status using /status.": "Poner mensajes de estado en /away ya no est\xE1 disponible. Coloca un estado utilizando /status.",
  "{TARGETUSER} does not have a status set.": "{TARGETUSER} no tiene un mensaje de estado puesto.",
  '{TARGETUSER}\'s status "{STATUS}" was cleared by {USER}{REASON}': "El mensaje de estado de {TARGETUSER} fue eliminado por {USER}{REASON}",
  "You don't have a status message set.": "T\xFA no tienes un mensaje de estado puesto.",
  "You have cleared your status message.": "Haz eliminado tu mensaje de estado.",
  "This user has not played any ladder games yet.": "Este usuario no ha jugado un juego en ladder a\xFAn.",
  // TRANSLATORS: initial for Wins
  "W": "V",
  // TRANSLATORS: initial for Losses
  "L": "D",
  "You already have the temporary symbol '{GROUP}'.": "T\xFA ya tienes el s\xEDmbolo temporal '{GROUP}'",
  "You must specify a valid group symbol.": "Debes especificar un s\xEDmbolo de grupo v\xE1lido.",
  "You may only set a temporary symbol below your current rank.": "Solo puedes establecer un s\xEDmbolo temporal menor que tu rango actual.",
  "Your temporary group symbol is now": "Tu s\xEDmbolo temporal ahora es",
  "Currently, you're viewing Pok\xE9mon Showdown in {LANGUAGE}.": "Ahora mismo est\xE1s viendo Pok\xE9mon Showdown en {LANGUAGE}.",
  "Valid languages are: {LANGUAGES}": "Los idiomas v\xE1lidos son: {LANGUAGES}.",
  "Pok\xE9mon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Pok\xE9mon Showdown ahora ser\xE1 mostrado en {LANGUAGE} (excepto en las salas de idiomas).",
  "Note that rooms can set their own language, which will override this setting.": "Ten en cuenta que las salas pueden colocar su propio idioma, el cual se sobrepondr\xE1 a esta configuraci\xF3n.",
  "/updatesettings expects JSON encoded object.": "/updatesettings espera un objeto codificado JSON",
  "Unable to parse settings in /updatesettings!": "\xA1No fue posible analizar la configuraci\xF3n en /updatesettings!",
  "Must be in a battle.": "Debe estar en una batalla.",
  "User {USER} not found.": "Usuario {USER} no encontrado.",
  "Must be a player in this battle.": "Debe ser un jugador en esta batalla.",
  "{TARGETUSER} has not requested extraction.": "El usuario {TARGETUSER} no ha solicitado una extracci\xF3n",
  "You have already consented to extraction with {TARGETUSER}.": "T\xFA ya has dado consentimiento para la extracci\xF3n con {TARGETUSER}.",
  "{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER} acepta compartir su equipo y decisiones con {TARGETUSER}.",
  "No input log found.": "No se encontraron mensajes.",
  "This command only works in battle rooms.": "Este comando solo funciona en batallas.",
  "This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Este comando solo funciona si la batalla ha finalizado - si la batalla se ha estancado, utiliza /offertie. ",
  "Alternatively, you can end the battle with /forcetie.": "De otro modo, t\xFA puedes terminar la batalla con /forcetie.",
  "{USER} has extracted the battle input log.": "{USER} ha extra\xEDdo el registro de mensajes de la batalla.",
  "You already extracted the battle input log.": "Ya has extra\xEDdo los mensajes de la batalla.",
  "Battle input log re-requested.": "Los mensajes de la batalla se solicitaron nuevamente.",
  "Invalid input log.": "Mensaje inv\xE1lido.",
  "Your input log contains untrusted code - you must have console access to use it.": "Tu mensaje contiene c\xF3digo que no es de confianza - debes tener acceso a la consola para usarlo.",
  "This command can only be used in a battle.": "Este comando solo puede ser usado en una batalla.",
  "Only players can extract their team.": "Solo los jugadores pueden extraer su equipo.",
  "Use a number between 1-6 to view a specific set.": "Usa un n\xFAmero entre 1 y 6 para ver un set espec\xEDfico.",
  'The Pokemon "{TARGET}" is not in your team.': 'El Pok\xE9mon "{TARGET}" no est\xE1 en tu equipo.',
  "That Pokemon is not in your team.": "Ese Pok\xE9mon no est\xE1 en tu equipo.",
  "View team": "Ver equipo",
  "Must be in a battle room.": "Debe estar en una batalla.",
  "User {USER} must be in the battle room already.": null,
  // NEEDS TRANSLATION
  "This server does not allow offering ties.": "Este servidor no permite ofrecer empates.",
  "You can't offer ties in tournaments.": "No puedes ofrecer empates en torneos.",
  "It's too early to tie, please play until turn 100.": "Es demasiado pronto para empatar, por favor juega hasta el turno 100.",
  "No other player is requesting a tie right now. It was probably canceled.": "Ning\xFAn otro jugador est\xE1 pidiendo un empate ahora mismo. Probablemente fue cancelado.",
  "{USER} is offering a tie.": "{USER} est\xE1 ofreciendo un empate.",
  "Accept tie": "Aceptar empate",
  "Reject": "Rechazar",
  "Must be a player to accept ties.": "Debes ser un jugador para aceptar empates.",
  "You have already agreed to a tie.": "Ya has acordado un empate.",
  "{USER} accepted the tie.": "{USER} acept\xF3 el empate.",
  "All players have accepted the tie.": "Todos los jugadores han aceptado el empate.",
  "Must be a player to reject ties.": "Debes ser un jugador para rechazar empates",
  "{USER} rejected the tie.": "{USER} rechaz\xF3 el empate.",
  "This room doesn't have an active game.": "Esta sala no tiene un juego activo.",
  "This kind of game can't be forfeited.": "No te puedes rendir en este tipo de juego.",
  "This game doesn't support /choose": "Este juego no admite /choose",
  "This game doesn't support /undo": "Este juego no admite /undo",
  "You can only save replays for battles.": "T\xFA solo puedes guardar repeticiones de batallas.",
  "This battle can't have hidden replays, because the tournament is set to be forced public.": "Esta batalla no puede tener repeticiones ocultas, ya que el torneo est\xE1 forzado a ser p\xFAblico.",
  "The replay for this battle is already set to hidden.": "La repetici\xF3n de esta batalla ya est\xE1 oculta.",
  "{USER} hid the replay of this battle.": "{USER} ocult\xF3 la repetici\xF3n de esta batalla.",
  "You can only do this in battle rooms.": "T\xFA solo puedes hacer esto en batallas.",
  "You can only add a Player to unrated battles.": "Solo puedes agregar un Jugador en batallas sin puntos.",
  'Player must be set to "p1" or "p2", not "{TARGET}".': 'El jugador debe ser establecido como "p1" o "p2", no "{TARGET}".',
  "This room already has a player in slot {TARGET}.": "Esta batalla ya tiene un jugador en el lugar {TARGET}.",
  "{TARGETUSER} is already a player in this battle.": "{TARGETUSER} ya es un jugador en esta batalla.",
  "Player 2": "Jugador 2",
  "Players could not be restored (maybe this battle already has two players?).": "Los jugadores no se pudieron restaurar (\xBFtal vez esta batalla ya tiene dos jugadores?)",
  "This game doesn't support /joingame": "Este juego no admite /joingame",
  "This game doesn't support /leavegame": "Este juego no admite /leavegame",
  "You can only do this in unrated non-tour battles.": "T\xFA solo puedes hacer esto en batallas de torneo sin puntos.",
  "{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER} fue expulsado de una batalla por {USER} {REASON}",
  "You can only set the timer from inside a battle room.": "Solo puedes establecer el temporizador dentro de una batalla.",
  "This game's timer is managed by a different command.": "El temporizador de este juego se utiliza con un comando diferente.",
  "The game timer is OFF.": "El temporizador del juego est\xE1 APAGADO.",
  "The game timer is ON (requested by {USER})": "El temporizador del juego est\xE1 ENCENDIDO (solicitado por {USER}",
  "Access denied.": "Acceso denegado.",
  "Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "El temporizador fue apagado por un staff. Por favor no lo enciendas de nuevo hasta que el staff diga que puedes hacerlo.",
  "The timer is already off.": "El temporizador ya estaba apagado.",
  '"{TARGET}" is not a recognized timer state.': '"{TARGET}" no es un estado de temporizador reconocido.',
  "Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "Forcetimer ahora est\xE1 APAGADO: El temporizador est\xE1 habilitado ahora. (colocado por {USER})",
  "Forcetimer is now ON: All battles will be timed. (set by {USER})": "Forcetimer ahora est\xE1 ENCENDIDO: Todas las batallas tendr\xE1n temporizador. (colocado por {USER})",
  "'{TARGET}' is not a recognized forcetimer setting.": "'{TARGET}' no se reconoce como una configuraci\xF3n del forcetimer.",
  "This server requires you to be rank {GROUP} or higher to search for a battle.": "Este servidor requiere que tu rango sea {GROUP} o mayor para buscar una batalla.",
  "Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "Dado que alcanzaste {ELO} de ELO en {TARGET}, debes registrar tu cuenta para poder seguir jugando dicho formato en ladder.",
  "Register": "Registrarse",
  "The user '{TARGETUSER}' was not found.": "El usuario '{TARGETUSER}' no fue encontrado.",
  "You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Est\xE1s locked y no puedes retar a usuarios que no tengan lock.",
  "You are banned from battling and cannot challenge users.": "Tienes prohibido combatir y no puedes retar a otros usuarios.",
  "You must choose a username before you challenge someone.": "Debes elegir un nombre de usuario antes de retar a alguien.",
  "This server requires you to be rank {GROUP} or higher to challenge users.": "Este servidor requiere que tu rango sea {GROUP} o mayor para retar usuarios.",
  "This command does not support specifying multiple users": "Este comando no permite especificar m\xFAltiples usuarios",
  "Provide a valid format.": "Proporciona un formato v\xE1lido.",
  "Please provide a valid format.": "Por favor proporciona un formato v\xE1lido.",
  "The format '{FORMAT}' was not found.": "El formato '{FORMAT}' no fue encontrado.",
  "Your team is valid for {FORMAT}.": "Tu equipo es valido para {FORMAT}.",
  "Your team was rejected for the following reasons:": "Tu equipo fue rechazado por las siguientes razones:",
  "Battles are now hidden (except to staff) in your trainer card.": "Las batallas est\xE1n ahora ocultas (excepto para el staff) en tu tarjeta de entrenador.",
  "Battles are now visible in your trainer card.": "Las batallas son ahora visibles en tu tarjeta de entrenador.",
  "'{COMMAND}' is a help command.": "'{COMMAND}' es un comando de ayuda.",
  "The command '/{TARGET}' does not exist.": "El comando '/{TARGET}' no existe.",
  "Could not find help for '/{TARGET}'. Try /help for general help.": "No se encontr\xF3 ayuda para '/{TARGET}'. Prueba usando /help para asistencia en general.",
  "Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "No se encontr\xF3 ayuda para '/{TARGET}' - mostrando ayuda para '/{CLOSEST}' en su lugar",
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
