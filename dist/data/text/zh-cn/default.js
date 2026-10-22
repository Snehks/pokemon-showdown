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
    opposingPokemon: "\u5BF9\u624B\u7684{NICKNAME}",
    fullName: null,
    // NEEDS TRANSLATION
    team: "\u6211\u65B9",
    opposingTeam: "\u5BF9\u624B",
    party: "\u6211\u65B9\u5B9D\u53EF\u68A6",
    opposingParty: "\u5BF9\u624B\u7684\u5B9D\u53EF\u68A6",
    turn: null,
    // NEEDS TRANSLATION
    switchIn: "{TRAINER}\u6D3E\u51FA\u4E86{FULLNAME}\uFF01",
    switchInOwn: "\u4E0A\u5427\uFF01{FULLNAME}\uFF01",
    switchOut: "{TRAINER}\u6362\u4E0B\u4E86{NICKNAME}\uFF01",
    switchOutOwn: "{NICKNAME}\uFF0C\u56DE\u6765\uFF01",
    drag: "{FULLNAME}\u88AB\u62D6\u8FDB\u4E86\u6218\u6597\uFF01",
    faint: "{POKEMON}\u5012\u4E0B\u4E86\uFF01",
    swap: "{POKEMON}\u548C{TARGET}\u4E92\u6362\u4E86\u573A\u5730\uFF01",
    swapCenter: "{POKEMON}\u79FB\u52A8\u5230\u4E86\u4E2D\u95F4\uFF01",
    // Multi Battles only
    canDynamax: "  {TRAINER}\u53EF\u4EE5\u6781\u5DE8\u5316\u4E86\uFF01",
    canDynamaxOwn: "  {TRAINER}\u5468\u56F4\u6C47\u805A\u4E86\u6781\u5DE8\u529B\uFF01",
    zEffect: "  {POKEMON}\u5F00\u59CB\u91CA\u653E\u5168\u529B\u7684\uFF3A\u62DB\u5F0F\uFF01",
    move: "{POKEMON}\u4F7F\u51FA\u4E86**{MOVE}**\uFF01",
    abilityActivation: "[{POKEMON}\u7684{ABILITY}]",
    mega: "  {POKEMON}\u7684{ITEM}\u548C{TRAINER}\u7684\u94A5\u77F3\u8D77\u4E86\u53CD\u5E94\uFF01",
    megaNoItem: "  {TRAINER}\u7684\u94A5\u77F3\u548C{POKEMON}\u8D77\u4E86\u53CD\u5E94\uFF01",
    megaGen6: "  {POKEMON}\u7684{ITEM}\u548C{TRAINER}\u7684\u8D85\u7EA7\u624B\u956F\u8D77\u4E86\u53CD\u5E94\uFF01",
    transformMega: "{POKEMON}\u8D85\u7EA7\u8FDB\u5316\u6210\u4E86\u8D85\u7EA7{SPECIES}\uFF01",
    primal: "{POKEMON}\u7684\u539F\u59CB\u56DE\u5F52\uFF01\u6062\u590D\u4E86\u539F\u59CB\u7684\u6837\u5B50\uFF01",
    zPower: "  {POKEMON}\u8BA9\uFF3A\u529B\u91CF\u7B3C\u7F69\u4E86\u5168\u8EAB\uFF01",
    zBroken: "  {POKEMON}\u6CA1\u80FD\u9632\u4F4F\u653B\u51FB\uFF0C\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01",
    terastallize: null,
    // NEEDS TRANSLATION
    // in case the different default messages didn't make it obvious, the difference
    // is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
    // message happens AFTER "Pokemon used Move!"
    cant: "{POKEMON}\u65E0\u6CD5\u4F7F\u7528{MOVE}\uFF01",
    cantNoMove: null,
    // NEEDS TRANSLATION
    fail: "  \u4F46\u662F\uFF0C\u6CA1\u6709\u8D77\u5230\u6548\u679C\uFF01\uFF01",
    // n.b. this is the default message for in-battle forme changes
    // for the move Transform and ability Imposter, see the entry for the move Transform
    transform: "{POKEMON}\u7684\u6837\u5B50\u53D1\u751F\u4E86\u53D8\u5316\uFF01",
    typeChange: "  {POKEMON}\u53D8\u6210\u4E86{TYPE}\u5C5E\u6027\uFF01",
    typeChangeFromEffect: "  {POKEMON}\u53D8\u6210\u4E86{TYPE}\u5C5E\u6027\uFF01",
    typeAdd: "  {POKEMON}\u589E\u52A0\u4E86{TYPE}\u5C5E\u6027\uFF01",
    start: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON}\u6446\u8131\u4E86{EFFECT}\u7684\u675F\u7F1A\uFF01",
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
    changeAbility: "  {POKEMON}\u7684\u7279\u6027\u53D8\u4E3A{ABILITY}\u4E86\uFF01",
    addItem: "  {POKEMON}\u83B7\u5F97\u4E86{ITEM}\uFF01",
    takeItem: "  {POKEMON}\u4ECE{SOURCE}\u90A3\u91CC\u593A\u53D6\u4E86{ITEM}\uFF01",
    eatItem: null,
    // NEEDS TRANSLATION
    useGem: "  {ITEM}\u52A0\u5F3A\u4E86{MOVE}\u7684\u5A01\u529B\uFF01",
    eatItemWeaken: "  {ITEM}\u51CF\u8F7B\u4E86\u5BF9{POKEMON}\u9020\u6210\u7684\u4F24\u5BB3\uFF01",
    removeItem: null,
    // NEEDS TRANSLATION
    activateItem: null,
    // NEEDS TRANSLATION
    activateWeaken: "  {ITEM}\u51CF\u8F7B\u4E86\u5BF9{POKEMON}\u9020\u6210\u7684\u4F24\u5BB3\uFF01",
    damage: "  ({POKEMON}\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01)",
    damagePercentage: null,
    // NEEDS TRANSLATION
    damageFromPokemon: "  {POKEMON}\u56E0{SOURCE}\u7684{ITEM}\u800C\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01",
    damageFromItem: "  {POKEMON}\u56E0{ITEM}\u800C\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01",
    damageFromPartialTrapping: "  {POKEMON}\u53D7\u5230\u4E86{MOVE}\u7684\u4F24\u5BB3\u3002",
    heal: "  {POKEMON}\u7684\u4F53\u529B\u56DE\u590D\u4E86\uFF01",
    healFromZEffect: "  \u56E0\u4E3A\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u56DE\u590D\u4E86\u4F53\u529B\uFF01",
    healFromEffect: "  {POKEMON}\u7528{EFFECT}\u56DE\u590D\u4E86\u4F53\u529B\uFF01",
    boost: "  {POKEMON}\u7684{STAT}\u63D0\u9AD8\u4E86\uFF01",
    boost2: "  {POKEMON}\u7684{STAT}\u5927\u5E45\u63D0\u9AD8\u4E86\uFF01",
    boost3: "  {POKEMON}\u7684{STAT}\u5DE8\u5E45\u63D0\u9AD8\u4E86\uFF01",
    boost0: "  {POKEMON}\u7684{STAT}\u5DF2\u7ECF\u65E0\u6CD5\u518D\u63D0\u9AD8\u4E86\uFF01",
    boostFromItem: "  {POKEMON}\u7528{ITEM}\u63D0\u9AD8\u4E86{STAT}\uFF01",
    boost2FromItem: "  {POKEMON}\u7528{ITEM}\u5927\u5E45\u63D0\u9AD8\u4E86{STAT}\uFF01",
    boost3FromItem: "  {POKEMON}\u7528{ITEM}\u5DE8\u5E45\u63D0\u9AD8\u4E86{STAT}\uFF01",
    boostFromZEffect: "  \u56E0\u4E3A\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u7684{STAT}\u63D0\u9AD8\u4E86\uFF01",
    boost2FromZEffect: "  \u56E0\u4E3A\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u7684{STAT}\u5927\u5E45\u63D0\u9AD8\u4E86\uFF01",
    boost3FromZEffect: "  \u56E0\u4E3A\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u7684{STAT}\u5DE8\u5E45\u63D0\u9AD8\u4E86\uFF01",
    boostMultipleFromZEffect: "  \u56E0\u4E3A\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u7684\u80FD\u529B\u63D0\u9AD8\u4E86\uFF01",
    unboost: "  {POKEMON}\u7684{STAT}\u964D\u4F4E\u4E86\uFF01",
    unboost2: "  {POKEMON}\u7684{STAT}\u5927\u5E45\u964D\u4F4E\u4E86\uFF01",
    unboost3: "  {POKEMON}\u7684{STAT}\u5DE8\u5E45\u964D\u4F4E\u4E86\uFF01",
    unboost0: "  {POKEMON}\u7684{STAT}\u5DF2\u7ECF\u65E0\u6CD5\u518D\u964D\u4F4E\u4E86\uFF01",
    unboostFromItem: null,
    // NEEDS TRANSLATION
    unboost2FromItem: null,
    // NEEDS TRANSLATION
    unboost3FromItem: null,
    // NEEDS TRANSLATION
    swapBoost: "  {POKEMON}\u548C\u5BF9\u624B\u4E92\u6362\u4E86\u81EA\u5DF1\u7684\u80FD\u529B\u53D8\u5316\uFF01",
    swapOffensiveBoost: "  {POKEMON}\u548C\u5BF9\u624B\u4E92\u6362\u4E86\u81EA\u5DF1\u7684\u653B\u51FB\u548C\u7279\u653B\u7684\u80FD\u529B\u53D8\u5316\uFF01",
    swapDefensiveBoost: "  {POKEMON}\u548C\u5BF9\u624B\u4E92\u6362\u4E86\u81EA\u5DF1\u7684\u9632\u5FA1\u548C\u7279\u9632\u7684\u80FD\u529B\u53D8\u5316\uFF01",
    copyBoost: "  {POKEMON}\u590D\u5236\u4E86{TARGET}\u7684\u80FD\u529B\u53D8\u5316\uFF01",
    clearBoost: "  {POKEMON}\u7684\u80FD\u529B\u53D8\u5316\u6D88\u5931\u4E86\uFF01",
    clearBoostFromZEffect: "  \u56E0\u4E3A\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u6062\u590D\u4E86\u964D\u4F4E\u7684\u80FD\u529B\uFF01",
    invertBoost: "  {POKEMON}\u7684\u80FD\u529B\u53D8\u5316\u98A0\u5012\u8FC7\u6765\u4E86\uFF01",
    clearAllBoost: "  \u6240\u6709\u80FD\u529B\u90FD\u590D\u539F\u4E86\uFF01",
    superEffective: "  \u6548\u679C\u7EDD\u4F73\uFF01",
    superEffectiveSpread: "  \u5BF9{POKEMON}\u6548\u679C\u7EDD\u4F73\uFF01",
    resisted: "  \u6548\u679C\u4E0D\u597D\u3002",
    resistedSpread: "  \u5BF9{POKEMON}\u6548\u679C\u4E0D\u597D\u3002",
    // this is official text meaning 4x effective. do not QC this
    extremelyEffective: "  \u6548\u679C\u65E0\u6BD4\u7EDD\u4F73\uFF01\uFF01",
    extremelyEffectiveSpread: "  \u5BF9{POKEMON}\u6548\u679C\u65E0\u6BD4\u7EDD\u4F73\uFF01\uFF01",
    // this is official text meaning 1/4x effective. do not QC this
    mostlyIneffective: "  \u6548\u679C\u76F8\u5F53\u4E0D\u597D\u3002",
    mostlyIneffectiveSpread: "  \u5BF9{POKEMON}\u6548\u679C\u76F8\u5F53\u4E0D\u597D\u3002",
    crit: "  \u51FB\u4E2D\u4E86\u8981\u5BB3\uFF01",
    critSpread: "  \u51FB\u4E2D\u4E86{POKEMON}\u7684\u8981\u5BB3\uFF01",
    immune: "  \u5BF9\u4E8E{POKEMON}\uFF0C\u597D\u50CF\u6CA1\u6709\u6548\u679C\u2026\u2026",
    immuneNoPokemon: "  \u4F46\u662F\uFF0C\u6CA1\u6709\u6548\u679C\uFF01",
    immuneOHKO: "  \u5BF9\u4E8E{POKEMON}\uFF0C\u5B8C\u5168\u6CA1\u6709\u6548\u679C\uFF01",
    miss: "  \u6CA1\u6709\u51FB\u4E2D{POKEMON}\uFF01",
    missNoPokemon: null,
    // NEEDS TRANSLATION
    center: "  \u590D\u4F4D\u79FB\u52A8\uFF01\uFF01",
    noTarget: null,
    // NEEDS TRANSLATION
    ohko: "  \u4E00\u51FB\u5FC5\u6740\uFF01",
    combine: "  \u4E24\u4E2A\u62DB\u5F0F\u5408\u4E8C\u4E3A\u4E00\uFF01\u8FD9\u662F\u5408\u4F53\u62DB\u5F0F\uFF01\uFF01",
    hitCount: "  \u51FB\u4E2D\u4E86{NUMBER}\u6B21\uFF01"
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
    start: "  {POKEMON}\u88AB\u707C\u4F24\u4E86\uFF01",
    startFromItem: "  {POKEMON}\u56E0{ITEM}\u88AB\u707C\u4F24\u4E86\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7ECF\u88AB\u707C\u4F24\u4E86\u3002",
    end: "  {POKEMON}\u7684\u707C\u4F24\u6CBB\u6108\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u6108\u4E86\u707C\u4F24\uFF01",
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u707C\u4F24\u7684\u4F24\u5BB3\uFF01"
  },
  frz: {
    start: "  {POKEMON}\u51BB\u4F4F\u4E86\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7ECF\u51BB\u4F4F\u4E86\u3002",
    end: "  {POKEMON}\u7684\u51B0\u51BB\u878D\u5316\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u6108\u4E86\u51B0\u51BB\u72B6\u6001\uFF01",
    endFromMove: "  \u56E0{POKEMON}\u7684{MOVE}\uFF0C\u51B0\u51BB\u878D\u5316\u4E86\uFF01",
    cant: "{POKEMON}\u56E0\u51BB\u4F4F\u4E86\u800C\u65E0\u6CD5\u884C\u52A8\uFF01"
  },
  par: {
    start: "  {POKEMON}\u9EBB\u75F9\u4E86\uFF0C\u5F88\u96BE\u4F7F\u51FA\u62DB\u5F0F\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7ECF\u9EBB\u75F9\u4E86\u3002",
    end: "  {POKEMON}\u7684\u9EBB\u75F9\u89E3\u9664\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u6108\u4E86\u9EBB\u75F9\uFF01",
    cant: "{POKEMON}\u56E0\u8EAB\u4F53\u9EBB\u75F9\u800C\u65E0\u6CD5\u884C\u52A8\uFF01"
  },
  psn: {
    start: "  {POKEMON}\u4E2D\u6BD2\u4E86\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7ECF\u4E2D\u6BD2\u4E86\u3002",
    end: "  {POKEMON}\u4E2D\u7684\u6BD2\u5F7B\u5E95\u6E05\u9664\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u6108\u4E86\u4E2D\u6BD2\uFF01",
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u6BD2\u7684\u4F24\u5BB3\uFF01"
  },
  tox: {
    start: "  {POKEMON}\u4E2D\u5267\u6BD2\u4E86\uFF01",
    startFromItem: "  {POKEMON}\u56E0{ITEM}\u4E2D\u5267\u6BD2\u4E86\uFF01",
    end: "#psn",
    endFromItem: "#psn",
    alreadyStarted: "#psn",
    damage: "#psn"
  },
  slp: {
    start: "  {POKEMON}\u7761\u7740\u4E86\uFF01",
    startFromRest: "  {POKEMON}\u7761\u7740\u4E86\uFF0C\u5E76\u4E14\u53D8\u5F97\u7CBE\u529B\u5145\u6C9B\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7ECF\u7761\u7740\u4E86\u3002",
    end: "  {POKEMON}\u9192\u8FC7\u6765\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u8BA9\u81EA\u5DF1\u9192\u8FC7\u6765\u4E86\uFF01",
    cant: "{POKEMON}\u6B63\u5728\u547C\u547C\u5927\u7761\u3002"
  },
  // misc effects
  confusion: {
    start: "  {POKEMON}\u6DF7\u4E71\u4E86\uFF01",
    startFromFatigue: "  {POKEMON}\u56E0\u7CBE\u75B2\u529B\u5C3D\u800C\u6DF7\u4E71\u4E86\uFF01",
    end: "  {POKEMON}\u7684\u6DF7\u4E71\u89E3\u9664\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u6108\u4E86\u6DF7\u4E71\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7ECF\u6DF7\u4E71\u4E86\u3002",
    activate: "  {POKEMON}\u6B63\u5728\u6DF7\u4E71\u4E2D\uFF01",
    damage: "\u4E0D\u77E5\u6240\u4EE5\u5730\u653B\u51FB\u4E86\u81EA\u5DF1\uFF01"
  },
  drain: {
    heal: "  \u4ECE{SOURCE}\u90A3\u91CC\u5438\u53D6\u4E86\u4F53\u529B\uFF01"
  },
  flinch: {
    cant: "{POKEMON}\u754F\u7F29\u4E86\uFF0C\u65E0\u6CD5\u4F7F\u51FA\u62DB\u5F0F\uFF01"
  },
  heal: {
    fail: "  \u4F46\u662F\uFF0C{POKEMON}\u7684\u4F53\u529B\u662F\u5168\u6EE1\u7684\uFF01"
  },
  healreplacement: {
    activate: "  \u56E0\u4E3A\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u5C06\u4F1A\u56DE\u590D\u6765\u66FF\u6362\u7684\u5B9D\u53EF\u68A6\u7684\uFF28\uFF30\uFF01"
  },
  nopp: {
    cant: "{POKEMON}\u4F7F\u51FA\u4E86**{MOVE}**\uFF01\n  \u4F46\u662F\uFF0C\u62DB\u5F0F\u7684\u5269\u4F59\u70B9\u6570\u5DF2\u7ECF\u7528\u5B8C\u4E86\uFF01"
  },
  recharge: {
    cant: "{POKEMON}\u56E0\u653B\u51FB\u7684\u53CD\u4F5C\u7528\u529B\u800C\u65E0\u6CD5\u52A8\u5F39\uFF01"
  },
  recoil: {
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u53CD\u4F5C\u7528\u529B\u9020\u6210\u7684\u4F24\u5BB3\uFF01"
  },
  unboost: {
    fail: "  {POKEMON}\u7684{STAT}\u4E0D\u4F1A\u964D\u4F4E\uFF01",
    // per-stat form; SV zh-Hans_common:6483 / Champions btl_set RankdownFail_ATK
    failNoStat: "  {POKEMON}\u7684\u80FD\u529B\u4E0D\u4F1A\u964D\u4F4E\uFF01"
    // SV zh-Hans_common:6479
  },
  struggle: {
    activate: "  {POKEMON}\u6CA1\u6709\u53EF\u7528\u6765\u65BD\u5C55\u7684\u62DB\u5F0F\uFF01"
  },
  trapped: {
    start: "  {POKEMON}\u5DF2\u7ECF\u65E0\u6CD5\u9003\u8D70\u4E86\uFF01"
  },
  dynamax: {
    start: null,
    // NEEDS TRANSLATION
    end: null,
    // NEEDS TRANSLATION
    block: "  \u88AB\u6781\u5DE8\u5316\u4E4B\u529B\u5F39\u5F00\u4E86\uFF01",
    fail: "  {POKEMON}\u6447\u4E86\u6447\u5934\uFF0C\u597D\u50CF\u65E0\u6CD5\u4F7F\u51FA\u8FD9\u4E2A\u62DB\u5F0F\u2026\u2026"
  },
  // weather
  sandstorm: {
    weatherName: "\u6C99\u66B4",
    start: "  \u5F00\u59CB\u522E\u6C99\u66B4\u4E86\uFF01",
    end: "  \u6C99\u66B4\u505C\u6B62\u4E86\uFF01",
    upkeep: "  (\u6C99\u66B4\u8086\u8650\uFF01)",
    damage: "  \u6C99\u66B4\u88AD\u51FB\u4E86{POKEMON}\uFF01"
  },
  sunnyday: {
    weatherName: "\u5927\u6674\u5929",
    start: "  \u65E5\u7167\u53D8\u5F3A\u4E86\uFF01",
    end: "  \u65E5\u7167\u590D\u539F\u4E86\uFF01",
    upkeep: null
    // NEEDS TRANSLATION
  },
  raindance: {
    weatherName: "\u4E0B\u96E8",
    start: "  \u5F00\u59CB\u4E0B\u96E8\u4E86\uFF01",
    end: "  \u96E8\u505C\u4E86\uFF01",
    upkeep: null
    // NEEDS TRANSLATION
  },
  hail: {
    weatherName: "\u51B0\u96F9",
    start: "  \u5F00\u59CB\u4E0B\u51B0\u96F9\u4E86\uFF01",
    end: "  \u51B0\u96F9\u4E0D\u4E0B\u4E86\uFF01",
    upkeep: "  (\u51B0\u96F9\u6F2B\u5929\uFF01)",
    damage: "  \u51B0\u96F9\u88AD\u51FB\u4E86{POKEMON}\uFF01"
  },
  snowscape: {
    weatherName: "\u4E0B\u96EA",
    start: "  \u5F00\u59CB\u4E0B\u96EA\u4E86\uFF01",
    end: "  \u96EA\u505C\u4E86\uFF01",
    upkeep: "  (\u6F2B\u5929\u5927\u96EA\uFF01)"
  },
  desolateland: {
    weatherName: "\u5927\u65E5\u7167",
    start: "  \u65E5\u7167\u53D8\u5F97\u975E\u5E38\u5F3A\u4E86\uFF01",
    end: "  \u65E5\u7167\u590D\u539F\u4E86\uFF01",
    block: "  \u5F3A\u65E5\u7167\u52BF\u5934\u4E0D\u51CF\uFF01",
    blockMove: "  \u53D7\u5F3A\u65E5\u7167\u7684\u5F71\u54CD\uFF0C\u6C34\u5C5E\u6027\u7684\u653B\u51FB\u88AB\u84B8\u53D1\u4E86\uFF01"
  },
  primordialsea: {
    weatherName: "\u5927\u96E8",
    start: "  \u5F00\u59CB\u4E0B\u8D77\u4E86\u66B4\u96E8\uFF01",
    end: "  \u66B4\u96E8\u505C\u4E86\uFF01",
    block: "  \u66B4\u96E8\u52BF\u5934\u4E0D\u51CF\uFF01",
    blockMove: "  \u53D7\u66B4\u96E8\u7684\u5F71\u54CD\uFF0C\u706B\u5C5E\u6027\u7684\u653B\u51FB\u88AB\u6251\u706D\u4E86\uFF01"
  },
  deltastream: {
    weatherName: "\u4E71\u6D41",
    start: "  \u795E\u79D8\u7684\u4E71\u6D41\u4FDD\u62A4\u7740\u98DE\u884C\u5C5E\u6027\u5B9D\u53EF\u68A6\uFF01",
    end: "  \u795E\u79D8\u7684\u4E71\u6D41\u505C\u6B62\u4E86\uFF01",
    activate: "  \u795E\u79D8\u7684\u4E71\u6D41\u51CF\u5F31\u4E86\u653B\u51FB\uFF01",
    block: "  \u795E\u79D8\u7684\u4E71\u6D41\u52BF\u5934\u4E0D\u51CF\uFF01"
  },
  // terrain
  electricterrain: {
    start: "  \u811A\u4E0B\u7535\u5149\u98DE\u95EA\uFF01",
    end: "  \u811A\u4E0B\u7684\u7535\u5149\u6D88\u5931\u4E0D\u89C1\u4E86\uFF01",
    block: "  {POKEMON}\u6B63\u53D7\u5230\u7535\u6C14\u573A\u5730\u7684\u4FDD\u62A4\uFF01"
  },
  grassyterrain: {
    start: "  \u811A\u4E0B\u9752\u8349\u5982\u8335\uFF01",
    end: "  \u811A\u4E0B\u7684\u9752\u8349\u6D88\u5931\u4E0D\u89C1\u4E86\uFF01",
    heal: "  {POKEMON}\u7684\u4F53\u529B\u56DE\u590D\u4E86\uFF01"
  },
  mistyterrain: {
    start: "  \u811A\u4E0B\u96FE\u6C14\u7F2D\u7ED5\uFF01",
    end: "  \u811A\u4E0B\u7684\u96FE\u6C14\u6D88\u5931\u4E0D\u89C1\u4E86\uFF01",
    block: "  {POKEMON}\u6B63\u53D7\u5230\u8584\u96FE\u573A\u5730\u7684\u4FDD\u62A4\uFF01"
  },
  psychicterrain: {
    start: "  \u811A\u4E0B\u4F20\u6765\u4E86\u5947\u5999\u7684\u611F\u89C9\uFF01",
    end: "  \u811A\u4E0B\u7684\u5947\u5999\u611F\u89C9\u6D88\u5931\u4E86\uFF01",
    block: "  {POKEMON}\u6B63\u53D7\u5230\u7CBE\u795E\u573A\u5730\u7684\u4FDD\u62A4\uFF01"
  },
  // field effects
  gravity: {
    start: "  \u91CD\u529B\u53D8\u5F3A\u4E86\uFF01",
    end: "  \u91CD\u529B\u590D\u539F\u4E86\uFF01",
    cant: "{POKEMON}\u56E0\u91CD\u529B\u592A\u5F3A\u800C\u65E0\u6CD5\u4F7F\u51FA{MOVE}\uFF01",
    activate: "{POKEMON}\u56E0\u53D7\u5230\u91CD\u529B\u5F71\u54CD\u800C\u65E0\u6CD5\u5F85\u5728\u7A7A\u4E2D\uFF01"
  },
  magicroom: {
    start: "  \u51ED\u7A7A\u5236\u9020\u51FA\u4E86\u4F1A\u8BA9\u643A\u5E26\u7684\u9053\u5177\u7684\u6548\u679C\u6D88\u5931\u7684\u7A7A\u95F4\uFF01",
    end: "  \u9B54\u6CD5\u7A7A\u95F4\u88AB\u89E3\u9664\uFF0C\u9053\u5177\u7684\u6548\u679C\u590D\u539F\u4E86\uFF01"
  },
  mudsport: {
    start: "  \u7535\u6C14\u7684\u5A01\u529B\u51CF\u5F31\u4E86\uFF01",
    end: "  \u73A9\u6CE5\u5DF4\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  trickroom: {
    start: "  {POKEMON}\u626D\u66F2\u4E86\u65F6\u7A7A\uFF01",
    end: "  \u626D\u66F2\u7684\u65F6\u7A7A\u590D\u539F\u4E86\uFF01"
  },
  watersport: {
    start: "  \u706B\u7130\u7684\u5A01\u529B\u51CF\u5F31\u4E86\uFF01",
    end: "  \u73A9\u6C34\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  wonderroom: {
    start: "  \u51ED\u7A7A\u5236\u9020\u51FA\u4E86\u4E92\u6362\u9632\u5FA1\u548C\u7279\u9632\u7684\u7A7A\u95F4\uFF01",
    end: "  \u5947\u5999\u7A7A\u95F4\u88AB\u89E3\u9664\uFF0C\u9632\u5FA1\u548C\u7279\u9632\u590D\u539F\u4E86\uFF01"
  },
  // misc
  crash: {
    damage: "  {POKEMON}\u56E0\u52BF\u5934\u8FC7\u731B\u800C\u649E\u5230\u4E86\u5730\u9762\uFF01"
  }
};
//# sourceMappingURL=default.js.map
