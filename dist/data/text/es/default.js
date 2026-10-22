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
var default_exports = {};
__export(default_exports, {
  DefaultText: () => DefaultText
});
module.exports = __toCommonJS(default_exports);
const DefaultText = {
  default: {
    startBattle: null,
    // NEEDS TRANSLATION
    winBattle: null,
    // NEEDS TRANSLATION
    tieBattle: null,
    // NEEDS TRANSLATION
    pokemon: "{NICKNAME}",
    opposingPokemon: "el {NICKNAME} rival",
    fullName: "{NICKNAME} ({SPECIES})",
    team: "tu lado",
    opposingTeam: "el lado rival",
    party: null,
    // NEEDS TRANSLATION
    opposingParty: null,
    // NEEDS TRANSLATION
    turn: null,
    // NEEDS TRANSLATION
    switchIn: "\xA1{TRAINER:definite:capitalize} saca a {FULLNAME}!",
    switchInOwn: "\xA1Adelante, {FULLNAME}!",
    switchOut: "\xA1{TRAINER:definite:capitalize} retira a {NICKNAME} del combate!",
    switchOutOwn: "\xA1{NICKNAME}, ven aqu\xED!",
    drag: "\xA1{FULLNAME} ha sido arrastrado al combate!",
    faint: "\xA1{POKEMON} se ha debilitado!",
    swap: "\xA1{POKEMON} {TARGET:y} han intercambiado sus posiciones!",
    swapCenter: "\xA1{POKEMON} se ha desplazado al centro!",
    // Multi Battles only
    canDynamax: "  \xA1{TRAINER} ya puede usar la energ\xEDa Dinamax!",
    canDynamaxOwn: "  \xA1La energ\xEDa Dinamax rodea a {TRAINER}!",
    zEffect: "  \xA1{POKEMON} despliega toda su fuerza para ejecutar un movimiento Z!",
    move: "\xA1{POKEMON} ha usado **{MOVE}**!",
    abilityActivation: "[{ABILITY} de {POKEMON}]",
    mega: null,
    // NEEDS TRANSLATION
    megaNoItem: "  \xA1{POKEMON} est\xE1 reaccionando a la Piedra Activadora de {TRAINER}!",
    megaGen6: "  \xA1{ITEM:definite:capitalize} de {POKEMON} reacciona a la Megapulsera de {TRAINER}!",
    transformMega: "\xA1{POKEMON} ha evolucionado a Mega-{SPECIES}!",
    primal: "\xA1{POKEMON} ha experimentado una Regresi\xF3n Primigenia y ha recobrado su apariencia primitiva!",
    zPower: "  \xA1{POKEMON} se envuelve en un halo de Poder Z!",
    zBroken: "  \xA1{POKEMON} no se ha podido proteger del ataque y ha recibido da\xF1o!",
    terastallize: null,
    // NEEDS TRANSLATION
    // in case the different default messages didn't make it obvious, the difference
    // is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
    // message happens AFTER "Pokemon used Move!"
    cant: "\xA1{POKEMON} no puede usar {MOVE}!",
    cantNoMove: "\xA1{POKEMON} no se mueve!",
    fail: "  \xA1Pero ha fallado!",
    // n.b. this is the default message for in-battle forme changes
    // for the move Transform and ability Imposter, see the entry for the move Transform
    transform: "\xA1{POKEMON} se ha transformado!",
    typeChange: "  \xA1{POKEMON} ha cambiado a tipo {TYPE}!",
    typeChangeFromEffect: "  \xA1{EFFECT} de {POKEMON} lo convirti\xF3 en el tipo {TYPE}!",
    typeAdd: "  \xA1{POKEMON} ahora tambi\xE9n es de tipo {TYPE}!",
    start: null,
    // NEEDS TRANSLATION
    end: "  \xA1{POKEMON} se ha liberado de {EFFECT}!",
    activate: null,
    // NEEDS TRANSLATION
    startTeamEffect: null,
    // NEEDS TRANSLATION
    endTeamEffect: null,
    // NEEDS TRANSLATION
    startFieldEffect: null,
    // NEEDS TRANSLATION
    endFieldEffect: null,
    // NEEDS TRANSLATION
    changeAbility: "  \xA1La habilidad de {POKEMON} ha cambiado a {ABILITY}!",
    addItem: "  \xA1{POKEMON} ha obtenido {ITEM:indefinite:classified}!",
    takeItem: "  \xA1{POKEMON} le ha robado {ITEM:indefinite:classified} a {SOURCE}!",
    eatItem: null,
    // NEEDS TRANSLATION
    useGem: "  \xA1{ITEM:definite:capitalize:classified} refuerza{INFLECT:ITEM:s=:p=n} la potencia de {MOVE}!",
    eatItemWeaken: "  \xA1El da\xF1o a {POKEMON} ha sido atenuado por {ITEM:definite:classified}!",
    removeItem: null,
    // NEEDS TRANSLATION
    activateItem: null,
    // NEEDS TRANSLATION
    activateWeaken: "  \xA1El da\xF1o a {POKEMON} ha sido atenuado por {ITEM:definite:classified}!",
    damage: "  (\xA1{POKEMON} ha resultado herido!)",
    damagePercentage: null,
    // NEEDS TRANSLATION
    damageFromPokemon: "  \xA1{POKEMON} ha resultado herido por {ITEM:definite} de {SOURCE}!",
    damageFromItem: "  \xA1{POKEMON} ha resultado da\xF1ado por {ITEM:definite}!",
    damageFromPartialTrapping: "  \xA1{MOVE} ha herido a {POKEMON}!",
    heal: "  \xA1{POKEMON} ha recuperado PS!",
    healFromZEffect: "  \xA1{POKEMON} ha recobrado la salud gracias al Poder Z!",
    healFromEffect: null,
    // NEEDS TRANSLATION
    boost: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha aumentado!",
    boost2: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha aumentado mucho!",
    boost3: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha aumentado much\xEDsimo!",
    boost0: "  \xA1{STAT:definite:capitalize} de {POKEMON} no puede aumentar m\xE1s!",
    boostFromItem: null,
    // NEEDS TRANSLATION
    boost2FromItem: null,
    // NEEDS TRANSLATION
    boost3FromItem: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha aumentado much\xEDsimo gracias {ITEM:a:definite}!",
    boostFromZEffect: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha aumentado gracias al Poder Z!",
    boost2FromZEffect: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha aumentado mucho gracias al Poder Z!",
    boost3FromZEffect: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha aumentado much\xEDsimo gracias al Poder Z!",
    boostMultipleFromZEffect: "  \xA1Varias caracter\xEDsticas de {POKEMON} han aumentado gracias al Poder Z!",
    unboost: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha disminuido!",
    unboost2: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha disminuido mucho!",
    unboost3: "  \xA1{STAT:definite:capitalize} de {POKEMON} ha disminuido much\xEDsimo!",
    unboost0: "  \xA1{STAT:definite:capitalize} de {POKEMON} no puede disminuir m\xE1s!",
    unboostFromItem: null,
    // NEEDS TRANSLATION
    unboost2FromItem: null,
    // NEEDS TRANSLATION
    unboost3FromItem: null,
    // NEEDS TRANSLATION
    swapBoost: "  \xA1{POKEMON} ha intercambiado los cambios en sus caracter\xEDsticas con el objetivo!",
    swapOffensiveBoost: "  \xA1{POKEMON} ha intercambiado los cambios en el Ataque y el Ataque Especial con los del objetivo!",
    swapDefensiveBoost: "  \xA1{POKEMON} ha intercambiado los cambios en la Defensa y la Defensa Especial con los del objetivo!",
    copyBoost: "  \xA1{POKEMON} ha copiado los cambios en las caracter\xEDsticas de {TARGET}!",
    clearBoost: "  \xA1Las caracter\xEDsticas de {POKEMON} han vuelto a sus valores originales!",
    clearBoostFromZEffect: "  \xA1Las caracter\xEDsticas de {POKEMON} que hab\xEDan disminuido han vuelto a sus valores originales gracias al Poder Z!",
    invertBoost: "  \xA1Se han invertido los cambios en las caracter\xEDsticas de {POKEMON}!",
    clearAllBoost: "  \xA1Se han eliminado todos los cambios en las caracter\xEDsticas!",
    superEffective: "  \xA1Es supereficaz!",
    superEffectiveSpread: "  \xA1Es supereficaz contra {POKEMON}!",
    resisted: "  Es poco eficaz...",
    resistedSpread: "  Es poco eficaz contra {POKEMON}...",
    // this is official text meaning 4x effective. do not QC this
    extremelyEffective: "  \xA1Es hipereficaz!",
    extremelyEffectiveSpread: "  \xA1Es hipereficaz contra {POKEMON}!",
    // this is official text meaning 1/4x effective. do not QC this
    mostlyIneffective: "  Es muy poco eficaz...",
    mostlyIneffectiveSpread: "  Es muy poco eficaz contra {POKEMON}...",
    crit: "  \xA1Un golpe cr\xEDtico!",
    critSpread: "  \xA1{POKEMON} ha recibido un golpe cr\xEDtico!",
    immune: "  No afecta a {POKEMON}...",
    immuneNoPokemon: "  \xA1Pero no ha surtido efecto!",
    immuneOHKO: "  \xA1No ha afectado a {POKEMON}!",
    miss: "  \xA1{POKEMON} ha evitado el ataque!",
    missNoPokemon: "  \xA1El ataque de {SOURCE} fall\xF3!",
    center: "  Centrando Pok\xE9mon",
    noTarget: "  Pero no hab\xEDa objetivo...",
    ohko: "  \xA1Es un golpe fulminante!",
    combine: "  \xA1Los dos movimientos se han unido! \xA1Es un movimiento combinado!",
    hitCount: "  N.\xBA de golpes: {NUMBER}."
  },
  ui: {
    whatDo: null,
    // NEEDS TRANSLATION
    moveTarget: null,
    // NEEDS TRANSLATION
    reviveWho: null,
    // NEEDS TRANSLATION
    replaceWho: null,
    // NEEDS TRANSLATION
    teamStart: null,
    // NEEDS TRANSLATION
    teamRest: null,
    // NEEDS TRANSLATION
    chooseLead: null,
    // NEEDS TRANSLATION
    chooseSlot: null,
    // NEEDS TRANSLATION
    teamSoFar: null,
    // NEEDS TRANSLATION
    waitingOpponent: null,
    // NEEDS TRANSLATION
    cantSwitchTrapped: null,
    // NEEDS TRANSLATION
    zEffectClearNegativeBoost: null,
    // NEEDS TRANSLATION
    zEffectCrit2: null,
    // NEEDS TRANSLATION
    zEffectHeal: null,
    // NEEDS TRANSLATION
    zEffectCurse: null,
    // NEEDS TRANSLATION
    zEffectRedirect: null,
    // NEEDS TRANSLATION
    zEffectHealReplacement: null,
    // NEEDS TRANSLATION
    flingBerry: null,
    // NEEDS TRANSLATION
    flingWhiteHerb: null,
    // NEEDS TRANSLATION
    flingMentalHerb: null,
    // NEEDS TRANSLATION
    cantFling: null,
    // NEEDS TRANSLATION
    unobtainableInGen: null,
    // NEEDS TRANSLATION
    tagMoves: null,
    // NEEDS TRANSLATION
    notifyMoveTitle: null,
    // NEEDS TRANSLATION
    notifyMove: null,
    // NEEDS TRANSLATION
    notifyMoveAgainst: null,
    // NEEDS TRANSLATION
    notifySwitchTitle: null,
    // NEEDS TRANSLATION
    notifySwitch: null,
    // NEEDS TRANSLATION
    notifySwitchAgainst: null,
    // NEEDS TRANSLATION
    notifyTeamTitle: null,
    // NEEDS TRANSLATION
    notifyTeam: null,
    // NEEDS TRANSLATION
    notifyTeamAgainst: null,
    // NEEDS TRANSLATION
    mightBeDisabled: null,
    // NEEDS TRANSLATION
    mightBeLocked: null,
    // NEEDS TRANSLATION
    lockedExplanation: null,
    // NEEDS TRANSLATION
    mightBeTrapped: null,
    // NEEDS TRANSLATION
    autoChoice: null,
    // NEEDS TRANSLATION
    unrecognizedChoice: null,
    // NEEDS TRANSLATION
    lockedIntoMove: null,
    // NEEDS TRANSLATION
    willUseMove: null,
    // NEEDS TRANSLATION
    atTarget: null,
    // NEEDS TRANSLATION
    atSlot: null,
    // NEEDS TRANSLATION
    atAllyTarget: null,
    // NEEDS TRANSLATION
    atAllySlot: null,
    // NEEDS TRANSLATION
    actionMegaEvolve: null,
    // NEEDS TRANSLATION
    actionMegaEvolveX: null,
    // NEEDS TRANSLATION
    actionMegaEvolveY: null,
    // NEEDS TRANSLATION
    actionUltraBurst: null,
    // NEEDS TRANSLATION
    actionTerastallize: null,
    // NEEDS TRANSLATION
    actionDynamax: null,
    // NEEDS TRANSLATION
    actionGigantamax: null,
    // NEEDS TRANSLATION
    willRevive: null,
    // NEEDS TRANSLATION
    willSwitch: null,
    // NEEDS TRANSLATION
    willShift: null,
    // NEEDS TRANSLATION
    youPicked: null,
    // NEEDS TRANSLATION
    listComma: null
    // NEEDS TRANSLATION
  },
  // statuses
  brn: {
    start: "  \xA1{POKEMON} se ha quemado!",
    startFromItem: "  \xA1{POKEMON} se ha quemado con {ITEM:definite:classified}!",
    alreadyStarted: "  \xA1{POKEMON} ya est\xE1 quemado!",
    end: "  \xA1{POKEMON} ya no tiene quemaduras!",
    endFromItem: "  \xA1{POKEMON} ha curado sus quemaduras con {ITEM:definite}!",
    damage: "  \xA1{POKEMON} se resiente de las quemaduras!"
  },
  frz: {
    start: "  \xA1{POKEMON} ha sido congelado!",
    alreadyStarted: "  \xA1{POKEMON} ya est\xE1 congelado!",
    end: "  \xA1{POKEMON} ya no est\xE1 congelado!",
    endFromItem: "  \xA1{POKEMON} se ha descongelado gracias {ITEM:a:definite:classified}!",
    endFromMove: "  \xA1{POKEMON} ha derretido el hielo con {MOVE}!",
    cant: "\xA1{POKEMON} est\xE1 congelado! No se puede mover."
  },
  par: {
    start: "  \xA1{POKEMON} sufre par\xE1lisis! Quiz\xE1 no se pueda mover.",
    alreadyStarted: "  \xA1{POKEMON} ya est\xE1 paralizado!",
    end: "  \xA1{POKEMON} se ha curado de la par\xE1lisis!",
    endFromItem: "  \xA1{POKEMON} ya no est\xE1 paralizado gracias {ITEM:a:definite:classified}!",
    cant: "\xA1{POKEMON} est\xE1 paralizado! No se puede mover."
  },
  psn: {
    start: "  \xA1{POKEMON} ha sido envenenado!",
    alreadyStarted: "  \xA1{POKEMON} ya est\xE1 envenenado!",
    end: "  \xA1{POKEMON} ya no est\xE1 envenenado!",
    endFromItem: "  \xA1{POKEMON} ya no est\xE1 envenenado gracias {ITEM:a:definite}!",
    damage: "  \xA1El veneno resta PS a {POKEMON}!"
  },
  tox: {
    start: "  \xA1{POKEMON} ha sido gravemente envenenado!",
    startFromItem: "  \xA1{POKEMON} ha sido gravemente envenenado por {ITEM:definite:classified}!",
    end: "#psn",
    endFromItem: "#psn",
    alreadyStarted: "#psn",
    damage: "#psn"
  },
  slp: {
    start: "  \xA1{POKEMON} se ha dormido!",
    startFromRest: "  \xA1{POKEMON} se ha recuperado tras dormir un poco!",
    alreadyStarted: "  \xA1{POKEMON} ya est\xE1 dormido!",
    end: "  \xA1{POKEMON} se ha despertado!",
    endFromItem: "  \xA1{POKEMON} se ha despertado gracias {ITEM:a:definite:classified}!",
    cant: "\xA1{POKEMON} est\xE1 dormido como un tronco!"
  },
  // misc effects
  confusion: {
    start: "  \xA1{POKEMON} se ha quedado confuso!",
    startFromFatigue: "  \xA1El cansancio ha terminado confundiendo a {POKEMON}!",
    end: "  \xA1{POKEMON} ya no est\xE1 confuso!",
    endFromItem: "  \xA1{POKEMON} se ha librado de la confusi\xF3n gracias {ITEM:a:definite:classified}!",
    alreadyStarted: "  \xA1{POKEMON} ya est\xE1 confuso!",
    activate: "  \xA1{POKEMON} est\xE1 confuso!",
    damage: "\xA1Est\xE1 tan confuso que se ha herido a s\xED mismo!"
  },
  drain: {
    heal: "  \xA1La energ\xEDa de {SOURCE} ha sido absorbida!"
  },
  flinch: {
    cant: "\xA1{POKEMON} se ha amedrentado y no puede lanzar ning\xFAn ataque!"
  },
  heal: {
    fail: "  \xA1Los PS de {POKEMON} est\xE1n al m\xE1ximo!"
  },
  healreplacement: {
    activate: "  \xA1{POKEMON} restaurar\xE1 la salud de su relevo gracias al Poder Z!"
  },
  nopp: {
    cant: "\xA1{POKEMON} ha usado **{MOVE}**!\n  \xA1Pero no le quedan m\xE1s PP para ejecutar ese movimiento!"
  },
  recharge: {
    cant: "\xA1{POKEMON} necesita recuperarse de su ataque!"
  },
  recoil: {
    damage: "  \xA1{POKEMON} tambi\xE9n se ha hecho da\xF1o!"
  },
  unboost: {
    fail: "  \xA1{STAT:definite:capitalize} de {POKEMON} no {INFLECT:STAT:s=ha:p=han} disminuido!",
    // per-stat form; SV es_common:6483 "¡El Ataque de X no ha disminuido!"
    failNoStat: "  \xA1Las caracter\xEDsticas de {POKEMON} no han disminuido!"
    // SV es_common:6479
  },
  struggle: {
    activate: "  \xA1A {POKEMON} no le quedan m\xE1s movimientos!"
  },
  trapped: {
    start: "  \xA1{POKEMON} ya no puede escapar!"
  },
  dynamax: {
    start: null,
    // NEEDS TRANSLATION
    end: null,
    // NEEDS TRANSLATION
    block: "  \xA1La energ\xEDa Dinamax ha bloqueado el movimiento!",
    fail: "  {POKEMON} ha negado con la cabeza. Parece que no puede usar ese movimiento."
  },
  // weather
  sandstorm: {
    weatherName: "Tormenta de arena",
    start: "  \xA1Se ha desatado una tormenta de arena!",
    end: "  \xA1La tormenta de arena ha amainado!",
    upkeep: "  (La tormenta de arena arrecia...)",
    damage: "  \xA1La tormenta de arena zarandea a {POKEMON}!"
  },
  sunnyday: {
    weatherName: "Sol",
    start: "  \xA1El sol pega fuerte!",
    end: "  \xA1El sol vuelve a brillar como siempre!",
    upkeep: "  (Hace mucho sol...)"
  },
  raindance: {
    weatherName: "Lluvia",
    start: "  \xA1Ha empezado a llover!",
    end: "  \xA1Ha dejado de llover!",
    upkeep: "  (Sigue lloviendo...)"
  },
  hail: {
    weatherName: "Granizo",
    start: "  \xA1Ha empezado a granizar!",
    end: "  \xA1Ha dejado de granizar!",
    upkeep: "  (\xA1El granizo cae con violencia!)",
    damage: "  \xA1El granizo golpea a {POKEMON}!"
  },
  snowscape: {
    weatherName: "Nieve",
    start: "  \xA1Ha empezado a nevar!",
    end: "  \xA1Ha dejado de nevar!",
    upkeep: "  (\xA1La nevada cae con fuerza!)"
  },
  desolateland: {
    weatherName: "Sol abrasador",
    start: "  \xA1El sol que hace ahora es realmente abrasador!",
    end: "  \xA1El sol vuelve a brillar como siempre!",
    block: "  \xA1El calor abrasador se mantiene sin perder un \xE1pice de intensidad!",
    blockMove: "  El sol brilla con tanta intensidad que el agua se evapora, lo que afecta a los movimientos de tipo Agua."
  },
  primordialsea: {
    weatherName: "Diluvio",
    start: "  \xA1Ha empezado a diluviar!",
    end: "  Ha dejado de diluviar.",
    block: "  \xA1No parece que vaya a dejar de diluviar!",
    blockMove: "  \xA1El diluvio impide todos los ataques de tipo Fuego!"
  },
  deltastream: {
    weatherName: "Turbulencias",
    start: "  \xA1Las misteriosas turbulencias protegen a los Pok\xE9mon de tipo Volador!",
    end: "  Las misteriosas turbulencias han amainado.",
    activate: "  \xA1Las misteriosas turbulencias aten\xFAan el ataque!",
    block: "  \xA1Las misteriosas turbulencias contin\xFAan sin cesar!"
  },
  // terrain
  electricterrain: {
    start: "  \xA1Se ha formado un campo de corriente el\xE9ctrica en el terreno de combate!",
    end: "  El campo de corriente el\xE9ctrica ha desaparecido.",
    block: "  \xA1El campo el\xE9ctrico ha protegido a {POKEMON}!"
  },
  grassyterrain: {
    start: "  \xA1El terreno de combate se ha cubierto de hierba!",
    end: "  La hierba ha desaparecido.",
    heal: "  \xA1{POKEMON} ha recuperado PS!"
  },
  mistyterrain: {
    start: "  \xA1La niebla ha envuelto el terreno de combate!",
    end: "  La niebla se ha disipado.",
    block: "  \xA1El campo de niebla ha protegido a {POKEMON}!"
  },
  psychicterrain: {
    start: "  \xA1El terreno de combate se ha vuelto muy extra\xF1o!",
    end: "  Ha desaparecido la extra\xF1a sensaci\xF3n que se percib\xEDa en el terreno de combate.",
    block: "  \xA1El campo ps\xEDquico ha protegido a {POKEMON}!"
  },
  // field effects
  gravity: {
    start: "  \xA1La gravedad se ha incrementado!",
    end: "  La gravedad ha vuelto a su estado normal.",
    cant: "\xA1{POKEMON} no puede usar {MOVE} debido a la fuerza de la gravedad!",
    activate: "\xA1{POKEMON} no ha podido mantenerse en el aire debido al efecto de la gravedad!"
  },
  magicroom: {
    start: "  \xA1Se ha creado un espacio en el que todos los objetos de los Pok\xE9mon quedan inutilizados!",
    end: "  Los efectos de Zona M\xE1gica sobre los objetos de los Pok\xE9mon han desaparecido."
  },
  mudsport: {
    start: "  \xA1La potencia de los movimientos de tipo El\xE9ctrico ha disminuido!",
    end: "  Chapoteo Lodo ha dejado de surtir efecto."
  },
  trickroom: {
    start: "  \xA1{POKEMON} ha alterado las dimensiones!",
    end: "  Se han restaurado las dimensiones alteradas."
  },
  watersport: {
    start: "  \xA1La potencia de los movimientos de tipo Fuego ha disminuido!",
    end: "  Hidrochorro ha dejado de surtir efecto."
  },
  wonderroom: {
    start: "  \xA1Se ha creado un espacio en el que la Defensa y la Defensa Especial se invierten!",
    end: "  Los efectos de Zona Extra\xF1a sobre la Defensa y la Defensa Especial han desaparecido."
  },
  // misc
  crash: {
    damage: "  \xA1{POKEMON} ha fallado y se ha ca\xEDdo al suelo!"
  }
};
//# sourceMappingURL=default.js.map
