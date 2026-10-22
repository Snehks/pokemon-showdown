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
    opposingPokemon: "\u76F8\u624B\u306E {NICKNAME}",
    fullName: null,
    // NEEDS TRANSLATION
    team: "\u5473\u65B9",
    opposingTeam: "\u76F8\u624B",
    party: "\u5473\u65B9\u306E \u30DD\u30B1\u30E2\u30F3",
    opposingParty: "\u76F8\u624B\u306E \u30DD\u30B1\u30E2\u30F3",
    turn: null,
    // NEEDS TRANSLATION
    switchIn: "{TRAINER}\u306F {FULLNAME}\u3092 \u7E70\u308A\u51FA\u3057\u305F\uFF01",
    switchInOwn: "\u3086\u3051\u3063\uFF01 {FULLNAME}\uFF01",
    switchOut: "{TRAINER}\u306F {NICKNAME}\u3092 \u5F15\u3063\u3053\u3081\u305F\uFF01",
    switchOutOwn: "{NICKNAME} \u623B\u308C\uFF01",
    drag: "{FULLNAME}\u306F \u6226\u95D8\u306B \u5F15\u304D\u305A\u308A\u3060\u3055\u308C\u305F\uFF01",
    faint: "{POKEMON}\u306F \u305F\u304A\u308C\u305F\uFF01",
    swap: "{POKEMON}\u3068 {TARGET}\u306F \u5834\u6240\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01",
    swapCenter: "{POKEMON}\u306F \u771F\u3093\u4E2D\u306B \u79FB\u52D5\u3057\u305F\uFF01",
    // Multi Battles only
    canDynamax: "  {TRAINER}\u304C \u30C0\u30A4\u30DE\u30C3\u30AF\u30B9 \u3067\u304D\u308B\u3088\u3046\u306B \u306A\u3063\u305F\uFF01",
    canDynamaxOwn: "  {TRAINER}\u306B \u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u30D1\u30EF\u30FC\u304C \u96C6\u307E\u3063\u305F\uFF01",
    zEffect: "  {POKEMON}\u304C \u89E3\u304D\u653E\u3064 \u5168\u529B\u306E \uFF3A\u30EF\u30B6\uFF01",
    move: "{POKEMON}\u306E **{MOVE}**\uFF01",
    abilityActivation: "[{POKEMON}\u306E {ABILITY}]",
    mega: "  {POKEMON}\u306E {ITEM}\u3068 {TRAINER}\u306E \u30AD\u30FC\u30B9\u30C8\u30FC\u30F3\u304C \u53CD\u5FDC\u3057\u305F\uFF01",
    megaNoItem: null,
    // NEEDS TRANSLATION
    megaGen6: "  {POKEMON}\u306E {ITEM}\u3068 {TRAINER}\u306E \u30E1\u30AC\u30D0\u30F3\u30B0\u30EB\u304C \u53CD\u5FDC\u3057\u305F\uFF01",
    transformMega: "{POKEMON}\u306F \u30E1\u30AC{SPECIES}\u306B \u30E1\u30AC\u30B7\u30F3\u30AB\u3057\u305F\uFF01",
    primal: "{POKEMON}\u306E \u30B2\u30F3\u30B7\u30AB\u30A4\u30AD\uFF01 \u539F\u59CB\u306E\u59FF\u3092 \u53D6\u308A\u623B\u3057\u305F\uFF01",
    zPower: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3092 \u8EAB\u4F53\u306B \u307E\u3068\u3063\u305F\uFF01",
    zBroken: "  {POKEMON}\u306F \u653B\u6483\u3092 \u5B88\u308A\u304D\u308C\u305A\u306B \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01",
    terastallize: null,
    // NEEDS TRANSLATION
    // in case the different default messages didn't make it obvious, the difference
    // is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
    // message happens AFTER "Pokemon used Move!"
    cant: "{POKEMON}\u306F {MOVE}\u3092 \u4F7F\u3048\u306A\u3044\uFF01",
    cantNoMove: "{POKEMON}\u306F \u307F\u3046\u3054\u304D\u304C \u3068\u308C\u306A\u3044\uFF01",
    fail: "  \u3057\u304B\u3057 \u3046\u307E\u304F \u6C7A\u307E\u3089\u306A\u304B\u3063\u305F\uFF01\uFF01",
    // n.b. this is the default message for in-battle forme changes
    // for the move Transform and ability Imposter, see the entry for the move Transform
    transform: "{POKEMON}\u306E \u59FF\u304C \u5909\u5316\u3057\u305F\uFF01",
    typeChange: "  {POKEMON}\u306F {TYPE}\u30BF\u30A4\u30D7\u306B \u306A\u3063\u305F\uFF01",
    typeChangeFromEffect: "  {POKEMON}\u306F {EFFECT}\u3067 {TYPE}\u30BF\u30A4\u30D7\u306B \u306A\u3063\u305F\uFF01",
    typeAdd: "  {POKEMON}\u306B {TYPE}\u30BF\u30A4\u30D7\u304C \u8FFD\u52A0\u3055\u308C\u305F\uFF01",
    start: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON}\u306F {EFFECT}\u304B\u3089 \u89E3\u653E\u3055\u308C\u305F\uFF01",
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
    changeAbility: "  {POKEMON}\u306F {ABILITY}\u306B \u306A\u3063\u305F\uFF01",
    addItem: "  {POKEMON}\u306F {ITEM}\u3092 \u624B\u306B\u5165\u308C\u305F\uFF01",
    takeItem: "  {POKEMON}\u306F {SOURCE}\u304B\u3089 {ITEM}\u3092 \u596A\u3044\u53D6\u3063\u305F\uFF01",
    eatItem: null,
    // NEEDS TRANSLATION
    useGem: "  {ITEM}\u306F {MOVE}\u306E \u5A01\u529B\u3092 \u5F37\u3081\u305F\uFF01",
    eatItemWeaken: "  {POKEMON}\u3078\u306E \u30C0\u30E1\u30FC\u30B8\u3092 {ITEM}\u304C \u5F31\u3081\u305F\uFF01",
    removeItem: null,
    // NEEDS TRANSLATION
    activateItem: null,
    // NEEDS TRANSLATION
    activateWeaken: "  {POKEMON}\u3078\u306E \u30C0\u30E1\u30FC\u30B8\u3092 {ITEM}\u304C \u5F31\u3081\u305F\uFF01",
    damage: "  ({POKEMON}\u306F \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01)",
    damagePercentage: null,
    // NEEDS TRANSLATION
    damageFromPokemon: "  {POKEMON}\u306F {SOURCE}\u306E {ITEM}\u3067 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01",
    damageFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01",
    damageFromPartialTrapping: "  {POKEMON}\u306F {MOVE}\u306E \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u3066\u3044\u308B",
    heal: "  {POKEMON}\u306E \u4F53\u529B\u304C \u56DE\u5FA9\u3057\u305F\uFF01",
    healFromZEffect: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 \u4F53\u529B\u3092 \u56DE\u5FA9\u3057\u305F\uFF01",
    healFromEffect: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u306E {STAT}\u304C \u4E0A\u304C\u3063\u305F\uFF01",
    boost2: "  {POKEMON}\u306E {STAT}\u304C \u3050\u30FC\u3093\u3068\u4E0A\u304C\u3063\u305F\uFF01",
    boost3: "  {POKEMON}\u306E {STAT}\u304C \u3050\u3050\u30FC\u3093\u3068\u4E0A\u304C\u3063\u305F\uFF01",
    boost0: "  {POKEMON}\u306E {STAT}\u306F \u3082\u3046 \u4E0A\u304C\u3089\u306A\u3044\uFF01",
    boostFromItem: null,
    // NEEDS TRANSLATION
    boost2FromItem: null,
    // NEEDS TRANSLATION
    boost3FromItem: "  {POKEMON}\u306F {ITEM}\u3067 {STAT}\u304C \u3050\u3050\u30FC\u3093\u3068 \u4E0A\u304C\u3063\u305F\uFF01",
    boostFromZEffect: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 {STAT}\u304C \u4E0A\u304C\u3063\u305F\uFF01",
    boost2FromZEffect: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 {STAT}\u304C \u3050\u30FC\u3093\u3068 \u4E0A\u304C\u3063\u305F\uFF01",
    boost3FromZEffect: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 {STAT}\u304C \u3050\u3050\u30FC\u3093\u3068 \u4E0A\u304C\u3063\u305F\uFF01",
    boostMultipleFromZEffect: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 \u80FD\u529B\u304C \u4E0A\u304C\u3063\u305F\uFF01",
    unboost: "  {POKEMON}\u306E {STAT}\u304C \u4E0B\u304C\u3063\u305F\uFF01",
    unboost2: "  {POKEMON}\u306E {STAT}\u304C \u304C\u304F\u3063\u3068\u4E0B\u304C\u3063\u305F\uFF01",
    unboost3: "  {POKEMON}\u306E {STAT}\u304C \u304C\u304F\u30FC\u3093\u3068\u4E0B\u304C\u3063\u305F\uFF01",
    unboost0: "  {POKEMON}\u306E {STAT}\u306F \u3082\u3046 \u4E0B\u304C\u3089\u306A\u3044\uFF01",
    unboostFromItem: null,
    // NEEDS TRANSLATION
    unboost2FromItem: null,
    // NEEDS TRANSLATION
    unboost3FromItem: null,
    // NEEDS TRANSLATION
    swapBoost: "  {POKEMON}\u306F \u76F8\u624B\u3068\u81EA\u5206\u306E \u80FD\u529B\u5909\u5316\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01",
    swapOffensiveBoost: "  {POKEMON}\u306F \u76F8\u624B\u3068\u81EA\u5206\u306E \u653B\u6483\u3068 \u7279\u653B\u306E \u80FD\u529B\u5909\u5316\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01",
    swapDefensiveBoost: "  {POKEMON}\u306F \u76F8\u624B\u3068\u81EA\u5206\u306E \u9632\u5FA1\u3068 \u7279\u9632\u306E \u80FD\u529B\u5909\u5316\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01",
    copyBoost: "  {POKEMON}\u306F {TARGET}\u306E \u80FD\u529B\u5909\u5316\u3092 \u30B3\u30D4\u30FC\u3057\u305F\uFF01",
    clearBoost: "  {POKEMON}\u306E \u80FD\u529B\u5909\u5316\u304C \u5143\u306B\u623B\u3063\u305F\uFF01",
    clearBoostFromZEffect: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 \u4E0B\u304C\u3063\u305F \u80FD\u529B\u3092 \u5143\u306B\u623B\u3057\u305F\uFF01",
    invertBoost: "  {POKEMON}\u306F \u80FD\u529B\u5909\u5316\u304C \u3072\u3063\u304F\u308A\u304B\u3048\u3063\u305F\uFF01",
    clearAllBoost: "  \u5168\u3066\u306E \u30B9\u30C6\u30FC\u30BF\u30B9\u304C \u5143\u306B \u623B\u3063\u305F\uFF01",
    superEffective: "  \u52B9\u679C\u306F \u30D0\u30C4\u30B0\u30F3\u3060\uFF01",
    superEffectiveSpread: "  {POKEMON}\u306B \u52B9\u679C\u306F \u30D0\u30C4\u30B0\u30F3\u3060\uFF01",
    resisted: "  \u52B9\u679C\u306F \u3044\u307E\u3072\u3068\u3064\u3060",
    resistedSpread: "  {POKEMON}\u306B \u52B9\u679C\u306F \u3044\u307E\u3072\u3068\u3064\u3060",
    // this is official text meaning 4x effective. do not QC this
    extremelyEffective: "  \u52B9\u679C\u306F \u3061\u3087\u3046\u30D0\u30C4\u30B0\u30F3\u3060\uFF01\uFF01",
    extremelyEffectiveSpread: "  {POKEMON}\u306B \u52B9\u679C\u306F \u3061\u3087\u3046\u30D0\u30C4\u30B0\u30F3\u3060\uFF01\uFF01",
    // this is official text meaning 1/4x effective. do not QC this
    mostlyIneffective: "  \u52B9\u679C\u306F \u304B\u306A\u308A\u3044\u307E\u3072\u3068\u3064\u3060",
    mostlyIneffectiveSpread: "  {POKEMON}\u306B \u52B9\u679C\u306F \u304B\u306A\u308A\u3044\u307E\u3072\u3068\u3064\u3060",
    crit: "  \u6025\u6240\u306B \u5F53\u305F\u3063\u305F\uFF01",
    critSpread: "  {POKEMON}\u306E \u6025\u6240\u306B \u5F53\u305F\u3063\u305F\uFF01",
    immune: "  {POKEMON}\u306B\u306F \u52B9\u679C\u304C \u306A\u3044\u3088\u3046\u3060\u2026",
    // from Emerald: しかし こうかが なかった！ (kana modernized to current kanji standards)
    immuneNoPokemon: "  \u3057\u304B\u3057 \u52B9\u679C\u304C \u306A\u304B\u3063\u305F\uFF01",
    immuneOHKO: "  {POKEMON}\u306B\u306F \u5168\u7136 \u52B9\u3044\u3066\u306A\u3044\uFF01",
    miss: "  {POKEMON}\u306B\u306F \u5F53\u305F\u3089\u306A\u304B\u3063\u305F\uFF01",
    missNoPokemon: "  \u3057\u304B\u3057 {SOURCE}\u306E \u3053\u3046\u3052\u304D\u306F \u306F\u305A\u308C\u305F\uFF01",
    center: "  \u30EA\u30BB\u30C3\u30C8\u30E0\u30FC\u30D6\uFF01\uFF01",
    noTarget: "  \u3057\u304B\u3057 \u3042\u3044\u3066\u304C \u3044\u306A\u3044\u306E\u3067 \u3046\u307E\u304F \u304D\u307E\u3089\u306A\u304B\u3063\u305F\uFF01",
    ohko: "  \u4E00\u6483\u5FC5\u6BBA\uFF01",
    combine: "  2\u3064\u306E\u6280\u304C 1\u3064\u306B\u306A\u3063\u305F\uFF01 \u30B3\u30F3\u30D3\u30CD\u30FC\u30B7\u30E7\u30F3\u6280\u3060\uFF01\uFF01",
    // XY ja_common 22838
    hitCount: "  {NUMBER}\u56DE \u5F53\u305F\u3063\u305F\uFF01"
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
    start: "  {POKEMON}\u306F \u3084\u3051\u3069\u3092 \u8CA0\u3063\u305F\uFF01",
    startFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u3084\u3051\u3069\u3092 \u8CA0\u3063\u305F\uFF01",
    alreadyStarted: "  {POKEMON}\u306F \u3059\u3067\u306B \u3084\u3051\u3069\u3092 \u8CA0\u3063\u3066\u3044\u308B",
    end: "  {POKEMON}\u306E \u3084\u3051\u3069\u304C \u6CBB\u3063\u305F\uFF01",
    // SV ja_common 6567 / Champions btl_set
    endFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u3084\u3051\u3069\u304C \u6CBB\u3063\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u3084\u3051\u3069\u306E \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01"
  },
  frz: {
    start: "  {POKEMON}\u306F \u51CD\u308A\u3064\u3044\u305F\uFF01",
    alreadyStarted: "  {POKEMON}\u306F \u3059\u3067\u306B \u51CD\u3063\u3066\u3044\u308B",
    end: "  {POKEMON}\u306E \u3053\u304A\u308A\u304C \u6EB6\u3051\u305F\uFF01",
    endFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u3053\u304A\u308A\u72B6\u614B\u304C \u6CBB\u3063\u305F\uFF01",
    endFromMove: "  {POKEMON}\u306E {MOVE}\u3067 \u3053\u304A\u308A\u304C \u6EB6\u3051\u305F\uFF01",
    cant: "{POKEMON}\u306F \u51CD\u3063\u3066\u3057\u307E\u3063\u3066 \u52D5\u3051\u306A\u3044\uFF01"
  },
  par: {
    start: "  {POKEMON}\u306F \u307E\u3072\u3057\u3066 \u6280\u304C \u3067\u306B\u304F\u304F\u306A\u3063\u305F\uFF01",
    alreadyStarted: "  {POKEMON}\u306F \u3059\u3067\u306B \u307E\u3072\u3057\u3066\u3044\u308B",
    end: "  {POKEMON}\u306E \u3057\u3073\u308C\u304C \u3068\u308C\u305F\uFF01",
    endFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u307E\u3072\u304C \u6CBB\u3063\u305F\uFF01",
    cant: "{POKEMON}\u306F \u4F53\u304C\u3057\u3073\u308C\u3066 \u52D5\u3051\u306A\u3044\uFF01"
  },
  psn: {
    start: "  {POKEMON}\u306F \u6BD2\u3092 \u3042\u3073\u305F\uFF01",
    alreadyStarted: "  {POKEMON}\u306F \u3059\u3067\u306B \u6BD2\u3092 \u3042\u3073\u3066\u3044\u308B",
    end: "  {POKEMON}\u306E \u6BD2\u306F \u304D\u308C\u3044\u3055\u3063\u3071\u308A \u306A\u304F\u306A\u3063\u305F\uFF01",
    endFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u6BD2\u304C \u6CBB\u3063\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u6BD2\u306E \u30C0\u30E1\u30FC\u30B8\u3092\u53D7\u3051\u305F\uFF01"
  },
  tox: {
    start: "  {POKEMON}\u306F \u731B\u6BD2\u3092 \u3042\u3073\u305F\uFF01",
    startFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u731B\u6BD2\u3092 \u3042\u3073\u305F\uFF01",
    end: "#psn",
    endFromItem: "#psn",
    alreadyStarted: "#psn",
    damage: "#psn"
  },
  slp: {
    start: "  {POKEMON}\u306F \u7720\u3063\u3066\u3057\u307E\u3063\u305F\uFF01",
    startFromRest: "  {POKEMON}\u306F \u7720\u3063\u3066 \u5143\u6C17\u306B \u306A\u3063\u305F\uFF01",
    alreadyStarted: "  {POKEMON}\u306F \u3059\u3067\u306B \u7720\u3063\u3066\u3044\u308B",
    end: "  {POKEMON}\u306F \u76EE\u3092 \u899A\u307E\u3057\u305F\uFF01",
    endFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u76EE\u3092 \u899A\u307E\u3057\u305F\uFF01",
    cant: "{POKEMON}\u306F \u3050\u3046\u3050\u3046 \u7720\u3063\u3066\u3044\u308B"
  },
  // misc effects
  confusion: {
    start: "  {POKEMON}\u306F \u6DF7\u4E71\u3057\u305F\uFF01",
    startFromFatigue: "  {POKEMON}\u306F \u3064\u304B\u308C\u679C\u3066\u3066 \u6DF7\u4E71\u3057\u305F\uFF01",
    end: "  {POKEMON}\u306E \u6DF7\u4E71\u304C \u89E3\u3051\u305F\uFF01",
    endFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u6DF7\u4E71\u304C \u6CBB\u3063\u305F\uFF01",
    alreadyStarted: "  {POKEMON}\u306F \u3059\u3067\u306B \u6DF7\u4E71\u3057\u3066\u3044\u308B",
    activate: "  {POKEMON}\u306F \u6DF7\u4E71\u3057\u3066\u3044\u308B\uFF01",
    damage: "\u308F\u3051\u3082 \u308F\u304B\u3089\u305A \u81EA\u5206\u3092 \u653B\u6483\u3057\u305F\uFF01"
  },
  drain: {
    heal: "  {SOURCE}\u304B\u3089 \u4F53\u529B\u3092 \u5438\u3044\u53D6\u3063\u305F\uFF01"
  },
  flinch: {
    cant: "{POKEMON}\u306F \u3072\u308B\u3093\u3067 \u6280\u304C \u3060\u305B\u306A\u3044\uFF01"
  },
  heal: {
    fail: "  \u3057\u304B\u3057 {POKEMON}\u306F \u4F53\u529B\u304C \u6E80\u30BF\u30F3\u3060\uFF01"
  },
  healreplacement: {
    activate: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 \u5165\u308C\u66FF\u3048\u5148\u306E \u5473\u65B9\u3092\u56DE\u5FA9\u3059\u308B\uFF01"
  },
  nopp: {
    cant: "{POKEMON}\u306E **{MOVE}**\uFF01\n  \u3057\u304B\u3057\u3000\u6280\u306E \u6B8B\u308A\u30DD\u30A4\u30F3\u30C8\u304C\u3000\u306A\u304B\u3063\u305F\uFF01"
  },
  recharge: {
    cant: "{POKEMON}\u306F \u653B\u6483\u306E \u53CD\u52D5\u3067 \u52D5\u3051\u306A\u3044\uFF01"
  },
  recoil: {
    damage: "  {POKEMON}\u306F \u53CD\u52D5\u306B\u3088\u308B \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01"
  },
  unboost: {
    fail: "  {POKEMON}\u306E {STAT}\u306F \u4E0B\u304C\u3089\u306A\u3044\uFF01",
    // per-stat form; SV ja_common:6483 「{POKEMON}の 攻撃は 下がらない！」
    failNoStat: "  {POKEMON}\u306E \u80FD\u529B\u306F \u4E0B\u304C\u3089\u306A\u3044\uFF01"
    // SV ja_common:6479
  },
  struggle: {
    activate: "  {POKEMON}\u306F \u3060\u3059\u3053\u3068\u306E \u3067\u304D\u308B\u6280\u304C \u306A\u3044\uFF01"
  },
  trapped: {
    start: "  {POKEMON}\u306F \u3082\u3046 \u9003\u3052\u3089\u308C\u306A\u3044\uFF01"
  },
  dynamax: {
    start: null,
    // NEEDS TRANSLATION
    end: null,
    // NEEDS TRANSLATION
    block: "  \u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u306E \u3061\u304B\u3089\u3067 \u306F\u3058\u304B\u308C\u305F\uFF01",
    fail: "  {POKEMON}\u306F \u9996\u3092 \u6A2A\u306B\u632F\u3063\u305F \u3053\u306E\u6280\u3092 \u3057\u304B\u3051\u308B\u3053\u3068\u304C \u3067\u304D\u306A\u3044\u3088\u3046\u3060\u2026\u2026"
  },
  // weather
  sandstorm: {
    weatherName: "\u3059\u306A\u3042\u3089\u3057",
    start: "  \u7802\u3042\u3089\u3057\u304C \u5439\u304D\u59CB\u3081\u305F\uFF01",
    end: "  \u7802\u3042\u3089\u3057\u304C \u304A\u3055\u307E\u3063\u305F\uFF01",
    upkeep: "  (\u7802\u3042\u3089\u3057\u304C \u5439\u304D\u3042\u308C\u308B\uFF01)",
    damage: "  \u7802\u3042\u3089\u3057\u304C {POKEMON}\u3092 \u8972\u3046\uFF01"
  },
  sunnyday: {
    weatherName: "\u306B\u307B\u3093\u3070\u308C",
    start: "  \u65E5\u5DEE\u3057\u304C \u5F37\u304F\u306A\u3063\u305F\uFF01",
    end: "  \u65E5\u5DEE\u3057\u304C \u5143\u306B\u623B\u3063\u305F\uFF01",
    upkeep: "  (\u3072\u3056\u3057\u304C \u3064\u3088\u3044)"
  },
  raindance: {
    weatherName: "\u3042\u3081",
    start: "  \u96E8\u304C \u964D\u308A\u59CB\u3081\u305F\uFF01",
    end: "  \u96E8\u304C \u4E0A\u304C\u3063\u305F\uFF01",
    upkeep: "  (\u3042\u3081\u304C \u3075\u308A\u3064\u3065\u3044\u3066\u3044\u308B)"
  },
  hail: {
    weatherName: "\u3042\u3089\u308C",
    start: "  \u3042\u3089\u308C\u304C \u964D\u308A\u59CB\u3081\u305F\uFF01",
    end: "  \u3042\u3089\u308C\u304C \u6B62\u3093\u3060\uFF01",
    upkeep: "  (\u3042\u3089\u308C\u304C \u5439\u304D\u3059\u3055\u3076\uFF01)",
    damage: "  \u3042\u3089\u308C\u304C {POKEMON}\u3092 \u8972\u3046\uFF01"
  },
  snowscape: {
    weatherName: "\u3086\u304D",
    start: "  \u96EA\u304C \u964D\u308A\u59CB\u3081\u305F\uFF01",
    end: "  \u96EA\u304C \u6B62\u3093\u3060\uFF01",
    upkeep: "  (\u96EA\u304C \u5439\u304D\u3059\u3055\u3076\uFF01)"
  },
  desolateland: {
    weatherName: "\u304A\u304A\u3072\u3067\u308A",
    start: "  \u65E5\u5DEE\u3057\u304C \u3068\u3066\u3082\u5F37\u304F\u306A\u3063\u305F\uFF01",
    end: "  \u65E5\u5DEE\u3057\u304C \u5143\u306B\u623B\u3063\u305F\uFF01",
    block: "  \u5F37\u3044\u65E5\u5DEE\u3057\u306E \u52E2\u3044\u306F \u6B62\u307E\u3089\u306A\u3044\uFF01",
    blockMove: "  \u5F37\u3044\u65E5\u5DEE\u3057\u306E \u5F71\u97FF\u3067 \u307F\u305A\u30BF\u30A4\u30D7\u306E \u653B\u6483\u304C \u84B8\u767A\u3057\u305F\uFF01"
  },
  primordialsea: {
    weatherName: "\u304A\u304A\u3042\u3081",
    start: "  \u5F37\u3044\u96E8\u304C \u964D\u308A\u59CB\u3081\u305F\uFF01",
    end: "  \u5F37\u3044\u96E8\u304C \u4E0A\u304C\u3063\u305F\uFF01",
    block: "  \u5F37\u3044\u96E8\u306E \u52E2\u3044\u306F \u6B62\u307E\u3089\u306A\u3044\uFF01",
    blockMove: "  \u5F37\u3044\u96E8\u306E \u5F71\u97FF\u3067 \u307B\u306E\u304A\u30BF\u30A4\u30D7\u306E \u653B\u6483\u304C \u304B\u304D\u6D88\u3055\u308C\u305F\uFF01"
  },
  deltastream: {
    weatherName: "\u3089\u3093\u304D\u308A\u3085\u3046",
    start: "  \u8B0E\u306E \u4E71\u6C17\u6D41\u304C \u3072\u3053\u3046\u30DD\u30B1\u30E2\u30F3\u3092 \u8B77\u308B\uFF01",
    end: "  \u8B0E\u306E \u4E71\u6C17\u6D41\u304C \u304A\u3055\u307E\u3063\u305F\uFF01",
    activate: "  \u8B0E\u306E \u4E71\u6C17\u6D41\u304C \u653B\u6483\u3092 \u5F31\u3081\u305F\uFF01",
    block: "  \u8B0E\u306E \u4E71\u6C17\u6D41\u306E \u52E2\u3044\u306F \u6B62\u307E\u3089\u306A\u3044\uFF01"
  },
  // terrain
  electricterrain: {
    start: "  \u8DB3\u4E0B\u306B \u96FB\u6C17\u304C \u304B\u3051\u3081\u3050\u308B\uFF01",
    end: "  \u8DB3\u4E0B\u306E \u96FB\u6C17\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01",
    block: "  {POKEMON}\u306F \u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  grassyterrain: {
    start: "  \u8DB3\u4E0B\u306B \u8349\u304C\u304A\u3044\u3057\u3052\u3063\u305F\uFF01",
    end: "  \u8DB3\u4E0B\u306E \u8349\u304C\u6D88\u3048\u53BB\u3063\u305F\uFF01",
    heal: "  {POKEMON}\u306E \u4F53\u529B\u304C \u56DE\u5FA9\u3057\u305F\uFF01"
  },
  mistyterrain: {
    start: "  \u8DB3\u4E0B\u306B \u9727\u304C\u7ACB\u3061\u8FBC\u3081\u305F\uFF01",
    end: "  \u8DB3\u4E0B\u306E \u9727\u304C\u6D88\u3048\u53BB\u3063\u305F\uFF01",
    block: "  {POKEMON}\u306F \u30DF\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  psychicterrain: {
    start: "  \u8DB3\u4E0B\u304C \u4E0D\u601D\u8B70\u306A\u611F\u3058\u306B \u306A\u3063\u305F\uFF01",
    end: "  \u8DB3\u4E0B\u306E \u4E0D\u601D\u8B70\u611F\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01",
    block: "  {POKEMON}\u306F \u30B5\u30A4\u30B3\u30D5\u30A3\u30FC\u30EB\u30C9\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  // field effects
  gravity: {
    start: "  \u3058\u3085\u3046\u308A\u3087\u304F\u304C \u5F37\u304F\u306A\u3063\u305F\uFF01",
    end: "  \u3058\u3085\u3046\u308A\u3087\u304F\u304C \u5143\u306B\u623B\u3063\u305F\uFF01",
    cant: "{POKEMON}\u306F \u3058\u3085\u3046\u308A\u3087\u304F\u304C \u5F37\u304F\u3066 {MOVE}\u304C \u3060\u305B\u306A\u3044\uFF01",
    activate: "{POKEMON}\u306F \u3058\u3085\u3046\u308A\u3087\u304F\u306E \u5F71\u97FF\u3067 \u7A7A\u4E2D\u306B \u3044\u3089\u308C\u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  magicroom: {
    start: "  \u6301\u305F\u305B\u305F \u9053\u5177\u306E \u52B9\u679C\u304C \u306A\u304F\u306A\u308B \u7A7A\u9593\u3092 \u4F5C\u308A\u3060\u3057\u305F\uFF01",
    end: "  \u30DE\u30B8\u30C3\u30AF\u30EB\u30FC\u30E0\u304C \u89E3\u9664\u3055\u308C \u9053\u5177\u306E \u52B9\u679C\u304C \u5143\u306B\u623B\u3063\u305F\uFF01"
  },
  mudsport: {
    start: "  \u96FB\u6C17\u306E \u5A01\u529B\u304C \u5F31\u307E\u3063\u305F\uFF01",
    end: "  \u3069\u308D\u3042\u305D\u3073\u306E \u52B9\u679C\u304C \u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  trickroom: {
    start: "  {POKEMON}\u306F \u6642\u7A7A\u3092 \u3086\u304C\u3081\u305F\uFF01",
    end: "  \u3086\u304C\u3093\u3060 \u6642\u7A7A\u304C \u5143\u306B\u623B\u3063\u305F\uFF01"
  },
  watersport: {
    start: "  \u708E\u306E \u5A01\u529B\u304C \u5F31\u307E\u3063\u305F\uFF01",
    end: "  \u307F\u305A\u3042\u305D\u3073\u306E \u52B9\u679C\u304C \u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  wonderroom: {
    start: "  \u9632\u5FA1\u3068 \u7279\u9632\u304C \u5165\u308C\u66FF\u308F\u308B \u7A7A\u9593\u3092 \u4F5C\u308A\u3060\u3057\u305F\uFF01",
    end: "  \u30EF\u30F3\u30C0\u30FC\u30EB\u30FC\u30E0\u304C \u89E3\u9664\u3055\u308C \u9632\u5FA1\u3068 \u7279\u9632\u304C \u5143\u306B\u623B\u3063\u305F\uFF01"
  },
  // misc
  crash: {
    damage: "  \u52E2\u3044\u3042\u307E\u3063\u3066 {POKEMON}\u306F \u5730\u9762\u306B \u3076\u3064\u304B\u3063\u305F\uFF01"
  }
};
//# sourceMappingURL=default.js.map
