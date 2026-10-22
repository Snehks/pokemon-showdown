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
    opposingPokemon: "\u5C0D\u624B\u7684{NICKNAME}",
    fullName: null,
    // NEEDS TRANSLATION
    team: "\u6211\u65B9",
    opposingTeam: "\u5C0D\u624B",
    party: "\u6211\u65B9\u7684\u5BF6\u53EF\u5922",
    opposingParty: "\u5C0D\u624B\u7684\u5BF6\u53EF\u5922",
    turn: null,
    // NEEDS TRANSLATION
    switchIn: "{TRAINER}\u6D3E\u51FA\u4E86{FULLNAME}\uFF01",
    switchInOwn: "\u4E0A\u5427\uFF01{FULLNAME}\uFF01",
    switchOut: "{TRAINER}\u63DB\u4E0B\u4E86{NICKNAME}\uFF01",
    switchOutOwn: "{NICKNAME}\uFF0C\u56DE\u4F86\uFF01",
    drag: "{FULLNAME}\u88AB\u62D6\u51FA\u4F86\u6230\u9B25\u4E86\uFF01",
    faint: "{POKEMON}\u5012\u4E0B\u4E86\uFF01",
    swap: "{POKEMON}\u548C{TARGET}\u4E92\u63DB\u4E86\u4F4D\u7F6E\uFF01",
    swapCenter: "{POKEMON}\u79FB\u52D5\u5230\u4E86\u4E2D\u9593\uFF01",
    // Multi Battles only
    canDynamax: "  {TRAINER}\u80FD\u5920\u6975\u5DE8\u5316\u4E86\uFF01",
    canDynamaxOwn: "  {TRAINER}\u5468\u570D\u805A\u96C6\u4E86\u6975\u5DE8\u529B\uFF01",
    zEffect: "  {POKEMON}\u91CB\u653E\u4E86\u5168\u529B\u7684\uFF3A\u62DB\u5F0F\uFF01",
    move: "{POKEMON}\u4F7F\u51FA\u4E86**{MOVE}**\uFF01",
    abilityActivation: "[{POKEMON}\u7684{ABILITY}]",
    mega: "  {POKEMON}\u7684{ITEM}\u548C{TRAINER}\u7684\u9470\u77F3\u8D77\u4E86\u53CD\u61C9\uFF01",
    megaNoItem: "  {TRAINER}\u7684\u9470\u77F3\u548C{POKEMON}\u8D77\u4E86\u53CD\u61C9\uFF01",
    megaGen6: "  {POKEMON}\u7684{ITEM}\u548C{TRAINER}\u7684\u8D85\u7D1A\u624B\u9432\u7522\u751F\u4E86\u53CD\u61C9\uFF01",
    transformMega: "{POKEMON}\u8D85\u7D1A\u9032\u5316\u6210\u4E86\u8D85\u7D1A{SPECIES}\uFF01",
    primal: "{POKEMON}\u7684\u539F\u59CB\u56DE\u6B78\uFF01\u56DE\u5230\u4E86\u539F\u59CB\u7684\u6A23\u5B50\uFF01",
    zPower: "  {POKEMON}\u8B93\uFF3A\u529B\u91CF\u7C60\u7F69\u4E86\u5168\u8EAB\uFF01",
    zBroken: "  {POKEMON}\u6C92\u80FD\u9632\u4F4F\u653B\u64CA\uFF0C\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01",
    terastallize: null,
    // NEEDS TRANSLATION
    // in case the different default messages didn't make it obvious, the difference
    // is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
    // message happens AFTER "Pokemon used Move!"
    cant: "{POKEMON}\u7121\u6CD5\u4F7F\u7528{MOVE}\uFF01",
    cantNoMove: null,
    // NEEDS TRANSLATION
    fail: "  \u4F46\u662F\uFF0C\u6C92\u6709\u6548\u679C\uFF01\uFF01",
    // n.b. this is the default message for in-battle forme changes
    // for the move Transform and ability Imposter, see the entry for the move Transform
    transform: "{POKEMON}\u7684\u6A23\u5B50\u767C\u751F\u4E86\u8B8A\u5316\uFF01",
    typeChange: "  {POKEMON}\u8B8A\u6210\u4E86{TYPE}\u5C6C\u6027\uFF01",
    typeChangeFromEffect: "  {POKEMON}\u8B8A\u6210\u4E86{TYPE}\u5C6C\u6027\uFF01",
    typeAdd: "  {POKEMON}\u589E\u52A0\u4E86{TYPE}\u5C6C\u6027\uFF01",
    start: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON}\u64FA\u812B\u4E86{EFFECT}\u7684\u675F\u7E1B\uFF01",
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
    changeAbility: "  {POKEMON}\u7684\u7279\u6027\u8B8A\u6210{ABILITY}\u4E86\uFF01",
    addItem: "  {POKEMON}\u7372\u5F97\u4E86{ITEM}\uFF01",
    takeItem: "  {POKEMON}\u5F9E{SOURCE}\u90A3\u88E1\u596A\u53D6\u4E86{ITEM}\uFF01",
    eatItem: null,
    // NEEDS TRANSLATION
    useGem: "  {ITEM}\u52A0\u5F37\u4E86{MOVE}\u7684\u5A01\u529B\uFF01",
    eatItemWeaken: "  {ITEM}\u6E1B\u8F15\u4E86\u5C0D{POKEMON}\u9020\u6210\u7684\u50B7\u5BB3\uFF01",
    removeItem: null,
    // NEEDS TRANSLATION
    activateItem: null,
    // NEEDS TRANSLATION
    activateWeaken: "  {ITEM}\u6E1B\u8F15\u4E86\u5C0D{POKEMON}\u9020\u6210\u7684\u50B7\u5BB3\uFF01",
    damage: "  ({POKEMON}\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01)",
    damagePercentage: null,
    // NEEDS TRANSLATION
    damageFromPokemon: "  {POKEMON}\u56E0{SOURCE}\u7684{ITEM}\u800C\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01",
    damageFromItem: "  {POKEMON}\u56E0{ITEM}\u800C\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01",
    damageFromPartialTrapping: "  {POKEMON}\u53D7\u5230\u4E86{MOVE}\u7684\u50B7\u5BB3\u3002",
    heal: "  {POKEMON}\u7684\u9AD4\u529B\u56DE\u5FA9\u4E86\uFF01",
    healFromZEffect: "  \u56E0\u70BA\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u56DE\u5FA9\u4E86\u9AD4\u529B\uFF01",
    healFromEffect: "  {POKEMON}\u7528{EFFECT}\u56DE\u5FA9\u4E86\u9AD4\u529B\uFF01",
    boost: "  {POKEMON}\u7684{STAT}\u63D0\u9AD8\u4E86\uFF01",
    boost2: "  {POKEMON}\u7684{STAT}\u5927\u5E45\u63D0\u9AD8\u4E86\uFF01",
    boost3: "  {POKEMON}\u7684{STAT}\u6975\u5927\u5E45\u63D0\u9AD8\u4E86\uFF01",
    boost0: "  {POKEMON}\u7684{STAT}\u5DF2\u7D93\u7121\u6CD5\u518D\u63D0\u9AD8\u4E86\uFF01",
    boostFromItem: "  {POKEMON}\u7528{ITEM}\u63D0\u9AD8\u4E86{STAT}\uFF01",
    boost2FromItem: "  {POKEMON}\u7528{ITEM}\u5927\u5E45\u63D0\u9AD8\u4E86{STAT}\uFF01",
    boost3FromItem: "  {POKEMON}\u7528{ITEM}\u6975\u5927\u5E45\u63D0\u9AD8\u4E86{STAT}\uFF01",
    boostFromZEffect: "  \u56E0\u70BA\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u7684{STAT}\u63D0\u9AD8\u4E86\uFF01",
    boost2FromZEffect: "  \u56E0\u70BA\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u7684{STAT}\u5927\u5E45\u63D0\u9AD8\u4E86\uFF01",
    boost3FromZEffect: "  \u56E0\u70BA\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u7684{STAT}\u6975\u5927\u5E45\u63D0\u9AD8\u4E86\uFF01",
    boostMultipleFromZEffect: "  \u56E0\u70BA\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u7684\u80FD\u529B\u63D0\u9AD8\u4E86\uFF01",
    unboost: "  {POKEMON}\u7684{STAT}\u964D\u4F4E\u4E86\uFF01",
    unboost2: "  {POKEMON}\u7684{STAT}\u5927\u5E45\u964D\u4F4E\u4E86\uFF01",
    unboost3: "  {POKEMON}\u7684{STAT}\u6975\u5927\u5E45\u964D\u4F4E\u4E86\uFF01",
    unboost0: "  {POKEMON}\u7684{STAT}\u5DF2\u7D93\u7121\u6CD5\u518D\u964D\u4F4E\u4E86\uFF01",
    unboostFromItem: null,
    // NEEDS TRANSLATION
    unboost2FromItem: null,
    // NEEDS TRANSLATION
    unboost3FromItem: null,
    // NEEDS TRANSLATION
    swapBoost: "  {POKEMON}\u548C\u5C0D\u624B\u4E92\u63DB\u4E86\u81EA\u8EAB\u7684\u80FD\u529B\u8B8A\u5316\uFF01",
    swapOffensiveBoost: "  {POKEMON}\u548C\u5C0D\u624B\u4E92\u63DB\u4E86\u81EA\u8EAB\u7684\u653B\u64CA\u548C\u7279\u653B\u7684\u80FD\u529B\u8B8A\u5316\uFF01",
    swapDefensiveBoost: "  {POKEMON}\u548C\u5C0D\u624B\u4E92\u63DB\u4E86\u81EA\u8EAB\u7684\u9632\u79A6\u548C\u7279\u9632\u7684\u80FD\u529B\u8B8A\u5316\uFF01",
    copyBoost: "  {POKEMON}\u8907\u88FD\u4E86{TARGET}\u7684\u80FD\u529B\u8B8A\u5316\uFF01",
    clearBoost: "  {POKEMON}\u7684\u80FD\u529B\u8B8A\u5316\u89E3\u9664\u4E86\uFF01",
    clearBoostFromZEffect: "  \u56E0\u70BA\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u964D\u4F4E\u7684\u80FD\u529B\u6062\u5FA9\u4E86\uFF01",
    invertBoost: "  {POKEMON}\u7684\u80FD\u529B\u8B8A\u5316\u985B\u5012\u904E\u4F86\u4E86\uFF01",
    clearAllBoost: "  \u6240\u6709\u80FD\u529B\u90FD\u5FA9\u539F\u4E86\uFF01",
    superEffective: "  \u6548\u679C\u7D55\u4F73\uFF01",
    superEffectiveSpread: "  \u5C0D{POKEMON}\u6548\u679C\u7D55\u4F73\uFF01",
    resisted: "  \u6548\u679C\u4E0D\u597D\u3002",
    resistedSpread: "  \u5C0D{POKEMON}\u6548\u679C\u4E0D\u597D\u3002",
    // this is official text meaning 4x effective. do not QC this
    extremelyEffective: "  \u6548\u679C\u7121\u6BD4\u7D55\u4F73\uFF01\uFF01",
    extremelyEffectiveSpread: "  \u5C0D{POKEMON}\u6548\u679C\u7121\u6BD4\u7D55\u4F73\uFF01\uFF01",
    // this is official text meaning 1/4x effective. do not QC this
    mostlyIneffective: "  \u6548\u679C\u76F8\u7576\u4E0D\u597D\u3002",
    mostlyIneffectiveSpread: "  \u5C0D{POKEMON}\u6548\u679C\u76F8\u7576\u4E0D\u597D\u3002",
    crit: "  \u64CA\u4E2D\u4E86\u8981\u5BB3\uFF01",
    critSpread: "  \u64CA\u4E2D\u4E86{POKEMON}\u7684\u8981\u5BB3\uFF01",
    immune: "  \u5C0D\u65BC{POKEMON}\uFF0C\u597D\u50CF\u6C92\u6709\u6548\u679C\u2026\u2026",
    immuneNoPokemon: "  \u4F46\u662F\uFF0C\u6C92\u6709\u6548\u679C\uFF01",
    immuneOHKO: "  \u5C0D\u65BC{POKEMON}\u5B8C\u5168\u6C92\u6709\u6548\u679C\uFF01",
    miss: "  \u6C92\u6709\u64CA\u4E2D{POKEMON}\uFF01",
    missNoPokemon: null,
    // NEEDS TRANSLATION
    center: "  \u5FA9\u4F4D\u79FB\u52D5\uFF01\uFF01",
    noTarget: null,
    // NEEDS TRANSLATION
    ohko: "  \u4E00\u64CA\u5FC5\u6BBA\uFF01",
    combine: "  \u5169\u500B\u62DB\u5F0F\u5408\u800C\u70BA\u4E00\uFF01\u9019\u662F\u5408\u9AD4\u62DB\u5F0F\uFF01",
    hitCount: "  \u64CA\u4E2D\u4E86{NUMBER}\u6B21\uFF01"
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
    start: "  {POKEMON}\u88AB\u707C\u50B7\u4E86\uFF01",
    startFromItem: "  {POKEMON}\u56E0{ITEM}\u800C\u88AB\u707C\u50B7\u4E86\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7D93\u88AB\u707C\u50B7\u4E86\u3002",
    end: "  {POKEMON}\u7684\u707C\u50B7\u75CA\u7652\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u7652\u4E86\u707C\u50B7\uFF01",
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u707C\u50B7\u7684\u50B7\u5BB3\uFF01"
  },
  frz: {
    start: "  {POKEMON}\u51CD\u4F4F\u4E86\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7D93\u51CD\u4F4F\u4E86\u3002",
    end: "  {POKEMON}\u7684\u51B0\u51CD\u878D\u5316\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u7652\u4E86\u51B0\u51CD\u72C0\u614B\uFF01",
    endFromMove: "  {POKEMON}\u7684{MOVE}\u8B93\u51B0\u51CD\u878D\u5316\u4E86\uFF01",
    cant: "{POKEMON}\u56E0\u51CD\u4F4F\u4E86\u800C\u7121\u6CD5\u884C\u52D5\uFF01"
  },
  par: {
    start: "  {POKEMON}\u9EBB\u75FA\u4E86\uFF0C\u4E0D\u6613\u4F7F\u51FA\u62DB\u5F0F\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7D93\u9EBB\u75FA\u4E86\u3002",
    end: "  {POKEMON}\u7684\u9EBB\u75FA\u89E3\u9664\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u7652\u4E86\u9EBB\u75FA\uFF01",
    cant: "{POKEMON}\u56E0\u8EAB\u9AD4\u9EBB\u75FA\u800C\u7121\u6CD5\u884C\u52D5\uFF01"
  },
  psn: {
    start: "  {POKEMON}\u4E2D\u6BD2\u4E86\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7D93\u4E2D\u6BD2\u4E86\u3002",
    end: "  {POKEMON}\u4E2D\u7684\u6BD2\u5FB9\u5E95\u6E05\u9664\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u7652\u4E86\u4E2D\u6BD2\uFF01",
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u6BD2\u7684\u50B7\u5BB3\uFF01"
  },
  tox: {
    start: "  {POKEMON}\u4E2D\u5287\u6BD2\u4E86\uFF01",
    startFromItem: "  {POKEMON}\u56E0{ITEM}\u800C\u4E2D\u5287\u6BD2\u4E86\uFF01",
    end: "#psn",
    endFromItem: "#psn",
    alreadyStarted: "#psn",
    damage: "#psn"
  },
  slp: {
    start: "  {POKEMON}\u7761\u8457\u4E86\uFF01",
    startFromRest: "  {POKEMON}\u7761\u8457\u4E86\uFF0C\u8B8A\u5F97\u7CBE\u529B\u5145\u6C9B\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7D93\u7761\u8457\u4E86\u3002",
    end: "  {POKEMON}\u9192\u904E\u4F86\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u8B93\u81EA\u5DF1\u9192\u904E\u4F86\u4E86\uFF01",
    cant: "{POKEMON}\u6B63\u5728\u547C\u547C\u5927\u7761\u3002"
  },
  // misc effects
  confusion: {
    start: "  {POKEMON}\u6DF7\u4E82\u4E86\uFF01",
    startFromFatigue: "  {POKEMON}\u56E0\u7CBE\u75B2\u529B\u76E1\u800C\u6DF7\u4E82\u4E86\uFF01",
    end: "  {POKEMON}\u7684\u6DF7\u4E82\u89E3\u9664\u4E86\uFF01",
    endFromItem: "  {POKEMON}\u7528{ITEM}\u6CBB\u7652\u4E86\u6DF7\u4E82\uFF01",
    alreadyStarted: "  {POKEMON}\u5DF2\u7D93\u6DF7\u4E82\u4E86\u3002",
    activate: "  {POKEMON}\u6B63\u5728\u6DF7\u4E82\u4E2D\uFF01",
    damage: "\u4E0D\u77E5\u6240\u4EE5\u5730\u653B\u64CA\u4E86\u81EA\u5DF1\uFF01"
  },
  drain: {
    heal: "  \u5F9E{SOURCE}\u90A3\u88E1\u5438\u53D6\u4E86\u9AD4\u529B\uFF01"
  },
  flinch: {
    cant: "{POKEMON}\u754F\u7E2E\u4E86\uFF0C\u7121\u6CD5\u4F7F\u51FA\u62DB\u5F0F\uFF01"
  },
  heal: {
    fail: "  \u4F46\u662F\uFF0C{POKEMON}\u7684\u9AD4\u529B\u662F\u5168\u6EFF\u7684\uFF01"
  },
  healreplacement: {
    activate: "  \u56E0\u70BA\uFF3A\u529B\u91CF\uFF0C{POKEMON}\u5C07\u6703\u56DE\u5FA9\u66FF\u63DB\u4E0A\u5834\u7684\u5BF6\u53EF\u5922\u7684\u9AD4\u529B\uFF01"
  },
  nopp: {
    cant: "{POKEMON}\u4F7F\u51FA\u4E86**{MOVE}**\uFF01\n  \u4F46\u662F\uFF0C\u62DB\u5F0F\u7684\u9EDE\u6578\u5DF2\u7D93\u7528\u5B8C\u4E86\uFF01"
  },
  recharge: {
    cant: "{POKEMON}\u56E0\u653B\u64CA\u7684\u53CD\u4F5C\u7528\u529B\u800C\u7121\u6CD5\u52D5\u5F48\uFF01"
  },
  recoil: {
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u53CD\u4F5C\u7528\u529B\u9020\u6210\u7684\u50B7\u5BB3\uFF01"
  },
  unboost: {
    fail: "  \u7121\u6CD5\u964D\u4F4E{POKEMON}\u7684{STAT}\uFF01",
    // per-stat form; SV zh-Hant_common:6483 / Champions btl_set RankdownFail_ATK
    failNoStat: "  \u7121\u6CD5\u964D\u4F4E{POKEMON}\u7684\u80FD\u529B\uFF01"
    // SV zh-Hant_common:6479
  },
  struggle: {
    activate: "  {POKEMON}\u6C92\u6709\u53EF\u7528\u4F86\u65BD\u5C55\u7684\u62DB\u5F0F\uFF01"
  },
  trapped: {
    start: "  {POKEMON}\u5DF2\u7D93\u7121\u6CD5\u9003\u8D70\u4E86\uFF01"
  },
  dynamax: {
    start: null,
    // NEEDS TRANSLATION
    end: null,
    // NEEDS TRANSLATION
    block: "  \u88AB\u6975\u5DE8\u5316\u7684\u529B\u91CF\u5F48\u958B\u4E86\uFF01",
    fail: "  {POKEMON}\u6416\u4E86\u6416\u982D\uFF0C\u597D\u50CF\u7121\u6CD5\u4F7F\u51FA\u9019\u500B\u62DB\u5F0F\u2026\u2026"
  },
  // weather
  sandstorm: {
    weatherName: "\u6C99\u66B4",
    start: "  \u958B\u59CB\u522E\u6C99\u66B4\u4E86\uFF01",
    end: "  \u6C99\u66B4\u505C\u6B62\u4E86\uFF01",
    upkeep: "  (\u6C99\u66B4\u8086\u8650\uFF01)",
    damage: "  \u6C99\u66B4\u8972\u64CA\u4E86{POKEMON}\uFF01"
  },
  sunnyday: {
    weatherName: "\u5927\u6674\u5929",
    start: "  \u65E5\u7167\u8B8A\u5F37\u4E86\uFF01",
    end: "  \u65E5\u7167\u5FA9\u539F\u4E86\uFF01",
    upkeep: null
    // NEEDS TRANSLATION
  },
  raindance: {
    weatherName: "\u4E0B\u96E8",
    start: "  \u958B\u59CB\u4E0B\u96E8\u4E86\uFF01",
    end: "  \u96E8\u505C\u4E86\uFF01",
    upkeep: null
    // NEEDS TRANSLATION
  },
  hail: {
    weatherName: "\u51B0\u96F9",
    start: "  \u958B\u59CB\u4E0B\u51B0\u96F9\u4E86\uFF01",
    end: "  \u51B0\u96F9\u4E0D\u4E0B\u4E86\uFF01",
    upkeep: "  (\u51B0\u96F9\u6F2B\u5929\uFF01)",
    damage: "  \u51B0\u96F9\u8972\u64CA\u4E86{POKEMON}\uFF01"
  },
  snowscape: {
    weatherName: "\u4E0B\u96EA",
    start: "  \u958B\u59CB\u4E0B\u96EA\u4E86\uFF01",
    end: "  \u96EA\u4E0D\u4E0B\u4E86\uFF01",
    upkeep: "  (\u96EA\u7247\u6F2B\u5929\uFF01)"
  },
  desolateland: {
    weatherName: "\u5927\u65E5\u7167",
    start: "  \u65E5\u7167\u8B8A\u5F97\u975E\u5E38\u5F37\uFF01",
    end: "  \u65E5\u7167\u5FA9\u539F\u4E86\uFF01",
    block: "  \u5F37\u65E5\u7167\u52E2\u982D\u4E0D\u6E1B\uFF01",
    blockMove: "  \u53D7\u5F37\u65E5\u7167\u7684\u5F71\u97FF\uFF0C\u6C34\u5C6C\u6027\u7684\u653B\u64CA\u88AB\u84B8\u767C\u4E86\uFF01"
  },
  primordialsea: {
    weatherName: "\u5927\u96E8",
    start: "  \u958B\u59CB\u4E0B\u8D77\u4E86\u66B4\u96E8\uFF01",
    end: "  \u66B4\u96E8\u505C\u4E86\uFF01",
    block: "  \u66B4\u96E8\u52E2\u982D\u4E0D\u6E1B\uFF01",
    blockMove: "  \u53D7\u66B4\u96E8\u7684\u5F71\u97FF\uFF0C\u706B\u5C6C\u6027\u7684\u653B\u64CA\u88AB\u64B2\u6EC5\u4E86\uFF01"
  },
  deltastream: {
    weatherName: "\u4E82\u6D41",
    start: "  \u795E\u79D8\u7684\u4E82\u6D41\u4FDD\u8B77\u8457\u98DB\u884C\u5C6C\u6027\u5BF6\u53EF\u5922\uFF01",
    end: "  \u795E\u79D8\u7684\u4E82\u6D41\u505C\u6B62\u4E86\uFF01",
    activate: "  \u795E\u79D8\u7684\u4E82\u6D41\u6E1B\u5F31\u4E86\u653B\u64CA\uFF01",
    block: "  \u795E\u79D8\u7684\u4E82\u6D41\u52E2\u982D\u4E0D\u6E1B\uFF01"
  },
  // terrain
  electricterrain: {
    start: "  \u8173\u4E0B\u96FB\u6D41\u98DB\u9583\uFF01",
    end: "  \u8173\u4E0B\u7684\u96FB\u6D41\u6D88\u5931\u4E86\uFF01",
    block: "  {POKEMON}\u6B63\u53D7\u5230\u96FB\u6C23\u5834\u5730\u7684\u4FDD\u8B77\uFF01"
  },
  grassyterrain: {
    start: "  \u8173\u4E0B\u9752\u8349\u5982\u8335\uFF01",
    end: "  \u8173\u4E0B\u7684\u9752\u8349\u6D88\u5931\u4E0D\u898B\u4E86\uFF01",
    heal: "  {POKEMON}\u7684\u9AD4\u529B\u56DE\u5FA9\u4E86\uFF01"
  },
  mistyterrain: {
    start: "  \u8173\u4E0B\u9727\u6C23\u7E5A\u7E5E\uFF01",
    end: "  \u8173\u4E0B\u7684\u9727\u6C23\u6D88\u5931\u4E0D\u898B\u4E86\uFF01",
    block: "  {POKEMON}\u6B63\u53D7\u5230\u8584\u9727\u5834\u5730\u7684\u4FDD\u8B77\uFF01"
  },
  psychicterrain: {
    start: "  \u8173\u4E0B\u50B3\u4F86\u4E86\u5947\u5999\u7684\u611F\u89BA\uFF01",
    end: "  \u8173\u4E0B\u7684\u5947\u5999\u611F\u89BA\u6D88\u5931\u4E86\uFF01",
    block: "  {POKEMON}\u6B63\u53D7\u5230\u7CBE\u795E\u5834\u5730\u7684\u4FDD\u8B77\uFF01"
  },
  // field effects
  gravity: {
    start: "  \u91CD\u529B\u8B8A\u5F37\u4E86\uFF01",
    end: "  \u91CD\u529B\u5FA9\u539F\u4E86\uFF01",
    cant: "{POKEMON}\u56E0\u91CD\u529B\u592A\u5F37\u800C\u7121\u6CD5\u4F7F\u51FA{MOVE}\uFF01",
    activate: "{POKEMON}\u56E0\u91CD\u529B\u7684\u5F71\u97FF\u800C\u7121\u6CD5\u7559\u5728\u7A7A\u4E2D\uFF01"
  },
  magicroom: {
    start: "  \u6191\u7A7A\u88FD\u9020\u51FA\u4E86\u6703\u8B93\u651C\u5E36\u7684\u9053\u5177\u7684\u6548\u679C\u6D88\u5931\u7684\u7A7A\u9593\uFF01",
    end: "  \u9B54\u6CD5\u7A7A\u9593\u88AB\u89E3\u9664\uFF0C\u9053\u5177\u7684\u6548\u679C\u5FA9\u539F\u4E86\uFF01"
  },
  mudsport: {
    start: "  \u96FB\u6C23\u7684\u5A01\u529B\u6E1B\u5F31\u4E86\uFF01",
    end: "  \u73A9\u6CE5\u5DF4\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  trickroom: {
    start: "  {POKEMON}\u626D\u66F2\u4E86\u6642\u7A7A\uFF01",
    end: "  \u626D\u66F2\u7684\u6642\u7A7A\u5FA9\u539F\u4E86\uFF01"
  },
  watersport: {
    start: "  \u706B\u7130\u7684\u5A01\u529B\u6E1B\u5F31\u4E86\uFF01",
    end: "  \u73A9\u6C34\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  wonderroom: {
    start: "  \u6191\u7A7A\u88FD\u9020\u51FA\u4E86\u4E92\u63DB\u9632\u79A6\u548C\u7279\u9632\u7684\u7A7A\u9593\uFF01",
    end: "  \u5947\u5999\u7A7A\u9593\u88AB\u89E3\u9664\uFF0C\u9632\u79A6\u548C\u7279\u9632\u5FA9\u539F\u4E86\uFF01"
  },
  // misc
  crash: {
    damage: "  {POKEMON}\u56E0\u52E2\u982D\u904E\u731B\u800C\u649E\u5230\u4E86\u5730\u9762\uFF01"
  }
};
//# sourceMappingURL=default.js.map
