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
    opposingPokemon: "{NICKNAME} (Gegner)",
    fullName: "{NICKNAME} ({SPECIES})",
    team: "die Pok\xE9mon auf deiner Seite",
    opposingTeam: "die gegnerischen Pok\xE9mon",
    party: null,
    // NEEDS TRANSLATION
    opposingParty: null,
    // NEEDS TRANSLATION
    turn: null,
    // NEEDS TRANSLATION
    switchIn: "{TRAINER:definite:nominative:capitalize} schickt {FULLNAME} in den Kampf!",
    switchInOwn: "Los, {FULLNAME}!",
    switchOut: "{TRAINER:definite:nominative:capitalize} hat {NICKNAME} zur\xFCckgerufen!",
    switchOutOwn: "{NICKNAME}, komm zur\xFCck!",
    drag: "{FULLNAME} wurde ausgew\xE4hlt!",
    faint: "{POKEMON} wurde besiegt!",
    swap: "{POKEMON} und {TARGET} haben den Platz getauscht!",
    swapCenter: "{POKEMON} ist in die Mitte gewechselt!",
    // Multi Battles only
    canDynamax: "  {TRAINER} kann nun das Dynamax-Ph\xE4nomen ausl\xF6sen!",
    canDynamaxOwn: "  Bei {TRAINER} hat sich Dynamax-Energie angesammelt!",
    zEffect: "  {POKEMON} nimmt all seine Kraft zusammen und setzt eine Z-Attacke ein!",
    move: "{POKEMON} setzt **{MOVE}** ein!",
    abilityActivation: "[{ABILITY} von {POKEMON}]",
    mega: "  {ITEM} von {POKEMON} reagiert auf Schl\xFCssel-Stein von {TRAINER}!",
    megaNoItem: "  {POKEMON} reagiert auf Schl\xFCssel-Stein von {TRAINER}!",
    megaGen6: "  {ITEM} von {POKEMON} reagiert auf Mega-Armreif von {TRAINER}!",
    transformMega: "{POKEMON} hat sich zu Mega-{SPECIES} entwickelt!",
    primal: "{POKEMON} hat eine Protomorphose durchgef\xFChrt und seine urzeitliche Form zur\xFCckerlangt!",
    zPower: "  {POKEMON} h\xFCllt sich in Z-Kraft!",
    zBroken: "  {POKEMON} konnte den Angriff nicht abwehren und erleidet Schaden!",
    terastallize: null,
    // NEEDS TRANSLATION
    // in case the different default messages didn't make it obvious, the difference
    // is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
    // message happens AFTER "Pokemon used Move!"
    cant: "{POKEMON} kann {MOVE} nicht einsetzen!",
    cantNoMove: null,
    // NEEDS TRANSLATION
    fail: "  Es ist fehlgeschlagen!",
    // n.b. this is the default message for in-battle forme changes
    // for the move Transform and ability Imposter, see the entry for the move Transform
    transform: "{POKEMON} verwandelt sich!",
    typeChange: "  {POKEMON} nimmt den Typ {TYPE} an!",
    typeChangeFromEffect: "  {EFFECT} von {POKEMON} macht es zu einem {TYPE}-Typ!",
    typeAdd: "  {POKEMON} nimmt zus\xE4tzlich den Typ {TYPE} an!",
    start: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON} wurde von {EFFECT} befreit!",
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
    changeAbility: "  {POKEMON} nimmt die F\xE4higkeit {ABILITY} an!",
    addItem: "  {POKEMON} erh\xE4lt das Item {ITEM}!",
    takeItem: "  {POKEMON} hat {SOURCE} das Item {ITEM} geklaut!",
    eatItem: null,
    // NEEDS TRANSLATION
    useGem: "  {ITEM} erh\xF6ht die St\xE4rke von {MOVE}!",
    eatItemWeaken: "  {ITEM} reduziert den Schaden gegen {POKEMON}!",
    removeItem: null,
    // NEEDS TRANSLATION
    activateItem: null,
    // NEEDS TRANSLATION
    activateWeaken: "  {ITEM} reduziert den Schaden gegen {POKEMON}!",
    damage: "  ({POKEMON} wurde Schaden zugef\xFCgt!)",
    damagePercentage: null,
    // NEEDS TRANSLATION
    damageFromPokemon: "  {POKEMON} wird durch das Item {ITEM} von {SOURCE} verletzt!",
    damageFromItem: "  {POKEMON} wurde durch das Item {ITEM} verletzt!",
    damageFromPartialTrapping: "  {POKEMON} wurde durch {MOVE} verletzt!",
    heal: "  KP von {POKEMON} wurden aufgefrischt!",
    healFromZEffect: "  {POKEMON} hat durch Z-Kraft seine KP aufgefrischt!",
    healFromEffect: "  {POKEMON} f\xFCllt KP mit Hilfe von {EFFECT} auf!",
    boost: "  {STAT} von {POKEMON} steigt!",
    boost2: "  {STAT} von {POKEMON} steigt stark!",
    boost3: "  {STAT} von {POKEMON} steigt drastisch!",
    boost0: "  {STAT} von {POKEMON} kann nicht weiter steigen!",
    boostFromItem: null,
    // NEEDS TRANSLATION
    boost2FromItem: null,
    // NEEDS TRANSLATION
    boost3FromItem: "  {ITEM} von {POKEMON} erh\xF6ht {STAT:definite:accusative} drastisch!",
    boostFromZEffect: "  {STAT} von {POKEMON} wurde durch Z-Kraft erh\xF6ht!",
    boost2FromZEffect: "  {STAT} von {POKEMON} wurde durch Z-Kraft stark erh\xF6ht!",
    boost3FromZEffect: "  {STAT} von {POKEMON} wurde durch Z-Kraft drastisch erh\xF6ht!",
    boostMultipleFromZEffect: "  Mehrere Statuswerte von {POKEMON} wurden durch Z-Kraft erh\xF6ht!",
    unboost: "  {STAT} von {POKEMON} sinkt!",
    unboost2: "  {STAT} von {POKEMON} sinkt stark!",
    unboost3: "  {STAT} von {POKEMON} sinkt drastisch!",
    unboost0: "  {STAT} von {POKEMON} kann nicht weiter sinken!",
    unboostFromItem: null,
    // NEEDS TRANSLATION
    unboost2FromItem: null,
    // NEEDS TRANSLATION
    unboost3FromItem: null,
    // NEEDS TRANSLATION
    swapBoost: "  {POKEMON} tauscht die Statusver\xE4nderungen mit dem Ziel!",
    swapOffensiveBoost: "  {POKEMON} tauscht \xC4nderungen an Angriff und Spezial-Angriff mit dem Ziel!",
    swapDefensiveBoost: "  {POKEMON} tauscht \xC4nderungen an Verteidigung und Spezial-Verteidigung mit dem Ziel!",
    copyBoost: "  {POKEMON} kopiert die Statuswert\xE4nderungen von {TARGET}!",
    clearBoost: "  Die Statuswert\xE4nderungen von {POKEMON} wurden aufgehoben!",
    clearBoostFromZEffect: "  Gesenkte Statuswerte von {POKEMON} wurden durch Z-Kraft zur\xFCckgesetzt!",
    invertBoost: "  Alle Statuswert\xE4nderungen von {POKEMON} wurden invertiert!",
    clearAllBoost: "  Alle Statuswert\xE4nderungen wurden aufgehoben!",
    superEffective: "  Das ist sehr effektiv!",
    superEffectiveSpread: "  Das ist sehr effektiv gegen {POKEMON}!",
    resisted: "  Das ist nicht sehr effektiv...",
    resistedSpread: "  Das ist nicht sehr effektiv gegen {POKEMON}...",
    // this is official text meaning 4x effective. do not QC this
    extremelyEffective: "  Das ist extrem effektiv!!",
    extremelyEffectiveSpread: "  Das ist extrem effektiv gegen {POKEMON}!!",
    // this is official text meaning 1/4x effective. do not QC this
    mostlyIneffective: "  Das ist extrem ineffektiv...",
    mostlyIneffectiveSpread: "  Das ist extrem ineffektiv gegen {POKEMON}...",
    crit: "  Ein Volltreffer!",
    critSpread: "  Gegen {POKEMON} wurde ein Volltreffer gelandet!",
    immune: "  Es hat keine Wirkung auf {POKEMON}...",
    immuneNoPokemon: "  Es ist wirkungslos!",
    immuneOHKO: "  {POKEMON} ist unversehrt!",
    miss: "  Die Attacke hat {POKEMON} verfehlt!",
    missNoPokemon: "  Attacke von {SOURCE} geht daneben!",
    center: "  Mittig setzen!",
    noTarget: "  Aber da ist gar kein Ziel...",
    ohko: "  Ein K.O.-Treffer!",
    combine: "  Zwei Attacken bilden zusammen eine Kombi-Attacke!",
    hitCount: "  {NUMBER}-mal getroffen!"
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
    start: "  {POKEMON} erleidet Verbrennungen!",
    startFromItem: "  {POKEMON} erleidet Verbrennungen durch das Item {ITEM}!",
    alreadyStarted: "  {POKEMON} leidet bereits unter Verbrennungen!",
    end: "  Die Verbrennungen von {POKEMON} wurden geheilt!",
    endFromItem: "  {ITEM} von {POKEMON} heilt die Verbrennungen!",
    damage: "  Die Verbrennungen schaden {POKEMON}!"
  },
  frz: {
    start: "  {POKEMON} erstarrt zu Eis!",
    alreadyStarted: "  {POKEMON} ist bereits eingefroren!",
    end: "  {POKEMON} wurde aufgetaut!",
    endFromItem: "  {ITEM} bewirkt, dass {POKEMON} auftaut!",
    endFromMove: "  Das Eis wurde durch {MOVE} von {POKEMON} aufgetaut!",
    cant: "{POKEMON} ist eingefroren und kann nicht handeln!"
  },
  par: {
    start: "  {POKEMON} ist paralysiert! Es kann eventuell nicht handeln!",
    alreadyStarted: "  {POKEMON} ist bereits paralysiert!",
    end: "  Die Paralyse von {POKEMON} wurde aufgehoben!",
    endFromItem: "  {ITEM} von {POKEMON} heilt die Paralyse!",
    cant: "{POKEMON} ist paralysiert! Es kann nicht angreifen!"
  },
  psn: {
    start: "  {POKEMON} wurde vergiftet!",
    alreadyStarted: "  {POKEMON} ist bereits vergiftet!",
    end: "  Die Vergiftung von {POKEMON} wurde geheilt!",
    endFromItem: "  {ITEM} von {POKEMON} heilt die Vergiftung!",
    damage: "  {POKEMON} wird durch Gift verletzt!"
  },
  tox: {
    start: "  {POKEMON} wurde schwer vergiftet!",
    startFromItem: "  {POKEMON} wurde durch das Item {ITEM} schwer vergiftet!",
    end: "#psn",
    endFromItem: "#psn",
    alreadyStarted: "#psn",
    damage: "#psn"
  },
  slp: {
    start: "  {POKEMON} ist eingeschlafen!",
    startFromRest: "  {POKEMON} hat im Schlaf Energie getankt!",
    alreadyStarted: "  {POKEMON} schl\xE4ft bereits!",
    end: "  {POKEMON} ist aufgewacht!",
    endFromItem: "  {ITEM} bewirkt, dass {POKEMON} aufwacht!",
    cant: "{POKEMON} schl\xE4ft tief und fest!"
  },
  // misc effects
  confusion: {
    start: "  {POKEMON} wurde verwirrt!",
    startFromFatigue: "  {POKEMON} ist vor Ersch\xF6pfung verwirrt!",
    end: "  {POKEMON} ist nicht mehr verwirrt!",
    endFromItem: "  {ITEM} von {POKEMON} hebt die Verwirrung auf!",
    alreadyStarted: "  {POKEMON} ist bereits verwirrt!",
    activate: "  {POKEMON} ist verwirrt!",
    damage: "Es hat sich vor Verwirrung selbst verletzt!"
  },
  drain: {
    heal: "  {SOURCE} wurde Energie abgesaugt!"
  },
  flinch: {
    cant: "{POKEMON} ist zur\xFCckgeschreckt und kann nicht handeln!"
  },
  heal: {
    fail: "  {POKEMON} hat volle KP!"
  },
  healreplacement: {
    activate: "  {POKEMON} wird durch Z-Kraft die KP des f\xFCr ihn eingewechselten Mitstreiters auffrischen!"
  },
  nopp: {
    cant: "{POKEMON} setzt **{MOVE}** ein!\n  Es sind keine AP mehr f\xFCr diese Attacke \xFCbrig!"
  },
  recharge: {
    cant: "{POKEMON} kann sich wegen des R\xFCcksto\xDFes durch den Angriff nicht bewegen!"
  },
  recoil: {
    damage: "  {POKEMON} erleidet Schaden durch R\xFCcksto\xDF!"
  },
  unboost: {
    fail: null,
    // NEEDS TRANSLATION
    failNoStat: "  Statuswerte von {POKEMON} sinken nicht!"
    // SV de_common:6479
  },
  struggle: {
    activate: "  {POKEMON} hat keine Attacken mehr \xFCbrig!"
  },
  trapped: {
    start: "  {POKEMON} kann nicht mehr fliehen!"
  },
  dynamax: {
    start: null,
    // NEEDS TRANSLATION
    end: null,
    // NEEDS TRANSLATION
    block: "  Die Wirkung der Attacke wurde durch die Dynamax-Energie blockiert!",
    fail: "  {POKEMON} weigert sich. Es kann diese Attacke wohl nicht einsetzen..."
  },
  // weather
  sandstorm: {
    weatherName: "Sandsturm",
    start: "  Ein Sandsturm kommt auf!",
    end: "  Der Sandsturm legt sich!",
    upkeep: "  (Der Sandsturm tobt!)",
    damage: "  Der Sandsturm f\xFCgt {POKEMON} Schaden zu!"
  },
  sunnyday: {
    weatherName: "Sonne",
    start: "  Das Sonnenlicht wird st\xE4rker!",
    end: "  Das Sonnenlicht verliert an Intensit\xE4t!",
    upkeep: "  (Glei\xDFendes Sonnenlicht!)"
  },
  raindance: {
    weatherName: "Regen",
    start: "  Es f\xE4ngt an zu regnen!",
    end: "  Es h\xF6rt auf zu regnen!",
    upkeep: "  (Es regnet weiter.)"
  },
  hail: {
    weatherName: "Hagelsturm",
    start: "  Es f\xE4ngt an zu hageln!",
    end: "  Es h\xF6rt auf zu hageln!",
    upkeep: "  (Der Hagelsturm tobt!)",
    damage: "  {POKEMON} wird von Hagelk\xF6rnern getroffen!"
  },
  snowscape: {
    weatherName: "Schnee",
    start: "  Es f\xE4ngt an zu schneien!",
    end: "  Es h\xF6rt auf zu schneien!",
    upkeep: "  (Der Schneefall l\xE4sst nicht nach!)"
  },
  desolateland: {
    weatherName: "Glei\xDFende Sonne",
    start: "  Das Sonnenlicht wird sehr viel st\xE4rker!",
    end: "  Das Sonnenlicht verliert an Intensit\xE4t!",
    block: "  Das starke Sonnenlicht l\xE4sst nicht nach!",
    blockMove: "  Das intensive Sonnenlicht l\xE4sst die Wasser-Attacke verdampfen und macht sie wirkungslos!"
  },
  primordialsea: {
    weatherName: "Str\xF6mender Regen",
    start: "  Es f\xE4ngt an, in Str\xF6men zu regnen!",
    end: "  Der str\xF6mende Regen hat aufgeh\xF6rt!",
    block: "  Der str\xF6mende Regen l\xE4sst nicht nach!",
    blockMove: "  Der str\xF6mende Regen l\xF6scht den Angriff vom Typ Feuer und macht ihn wirkungslos!"
  },
  deltastream: {
    weatherName: "Luftstr\xF6mungen",
    start: "  Alle Flug-Pok\xE9mon werden von r\xE4tselhaften Luftstr\xF6mungen gesch\xFCtzt!",
    end: "  Die r\xE4tselhaften Luftstr\xF6mungen haben sich wieder gelegt!",
    activate: "  R\xE4tselhafte Luftstr\xF6mungen haben den Angriff abgeschw\xE4cht!",
    block: "  Die r\xE4tselhaften Luftstr\xF6mungen lassen nicht nach!"
  },
  // terrain
  electricterrain: {
    start: "  Elektrische Energie flie\xDFt durch den Boden!",
    end: "  Das Elektrofeld ist wieder verschwunden!",
    block: "  {POKEMON} wird vom Elektrofeld gesch\xFCtzt!"
  },
  grassyterrain: {
    start: "  Dichtes Gras schie\xDFt aus dem Boden!",
    end: "  Das Grasfeld ist wieder verschwunden!",
    heal: "  KP von {POKEMON} wurden aufgefrischt!"
  },
  mistyterrain: {
    start: "  Am Boden breitet sich dichter Nebel aus!",
    end: "  Das Nebelfeld ist wieder verschwunden!",
    block: "  {POKEMON} wird vom Nebelfeld gesch\xFCtzt!"
  },
  psychicterrain: {
    start: "  Der Boden f\xFChlt sich seltsam an!",
    end: "  Das Psychofeld ist wieder verschwunden!",
    block: "  {POKEMON} wird vom Psychofeld gesch\xFCtzt!"
  },
  // field effects
  gravity: {
    start: "  Die Erdanziehung wurde verst\xE4rkt!",
    end: "  Die Erdanziehung ist wieder normal!",
    cant: "{POKEMON} kann aufgrund von Erdanziehung {MOVE} nicht einsetzen!",
    activate: "{POKEMON} kann aufgrund von Erdanziehung nicht mehr in der Luft bleiben!"
  },
  magicroom: {
    start: "  Es entsteht ein Raum, in dem getragene Items ihre Wirkung verlieren!",
    end: "  Der Magieraum verpufft. Getragene Items erhalten ihre Wirkung zur\xFCck!"
  },
  mudsport: {
    start: "  Die St\xE4rke aller Elektro-Attacken wurde reduziert!",
    end: "  Lehmsuhler h\xF6rt auf zu wirken!"
  },
  trickroom: {
    start: "  {POKEMON} hat die Dimensionen verdreht!",
    end: "  Die verdrehte Dimension ist wieder normal!"
  },
  watersport: {
    start: "  Die St\xE4rke aller Feuer-Attacken wurde reduziert!",
    end: "  Nassmacher h\xF6rt auf zu wirken!"
  },
  wonderroom: {
    start: "  Es entsteht ein Raum, in dem Verteidigung und Spezial-Verteidigung miteinander vertauscht sind!",
    end: "  Der Wunderraum verpufft. Verteidigung und Spezial-Verteidigung werden wieder zur\xFCckgesetzt!"
  },
  // misc
  crash: {
    damage: "  {POKEMON} springt daneben und verletzt sich!"
  }
};
//# sourceMappingURL=default.js.map
