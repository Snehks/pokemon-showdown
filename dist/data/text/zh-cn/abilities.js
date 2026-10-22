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
    name: "\u9002\u5E94\u529B",
    // Official flavor text: "与自身同属性的招式 威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aerilate: {
    name: "\u98DE\u884C\u76AE\u80A4",
    // Official flavor text: "一般属性的招式 会变为飞行属性。 威力会少量提高。"
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
    // Official flavor text: "变为濒死时， 会对接触到自己的对手造成伤害。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01"
  },
  airlock: {
    name: "\u6C14\u95F8",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u5929\u6C14\u7684\u5F71\u54CD\u6D88\u5931\u4E86\uFF01"
  },
  analytic: {
    name: "\u5206\u6790",
    // Official flavor text: "如果在最后使出招式， 招式的威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  angerpoint: {
    name: "\u6124\u6012\u7A74\u4F4D",
    // Official flavor text: "要害被击中时， 会大发雷霆， 攻击力变为最大。"
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
    boost: "  {POKEMON}\u7684\u653B\u51FB\u88AB\u63D0\u9AD8\u5230\u4E86\u6700\u5927\uFF01"
  },
  angershell: {
    name: "\u6124\u6012\u7532\u58F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  anticipation: {
    name: "\u5371\u9669\u9884\u77E5",
    // Official flavor text: "可以察觉到 对手拥有的危险招式。"
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
    activate: "  {POKEMON}\u53D1\u6296\u4E86\uFF01"
  },
  arenatrap: {
    name: "\u6C99\u7A74",
    // Official flavor text: "在战斗中让对手无法逃走。"
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
    // Official flavor text: "可以防住向自己和同伴 发出的心灵攻击。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u6B63\u53D7\u5230\u82B3\u9999\u5E55\u7684\u4FDD\u62A4\uFF01"
  },
  asone: {
    name: "\u4EBA\u9A6C\u4E00\u4F53",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u540C\u65F6\u62E5\u6709\u4E86\u4E24\u79CD\u7279\u6027\uFF01"
  },
  asoneglastrier: {
    name: "\u4EBA\u9A6C\u4E00\u4F53\uFF08\u96EA\u66B4\u9A6C\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  asonespectrier: {
    name: "\u4EBA\u9A6C\u4E00\u4F53\uFF08\u7075\u5E7D\u9A6C\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurabreak: {
    name: "\u6C14\u573A\u7834\u574F",
    // Official flavor text: "让气场的效果发生逆转， 降低威力。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u538B\u5236\u4E86\u6240\u6709\u6C14\u573A\uFF01"
  },
  auraguard: {
    name: "\u6C14\u573A\u7834\u574F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  baddreams: {
    name: "\u68A6\u9B47",
    // Official flavor text: "给予睡眠状态的对手伤害。"
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
    damage: "  {POKEMON}\u6B63\u88AB\u6076\u68A6\u7F20\u8EAB\uFF01"
  },
  ballfetch: {
    name: "\u6361\u7403",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battery: {
    name: "\u84C4\u7535\u6C60",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlearmor: {
    name: "\u6218\u6597\u76D4\u7532",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlebond: {
    name: "\u7275\u7ECA\u53D8\u8EAB",
    // Official flavor text: "打倒对手时，与训练家的牵绊会增强， 变为小智版甲贺忍蛙。 飞水手里剑的招式威力会增强。"
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
    activate: "  {POKEMON}\u6D51\u8EAB\u5145\u6EE1\u4E86\u7275\u7ECA\u4E4B\u529B\uFF01",
    transform: "{POKEMON}\u53D8\u8EAB\u6210\u4E86\u5C0F\u667A\u7248\u7532\u8D3A\u5FCD\u86D9\uFF01"
  },
  beadsofruin: {
    name: "\u707E\u7978\u4E4B\u7389",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u7684\u707E\u7978\u4E4B\u7389\u4EE4\u5468\u56F4\u7684\u5B9D\u53EF\u68A6\u7684\u7279\u9632\u51CF\u5F31\u4E86\uFF01"
  },
  beastboost: {
    name: "\u5F02\u517D\u63D0\u5347",
    // Official flavor text: "打倒对手的时候， 自己最高的那项能力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  berserk: {
    name: "\u6012\u706B\u51B2\u5929",
    // Official flavor text: "因对手的攻击 ＨＰ变为一半时， 特攻会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bigpecks: {
    name: "\u5065\u58EE\u80F8\u808C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blaze: {
    name: "\u731B\u706B",
    // Official flavor text: "ＨＰ减少的时候， 火属性的招式威力会提高。"
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
    name: "\u9632\u5F39",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cheekpouch: {
    name: "\u988A\u56CA",
    // Official flavor text: "无论是哪种树果， 食用后，ＨＰ都会回复。"
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
    name: "\u82CD\u767D\u5636\u9E23",
    // Official flavor text: "打倒对手时 会用冰冷的声音嘶鸣 并提高攻击。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chlorophyll: {
    name: "\u53F6\u7EFF\u7D20",
    // Official flavor text: "晴朗天气时， 速度会提高。"
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
    name: "\u6052\u51C0\u4E4B\u8EAF",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cloudnine: {
    name: "\u65E0\u5173\u5929\u6C14",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#airlock"
  },
  colorchange: {
    name: "\u53D8\u8272",
    // Official flavor text: "自己的属性会变为 从对手处所受招式的属性。"
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
    name: "\u7EDD\u5BF9\u7761\u7720",
    // Official flavor text: "总是半梦半醒的状态， 绝对不会醒来。 可以就这么睡着进行攻击。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u5904\u4E8E\u534A\u68A6\u534A\u9192\u72B6\u6001\uFF01"
  },
  commander: {
    name: "\u53D1\u53F7\u65BD\u4EE4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u4F5C\u4E3A\u53D1\u53F7\u65BD\u4EE4\u7684\u8981\u5458\u800C\u88AB{TARGET}\u541E\u4E0B\u53BB\u4E86\uFF01"
  },
  competitive: {
    name: "\u597D\u80DC",
    // Official flavor text: "如果能力被降低， 特攻就会大幅提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  compoundeyes: {
    name: "\u590D\u773C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  contrary: {
    name: "\u5531\u53CD\u8C03",
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
    name: "\u8150\u8680",
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
    // Official flavor text: "受到攻击后撒下棉絮， 降低除自己以外的 所有宝可梦的速度。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cudchew: {
    name: "\u53CD\u520D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  curiousmedicine: {
    name: "\u602A\u836F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cursedbody: {
    name: "\u8BC5\u5492\u4E4B\u8EAF",
    // Official flavor text: "受到攻击时， 有时会把对手的招式 变为定身法状态。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cutecharm: {
    name: "\u8FF7\u4EBA\u4E4B\u8EAF",
    // Official flavor text: "有时会让接触到自己的对手着迷。"
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
    name: "\u6E7F\u6C14",
    // Official flavor text: "通过把周围都弄湿， 使谁都无法使用自爆等爆炸类的招式。"
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
    block: "  {SOURCE}\u65E0\u6CD5\u4F7F\u7528{MOVE}\uFF01"
  },
  dancer: {
    name: "\u821E\u8005",
    // Official flavor text: "有谁使出跳舞招式时， 自己也能就这么接着使出跳舞招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkaura: {
    name: "\u6697\u9ED1\u6C14\u573A",
    // Official flavor text: "全体的恶属性招式变强。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u6B63\u5728\u91CA\u653E\u6697\u9ED1\u6C14\u573A\uFF01"
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
    name: "\u9C9C\u8273\u4E4B\u8EAF",
    // Official flavor text: "让对手吓一跳， 使其无法对我方使出先制招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  defeatist: {
    name: "\u8F6F\u5F31",
    // Official flavor text: "ＨＰ减半时， 会变得软弱， 攻击和特攻会减半。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defiant: {
    name: "\u4E0D\u670D\u8F93",
    // Official flavor text: "能力被降低时， 攻击会大幅提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  deltastream: {
    name: "\u5FB7\u5C14\u5854\u6C14\u6D41",
    // Official flavor text: "变为令飞行属性的弱点 消失的天气。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  desolateland: {
    name: "\u7EC8\u7ED3\u4E4B\u5730",
    // Official flavor text: "变为不会受到 水属性攻击的天气。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  disguise: {
    name: "\u753B\u76AE",
    // Official flavor text: "通过画皮覆盖住身体， 可以防住１次攻击。"
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
    block: "  \u753B\u76AE\u53D8\u6210\u4E86\u66FF\u8EAB\uFF01",
    transform: "{POKEMON}\u7684\u753B\u76AE\u8131\u843D\u4E86\uFF01"
  },
  download: {
    name: "\u4E0B\u8F7D",
    // Official flavor text: "比较对手的防御和特防， 根据较低的那项能力 相应地提高自己的攻击或特攻。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonize: {
    name: "\u9F99\u76AE\u80A4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonsmaw: {
    name: "\u9F99\u989A",
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
    name: "\u5E72\u71E5\u76AE\u80A4",
    // Official flavor text: "下雨天气时和受到水属性的招式时， ＨＰ会回复。晴朗天气时和受到火属性的 招式时，ＨＰ会减少。"
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
    name: "\u9CD7\u9CD7\u9AD8\u5347",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  effectspore: {
    name: "\u5B62\u5B50",
    // Official flavor text: "受到攻击时， 有时会把接触到自己的对手 变为中毒、麻痹或睡眠状态。"
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
    name: "\u7535\u6C14\u5236\u9020\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electromorphosis: {
    name: "\u7535\u529B\u8F6C\u6362",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u53D7\u5230{MOVE}\u800C\u5145\u7535\u4E86\uFF01"
  },
  embodyaspectcornerstone: {
    name: "\u9762\u5F71\u8F89\u6620\uFF08\u7840\u77F3\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u8BA9\u7840\u4E4B\u5047\u9762\u53D1\u51FA\u5149\u8F89\uFF0C\u9632\u5FA1\u63D0\u9AD8\u4E86\uFF01"
  },
  embodyaspecthearthflame: {
    name: "\u9762\u5F71\u8F89\u6620\uFF08\u706B\u7076\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u8BA9\u7076\u4E4B\u5047\u9762\u53D1\u51FA\u5149\u8F89\uFF0C\u653B\u51FB\u63D0\u9AD8\u4E86\uFF01"
  },
  embodyaspectteal: {
    name: "\u9762\u5F71\u8F89\u6620\uFF08\u78A7\u8349\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u8BA9\u78A7\u4E4B\u5047\u9762\u53D1\u51FA\u5149\u8F89\uFF0C\u901F\u5EA6\u63D0\u9AD8\u4E86\uFF01"
  },
  embodyaspectwellspring: {
    name: "\u9762\u5F71\u8F89\u6620\uFF08\u6C34\u4E95\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u8BA9\u4E95\u4E4B\u5047\u9762\u53D1\u51FA\u5149\u8F89\uFF0C\u7279\u9632\u63D0\u9AD8\u4E86\uFF01"
  },
  emergencyexit: {
    name: "\u5371\u9669\u56DE\u907F",
    // Official flavor text: "ＨＰ变为一半时， 为了回避危险， 会退回到同行队伍中。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fairyaura: {
    name: "\u5996\u7CBE\u6C14\u573A",
    // Official flavor text: "全体的妖精属性招式变强。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u6B63\u5728\u91CA\u653E\u5996\u7CBE\u6C14\u573A\uFF01"
  },
  filter: {
    name: "\u8FC7\u6EE4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firemane: {
    name: "\u706B\u7130\u9B03\u6BDB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamebody: {
    name: "\u706B\u7130\u4E4B\u8EAF",
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
    name: "\u53D7\u70ED\u6FC0\u5347",
    // Official flavor text: "变为灼伤状态时， 特殊招式的威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flashfire: {
    name: "\u5F15\u706B",
    // Official flavor text: "受到火属性的招式攻击时， 吸收火焰，自己使出的 火属性招式会变强。"
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
    name: "\u82B1\u4E4B\u793C",
    // Official flavor text: "晴朗天气时， 自己与同伴的攻击和 特防能力会提高。"
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
    // Official flavor text: "我方的草属性宝可梦 能力不会降低， 也不会变为异常状态。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u6B63\u53D7\u5230\u82B1\u5E55\u7684\u4FDD\u62A4\uFF01"
  },
  fluffy: {
    name: "\u6BDB\u8338\u8338",
    // Official flavor text: "会将对手所给予的接触类招式的伤害减半， 但火属性招式的伤害会变为２倍。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  forecast: {
    name: "\u9634\u6674\u4E0D\u5B9A",
    // Official flavor text: "受天气的影响， 会变为水属性、火属性 或冰属性中的某一个。"
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
    name: "\u9884\u77E5\u68A6",
    // Official flavor text: "出场时， 只读取１个对手拥有的招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  \u8BFB\u53D6\u4E86{TARGET}\u7684{MOVE}\uFF01",
    activateNoTarget: null
    // NEEDS TRANSLATION
  },
  friendguard: {
    name: "\u53CB\u60C5\u9632\u5B88",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frisk: {
    name: "\u5BDF\u89C9",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u5BDF\u89C9\u5230\u4E86{TARGET}\u7684{ITEM}\uFF01",
    activateNoTarget: null
    // NEEDS TRANSLATION
  },
  fullmetalbody: {
    name: "\u91D1\u5C5E\u9632\u62A4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furcoat: {
    name: "\u6BDB\u76AE\u5927\u8863",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  galewings: {
    name: "\u75BE\u98CE\u4E4B\u7FFC",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  galvanize: {
    name: "\u7535\u6C14\u76AE\u80A4",
    // Official flavor text: "一般属性的招式 会变为电属性。 威力会少量提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gluttony: {
    name: "\u8D2A\u5403\u9B3C",
    // Official flavor text: "原本ＨＰ变得很少时才会吃树果， 在ＨＰ还有一半时就会把它吃掉。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  goodasgold: {
    name: "\u9EC4\u91D1\u4E4B\u8EAF",
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
    // Official flavor text: "虽然攻击会提高， 但是只能使出 一开始所选的招式。"
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
    name: "\u9752\u8349\u5236\u9020\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grimneigh: {
    name: "\u6F06\u9ED1\u5636\u9E23",
    // Official flavor text: "打倒对手时 会用恐怖的声音嘶鸣 并提高特攻。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guarddog: {
    name: "\u770B\u95E8\u72AC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gulpmissile: {
    name: "\u4E00\u53E3\u5BFC\u5F39",
    // Official flavor text: "冲浪或潜水时会叼来猎物。 受到伤害时， 会吐出猎物进行攻击。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guts: {
    name: "\u6BC5\u529B",
    // Official flavor text: "如果变为异常状态， 会拿出毅力， 攻击会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hadronengine: {
    name: "\u5F3A\u5B50\u5F15\u64CE",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u5E03\u4E0B\u7535\u6C14\u573A\u5730\u4F7F\u672A\u6765\u7684\u673A\u5173\u8DC3\u52A8\u8D77\u6765\uFF01\uFF01",
    activate: "  {POKEMON}\u7528\u7535\u6C14\u573A\u5730\u4F7F\u672A\u6765\u7684\u673A\u5173\u8DC3\u52A8\u8D77\u6765\uFF01\uFF01"
  },
  harvest: {
    name: "\u6536\u83B7",
    // Official flavor text: "可以多次制作出 已被使用掉的树果。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    addItem: "  {POKEMON}\u6536\u83B7\u4E86{ITEM}\uFF01"
  },
  healer: {
    name: "\u6CBB\u6108\u4E4B\u5FC3",
    // Official flavor text: "有时会治愈异常状态的同伴。"
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
    name: "\u8010\u70ED",
    // Official flavor text: "耐热的体质会 让火属性的招式威力减半。"
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
    name: "\u91CD\u91D1\u5C5E",
    // Official flavor text: "自身的重量会变为２倍。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  honeygather: {
    name: "\u91C7\u871C",
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
    name: "\u9971\u4E86\u53C8\u997F",
    // Official flavor text: "每回合结束时会在 满腹花纹与空腹花纹之间 交替改变样子。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hustle: {
    name: "\u6D3B\u529B",
    // Official flavor text: "自己的攻击变高， 但命中率会降低。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydration: {
    name: "\u6E7F\u6DA6\u4E4B\u8EAF",
    // Official flavor text: "下雨天气时， 异常状态会治愈。"
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
    name: "\u602A\u529B\u94B3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icebody: {
    name: "\u51B0\u51BB\u4E4B\u8EAF",
    // Official flavor text: "冰雹天气时， 会缓缓回复ＨＰ。"
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
    name: "\u7ED3\u51BB\u5934",
    // Official flavor text: "头部的冰会代替自己承受 物理攻击，但是样子会改变。 下冰雹时，冰会恢复原状。"
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
    name: "\u51B0\u9CDE\u7C89",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  illuminate: {
    name: "\u53D1\u5149",
    // Official flavor text: "通过让周围变亮， 变得容易遇到野生的宝可梦。"
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
    name: "\u5E7B\u89C9",
    // Official flavor text: "假扮成同行队伍中的 最后一只宝可梦出场， 迷惑对手。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON}\u9020\u6210\u7684\u5E7B\u89C9\u89E3\u9664\u4E86\uFF01"
  },
  immunity: {
    name: "\u514D\u75AB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  imposter: {
    name: "\u53D8\u8EAB\u8005",
    // Official flavor text: "变身为当前面对的宝可梦。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infiltrator: {
    name: "\u7A7F\u900F",
    // Official flavor text: "可以穿透对手的壁障 或替身进行攻击。"
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
    name: "\u98DE\u51FA\u7684\u5185\u5728\u7269",
    // Official flavor text: "被对手打倒的时候， 会给予对手相当于 ＨＰ剩余量的伤害。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#aftermath"
  },
  innerfocus: {
    name: "\u7CBE\u795E\u529B",
    // Official flavor text: "拥有经过锻炼的精神， 而不会因对手的攻击而畏缩。"
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
    name: "\u5A01\u5413",
    // Official flavor text: "出场时威吓对手， 让其退缩， 降低对手的攻击。"
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
    name: "\u4E0D\u6320\u4E4B\u5251",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  ironbarbs: {
    name: "\u94C1\u523A",
    // Official flavor text: "用铁刺给予接触到自己的 对手伤害。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#roughskin"
  },
  ironfist: {
    name: "\u94C1\u62F3",
    // Official flavor text: "使用拳类招式的威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  justified: {
    name: "\u6B63\u4E49\u4E4B\u5FC3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  keeneye: {
    name: "\u9510\u5229\u76EE\u5149",
    // Official flavor text: "多亏了锐利的目光， 命中率不会被降低。"
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
    // Official flavor text: "无法使用持有的道具。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafguard: {
    name: "\u53F6\u5B50\u9632\u5B88",
    // Official flavor text: "晴朗天气时， 不会变为异常状态。"
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
    name: "\u98D8\u6D6E",
    // Official flavor text: "从地面浮起， 从而不会受到地面属性招式的攻击。"
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
    // Official flavor text: "变为与自己使出的招式 相同的属性。"
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
    name: "\u8F7B\u91D1\u5C5E",
    // Official flavor text: "自身的重量会减半。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightningrod: {
    name: "\u907F\u96F7\u9488",
    // Official flavor text: "将电属性的招式吸引到自己身上， 不会受到伤害，而是会提高特攻。"
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
    activate: "  {POKEMON}\u5438\u5F15\u4E86\u653B\u51FB\uFF01"
  },
  limber: {
    name: "\u67D4\u8F6F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lingeringaroma: {
    name: "\u7529\u4E0D\u6389\u7684\u6C14\u5473",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  {TARGET}\u6CBE\u4E0A\u4E86\u5473\u9053\u4E14\u6325\u4E4B\u4E0D\u53BB\uFF01"
  },
  liquidooze: {
    name: "\u6C61\u6CE5\u6D46",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON}\u5438\u5230\u4E86\u6C61\u6CE5\u6D46\uFF01"
  },
  liquidvoice: {
    name: "\u6E7F\u6DA6\u4E4B\u58F0",
    // Official flavor text: "所有的声音招式 都变为水属性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  longreach: {
    name: "\u8FDC\u9694",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicbounce: {
    name: "\u9B54\u6CD5\u955C",
    // Official flavor text: "可以不受到由对手使出的 变化招式影响，并将其反弹。"
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
    // Official flavor text: "不会受到攻击以外的伤害。"
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
    name: "\u9B54\u672F\u5E08",
    // Official flavor text: "夺走被自己的招式 击中的对手的道具。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magmaarmor: {
    name: "\u7194\u5CA9\u94E0\u7532",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magnetpull: {
    name: "\u78C1\u529B",
    // Official flavor text: "用磁力吸住钢属性的宝可梦， 使其无法逃走。"
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
    name: "\u795E\u5947\u9CDE\u7247",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megalauncher: {
    name: "\u8D85\u7EA7\u53D1\u5C04\u5668",
    // Official flavor text: "波动和波导类招式的 威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megasol: {
    name: "\u8D85\u7EA7\u65E5\u5149",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  merciless: {
    name: "\u4E0D\u4EC1\u4E0D\u4E49",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mimicry: {
    name: "\u62DF\u6001",
    // Official flavor text: "宝可梦的属性会根据 场地的状态而变化。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u53D8\u56DE\u4E86\u539F\u6765\u7684\u5C5E\u6027\uFF01"
  },
  mindseye: {
    name: "\u5FC3\u773C",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  minus: {
    name: "\u8D1F\u7535",
    // Official flavor text: "出场的伙伴之间 如果有正电或负电特性的宝可梦， 自己的特攻会提高。"
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
    name: "\u955C\u7532",
    // Official flavor text: "只反弹自己受到的 能力降低效果。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistysurge: {
    name: "\u8584\u96FE\u5236\u9020\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moldbreaker: {
    name: "\u7834\u683C",
    // Official flavor text: "可以不受对手特性的干扰， 向对手使出招式。"
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
    start: "  {POKEMON}\u6253\u7834\u4E86\u5E38\u89C4\uFF01"
  },
  moody: {
    name: "\u5FC3\u60C5\u4E0D\u5B9A",
    // Official flavor text: "每一回合，能力中的某项 会大幅提高，而某项会降低。"
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
    name: "\u7535\u6C14\u5F15\u64CE",
    // Official flavor text: "受到电属性的招式攻击时， 不会受到伤害，而是速度会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moxie: {
    name: "\u81EA\u4FE1\u8FC7\u5EA6",
    // Official flavor text: "如果打倒对手， 就会充满自信，攻击会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multiscale: {
    name: "\u591A\u91CD\u9CDE\u7247",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multitype: {
    name: "\u591A\u5C5E\u6027",
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
    // Official flavor text: "被对手接触到后， 会将对手变为木乃伊。"
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
    changeAbility: "  {TARGET}\u7684\u7279\u6027\u53D8\u6210\u4E86\u6728\u4E43\u4F0A\uFF01"
  },
  myceliummight: {
    name: "\u83CC\u4E1D\u4E4B\u529B",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  naturalcure: {
    name: "\u81EA\u7136\u56DE\u590D",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  },
  neuroforce: {
    name: "\u8111\u6838\u4E4B\u529B",
    // Official flavor text: "效果绝佳的攻击， 威力会变得更强。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  neutralizinggas: {
    name: "\u5316\u5B66\u53D8\u5316\u6C14\u4F53",
    // Official flavor text: "特性为化学变化气体的宝可梦在场时， 场上所有宝可梦的 特性效果都会消失或者无法生效。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  \u5468\u56F4\u5145\u6EE1\u4E86\u5316\u5B66\u53D8\u5316\u6C14\u4F53\uFF01",
    end: "  \u5316\u5B66\u53D8\u5316\u6C14\u4F53\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  noguard: {
    name: "\u65E0\u9632\u5B88",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  normalize: {
    name: "\u4E00\u822C\u76AE\u80A4",
    // Official flavor text: "无论是什么属性的招式， 全部会变为一般属性。 威力会少量提高。"
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
    name: "\u8FDF\u949D",
    // Official flavor text: "因为感觉迟钝， 不会变为着迷和被挑衅状态。"
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
    name: "\u8DDF\u98CE",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  orichalcumpulse: {
    name: "\u7EEF\u7EA2\u8109\u52A8",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u4EE4\u65E5\u7167\u53D8\u5F3A\uFF0C\u6FC0\u8D77\u4E86\u53E4\u4EE3\u7684\u8109\u52A8\uFF01",
    activate: "  {POKEMON}\u53D7\u5230\u65E5\u7167\u800C\u6FC0\u8D77\u4E86\u53E4\u4EE3\u7684\u8109\u52A8\uFF01\uFF01"
  },
  overcoat: {
    name: "\u9632\u5C18",
    // Official flavor text: "不会受到沙暴或冰雹等的伤害。 不会受到粉末类招式的攻击。"
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
    // Official flavor text: "ＨＰ减少的时候， 草属性的招式威力会提高。"
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
    // Official flavor text: "因为我行我素， 不会变为混乱状态。"
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
    name: "\u4EB2\u5B50\u7231",
    // Official flavor text: "亲子俩可以合计攻击２次。"
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
    name: "\u7C89\u5F69\u62A4\u5E55",
    // Official flavor text: "自己和同伴都不会 陷入中毒的异常状态。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  perishbody: {
    name: "\u706D\u4EA1\u4E4B\u8EAF",
    // Official flavor text: "受到接触类招式攻击时， 双方都会在３回合后变为濒死状态。 替换后效果消失。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u53CC\u65B9\u5C06\u5728\uFF13\u56DE\u5408\u540E\u706D\u4EA1\uFF01"
  },
  pickpocket: {
    name: "\u987A\u624B\u7275\u7F8A",
    // Official flavor text: "盗取接触到自己的 对手的道具。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pickup: {
    name: "\u6361\u62FE",
    // Official flavor text: "有时会捡来对手用过的道具， 冒险过程中也会捡到。"
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
    name: "\u8D2F\u7A7F\u94BB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pixilate: {
    name: "\u5996\u7CBE\u76AE\u80A4",
    // Official flavor text: "一般属性的招式 会变为妖精属性。 威力会少量提高。"
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
    name: "\u6B63\u7535",
    // Official flavor text: "出场的伙伴之间 如果有正电或负电特性的宝可梦， 自己的特攻会提高。"
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
    name: "\u6BD2\u7597",
    // Official flavor text: "变为中毒状态时， ＨＰ不会减少，反而会增加起来。"
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
    // Official flavor text: "只通过接触就有可能 让对手变为中毒状态。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powerconstruct: {
    name: "\u7FA4\u805A\u53D8\u5F62",
    // Official flavor text: "ＨＰ变为一半时， 细胞们会赶来支援， 变为完全体形态。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u4F60\u611F\u53D7\u5230\u4E86\u5927\u91CF\u7684\u6C14\u606F\u2026\u2026\uFF01",
    transform: "{POKEMON}\u53D8\u6210\u4E86\u5B8C\u5168\u4F53\u5F62\u6001\uFF01"
  },
  powerofalchemy: {
    name: "\u5316\u5B66\u4E4B\u529B",
    // Official flavor text: "继承被打倒的同伴的特性， 变为相同的特性。"
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
    name: "\u80FD\u91CF\u70B9",
    // Official flavor text: "只要处在相邻位置， 招式的威力就会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prankster: {
    name: "\u6076\u4F5C\u5267\u4E4B\u5FC3",
    // Official flavor text: "可以率先使出变化招式。"
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
    name: "\u538B\u8FEB\u611F",
    // Official flavor text: "给予对手压迫感， 大量减少其使用招式的ＰＰ。"
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
    start: "  \u4ECE{POKEMON}\u7684\u8EAB\u4E0A\u611F\u5230\u4E86\u4E00\u79CD\u538B\u8FEB\u611F\uFF01"
  },
  primordialsea: {
    name: "\u59CB\u6E90\u4E4B\u6D77",
    // Official flavor text: "变为不会受到 火属性攻击的天气。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prismarmor: {
    name: "\u68F1\u955C\u88C5\u7532",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  propellertail: {
    name: "\u87BA\u65CB\u5C3E\u9CCD",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  protean: {
    name: "\u53D8\u5E7B\u81EA\u5982",
    // Official flavor text: "变为与自己使出的招式 相同的属性。"
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
    activate: "  {POKEMON}\u901A\u8FC7\u5927\u6674\u5929\u53D1\u52A8\u4E86\u53E4\u4EE3\u6D3B\u6027\uFF01",
    activateFromItem: "  {POKEMON}\u901A\u8FC7\u9A71\u52B2\u80FD\u91CF\u53D1\u52A8\u4E86\u53E4\u4EE3\u6D3B\u6027\uFF01",
    start: "  {POKEMON}\u7684{STAT}\u5347\u9AD8\u4E86\uFF01",
    end: "  {POKEMON}\u53E4\u4EE3\u6D3B\u6027\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  psychicsurge: {
    name: "\u7CBE\u795E\u5236\u9020\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  punkrock: {
    name: "\u5E9E\u514B\u6447\u6EDA",
    // Official flavor text: "声音招式的威力会提高。 受到的声音招式伤害会减半。"
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
    name: "\u6D01\u51C0\u4E4B\u76D0",
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
    activate: "  {POKEMON}\u901A\u8FC7\u7535\u6C14\u573A\u5730\u53D1\u52A8\u4E86\u5938\u514B\u5145\u80FD\uFF01",
    activateFromItem: "  {POKEMON}\u901A\u8FC7\u9A71\u52B2\u80FD\u91CF\u53D1\u52A8\u4E86\u5938\u514B\u5145\u80FD\uFF01",
    start: "  {POKEMON}\u7684{STAT}\u5347\u9AD8\u4E86\uFF01",
    end: "  {POKEMON}\u5938\u514B\u5145\u80FD\u7684\u6548\u679C\u6D88\u5931\u4E86\uFF01"
  },
  queenlymajesty: {
    name: "\u5973\u738B\u7684\u5A01\u4E25",
    // Official flavor text: "向对手施加威慑力， 使其无法对我方使出先制招式。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  quickdraw: {
    name: "\u901F\u51FB",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u901F\u51FB\u4F7F{POKEMON}\u884C\u52A8\u53D8\u5FEB\u4E86\uFF01"
  },
  quickfeet: {
    name: "\u98DE\u6BDB\u817F",
    // Official flavor text: "变为异常状态时， 速度会提高。"
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
    name: "\u96E8\u76D8",
    // Official flavor text: "下雨天气时， 会缓缓回复ＨＰ。"
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
    name: "\u80C6\u602F",
    // Official flavor text: "受到恶属性、幽灵属性 和虫属性的招式攻击时， 会因胆怯而速度提高。"
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
    // Official flavor text: "继承被打倒的同伴的特性， 变为相同的特性。"
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
    changeAbility: "  \u7EE7\u627F\u4E86{SOURCE}\u7684{ABILITY}\uFF01"
  },
  reckless: {
    name: "\u820D\u8EAB",
    // Official flavor text: "自己会因反作用力受伤的招式， 其威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  refrigerate: {
    name: "\u51B0\u51BB\u76AE\u80A4",
    // Official flavor text: "一般属性的招式 会变为冰属性。 威力会少量提高。"
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
    // Official flavor text: "使树果成熟， 效果变为２倍。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rivalry: {
    name: "\u6597\u4E89\u5FC3",
    // Official flavor text: "面对性别相同的对手， 会燃起斗争心，变得更强。 而面对性别不同的，则会变弱。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rkssystem: {
    name: "\uFF21\uFF32\u7CFB\u7EDF",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockhead: {
    name: "\u575A\u786C\u8111\u888B",
    // Official flavor text: "即使使出会受反作用力伤害的招式， ＨＰ也不会减少。"
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
    name: "\u7C97\u7CD9\u76AE\u80A4",
    // Official flavor text: "受到攻击时， 用粗糙的皮肤弄伤 接触到自己的对手。"
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
    damage: "  {POKEMON}\u53D7\u5230\u4E86\u4F24\u5BB3\uFF01"
  },
  runaway: {
    name: "\u9003\u8DD1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandforce: {
    name: "\u6C99\u4E4B\u529B",
    // Official flavor text: "沙暴天气时， 岩石属性、地面属性 和钢属性的招式威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandrush: {
    name: "\u62E8\u6C99",
    // Official flavor text: "沙暴天气时， 速度会提高。"
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
    name: "\u626C\u6C99",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandveil: {
    name: "\u6C99\u9690",
    // Official flavor text: "在沙暴的时候， 闪避率会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sapsipper: {
    name: "\u98DF\u8349",
    // Official flavor text: "受到草属性的招式攻击时， 不会受到伤害，而是攻击会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  schooling: {
    name: "\u9C7C\u7FA4",
    // Official flavor text: "ＨＰ多的时候会聚起来变强。 ＨＰ剩余量变少时， 群体会分崩离析。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON}\u4E00\u7FA4\u7FA4\u5730\u805A\u96C6\u8D77\u6765\u4E86\uFF01",
    transformEnd: "{POKEMON}\u4E00\u7FA4\u7FA4\u5730\u56DB\u6563\u800C\u53BB\u4E86\uFF01"
  },
  scrappy: {
    name: "\u80C6\u91CF",
    // Official flavor text: "一般属性和格斗属性的招式 可以击中幽灵属性的宝可梦。"
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
    name: "\u6389\u51FA\u79CD\u5B50",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  serenegrace: {
    name: "\u5929\u6069",
    // Official flavor text: "托天恩的福， 招式的追加效果容易出现。"
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
    // Official flavor text: "踩住对手的影子 使其无法逃走或替换。"
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
    name: "\u950B\u9510",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shedskin: {
    name: "\u8715\u76AE",
    // Official flavor text: "通过蜕去身上的皮， 有时会治愈异常状态。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sheerforce: {
    name: "\u5F3A\u884C",
    // Official flavor text: "招式的追加效果消失， 但因此能以更高的威力使出招式。"
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
    name: "\u786C\u58F3\u76D4\u7532",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shielddust: {
    name: "\u9CDE\u7C89",
    // Official flavor text: "被鳞粉守护着， 不会受到招式的追加效果影响。"
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
    name: "\u754C\u9650\u76FE\u58F3",
    // Official flavor text: "ＨＰ变为一半时， 壳会坏掉，变得有攻击性。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "\u754C\u9650\u76FE\u58F3\u542F\u52A8\uFF01",
    transformEnd: "\u754C\u9650\u76FE\u58F3\u89E3\u9664\uFF01"
  },
  simple: {
    name: "\u5355\u7EAF",
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
    name: "\u8FDE\u7EED\u653B\u51FB",
    // Official flavor text: "如果使用连续招式， 总是能使出最高次数。"
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
    name: "\u6162\u542F\u52A8",
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
    start: "  {POKEMON}\u65E0\u6CD5\u62FF\u51FA\u5E73\u65F6\u7684\u6C34\u5E73\uFF01",
    end: "  {POKEMON}\u6062\u590D\u4E86\u5E73\u65F6\u7684\u6C34\u5E73\uFF01"
  },
  slushrush: {
    name: "\u62E8\u96EA",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sniper: {
    name: "\u72D9\u51FB\u624B",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snowcloak: {
    name: "\u96EA\u9690",
    // Official flavor text: "冰雹天气时， 闪避率会提高。"
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
    name: "\u592A\u9633\u4E4B\u529B",
    // Official flavor text: "晴朗天气时， 特攻会提高， 而每回合ＨＰ会减少。"
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
    name: "\u575A\u786C\u5CA9\u77F3",
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
    // Official flavor text: "每一回合速度会变快。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spicyspray: {
    name: "\u8FA3\u6912\u55B7\u53D1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stakeout: {
    name: "\u8E72\u5B88",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stall: {
    name: "\u6162\u51FA",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stalwart: {
    name: "\u575A\u6BC5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stamina: {
    name: "\u6301\u4E45\u529B",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stancechange: {
    name: "\u6218\u6597\u5207\u6362",
    // Official flavor text: "如果使出攻击招式，会变为刀剑形态， 如果使出招式“王者盾牌”， 会变为盾牌形态。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "\u5200\u5251\u5F62\u6001\uFF0C\u53D8\u5F62\uFF01",
    transformEnd: "\u76FE\u724C\u5F62\u6001\uFF0C\u53D8\u5F62\uFF01"
  },
  static: {
    name: "\u9759\u7535",
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
    name: "\u84B8\u6C7D\u673A",
    // Official flavor text: "受到水属性或 火属性的招式攻击时， 速度会巨幅提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelworker: {
    name: "\u94A2\u80FD\u529B\u8005",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelyspirit: {
    name: "\u94A2\u4E4B\u610F\u5FD7",
    // Official flavor text: "我方的钢属性 攻击威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stench: {
    name: "\u6076\u81ED",
    // Official flavor text: "通过释放臭臭的气味， 在攻击的时候， 有时会使对手畏缩。"
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
    name: "\u9ECF\u7740",
    // Official flavor text: "因为道具是粘在黏性身体上的， 所以不会被对手夺走。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    block: "  \u65E0\u6CD5\u593A\u53D6{POKEMON}\u7684\u9053\u5177\uFF01"
  },
  stormdrain: {
    name: "\u5F15\u6C34",
    // Official flavor text: "将水属性的招式引到自己身上， 不会受到伤害，而是会提高特攻。"
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
    name: "\u5F3A\u58EE\u4E4B\u989A",
    // Official flavor text: "因为颚部强壮， 啃咬类招式的威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sturdy: {
    name: "\u7ED3\u5B9E",
    // Official flavor text: "即使受到对手的招式攻击， 也不会被一击打倒。 一击必杀的招式也没有效果。"
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
    activate: "  {POKEMON}\u633A\u4F4F\u4E86\u653B\u51FB\uFF01"
  },
  suctioncups: {
    name: "\u5438\u76D8",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u7528\u5438\u76D8\u5438\u4F4F\u4E86\uFF01"
  },
  superluck: {
    name: "\u8D85\u5E78\u8FD0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersweetsyrup: {
    name: "\u7518\u9732\u4E4B\u871C",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u7684\u871C\u6563\u53D1\u51FA\u4E86\u751C\u751C\u9999\u6C14\uFF01"
  },
  supremeoverlord: {
    name: "\u5927\u5C06",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u4ECE\u88AB\u6253\u5012\u7684\u540C\u4F34\u8EAB\u4E0A\u5F97\u5230\u529B\u91CF\u4E86\uFF01"
  },
  surgesurfer: {
    name: "\u51B2\u6D6A\u4E4B\u5C3E",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  swarm: {
    name: "\u866B\u4E4B\u9884\u611F",
    // Official flavor text: "ＨＰ减少的时候， 虫属性的招式威力会提高。"
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
    // Official flavor text: "我方的宝可梦 不会变为睡眠状态。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u56E0\u751C\u5E55\u800C\u4E0D\u4F1A\u7761\u7740\uFF01"
  },
  swiftswim: {
    name: "\u60A0\u6E38\u81EA\u5982",
    // Official flavor text: "下雨天气时， 速度会提高。"
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
    name: "\u707E\u7978\u4E4B\u5251",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u7684\u707E\u7978\u4E4B\u5251\u4EE4\u5468\u56F4\u7684\u5B9D\u53EF\u68A6\u7684\u9632\u5FA1\u51CF\u5F31\u4E86\uFF01"
  },
  symbiosis: {
    name: "\u5171\u751F",
    // Official flavor text: "同伴使用道具时， 会把自己持有的道具传递给同伴。"
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
    activate: "  {POKEMON}\u5C06{ITEM}\u4EA4\u7ED9\u4E86{TARGET}\uFF01"
  },
  synchronize: {
    name: "\u540C\u6B65",
    // Official flavor text: "将自己的中毒、麻痹 或灼伤状态传染给对手。"
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
    name: "\u707E\u7978\u4E4B\u7B80",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u7684\u707E\u7978\u4E4B\u7B80\u4EE4\u5468\u56F4\u7684\u5B9D\u53EF\u68A6\u7684\u653B\u51FB\u51CF\u5F31\u4E86\uFF01"
  },
  tangledfeet: {
    name: "\u8E52\u8DDA",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tanglinghair: {
    name: "\u5377\u53D1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  technician: {
    name: "\u6280\u672F\u9AD8\u624B",
    // Official flavor text: "攻击时可以将 低威力招式的威力提高。"
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
    name: "\u5FC3\u7075\u611F\u5E94",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u4E0D\u4F1A\u53D7\u5230\u540C\u4F34\u7684\u653B\u51FB\uFF01"
  },
  teraformzero: {
    name: "\u5F52\u96F6\u5316\u5883",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terashell: {
    name: "\u592A\u6676\u7532\u58F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u8BA9\u7532\u58F3\u53D1\u51FA\u5149\u8F89\uFF0C\u4F7F\u5C5E\u6027\u76F8\u514B\u53D1\u751F\u626D\u66F2\uFF01\uFF01"
  },
  terashift: {
    name: "\u592A\u6676\u53D8\u5F62",
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON}\u7684\u6837\u5B50\u53D1\u751F\u4E86\u53D8\u5316\uFF01"
  },
  teravolt: {
    name: "\u5146\u7EA7\u7535\u538B",
    // Official flavor text: "可以不受对手特性的干扰， 向对手使出招式。"
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
    start: "  {POKEMON}\u6B63\u5728\u91CA\u653E\u6E85\u5C04\u6C14\u573A\uFF01"
  },
  thermalexchange: {
    name: "\u70ED\u4EA4\u6362",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thickfat: {
    name: "\u539A\u8102\u80AA",
    // Official flavor text: "因为被厚厚的脂肪保护着， 会让火属性和冰属性的招式伤害减半。"
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
    name: "\u6709\u8272\u773C\u955C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torrent: {
    name: "\u6FC0\u6D41",
    // Official flavor text: "ＨＰ减少的时候， 水属性的招式威力会提高。"
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
    // Official flavor text: "变为中毒状态时， 物理招式的威力会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicchain: {
    name: "\u6BD2\u9501\u94FE",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicdebris: {
    name: "\u6BD2\u6EE1\u5730",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trace: {
    name: "\u590D\u5236",
    // Official flavor text: "出场时，复制对手的特性， 变为与之相同的特性。"
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
    changeAbility: "  \u590D\u5236\u4E86{SOURCE}\u7684{ABILITY}\uFF01"
  },
  transistor: {
    name: "\u7535\u6676\u4F53",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  triage: {
    name: "\u5148\u884C\u6CBB\u7597",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  truant: {
    name: "\u61D2\u60F0",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    cant: "{POKEMON}\u6B63\u5728\u5077\u61D2\u3002"
  },
  turboblaze: {
    name: "\u6DA1\u8F6E\u706B\u7130",
    // Official flavor text: "可以不受对手特性的干扰， 向对手使出招式。"
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
    start: "  {POKEMON}\u6B63\u5728\u91CA\u653E\u70BD\u7130\u6C14\u573A\uFF01"
  },
  unaware: {
    name: "\u7EAF\u6734",
    // Official flavor text: "可以无视对手能力的变化， 进行攻击。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unburden: {
    name: "\u8F7B\u88C5",
    // Official flavor text: "失去所持有的道具时， 速度会提高。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unnerve: {
    name: "\u7D27\u5F20\u611F",
    // Official flavor text: "让对手紧张， 使其无法食用树果。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {TEAM}\u56E0\u592A\u7D27\u5F20\u800C\u65E0\u6CD5\u98DF\u7528\u6811\u679C\uFF01"
  },
  unseenfist: {
    name: "\u65E0\u5F62\u62F3",
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "\u707E\u7978\u4E4B\u9F0E",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u7684\u707E\u7978\u4E4B\u9F0E\u4EE4\u5468\u56F4\u7684\u5B9D\u53EF\u68A6\u7684\u7279\u653B\u51CF\u5F31\u4E86\uFF01"
  },
  victorystar: {
    name: "\u80DC\u5229\u4E4B\u661F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vitalspirit: {
    name: "\u5E72\u52B2",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  voltabsorb: {
    name: "\u84C4\u7535",
    // Official flavor text: "受到电属性的招式攻击时， 不会受到伤害，而是会回复。"
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
    name: "\u6E38\u9B42",
    // Official flavor text: "与使用接触类招式 攻击自己的宝可梦互换特性。"
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
    name: "\u50A8\u6C34",
    // Official flavor text: "受到水属性的招式攻击时， 不会受到伤害，而是会回复。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterbubble: {
    name: "\u6C34\u6CE1",
    // Official flavor text: "降低自己受到的火属性 招式的威力，不会灼伤。"
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
    name: "\u788E\u88C2\u94E0\u7532",
    // Official flavor text: "如果因物理招式受到伤害， 防御会降低， 速度会大幅提高。"
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
    name: "\u7126\u9999\u4E4B\u8EAF",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  whitesmoke: {
    name: "\u767D\u8272\u70DF\u96FE",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wimpout: {
    name: "\u8DC3\u8DC3\u6B32\u9003",
    // Official flavor text: "ＨＰ变为一半时， 会慌慌张张逃走， 退回同行队伍中。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  windpower: {
    name: "\u98CE\u529B\u53D1\u7535",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#electromorphosis"
  },
  windrider: {
    name: "\u4E58\u98CE",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wonderguard: {
    name: "\u795E\u5947\u5B88\u62A4",
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
    name: "\u5947\u8FF9\u76AE\u80A4",
    // Official flavor text: "成为不易受到变化招式 攻击的身体。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zenmode: {
    name: "\u8FBE\u6469\u6A21\u5F0F",
    // Official flavor text: "ＨＰ变为一半以下时， 样子会改变。"
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
    transform: "\u8FBE\u6469\u6A21\u5F0F\uFF0C\u542F\u52A8\uFF01",
    transformEnd: "\u8FBE\u6469\u6A21\u5F0F\uFF0C\u89E3\u9664\uFF01"
  },
  zerotohero: {
    name: "\u5168\u80FD\u53D8\u8EAB",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u53D8\u8EAB\u540E\u5F52\u6765\u4E86\uFF01"
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
