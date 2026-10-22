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
var abilities_exports = {};
__export(abilities_exports, {
  AbilitiesText: () => AbilitiesText
});
module.exports = __toCommonJS(abilities_exports);
const AbilitiesText = {
  noability: {
    name: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  adaptability: {
    name: "\u9069\u61C9\u529B",
    // Official flavor text: "與自身同屬性的招式 威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aerilate: {
    name: "\u98DB\u884C\u76AE\u819A",
    // Official flavor text: "一般屬性的招式 會變為飛行屬性。 威力會少量提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  aftermath: {
    name: "\u5F15\u7206",
    // Official flavor text: "瀕死時， 會對接觸到自己的對手造成傷害。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01"
  },
  airlock: {
    name: "\u6C23\u9598",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u5929\u6C23\u7684\u5F71\u97FF\u6D88\u5931\u4E86\uFF01"
  },
  analytic: {
    name: "\u5206\u6790",
    // Official flavor text: "如果在最後使出招式， 招式的威力就會變強。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  angerpoint: {
    name: "\u61A4\u6012\u7A74\u4F4D",
    // Official flavor text: "要害被擊中時會大發雷霆。 攻擊力會提高到最大。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    boost: "  {POKEMON}\u7684\u653B\u64CA\u88AB\u63D0\u9AD8\u5230\u4E86\u6700\u5927\uFF01"
  },
  angershell: {
    name: "\u61A4\u6012\u7532\u6BBC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  anticipation: {
    name: "\u5371\u96AA\u9810\u77E5",
    // Official flavor text: "察覺對手持有的 危險招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u767C\u6296\u4E86\uFF01"
  },
  arenatrap: {
    name: "\u6C99\u7A74",
    // Official flavor text: "在戰鬥中讓對手無法逃走。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  armortail: {
    name: "\u5C3E\u7532",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  aromaveil: {
    name: "\u82B3\u9999\u5E55",
    // Official flavor text: "可防住向自己和同伴 發出的心靈攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u6B63\u53D7\u5230\u82B3\u9999\u5E55\u7684\u4FDD\u8B77\uFF01"
  },
  asone: {
    name: "\u4EBA\u99AC\u4E00\u9AD4",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u517C\u5177\uFF12\u7A2E\u7279\u6027\uFF01"
  },
  asoneglastrier: {
    name: "\u4EBA\u99AC\u4E00\u9AD4\uFF08\u96EA\u66B4\u99AC\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  asonespectrier: {
    name: "\u4EBA\u99AC\u4E00\u9AD4\uFF08\u9748\u5E7D\u99AC\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurabreak: {
    name: "\u6C23\u5834\u7834\u58DE",
    // Official flavor text: "讓氣場的效果逆轉， 並降低威力。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u58D3\u5236\u4E86\u6240\u6709\u6C23\u5834\uFF01"
  },
  auraguard: {
    name: "\u6C23\u5834\u7834\u58DE",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  baddreams: {
    name: "\u5922\u9B58",
    // Official flavor text: "給予陷入睡眠狀態的對手傷害。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON}\u6B63\u88AB\u60E1\u5922\u7E8F\u8EAB\uFF01"
  },
  ballfetch: {
    name: "\u64BF\u7403",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battery: {
    name: "\u84C4\u96FB\u6C60",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlearmor: {
    name: "\u6230\u9B25\u76D4\u7532",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlebond: {
    name: "\u727D\u7D46\u8B8A\u8EAB",
    // Official flavor text: "打倒對手時，與訓練家的牽絆會加深， 變化成小智版甲賀忍蛙。 飛水手裡劍的威力會增強。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u6E3E\u8EAB\u5145\u6EFF\u4E86\u727D\u7D46\u4E4B\u529B\uFF01",
    transform: "{POKEMON}\u8B8A\u8EAB\u6210\u4E86\u5C0F\u667A\u7248\u7532\u8CC0\u5FCD\u86D9\uFF01"
  },
  beadsofruin: {
    name: "\u707D\u798D\u4E4B\u7389",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u56E0\u70BA{POKEMON}\u7684\u707D\u798D\u4E4B\u7389\uFF0C\u5468\u570D\u7684\u7279\u9632\u6E1B\u5F31\u4E86\uFF01"
  },
  beastboost: {
    name: "\u7570\u7378\u63D0\u5347",
    // Official flavor text: "打倒對手的時候， 會提高自己最高的那項能力。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  berserk: {
    name: "\u6012\u706B\u6C96\u5929",
    // Official flavor text: "ＨＰ因對手的攻擊 降到一半時， 特攻會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bigpecks: {
    name: "\u5065\u58EF\u80F8\u808C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blaze: {
    name: "\u731B\u706B",
    // Official flavor text: "ＨＰ減少的時候， 火屬性的招式威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  bulletproof: {
    name: "\u9632\u5F48",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cheekpouch: {
    name: "\u9830\u56CA",
    // Official flavor text: "無論是哪種樹果， 吃下去後ＨＰ都會回復。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  chillingneigh: {
    name: "\u84BC\u767D\u5636\u9CF4",
    // Official flavor text: "打倒對手時 會用冰冷的聲音嘶鳴 並提高攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chlorophyll: {
    name: "\u8449\u7DA0\u7D20",
    // Official flavor text: "天氣為晴朗時， 速度會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  clearbody: {
    name: "\u6046\u6DE8\u4E4B\u8EC0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cloudnine: {
    name: "\u7121\u95DC\u5929\u6C23",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#airlock"
  },
  colorchange: {
    name: "\u8B8A\u8272",
    // Official flavor text: "自己的屬性會變為 擊中自己的對手招式的屬性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  comatose: {
    name: "\u7D55\u5C0D\u7761\u7720",
    // Official flavor text: "總是半夢半醒的狀態， 絕對不會醒來。 可在睡著的狀況下進行攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u8655\u65BC\u534A\u5922\u534A\u9192\u72C0\u614B\uFF01"
  },
  commander: {
    name: "\u767C\u865F\u65BD\u4EE4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u4F5C\u70BA\u767C\u865F\u65BD\u4EE4\u8005\u88AB{TARGET}\u541E\u4E0B\u53BB\u4E86\uFF01"
  },
  competitive: {
    name: "\u597D\u52DD",
    // Official flavor text: "能力被降低時， 特攻會大幅提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  compoundeyes: {
    name: "\u8907\u773C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  contrary: {
    name: "\u5531\u53CD\u8ABF",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  corrosion: {
    name: "\u8150\u8755",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  costar: {
    name: "\u540C\u53F0\u5171\u6F14",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cottondown: {
    name: "\u68C9\u7D6E",
    // Official flavor text: "受到攻擊時會撒下棉絮， 降低除自己以外的 所有寶可夢的速度。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cudchew: {
    name: "\u53CD\u82BB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  curiousmedicine: {
    name: "\u602A\u85E5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cursedbody: {
    name: "\u8A5B\u5492\u4E4B\u8EC0",
    // Official flavor text: "受到攻擊時， 有時會把對手的招式 變為定身法狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cutecharm: {
    name: "\u8FF7\u4EBA\u4E4B\u8EC0",
    // Official flavor text: "有時會讓接觸到自己的對手 陷入著迷狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  damp: {
    name: "\u6FD5\u6C23",
    // Official flavor text: "透過把周圍都弄濕， 使誰都無法使用自爆等爆炸類的招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    block: "  {SOURCE}\u7121\u6CD5\u4F7F\u7528{MOVE}\uFF01"
  },
  dancer: {
    name: "\u821E\u8005",
    // Official flavor text: "當有誰使出跳舞招式時， 自己也能接著使出跳舞招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkaura: {
    name: "\u6697\u9ED1\u6C23\u5834",
    // Official flavor text: "全體的惡屬性招式變強。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u91CB\u653E\u8457\u6697\u9ED1\u6C23\u5834\uFF01"
  },
  dauntlessshield: {
    name: "\u4E0D\u5C48\u4E4B\u76FE",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  dazzling: {
    name: "\u9BAE\u8277\u4E4B\u8EC0",
    // Official flavor text: "讓對手嚇一跳， 使其無法對我方使出先制招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  defeatist: {
    name: "\u8EDF\u5F31",
    // Official flavor text: "ＨＰ降到一半以下時， 會變得軟弱而使得 攻擊和特攻減半。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defiant: {
    name: "\u4E0D\u670D\u8F38",
    // Official flavor text: "能力被降低時， 攻擊會大幅提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  deltastream: {
    name: "\u5FB7\u723E\u5854\u6C23\u6D41",
    // Official flavor text: "變為令飛行屬性的弱點 消失的天氣。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  desolateland: {
    name: "\u7D42\u7D50\u4E4B\u5730",
    // Official flavor text: "變為讓水屬性攻擊 失效的天氣。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  disguise: {
    name: "\u756B\u76AE",
    // Official flavor text: "用畫皮覆蓋住身體， 可防住１次攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    block: "  \u756B\u76AE\u8B8A\u6210\u4E86\u66FF\u8EAB\uFF01",
    transform: "{POKEMON}\u7684\u756B\u76AE\u812B\u843D\u4E86\uFF01"
  },
  download: {
    name: "\u4E0B\u8F09",
    // Official flavor text: "比較對手的防禦和特防， 根據較低的那項能力 相應地提高自己的攻擊或特攻。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonize: {
    name: "\u9F8D\u76AE\u819A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonsmaw: {
    name: "\u9F8D\u984E",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drizzle: {
    name: "\u964D\u96E8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drought: {
    name: "\u65E5\u7167",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dryskin: {
    name: "\u4E7E\u71E5\u76AE\u819A",
    // Official flavor text: "下雨天氣時和受到水屬性的招式攻擊時， ＨＰ會回復。晴朗天氣時和受到火屬性的 招式攻擊時，ＨＰ會減少。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "#aftermath"
  },
  earlybird: {
    name: "\u65E9\u8D77",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eartheater: {
    name: "\u98DF\u571F",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eelevate: {
    name: "\u9C3B\u9C3B\u9AD8\u5347",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  effectspore: {
    name: "\u5B62\u5B50",
    // Official flavor text: "受到攻擊時， 有時會讓接觸到自己的對手 陷入中毒、麻痺或睡眠狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  electricsurge: {
    name: "\u96FB\u6C23\u88FD\u9020\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electromorphosis: {
    name: "\u96FB\u529B\u8F49\u63DB",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u53D7\u5230{MOVE}\u800C\u5145\u96FB\u4E86\uFF01"
  },
  embodyaspectcornerstone: {
    name: "\u9762\u5F71\u8F1D\u6620\uFF08\u790E\u77F3\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u8B93\u790E\u4E4B\u5047\u9762\u7DBB\u653E\u5149\u8F1D\uFF0C\u63D0\u9AD8\u4E86\u9632\u79A6\uFF01"
  },
  embodyaspecthearthflame: {
    name: "\u9762\u5F71\u8F1D\u6620\uFF08\u706B\u7076\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u8B93\u7076\u4E4B\u5047\u9762\u7DBB\u653E\u5149\u8F1D\uFF0C\u63D0\u9AD8\u4E86\u653B\u64CA\uFF01"
  },
  embodyaspectteal: {
    name: "\u9762\u5F71\u8F1D\u6620\uFF08\u78A7\u8349\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u8B93\u78A7\u4E4B\u5047\u9762\u7DBB\u653E\u5149\u8F1D\uFF0C\u63D0\u9AD8\u4E86\u901F\u5EA6\uFF01"
  },
  embodyaspectwellspring: {
    name: "\u9762\u5F71\u8F1D\u6620\uFF08\u6C34\u4E95\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u8B93\u4E95\u4E4B\u5047\u9762\u7DBB\u653E\u5149\u8F1D\uFF0C\u63D0\u9AD8\u4E86\u7279\u9632\uFF01"
  },
  emergencyexit: {
    name: "\u5371\u96AA\u8FF4\u907F",
    // Official flavor text: "ＨＰ減到一半時， 為了避開危險， 會退回同行隊伍裡面。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fairyaura: {
    name: "\u5996\u7CBE\u6C23\u5834",
    // Official flavor text: "全體的妖精屬性招式變強。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u91CB\u653E\u8457\u5996\u7CBE\u6C23\u5834\uFF01"
  },
  filter: {
    name: "\u904E\u6FFE",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firemane: {
    name: "\u706B\u7130\u9B03\u6BDB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamebody: {
    name: "\u706B\u7130\u4E4B\u8EC0",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  flareboost: {
    name: "\u53D7\u71B1\u6FC0\u5347",
    // Official flavor text: "陷入灼傷狀態時， 特殊招式的威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flashfire: {
    name: "\u5F15\u706B",
    // Official flavor text: "受到火屬性的招式攻擊時， 吸收火焰，讓自己使出的 火屬性招式變強。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u7684\u706B\u7130\u5A01\u529B\u63D0\u9AD8\u4E86\uFF01"
  },
  flowergift: {
    name: "\u82B1\u4E4B\u79AE",
    // Official flavor text: "天氣為晴朗時， 自己和同伴的攻擊和 特防能力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  flowerveil: {
    name: "\u82B1\u5E55",
    // Official flavor text: "我方的草屬性寶可夢 能力不會降低。 也不會陷入異常狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u6B63\u53D7\u5230\u82B1\u5E55\u7684\u4FDD\u8B77\uFF01"
  },
  fluffy: {
    name: "\u6BDB\u8338\u8338",
    // Official flavor text: "會將對手所給予的接觸類招式的傷害減半， 但火屬性招式的傷害會變為２倍。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  forecast: {
    name: "\u9670\u6674\u4E0D\u5B9A",
    // Official flavor text: "在天氣的影響下， 會變成水屬性、火屬性 或冰屬性之中的一種。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  forewarn: {
    name: "\u9810\u77E5\u5922",
    // Official flavor text: "出場時，預見１個 對手持有的招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  \u8B80\u53D6\u4E86{TARGET}\u7684{MOVE}\uFF01",
    activateNoTarget: null
    // NEEDS TRANSLATION
  },
  friendguard: {
    name: "\u53CB\u60C5\u9632\u5B88",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frisk: {
    name: "\u5BDF\u89BA",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u5BDF\u89BA\u5230\u4E86{TARGET}\u7684{ITEM}\uFF01",
    activateNoTarget: null
    // NEEDS TRANSLATION
  },
  fullmetalbody: {
    name: "\u91D1\u5C6C\u9632\u8B77",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furcoat: {
    name: "\u6BDB\u76AE\u5927\u8863",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  galewings: {
    name: "\u75BE\u98A8\u4E4B\u7FFC",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  galvanize: {
    name: "\u96FB\u6C23\u76AE\u819A",
    // Official flavor text: "一般屬性的招式 會變為電屬性。 威力會少量提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gluttony: {
    name: "\u8CAA\u5403\u9B3C",
    // Official flavor text: "原本ＨＰ變得很少時才會吃的樹果， 在ＨＰ還有一半時就會把它吃掉。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  goodasgold: {
    name: "\u9EC3\u91D1\u4E4B\u8EC0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gooey: {
    name: "\u9ECF\u6ED1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gorillatactics: {
    name: "\u4E00\u7329\u4E00\u610F",
    // Official flavor text: "攻擊雖然會提高， 但只能使出 最初選擇的招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grasspelt: {
    name: "\u8349\u4E4B\u6BDB\u76AE",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassysurge: {
    name: "\u9752\u8349\u88FD\u9020\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grimneigh: {
    name: "\u6F06\u9ED1\u5636\u9CF4",
    // Official flavor text: "打倒對手時 會用恐怖的聲音嘶鳴 並提高特攻。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guarddog: {
    name: "\u770B\u9580\u72AC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gulpmissile: {
    name: "\u4E00\u53E3\u98DB\u5F48",
    // Official flavor text: "衝浪或潛水時會叼來獵物。 當受到傷害時， 會吐出獵物攻擊對手。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guts: {
    name: "\u6BC5\u529B",
    // Official flavor text: "陷入異常狀態時， 會拿出毅力， 攻擊會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hadronengine: {
    name: "\u5F37\u5B50\u5F15\u64CE",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u5E03\u4E0B\u96FB\u6C23\u5834\u5730\uFF0C\u4F7F\u672A\u4F86\u7684\u6A5F\u95DC\u8E8D\u52D5\u8D77\u4F86\uFF01\uFF01",
    activate: "  {POKEMON}\u900F\u904E\u96FB\u6C23\u5834\u5730\u4F7F\u672A\u4F86\u7684\u6A5F\u95DC\u8E8D\u52D5\u8D77\u4F86\uFF01\uFF01"
  },
  harvest: {
    name: "\u6536\u7A6B",
    // Official flavor text: "可多次採收 已被使用過的樹果。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    addItem: "  {POKEMON}\u6536\u7A6B\u4E86{ITEM}\uFF01"
  },
  healer: {
    name: "\u6CBB\u7652\u4E4B\u5FC3",
    // Official flavor text: "有時會治癒同伴的異常狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    },
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  heatproof: {
    name: "\u8010\u71B1",
    // Official flavor text: "靠著耐熱的體質， 讓火屬性的招式威力減半。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  heavymetal: {
    name: "\u91CD\u91D1\u5C6C",
    // Official flavor text: "自己的重量會變為２倍。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  honeygather: {
    name: "\u63A1\u871C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hospitality: {
    name: "\u6B3E\u5F85",
    shortDesc: null,
    // NEEDS TRANSLATION
    heal: "  {POKEMON}\u559D\u5149\u4E86{SOURCE}\u6CE1\u7684\u8336\uFF01"
  },
  hugepower: {
    name: "\u5927\u529B\u58EB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hungerswitch: {
    name: "\u98FD\u4E86\u53C8\u9913",
    // Official flavor text: "在每個回合結束時， 會在滿腹花紋和空腹花紋之間 交替改變樣子。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hustle: {
    name: "\u6D3B\u529B",
    // Official flavor text: "自己的攻擊雖會變高， 但命中率會降低。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydration: {
    name: "\u6FD5\u6F64\u4E4B\u8EC0",
    // Official flavor text: "天氣為下雨時， 會治癒異常狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  hypercutter: {
    name: "\u602A\u529B\u9257",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icebody: {
    name: "\u51B0\u51CD\u4E4B\u8EC0",
    // Official flavor text: "天氣為冰雹時， 會漸漸回復ＨＰ。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  iceface: {
    name: "\u7D50\u51CD\u982D",
    // Official flavor text: "頭部的冰會代替自己承受 物理攻擊，但是樣子會改變。 下冰雹時，冰會回復原狀。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  icescales: {
    name: "\u51B0\u9C57\u7C89",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  illuminate: {
    name: "\u767C\u5149",
    // Official flavor text: "透過讓周圍變亮， 變得容易遇見野生的寶可夢。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  illusion: {
    name: "\u5E7B\u89BA",
    // Official flavor text: "假扮成同行隊伍中的 最後一隻寶可夢出場， 迷惑對手。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON}\u9020\u6210\u7684\u5E7B\u89BA\u89E3\u9664\u4E86\uFF01"
  },
  immunity: {
    name: "\u514D\u75AB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  imposter: {
    name: "\u8B8A\u8EAB\u8005",
    // Official flavor text: "變身為當前面對的寶可夢。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infiltrator: {
    name: "\u7A7F\u900F",
    // Official flavor text: "可穿透對手的屏障 或替身進行攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  innardsout: {
    name: "\u98DB\u51FA\u7684\u5167\u5728\u7269",
    // Official flavor text: "被對手打倒的時候， 會給予對手相當於 ＨＰ剩餘量的傷害。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#aftermath"
  },
  innerfocus: {
    name: "\u7CBE\u795E\u529B",
    // Official flavor text: "靠著經過鍛鍊的精神， 不會因對手的攻擊而畏縮。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  insomnia: {
    name: "\u4E0D\u7720",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  intimidate: {
    name: "\u5A01\u5687",
    // Official flavor text: "出場時威嚇對手， 使其退縮， 從而降低對手的攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  intrepidsword: {
    name: "\u4E0D\u6493\u4E4B\u528D",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  ironbarbs: {
    name: "\u9435\u523A",
    // Official flavor text: "用鐵刺給予接觸到自己的 對手傷害。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#roughskin"
  },
  ironfist: {
    name: "\u9435\u62F3",
    // Official flavor text: "使用到拳頭的招式 威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  justified: {
    name: "\u6B63\u7FA9\u4E4B\u5FC3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  keeneye: {
    name: "\u92B3\u5229\u76EE\u5149",
    // Official flavor text: "靠著銳利的目光， 命中率不會被降低。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  klutz: {
    name: "\u7B28\u62D9",
    // Official flavor text: "無法使用持有的道具。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafguard: {
    name: "\u8449\u5B50\u9632\u5B88",
    // Official flavor text: "天氣為晴朗時， 不會陷入異常狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  levitate: {
    name: "\u98C4\u6D6E",
    // Official flavor text: "從地面浮起， 從而不會受到地面屬性招式的攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  libero: {
    name: "\u81EA\u7531\u8005",
    // Official flavor text: "變為與自己使出的招式 相同的屬性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  lightmetal: {
    name: "\u8F15\u91D1\u5C6C",
    // Official flavor text: "自己的重量會減半。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightningrod: {
    name: "\u907F\u96F7\u91DD",
    // Official flavor text: "將電屬性的招式吸引到自己身上， 不但不會受到傷害，反而會提高特攻。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u5438\u5F15\u4E86\u653B\u64CA\uFF01"
  },
  limber: {
    name: "\u67D4\u8EDF",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lingeringaroma: {
    name: "\u7529\u4E0D\u6389\u7684\u6C23\u5473",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  {TARGET}\u88AB\u67D3\u4E0A\u4E86\u7529\u4E0D\u6389\u7684\u6C23\u5473\uFF01"
  },
  liquidooze: {
    name: "\u6C61\u6CE5\u6F3F",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON}\u5438\u5230\u4E86\u6C61\u6CE5\u6F3F\uFF01"
  },
  liquidvoice: {
    name: "\u6FD5\u6F64\u4E4B\u8072",
    // Official flavor text: "所有的聲音招式 都變為水屬性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  longreach: {
    name: "\u9060\u9694",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicbounce: {
    name: "\u9B54\u6CD5\u93E1",
    // Official flavor text: "可不受到由對手使出的 變化類招式所影響，並將其反彈。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    move: "#magiccoat"
  },
  magicguard: {
    name: "\u9B54\u6CD5\u9632\u5B88",
    // Official flavor text: "不會受到攻擊以外的傷害。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  magician: {
    name: "\u9B54\u8853\u5E2B",
    // Official flavor text: "奪走被自己招式 擊中的對手的道具。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magmaarmor: {
    name: "\u7194\u5CA9\u93A7\u7532",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magnetpull: {
    name: "\u78C1\u529B",
    // Official flavor text: "用磁力吸住鋼屬性的寶可夢， 使其無法逃走。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  marvelscale: {
    name: "\u795E\u5947\u9C57\u7247",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megalauncher: {
    name: "\u8D85\u7D1A\u767C\u5C04\u5668",
    // Official flavor text: "波動和波導類招式的 威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megasol: {
    name: "\u8D85\u7D1A\u65E5\u5149",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  merciless: {
    name: "\u4E0D\u4EC1\u4E0D\u7FA9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mimicry: {
    name: "\u64EC\u614B",
    // Official flavor text: "寶可夢的屬性會隨著 場地的狀態而改變。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u8B8A\u56DE\u539F\u4F86\u7684\u5C6C\u6027\u4E86\uFF01"
  },
  mindseye: {
    name: "\u5FC3\u773C",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  minus: {
    name: "\u8CA0\u96FB",
    // Official flavor text: "場上的夥伴之中， 如果有正電或負電特性的寶可夢， 自己的特攻會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  mirrorarmor: {
    name: "\u93E1\u7532",
    // Official flavor text: "只反彈自己受到的 能力降低效果。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistysurge: {
    name: "\u8584\u9727\u88FD\u9020\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moldbreaker: {
    name: "\u7834\u683C",
    // Official flavor text: "可不受特性影響， 向對手使出招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u6253\u7834\u4E86\u5E38\u898F\uFF01"
  },
  moody: {
    name: "\u5FC3\u60C5\u4E0D\u5B9A",
    // Official flavor text: "每一回合，能力中的某項 會大幅提高，相對地某項會降低。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  motordrive: {
    name: "\u96FB\u6C23\u5F15\u64CE",
    // Official flavor text: "受到電屬性的招式攻擊時， 不但不會受到傷害，反而速度會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moxie: {
    name: "\u81EA\u4FE1\u904E\u5EA6",
    // Official flavor text: "如果打倒對手， 會充滿自信並提高攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multiscale: {
    name: "\u591A\u91CD\u9C57\u7247",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multitype: {
    name: "\u591A\u5C6C\u6027",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  mummy: {
    name: "\u6728\u4E43\u4F0A",
    // Official flavor text: "被對手接觸到時， 會將對手變成木乃伊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  {TARGET}\u7684\u7279\u6027\u8B8A\u6210\u4E86\u6728\u4E43\u4F0A\uFF01"
  },
  myceliummight: {
    name: "\u83CC\u7D72\u4E4B\u529B",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  naturalcure: {
    name: "\u81EA\u7136\u56DE\u5FA9",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  },
  neuroforce: {
    name: "\u8166\u6838\u4E4B\u529B",
    // Official flavor text: "可進一步提升 效果絕佳招式的威力。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  neutralizinggas: {
    name: "\u5316\u5B78\u8B8A\u5316\u6C23\u9AD4",
    // Official flavor text: "當場上有特性是化學變化氣體的寶可夢時， 所有寶可夢的特性效果 都會消失或無法發動。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  \u5468\u570D\u5145\u6EFF\u4E86\u5316\u5B78\u8B8A\u5316\u6C23\u9AD4\uFF01",
    end: "  \u5316\u5B78\u8B8A\u5316\u6C23\u9AD4\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  noguard: {
    name: "\u7121\u9632\u5B88",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  normalize: {
    name: "\u4E00\u822C\u76AE\u819A",
    // Official flavor text: "無論是什麼屬性的招式， 全部都會變為一般屬性。 威力會少量提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  oblivious: {
    name: "\u9072\u920D",
    // Official flavor text: "感覺遲鈍， 不會陷入著迷和被挑釁狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  opportunist: {
    name: "\u8DDF\u98A8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  orichalcumpulse: {
    name: "\u7DCB\u7D05\u8108\u52D5",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u52A0\u5F37\u65E5\u7167\uFF0C\u4F7F\u53E4\u4EE3\u7684\u8108\u52D5\u72C2\u66B4\u8D77\u4F86\uFF01\uFF01",
    activate: "  {POKEMON}\u53D7\u5230\u65E5\u7167\uFF0C\u4F7F\u53E4\u4EE3\u7684\u8108\u52D5\u72C2\u66B4\u8D77\u4F86\uFF01\uFF01"
  },
  overcoat: {
    name: "\u9632\u5875",
    // Official flavor text: "不會受到沙暴或冰雹等的傷害。 不會受到粉末類招式的攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  overgrow: {
    name: "\u8302\u76DB",
    // Official flavor text: "ＨＰ減少的時候， 草屬性的招式威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  owntempo: {
    name: "\u6211\u884C\u6211\u7D20",
    // Official flavor text: "因為我行我素， 不會陷入混亂狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  parentalbond: {
    name: "\u89AA\u5B50\u611B",
    // Official flavor text: "親子倆可合計攻擊２次。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  pastelveil: {
    name: "\u7C89\u5F69\u8B77\u5E55",
    // Official flavor text: "自己和我方同伴都不會 陷入中毒的異常狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  perishbody: {
    name: "\u6EC5\u4EA1\u4E4B\u8EC0",
    // Official flavor text: "在受到接觸類招式攻擊時， ３個回合後雙方都會陷入瀕死。 替換寶可夢後效果就會消失。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u96D9\u65B9\u5C07\u5728\uFF13\u56DE\u5408\u5F8C\u6EC5\u4EA1\uFF01"
  },
  pickpocket: {
    name: "\u9806\u624B\u727D\u7F8A",
    // Official flavor text: "盜取接觸到自己的 對手的道具。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pickup: {
    name: "\u64BF\u62FE",
    // Official flavor text: "有時會撿來對手用過的道具。 冒險過程中也會撿來。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    addItem: "#recycle"
  },
  piercingdrill: {
    name: "\u8CAB\u7A7F\u947D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pixilate: {
    name: "\u5996\u7CBE\u76AE\u819A",
    // Official flavor text: "一般屬性的招式 會變為妖精屬性。 威力會少量提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  plus: {
    name: "\u6B63\u96FB",
    // Official flavor text: "場上的夥伴之中， 如果有正電或負電特性的寶可夢， 自己的特攻會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  poisonheal: {
    name: "\u6BD2\u7642",
    // Official flavor text: "陷入中毒狀態時， ＨＰ不會減少，反而會漸漸增加。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisonpoint: {
    name: "\u6BD2\u523A",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  poisonpuppeteer: {
    name: "\u6BD2\u5080\u5121",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisontouch: {
    name: "\u6BD2\u624B",
    // Official flavor text: "有時僅是接觸 就能讓對手中毒。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powerconstruct: {
    name: "\u7FA4\u805A\u8B8A\u5F62",
    // Official flavor text: "ＨＰ變為一半時， 細胞們會趕來支援， 變為完全體形態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u611F\u53D7\u5230\u5927\u91CF\u7684\u6C23\u606F\u5B58\u5728\u2026\u2026\uFF01",
    transform: "{POKEMON}\u8B8A\u6210\u4E86\u5B8C\u5168\u9AD4\u5F62\u614B\uFF01"
  },
  powerofalchemy: {
    name: "\u5316\u5B78\u4E4B\u529B",
    // Official flavor text: "繼承被打倒的同伴的特性， 變為相同的特性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "#receiver"
  },
  powerspot: {
    name: "\u80FD\u91CF\u9EDE",
    // Official flavor text: "只要站在旁邊， 招式的威力就會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prankster: {
    name: "\u60E1\u4F5C\u5287\u4E4B\u5FC3",
    // Official flavor text: "可以搶先使出變化類招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  pressure: {
    name: "\u58D3\u8FEB\u611F",
    // Official flavor text: "給予對手壓迫感， 大量減少其使用招式的ＰＰ。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u91CB\u653E\u8457\u58D3\u8FEB\u611F\uFF01"
  },
  primordialsea: {
    name: "\u59CB\u6E90\u4E4B\u6D77",
    // Official flavor text: "變為讓火屬性攻擊 失效的天氣。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prismarmor: {
    name: "\u7A1C\u93E1\u88DD\u7532",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  propellertail: {
    name: "\u87BA\u65CB\u5C3E\u9C2D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  protean: {
    name: "\u8B8A\u5E7B\u81EA\u5982",
    // Official flavor text: "變為與自己使出的招式 相同的屬性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  protosynthesis: {
    name: "\u53E4\u4EE3\u6D3B\u6027",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u7528\u5927\u6674\u5929\u767C\u52D5\u4E86\u53E4\u4EE3\u6D3B\u6027\uFF01",
    activateFromItem: "  {POKEMON}\u7528\u9A45\u52C1\u80FD\u91CF\u767C\u52D5\u4E86\u53E4\u4EE3\u6D3B\u6027\uFF01",
    start: "  {POKEMON}\u7684{STAT}\u5347\u9AD8\u4E86\uFF01",
    end: "  {POKEMON}\u7684\u53E4\u4EE3\u6D3B\u6027\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  psychicsurge: {
    name: "\u7CBE\u795E\u88FD\u9020\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  punkrock: {
    name: "\u9F90\u514B\u6416\u6EFE",
    // Official flavor text: "聲音招式的威力會提高。 受到聲音招式的傷害會減半。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purepower: {
    name: "\u745C\u4F3D\u4E4B\u529B",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purifyingsalt: {
    name: "\u6F54\u6DE8\u4E4B\u9E7D",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  quarkdrive: {
    name: "\u5938\u514B\u5145\u80FD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u900F\u904E\u96FB\u6C23\u5834\u5730\u767C\u52D5\u4E86\u5938\u514B\u5145\u80FD\uFF01",
    activateFromItem: "  {POKEMON}\u7528\u9A45\u52C1\u80FD\u91CF\u767C\u52D5\u4E86\u5938\u514B\u5145\u80FD\uFF01",
    start: "  {POKEMON}\u7684{STAT}\u5347\u9AD8\u4E86\uFF01",
    end: "  {POKEMON}\u7684\u5938\u514B\u5145\u80FD\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  queenlymajesty: {
    name: "\u5973\u738B\u7684\u5A01\u56B4",
    // Official flavor text: "向對手施加威懾力， 使其無法對我方使出先制招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  quickdraw: {
    name: "\u901F\u64CA",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u901F\u64CA\u4F7F{POKEMON}\u884C\u52D5\u8B8A\u5FEB\u4E86\uFF01"
  },
  quickfeet: {
    name: "\u98DB\u6BDB\u817F",
    // Official flavor text: "陷入異常狀態時， 速度會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  raindish: {
    name: "\u96E8\u76E4",
    // Official flavor text: "天氣為下雨時， 會漸漸回復ＨＰ。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  rattled: {
    name: "\u81BD\u602F",
    // Official flavor text: "受到惡屬性、幽靈屬性 和蟲屬性的招式攻擊時， 會因膽怯而使得速度提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  receiver: {
    name: "\u63A5\u7403\u624B",
    // Official flavor text: "繼承被打倒的同伴的特性， 變為相同的特性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  \u7E7C\u627F\u4E86{SOURCE}\u7684{ABILITY}\uFF01"
  },
  reckless: {
    name: "\u6368\u8EAB",
    // Official flavor text: "會讓自己因反作用力而受傷的招式 威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  refrigerate: {
    name: "\u51B0\u51CD\u76AE\u819A",
    // Official flavor text: "一般屬性的招式 會變為冰屬性。 威力會少量提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  regenerator: {
    name: "\u518D\u751F\u529B",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ripen: {
    name: "\u719F\u6210",
    // Official flavor text: "讓樹果成熟， 使效果變為２倍。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rivalry: {
    name: "\u9B25\u722D\u5FC3",
    // Official flavor text: "面對性別相同的對手， 會燃起鬥爭心，變得更強。 面對性別不同的對手時則會變弱。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rkssystem: {
    name: "\uFF21\uFF32\u7CFB\u7D71",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockhead: {
    name: "\u5805\u786C\u8166\u888B",
    // Official flavor text: "即使使出會受反作用力傷害的招式， ＨＰ也不會減少。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  rockypayload: {
    name: "\u642C\u5CA9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  roughskin: {
    name: "\u7C97\u7CD9\u76AE\u819A",
    // Official flavor text: "受到攻擊時， 用粗糙的皮膚弄傷 接觸到自己的對手。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u50B7\u5BB3\uFF01"
  },
  runaway: {
    name: "\u9003\u8DD1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandforce: {
    name: "\u6C99\u4E4B\u529B",
    // Official flavor text: "天氣為沙暴時， 岩石屬性、地面屬性 和鋼屬性招式的威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandrush: {
    name: "\u64A5\u6C99",
    // Official flavor text: "天氣為沙暴時， 速度會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandspit: {
    name: "\u5410\u6C99",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sandstream: {
    name: "\u63DA\u6C99",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandveil: {
    name: "\u6C99\u96B1",
    // Official flavor text: "在沙暴中 閃避率會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sapsipper: {
    name: "\u98DF\u8349",
    // Official flavor text: "受到草屬性的招式攻擊時， 不但不會受到傷害，反而攻擊會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  schooling: {
    name: "\u9B5A\u7FA4",
    // Official flavor text: "ＨＰ多的時候會聚起來變強。 ＨＰ剩餘量變少時， 群體會分崩離析。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON}\u7684\u7FA4\u9AD4\u805A\u96C6\u8D77\u4F86\u4E86\uFF01",
    transformEnd: "{POKEMON}\u7684\u7FA4\u9AD4\u56DB\u6563\u800C\u53BB\u4E86\uFF01"
  },
  scrappy: {
    name: "\u81BD\u91CF",
    // Official flavor text: "一般屬性和格鬥屬性的招式 可擊中幽靈屬性的寶可夢。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  screencleaner: {
    name: "\u9664\u969C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seedsower: {
    name: "\u6389\u51FA\u7A2E\u5B50",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  serenegrace: {
    name: "\u5929\u6069",
    // Official flavor text: "受到上天保佑， 容易出現招式的追加效果。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  shadowshield: {
    name: "\u5E7B\u5F71\u9632\u5B88",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowtag: {
    name: "\u8E29\u5F71",
    // Official flavor text: "踩住對手的影子 使其無法逃走或替換。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sharpness: {
    name: "\u92D2\u92B3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shedskin: {
    name: "\u86FB\u76AE",
    // Official flavor text: "透過蛻去身上的皮， 有時會治癒異常狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sheerforce: {
    name: "\u5F37\u884C",
    // Official flavor text: "招式會失去追加效果， 但可以用更高的威力使出招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  shellarmor: {
    name: "\u786C\u6BBC\u76D4\u7532",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shielddust: {
    name: "\u9C57\u7C89",
    // Official flavor text: "被鱗粉守護著， 不會受到招式的追加效果影響。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  shieldsdown: {
    name: "\u754C\u9650\u76FE\u6BBC",
    // Official flavor text: "ＨＰ變為一半時， 殼會壞掉，變得更有攻擊性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "\u754C\u9650\u76FE\u6BBC\uFF0C\u555F\u52D5\uFF01",
    transformEnd: "\u754C\u9650\u76FE\u6BBC\uFF0C\u89E3\u9664\uFF01"
  },
  simple: {
    name: "\u55AE\u7D14",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  skilllink: {
    name: "\u9023\u7E8C\u653B\u64CA",
    // Official flavor text: "使用連續招式時， 每回都能以最多次數進行攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  slowstart: {
    name: "\u6162\u555F\u52D5",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u7121\u6CD5\u62FF\u51FA\u5E73\u6642\u7684\u6C34\u6E96\uFF01",
    end: "  {POKEMON}\u6062\u5FA9\u4E86\u5E73\u6642\u7684\u6C34\u6E96\uFF01"
  },
  slushrush: {
    name: "\u64A5\u96EA",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sniper: {
    name: "\u72D9\u64CA\u624B",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snowcloak: {
    name: "\u96EA\u96B1",
    // Official flavor text: "天氣為冰雹時， 閃避率會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  snowwarning: {
    name: "\u964D\u96EA",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  solarpower: {
    name: "\u592A\u967D\u4E4B\u529B",
    // Official flavor text: "天氣為晴朗時特攻會提高， 但每回合ＨＰ會減少。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  solidrock: {
    name: "\u5805\u786C\u5CA9\u77F3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soulheart: {
    name: "\u9B42\u5FC3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soundproof: {
    name: "\u9694\u97F3",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  speedboost: {
    name: "\u52A0\u901F",
    // Official flavor text: "每一回合速度會變快。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spicyspray: {
    name: "\u8FA3\u6912\u5674\u767C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stakeout: {
    name: "\u76E3\u8996",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stall: {
    name: "\u6162\u51FA",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stalwart: {
    name: "\u5805\u6BC5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stamina: {
    name: "\u6301\u4E45\u529B",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stancechange: {
    name: "\u6230\u9B25\u5207\u63DB",
    // Official flavor text: "若使出攻擊招式，會變為刀劍形態， 若使出招式「王者盾牌」， 會變為盾牌形態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "\u5200\u528D\u5F62\u614B\uFF0C\u8B8A\u5F62\uFF01",
    transformEnd: "\u76FE\u724C\u5F62\u614B\uFF0C\u8B8A\u5F62\uFF01"
  },
  static: {
    name: "\u975C\u96FB",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  steadfast: {
    name: "\u4E0D\u5C48\u4E4B\u5FC3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steamengine: {
    name: "\u84B8\u6C7D\u6A5F",
    // Official flavor text: "受到水屬性或 火屬性招式攻擊時， 速度會極大幅提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelworker: {
    name: "\u92FC\u80FD\u529B\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelyspirit: {
    name: "\u92FC\u4E4B\u610F\u5FD7",
    // Official flavor text: "我方的鋼屬性 攻擊威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stench: {
    name: "\u60E1\u81ED",
    // Official flavor text: "發出臭氣， 在攻擊的時候， 有時會使對手畏縮。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  stickyhold: {
    name: "\u9ECF\u8457",
    // Official flavor text: "道具會黏在 具有黏性的身體上， 不會被對手奪走。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    block: "  \u7121\u6CD5\u596A\u53D6{POKEMON}\u7684\u9053\u5177\uFF01"
  },
  stormdrain: {
    name: "\u5F15\u6C34",
    // Official flavor text: "將水屬性的招式引到自己身上， 不但不會受到傷害， 反而會提高特攻。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "#lightningrod"
  },
  strongjaw: {
    name: "\u5F37\u58EF\u4E4B\u984E",
    // Official flavor text: "顎部強壯， 會提高啃咬類招式的威力。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sturdy: {
    name: "\u7D50\u5BE6",
    // Official flavor text: "受到對手的招式攻擊時 不會被一擊打倒。 一擊必殺的招式也沒有效果。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u633A\u4F4F\u4E86\u653B\u64CA\uFF01"
  },
  suctioncups: {
    name: "\u5438\u76E4",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u7528\u5438\u76E4\u5438\u4F4F\u4E86\uFF01"
  },
  superluck: {
    name: "\u8D85\u5E78\u904B",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersweetsyrup: {
    name: "\u7518\u9732\u4E4B\u871C",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u7684\u871C\u6563\u767C\u51FA\u751C\u751C\u7684\u6C23\u5473\uFF01"
  },
  supremeoverlord: {
    name: "\u5927\u5C07",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u5F9E\u88AB\u6253\u5012\u7684\u5925\u4F34\u90A3\u88E1\u5F97\u5230\u4E86\u529B\u91CF\uFF01"
  },
  surgesurfer: {
    name: "\u885D\u6D6A\u4E4B\u5C3E",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  swarm: {
    name: "\u87F2\u4E4B\u9810\u611F",
    // Official flavor text: "ＨＰ減少的時候， 蟲屬性的招式威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sweetveil: {
    name: "\u751C\u5E55",
    // Official flavor text: "我方的寶可夢 不會陷入睡眠狀態。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u56E0\u751C\u5E55\u800C\u4E0D\u6703\u7761\u8457\uFF01"
  },
  swiftswim: {
    name: "\u60A0\u6E38\u81EA\u5982",
    // Official flavor text: "天氣為下雨時， 速度會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  swordofruin: {
    name: "\u707D\u798D\u4E4B\u528D",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u56E0\u70BA{POKEMON}\u7684\u707D\u798D\u4E4B\u528D\uFF0C\u5468\u570D\u7684\u9632\u79A6\u6E1B\u5F31\u4E86\uFF01"
  },
  symbiosis: {
    name: "\u5171\u751F",
    // Official flavor text: "同伴使用道具時， 會把自己持有的道具交給同伴。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u5C07{ITEM}\u4EA4\u7D66\u4E86{TARGET}\uFF01"
  },
  synchronize: {
    name: "\u540C\u6B65",
    // Official flavor text: "將自己的中毒、麻痺或 灼傷狀態傳染給對手。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  tabletsofruin: {
    name: "\u707D\u798D\u4E4B\u7C21",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u56E0\u70BA{POKEMON}\u7684\u707D\u798D\u4E4B\u7C21\uFF0C\u5468\u570D\u7684\u653B\u64CA\u6E1B\u5F31\u4E86\uFF01"
  },
  tangledfeet: {
    name: "\u8E63\u8DDA",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tanglinghair: {
    name: "\u6372\u9AEE",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  technician: {
    name: "\u6280\u8853\u9AD8\u624B",
    // Official flavor text: "可讓威力低的招式 提高威力來進行攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  telepathy: {
    name: "\u5FC3\u9748\u611F\u61C9",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u4E0D\u6703\u53D7\u5230\u540C\u4F34\u7684\u653B\u64CA\uFF01"
  },
  teraformzero: {
    name: "\u6B78\u96F6\u5316\u5883",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terashell: {
    name: "\u592A\u6676\u7532\u6BBC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u8B93\u7532\u6BBC\u7DBB\u653E\u5149\u8F1D\uFF0C\u626D\u66F2\u4E86\u5C6C\u6027\u76F8\u524B\u95DC\u4FC2\uFF01\uFF01"
  },
  terashift: {
    name: "\u592A\u6676\u8B8A\u5F62",
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON}\u7684\u6A23\u5B50\u767C\u751F\u4E86\u8B8A\u5316\uFF01"
  },
  teravolt: {
    name: "\u5146\u7D1A\u96FB\u58D3",
    // Official flavor text: "可以不受對手特性的干擾， 向對手使出招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u91CB\u653E\u8457\u6FFA\u5C04\u6C23\u5834\uFF01"
  },
  thermalexchange: {
    name: "\u71B1\u4EA4\u63DB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thickfat: {
    name: "\u539A\u8102\u80AA",
    // Official flavor text: "被厚厚的脂肪保護著， 能夠讓火屬性和冰屬性 招式的傷害減半。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  tintedlens: {
    name: "\u6709\u8272\u773C\u93E1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torrent: {
    name: "\u6FC0\u6D41",
    // Official flavor text: "ＨＰ減少的時候， 水屬性的招式威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  toughclaws: {
    name: "\u786C\u722A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicboost: {
    name: "\u4E2D\u6BD2\u6FC0\u5347",
    // Official flavor text: "陷入中毒狀態時， 物理招式的威力會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicchain: {
    name: "\u6BD2\u9396\u93C8",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicdebris: {
    name: "\u6BD2\u6EFF\u5730",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trace: {
    name: "\u8907\u88FD",
    // Official flavor text: "出場時，複製對手的特性， 變為與之相同的特性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  \u8907\u88FD\u4E86{SOURCE}\u7684{ABILITY}\uFF01"
  },
  transistor: {
    name: "\u96FB\u6676\u9AD4",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  triage: {
    name: "\u5148\u884C\u6CBB\u7642",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  truant: {
    name: "\u61F6\u60F0",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    cant: "{POKEMON}\u6B63\u5728\u5077\u61F6\u3002"
  },
  turboblaze: {
    name: "\u6E26\u8F2A\u706B\u7130",
    // Official flavor text: "可以不受對手特性的干擾， 向對手使出招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u91CB\u653E\u8457\u71BE\u7130\u6C23\u5834\uFF01"
  },
  unaware: {
    name: "\u7D14\u6A38",
    // Official flavor text: "可無視對手能力的變化， 進行攻擊。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unburden: {
    name: "\u8F15\u88DD",
    // Official flavor text: "失去所持有的道具時， 速度會提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unnerve: {
    name: "\u7DCA\u5F35\u611F",
    // Official flavor text: "讓對手感到緊張， 無法吃樹果。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {TEAM}\u56E0\u592A\u7DCA\u5F35\u800C\u7121\u6CD5\u98DF\u7528\u6A39\u679C\uFF01"
  },
  unseenfist: {
    name: "\u7121\u5F62\u62F3",
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "\u707D\u798D\u4E4B\u9F0E",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u56E0\u70BA{POKEMON}\u7684\u707D\u798D\u4E4B\u9F0E\uFF0C\u5468\u570D\u7684\u7279\u653B\u6E1B\u5F31\u4E86\uFF01"
  },
  victorystar: {
    name: "\u52DD\u5229\u4E4B\u661F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vitalspirit: {
    name: "\u5E79\u52C1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  voltabsorb: {
    name: "\u84C4\u96FB",
    // Official flavor text: "受到電屬性的招式攻擊時， 不會受到傷害，而是會回復。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  wanderingspirit: {
    name: "\u904A\u9B42",
    // Official flavor text: "與使用接觸類招式 攻擊自己的寶可夢互換特性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "#skillswap"
  },
  waterabsorb: {
    name: "\u5132\u6C34",
    // Official flavor text: "受到水屬性的招式攻擊時， 不會受到傷害，而是會回復。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterbubble: {
    name: "\u6C34\u6CE1",
    // Official flavor text: "降低自己受到的火屬性 招式的威力。不會灼傷。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  watercompaction: {
    name: "\u9047\u6C34\u51DD\u56FA",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterveil: {
    name: "\u6C34\u5E55",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  weakarmor: {
    name: "\u788E\u88C2\u93A7\u7532",
    // Official flavor text: "因物理招式受到傷害時， 防禦會降低， 速度會大幅提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  wellbakedbody: {
    name: "\u7126\u9999\u4E4B\u8EC0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  whitesmoke: {
    name: "\u767D\u8272\u7159\u9727",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wimpout: {
    name: "\u8E8D\u8E8D\u6B32\u9003",
    // Official flavor text: "ＨＰ變為一半時， 會慌慌張張逃走， 退回同行隊伍裡面。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  windpower: {
    name: "\u98A8\u529B\u767C\u96FB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#electromorphosis"
  },
  windrider: {
    name: "\u4E58\u98A8",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wonderguard: {
    name: "\u795E\u5947\u5B88\u8B77",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  wonderskin: {
    name: "\u5947\u8DE1\u76AE\u819A",
    // Official flavor text: "不易受到變化類招式 攻擊的身體。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zenmode: {
    name: "\u9054\u6469\u6A21\u5F0F",
    // Official flavor text: "ＨＰ變為一半以下時， 樣子會改變。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "\u9054\u6469\u6A21\u5F0F\uFF0C\u555F\u52D5\uFF01",
    transformEnd: "\u9054\u6469\u6A21\u5F0F\uFF0C\u89E3\u9664\uFF01"
  },
  zerotohero: {
    name: "\u5168\u80FD\u8B8A\u8EAB",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u5728\u8B8A\u8EAB\u4E4B\u5F8C\u56DE\u4F86\u4E86\uFF01"
  },
  // CAP
  mountaineer: {
    name: null,
    // NEEDS TRANSLATION: not in PokeAPI
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rebound: {
    name: null,
    // NEEDS TRANSLATION: not in PokeAPI
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    move: "#magiccoat"
  },
  persistent: {
    name: null,
    // NEEDS TRANSLATION: not in PokeAPI
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  }
};
//# sourceMappingURL=abilities.js.map
