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
    opposingPokemon: "\uC0C1\uB300 {NICKNAME}",
    fullName: null,
    // NEEDS TRANSLATION
    team: "\uC6B0\uB9AC \uD3B8",
    opposingTeam: "\uC0C1\uB300",
    party: "\uAC19\uC740 \uD3B8 \uD3EC\uCF13\uBAAC",
    // LZA wording (newest; Champions has no line). SV: 우리 편 포켓몬
    opposingParty: "\uC0C1\uB300\uC758 \uD3EC\uCF13\uBAAC",
    turn: null,
    // NEEDS TRANSLATION
    switchIn: "{TRAINER:topic} {FULLNAME:object} \uB0B4\uBCF4\uB0C8\uB2E4!",
    switchInOwn: "\uAC00\uB78F! {FULLNAME}!",
    switchOut: "{TRAINER:topic} {NICKNAME:object} \uB123\uC5B4 \uBC84\uB838\uB2E4!",
    switchOutOwn: "{NICKNAME} \uB3CC\uC544\uC640!",
    drag: "{FULLNAME:topic} \uBC30\uD2C0\uC5D0 \uB04C\uB824 \uB098\uC654\uB2E4!",
    faint: "{POKEMON:topic} \uC4F0\uB7EC\uC84C\uB2E4!",
    swap: "{POKEMON:conjunctive} {TARGET:topic} \uC790\uB9AC\uB97C \uBC14\uAFE8\uB2E4!",
    swapCenter: "{POKEMON:topic} \uC911\uC559\uC73C\uB85C \uC774\uB3D9\uD588\uB2E4!",
    // Multi Battles only
    canDynamax: "  {TRAINER:topic} \uB2E4\uC774\uB9E5\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB410\uB2E4!",
    canDynamaxOwn: "  {TRAINER}\uC5D0\uAC8C \uB2E4\uC774\uB9E5\uC2A4 \uD30C\uC6CC\uAC00 \uBAA8\uC600\uB2E4!",
    zEffect: "  {POKEMON:subject} \uBFDC\uC5B4\uB0B4\uB294 \uC804\uB825\uC758 Z\uAE30\uC220!",
    move: "{POKEMON}\uC758 **{MOVE}**!",
    abilityActivation: "[{POKEMON}\uC758 {ABILITY}]",
    mega: "  {POKEMON}\uC758 {ITEM:conjunctive} {TRAINER}\uC758 \uD0A4\uC2A4\uD1A4\uC774 \uBC18\uC751\uD588\uB2E4!",
    megaNoItem: "  {TRAINER}\uC758 \uD0A4\uC2A4\uD1A4\uACFC {POKEMON:subject} \uBC18\uC751\uD588\uB2E4!",
    megaGen6: "  {POKEMON}\uC758 {ITEM:conjunctive} {TRAINER}\uC758 \uBA54\uAC00\uBC45\uAE00\uC774 \uBC18\uC751\uD588\uB2E4!",
    transformMega: "{POKEMON:topic} \uBA54\uAC00{SPECIES:directional} \uBA54\uAC00\uC9C4\uD654\uD588\uB2E4!",
    primal: "{POKEMON}\uC758 \uC6D0\uC2DC\uD68C\uADC0! \uC6D0\uC2DC\uC758 \uBAA8\uC2B5\uC73C\uB85C \uB3CC\uC544\uAC14\uB2E4!",
    zPower: "  {POKEMON:topic} Z\uD30C\uC6CC\uC5D0 \uBAB8\uC774 \uB458\uB7EC\uC2F8\uC600\uB2E4!",
    zBroken: "  {POKEMON:topic} \uACF5\uACA9\uC744 \uB9C9\uC544 \uB0B4\uC9C0 \uBABB\uD558\uACE0 \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!",
    terastallize: null,
    // NEEDS TRANSLATION
    // in case the different default messages didn't make it obvious, the difference
    // is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
    // message happens AFTER "Pokemon used Move!"
    cant: "{POKEMON:topic} {MOVE:object} \uC4F8 \uC218 \uC5C6\uB2E4!",
    cantNoMove: null,
    // NEEDS TRANSLATION
    fail: "  \uADF8\uB7EC\uB098 \uC2E4\uD328\uD558\uACE0 \uB9D0\uC558\uB2E4!!",
    // n.b. this is the default message for in-battle forme changes
    // for the move Transform and ability Imposter, see the entry for the move Transform
    transform: "{POKEMON}\uC758 \uBAA8\uC2B5\uC774 \uBCC0\uD654\uD588\uB2E4!",
    typeChange: "  {POKEMON:topic} {TYPE}\uD0C0\uC785\uC774 \uB410\uB2E4!",
    typeChangeFromEffect: null,
    // NEEDS TRANSLATION
    typeAdd: "  {POKEMON}\uC5D0\uAC8C {TYPE}\uD0C0\uC785\uC774 \uCD94\uAC00\uB418\uC5C8\uB2E4!",
    start: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON:topic} {EFFECT:directional}\uBD80\uD130 \uD480\uB824\uB0AC\uB2E4!",
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
    changeAbility: "  {POKEMON:topic} {ABILITY:subject} \uB418\uC5C8\uB2E4!",
    addItem: "  {POKEMON:topic} {ITEM:object} \uC190\uC5D0 \uB123\uC5C8\uB2E4!",
    takeItem: "  {POKEMON:topic} {SOURCE:directional}\uBD80\uD130 {ITEM:object} \uBE7C\uC557\uC558\uB2E4!",
    eatItem: null,
    // NEEDS TRANSLATION
    useGem: "  {ITEM:topic} {MOVE}\uC758 \uC704\uB825\uC744 \uAC15\uD558\uAC8C \uD588\uB2E4!",
    eatItemWeaken: "  {POKEMON:subject} \uC785\uB294 \uB370\uBBF8\uC9C0\uB97C {ITEM:subject} \uC57D\uD558\uAC8C \uD588\uB2E4!",
    removeItem: null,
    // NEEDS TRANSLATION
    activateItem: null,
    // NEEDS TRANSLATION
    activateWeaken: "  {POKEMON:subject} \uC785\uB294 \uB370\uBBF8\uC9C0\uB97C {ITEM:subject} \uC57D\uD558\uAC8C \uD588\uB2E4!",
    damage: "  ({POKEMON:topic} \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!)",
    damagePercentage: null,
    // NEEDS TRANSLATION
    damageFromPokemon: "  {POKEMON:topic} {SOURCE}\uC758 {ITEM} \uB54C\uBB38\uC5D0 \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!",
    damageFromItem: "  {POKEMON:topic} {ITEM} \uB54C\uBB38\uC5D0 \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!",
    damageFromPartialTrapping: "  {POKEMON:topic} {MOVE}\uC758 \uB370\uBBF8\uC9C0\uB97C \uC785\uACE0 \uC788\uB2E4.",
    heal: "  {POKEMON}\uC758 \uCCB4\uB825\uC774 \uD68C\uBCF5\uB418\uC5C8\uB2E4!",
    healFromZEffect: "  {POKEMON:topic} Z\uD30C\uC6CC\uB85C \uCCB4\uB825\uC744 \uD68C\uBCF5\uD588\uB2E4!",
    healFromEffect: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\uC758 {STAT:subject} \uC62C\uB77C\uAC14\uB2E4!",
    boost2: "  {POKEMON}\uC758 {STAT:subject} \uD06C\uAC8C \uC62C\uB77C\uAC14\uB2E4!",
    boost3: "  {POKEMON}\uC758 {STAT:subject} \uB9E4\uC6B0 \uD06C\uAC8C \uC62C\uB77C\uAC14\uB2E4!",
    boost0: "  {POKEMON}\uC758 {STAT:topic} \uB354 \uC62C\uB77C\uAC00\uC9C0 \uC54A\uB294\uB2E4!",
    boostFromItem: null,
    // NEEDS TRANSLATION
    boost2FromItem: null,
    // NEEDS TRANSLATION
    boost3FromItem: null,
    // NEEDS TRANSLATION
    boostFromZEffect: "  {POKEMON:topic} Z\uD30C\uC6CC\uB85C {STAT:subject} \uC62C\uB77C\uAC14\uB2E4!",
    boost2FromZEffect: "  {POKEMON:topic} Z\uD30C\uC6CC\uB85C {STAT:subject} \uD06C\uAC8C \uC62C\uB77C\uAC14\uB2E4!",
    boost3FromZEffect: "  {POKEMON:topic} Z\uD30C\uC6CC\uB85C {STAT:subject} \uB9E4\uC6B0 \uD06C\uAC8C \uC62C\uB77C\uAC14\uB2E4!",
    boostMultipleFromZEffect: "  {POKEMON:topic} Z\uD30C\uC6CC\uB85C \uB2A5\uB825\uC774 \uC62C\uB77C\uAC14\uB2E4!",
    unboost: "  {POKEMON}\uC758 {STAT:subject} \uB5A8\uC5B4\uC84C\uB2E4!",
    unboost2: "  {POKEMON}\uC758 {STAT:subject} \uD06C\uAC8C \uB5A8\uC5B4\uC84C\uB2E4!",
    unboost3: "  {POKEMON}\uC758 {STAT:subject} \uB9E4\uC6B0 \uD06C\uAC8C \uB5A8\uC5B4\uC84C\uB2E4!",
    unboost0: "  {POKEMON}\uC758 {STAT:topic} \uB354 \uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uB294\uB2E4!",
    unboostFromItem: null,
    // NEEDS TRANSLATION
    unboost2FromItem: null,
    // NEEDS TRANSLATION
    unboost3FromItem: null,
    // NEEDS TRANSLATION
    swapBoost: "  {POKEMON:topic} \uC0C1\uB300\uC640 \uC790\uC2E0\uC758 \uB2A5\uB825 \uBCC0\uD654\uB97C \uBC14\uAFE8\uB2E4!",
    swapOffensiveBoost: "  {POKEMON:topic} \uC0C1\uB300\uC640 \uC790\uC2E0\uC758 \uACF5\uACA9\uACFC \uD2B9\uC218\uACF5\uACA9\uC758 \uB2A5\uB825 \uBCC0\uD654\uB97C \uBC14\uAFE8\uB2E4!",
    swapDefensiveBoost: "  {POKEMON:topic} \uC0C1\uB300\uC640 \uC790\uC2E0\uC758 \uBC29\uC5B4\uC640 \uD2B9\uC218\uBC29\uC5B4\uC758 \uB2A5\uB825 \uBCC0\uD654\uB97C \uBC14\uAFE8\uB2E4!",
    copyBoost: "  {POKEMON:topic} {TARGET}\uC758 \uB2A5\uB825 \uBCC0\uD654\uB97C \uBCF5\uC0AC\uD588\uB2E4!",
    clearBoost: "  {POKEMON}\uC758 \uB2A5\uB825 \uBCC0\uD654\uAC00 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!",
    clearBoostFromZEffect: "  {POKEMON:topic} Z\uD30C\uC6CC\uB85C \uB5A8\uC5B4\uC9C4 \uB2A5\uB825\uC744 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uB838\uB2E4!",
    invertBoost: "  {POKEMON:topic} \uB2A5\uB825 \uBCC0\uD654\uAC00 \uB4A4\uC9D1\uD614\uB2E4!",
    clearAllBoost: "  \uBAA8\uB4E0 \uC0C1\uD0DC\uAC00 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!",
    superEffective: "  \uD6A8\uACFC\uAC00 \uAD49\uC7A5\uD588\uB2E4!",
    superEffectiveSpread: "  {POKEMON}\uC5D0\uAC8C \uD6A8\uACFC\uAC00 \uAD49\uC7A5\uD588\uB2E4!",
    resisted: "  \uD6A8\uACFC\uAC00 \uBCC4\uB85C\uC778 \uB4EF\uD558\uB2E4...",
    resistedSpread: "  {POKEMON}\uC5D0\uAC8C \uD6A8\uACFC\uAC00 \uBCC4\uB85C\uC778 \uB4EF\uD558\uB2E4.",
    // this is official text meaning 4x effective. do not QC this
    extremelyEffective: "  \uD6A8\uACFC\uAC00 \uB9E4\uC6B0 \uAD49\uC7A5\uD588\uB2E4!!",
    extremelyEffectiveSpread: "  {POKEMON}\uC5D0\uAC8C \uD6A8\uACFC\uAC00 \uB9E4\uC6B0 \uAD49\uC7A5\uD588\uB2E4!!",
    // this is official text meaning 1/4x effective. do not QC this
    mostlyIneffective: "  \uD6A8\uACFC\uAC00 \uB9E4\uC6B0 \uBCC4\uB85C\uC778 \uB4EF\uD558\uB2E4...",
    mostlyIneffectiveSpread: "  {POKEMON}\uC5D0\uAC8C \uD6A8\uACFC\uAC00 \uB9E4\uC6B0 \uBCC4\uB85C\uC778 \uB4EF\uD558\uB2E4.",
    crit: "  \uAE09\uC18C\uC5D0 \uB9DE\uC558\uB2E4!",
    critSpread: "  {POKEMON}\uC758 \uAE09\uC18C\uC5D0 \uB9DE\uC558\uB2E4!",
    immune: "  {POKEMON}\uC5D0\uAC8C\uB294 \uD6A8\uACFC\uAC00 \uC5C6\uB294 \uAC83 \uAC19\uB2E4...",
    immuneNoPokemon: "  \uADF8\uB7EC\uB098 \uD6A8\uACFC\uAC00 \uC5C6\uC5C8\uB2E4!",
    immuneOHKO: "  {POKEMON}\uC5D0\uAC8C\uB294 \uC804\uD600 \uD6A8\uACFC\uAC00 \uC5C6\uB2E4!",
    miss: "  {POKEMON}\uC5D0\uAC8C\uB294 \uB9DE\uC9C0 \uC54A\uC558\uB2E4!",
    missNoPokemon: "  \uADF8\uB7EC\uB098 {SOURCE}\uC758 \uACF5\uACA9\uC740 \uBE57\uB098\uAC14\uB2E4!",
    center: "  \uB9AC\uC14B\uBB34\uBE0C!!",
    noTarget: "  \uADF8\uB7EC\uB098 \uC0C1\uB300\uAC00 \uC5C6\uC73C\uBBC0\uB85C \uC2E4\uD328\uD558\uACE0 \uB9D0\uC558\uB2E4!",
    ohko: "  \uC77C\uACA9\uD544\uC0B4!",
    combine: "  2\uAC1C\uC758 \uAE30\uC220\uC774 \uD558\uB098\uAC00 \uB418\uC5C8\uB2E4! \uCF64\uBE44\uB124\uC774\uC158 \uAE30\uC220\uC774\uB2E4!",
    hitCount: "  {NUMBER}\uBC88 \uB9DE\uC558\uB2E4!"
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
    start: "  {POKEMON:topic} \uD654\uC0C1\uC744 \uC785\uC5C8\uB2E4!",
    startFromItem: "  {POKEMON:topic} {ITEM} \uB54C\uBB38\uC5D0 \uD654\uC0C1\uC744 \uC785\uC5C8\uB2E4!",
    alreadyStarted: "  {POKEMON:topic} \uC774\uBBF8 \uD654\uC0C1\uC744 \uC785\uC740 \uC0C1\uD0DC\uB2E4.",
    end: "  {POKEMON}\uC758 \uD654\uC0C1\uC774 \uB098\uC558\uB2E4!",
    endFromItem: "  {POKEMON:topic} {ITEM:directional} \uD654\uC0C1\uC774 \uB098\uC558\uB2E4!",
    damage: "  {POKEMON:topic} \uD654\uC0C1 \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!"
  },
  frz: {
    start: "  {POKEMON:topic} \uC5BC\uC5B4\uBD99\uC5C8\uB2E4!",
    alreadyStarted: "  {POKEMON:topic} \uC774\uBBF8 \uC5BC\uC5B4 \uC788\uB2E4.",
    end: "  {POKEMON}\uC758 \uC5BC\uC74C\uC774 \uB179\uC558\uB2E4!",
    endFromItem: "  {POKEMON:topic} {ITEM:directional} \uC5BC\uC74C \uC0C1\uD0DC\uAC00 \uB098\uC558\uB2E4!",
    endFromMove: "  {POKEMON}\uC758 {MOVE} \uB54C\uBB38\uC5D0 \uC5BC\uC74C\uC774 \uB179\uC558\uB2E4!",
    cant: "{POKEMON:topic} \uC5BC\uC5B4 \uBC84\uB824\uC11C \uC6C0\uC9C1\uC77C \uC218 \uC5C6\uB2E4!"
  },
  par: {
    start: "  {POKEMON:topic} \uB9C8\uBE44\uB418\uC5B4 \uAE30\uC220\uC774 \uB098\uC624\uAE30 \uC5B4\uB824\uC6CC\uC84C\uB2E4!",
    alreadyStarted: "  {POKEMON:topic} \uC774\uBBF8 \uB9C8\uBE44\uB418\uC5B4 \uC788\uB2E4.",
    end: "  {POKEMON}\uC758 \uBAB8\uC800\uB9BC\uC774 \uD480\uB838\uB2E4!",
    endFromItem: "  {POKEMON:topic} {ITEM:directional} \uB9C8\uBE44\uAC00 \uD480\uB838\uB2E4!",
    cant: "{POKEMON:topic} \uBAB8\uC774 \uC800\uB824\uC11C \uC6C0\uC9C1\uC77C \uC218 \uC5C6\uB2E4!"
  },
  psn: {
    start: "  {POKEMON}\uC758 \uBAB8\uC5D0 \uB3C5\uC774 \uD37C\uC84C\uB2E4!",
    alreadyStarted: "  {POKEMON:topic} \uC774\uBBF8 \uBAB8\uC5D0 \uB3C5\uC774 \uD37C\uC9C4 \uC0C1\uD0DC\uB2E4.",
    end: "  {POKEMON}\uC758 \uB3C5\uC740 \uB9D0\uB054\uD558\uAC8C \uD574\uB3C5\uB410\uB2E4!",
    endFromItem: "  {POKEMON:topic} {ITEM:directional} \uB3C5\uC774 \uD574\uB3C5\uB410\uB2E4!",
    damage: "  {POKEMON:topic} \uB3C5\uC5D0 \uC758\uD55C \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!"
  },
  tox: {
    start: "  {POKEMON}\uC758 \uBAB8\uC5D0 \uB9F9\uB3C5\uC774 \uD37C\uC84C\uB2E4!",
    startFromItem: "  {POKEMON:topic} {ITEM} \uB54C\uBB38\uC5D0 \uB9F9\uB3C5\uC5D0 \uC911\uB3C5\uB410\uB2E4!",
    end: "#psn",
    endFromItem: "#psn",
    alreadyStarted: "#psn",
    damage: "#psn"
  },
  slp: {
    start: "  {POKEMON:topic} \uC7A0\uB4E4\uC5B4 \uBC84\uB838\uB2E4!",
    startFromRest: "  {POKEMON:topic} \uC7A0\uC774 \uB4E4\uC5B4 \uAC74\uAC15\uD574\uC84C\uB2E4!",
    alreadyStarted: "  {POKEMON:topic} \uC774\uBBF8 \uC7A0\uB4E4\uC5B4 \uC788\uB2E4.",
    end: "  {POKEMON:topic} \uB208\uC744 \uB5B4\uB2E4!",
    endFromItem: "  {POKEMON:topic} {ITEM:directional} \uB208\uC744 \uB5B4\uB2E4!",
    cant: "{POKEMON:topic} \uCFE8\uCFE8 \uC7A0\uB4E4\uC5B4 \uC788\uB2E4."
  },
  // misc effects
  confusion: {
    start: "  {POKEMON:topic} \uD63C\uB780\uC5D0 \uBE60\uC84C\uB2E4!",
    startFromFatigue: "  {POKEMON:topic} \uBAB9\uC2DC \uC9C0\uCCD0\uC11C \uD63C\uB780\uC5D0 \uBE60\uC84C\uB2E4!",
    end: "  {POKEMON}\uC758 \uD63C\uB780\uC774 \uD480\uB838\uB2E4!",
    endFromItem: "  {POKEMON:topic} {ITEM:directional} \uD63C\uB780\uC774 \uD480\uB838\uB2E4!",
    alreadyStarted: "  {POKEMON:topic} \uC774\uBBF8 \uD63C\uB780\uC5D0 \uBE60\uC838 \uC788\uB2E4.",
    activate: "  {POKEMON:topic} \uD63C\uB780\uC5D0 \uBE60\uC838 \uC788\uB2E4!",
    damage: "\uC601\uBB38\uB3C4 \uBAA8\uB978 \uCC44 \uC790\uC2E0\uC744 \uACF5\uACA9\uD588\uB2E4!"
  },
  drain: {
    heal: "  {SOURCE:directional}\uBD80\uD130 \uCCB4\uB825\uC744 \uD761\uC218\uD588\uB2E4!"
  },
  flinch: {
    cant: "{POKEMON:topic} \uD480\uC774 \uC8FD\uC5B4 \uAE30\uC220\uC744 \uC4F8 \uC218 \uC5C6\uB2E4!"
  },
  heal: {
    fail: "  \uADF8\uB7EC\uB098 {POKEMON:topic} \uCCB4\uB825\uC774 \uAC00\uB4DD \uCC2C \uC0C1\uD0DC\uB2E4!"
  },
  healreplacement: {
    activate: "  {POKEMON:topic} Z\uD30C\uC6CC\uB85C \uAD50\uCCB4\uD55C \uAC19\uC740 \uD3B8\uC744 \uD68C\uBCF5\uD55C\uB2E4!"
  },
  nopp: {
    cant: "{POKEMON}\uC758 **{MOVE}**!\n  \uADF8\uB7EC\uB098 \uB0A8\uC740 PP\uAC00 \uC5C6\uC5C8\uB2E4!"
  },
  recharge: {
    cant: "{POKEMON:topic} \uACF5\uACA9\uC758 \uBC18\uB3D9\uC73C\uB85C \uC6C0\uC9C1\uC77C \uC218 \uC5C6\uB2E4!"
  },
  recoil: {
    damage: "  {POKEMON:topic} \uBC18\uB3D9\uC73C\uB85C \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!"
  },
  unboost: {
    fail: "  {POKEMON}\uC758 {STAT:topic} \uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uB294\uB2E4!",
    // per-stat form; SV ko_common:6483 "공격은 떨어지지 않는다!"
    failNoStat: "  {POKEMON}\uC758 \uB2A5\uB825\uC740 \uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uB294\uB2E4!"
    // SV ko_common:6479
  },
  struggle: {
    activate: "  {POKEMON:topic} \uC4F8 \uC218 \uC788\uB294 \uAE30\uC220\uC774 \uC5C6\uB2E4!"
  },
  trapped: {
    start: "  {POKEMON:topic} \uC774\uC81C \uB3C4\uB9DD\uCE60 \uC218 \uC5C6\uB2E4!"
  },
  dynamax: {
    start: null,
    // NEEDS TRANSLATION
    end: null,
    // NEEDS TRANSLATION
    block: "  \uB2E4\uC774\uB9E5\uC2A4\uC758 \uD798\uC73C\uB85C \uD295\uACA8 \uB0C8\uB2E4!",
    fail: "  {POKEMON:topic} \uACE0\uAC1C\uB97C \uAC00\uB85C\uC800\uC5C8\uB2E4. \uC774 \uAE30\uC220\uC740 \uC4F8 \uC218 \uC5C6\uB294 \uAC83 \uAC19\uB2E4..."
  },
  // weather
  sandstorm: {
    weatherName: "\uBAA8\uB798\uBC14\uB78C",
    start: "  \uBAA8\uB798\uBC14\uB78C\uC774 \uBD88\uAE30 \uC2DC\uC791\uD588\uB2E4!",
    end: "  \uBAA8\uB798\uBC14\uB78C\uC774 \uAC00\uB77C\uC549\uC558\uB2E4!",
    upkeep: "  (\uBAA8\uB798\uBC14\uB78C\uC774 \uC138\uCC28\uAC8C \uBD84\uB2E4!)",
    damage: "  \uBAA8\uB798\uBC14\uB78C\uC774 {POKEMON:object} \uB36E\uCCE4\uB2E4!"
  },
  sunnyday: {
    weatherName: "\uCF8C\uCCAD",
    start: "  \uD587\uC0B4\uC774 \uAC15\uD574\uC84C\uB2E4!",
    end: "  \uD587\uC0B4\uC774 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!",
    upkeep: "  (\uD587\uC0B4\uC774 \uAC15\uD558\uB2E4)"
  },
  raindance: {
    weatherName: "\uBE44",
    start: "  \uBE44\uAC00 \uB0B4\uB9AC\uAE30 \uC2DC\uC791\uD588\uB2E4!",
    end: "  \uBE44\uAC00 \uADF8\uCCE4\uB2E4!",
    upkeep: "  (\uBE44\uAC00 \uACC4\uC18D \uB0B4\uB9AC\uACE0 \uC788\uB2E4)"
  },
  hail: {
    weatherName: "\uC2F8\uB77C\uAE30\uB208",
    start: "  \uC2F8\uB77C\uAE30\uB208\uC774 \uB0B4\uB9AC\uAE30 \uC2DC\uC791\uD588\uB2E4!",
    end: "  \uC2F8\uB77C\uAE30\uB208\uC774 \uADF8\uCCE4\uB2E4!",
    upkeep: "  (\uC2F8\uB77C\uAE30\uB208\uC774 \uD718\uBAB0\uC544\uCE5C\uB2E4!)",
    damage: "  \uC2F8\uB77C\uAE30\uB208\uC774 {POKEMON:object} \uB36E\uCCE4\uB2E4!"
  },
  snowscape: {
    weatherName: "\uB208",
    start: "  \uB208\uC774 \uB0B4\uB9AC\uAE30 \uC2DC\uC791\uD588\uB2E4!",
    end: "  \uB208\uC774 \uADF8\uCCE4\uB2E4!",
    upkeep: "  (\uB208\uC774 \uD718\uBAB0\uC544\uCE5C\uB2E4!)"
  },
  desolateland: {
    weatherName: "\uD070\uAC00\uBB44",
    start: "  \uD587\uC0B4\uC774 \uC544\uC8FC \uAC15\uD574\uC84C\uB2E4!",
    end: "  \uD587\uC0B4\uC774 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!",
    block: "  \uAC15\uD55C \uD587\uC0B4\uC758 \uAE30\uC138\uB294 \uBA48\uCD94\uC9C0 \uC54A\uB294\uB2E4!",
    blockMove: "  \uAC15\uD55C \uD587\uC0B4\uC758 \uC601\uD5A5\uC73C\uB85C \uBB3C\uD0C0\uC785\uC758 \uACF5\uACA9\uC774 \uC99D\uBC1C\uD588\uB2E4!"
  },
  primordialsea: {
    weatherName: "\uD3ED\uC6B0",
    start: "  \uAC15\uD55C \uBE44\uAC00 \uB0B4\uB9AC\uAE30 \uC2DC\uC791\uD588\uB2E4!",
    end: "  \uAC15\uD55C \uBE44\uAC00 \uADF8\uCCE4\uB2E4!",
    block: "  \uAC15\uD55C \uBE44\uC758 \uAE30\uC138\uB294 \uBA48\uCD94\uC9C0 \uC54A\uB294\uB2E4!",
    blockMove: "  \uAC15\uD55C \uBE44\uC758 \uC601\uD5A5\uC73C\uB85C \uBD88\uAF43\uD0C0\uC785\uC758 \uACF5\uACA9\uC774 \uC0AC\uB77C\uC84C\uB2E4!"
  },
  deltastream: {
    weatherName: "\uB09C\uAE30\uB958",
    start: "  \uC218\uC218\uAED8\uB07C\uC758 \uB09C\uAE30\uB958\uAC00 \uBE44\uD589\uD3EC\uCF13\uBAAC\uC744 \uC9C0\uD0A8\uB2E4!",
    end: "  \uC218\uC218\uAED8\uB07C\uC758 \uB09C\uAE30\uB958\uAC00 \uAC00\uB77C\uC549\uC558\uB2E4!",
    activate: "  \uC218\uC218\uAED8\uB07C\uC758 \uB09C\uAE30\uB958\uAC00 \uACF5\uACA9\uC744 \uC57D\uD558\uAC8C \uB9CC\uB4E4\uC5C8\uB2E4!",
    block: "  \uC218\uC218\uAED8\uB07C\uC758 \uB09C\uAE30\uB958\uC758 \uAE30\uC138\uB294 \uBA48\uCD94\uC9C0 \uC54A\uB294\uB2E4!"
  },
  // terrain
  electricterrain: {
    start: "  \uBC1C\uBC11\uC5D0 \uC804\uAE30\uAC00 \uD750\uB974\uAE30 \uC2DC\uC791\uD588\uB2E4!",
    end: "  \uBC1C\uBC11\uC758 \uC804\uAE30\uAC00 \uC0AC\uB77C\uC84C\uB2E4!",
    block: "  {POKEMON:object} \uC77C\uB809\uD2B8\uB9AD\uD544\uB4DC\uAC00 \uC9C0\uCF1C \uC8FC\uACE0 \uC788\uB2E4!"
  },
  grassyterrain: {
    start: "  \uBC1C\uBC11\uC5D0 \uD480\uC774 \uBB34\uC131\uD574\uC84C\uB2E4!",
    end: "  \uBC1C\uBC11\uC758 \uD480\uC774 \uC0AC\uB77C\uC84C\uB2E4!",
    heal: "  {POKEMON}\uC758 \uCCB4\uB825\uC774 \uD68C\uBCF5\uB418\uC5C8\uB2E4!"
  },
  mistyterrain: {
    start: "  \uBC1C\uBC11\uC774 \uC548\uAC1C\uB85C \uC790\uC6B1\uD574\uC84C\uB2E4!",
    end: "  \uBC1C\uBC11\uC758 \uC548\uAC1C\uAC00 \uC0AC\uB77C\uC84C\uB2E4!",
    block: "  {POKEMON:object} \uBBF8\uC2A4\uD2B8\uD544\uB4DC\uAC00 \uC9C0\uCF1C \uC8FC\uACE0 \uC788\uB2E4!"
  },
  psychicterrain: {
    start: "  \uBC1C\uBC11\uC5D0\uC11C \uC774\uC0C1\uD55C \uB290\uB08C\uC774 \uB4E0\uB2E4!",
    end: "  \uBC1C\uBC11\uC758 \uC774\uC0C1\uD55C \uB290\uB08C\uC774 \uC0AC\uB77C\uC84C\uB2E4!",
    block: "  {POKEMON:topic} \uC0AC\uC774\uCF54\uD544\uB4DC\uAC00 \uC9C0\uCF1C \uC8FC\uACE0 \uC788\uB2E4!"
  },
  // field effects
  gravity: {
    start: "  \uC911\uB825\uC774 \uAC15\uD574\uC84C\uB2E4!",
    end: "  \uC911\uB825\uC774 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!",
    cant: "{POKEMON:topic} \uC911\uB825\uC774 \uAC15\uD574\uC11C {MOVE:object} \uC4F8 \uC218 \uC5C6\uB2E4!",
    activate: "{POKEMON:topic} \uC911\uB825\uC758 \uC601\uD5A5\uC73C\uB85C \uACF5\uC911\uC5D0 \uC788\uC744 \uC218 \uC5C6\uAC8C \uB418\uC5C8\uB2E4!"
  },
  magicroom: {
    start: "  \uC9C0\uB2C8\uAC8C \uD55C \uB3C4\uAD6C\uC758 \uD6A8\uACFC\uAC00 \uC5C6\uC5B4\uC9C0\uB294 \uACF5\uAC04\uC744 \uB9CC\uB4E4\uC5B4 \uB0C8\uB2E4!",
    end: "  \uB9E4\uC9C1\uB8F8\uC774 \uD574\uC81C\uB418\uC5B4 \uB3C4\uAD6C\uC758 \uD6A8\uACFC\uAC00 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!"
  },
  mudsport: {
    start: "  \uC804\uAE30\uC758 \uC704\uB825\uC774 \uC57D\uD574\uC84C\uB2E4!",
    end: "  \uD759\uB180\uC774\uC758 \uD6A8\uACFC\uAC00 \uC5C6\uC5B4\uC84C\uB2E4!"
  },
  trickroom: {
    start: "  {POKEMON:topic} \uC2DC\uACF5\uC744 \uB4A4\uD2C0\uC5C8\uB2E4!",
    end: "  \uB4A4\uD2C0\uB9B0 \uC2DC\uACF5\uC774 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!"
  },
  watersport: {
    start: "  \uBD88\uAF43\uC758 \uC704\uB825\uC774 \uC57D\uD574\uC84C\uB2E4!",
    end: "  \uBB3C\uB180\uC774\uC758 \uD6A8\uACFC\uAC00 \uC5C6\uC5B4\uC84C\uB2E4!"
  },
  wonderroom: {
    start: "  \uBC29\uC5B4\uC640 \uD2B9\uC218\uBC29\uC5B4\uAC00 \uBC14\uB00C\uB294 \uACF5\uAC04\uC744 \uB9CC\uB4E4\uC5B4 \uB0C8\uB2E4!",
    end: "  \uC6D0\uB354\uB8F8\uC774 \uD574\uC81C\uB418\uC5B4 \uBC29\uC5B4\uC640 \uD2B9\uC218\uBC29\uC5B4\uAC00 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!"
  },
  // misc
  crash: {
    damage: "  {POKEMON:topic} \uC758\uC695\uC774 \uB118\uCCD0\uC11C \uB545\uC5D0 \uBD80\uB52A\uCCE4\uB2E4!"
  }
};
//# sourceMappingURL=default.js.map
