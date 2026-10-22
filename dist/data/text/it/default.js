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
    opposingPokemon: "{NICKNAME} avversario",
    fullName: "{NICKNAME} ({SPECIES})",
    team: "la tua squadra",
    opposingTeam: "la squadra avversaria",
    party: "i Pok\xE9mon alleati",
    opposingParty: null,
    // NEEDS TRANSLATION
    turn: null,
    // NEEDS TRANSLATION
    switchIn: "{TRAINER:definite:capitalize} manda in campo {FULLNAME}!",
    switchInOwn: "Avanti, {FULLNAME}!",
    switchOut: "{TRAINER:definite:capitalize} ritira {NICKNAME} dalla lotta!",
    switchOutOwn: "{NICKNAME}, rientra!",
    drag: "{FULLNAME} \xE8 trascinato nella lotta!",
    faint: "{POKEMON} non ha pi\xF9 energie!",
    swap: "{POKEMON} e {TARGET} si scambiano di posto!",
    swapCenter: "{POKEMON} passa in prima linea!",
    // Multi Battles only
    canDynamax: "  {TRAINER} ora pu\xF2 usare il Dynamax!",
    canDynamaxOwn: "  L\u2019energia Dynamax avvolge {TRAINER}!",
    zEffect: "  {POKEMON} usa una mossa Z sprigionando tutta la sua potenza!",
    move: "{POKEMON} usa **{MOVE}**!",
    abilityActivation: "[{ABILITY} di {POKEMON}]",
    mega: "  {ITEM:definite:capitalize} di {POKEMON} reagisce alla Pietrachiave di {TRAINER}!",
    megaNoItem: "  {POKEMON} reagisce alla Pietrachiave di {TRAINER}!",
    megaGen6: "  {ITEM:definite:capitalize} di {POKEMON} reagisce al Megabracciale di {TRAINER}!",
    transformMega: "{POKEMON} si evolve in Mega{SPECIES}!",
    primal: "{POKEMON} si \xE8 archeorisvegliato! \xC8 tornato alla sua forma originaria!",
    zPower: "  Il Potere Z circonda {POKEMON} come un\u2019aura!",
    zBroken: "  La protezione fallisce! {POKEMON} subisce dei danni!",
    terastallize: null,
    // NEEDS TRANSLATION
    // in case the different default messages didn't make it obvious, the difference
    // is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
    // message happens AFTER "Pokemon used Move!"
    cant: "{POKEMON} non pu\xF2 usare {MOVE}!",
    cantNoMove: null,
    // NEEDS TRANSLATION
    fail: "  Ma fallisce!",
    // n.b. this is the default message for in-battle forme changes
    // for the move Transform and ability Imposter, see the entry for the move Transform
    transform: "{POKEMON} si \xE8 trasformato!",
    typeChange: "  {POKEMON} \xE8 diventato di tipo {TYPE}!",
    typeChangeFromEffect: "  {EFFECT} di {POKEMON} lo ha reso di tipo {TYPE}!",
    typeAdd: "  Adesso {POKEMON} \xE8 anche di tipo {TYPE}!",
    start: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON} si \xE8 liberato da {EFFECT}!",
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
    changeAbility: "  L\u2019abilit\xE0 di {POKEMON} \xE8 ora {ABILITY}!",
    addItem: "  {POKEMON} ottiene {ITEM:indefinite:classified}!",
    takeItem: "  {POKEMON} ruba {ITEM:definite:classified} di {SOURCE}!",
    eatItem: null,
    // NEEDS TRANSLATION
    useGem: "  {ITEM:definite:capitalize:classified} incrementa la potenza di {MOVE}!",
    eatItemWeaken: "  I danni inflitti {POKEMON:a} vengono ridotti d{ITEM:a:definite:classified}!",
    removeItem: null,
    // NEEDS TRANSLATION
    activateItem: null,
    // NEEDS TRANSLATION
    activateWeaken: "  I danni inflitti {POKEMON:a} vengono ridotti d{ITEM:a:definite:classified}!",
    damage: "  ({POKEMON} \xE8 ferito!)",
    damagePercentage: null,
    // NEEDS TRANSLATION
    damageFromPokemon: "  {ITEM:definite:capitalize} di {SOURCE} ferisc{INFLECT:ITEM:s=e:p=ono} {POKEMON}!",
    damageFromItem: "  {POKEMON} subisce dei danni a causa {ITEM:di:definite}!",
    damageFromPartialTrapping: "  {POKEMON} subisce i danni della mossa {MOVE}!",
    heal: "  {POKEMON} ha recuperato dei PS!",
    healFromZEffect: "  Il Potere Z fa recuperare PS {POKEMON:a}!",
    healFromEffect: null,
    // NEEDS TRANSLATION
    boost: "  {STAT:definite:capitalize} di {POKEMON} aumenta!",
    boost2: "  {STAT:definite:capitalize} di {POKEMON} aumenta di molto!",
    boost3: "  {STAT:definite:capitalize} di {POKEMON} aumenta di moltissimo!",
    boost0: "  {STAT:definite:capitalize} di {POKEMON} non pu\xF2 aumentare di pi\xF9!",
    boostFromItem: "  Con {ITEM}, {STAT} di {POKEMON} sale!",
    boost2FromItem: "  Con {ITEM}, {STAT} di {POKEMON} sale di molto!",
    boost3FromItem: "  {STAT:definite:capitalize} di {POKEMON} aumenta moltissimo grazie {ITEM:a:definite}!",
    boostFromZEffect: "  {STAT:definite:capitalize} di {POKEMON} aumenta grazie al Potere Z!",
    boost2FromZEffect: "  {STAT:definite:capitalize} di {POKEMON} aumenta di molto grazie al Potere Z!",
    boost3FromZEffect: "  {STAT:definite:capitalize} di {POKEMON} aumenta moltissimo grazie al Potere Z!",
    boostMultipleFromZEffect: "  Le statistiche di {POKEMON} aumentano grazie al Potere Z!",
    unboost: "  {STAT:definite:capitalize} di {POKEMON} diminuisce!",
    unboost2: "  {STAT:definite:capitalize} di {POKEMON} diminuisce di molto!",
    unboost3: "  {STAT:definite:capitalize} di {POKEMON} cala drasticamente!",
    unboost0: "  {STAT:definite:capitalize} di {POKEMON} non pu\xF2 diminuire di pi\xF9!",
    unboostFromItem: null,
    // NEEDS TRANSLATION
    unboost2FromItem: null,
    // NEEDS TRANSLATION
    unboost3FromItem: null,
    // NEEDS TRANSLATION
    swapBoost: "  {POKEMON} scambia con il bersaglio le modifiche alle statistiche!",
    swapOffensiveBoost: "  {POKEMON} scambia con il bersaglio le modifiche ad Attacco e Attacco Speciale!",
    swapDefensiveBoost: "  {POKEMON} scambia con il bersaglio le modifiche a Difesa e Difesa Speciale!",
    copyBoost: "  {POKEMON} copia le modifiche alle statistiche di {TARGET}!",
    clearBoost: "  Le statistiche di {POKEMON} tornano alla normalit\xE0!",
    clearBoostFromZEffect: "  Le statistiche di {POKEMON} che erano diminuite tornano alla normalit\xE0 grazie al Potere Z!",
    invertBoost: "  Le modifiche alle statistiche di {POKEMON} vengono invertite!",
    clearAllBoost: "  Tutte le modifiche alle statistiche sono state annullate!",
    superEffective: "  \xC8 superefficace!",
    superEffectiveSpread: "  \xC8 superefficace su {POKEMON}!",
    resisted: "  Non \xE8 molto efficace...",
    resistedSpread: "  Non \xE8 molto efficace su {POKEMON}...",
    // this is official text meaning 4x effective. do not QC this
    extremelyEffective: "  \xC8 iperefficace!!",
    extremelyEffectiveSpread: "  \xC8 iperefficace su {POKEMON}!!",
    // this is official text meaning 1/4x effective. do not QC this
    mostlyIneffective: "  Non \xE8 quasi per niente efficace...",
    mostlyIneffectiveSpread: "  Non \xE8 quasi per niente efficace su {POKEMON}...",
    crit: "  Brutto colpo!",
    critSpread: "  {POKEMON} subisce un brutto colpo!",
    immune: "  Non ha effetto su {POKEMON}...",
    immuneNoPokemon: "  Ma \xE8 inefficace!",
    immuneOHKO: "  {POKEMON} \xE8 incolume!",
    miss: "  {POKEMON} evita l\u2019attacco!",
    missNoPokemon: "  L'attacco di {SOURCE} fallisce!",
    center: "  Centramento!",
    noTarget: "  Ma il Pok\xE9mon non c'\xE8...",
    ohko: "  \xC8 un colpo da KO!",
    combine: "  Formidabile! Due mosse che diventano una! \xC8 una mossa combinata!",
    hitCount: "  Colpi inflitti: {NUMBER}!"
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
    start: "  {POKEMON} \xE8 stato scottato!",
    startFromItem: "  {POKEMON} \xE8 stato scottato d{ITEM:a:definite:classified}!",
    alreadyStarted: "  {POKEMON} \xE8 gi\xE0 scottato.",
    end: "  {POKEMON} guarisce dalla scottatura!",
    endFromItem: "  {POKEMON} guarisce dalla scottatura grazie {ITEM:a:definite}!",
    damage: "  {POKEMON} soffre per la scottatura!"
  },
  frz: {
    start: "  {POKEMON} \xE8 stato congelato!",
    alreadyStarted: "  {POKEMON} \xE8 gi\xE0 congelato.",
    end: "  {POKEMON} non \xE8 pi\xF9 congelato!",
    endFromItem: "  {POKEMON} si \xE8 scongelato grazie {ITEM:a:definite:classified}!",
    endFromMove: "  {MOVE} di {POKEMON} scioglie il ghiaccio!",
    cant: "{POKEMON} \xE8 congelato! Non pu\xF2 agire!"
  },
  par: {
    start: "  {POKEMON} \xE8 stato paralizzato! Forse non riuscir\xE0 ad agire!",
    alreadyStarted: "  {POKEMON} \xE8 gi\xE0 paralizzato!",
    end: "  {POKEMON} guarisce dalla paralisi!",
    endFromItem: "  {POKEMON} guarisce dalla paralisi grazie {ITEM:a:definite:classified}!",
    cant: "{POKEMON} \xE8 paralizzato! Non pu\xF2 agire!"
  },
  psn: {
    start: "  {POKEMON} \xE8 stato avvelenato!",
    alreadyStarted: "  {POKEMON} \xE8 gi\xE0 avvelenato.",
    end: "  {POKEMON} guarisce dall\u2019avvelenamento!",
    endFromItem: "  {POKEMON} guarisce dall\u2019avvelenamento grazie {ITEM:a:definite}!",
    damage: "  Il veleno ha effetto su {POKEMON}!"
  },
  tox: {
    start: "  {POKEMON} \xE8 stato iperavvelenato!",
    startFromItem: "  {POKEMON} \xE8 stato iperavvelenato d{ITEM:a:definite:classified}!",
    end: "#psn",
    endFromItem: "#psn",
    alreadyStarted: "#psn",
    damage: "#psn"
  },
  slp: {
    start: "  {POKEMON} si \xE8 addormentato!",
    startFromRest: "  {POKEMON} ha recuperato le energie durante il sonno!",
    alreadyStarted: "  {POKEMON} sta gi\xE0 dormendo!",
    end: "  {POKEMON} si \xE8 svegliato!",
    endFromItem: "  {POKEMON} si \xE8 svegliato grazie {ITEM:a:definite:classified}!",
    cant: "{POKEMON} dorme."
  },
  // misc effects
  confusion: {
    start: "  {POKEMON} entra in stato di confusione!",
    startFromFatigue: "  {POKEMON} \xE8 confuso per la fatica!",
    end: "  {POKEMON} non \xE8 pi\xF9 confuso!",
    endFromItem: "  {POKEMON} si libera dalla confusione grazie {ITEM:a:definite:classified}!",
    alreadyStarted: "  {POKEMON} \xE8 gi\xE0 confuso!",
    activate: "  {POKEMON} \xE8 confuso!",
    damage: "\xC8 cos\xEC confuso da colpirsi da solo!"
  },
  drain: {
    heal: "  Viene prelevata energia da {SOURCE}!"
  },
  flinch: {
    cant: "{POKEMON} tentenna! Non pu\xF2 agire!"
  },
  heal: {
    fail: "  {POKEMON} ha gi\xE0 tutti i PS!"
  },
  healreplacement: {
    activate: "  {POKEMON} fa recuperare PS al Pok\xE9mon che entra in campo grazie al Potere Z!"
  },
  nopp: {
    cant: "{POKEMON} usa **{MOVE}**!\n  Ma non ha PP per sferrare la mossa!"
  },
  recharge: {
    cant: "{POKEMON} deve ricaricarsi!"
  },
  recoil: {
    damage: "  {POKEMON} ha subito il contraccolpo!"
  },
  unboost: {
    fail: "  La diminuzione {STAT:di:definite} di {POKEMON} \xE8 stata evitata!",
    // per-stat form; Champions btl_set RankdownFail_ATK "La diminuzione dell’Attacco di X è stata evitata!"
    failNoStat: "  La diminuzione delle statistiche di {POKEMON} \xE8 stata evitata!"
    // SV it_common:6479
  },
  struggle: {
    activate: "  {POKEMON} non ha pi\xF9 mosse da sferrare!"
  },
  trapped: {
    start: "  {POKEMON} non pu\xF2 pi\xF9 scappare!"
  },
  dynamax: {
    start: null,
    // NEEDS TRANSLATION
    end: null,
    // NEEDS TRANSLATION
    block: "  La mossa \xE8 stata vanificata dalla potenza del fenomeno Dynamax!",
    fail: "  {POKEMON} scuote il capo. Sembra che non riesca a usare questa mossa..."
  },
  // weather
  sandstorm: {
    weatherName: "Tempesta di sabbia",
    start: "  Inizia una tempesta di sabbia!",
    end: "  La tempesta di sabbia cessa!",
    upkeep: "  (La tempesta di sabbia imperversa!)",
    damage: "  La tempesta di sabbia infligge danni {POKEMON:a}!"
  },
  sunnyday: {
    weatherName: "Sole intenso",
    start: "  La luce solare diventa intensa!",
    end: "  La luce solare torna normale!",
    upkeep: "  (La luce solare \xE8 fortissima!)"
  },
  raindance: {
    weatherName: "Pioggia",
    start: "  Inizia a piovere!",
    end: "  Smette di piovere!",
    upkeep: "  (Continua a piovere.)"
  },
  hail: {
    weatherName: "Grandine",
    start: "  Inizia a grandinare!",
    end: "  Smette di grandinare!",
    upkeep: "  (La grandine imperversa!)",
    damage: "  La grandine infligge danni a {POKEMON}!"
  },
  snowscape: {
    weatherName: "Neve",
    start: "  Inizia a nevicare!",
    end: "  Smette di nevicare!",
    upkeep: "  (La neve imperversa!)"
  },
  desolateland: {
    weatherName: "Sole accecante",
    start: "  La luce solare diventa accecante!",
    end: "  La luce solare torna normale!",
    block: "  La luce accecante non si attenua!",
    blockMove: "  La luce solare accecante neutralizza le mosse di tipo Acqua!"
  },
  primordialsea: {
    weatherName: "Acquazzone",
    start: "  \xC8 scoppiato un acquazzone!",
    end: "  Smette di piovere!",
    block: "  L\u2019acquazzone non si placa!",
    blockMove: "  L\u2019acquazzone neutralizza le mosse di tipo Fuoco!"
  },
  deltastream: {
    weatherName: "Vento misterioso",
    start: "  Una corrente d\u2019aria misteriosa protegge i Pok\xE9mon di tipo Volante!",
    end: "  La corrente d\u2019aria misteriosa si placa!",
    activate: "  La corrente misteriosa indebolisce l\u2019attacco!",
    block: "  La corrente misteriosa non si placa!"
  },
  // terrain
  electricterrain: {
    start: "  Ai piedi dei Pok\xE9mon si accumula dell\u2019elettricit\xE0.",
    end: "  L\u2019elettricit\xE0 svanisce.",
    block: "  Il Campo Elettrico protegge {POKEMON}!"
  },
  grassyterrain: {
    start: "  Ai piedi dei Pok\xE9mon cresce rigogliosa l\u2019erba.",
    end: "  L\u2019erba sparisce.",
    heal: "  {POKEMON} ha recuperato dei PS!"
  },
  mistyterrain: {
    start: "  Ai piedi dei Pok\xE9mon si addensa la nebbia.",
    end: "  La nebbia si dissolve.",
    block: "  Il Campo Nebbioso protegge {POKEMON}!"
  },
  psychicterrain: {
    start: "  Nel campo si avverte una strana sensazione...",
    end: "  La strana sensazione nel campo \xE8 svanita!",
    block: "  Il Campo Psichico protegge {POKEMON}!"
  },
  // field effects
  gravity: {
    start: "  La gravit\xE0 si intensifica!",
    end: "  La gravit\xE0 torna normale!",
    cant: "L\u2019aumento di gravit\xE0 impedisce {POKEMON:a} di usare {MOVE}!",
    activate: "{POKEMON} non riesce a rimanere in aria a causa della gravit\xE0 alterata!"
  },
  magicroom: {
    start: "  \xC8 stata creata una nuova dimensione in cui gli strumenti dati ai Pok\xE9mon non hanno effetto!",
    end: "  La nuova dimensione svanisce e gli strumenti tornano ad avere effetto!"
  },
  mudsport: {
    start: "  La potenza delle mosse di tipo Elettro diminuisce!",
    end: "  L\u2019effetto di Fangata \xE8 svanito!"
  },
  trickroom: {
    start: "  {POKEMON} crea una dimensione distorta!",
    end: "  La dimensione distorta torna alla normalit\xE0!"
  },
  watersport: {
    start: "  La potenza delle mosse di tipo Fuoco diminuisce!",
    end: "  L\u2019effetto di Docciascudo \xE8 svanito!"
  },
  wonderroom: {
    start: "  \xC8 stata creata una nuova dimensione in cui Difesa e Difesa Speciale vengono scambiate!",
    end: "  La nuova dimensione svanisce: Difesa e Difesa Speciale tornano alla normalit\xE0!"
  },
  // misc
  crash: {
    damage: "  {POKEMON} si sbilancia e si schianta!"
  }
};
//# sourceMappingURL=default.js.map
