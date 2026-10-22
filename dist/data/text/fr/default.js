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
    opposingPokemon: "{NICKNAME} ennemi",
    fullName: "{NICKNAME} ({SPECIES})",
    team: "votre \xE9quipe",
    opposingTeam: "l\u2019\xE9quipe ennemie",
    party: "les alli\xE9s",
    opposingParty: "l\u2019\xE9quipe ennemie",
    turn: null,
    // NEEDS TRANSLATION
    switchIn: "{TRAINER:definite:capitalize} envoie {FULLNAME} !",
    switchInOwn: "{FULLNAME} ! Go !",
    switchOut: "{TRAINER:definite:capitalize} retire {NICKNAME} !",
    switchOutOwn: "Reviens, {NICKNAME} !",
    drag: "{FULLNAME} est tra\xEEn\xE9 de force au combat !",
    faint: "{POKEMON} est K.O. !",
    swap: "{POKEMON} et {TARGET} \xE9changent leur place !",
    swapCenter: "{POKEMON} s\u2019est d\xE9plac\xE9 au milieu !",
    // Multi Battles only
    canDynamax: "  {TRAINER} est maintenant capable d\u2019utiliser le Dynamax !",
    canDynamaxOwn: "  La puissance du Dynamax entoure {TRAINER} !",
    zEffect: "  {POKEMON} d\xE9ploie toute la puissance de sa Force Z !",
    move: "{POKEMON} utilise **{MOVE}** !",
    abilityActivation: "[{ABILITY} {POKEMON:de}]",
    mega: "  {ITEM:definite:capitalize} {POKEMON:de} r\xE9agit \xE0 la Gemme S\xE9same {TRAINER:de} !",
    megaNoItem: "  {POKEMON} r\xE9agit \xE0 la Gemme S\xE9same de {TRAINER}\u202F!",
    megaGen6: "  {ITEM:definite:capitalize} {POKEMON:de} r\xE9agi{INFLECT:ITEM:s=:p=ssen}t au M\xE9ga-Bracelet {TRAINER:de} !",
    transformMega: "{POKEMON} m\xE9ga-\xE9volue en M\xE9ga-{SPECIES} !",
    primal: "Primo-R\xE9surgence {POKEMON:de} ! Il retrouve son apparence originelle !",
    zPower: "  {POKEMON} d\xE9ploie sa Force Z comme une aura !",
    zBroken: "  {POKEMON} n\u2019arrive pas \xE0 parer toute l\u2019attaque et subit des d\xE9g\xE2ts !",
    terastallize: null,
    // NEEDS TRANSLATION
    // in case the different default messages didn't make it obvious, the difference
    // is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
    // message happens AFTER "Pokemon used Move!"
    cant: "{POKEMON} ne peut pas utiliser la capacit\xE9 {MOVE} !",
    cantNoMove: "{POKEMON} est immobilis\xE9!",
    fail: "  Mais cela \xE9choue !",
    // n.b. this is the default message for in-battle forme changes
    // for the move Transform and ability Imposter, see the entry for the move Transform
    transform: "{POKEMON} se transforme !",
    typeChange: "  {POKEMON} prend le type {TYPE} !",
    typeChangeFromEffect: null,
    // NEEDS TRANSLATION
    typeAdd: "  {POKEMON} gagne le type {TYPE}.",
    start: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON} est lib\xE9r\xE9 de la capacit\xE9 {EFFECT} !",
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
    changeAbility: "  Le talent {POKEMON:de} devient {ABILITY} !",
    addItem: "  {POKEMON} obtient {ITEM:indefinite:classified} !",
    takeItem: "  {POKEMON} vole {ITEM:definite:classified} {SOURCE:de} !",
    eatItem: null,
    // NEEDS TRANSLATION
    useGem: "  {ITEM:definite:capitalize:classified} renforce{INFLECT:ITEM:s=:p=nt} la capacit\xE9 {MOVE} !",
    eatItemWeaken: "  {ITEM:definite:capitalize:classified} r\xE9dui{INFLECT:ITEM:s=:p=sen}t les d\xE9g\xE2ts inflig\xE9s \xE0 {POKEMON} !",
    removeItem: null,
    // NEEDS TRANSLATION
    activateItem: null,
    // NEEDS TRANSLATION
    activateWeaken: "  {ITEM:definite:capitalize:classified} r\xE9dui{INFLECT:ITEM:s=:p=sen}t les d\xE9g\xE2ts inflig\xE9s \xE0 {POKEMON} !",
    damage: "  ({POKEMON} est bless\xE9 !)",
    damagePercentage: null,
    // NEEDS TRANSLATION
    damageFromPokemon: "  {ITEM:definite:capitalize} {SOURCE:de} blesse{INFLECT:ITEM:s=:p=nt} {POKEMON} !",
    damageFromItem: "  {POKEMON} est bless\xE9 par {ITEM:definite} !",
    damageFromPartialTrapping: "  {POKEMON} est bless\xE9 par la capacit\xE9 {MOVE} !",
    heal: "  {POKEMON} r\xE9cup\xE8re des PV !",
    healFromZEffect: "  {POKEMON} utilise la Force Z pour se soigner !",
    healFromEffect: null,
    // NEEDS TRANSLATION
    boost: "  {STAT:definite:capitalize} {POKEMON:de} augmente !",
    boost2: "  {STAT:definite:capitalize} {POKEMON:de} augmente beaucoup !",
    boost3: "  {STAT:definite:capitalize} {POKEMON:de} augmente \xE9norm\xE9ment !",
    boost0: "  {STAT:definite:capitalize} {POKEMON:de} ne peut plus augmenter !",
    boostFromItem: null,
    // NEEDS TRANSLATION
    boost2FromItem: null,
    // NEEDS TRANSLATION
    boost3FromItem: null,
    // NEEDS TRANSLATION
    boostFromZEffect: "  Gr\xE2ce \xE0 la Force Z, {STAT:definite:capitalize} {POKEMON:de} augmente !",
    boost2FromZEffect: "  Gr\xE2ce \xE0 la Force Z, {STAT:definite:capitalize} {POKEMON:de} augmente beaucoup !",
    boost3FromZEffect: "  Gr\xE2ce \xE0 la Force Z, {STAT:definite:capitalize} {POKEMON:de} augmente \xE9norm\xE9ment !",
    boostMultipleFromZEffect: "  {POKEMON} utilise la Force Z pour augmenter ses stats !",
    unboost: "  {STAT:definite:capitalize} {POKEMON:de} baisse !",
    unboost2: "  {STAT:definite:capitalize} {POKEMON:de} baisse beaucoup !",
    unboost3: "  {STAT:definite:capitalize} {POKEMON:de} baisse \xE9norm\xE9ment !",
    unboost0: "  {STAT:definite:capitalize} {POKEMON:de} ne peut plus baisser !",
    unboostFromItem: null,
    // NEEDS TRANSLATION
    unboost2FromItem: null,
    // NEEDS TRANSLATION
    unboost3FromItem: null,
    // NEEDS TRANSLATION
    swapBoost: "  {POKEMON} permute ses changements de stats avec ceux de sa cible !",
    swapOffensiveBoost: "  {POKEMON} permute les changements d\u2019Attaque et d\u2019Attaque Sp\xE9ciale avec ceux de sa cible !",
    swapDefensiveBoost: "  {POKEMON} permute les changements de D\xE9fense et de D\xE9fense Sp\xE9ciale avec ceux de sa cible !",
    copyBoost: "  {POKEMON} copie les changements de stats {TARGET:de} !",
    clearBoost: "  Les stats {POKEMON:de} sont revenues \xE0 la normale !",
    clearBoostFromZEffect: "  {POKEMON} utilise la Force Z pour annuler ses baisses de stats !",
    invertBoost: "  Les changements de stats {POKEMON:de} sont invers\xE9s !",
    clearAllBoost: "  Les changements de stats ont tous \xE9t\xE9 annul\xE9s !",
    superEffective: "  C\u2019est super efficace !",
    superEffectiveSpread: "  C\u2019est super efficace sur {POKEMON} !",
    resisted: "  Ce n\u2019est pas tr\xE8s efficace...",
    resistedSpread: "  Ce n\u2019est pas tr\xE8s efficace sur {POKEMON}...",
    // this is official text meaning 4x effective. do not QC this
    extremelyEffective: "  C\u2019est hyper efficace !!!",
    extremelyEffectiveSpread: "  C\u2019est hyper efficace sur {POKEMON} !!!",
    // this is official text meaning 1/4x effective. do not QC this
    mostlyIneffective: "  Ce n\u2019est vraiment pas tr\xE8s efficace !",
    mostlyIneffectiveSpread: "  Ce n\u2019est vraiment pas tr\xE8s efficace sur {POKEMON} !",
    crit: "  Coup critique !",
    critSpread: "  Coup critique inflig\xE9 \xE0 {POKEMON} !",
    immune: "  \xC7a n\u2019affecte pas {POKEMON}...",
    immuneNoPokemon: "  Mais \xE7a n\u2019a aucun effet !",
    immuneOHKO: "  {POKEMON} n\u2019est pas affect\xE9 !",
    miss: "  {POKEMON} \xE9vite l\u2019attaque !",
    missNoPokemon: "  {SOURCE} rate son attaque!",
    center: "  R\xE9initialisation !",
    noTarget: "  Mais il n'y a pas de cible...",
    ohko: "  K.O. en un coup !",
    combine: "  Les deux capacit\xE9s se sont combin\xE9es !",
    hitCount: "  Touch\xE9 {NUMBER} fois !"
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
    start: "  {POKEMON} est br\xFBl\xE9 !",
    startFromItem: "  {POKEMON} est br\xFBl\xE9 par {ITEM:definite:classified} !",
    alreadyStarted: "  {POKEMON} est d\xE9j\xE0 br\xFBl\xE9.",
    end: "  {POKEMON} n\u2019est plus br\xFBl\xE9 !",
    endFromItem: "  {ITEM:definite:capitalize} {POKEMON:de} le gu\xE9ri{INFLECT:ITEM:s=:p=ssen}t de sa br\xFBlure\u202F!",
    damage: "  {POKEMON} souffre de sa br\xFBlure !"
  },
  frz: {
    start: "  {POKEMON} est gel\xE9 !",
    alreadyStarted: "  {POKEMON} est d\xE9j\xE0 gel\xE9.",
    end: "  {POKEMON} n\u2019est plus gel\xE9 !",
    endFromItem: "  {ITEM:definite:capitalize:classified} {POKEMON:de} le d\xE9g\xE8le{INFLECT:ITEM:s=:p=nt} !",
    endFromMove: "  La glace a fondu gr\xE2ce \xE0 la capacit\xE9 {MOVE} {POKEMON:de} !",
    cant: "{POKEMON} est gel\xE9 ! Il ne peut plus agir !"
  },
  par: {
    start: "  {POKEMON} est paralys\xE9 ! Il aura du mal \xE0 utiliser des capacit\xE9s !",
    alreadyStarted: "  {POKEMON} est d\xE9j\xE0 paralys\xE9.",
    end: "  {POKEMON} n\u2019est plus paralys\xE9 !",
    endFromItem: "  {ITEM:definite:capitalize:classified} {POKEMON:de} le sort{INFLECT:ITEM:s=:p=ent} de sa paralysie !",
    cant: "{POKEMON} est paralys\xE9 ! Il n\u2019a pas pu attaquer !"
  },
  psn: {
    start: "  {POKEMON} est empoisonn\xE9 !",
    alreadyStarted: "  {POKEMON} est d\xE9j\xE0 empoisonn\xE9.",
    end: "  {POKEMON} n\u2019est plus empoisonn\xE9 !",
    endFromItem: "  {ITEM:definite:capitalize} {POKEMON:de} le gu\xE9ri{INFLECT:ITEM:s=:p=ssen}t de son empoisonnement !",
    damage: "  {POKEMON} souffre du poison\u202F!"
  },
  tox: {
    start: "  {POKEMON} est gravement empoisonn\xE9 !",
    startFromItem: "  {POKEMON} est gravement empoisonn\xE9 par {ITEM:definite:classified} !",
    end: "#psn",
    endFromItem: "#psn",
    alreadyStarted: "#psn",
    damage: "#psn"
  },
  slp: {
    start: "  {POKEMON} s\u2019est endormi !",
    startFromRest: "  {POKEMON} a r\xE9cup\xE9r\xE9 en dormant\u202F!",
    alreadyStarted: "  {POKEMON} dort d\xE9j\xE0.",
    end: "  {POKEMON} se r\xE9veille !",
    endFromItem: "  {ITEM:definite:capitalize:classified} {POKEMON:de} le r\xE9veille{INFLECT:ITEM:s=:p=nt} !",
    cant: "{POKEMON} dort profond\xE9ment."
  },
  // misc effects
  confusion: {
    start: "  \xC7a rend {POKEMON} confus !",
    startFromFatigue: "  La fatigue rend {POKEMON} confus !",
    end: "  {POKEMON} n\u2019est plus confus !",
    endFromItem: "  {ITEM:definite:capitalize:classified} {POKEMON:de} le tire{INFLECT:ITEM:s=:p=nt} de sa confusion !",
    alreadyStarted: "  {POKEMON} est d\xE9j\xE0 confus !",
    activate: "  {POKEMON} est confus !",
    damage: "Il se blesse dans sa confusion."
  },
  drain: {
    heal: "  L\u2019\xE9nergie {SOURCE:de} est drain\xE9e !"
  },
  flinch: {
    cant: "{POKEMON} a la trouille ! Il ne peut pas utiliser sa capacit\xE9 !"
  },
  heal: {
    fail: "  Les PV {POKEMON:de} sont au maximum !"
  },
  healreplacement: {
    activate: "  {POKEMON} utilise la Force Z pour soigner un alli\xE9 qui entrera sur le terrain !"
  },
  nopp: {
    cant: "{POKEMON} utilise **{MOVE}** !\n  Mais cette capacit\xE9 n\u2019a plus de PP !"
  },
  recharge: {
    cant: "L\u2019\xE9puisement emp\xEAche {POKEMON} d\u2019agir !"
  },
  recoil: {
    damage: "  {POKEMON} est bless\xE9 par le contrecoup !"
  },
  unboost: {
    fail: "  {STAT:definite:capitalize} {POKEMON:de} ne {INFLECT:STAT:s=baisse:p=baissent} pas !",
    // per-stat form; SV fr_common:6483 "L’Attaque de X ne baisse pas !"
    failNoStat: "  Les stats {POKEMON:de} ne baissent pas !"
    // SV fr_common:6479
  },
  struggle: {
    activate: "  {POKEMON} n\u2019a plus de capacit\xE9s utilisables\u202F!"
  },
  trapped: {
    start: "  {POKEMON} ne peut plus s\u2019\xE9chapper !"
  },
  dynamax: {
    start: null,
    // NEEDS TRANSLATION
    end: null,
    // NEEDS TRANSLATION
    block: "  La puissance du Dynamax a bloqu\xE9 l\u2019attaque !",
    fail: "  {POKEMON} fait non de la t\xEAte. On dirait qu\u2019il ne peut pas utiliser cette capacit\xE9..."
  },
  // weather
  sandstorm: {
    weatherName: "Temp\xEAte de sable",
    start: "  Une temp\xEAte de sable se pr\xE9pare !",
    end: "  La temp\xEAte de sable se calme !",
    upkeep: "  (La temp\xEAte de sable fait rage !)",
    damage: "  La temp\xEAte de sable inflige des d\xE9g\xE2ts \xE0 {POKEMON} !"
  },
  sunnyday: {
    weatherName: "Soleil",
    start: "  Les rayons du soleil brillent !",
    end: "  Les rayons du soleil s\u2019affaiblissent !",
    upkeep: "  (Les rayons du soleil sont forts.)"
  },
  raindance: {
    weatherName: "Pluie",
    start: "  Il commence \xE0 pleuvoir !",
    end: "  La pluie s\u2019est arr\xEAt\xE9e !",
    upkeep: "  (La pluie continue de tomber.)"
  },
  hail: {
    weatherName: "Gr\xEAle",
    start: "  Il commence \xE0 gr\xEAler !",
    end: "  La gr\xEAle s\u2019est arr\xEAt\xE9e !",
    upkeep: "  (Il y a un d\xE9luge de gr\xEAle.)",
    damage: "  La temp\xEAte de gr\xEAle inflige des d\xE9g\xE2ts \xE0 {POKEMON}\u202F!"
  },
  snowscape: {
    weatherName: "Neige",
    start: "  Il commence \xE0 neiger !",
    end: "  La neige s\u2019est arr\xEAt\xE9e !",
    upkeep: "  (Il y a une temp\xEAte de neige !)"
  },
  desolateland: {
    weatherName: "Soleil intense",
    start: "  Les rayons du soleil s\u2019intensifient !",
    end: "  Les rayons du soleil s\u2019affaiblissent !",
    block: "  Le soleil brille si intens\xE9ment que rien ne peut l\u2019obscurcir !",
    blockMove: "  Le soleil brille si intens\xE9ment que toute attaque de type Eau s\u2019\xE9vapore\u202F!"
  },
  primordialsea: {
    weatherName: "Pluie battante",
    start: "  Une pluie battante s\u2019abat soudainement !",
    end: "  La pluie battante s\u2019est arr\xEAt\xE9e...",
    block: "  Impossible de dissiper une telle pluie !",
    blockMove: "  La pluie battante emp\xEAche toute attaque de type Feu !"
  },
  deltastream: {
    weatherName: "Vent myst\xE9rieux",
    start: "  Un vent myst\xE9rieux enveloppe les Pok\xE9mon de type Vol !",
    end: "  Le vent myst\xE9rieux s\u2019est dissip\xE9...",
    activate: "  Le vent myst\xE9rieux affaiblit l\u2019attaque !",
    block: "  Impossible de ramener l\u2019atmosph\xE8re \xE0 la normale !"
  },
  // terrain
  electricterrain: {
    start: "  De l\u2019\xE9lectricit\xE9 parcourt le terrain !",
    end: "  L\u2019\xE9lectricit\xE9 parcourant le terrain s\u2019est dissip\xE9e...",
    block: "  {POKEMON} est prot\xE9g\xE9 par un champ \xE9lectrifi\xE9 !"
  },
  grassyterrain: {
    start: "  Un beau gazon pousse sur le terrain !",
    end: "  Le gazon dispara\xEEt...",
    heal: "  {POKEMON} r\xE9cup\xE8re des PV\u202F!"
  },
  mistyterrain: {
    start: "  La brume recouvre le terrain !",
    end: "  La brume qui recouvrait le terrain se dissipe...",
    block: "  {POKEMON} est prot\xE9g\xE9 par un champ brumeux !"
  },
  psychicterrain: {
    start: "  Le sol se met \xE0 r\xE9agir de fa\xE7on bizarre...",
    end: "  Le sol redevient normal !",
    block: "  {POKEMON} est prot\xE9g\xE9 par un champ psychique !"
  },
  // field effects
  gravity: {
    start: "  La gravit\xE9 s\u2019intensifie !",
    end: "  La gravit\xE9 est revenue \xE0 la normale !",
    cant: "{POKEMON} ne peut pas utiliser la capacit\xE9 {MOVE} \xE0 cause du changement de gravit\xE9 !",
    activate: "{POKEMON} ne peut pas rester en l\u2019air \xE0 cause du changement de gravit\xE9 !"
  },
  magicroom: {
    start: "  L\u2019effet des objets tenus est neutralis\xE9 !",
    end: "  La zone magique a disparu. L\u2019effet des objets tenus est r\xE9tabli !"
  },
  mudsport: {
    start: "  La puissance des capacit\xE9s de type \xC9lectrik diminue !",
    end: "  L\u2019effet de Lance-Boue se dissipe !"
  },
  trickroom: {
    start: "  {POKEMON} fausse les dimensions !",
    end: "  Les dimensions fauss\xE9es reviennent \xE0 la normale !"
  },
  watersport: {
    start: "  La puissance des capacit\xE9s de type Feu diminue !",
    end: "  L\u2019effet de Tourniquet se dissipe !"
  },
  wonderroom: {
    start: "  La D\xE9fense et la D\xE9fense Sp\xE9ciale sont interverties !",
    end: "  La zone \xE9trange a disparu. La D\xE9fense et la D\xE9fense Sp\xE9ciale sont revenues \xE0 la normale !"
  },
  // misc
  crash: {
    damage: "  {POKEMON} s\u2019\xE9crase au sol !"
  }
};
//# sourceMappingURL=default.js.map
