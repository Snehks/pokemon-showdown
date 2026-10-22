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
    name: "\u3066\u304D\u304A\u3046\u308A\u3087\u304F",
    // Official flavor text: "自分と おなじ タイプの 技の 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aerilate: {
    name: "\u30B9\u30AB\u30A4\u30B9\u30AD\u30F3",
    // Official flavor text: "ノーマルタイプの 技が ひこうタイプになる。 威力が 少し 上がる。"
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
    name: "\u3086\u3046\u3070\u304F",
    // Official flavor text: "ひんしに なったとき 触った 相手に ダメージを あたえる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "  {POKEMON}\u306F \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01"
  },
  airlock: {
    name: "\u30A8\u30A2\u30ED\u30C3\u30AF",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u5929\u5019\u306E\u5F71\u97FF\u304C \u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  analytic: {
    name: "\u30A2\u30CA\u30E9\u30A4\u30BA",
    // Official flavor text: "いちばん 最後に 技を 出すと 技の 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  angerpoint: {
    name: "\u3044\u304B\u308A\u306E\u3064\u307C",
    // Official flavor text: "急所に 攻撃が 当たると 怒りくるって 攻撃力が 最大に なる。"
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
    boost: "  {POKEMON}\u306F \u653B\u6483\u304C \u6700\u5927\u307E\u3067 \u4E0A\u304C\u3063\u305F\uFF01"
  },
  angershell: {
    name: "\u3044\u304B\u308A\u306E\u3053\u3046\u3089",
    // Official flavor text: "相手の攻撃で HPが 半分に なると 怒りで 防御と 特防が 下がるが 攻撃 特攻 素早さが 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  anticipation: {
    name: "\u304D\u3051\u3093\u3088\u3061",
    // Official flavor text: "相手の 持つ 危険な 技を 察知する ことができる。"
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
    activate: "  {POKEMON}\u306F \u307F\u3076\u308B\u3044\u3057\u305F\uFF01"
  },
  arenatrap: {
    name: "\u3042\u308A\u3058\u3054\u304F",
    // Official flavor text: "戦闘で 相手を 逃げられなくする。"
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
    name: "\u30C6\u30A4\u30EB\u30A2\u30FC\u30DE\u30FC",
    // Official flavor text: "頭を包む 謎のしっぽが こちらに むかって 先制技を 出せない ようにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  aromaveil: {
    name: "\u30A2\u30ED\u30DE\u30D9\u30FC\u30EB",
    // Official flavor text: "自分と 味方への メンタル 攻撃を 防ぐことが できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u306F \u30A2\u30ED\u30DE\u30D9\u30FC\u30EB\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  asone: {
    name: "\u3058\u3093\u3070\u3044\u3063\u305F\u3044",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u3075\u305F\u3064\u306E \u7279\u6027\u3092 \u3042\u308F\u305B\u6301\u3064\uFF01"
  },
  asoneglastrier: {
    name: "\u3058\u3093\u3070\u3044\u3063\u305F\u3044\uFF08\u30D6\u30EA\u30B6\u30DD\u30B9\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  asonespectrier: {
    name: "\u3058\u3093\u3070\u3044\u3063\u305F\u3044\uFF08\u30EC\u30A4\u30B9\u30DD\u30B9\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurabreak: {
    name: "\u30AA\u30FC\u30E9\u30D6\u30EC\u30A4\u30AF",
    // Official flavor text: "オーラの 効果を 逆転させて 威力を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u3059\u3079\u3066\u306E \u30AA\u30FC\u30E9\u3092 \u5236\u5727\u3059\u308B\uFF01"
  },
  auraguard: {
    name: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  baddreams: {
    name: "\u30CA\u30A4\u30C8\u30E1\u30A2",
    // Official flavor text: "ねむり状態の 相手に ダメージを あたえる。"
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
    damage: "  {POKEMON}\u306F \u3046\u306A\u3055\u308C\u3066\u3044\u308B\uFF01"
  },
  ballfetch: {
    name: "\u305F\u307E\u3072\u308D\u3044",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battery: {
    name: "\u30D0\u30C3\u30C6\u30EA\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlearmor: {
    name: "\u30AB\u30D6\u30C8\u30A2\u30FC\u30DE\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlebond: {
    name: "\u304D\u305A\u306A\u3078\u3093\u3052",
    // Official flavor text: "相手を 倒すと トレーナーとの キズナが 深まり サトシゲッコウガに 変化する。みずしゅりけんが 強くなる。"
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
    activate: "  {POKEMON}\u306B \u304D\u305A\u306A\u306E \u529B\u304C \u307F\u306A\u304E\u3063\u305F\uFF01",
    transform: "{POKEMON}\u306F \u30B5\u30C8\u30B7\u30B2\u30C3\u30B3\u30A6\u30AC\u306B \u5909\u5316\u3057\u305F\uFF01"
  },
  beadsofruin: {
    name: "\u308F\u3056\u308F\u3044\u306E\u305F\u307E",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306E \u308F\u3056\u308F\u3044\u306E\u305F\u307E\u3067 \u307E\u308F\u308A\u306E \u7279\u9632\u304C \u5F31\u307E\u3063\u305F\uFF01"
  },
  beastboost: {
    name: "\u30D3\u30FC\u30B9\u30C8\u30D6\u30FC\u30B9\u30C8",
    // Official flavor text: "相手を 倒したとき 自分の いちばん 高い 能力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  berserk: {
    name: "\u304E\u3083\u304F\u3058\u3087\u3046",
    // Official flavor text: "相手の 攻撃で ＨＰが 半分に なると 特攻が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bigpecks: {
    name: "\u306F\u3068\u3080\u306D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blaze: {
    name: "\u3082\u3046\u304B",
    // Official flavor text: "ＨＰが 減ったとき ほのおタイプの 技の 威力が 上がる。"
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
    name: "\u307C\u3046\u3060\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cheekpouch: {
    name: "\u307B\u304A\u3076\u304F\u308D",
    // Official flavor text: "どんな きのみでも 食べると ＨＰも 回復する。"
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
    name: "\u3057\u308D\u306E\u3044\u306A\u306A\u304D",
    // Official flavor text: "相手を 倒すと 冷たい 声で いなないて 攻撃が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chlorophyll: {
    name: "\u3088\u3046\u308A\u3087\u304F\u305D",
    // Official flavor text: "天気が 晴れのとき 素早さが 上がる。"
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
    name: "\u30AF\u30EA\u30A2\u30DC\u30C7\u30A3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cloudnine: {
    name: "\u30CE\u30FC\u3066\u3093\u304D",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#airlock"
  },
  colorchange: {
    name: "\u3078\u3093\u3057\u3087\u304F",
    // Official flavor text: "相手から 受けた 技の タイプに 自分の タイプが 変化 する。"
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
    name: "\u305C\u3063\u305F\u3044\u306D\u3080\u308A",
    // Official flavor text: "つねに 夢うつつの 状態で 絶対に 目覚めない。 眠ったまま 攻撃が できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u5922\u3046\u3064\u3064\u306E \u72B6\u614B\uFF01"
  },
  commander: {
    name: "\u3057\u308C\u3044\u3068\u3046",
    // Official flavor text: "登場したとき 味方に ヘイラッシャが いると 口の中に 入って そこから 指令を だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u3057\u308C\u3044\u3068\u3046 \u3068\u3057\u3066 {TARGET}\u306B \u98F2\u307F\u3053\u307E\u308C\u305F\uFF01"
  },
  competitive: {
    name: "\u304B\u3061\u304D",
    // Official flavor text: "能力を 下げられると 特攻が ぐーんと 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  compoundeyes: {
    name: "\u3075\u304F\u304C\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  contrary: {
    name: "\u3042\u307E\u306E\u3058\u3083\u304F",
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
    name: "\u3075\u3057\u3087\u304F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  costar: {
    name: "\u304D\u3087\u3046\u3048\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cottondown: {
    name: "\u308F\u305F\u3052",
    // Official flavor text: "攻撃を 受けると わたげを ばらまいて 自分以外の ポケモン すべての 素早さを 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cudchew: {
    name: "\u306F\u3093\u3059\u3046",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  curiousmedicine: {
    name: "\u304D\u307F\u3087\u3046\u306A\u304F\u3059\u308A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cursedbody: {
    name: "\u306E\u308D\u308F\u308C\u30DC\u30C7\u30A3",
    // Official flavor text: "攻撃を 受けると 相手の 技を かなしばり状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cutecharm: {
    name: "\u30E1\u30ED\u30E1\u30ED\u30DC\u30C7\u30A3",
    // Official flavor text: "自分に 触った 相手を メロメロに することが ある。"
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
    name: "\u3057\u3081\u308A\u3051",
    // Official flavor text: "あたりを 湿らせることに よって じばく などの 爆発する 技を だれも 使えなくなる。"
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
    block: "  {SOURCE}\u306F {MOVE}\u3092 \u4F7F\u3048\u306A\u3044\uFF01"
  },
  dancer: {
    name: "\u304A\u3069\u308A\u3053",
    // Official flavor text: "だれかが 踊り技を 使うと 自分も それに 続いて 踊り技を 出すことが できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkaura: {
    name: "\u30C0\u30FC\u30AF\u30AA\u30FC\u30E9",
    // Official flavor text: "全員の あくタイプの 技が 強くなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u30C0\u30FC\u30AF\u30AA\u30FC\u30E9\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  dauntlessshield: {
    name: "\u3075\u304F\u3064\u306E\u305F\u3066",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  dazzling: {
    name: "\u30D3\u30D3\u30C3\u30C9\u30DC\u30C7\u30A3",
    // Official flavor text: "相手を びっくり させて こちらに むかって 先制技を 出せない ようにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  defeatist: {
    name: "\u3088\u308F\u304D",
    // Official flavor text: "ＨＰが 半分に なると 弱気に なって 攻撃と 特攻が 半減する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defiant: {
    name: "\u307E\u3051\u3093\u304D",
    // Official flavor text: "能力を 下げられると 攻撃が ぐーんと 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  deltastream: {
    name: "\u30C7\u30EB\u30BF\u30B9\u30C8\u30EA\u30FC\u30E0",
    // Official flavor text: "ひこうタイプの 弱点が なくなる 天気にする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  desolateland: {
    name: "\u304A\u308F\u308A\u306E\u3060\u3044\u3061",
    // Official flavor text: "みずタイプの 攻撃を 受けない 天気にする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  disguise: {
    name: "\u3070\u3051\u306E\u304B\u308F",
    // Official flavor text: "体を 被う 化けの皮で １回 攻撃を 防ぐことが できる。"
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
    block: "  \u3070\u3051\u306E\u304B\u308F\u304C \u307F\u304C\u308F\u308A\u306B \u306A\u3063\u305F\uFF01",
    transform: "{POKEMON}\u306E \u3070\u3051\u306E\u304B\u308F\u304C \u306F\u304C\u308C\u305F\uFF01"
  },
  download: {
    name: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
    // Official flavor text: "相手の 防御と 特防を くらべて 低い ほうの 能力に あわせて 自分の 攻撃か 特攻を 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonize: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30B9\u30AD\u30F3",
    // Official flavor text: "ノーマルタイプの技がドラゴンタイプになり 威力が1.2倍になる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonsmaw: {
    name: "\u308A\u3085\u3046\u306E\u3042\u304E\u3068",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drizzle: {
    name: "\u3042\u3081\u3075\u3089\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drought: {
    name: "\u3072\u3067\u308A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dryskin: {
    name: "\u304B\u3093\u305D\u3046\u306F\u3060",
    // Official flavor text: "天気が 雨の時や みずタイプの 技で ＨＰが 回復し はれの時や ほのおタイプの 技で 減ってしまう。"
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
    name: "\u306F\u3084\u304A\u304D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eartheater: {
    name: "\u3069\u3057\u3087\u304F",
    // Official flavor text: "じめんタイプの 技を 受けると ダメージを 受けずに 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eelevate: {
    name: "\u3046\u306A\u304E\u306E\u307C\u308A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  effectspore: {
    name: "\u307B\u3046\u3057",
    // Official flavor text: "攻撃で 自分に 触れた 相手を どくや まひや ねむり状態に する ことがある。"
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
    name: "\u30A8\u30EC\u30AD\u30E1\u30A4\u30AB\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electromorphosis: {
    name: "\u3067\u3093\u304D\u306B\u304B\u3048\u308B",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F {MOVE}\u3092 \u53D7\u3051\u3066 \u5145\u96FB\u3057\u305F\uFF01"
  },
  embodyaspectcornerstone: {
    name: "\u304A\u3082\u304B\u3052\u3084\u3069\u3057\uFF08\u3044\u3057\u305A\u3048\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u306F \u790E\u306E\u4EEE\u9762\u3092 \u304B\u304C\u3084\u304B\u305B \u9632\u5FA1\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  embodyaspecthearthflame: {
    name: "\u304A\u3082\u304B\u3052\u3084\u3069\u3057\uFF08\u304B\u307E\u3069\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u306F \u7AC8\u306E\u4EEE\u9762\u3092 \u304B\u304C\u3084\u304B\u305B \u653B\u6483\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  embodyaspectteal: {
    name: "\u304A\u3082\u304B\u3052\u3084\u3069\u3057\uFF08\u307F\u3069\u308A\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u306F \u78A7\u306E\u4EEE\u9762\u3092 \u304B\u304C\u3084\u304B\u305B \u7D20\u65E9\u3055\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  embodyaspectwellspring: {
    name: "\u304A\u3082\u304B\u3052\u3084\u3069\u3057\uFF08\u3044\u3069\uFF09",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON}\u306F \u4E95\u6238\u306E\u4EEE\u9762\u3092 \u304B\u304C\u3084\u304B\u305B \u7279\u9632\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  emergencyexit: {
    name: "\u304D\u304D\u304B\u3044\u3072",
    // Official flavor text: "ＨＰが 半分に なると 危険を 回避するため 手持ちに 引っ込んで しまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fairyaura: {
    name: "\u30D5\u30A7\u30A2\u30EA\u30FC\u30AA\u30FC\u30E9",
    // Official flavor text: "全員の フェアリータイプの 技が 強くなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u30D5\u30A7\u30A2\u30EA\u30FC\u30AA\u30FC\u30E9\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  filter: {
    name: "\u30D5\u30A3\u30EB\u30BF\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firemane: {
    name: "\u307B\u306E\u304A\u306E\u305F\u3066\u304C\u307F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamebody: {
    name: "\u307B\u306E\u304A\u306E\u304B\u3089\u3060",
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
    name: "\u306D\u3064\u307C\u3046\u305D\u3046",
    // Official flavor text: "やけど状態に なったとき 特殊技の 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flashfire: {
    name: "\u3082\u3089\u3044\u3073",
    // Official flavor text: "ほのおタイプの 技を 受けると 炎を もらい 自分が 出す ほのおタイプの 技が 強くなる。"
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
    start: "  {POKEMON}\u306F \u307B\u306E\u304A\u306E \u5A01\u529B\u304C \u4E0A\u304C\u3063\u305F\uFF01"
  },
  flowergift: {
    name: "\u30D5\u30E9\u30EF\u30FC\u30AE\u30D5\u30C8",
    // Official flavor text: "天気が 晴れのとき 自分と 味方の 攻撃と 特防の 能力が 上がる。"
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
    name: "\u30D5\u30E9\u30EF\u30FC\u30D9\u30FC\u30EB",
    // Official flavor text: "味方の 草ポケモンは 能力が 下がらず 状態異常にも ならない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u306F \u30D5\u30E9\u30EF\u30FC\u30D9\u30FC\u30EB\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  fluffy: {
    name: "\u3082\u3075\u3082\u3075",
    // Official flavor text: "相手から 受けた 接触する 技の ダメージを 半減するが ほのおタイプの 技の ダメージは ２倍になる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  forecast: {
    name: "\u3066\u3093\u304D\u3084",
    // Official flavor text: "天気の 影響を 受けて みずタイプ ほのおタイプ こおりタイプの どれかに 変化する。"
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
    name: "\u3088\u3061\u3080",
    // Official flavor text: "登場 したとき 相手の 持つ 技を ひとつだけ 読み取る。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  {TARGET}\u306E {MOVE} \u3092 \u8AAD\u307F\u53D6\u3063\u305F\uFF01",
    activateNoTarget: "  {POKEMON}\u306F \u3088\u3061\u3080\u3067 {MOVE}\u3092 \u3088\u307F\u3068\u3063\u305F\uFF01"
  },
  friendguard: {
    name: "\u30D5\u30EC\u30F3\u30C9\u30AC\u30FC\u30C9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frisk: {
    name: "\u304A\u307F\u3068\u304A\u3057",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u306F {TARGET}\u306E {ITEM}\u3092 \u304A\u898B\u901A\u3057\u3060\uFF01",
    activateNoTarget: "  {POKEMON}\u306F {ITEM} \u3092 \u304A\u898B\u901A\u3057\u3060\uFF01"
  },
  fullmetalbody: {
    name: "\u30E1\u30BF\u30EB\u30D7\u30ED\u30C6\u30AF\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furcoat: {
    name: "\u30D5\u30A1\u30FC\u30B3\u30FC\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  galewings: {
    name: "\u306F\u3084\u3066\u306E\u3064\u3070\u3055",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  galvanize: {
    name: "\u30A8\u30EC\u30AD\u30B9\u30AD\u30F3",
    // Official flavor text: "ノーマルタイプの 技が でんきタイプになる。 威力が 少し 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gluttony: {
    name: "\u304F\u3044\u3057\u3093\u307C\u3046",
    // Official flavor text: "ＨＰが 少なくなったら 食べる きのみを ＨＰ 半分の 時に 食べてしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  goodasgold: {
    name: "\u304A\u3046\u3054\u3093\u306E\u304B\u3089\u3060",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gooey: {
    name: "\u306C\u3081\u306C\u3081",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gorillatactics: {
    name: "\u3054\u308A\u3080\u3061\u3085\u3046",
    // Official flavor text: "攻撃は 上がるが 最初に 選んだ 技しか 出せなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grasspelt: {
    name: "\u304F\u3055\u306E\u3051\u304C\u308F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassysurge: {
    name: "\u30B0\u30E9\u30B9\u30E1\u30A4\u30AB\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grimneigh: {
    name: "\u304F\u308D\u306E\u3044\u306A\u306A\u304D",
    // Official flavor text: "相手を 倒すと 恐ろしい 声で いなないて 特攻が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guarddog: {
    name: "\u3070\u3093\u3051\u3093",
    // Official flavor text: "いかく されると 攻撃が 上がる。 ポケモンを 入れ替えさせる 技や 道具が 効かない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gulpmissile: {
    name: "\u3046\u306E\u30DF\u30B5\u30A4\u30EB",
    // Official flavor text: "なみのりか ダイビングを すると 獲物を くわえてくる。 ダメージを 受けると 獲物を 吐きだして 攻撃。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guts: {
    name: "\u3053\u3093\u3058\u3087\u3046",
    // Official flavor text: "状態異常に なると 根性を だして 攻撃が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hadronengine: {
    name: "\u30CF\u30C9\u30ED\u30F3\u30A8\u30F3\u30B8\u30F3",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9\u3092 \u306F\u308A \u672A\u6765\u306E\u6A5F\u95A2\u3092 \u8E8D\u52D5\u3055\u305B\u308B\uFF01\uFF01",
    activate: "  {POKEMON}\u306F \u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9\u3067 \u672A\u6765\u306E\u6A5F\u95A2\u3092 \u8E8D\u52D5\u3055\u305B\u308B\uFF01\uFF01"
  },
  harvest: {
    name: "\u3057\u3085\u3046\u304B\u304F",
    // Official flavor text: "使った きのみを 何回も 作りだす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    addItem: "  {POKEMON}\u306F {ITEM}\u3092 \u53CE\u7A6B\u3057\u305F\uFF01"
  },
  healer: {
    name: "\u3044\u3084\u3057\u306E\u3053\u3053\u308D",
    // Official flavor text: "状態異常の 味方を たまに 治してあげる。"
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
    name: "\u305F\u3044\u306D\u3064",
    // Official flavor text: "耐熱の 体に よって ほのおタイプの 技の 威力を 半減させる。"
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
    name: "\u30D8\u30F4\u30A3\u30E1\u30BF\u30EB",
    // Official flavor text: "自分の 重さが ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  honeygather: {
    name: "\u307F\u3064\u3042\u3064\u3081",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hospitality: {
    name: "\u304A\u3082\u3066\u306A\u3057",
    shortDesc: null,
    // NEEDS TRANSLATION
    heal: "  {SOURCE}\u304C \u305F\u3066\u305F \u304A\u8336\u3092 {POKEMON}\u306F \u98F2\u307F\u307B\u3057\u305F\uFF01"
  },
  hugepower: {
    name: "\u3061\u304B\u3089\u3082\u3061",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hungerswitch: {
    name: "\u306F\u3089\u307A\u3053\u30B9\u30A4\u30C3\u30C1",
    // Official flavor text: "ターンの 終わりに まんぷくもよう はらぺこもよう まんぷくもよう……と 交互に 姿を 変える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hustle: {
    name: "\u306F\u308A\u304D\u308A",
    // Official flavor text: "自分の 攻撃が 高くなるが 命中率が 下がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydration: {
    name: "\u3046\u308B\u304A\u3044\u30DC\u30C7\u30A3",
    // Official flavor text: "天気が 雨のとき 状態異常が 治る。"
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
    name: "\u304B\u3044\u308A\u304D\u30D0\u30B5\u30DF",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icebody: {
    name: "\u30A2\u30A4\u30B9\u30DC\u30C7\u30A3",
    // Official flavor text: "天気が あられのとき ＨＰを 少しずつ 回復 する。"
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
    name: "\u30A2\u30A4\u30B9\u30D5\u30A7\u30A4\u30B9",
    // Official flavor text: "物理攻撃は 頭の 氷が みがわりに なるが 姿も 変わる。 氷は あられが 降ると 元に戻る。"
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
    name: "\u3053\u304A\u308A\u306E\u308A\u3093\u3077\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  illuminate: {
    name: "\u306F\u3063\u3053\u3046",
    // Official flavor text: "あたりを 明るくする ことで 野生の ポケモンに 遭遇 しやすくなる。"
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
    name: "\u30A4\u30EA\u30E5\u30FC\u30B8\u30E7\u30F3",
    // Official flavor text: "手持ちの いちばん うしろに いる ポケモンに なりきって 登場して 相手を 化かす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON}\u306E \u30A4\u30EA\u30E5\u30FC\u30B8\u30E7\u30F3\u304C \u89E3\u3051\u305F\uFF01"
  },
  immunity: {
    name: "\u3081\u3093\u3048\u304D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  imposter: {
    name: "\u304B\u308F\u308A\u3082\u306E",
    // Official flavor text: "目の前の ポケモンに 変身 してしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infiltrator: {
    name: "\u3059\u308A\u306C\u3051",
    // Official flavor text: "相手の 壁や 身代わりを すりぬけて 攻撃 できる"
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
    name: "\u3068\u3073\u3060\u3059\u306A\u304B\u307F",
    // Official flavor text: "相手に 倒されたとき ＨＰの 残りの ぶんだけ 相手に ダメージを あたえる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#aftermath"
  },
  innerfocus: {
    name: "\u305B\u3044\u3057\u3093\u308A\u3087\u304F",
    // Official flavor text: "鍛えられた 精神に よって 相手の 攻撃に ひるまない。"
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
    name: "\u3075\u307F\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  intimidate: {
    name: "\u3044\u304B\u304F",
    // Official flavor text: "登場 したとき 威嚇して 相手を 萎縮させ 相手の 攻撃を 下げて しまう。"
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
    name: "\u3075\u3068\u3046\u306E\u3051\u3093",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  ironbarbs: {
    name: "\u3066\u3064\u306E\u30C8\u30B2",
    // Official flavor text: "自分に 触った 相手に 鉄のトゲで ダメージを あたえる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#roughskin"
  },
  ironfist: {
    name: "\u3066\u3064\u306E\u3053\u3076\u3057",
    // Official flavor text: "パンチを 使う 技の 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  justified: {
    name: "\u305B\u3044\u304E\u306E\u3053\u3053\u308D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  keeneye: {
    name: "\u3059\u308B\u3069\u3044\u3081",
    // Official flavor text: "鋭い 目の おかげで 命中率を 下げられない。"
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
    name: "\u3076\u304D\u3088\u3046",
    // Official flavor text: "持っている 道具を 使うことが できない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafguard: {
    name: "\u30EA\u30FC\u30D5\u30AC\u30FC\u30C9",
    // Official flavor text: "天気が 晴れのときは 状態異常に ならない。"
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
    name: "\u3075\u3086\u3046",
    // Official flavor text: "地面から 浮くことによって じめんタイプの 技を 受けない。"
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
    name: "\u30EA\u30D9\u30ED",
    // Official flavor text: "自分が 出す 技と 同じ タイプに 変化する。"
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
    name: "\u30E9\u30A4\u30C8\u30E1\u30BF\u30EB",
    // Official flavor text: "自分の 重さが 半分に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightningrod: {
    name: "\u3072\u3089\u3044\u3057\u3093",
    // Official flavor text: "でんきタイプの 技を 自分に 寄せつけ ダメージを 受けずに 特攻が 上がる。"
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
    activate: "  {POKEMON}\u306F \u653B\u6483\u3092 \u5F15\u304D\u5BC4\u305B\u305F\uFF01"
  },
  limber: {
    name: "\u3058\u3085\u3046\u306A\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lingeringaroma: {
    name: "\u3068\u308C\u306A\u3044\u306B\u304A\u3044",
    // Official flavor text: "相手に 触られると とれないにおいが 相手に うつってしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  {TARGET}\u306F \u306B\u304A\u3044\u304C \u3046\u3064\u3063\u3066 \u3068\u308C\u306A\u304F\u306A\u3063\u3061\u3083\u3063\u305F\uFF01"
  },
  liquidooze: {
    name: "\u30D8\u30C9\u30ED\u3048\u304D",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON}\u306F \u30D8\u30C9\u30ED\u3048\u304D\u3092 \u5438\u3044\u53D6\u3063\u305F\uFF01"
  },
  liquidvoice: {
    name: "\u3046\u308B\u304A\u3044\u30DC\u30A4\u30B9",
    // Official flavor text: "すべての 音技が みずタイプに なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  longreach: {
    name: "\u3048\u3093\u304B\u304F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicbounce: {
    name: "\u30DE\u30B8\u30C3\u30AF\u30DF\u30E9\u30FC",
    // Official flavor text: "相手に だされた 変化技を 受けずに そのまま 返す ことが できる。"
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
    name: "\u30DE\u30B8\u30C3\u30AF\u30AC\u30FC\u30C9",
    // Official flavor text: "攻撃 以外では ダメージを 受けない。"
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
    name: "\u30DE\u30B8\u30B7\u30E3\u30F3",
    // Official flavor text: "技を 当てた 相手の 道具を 奪ってしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magmaarmor: {
    name: "\u30DE\u30B0\u30DE\u306E\u3088\u308D\u3044",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magnetpull: {
    name: "\u3058\u308A\u3087\u304F",
    // Official flavor text: "はがねタイプの ポケモンを 磁力で 引きつけて 逃げられなくする。"
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
    name: "\u3075\u3057\u304E\u306A\u3046\u308D\u3053",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megalauncher: {
    name: "\u30E1\u30AC\u30E9\u30F3\u30C1\u30E3\u30FC",
    // Official flavor text: "波動の 技の 威力が 高くなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megasol: {
    name: "\u30E1\u30AC\u30BD\u30FC\u30E9\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  merciless: {
    name: "\u3072\u3068\u3067\u306A\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mimicry: {
    name: "\u304E\u305F\u3044",
    // Official flavor text: "フィールドの 状態に あわせて ポケモンの タイプが 変わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u30BF\u30A4\u30D7\u304C \u5143\u306B \u623B\u3063\u305F\uFF01"
  },
  mindseye: {
    name: "\u3057\u3093\u304C\u3093",
    // Official flavor text: "ノーマル かくとうタイプの技を ゴーストタイプに 当てることが できる。 相手の 回避率の 変化を 無視し 命中率も 下げられない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  minus: {
    name: "\u30DE\u30A4\u30CA\u30B9",
    // Official flavor text: "プラスか マイナスの 特性を 持つ ポケモンが 仲間に いると 自分の 特攻が 上がる。"
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
    name: "\u30DF\u30E9\u30FC\u30A2\u30FC\u30DE\u30FC",
    // Official flavor text: "自分が 受けた 能力 ダウンの 効果 だけを 跳ね返す。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistysurge: {
    name: "\u30DF\u30B9\u30C8\u30E1\u30A4\u30AB\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moldbreaker: {
    name: "\u304B\u305F\u3084\u3076\u308A",
    // Official flavor text: "相手の 特性に ジャマされる ことなく 相手に 技を 出すことが できる。"
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
    start: "  {POKEMON}\u306F \u304B\u305F\u3084\u3076\u308A\u3060\uFF01"
  },
  moody: {
    name: "\u30E0\u30E9\u3063\u3051",
    // Official flavor text: "毎ターン 能力の どれかが ぐーんと 上がって どれかが 下がる。"
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
    name: "\u3067\u3093\u304D\u30A8\u30F3\u30B8\u30F3",
    // Official flavor text: "でんきタイプの 技を 受けると ダメージを 受けずに 素早さが 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moxie: {
    name: "\u3058\u3057\u3093\u304B\u3058\u3087\u3046",
    // Official flavor text: "相手を 倒すと 自信が ついて 攻撃が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multiscale: {
    name: "\u30DE\u30EB\u30C1\u30B9\u30B1\u30A4\u30EB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multitype: {
    name: "\u30DE\u30EB\u30C1\u30BF\u30A4\u30D7",
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
    name: "\u30DF\u30A4\u30E9",
    // Official flavor text: "相手に 触られると 相手を ミイラに してしまう。"
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
    changeAbility: "  {TARGET}\u306F \u7279\u6027\u304C \u30DF\u30A4\u30E9\u306B\u306A\u3063\u3061\u3083\u3063\u305F\uFF01"
  },
  myceliummight: {
    name: "\u304D\u3093\u3057\u306E\u3061\u304B\u3089",
    // Official flavor text: "変化技を 出すとき 必ず 行動が 遅くなるが 相手の 特性に ジャマされない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  naturalcure: {
    name: "\u3057\u305C\u3093\u304B\u3044\u3075\u304F",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  },
  neuroforce: {
    name: "\u30D6\u30EC\u30A4\u30F3\u30D5\u30A9\u30FC\u30B9",
    // Official flavor text: "効果バツグンの 攻撃で 威力が さらに 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  neutralizinggas: {
    name: "\u304B\u304C\u304F\u3078\u3093\u304B\u30AC\u30B9",
    // Official flavor text: "かがくへんかガスの ポケモンが 場にいると すべての ポケモンの 特性の 効果が 消えたり 発動 しなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  \u3042\u305F\u308A\u306B \u304B\u304C\u304F\u3078\u3093\u304B\u30AC\u30B9\u304C \u5145\u6E80\u3057\u305F\uFF01",
    end: "  \u304B\u304C\u304F\u3078\u3093\u304B\u30AC\u30B9\u306E \u52B9\u679C\u304C \u5207\u308C\u305F\uFF01"
  },
  noguard: {
    name: "\u30CE\u30FC\u30AC\u30FC\u30C9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  normalize: {
    name: "\u30CE\u30FC\u30DE\u30EB\u30B9\u30AD\u30F3",
    // Official flavor text: "どんな タイプの 技でも すべて ノーマルタイプに なる。 威力が 少し 上がる。"
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
    name: "\u3069\u3093\u304B\u3093",
    // Official flavor text: "鈍感なので メロメロや ちょうはつ状態に ならない。"
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
    name: "\u3073\u3093\u3058\u3087\u3046",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  orichalcumpulse: {
    name: "\u3072\u3072\u3044\u308D\u306E\u3053\u3069\u3046",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u3072\u3056\u3057\u3092 \u5F37\u3081 \u53E4\u4EE3\u306E\u9F13\u52D5\u304C \u66B4\u308C\u3060\u3059\uFF01\uFF01",
    activate: "  {POKEMON}\u306F \u3072\u3056\u3057\u3092 \u53D7\u3051\u3066 \u53E4\u4EE3\u306E\u9F13\u52D5\u304C \u66B4\u308C\u3060\u3059\uFF01\uFF01"
  },
  overcoat: {
    name: "\u307C\u3046\u3058\u3093",
    // Official flavor text: "すなあらしや あられなどの ダメージを 受けない。 粉の 技を 受けない。"
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
    name: "\u3057\u3093\u308A\u3087\u304F",
    // Official flavor text: "ＨＰが 減ったとき くさタイプの 技の 威力が 上がる。"
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
    name: "\u30DE\u30A4\u30DA\u30FC\u30B9",
    // Official flavor text: "マイペースなので こんらん状態に ならない。"
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
    name: "\u304A\u3084\u3053\u3042\u3044",
    // Official flavor text: "親子 ２匹で ２回 攻撃することが できる。"
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
    name: "\u30D1\u30B9\u30C6\u30EB\u30D9\u30FC\u30EB",
    // Official flavor text: "自分も 味方も どくの 状態異常を 受けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  perishbody: {
    name: "\u307B\u308D\u3073\u306E\u30DC\u30C7\u30A3",
    // Official flavor text: "接触する 技を 受けると お互い ３ターン たつと ひんしになる。 交代すると 効果は なくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u304A\u305F\u304C\u3044\u306F \uFF13\u30BF\u30FC\u30F3\u5F8C\u306B \u6EC5\u3073\u3066\u3057\u307E\u3046\uFF01"
  },
  pickpocket: {
    name: "\u308F\u308B\u3044\u3066\u3050\u305B",
    // Official flavor text: "触られた 相手の 道具を 盗んで しまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pickup: {
    name: "\u3082\u306E\u3072\u308D\u3044",
    // Official flavor text: "相手の 使った 道具を 拾ってくることが ある。 冒険中も 拾ってくる。"
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
    name: "\u304B\u3093\u3064\u3046\u30C9\u30EA\u30EB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pixilate: {
    name: "\u30D5\u30A7\u30A2\u30EA\u30FC\u30B9\u30AD\u30F3",
    // Official flavor text: "ノーマルタイプの 技が フェアリータイプになる。 威力が 少し 上がる。"
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
    name: "\u30D7\u30E9\u30B9",
    // Official flavor text: "プラスか マイナスの 特性を 持つ ポケモンが 仲間に いると 自分の 特攻が 上がる。"
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
    name: "\u30DD\u30A4\u30BA\u30F3\u30D2\u30FC\u30EB",
    // Official flavor text: "どく状態に なると ＨＰが 減らずに 増えていく。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisonpoint: {
    name: "\u3069\u304F\u306E\u30C8\u30B2",
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
    name: "\u3069\u304F\u304F\u3050\u3064",
    // Official flavor text: "モモワロウの 技によって どく状態に なった 相手は こんらん状態にも なってしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisontouch: {
    name: "\u3069\u304F\u3057\u3085",
    // Official flavor text: "触る だけで 相手を どく 状態に することがある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powerconstruct: {
    name: "\u30B9\u30EF\u30FC\u30E0\u30C1\u30A7\u30F3\u30B8",
    // Official flavor text: "ＨＰが 半分に なると セルたちが 応援に 駆けつけ パーフェクトフォルムに 姿を 変える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u305F\u304F\u3055\u3093\u306E \u6C17\u914D\u3092 \u611F\u3058\u308B\u2026\u2026\uFF01",
    transform: "{POKEMON}\u306F \u30D1\u30FC\u30D5\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30E0\u306B \u5909\u308F\u3063\u305F\uFF01"
  },
  powerofalchemy: {
    name: "\u304B\u304C\u304F\u306E\u3061\u304B\u3089",
    // Official flavor text: "倒された 味方の 特性を 受け継ぎ 同じ 特性に 変わる。"
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
    name: "\u30D1\u30EF\u30FC\u30B9\u30DD\u30C3\u30C8",
    // Official flavor text: "隣に いるだけで 技の 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prankster: {
    name: "\u3044\u305F\u305A\u3089\u3054\u3053\u308D",
    // Official flavor text: "変化技を 先制で 出すことが できる。"
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
    name: "\u30D7\u30EC\u30C3\u30B7\u30E3\u30FC",
    // Official flavor text: "プレッシャーを あたえて 相手の 使う 技の ＰＰを 多く 減らす。"
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
    start: "  {POKEMON}\u306F \u30D7\u30EC\u30C3\u30B7\u30E3\u30FC\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  primordialsea: {
    name: "\u306F\u3058\u307E\u308A\u306E\u3046\u307F",
    // Official flavor text: "ほのおタイプの 攻撃を 受けない 天気にする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prismarmor: {
    name: "\u30D7\u30EA\u30BA\u30E0\u30A2\u30FC\u30DE\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  propellertail: {
    name: "\u30B9\u30AF\u30EA\u30E5\u30FC\u304A\u3073\u308C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  protean: {
    name: "\u3078\u3093\u3052\u3093\u3058\u3056\u3044",
    // Official flavor text: "自分が 出す 技と 同じ タイプに 変化する。"
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
    name: "\u3053\u3060\u3044\u304B\u3063\u305B\u3044",
    // Official flavor text: "ブーストエナジーを 持たせるか 天気が 晴れのとき いちばん 高い能力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u306B\u307B\u3093\u3070\u308C\u3067 \u3053\u3060\u3044\u304B\u3063\u305B\u3044\u3092 \u767A\u52D5\u3057\u305F\uFF01",
    activateFromItem: "  {POKEMON}\u306F \u30D6\u30FC\u30B9\u30C8\u30A8\u30CA\u30B8\u30FC\u3067 \u3053\u3060\u3044\u304B\u3063\u305B\u3044\u3092 \u767A\u52D5\u3057\u305F\uFF01",
    start: "  {POKEMON}\u306E {STAT}\u304C \u9AD8\u307E\u3063\u305F\uFF01",
    end: "  {POKEMON}\u306F \u3053\u3060\u3044\u304B\u3063\u305B\u3044\u306E \u52B9\u679C\u304C \u5207\u308C\u305F\uFF01"
  },
  psychicsurge: {
    name: "\u30B5\u30A4\u30B3\u30E1\u30A4\u30AB\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  punkrock: {
    name: "\u30D1\u30F3\u30AF\u30ED\u30C3\u30AF",
    // Official flavor text: "音技の 威力が 上がる。 受けた 音技の ダメージは 半分に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purepower: {
    name: "\u30E8\u30AC\u30D1\u30EF\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purifyingsalt: {
    name: "\u304D\u3088\u3081\u306E\u3057\u304A",
    // Official flavor text: "清らかな塩で 状態異常に ならない。 ゴーストタイプの 技の ダメージを 半減させる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  quarkdrive: {
    name: "\u30AF\u30A9\u30FC\u30AF\u30C1\u30E3\u30FC\u30B8",
    // Official flavor text: "ブーストエナジーを 持たせるか エレキフィールドのとき いちばん 高い能力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9\u3067 \u30AF\u30A9\u30FC\u30AF\u30C1\u30E3\u30FC\u30B8\u3092 \u767A\u52D5\u3057\u305F\uFF01",
    activateFromItem: "  {POKEMON}\u306F \u30D6\u30FC\u30B9\u30C8\u30A8\u30CA\u30B8\u30FC\u3067 \u30AF\u30A9\u30FC\u30AF\u30C1\u30E3\u30FC\u30B8\u3092 \u767A\u52D5\u3057\u305F\uFF01",
    start: "  {POKEMON}\u306E {STAT}\u304C \u9AD8\u307E\u3063\u305F\uFF01",
    end: "  {POKEMON}\u306F \u30AF\u30A9\u30FC\u30AF\u30C1\u30E3\u30FC\u30B8\u306E \u52B9\u679C\u304C \u5207\u308C\u305F\uFF01"
  },
  queenlymajesty: {
    name: "\u3058\u3087\u304A\u3046\u306E\u3044\u3052\u3093",
    // Official flavor text: "相手に 威圧感を あたえ こちらに むかって 先制技を 出せない ようにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  quickdraw: {
    name: "\u30AF\u30A4\u30C3\u30AF\u30C9\u30ED\u30A6",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u30AF\u30A4\u30C3\u30AF\u30C9\u30ED\u30A6\u3067 \u884C\u52D5\u304C \u306F\u3084\u304F\u306A\u3063\u305F\uFF01"
  },
  quickfeet: {
    name: "\u306F\u3084\u3042\u3057",
    // Official flavor text: "状態異常に なると 素早さが 上がる。"
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
    name: "\u3042\u3081\u3046\u3051\u3056\u3089",
    // Official flavor text: "天気が 雨のとき 少しずつ ＨＰを 回復する。"
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
    name: "\u3073\u3073\u308A",
    // Official flavor text: "あくタイプと ゴーストタイプと むしタイプの 技を 受けると びびって 素早さが 上がる。"
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
    name: "\u30EC\u30B7\u30FC\u30D0\u30FC",
    // Official flavor text: "倒された 味方の 特性を 受け継いで 同じ 特性に なる。"
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
    changeAbility: "  {SOURCE}\u306E {ABILITY}\u3092 \u5F15\u304D\u7D99\u3044\u3060\uFF01"
  },
  reckless: {
    name: "\u3059\u3066\u307F",
    // Official flavor text: "反動で ダメージを 受ける 技の 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  refrigerate: {
    name: "\u30D5\u30EA\u30FC\u30BA\u30B9\u30AD\u30F3",
    // Official flavor text: "ノーマルタイプの 技が こおりタイプに なる。 威力が 少し 上がる。"
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
    name: "\u3055\u3044\u305B\u3044\u308A\u3087\u304F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ripen: {
    name: "\u3058\u3085\u304F\u305B\u3044",
    // Official flavor text: "熟成 させることで きのみの 効果が 倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rivalry: {
    name: "\u3068\u3046\u305D\u3046\u3057\u3093",
    // Official flavor text: "性別が 同じだと 闘争心を 燃やして 強くなる。 性別が 違うと 弱くなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rkssystem: {
    name: "\uFF21\uFF32\u30B7\u30B9\u30C6\u30E0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockhead: {
    name: "\u3044\u3057\u3042\u305F\u307E",
    // Official flavor text: "反動を 受ける 技を 出しても ＨＰが 減らない。"
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
    name: "\u3044\u308F\u306F\u3053\u3073",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  roughskin: {
    name: "\u3055\u3081\u306F\u3060",
    // Official flavor text: "攻撃を 受けたとき 自分に 触れた 相手を ざらざらの 肌で キズつける。"
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
    damage: "  {POKEMON}\u306F \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u305F\uFF01"
  },
  runaway: {
    name: "\u306B\u3052\u3042\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandforce: {
    name: "\u3059\u306A\u306E\u3061\u304B\u3089",
    // Official flavor text: "天気が すなあらしの とき いわタイプと じめんタイプと はがねタイプの 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandrush: {
    name: "\u3059\u306A\u304B\u304D",
    // Official flavor text: "天気が すなあらし のとき 素早さが 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandspit: {
    name: "\u3059\u306A\u306F\u304D",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sandstream: {
    name: "\u3059\u306A\u304A\u3053\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandveil: {
    name: "\u3059\u306A\u304C\u304F\u308C",
    // Official flavor text: "砂あらしの とき 回避率が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sapsipper: {
    name: "\u305D\u3046\u3057\u3087\u304F",
    // Official flavor text: "くさタイプの 技を 受けると ダメージを 受けずに 攻撃が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  schooling: {
    name: "\u304E\u3087\u3050\u3093",
    // Official flavor text: "ＨＰが 多いときは 群れて 強くなる。 ＨＰの 残りが 少なくなると 群れは 散り散りに なってしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON}\u306E \u7FA4\u308C\u304C \u96C6\u307E\u3063\u305F\uFF01",
    transformEnd: "{POKEMON}\u306E \u7FA4\u308C\u306F \u3061\u308A\u3062\u308A\u306B \u306A\u3063\u305F\uFF01"
  },
  scrappy: {
    name: "\u304D\u3082\u3063\u305F\u307E",
    // Official flavor text: "ゴーストタイプの ポケモンに ノーマルタイプと かくとうタイプの 技を 当てることが できる。"
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
    name: "\u30D0\u30EA\u30A2\u30D5\u30EA\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seedsower: {
    name: "\u3053\u307C\u308C\u30C0\u30CD",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  serenegrace: {
    name: "\u3066\u3093\u306E\u3081\u3050\u307F",
    // Official flavor text: "天の恵みの おかげで 技の 追加効果が でやすい。"
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
    name: "\u30D5\u30A1\u30F3\u30C8\u30E0\u30AC\u30FC\u30C9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowtag: {
    name: "\u304B\u3052\u3075\u307F",
    // Official flavor text: "相手の 影を 踏み 逃げたり 交代 できなくする。"
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
    name: "\u304D\u308C\u3042\u3058",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shedskin: {
    name: "\u3060\u3063\u3074",
    // Official flavor text: "体の 皮を 脱ぎ捨てることで 状態異常を 治すことが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sheerforce: {
    name: "\u3061\u304B\u3089\u305A\u304F",
    // Official flavor text: "技の 追加効果は なくなるが そのぶん 高い 威力で 技を 出すことが できる。"
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
    name: "\u30B7\u30A7\u30EB\u30A2\u30FC\u30DE\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shielddust: {
    name: "\u308A\u3093\u3077\u3093",
    // Official flavor text: "りんぷんに 守られて 技の 追加効果を 受けなくなる。"
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
    name: "\u30EA\u30DF\u30C3\u30C8\u30B7\u30FC\u30EB\u30C9",
    // Official flavor text: "ＨＰが 半分に なると 殻が 壊れて 攻撃的に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "\u30EA\u30DF\u30C3\u30C8\u30B7\u30FC\u30EB\u30C9 \u767A\u52D5\uFF01",
    transformEnd: "\u30EA\u30DF\u30C3\u30C8\u30B7\u30FC\u30EB\u30C9 \u89E3\u9664\uFF01"
  },
  simple: {
    name: "\u305F\u3093\u3058\u3085\u3093",
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
    name: "\u30B9\u30AD\u30EB\u30EA\u30F3\u30AF",
    // Official flavor text: "連続技を 使うと いつも 最高回数 出すことが できる。"
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
    name: "\u30B9\u30ED\u30FC\u30B9\u30BF\u30FC\u30C8",
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
    start: "  {POKEMON}\u306F \u8ABF\u5B50\u304C \u4E0A\u304C\u3089\u306A\u3044\uFF01",
    end: "  {POKEMON}\u306F \u8ABF\u5B50\u3092 \u53D6\u308A\u623B\u3057\u305F\uFF01"
  },
  slushrush: {
    name: "\u3086\u304D\u304B\u304D",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sniper: {
    name: "\u30B9\u30CA\u30A4\u30D1\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snowcloak: {
    name: "\u3086\u304D\u304C\u304F\u308C",
    // Official flavor text: "天気が あられのとき 回避率が 上がる。"
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
    name: "\u3086\u304D\u3075\u3089\u3057",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  solarpower: {
    name: "\u30B5\u30F3\u30D1\u30EF\u30FC",
    // Official flavor text: "天気が 晴れると 特攻が 上がるが 毎ターン ＨＰが 減る。"
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
    name: "\u30CF\u30FC\u30C9\u30ED\u30C3\u30AF",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soulheart: {
    name: "\u30BD\u30A6\u30EB\u30CF\u30FC\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soundproof: {
    name: "\u307C\u3046\u304A\u3093",
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
    name: "\u304B\u305D\u304F",
    // Official flavor text: "毎ターン 素早さが 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spicyspray: {
    name: "\u3068\u3073\u3060\u3059\u30CF\u30D0\u30CD\u30ED",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stakeout: {
    name: "\u306F\u308A\u3053\u307F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stall: {
    name: "\u3042\u3068\u3060\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stalwart: {
    name: "\u3059\u3058\u304C\u306D\u3044\u308A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stamina: {
    name: "\u3058\u304D\u3085\u3046\u308A\u3087\u304F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stancechange: {
    name: "\u30D0\u30C8\u30EB\u30B9\u30A4\u30C3\u30C1",
    // Official flavor text: "攻撃技を 出すと ブレードフォルムに 技 キングシールドを 出すと シールドフォルムに 変化する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "\u30D6\u30EC\u30FC\u30C9\u30D5\u30A9\u30EB\u30E0 \u30C1\u30A7\u30F3\u30B8\uFF01",
    transformEnd: "\u30B7\u30FC\u30EB\u30C9\u30D5\u30A9\u30EB\u30E0 \u30C1\u30A7\u30F3\u30B8\uFF01"
  },
  static: {
    name: "\u305B\u3044\u3067\u3093\u304D",
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
    name: "\u3075\u304F\u3064\u306E\u3053\u3053\u308D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steamengine: {
    name: "\u3058\u3087\u3046\u304D\u304D\u304B\u3093",
    // Official flavor text: "みずタイプ ほのおタイプの 技を 受けると 素早さが ぐぐーんと 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelworker: {
    name: "\u306F\u304C\u306D\u3064\u304B\u3044",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelyspirit: {
    name: "\u306F\u304C\u306D\u306E\u305B\u3044\u3057\u3093",
    // Official flavor text: "味方の はがねタイプの 攻撃の 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stench: {
    name: "\u3042\u304F\u3057\u3085\u3046",
    // Official flavor text: "臭い においを 放つことによって 攻撃した ときに 相手を ひるませることが ある。"
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
    name: "\u306D\u3093\u3061\u3083\u304F",
    // Official flavor text: "粘着質の 体に 道具が くっついているため 相手に 道具を 奪われない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    block: "  {POKEMON}\u306E \u9053\u5177\u3092 \u596A\u3048\u306A\u3044\uFF01"
  },
  stormdrain: {
    name: "\u3088\u3073\u307F\u305A",
    // Official flavor text: "みずタイプの 技を 自分に よせつけ ダメージは 受けずに 特攻が 上がる。"
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
    name: "\u304C\u3093\u3058\u3087\u3046\u3042\u3054",
    // Official flavor text: "あごが 頑丈で 噛む 技の 威力が 高くなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sturdy: {
    name: "\u304C\u3093\u3058\u3087\u3046",
    // Official flavor text: "相手の 技を 受けても 一撃で 倒されることが ない。 一撃必殺技も 効かない。"
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
    activate: "  {POKEMON}\u306F \u653B\u6483\u3092 \u3053\u3089\u3048\u305F\uFF01"
  },
  suctioncups: {
    name: "\u304D\u3085\u3046\u3070\u3093",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u306F \u304D\u3085\u3046\u3070\u3093\u3067 \u306F\u308A\u3064\u3044\u3066\u3044\u308B\uFF01"
  },
  superluck: {
    name: "\u304D\u3087\u3046\u3046\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersweetsyrup: {
    name: "\u304B\u3093\u308D\u306A\u30DF\u30C4",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306E \u30DF\u30C4\u304B\u3089 \u3042\u307E\u3044\u304B\u304A\u308A\u304C \u305F\u3060\u3088\u3063\u3066\u3044\u308B\uFF01"
  },
  supremeoverlord: {
    name: "\u305D\u3046\u3060\u3044\u3057\u3087\u3046",
    // Official flavor text: "登場したとき 今まで 倒された 味方の 数が 多いほど 少しずつ 攻撃と 特攻が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u5012\u3055\u308C\u305F \u4EF2\u9593\u304B\u3089 \u529B\u3092 \u3082\u3089\u3063\u305F\uFF01"
  },
  surgesurfer: {
    name: "\u30B5\u30FC\u30D5\u30C6\u30FC\u30EB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  swarm: {
    name: "\u3080\u3057\u306E\u3057\u3089\u305B",
    // Official flavor text: "ＨＰが 減ったとき むしタイプの 技の 威力が 上がる。"
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
    name: "\u30B9\u30A4\u30FC\u30C8\u30D9\u30FC\u30EB",
    // Official flavor text: "味方の ポケモンは 眠らなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u306F \u30B9\u30A4\u30FC\u30C8\u30D9\u30FC\u30EB\u3067 \u7720\u3089\u306A\u3044\uFF01"
  },
  swiftswim: {
    name: "\u3059\u3044\u3059\u3044",
    // Official flavor text: "天気が 雨のとき 素早さが 上がる。"
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
    name: "\u308F\u3056\u308F\u3044\u306E\u3064\u308B\u304E",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306E \u308F\u3056\u308F\u3044\u306E\u3064\u308B\u304E\u3067 \u307E\u308F\u308A\u306E \u9632\u5FA1\u304C \u5F31\u307E\u3063\u305F\uFF01"
  },
  symbiosis: {
    name: "\u304D\u3087\u3046\u305B\u3044",
    // Official flavor text: "味方が 道具を 使うと 自分の 持っている 道具を 味方に 渡す。"
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
    activate: "  {POKEMON}\u306F {ITEM}\u3092 {TARGET}\u306B \u6301\u305F\u305B\u305F\uFF01"
  },
  synchronize: {
    name: "\u30B7\u30F3\u30AF\u30ED",
    // Official flavor text: "自分が なってしまった どくや まひや やけどを 相手に うつす。"
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
    name: "\u308F\u3056\u308F\u3044\u306E\u304A\u3075\u3060",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306E \u308F\u3056\u308F\u3044\u306E\u304A\u3075\u3060\u3067 \u307E\u308F\u308A\u306E \u653B\u6483\u304C \u5F31\u307E\u3063\u305F\uFF01"
  },
  tangledfeet: {
    name: "\u3061\u3069\u308A\u3042\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tanglinghair: {
    name: "\u30AB\u30FC\u30EA\u30FC\u30D8\u30A2\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  technician: {
    name: "\u30C6\u30AF\u30CB\u30B7\u30E3\u30F3",
    // Official flavor text: "威力が 低い 技の 威力を 高くして 攻撃できる。"
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
    name: "\u30C6\u30EC\u30D1\u30B7\u30FC",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON}\u306F \u5473\u65B9\u304B\u3089\u306E \u653B\u6483\u3092 \u53D7\u3051\u306A\u3044\uFF01"
  },
  teraformzero: {
    name: "\u30BC\u30ED\u30D5\u30A9\u30FC\u30DF\u30F3\u30B0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terashell: {
    name: "\u30C6\u30E9\u30B9\u30B7\u30A7\u30EB",
    // Official flavor text: "全タイプの力を 秘めた甲羅は HPが 満タンの ときに 受ける ダメージを すべて 今ひとつに する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u7532\u7F85\u3092 \u304B\u304C\u3084\u304B\u305B \u30BF\u30A4\u30D7\u76F8\u6027\u3092 \u6B6A\u3081\u308B\uFF01\uFF01"
  },
  terashift: {
    name: "\u30C6\u30E9\u30B9\u30C1\u30A7\u30F3\u30B8",
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON}\u306E \u59FF\u304C \u5909\u5316\u3057\u305F\uFF01"
  },
  teravolt: {
    name: "\u30C6\u30E9\u30DC\u30EB\u30C6\u30FC\u30B8",
    // Official flavor text: "相手の 特性に ジャマされず 相手に 技を 出すことが できる。"
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
    start: "  {POKEMON}\u306F \u5F3E\u3051\u308B \u30AA\u30FC\u30E9\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  thermalexchange: {
    name: "\u306D\u3064\u3053\u3046\u304B\u3093",
    // Official flavor text: "ほのおタイプの 技を 受けると 攻撃が 上がる。 やけど状態に ならない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thickfat: {
    name: "\u3042\u3064\u3044\u3057\u307C\u3046",
    // Official flavor text: "厚い 脂肪で 守られているので ほのおタイプと こおりタイプの 技の ダメージを 半減させる。"
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
    name: "\u3044\u308D\u3081\u304C\u306D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torrent: {
    name: "\u3052\u304D\u308A\u3085\u3046",
    // Official flavor text: "ＨＰが 減ったとき みずタイプの 技の 威力が 上がる。"
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
    name: "\u304B\u305F\u3044\u30C4\u30E1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicboost: {
    name: "\u3069\u304F\u307C\u3046\u305D\u3046",
    // Official flavor text: "どく状態に なったとき 物理技の 威力が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicchain: {
    name: "\u3069\u304F\u306E\u304F\u3055\u308A",
    // Official flavor text: "毒素を ふくんだ 鎖の力で 技を 当てた 相手を 猛毒の状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicdebris: {
    name: "\u3069\u304F\u3052\u3057\u3087\u3046",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trace: {
    name: "\u30C8\u30EC\u30FC\u30B9",
    // Official flavor text: "登場 したとき 相手の 特性を トレースして 同じ 特性に なる。"
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
    changeAbility: "  {POKEMON}\u306F {SOURCE}\u306E {ABILITY}\u3092 \u30C8\u30EC\u30FC\u30B9\u3057\u305F\uFF01"
  },
  transistor: {
    name: "\u30C8\u30E9\u30F3\u30B8\u30B9\u30BF",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  triage: {
    name: "\u30D2\u30FC\u30EA\u30F3\u30B0\u30B7\u30D5\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  truant: {
    name: "\u306A\u307E\u3051",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    cant: "{POKEMON}\u306F \u306A\u307E\u3051\u3066\u3044\u308B"
  },
  turboblaze: {
    name: "\u30BF\u30FC\u30DC\u30D6\u30EC\u30A4\u30BA",
    // Official flavor text: "相手の 特性に ジャマされず 相手に 技を 出すことが できる。"
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
    start: "  {POKEMON}\u306F \u71C3\u3048\u76DB\u308B \u30AA\u30FC\u30E9\u3092 \u653E\u3063\u3066\u3044\u308B\uFF01"
  },
  unaware: {
    name: "\u3066\u3093\u306D\u3093",
    // Official flavor text: "相手の 能力の 変化を 無視して 攻撃が できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unburden: {
    name: "\u304B\u308B\u308F\u3056",
    // Official flavor text: "持っていた 道具が なくなると 素早さが 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unnerve: {
    name: "\u304D\u3093\u3061\u3087\u3046\u304B\u3093",
    // Official flavor text: "相手を 緊張させて きのみを 食べられなく させる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {TEAM}\u306F \u7DCA\u5F35\u3057\u3066 \u304D\u306E\u307F\u304C \u98DF\u3079\u3089\u308C\u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  unseenfist: {
    name: "\u3075\u304B\u3057\u306E\u3053\u3076\u3057",
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "\u308F\u3056\u308F\u3044\u306E\u3046\u3064\u308F",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306E \u308F\u3056\u308F\u3044\u306E\u3046\u3064\u308F\u3067 \u307E\u308F\u308A\u306E \u7279\u653B\u304C \u5F31\u307E\u3063\u305F\uFF01"
  },
  victorystar: {
    name: "\u3057\u3087\u3046\u308A\u306E\u307B\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vitalspirit: {
    name: "\u3084\u308B\u304D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  voltabsorb: {
    name: "\u3061\u304F\u3067\u3093",
    // Official flavor text: "でんきタイプの 技を 受けると ダメージを 受けずに 回復する。"
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
    name: "\u3055\u307E\u3088\u3046\u305F\u307E\u3057\u3044",
    // Official flavor text: "接触する 技で 攻撃 してきた ポケモンと 特性を 入れ替える。"
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
    name: "\u3061\u3087\u3059\u3044",
    // Official flavor text: "みずタイプの 技を 受けると ダメージを 受けずに 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterbubble: {
    name: "\u3059\u3044\u307B\u3046",
    // Official flavor text: "自分に 対する ほのおタイプの 技の 威力を 下げる。 やけど しない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  watercompaction: {
    name: "\u307F\u305A\u304C\u305F\u3081",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterveil: {
    name: "\u307F\u305A\u306E\u30D9\u30FC\u30EB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  weakarmor: {
    name: "\u304F\u3060\u3051\u308B\u3088\u308D\u3044",
    // Official flavor text: "物理技で ダメージを 受けると 防御が 下がり 素早さが ぐーんと 上がる。"
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
    name: "\u3053\u3093\u304C\u308A\u30DC\u30C7\u30A3",
    // Official flavor text: "ほのおタイプの 技を 受けると ダメージを 受けずに 防御が ぐーんと 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  whitesmoke: {
    name: "\u3057\u308D\u3044\u3051\u3080\u308A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wimpout: {
    name: "\u306B\u3052\u3054\u3057",
    // Official flavor text: "ＨＰが 半分に なると あわてて 逃げ出して 手持ちに 引っ込んで しまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  windpower: {
    name: "\u3075\u3046\u308A\u3087\u304F\u3067\u3093\u304D",
    // Official flavor text: "風技を 受けると じゅうでん 状態に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#electromorphosis"
  },
  windrider: {
    name: "\u304B\u305C\u306E\u308A",
    // Official flavor text: "おいかぜが 吹いたり 風技を 受けると ダメージを 受けずに 攻撃が 上がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wonderguard: {
    name: "\u3075\u3057\u304E\u306A\u307E\u3082\u308A",
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
    name: "\u30DF\u30E9\u30AF\u30EB\u30B9\u30AD\u30F3",
    // Official flavor text: "変化技を 受けにくい 体に なっている。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zenmode: {
    name: "\u30C0\u30EB\u30DE\u30E2\u30FC\u30C9",
    // Official flavor text: "ＨＰが 半分 以下に なると 姿が 変化する。"
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
    transform: "\u30C0\u30EB\u30DE\u30E2\u30FC\u30C9 \u767A\u52D5\uFF01",
    transformEnd: "\u30C0\u30EB\u30DE\u30E2\u30FC\u30C9 \u89E3\u9664\uFF01"
  },
  zerotohero: {
    name: "\u30DE\u30A4\u30C6\u30A3\u30C1\u30A7\u30F3\u30B8",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u5909\u8EAB\u3057\u3066 \u5E30\u3063\u3066\u304D\u305F\uFF01"
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
