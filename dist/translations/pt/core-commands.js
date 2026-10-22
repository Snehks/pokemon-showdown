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
  "Server version: <b>{VERSION}</b>": "Vers\xE3o do servidor: <b>{VERSION}</b>",
  "/mee - must not start with a letter or number": "/mee - n\xE3o deve iniciar com uma letra ou n\xFAmero",
  "What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "O qu\xEA?! Como assim voc\xEA n\xE3o est\xE1 mais animado para batalhar?! Tente fazer /battle! para me mostrar que est\xE1 preparado.",
  "Access denied for custom avatar - make sure you're on the right account?": "Acesso negado para avatar personalizado - certifique-se de que voc\xEA est\xE1 na conta certa.",
  "Invalid avatar.": "Avatar inv\xE1lido.",
  "Avatar changed to:": "Avatar trocado para:",
  "Artist: ": "Artista:",
  "No one has PMed you yet.": "Ningu\xE9m te enviou uma mensagem privada ainda.",
  "You forgot the comma.": "Voc\xEA esqueceu da v\xEDrgula",
  "User {TARGETUSER} not found. Did you misspell their name?": "Usu\xE1rio {TARGETUSER} n\xE3o encontrado. Voc\xEA digitou o nome corretamente?",
  "User {TARGETUSER} is offline.": "Usu\xE1rio {TARGETUSER} est\xE1 offline.",
  'The user "{TARGETUSER}" was not found.': 'O usu\xE1rio "{TARGETUSER}" n\xE3o foi encontrado.',
  'The room "{TARGET}" was not found.': 'A sala "{TARGET}" n\xE3o foi encontrada.',
  "You do not have permission to invite people into this room.": "Voc\xEA n\xE3o tem permiss\xE3o para convidar pessoas para esta sala.",
  'This user is already in "{ROOM}".': 'O usu\xE1rio j\xE1 est\xE1 em "{ROOM}"',
  "Setting status messages in /busy is no longer supported. Set a status using /status.": "N\xE3o \xE9 mais poss\xEDvel utilizar uma mensagem de status com /busy. Para utilizar um status, utilize /status.",
  "Setting status messages in /away is no longer supported. Set a status using /status.": "N\xE3o \xE9 mais poss\xEDvel utilizar uma mensagem de status com /away. Para utilizar um status, utilize /status.",
  "{TARGETUSER} does not have a status set.": "{TARGETUSER} n\xE3o tem uma mensagem de status.",
  '{TARGETUSER}\'s status "{STATUS}" was cleared by {USER}{REASON}': 'O status "{STATUS}" de {TARGETUSER} foi removido por {USER}{REASON}',
  "You don't have a status message set.": "Voc\xEA n\xE3o tem uma mensagem de status.",
  "You have cleared your status message.": "Voc\xEA removeu a sua mensagem de status.",
  "This user has not played any ladder games yet.": "Este usu\xE1rio ainda n\xE3o jogou nenhuma partida na ladder.",
  // TRANSLATORS: initial for Wins
  "W": "V",
  // TRANSLATORS: initial for Losses
  "L": "D",
  "You already have the temporary symbol '{GROUP}'.": "Voc\xEA j\xE1 tem o s\xEDmbolo tempor\xE1rio '{GROUP}'.",
  "You must specify a valid group symbol.": "Voc\xEA precisa especificar um s\xEDmbolo de grupo v\xE1lido.",
  "You may only set a temporary symbol below your current rank.": "Voc\xEA s\xF3 pode utilizar um s\xEDmbolo tempor\xE1rio que esteja abaixo do seu rank atual.",
  "Your temporary group symbol is now": "Agora o seu s\xEDmbolo de grupo tempor\xE1rio \xE9",
  "Currently, you're viewing Pok\xE9mon Showdown in {LANGUAGE}.": "Atualmelmente, voc\xEA est\xE1 vendo o Pok\xE9mon Showdown em {LANGUAGE}.",
  "Valid languages are: {LANGUAGES}": "Idiomas v\xE1lidos s\xE3o: {LANGUAGES}",
  "Pok\xE9mon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Agora o Pok\xE9mon Showdown sera exibido em {LANGUAGE} (exceto em salas de idioma).",
  "Note that rooms can set their own language, which will override this setting.": " Observa\xE7\xE3o as salas podem escolher sua pr\xF3pria l\xEDngua, o que sobrep\xF5e essa configura\xE7\xE3o. ",
  "/updatesettings expects JSON encoded object.": "/updatesettings espera um objeto codificado em JSON.",
  "Unable to parse settings in /updatesettings!": "N\xE3o foi poss\xEDvel analisar as configura\xE7\xF5es em /updatesettings!",
  "Must be in a battle.": "Deve estar em uma batalha.",
  "User {USER} not found.": "Usu\xE1rio {USER} n\xE3o encontrado.",
  "Must be a player in this battle.": "Deve ser um jogador nesta batalha.",
  "{TARGETUSER} has not requested extraction.": "{TARGETUSER} n\xE3o requisitou uma extra\xE7\xE3o.",
  "You have already consented to extraction with {TARGETUSER}.": "Voc\xEA j\xE1 consentiu para a extra\xE7\xE3o com {TARGETUSER}.",
  "{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER} consentiu em compartilhar a equipe da batalha e escolhas com {TARGETUSER}.",
  "No input log found.": "Nenhum log foi encontrado.",
  "This command only works in battle rooms.": "Este comando s\xF3 funciona em salas de batalha.",
  "This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Este comando s\xF3 funciona quando a batalha tiver acabado - se a batalha estiver estancada, use /offertie.",
  "Alternatively, you can end the battle with /forcetie.": "Alternativamente, voc\xEA pode encerrar a batalha com /forcetie.",
  "{USER} has extracted the battle input log.": "{USER} extraiu os logs da batalha.",
  "You already extracted the battle input log.": "Voc\xEA j\xE1 extraiu os logs da batalha.",
  "Battle input log re-requested.": "Logs da batalha foram requisitados outra vez.",
  "Invalid input log.": "Logs inv\xE1lidos.",
  "Your input log contains untrusted code - you must have console access to use it.": "Seu comando contem c\xF3digo n\xE3o confi\xE1vel - voc\xEA deve ter acesso ao console para us\xE1-lo.",
  "This command can only be used in a battle.": "Este comando s\xF3 pode ser usado em uma batalha.",
  "Only players can extract their team.": "Apenas jogadores podem extrair suas equipes.",
  "Use a number between 1-6 to view a specific set.": "Use um n\xFAmero entre 1 e 6 para ver um set espec\xEDfico.",
  'The Pokemon "{TARGET}" is not in your team.': 'O Pok\xE9mon "{TARGET}" n\xE3o est\xE1 na sua equipe.',
  "That Pokemon is not in your team.": "Este Pok\xE9mon n\xE3o est\xE1 na sua equipe.",
  "View team": "Ver equipe.",
  "Must be in a battle room.": "Deve estar em uma sala de batalha",
  "User {USER} must be in the battle room already.": null,
  // NEEDS TRANSLATION
  "This server does not allow offering ties.": "Este servidor n\xE3o permite oferecer empates.",
  "You can't offer ties in tournaments.": "Voc\xEA n\xE3o pode oferecer empates em torneios.",
  "It's too early to tie, please play until turn 100.": "\xC9 cedo demais para empatar, por favor jogue at\xE9 o turno 100.",
  "No other player is requesting a tie right now. It was probably canceled.": "Nenhum outro jogador est\xE1 pedindo por um empate no momento. Provavelmente o pedido foi cancelado.",
  "{USER} is offering a tie.": "{USER} est\xE1 oferecendo um empate.",
  "Accept tie": "Aceitar empate",
  "Reject": "Rejeitar",
  "Must be a player to accept ties.": "\xC9 necess\xE1rio ser um jogador para aceitar empates.",
  "You have already agreed to a tie.": "Voc\xEA j\xE1 concordou com um empate.",
  "{USER} accepted the tie.": "{USER} aceitou o empate.",
  "All players have accepted the tie.": "Todos os jogadores aceitaram o empate.",
  "Must be a player to reject ties.": "\xC9 necess\xE1rio ser um jogador para rejeitar empates.",
  "{USER} rejected the tie.": "{USER} rejeitou o empate.",
  "This room doesn't have an active game.": "Esta sala n\xE3o tem um jogo ativo.",
  "This kind of game can't be forfeited.": "Voc\xEA n\xE3o pode se render neste tipo de jogo.",
  "This game doesn't support /choose": "/choose n\xE3o funciona neste jogo",
  "This game doesn't support /undo": "/uno n\xE3o funciona neste jogo",
  "You can only save replays for battles.": "Voc\xEA s\xF3 pode salvar replays para batalhas.",
  "This battle can't have hidden replays, because the tournament is set to be forced public.": "Esta batalha n\xE3o pode ter replays ocultos, visto que o torneio est\xE1 configurado para ser p\xFAblico.",
  "The replay for this battle is already set to hidden.": "O replay desta batalha j\xE1 est\xE1 configurado como oculto.",
  "{USER} hid the replay of this battle.": "{USER} ocultou o replay desta batalha.",
  "You can only do this in battle rooms.": "Voc\xEA s\xF3 pode fazer isso em sala de batalhas.",
  "You can only add a Player to unrated battles.": "Voc\xEA s\xF3 pode adicionar um jogador em batalhas que n\xE3o valham pontos.",
  'Player must be set to "p1" or "p2", not "{TARGET}".': 'Jogadores devem estar classificados como "p1" ou "p2", n\xE3o "{TARGET}".',
  "This room already has a player in slot {TARGET}.": "Esta sala j\xE1 tem um jogador na posi\xE7\xE3o {TARGET}.",
  "{TARGETUSER} is already a player in this battle.": "{TARGETUSER} j\xE1 \xE9 um jogador nesta batalha.",
  "Player 2": "Jogador 2",
  "Players could not be restored (maybe this battle already has two players?).": "Os jogadores n\xE3o puderam ser restaurados (talvez esta batalha j\xE1 tenha dois jogadores?).",
  "This game doesn't support /joingame": "/joingame n\xE3o funciona neste jogo",
  "This game doesn't support /leavegame": "/leavegame n\xE3o funciona neste jogo",
  "You can only do this in unrated non-tour battles.": "Voc\xEA s\xF3 pode fazer isso em batalhas que n\xE3o valham pontos e nem sejam de torneios.",
  "{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER} foi expulso de uma batalha por {USER} {REASON}",
  "You can only set the timer from inside a battle room.": "Voc\xEA s\xF3 pode acionar o temporizador dentro de uma batalha.",
  "This game's timer is managed by a different command.": "O temporizador deste jogo \xE9 administrado por um comando diferente.",
  "The game timer is OFF.": "O temporazidor do jogo est\xE1 DESLIGADO.",
  "The game timer is ON (requested by {USER})": "O temporizador do jogo est\xE1 LIGADO (requisitado por {USER})",
  "Access denied.": "Acesso negado.",
  "Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "O temporizador foi desligado pela staff. Por favor, n\xE3o o ligue de volta at\xE9 que nossa staff diga o contr\xE1rio.",
  "The timer is already off.": "O temporizador j\xE1 est\xE1 desligado.",
  '"{TARGET}" is not a recognized timer state.': '"{TARGET}" n\xE3o \xE9 uma unidade de tempo reconhecida pelo temporizador.',
  "Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "Forcetimer agora est\xE1 DESLIGADO. O temporizador agora \xE9 opcional. (estabelecido por {USER})",
  "Forcetimer is now ON: All battles will be timed. (set by {USER})": "Forcetimer agora est\xE1 LIGADO. Todas as batalhas ter\xE3o tempo. (estabelecido por {USER})",
  "'{TARGET}' is not a recognized forcetimer setting.": "{TARGET}' n\xE3o \xE9 uma configura\xE7\xE3o reconhecida de forcetimer.",
  "This server requires you to be rank {GROUP} or higher to search for a battle.": "Este servidor requer que voc\xEA tenha o rank {GROUP} ou maior para procurar por uma batalha.",
  "Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "Visto que voc\xEA atingiu {ELO} de ELO em {TARGET}, voc\xEA deve registrar a sua conta para continuar jogando esse formato na ladder.",
  "Register": "Registrar-se",
  "The user '{TARGETUSER}' was not found.": "O usu\xE1rio '{TARGETUSER}' n\xE3o foi encontrado.",
  "You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Voc\xEA est\xE1 locked e n\xE3o pode desafiar usu\xE1rios unlocked.",
  "You are banned from battling and cannot challenge users.": "Voc\xEA est\xE1 banido de batalhas e n\xE3o pode desafiar outros usu\xE1rios.",
  "You must choose a username before you challenge someone.": "Voc\xEA deve escolher um nome de usu\xE1rio antes de desafiar algu\xE9m.",
  "This server requires you to be rank {GROUP} or higher to challenge users.": "Este servidor requer que voc\xEA tenha o rank {GROUP} ou maior para desafiar algu\xE9m.",
  "This command does not support specifying multiple users": "Este comando n\xE3o permite especificar m\xFAltiplos usu\xE1rios.",
  "Provide a valid format.": "Providencie um formato v\xE1lido.",
  "Please provide a valid format.": "Por favor, providencie um formato v\xE1lido.",
  "The format '{FORMAT}' was not found.": "O formato '{FORMAT}' n\xE3o foi encontrado.",
  "Your team is valid for {FORMAT}.": "Sua equipe \xE9 v\xE1lida para {FORMAT}.",
  "Your team was rejected for the following reasons:": "Sua equipe foi rejeitada pelos seguintes motivos:",
  "Battles are now hidden (except to staff) in your trainer card.": "Suas batalhas agora est\xE3o ocultas no seu trainer card (exceto para staff).",
  "Battles are now visible in your trainer card.": "Suas batalhas agora est\xE3o vis\xEDveis no seu trainer card.",
  "'{COMMAND}' is a help command.": "{COMMAND}' \xE9 um comando de ajuda.",
  "The command '/{TARGET}' does not exist.": "O comando '/{TARGET}' n\xE3o existe.",
  "Could not find help for '/{TARGET}'. Try /help for general help.": "N\xE3o foi poss\xEDvel encontrar ajuda para '/{TARGET}'. Tente /help para receber ajuda em geral.",
  "Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "N\xE3o foi poss\xEDvel encontrar ajuda para '/{TARGET}' - exibindo ajuda para '/{CLOSEST}' em vez disso.",
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
