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
var moves_exports = {};
__export(moves_exports, {
  MovesText: () => MovesText
});
module.exports = __toCommonJS(moves_exports);
const MovesText = {
  "10000000voltthunderbolt": {
    name: "\uFF11\uFF10\uFF10\uFF10\u307E\u3093\u30DC\u30EB\u30C8",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  absorb: {
    name: "\u3059\u3044\u3068\u308B",
    // Official flavor text: "養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  accelerock: {
    name: "\u30A2\u30AF\u30BB\u30EB\u30ED\u30C3\u30AF",
    // Official flavor text: "素早い スピードで 相手に ぶつかって 攻撃する。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  acid: {
    name: "\u3088\u3046\u304B\u3044\u3048\u304D",
    // Official flavor text: "強い 酸を 相手に かけて 攻撃する。 相手の 特防を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  acidarmor: {
    name: "\u3068\u3051\u308B",
    // Official flavor text: "細胞の 変化で 液状に なり 自分の 防御を ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aciddownpour: {
    name: "\u30A2\u30B7\u30C3\u30C9\u30DD\u30A4\u30BA\u30F3\u30C7\u30EA\u30FC\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  acidspray: {
    name: "\u30A2\u30B7\u30C3\u30C9\u30DC\u30E0",
    // Official flavor text: "相手を とかす 液体を 吐きだして 攻撃する。 相手の 特防を がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  acrobatics: {
    name: "\u30A2\u30AF\u30ED\u30D0\u30C3\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  acupressure: {
    name: "\u3064\u307C\u3092\u3064\u304F",
    // Official flavor text: "つぼおしで 体を 活性化させる。 能力の どれか １つを ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  aerialace: {
    name: "\u3064\u3070\u3081\u304C\u3048\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aeroblast: {
    name: "\u30A8\u30A2\u30ED\u30D6\u30E9\u30B9\u30C8",
    // Official flavor text: "空気の 渦を 発射して 攻撃する。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  afteryou: {
    name: "\u304A\u3055\u304D\u306B\u3069\u3046\u305E",
    // Official flavor text: "相手の 行動を サポートして 自分の 行動の あとに 続けて 動けるように する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {TARGET}\u306F \u304A\u8A00\u8449\u306B \u7518\u3048\u308B\u3053\u3068\u306B\u3057\u305F\uFF01"
  },
  agility: {
    name: "\u3053\u3046\u305D\u304F\u3044\u3069\u3046",
    // Official flavor text: "力を ぬいて 体を 軽くして 高速で 動く。 自分の 素早さを ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aircutter: {
    name: "\u30A8\u30A2\u30AB\u30C3\u30BF\u30FC",
    // Official flavor text: "鋭い 風で 相手を 切りつけて 攻撃する。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  airslash: {
    name: "\u30A8\u30A2\u30B9\u30E9\u30C3\u30B7\u30E5",
    // Official flavor text: "空をも 切り裂く 空気の 刃で 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  alloutpummeling: {
    name: "\u305C\u3093\u308A\u3087\u304F\u3080\u305D\u3046\u3052\u304D\u308C\u3064\u3051\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  alluringvoice: {
    name: "\u307F\u308F\u304F\u306E\u30DC\u30A4\u30B9",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  allyswitch: {
    name: "\u30B5\u30A4\u30C9\u30C1\u30A7\u30F3\u30B8",
    // Official flavor text: "不思議な 力で テレポートして 自分と 味方の 居場所を 入れ替える。"
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
    gen6: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  amnesia: {
    name: "\u30C9\u308F\u3059\u308C",
    // Official flavor text: "頭を からにして 一瞬 なにかを 忘れることで 自分の 特防を ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  anchorshot: {
    name: "\u30A2\u30F3\u30AB\u30FC\u30B7\u30E7\u30C3\u30C8",
    // Official flavor text: "アンカーを 相手に からませて 攻撃する。 相手は 逃げることが できなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  ancientpower: {
    name: "\u3052\u3093\u3057\u306E\u3061\u304B\u3089",
    // Official flavor text: "原始の 力で 攻撃する。 自分の すべての 能力が あがることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  appleacid: {
    name: "\u308A\u3093\u3054\u3055\u3093",
    // Official flavor text: "すっぱい りんごから つくりだした 酸性の 液体で 攻撃。 相手の 特防を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aquacutter: {
    name: "\u30A2\u30AF\u30A2\u30AB\u30C3\u30BF\u30FC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aquajet: {
    name: "\u30A2\u30AF\u30A2\u30B8\u30A7\u30C3\u30C8",
    // Official flavor text: "目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aquaring: {
    name: "\u30A2\u30AF\u30A2\u30EA\u30F3\u30B0",
    // Official flavor text: "自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u6C34\u306E\u30EA\u30F3\u30B0\u3092 \u307E\u3068\u3063\u305F\uFF01",
    heal: "  {POKEMON}\u306F \u6C34\u306E\u30EA\u30F3\u30B0\u3067 \u4F53\u529B\u3092\u56DE\u5FA9\uFF01"
  },
  aquastep: {
    name: "\u30A2\u30AF\u30A2\u30B9\u30C6\u30C3\u30D7",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aquatail: {
    name: "\u30A2\u30AF\u30A2\u30C6\u30FC\u30EB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  armorcannon: {
    name: "\u30A2\u30FC\u30DE\u30FC\u30AD\u30E3\u30CE\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  armthrust: {
    name: "\u3064\u3063\u3071\u308A",
    // Official flavor text: "ひらいた 両手で 相手を つっぱって 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
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
  aromatherapy: {
    name: "\u30A2\u30ED\u30DE\u30BB\u30E9\u30D4\u30FC",
    // Official flavor text: "心地好い やすらぐ 香りを かがせて 味方全員の 状態異常を 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  \u5FC3\u5730\u3088\u3044 \u9999\u308A\u304C \u5E83\u304C\u3063\u305F\uFF01"
  },
  aromaticmist: {
    name: "\u30A2\u30ED\u30DE\u30DF\u30B9\u30C8",
    // Official flavor text: "不思議な アロマの 香りによって 味方の 特防を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  assist: {
    name: "\u306D\u3053\u306E\u3066",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    }
  },
  assurance: {
    name: "\u30C0\u30E1\u304A\u3057",
    // Official flavor text: "そのターンに 相手が すでに ダメージを 受けていたら 技の 威力は ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  astonish: {
    name: "\u304A\u3069\u308D\u304B\u3059",
    // Official flavor text: "大きな 声などで 不意に 驚かして 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  astralbarrage: {
    name: "\u30A2\u30B9\u30C8\u30E9\u30EB\u30D3\u30C3\u30C8",
    // Official flavor text: "たくさんの 小さな 霊体を 相手に ぶつけて 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  attackorder: {
    name: "\u3053\u3046\u3052\u304D\u3057\u308C\u3044",
    // Official flavor text: "しもべを 呼びだして 相手に むかって 攻撃させる。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  attract: {
    name: "\u30E1\u30ED\u30E1\u30ED",
    // Official flavor text: "♂なら♀を ♀なら♂を 誘惑して メロメロに する。 相手は 技が だしにくくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u30E1\u30ED\u30E1\u30ED\u306B \u306A\u3063\u305F\uFF01",
    startFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u30E1\u30ED\u30E1\u30ED\u306B \u306A\u3063\u305F\uFF01",
    end: "  {POKEMON}\u306F \u30E1\u30ED\u30E1\u30ED\u72B6\u614B\u304C \u6CBB\u3063\u305F\uFF01",
    endFromItem: "  {POKEMON}\u306F {ITEM}\u3067 \u30E1\u30ED\u30E1\u30ED\u72B6\u614B\u304C \u6CBB\u3063\u305F\uFF01",
    activate: "  {POKEMON}\u306F {TARGET}\u306B \u30E1\u30ED\u30E1\u30ED\u3060\uFF01",
    cant: "{POKEMON}\u306F \u30E1\u30ED\u30E1\u30ED\u3067 \u6280\u304C \u3060\u305B\u306A\u304B\u3063\u305F\uFF01"
  },
  aurasphere: {
    name: "\u306F\u3069\u3046\u3060\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurawheel: {
    name: "\u30AA\u30FC\u30E9\u3050\u308B\u307E",
    // Official flavor text: "ほほぶくろに 溜めた エネルギーで 攻撃し 自分の 素早さを あげる。 モルペコの 姿で タイプが 変わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurorabeam: {
    name: "\u30AA\u30FC\u30ED\u30E9\u30D3\u30FC\u30E0",
    // Official flavor text: "にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  auroraveil: {
    name: "\u30AA\u30FC\u30ED\u30E9\u30D9\u30FC\u30EB",
    // Official flavor text: "５ターンの 間 物理と 特殊の ダメージを 弱める。 あられの 時しか 出すことが できない。"
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
    start: "  {TEAM}\u306F \u30AA\u30FC\u30ED\u30E9\u30D9\u30FC\u30EB\u3067 \u7269\u7406\u3068 \u7279\u6B8A\u306B \u5F37\u304F\u306A\u3063\u305F\uFF01",
    end: "  {TEAM}\u306E \u30AA\u30FC\u30ED\u30E9\u30D9\u30FC\u30EB\u304C \u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  autotomize: {
    name: "\u30DC\u30C7\u30A3\u30D1\u30FC\u30B8",
    // Official flavor text: "体の ムダな 部分を 削る。 自分の 素早さを ぐーんと あげて 体重も 軽くなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u8EAB\u8EFD\u306B\u306A\u3063\u305F\uFF01"
  },
  avalanche: {
    name: "\u3086\u304D\u306A\u3060\u308C",
    // Official flavor text: "相手から 技を 受けていると その 相手に 対して 技の 威力が ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  axekick: {
    name: "\u304B\u304B\u3068\u304A\u3068\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#crash"
  },
  babydolleyes: {
    name: "\u3064\u3076\u3089\u306A\u3072\u3068\u307F",
    // Official flavor text: "つぶらなひとみで 相手を みつめて 攻撃を さげる。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  baddybad: {
    name: "\u308F\u308B\u308F\u308B\u30BE\u30FC\u30F3",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  banefulbunker: {
    name: "\u30C8\u30FC\u30C1\u30AB",
    // Official flavor text: "相手の 攻撃を 防ぐと 同時に 触れた 相手に 毒を 与えてしまう。"
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
    }
  },
  barbbarrage: {
    name: "\u3069\u304F\u3070\u308A\u30BB\u30F3\u30DC\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  barrage: {
    name: "\u305F\u307E\u306A\u3052",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  barrier: {
    name: "\u30D0\u30EA\u30A2\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  batonpass: {
    name: "\u30D0\u30C8\u30F3\u30BF\u30C3\u30C1",
    // Official flavor text: "控えの ポケモンと 入れ替わる。 能力変化は 替わった ポケモンが そのまま 受けつぐ。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  beakblast: {
    name: "\u304F\u3061\u3070\u3057\u30AD\u30E3\u30CE\u30F3",
    // Official flavor text: "最初に クチバシを 加熱してから 攻撃を くりだす。 加熱中に さわると やけどする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u30AF\u30C1\u30D0\u30B7\u3092 \u52A0\u71B1\u3057\u59CB\u3081\u305F\uFF01"
  },
  beatup: {
    name: "\u3075\u304F\u308D\u3060\u305F\u304D",
    // Official flavor text: "味方 全員で 攻撃する。 仲間の ポケモンが 多いほど 技の 攻撃回数が 増える。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  {NAME}\u306E \u3053\u3046\u3052\u304D\uFF01"
  },
  behemothbash: {
    name: "\u304D\u3087\u3058\u3085\u3046\u3060\u3093",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  behemothblade: {
    name: "\u304D\u3087\u3058\u3085\u3046\u3056\u3093",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  belch: {
    name: "\u30B2\u30C3\u30D7",
    // Official flavor text: "相手に 向かって ゲップを 浴びせて ダメージを 与える。 きのみを 食べないと だせない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  bellydrum: {
    name: "\u306F\u3089\u3060\u3044\u3053",
    // Official flavor text: "自分の ＨＰを 最大ＨＰの 半分 減らして 自分の 攻撃を 最大に あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    boost: "  {POKEMON}\u306F \u4F53\u529B\u3092\u524A\u3063\u3066 \u30D1\u30EF\u30FC\u5168\u958B\uFF01"
  },
  bestow: {
    name: "\u30AE\u30D5\u30C8\u30D1\u30B9",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    takeItem: "  {POKEMON}\u306F {SOURCE}\u304B\u3089 {ITEM}\u3092 \u53D7\u3051\u53D6\u3063\u305F\uFF01"
  },
  bide: {
    name: "\u304C\u307E\u3093",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u304C\u307E\u3093\u3057\u3066\u3044\u308B",
    end: "  {POKEMON}\u306E \u304C\u307E\u3093\u304C \u89E3\u304B\u308C\u305F\uFF01",
    activate: "  {POKEMON}\u306F \u304C\u307E\u3093\u3057\u3066\u3044\u308B"
  },
  bind: {
    name: "\u3057\u3081\u3064\u3051\u308B",
    // Official flavor text: "長い 体や つるなどを 使い ４ー５ターンの 間 相手を 締めつけて 攻撃する。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F {SOURCE}\u306B \u7DE0\u3081\u3064\u3051\u3089\u308C\u305F\uFF01",
    move: "#wrap"
  },
  bite: {
    name: "\u304B\u307F\u3064\u304F",
    // Official flavor text: "鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  bitterblade: {
    name: "\u3080\u306D\u3093\u306E\u3064\u308B\u304E",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bittermalice: {
    name: "\u3046\u3089\u307F\u3064\u3089\u307F",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blackholeeclipse: {
    name: "\u30D6\u30E9\u30C3\u30AF\u30DB\u30FC\u30EB\u30A4\u30AF\u30EA\u30D7\u30B9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blastburn: {
    name: "\u30D6\u30E9\u30B9\u30C8\u30D0\u30FC\u30F3",
    // Official flavor text: "爆発の 炎で 相手を 焼きつくして 攻撃する。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blazekick: {
    name: "\u30D6\u30EC\u30A4\u30BA\u30AD\u30C3\u30AF",
    // Official flavor text: "攻撃した 相手を やけど状態に することが ある。 急所にも 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blazingtorque: {
    name: "\u30D0\u30FC\u30F3\u30A2\u30AF\u30BB\u30EB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bleakwindstorm: {
    name: "\u3053\u304C\u3089\u3057\u3042\u3089\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blizzard: {
    name: "\u3075\u3076\u304D",
    // Official flavor text: "激しい 吹雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。"
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
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  block: {
    name: "\u3068\u304A\u305B\u3093\u307C\u3046",
    // Official flavor text: "両手を ひろげて たちはだかり 相手の 逃げ道を ふさいで 逃げられなくする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
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
  bloodmoon: {
    name: "\u30D6\u30E9\u30C3\u30C9\u30E0\u30FC\u30F3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bloomdoom: {
    name: "\u30D6\u30EB\u30FC\u30E0\u30B7\u30E3\u30A4\u30F3\u30A8\u30AF\u30B9\u30C8\u30E9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blueflare: {
    name: "\u3042\u304A\u3044\u307B\u306E\u304A",
    // Official flavor text: "美しくも 激しい 青い炎で 相手を 包みこんで 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bodypress: {
    name: "\u30DC\u30C7\u30A3\u30D7\u30EC\u30B9",
    // Official flavor text: "体を ぶつけて 攻撃。 防御が 高いほど 与える ダメージが 増える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bodyslam: {
    name: "\u306E\u3057\u304B\u304B\u308A",
    // Official flavor text: "全身で 相手に のしかかり 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  boltbeak: {
    name: "\u3067\u3093\u3052\u304D\u304F\u3061\u3070\u3057",
    // Official flavor text: "電気を まとった くちばしで 刺す。 相手より 先に 攻撃できると 技の 威力は ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  boltstrike: {
    name: "\u3089\u3044\u3052\u304D",
    // Official flavor text: "ぼうだいな 電気を 身に まとって 相手に 突進して 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  boneclub: {
    name: "\u30DB\u30CD\u3053\u3093\u307C\u3046",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bonemerang: {
    name: "\u30DB\u30CD\u30D6\u30FC\u30E1\u30E9\u30F3",
    // Official flavor text: "手に 持った ホネを 相手に 投げつけ 行きと 帰りの ２回連続で ダメージを 与える。"
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  bonerush: {
    name: "\u30DC\u30FC\u30F3\u30E9\u30C3\u30B7\u30E5",
    // Official flavor text: "硬い ホネで 相手を なぐりつけて 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
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
  boomburst: {
    name: "\u3070\u304F\u304A\u3093\u3071",
    // Official flavor text: "すさまじい 爆音の 破壊力に よって 周りに いるものを 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bounce: {
    name: "\u3068\u3073\u306F\u306D\u308B",
    // Official flavor text: "空高く 飛び跳ねて ２ターン目に 相手を 攻撃する。 まひ状態に することが ある。"
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
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    prepare: "{POKEMON}\u306F \u9AD8\u304F \u98DB\u3073\u8DF3\u306D\u305F\uFF01"
  },
  bouncybubble: {
    name: "\u3044\u304D\u3044\u304D\u30D0\u30D6\u30EB",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  branchpoke: {
    name: "\u3048\u3060\u3065\u304D",
    // Official flavor text: "するどく とがった 枝で 相手を 突いて 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bravebird: {
    name: "\u30D6\u30EC\u30A4\u30D6\u30D0\u30FC\u30C9",
    // Official flavor text: "はねを おりたたみ 低空飛行で 突撃する。 自分も かなり ダメージを 受ける。"
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
  breakingswipe: {
    name: "\u30EF\u30A4\u30C9\u30D6\u30EC\u30A4\u30AB\u30FC",
    // Official flavor text: "きょうじんな しっぽを 激しく ふりはらって 相手を 攻撃する。 相手の 攻撃を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  breakneckblitz: {
    name: "\u30A6\u30EB\u30C8\u30E9\u30C0\u30C3\u30B7\u30E5\u30A2\u30BF\u30C3\u30AF",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  brickbreak: {
    name: "\u304B\u308F\u3089\u308F\u308A",
    // Official flavor text: "手刀を 勢いよく 振りおろして 相手を 攻撃する。 ひかりのかべや リフレクター なども 破壊できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
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
      desc: null
      // NEEDS TRANSLATION
    },
    activate: null
    // NEEDS TRANSLATION
  },
  brine: {
    name: "\u3057\u304A\u307F\u305A",
    // Official flavor text: "相手が ＨＰの 半分くらい きずを おっていると 技の 威力が ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  brutalswing: {
    name: "\u3076\u3093\u307E\u308F\u3059",
    // Official flavor text: "自分の 体を ぶんまわして 相手に ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bubble: {
    name: "\u3042\u308F",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  bubblebeam: {
    name: "\u30D0\u30D6\u30EB\u3053\u3046\u305B\u3093",
    // Official flavor text: "泡を 勢いよく 相手に 発射して 攻撃する。 素早さを さげる ことが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  bugbite: {
    name: "\u3080\u3057\u304F\u3044",
    // Official flavor text: "かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    removeItem: "  {SOURCE}\u306F {ITEM}\u3092 \u596A\u3063\u3066 \u98DF\u3079\u305F\uFF01"
  },
  bugbuzz: {
    name: "\u3080\u3057\u306E\u3055\u3056\u3081\u304D",
    // Official flavor text: "振動で 音波を おこして 攻撃する。相手の 特防を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bulkup: {
    name: "\u30D3\u30EB\u30C9\u30A2\u30C3\u30D7",
    // Official flavor text: "体に 力を こめて 筋肉を ぶあつく することで 自分の 攻撃と 防御を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bulldoze: {
    name: "\u3058\u306A\u3089\u3057",
    // Official flavor text: "地面を 踏みならして 自分の 周りに いるものを 攻撃する。 相手の 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bulletpunch: {
    name: "\u30D0\u30EC\u30C3\u30C8\u30D1\u30F3\u30C1",
    // Official flavor text: "弾丸の ような 速くて 硬い パンチを 相手に くりだす。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bulletseed: {
    name: "\u30BF\u30CD\u30DE\u30B7\u30F3\u30AC\u30F3",
    // Official flavor text: "タネを 勢いよく 相手に 発射して 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
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
  burningbulwark: {
    name: "\u304B\u3048\u3093\u306E\u307E\u3082\u308A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  burningjealousy: {
    name: "\u3057\u3063\u3068\u306E\u307B\u306E\u304A",
    // Official flavor text: "しっとの エネルギーで 相手を 攻撃。 そのターン 能力が あがった ポケモンを やけどの 状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  burnup: {
    name: "\u3082\u3048\u3064\u304D\u308B",
    // Official flavor text: "全身の ほのおを すべて 燃やして 大ダメージを 与える。 自分の ほのおタイプが なくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    typeChange: "  {POKEMON}\u306E \u708E\u306F \u71C3\u3048\u5C3D\u304D\u305F\uFF01"
  },
  buzzybuzz: {
    name: "\u3073\u308A\u3073\u308A\u30A8\u30EC\u30AD",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  calmmind: {
    name: "\u3081\u3044\u305D\u3046",
    // Official flavor text: "静かに 精神を 統一し 心を 鎮めることで 自分の 特攻と 特防を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  camouflage: {
    name: "\u307B\u3054\u3057\u3087\u304F",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
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
      desc: null
      // NEEDS TRANSLATION
    }
  },
  captivate: {
    name: "\u3086\u3046\u308F\u304F",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  catastropika: {
    name: "\u3072\u3063\u3055\u3064\u306E\u30D4\u30AB\u30C1\u30E5\u30FC\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ceaselessedge: {
    name: "\u3072\u3051\u3093\u30FB\u3061\u3048\u306A\u307F",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  celebrate: {
    name: "\u304A\u3044\u308F\u3044",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u304A\u3081\u3067\u3068\u3046\uFF01 {TRAINER}\uFF01\uFF01"
  },
  charge: {
    name: "\u3058\u3085\u3046\u3067\u3093",
    // Official flavor text: "次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。"
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
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u5145\u96FB\u3092 \u59CB\u3081\u305F\uFF01"
  },
  chargebeam: {
    name: "\u30C1\u30E3\u30FC\u30B8\u30D3\u30FC\u30E0",
    // Official flavor text: "電撃の 束を 相手に 発射する。電気を ためて 自分の 特攻を あげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  charm: {
    name: "\u3042\u307E\u3048\u308B",
    // Official flavor text: "かわいく みつめて 油断を 誘い 相手の 攻撃を がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chatter: {
    name: "\u304A\u3057\u3083\u3079\u308A",
    // Official flavor text: "とても うるさい おしゃべりの 音波で 相手を 攻撃する。 相手を 混乱させる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    }
  },
  chillingwater: {
    name: "\u3072\u3084\u307F\u305A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chillyreception: {
    name: "\u3055\u3080\u3044\u30AE\u30E3\u30B0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    prepare: "  {POKEMON}\u306F \u3055\u3080\u3044 \u30AE\u30E3\u30B0\u3092 \u304B\u307E\u3057\u305F\uFF01"
  },
  chipaway: {
    name: "\u306A\u3057\u304F\u305A\u3057",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chloroblast: {
    name: "\u30AF\u30ED\u30ED\u30D6\u30E9\u30B9\u30C8",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  circlethrow: {
    name: "\u3068\u3082\u3048\u306A\u3052",
    // Official flavor text: "相手を 投げとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  clamp: {
    name: "\u304B\u3089\u3067\u306F\u3055\u3080",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F {SOURCE}\u306E \u304B\u3089\u306B \u631F\u307E\u308C\u305F\uFF01",
    move: "#wrap"
  },
  clangingscales: {
    name: "\u30B9\u30B1\u30A4\u30EB\u30CE\u30A4\u30BA",
    // Official flavor text: "全身の うろこを こすり 大きな 音を 出して 攻撃する。 攻撃後 自分の 防御が さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  clangoroussoul: {
    name: "\u30BD\u30A6\u30EB\u30D3\u30FC\u30C8",
    // Official flavor text: "自分の ＨＰを 少し 削って すべての 能力を 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  clangoroussoulblaze: {
    name: "\u30D6\u30EC\u30A4\u30B8\u30F3\u30B0\u30BD\u30A6\u30EB\u30D3\u30FC\u30C8",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  clearsmog: {
    name: "\u30AF\u30EA\u30A2\u30B9\u30E2\u30C3\u30B0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  closecombat: {
    name: "\u30A4\u30F3\u30D5\u30A1\u30A4\u30C8",
    // Official flavor text: "守りを 捨てて 相手の ふところに 突撃する。 自分の 防御と 特防が さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  coaching: {
    name: "\u30B3\u30FC\u30C1\u30F3\u30B0",
    // Official flavor text: "的確な 指導を おこなうことで  味方 全員の 攻撃と 防御を 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  coil: {
    name: "\u3068\u3050\u308D\u3092\u307E\u304F",
    // Official flavor text: "とぐろを まいて 集中する。 自分の 攻撃と 防御と 命中率を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  collisioncourse: {
    name: "\u30A2\u30AF\u30BB\u30EB\u30D6\u30EC\u30A4\u30AF",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  combattorque: {
    name: "\u30D5\u30A1\u30A4\u30C8\u30A2\u30AF\u30BB\u30EB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cometpunch: {
    name: "\u308C\u3093\u305E\u304F\u30D1\u30F3\u30C1",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  comeuppance: {
    name: "\u307B\u3046\u3075\u304F",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  confide: {
    name: "\u306A\u3044\u3057\u3087\u3070\u306A\u3057",
    // Official flavor text: "ないしょばなしを することで 相手の 集中力を 失わせ 相手の 特攻を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  confuseray: {
    name: "\u3042\u3084\u3057\u3044\u3072\u304B\u308A",
    // Official flavor text: "怪しい 光を 相手に みせて まどわせる。 相手を 混乱させる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  confusion: {
    name: "\u306D\u3093\u308A\u304D",
    // Official flavor text: "弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  constrict: {
    name: "\u304B\u3089\u307F\u3064\u304F",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  continentalcrush: {
    name: "\u30EF\u30FC\u30EB\u30BA\u30A8\u30F3\u30C9\u30D5\u30A9\u30FC\u30EB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  conversion: {
    name: "\u30C6\u30AF\u30B9\u30C1\u30E3\u30FC",
    // Official flavor text: "自分の タイプを おぼえている 技で 一番 上の 技と 同じ タイプに する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
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
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    typeChange: "  {SOURCE}\u306E \u305E\u304F\u305B\u3044\u3092 \u3058\u3076\u3093\u306B \u306F\u308A\u3064\u3051\u305F\uFF01"
  },
  conversion2: {
    name: "\u30C6\u30AF\u30B9\u30C1\u30E3\u30FC\uFF12",
    // Official flavor text: "相手が 最後に 使った技に 抵抗できる ように 自分の タイプを 変化させる。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  copycat: {
    name: "\u307E\u306D\u3063\u3053",
    // Official flavor text: "直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。"
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
    }
  },
  coreenforcer: {
    name: "\u30B3\u30A2\u30D1\u30CB\u30C3\u30B7\u30E3\u30FC",
    // Official flavor text: "ダメージを 与えた 相手が すでに 行動を 終えていたら 相手の 特性を 消してしまう。"
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
    }
  },
  corkscrewcrash: {
    name: "\u3061\u3087\u3046\u305C\u3064\u3089\u305B\u3093\u308C\u3093\u3052\u304D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  corrosivegas: {
    name: "\u3075\u3057\u3087\u304F\u30AC\u30B9",
    // Official flavor text: "強い 酸性の ガスで 周りに いるものを 包みこみ 持っている 道具を 溶かしてしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    fail: "#healblock",
    removeItem: "  {SOURCE}\u306F {POKEMON}\u306E {ITEM}\u3092 \u6EB6\u304B\u3057\u305F\uFF01"
  },
  cosmicpower: {
    name: "\u30B3\u30B9\u30E2\u30D1\u30EF\u30FC",
    // Official flavor text: "宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cottonguard: {
    name: "\u30B3\u30C3\u30C8\u30F3\u30AC\u30FC\u30C9",
    // Official flavor text: "フワフワの 綿毛で 自分の 体を 包みこんで 守る。 防御を ぐぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cottonspore: {
    name: "\u308F\u305F\u307B\u3046\u3057",
    // Official flavor text: "綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  counter: {
    name: "\u30AB\u30A6\u30F3\u30BF\u30FC",
    // Official flavor text: "相手から 受けた 物理攻撃の ダメージを ２倍に して 同じ 相手に 返す。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  courtchange: {
    name: "\u30B3\u30FC\u30C8\u30C1\u30A7\u30F3\u30B8",
    // Official flavor text: "不思議な 力で お互いの 場の 効果を 入れ替える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u304A\u305F\u304C\u3044\u306E \u5834\u306E \u52B9\u679C\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01"
  },
  covet: {
    name: "\u307B\u3057\u304C\u308B",
    // Official flavor text: "かわいく あまえながら 相手に ちかづき 持っている 道具を うばう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null
      // NEEDS TRANSLATION: not in PokeAPI
    },
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
    }
  },
  crabhammer: {
    name: "\u30AF\u30E9\u30D6\u30CF\u30F3\u30DE\u30FC",
    // Official flavor text: "大きな ハサミを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  craftyshield: {
    name: "\u30C8\u30EA\u30C3\u30AF\u30AC\u30FC\u30C9",
    // Official flavor text: "不思議な 力を 使って 味方への 変化技を 防ぐ。 ダメージ技は 受けてしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {TEAM}\u306F \u30C8\u30EA\u30C3\u30AF\u30AC\u30FC\u30C9\u3067 \u5B88\u3089\u308C\u305F\uFF01",
    block: "  {POKEMON}\u306F \u30C8\u30EA\u30C3\u30AF\u30AC\u30FC\u30C9\u3067 \u5B88\u3089\u308C\u305F\uFF01"
  },
  crosschop: {
    name: "\u30AF\u30ED\u30B9\u30C1\u30E7\u30C3\u30D7",
    // Official flavor text: "両手チョップを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  crosspoison: {
    name: "\u30AF\u30ED\u30B9\u30DD\u30A4\u30BA\u30F3",
    // Official flavor text: "毒の 刃で 相手を 切り裂く。 毒状態に することが あり 急所にも 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  crunch: {
    name: "\u304B\u307F\u304F\u3060\u304F",
    // Official flavor text: "鋭い 歯で 相手を かみくだいて 攻撃する。 相手の 防御を さげることが ある。"
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
  crushclaw: {
    name: "\u30D6\u30EC\u30A4\u30AF\u30AF\u30ED\u30FC",
    // Official flavor text: "硬く 鋭い ツメで 切り裂いて 攻撃する。 相手の 防御を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  crushgrip: {
    name: "\u306B\u304E\u308A\u3064\u3076\u3059",
    // Official flavor text: "すさまじい 力で 相手を にぎりつぶす。 相手の ＨＰが 残っているほど 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  curse: {
    name: "\u306E\u308D\u3044",
    // Official flavor text: "使う ポケモンが ゴーストタイプと それ以外 とでは 効果が 変わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {SOURCE}\u306F \u81EA\u5206\u306E\u4F53\u529B\u3092 \u524A\u3063\u3066 {POKEMON}\u306B \u306E\u308D\u3044\u3092 \u304B\u3051\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u306E\u308D\u308F\u308C\u3066\u3044\u308B\uFF01"
  },
  cut: {
    name: "\u3044\u3042\u3044\u304E\u308A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkestlariat: {
    name: "\uFF24\uFF24\u30E9\u30EA\u30A2\u30C3\u30C8",
    // Official flavor text: "両腕を 回し 相手に 当てる。 相手の 能力変化に 関係なく ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkpulse: {
    name: "\u3042\u304F\u306E\u306F\u3069\u3046",
    // Official flavor text: "体から 悪意に みちた 恐ろしい オーラを 発する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkvoid: {
    name: "\u30C0\u30FC\u30AF\u30DB\u30FC\u30EB",
    // Official flavor text: "暗黒の 世界に ひきずり 落として 相手を 眠り状態に する。"
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
    fail: "\u3057\u304B\u3057 {POKEMON}\u306B\u306F \u4F7F\u3046\u3053\u3068\u304C \u3067\u304D\u306A\u304B\u3063\u305F\uFF01",
    failWrongForme: "\u3057\u304B\u3057 \u4ECA\u306E {POKEMON}\u306B\u306F \u4F7F\u3046\u3053\u3068\u304C \u3067\u304D\u306A\u304B\u3063\u305F\uFF01"
  },
  dazzlinggleam: {
    name: "\u30DE\u30B8\u30AB\u30EB\u30B7\u30E3\u30A4\u30F3",
    // Official flavor text: "強力な 光を 放ち 相手に ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  decorate: {
    name: "\u30C7\u30B3\u30EC\u30FC\u30B7\u30E7\u30F3",
    // Official flavor text: "かざりつけを することで 相手の 攻撃と 特攻を ぐーんと 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defendorder: {
    name: "\u307C\u3046\u304E\u3087\u3057\u308C\u3044",
    // Official flavor text: "しもべを 呼びだして 自分の 体に おおい つかせる。防御と 特防を あげることが できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defensecurl: {
    name: "\u307E\u308B\u304F\u306A\u308B",
    // Official flavor text: "体を まるめて ちぢこまり 自分の 防御を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  defog: {
    name: "\u304D\u308A\u3070\u3089\u3044",
    // Official flavor text: "強い風で 相手の リフレクターや ひかりのかべ などを はらいのける。 回避率も さげる。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  destinybond: {
    name: "\u307F\u3061\u3065\u308C",
    // Official flavor text: "技のあと 相手の 攻撃で ひんしに なると 攻撃 相手も ひんしにする。 連続して 出すと 失敗する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u76F8\u624B\u3092 \u9053\u9023\u308C\u306B \u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308B\uFF01",
    activate: "{POKEMON}\u306F \u76F8\u624B\u3092 \u9053\u9023\u308C\u306B \u3057\u305F\uFF01"
  },
  detect: {
    name: "\u307F\u304D\u308A",
    // Official flavor text: "相手の 攻撃を まったく 受けない。 連続で だすと 失敗しやすい。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  devastatingdrake: {
    name: "\u30A2\u30EB\u30C6\u30A3\u30E1\u30C3\u30C8\u30C9\u30E9\u30B4\u30F3\u30D0\u30FC\u30F3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  diamondstorm: {
    name: "\u30C0\u30A4\u30E4\u30B9\u30C8\u30FC\u30E0",
    // Official flavor text: "ダイヤの 嵐を 巻き起こし ダメージを 与える。 自分の 防御を ぐーんと あげることが ある。"
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
  dig: {
    name: "\u3042\u306A\u3092\u307B\u308B",
    // Official flavor text: "１ターン目に 潜り ２ターン目で 相手を 攻撃する。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    },
    prepare: "{POKEMON}\u306F \u5730\u9762\u306B \u6F5C\u3063\u305F\uFF01"
  },
  direclaw: {
    name: "\u30D5\u30A7\u30A4\u30BF\u30EB\u30AF\u30ED\u30FC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  disable: {
    name: "\u304B\u306A\u3057\u3070\u308A",
    // Official flavor text: "相手の 動きを とめて 直前に だしていた 技を ４ターンの 間 使えなくする。"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306E {MOVE}\u3092 \u5C01\u3058\u3053\u3081\u305F\uFF01",
    end: "  {POKEMON}\u306E \u304B\u306A\u3057\u3070\u308A\u304C \u89E3\u3051\u305F\uFF01",
    cant: "{POKEMON}\u306F \u304B\u306A\u3057\u3070\u308A\u3067 {MOVE}\u304C \u3060\u305B\u306A\u3044\uFF01"
  },
  disarmingvoice: {
    name: "\u30C1\u30E3\u30FC\u30E0\u30DC\u30A4\u30B9",
    // Official flavor text: "魅惑の 鳴き声を だして 相手に 精神的な ダメージを 与える。 攻撃は 必ず 命中 する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  discharge: {
    name: "\u307B\u3046\u3067\u3093",
    // Official flavor text: "まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dive: {
    name: "\u30C0\u30A4\u30D3\u30F3\u30B0",
    // Official flavor text: "１ターン目で 潜り ２ターン目に 浮きあがって 攻撃する。"
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
    prepare: "{POKEMON}\u306F \u6C34\u4E2D\u306B \u8EAB\u3092\u6F5C\u3081\u305F\uFF01"
  },
  dizzypunch: {
    name: "\u30D4\u30E8\u30D4\u30E8\u30D1\u30F3\u30C1",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  doodle: {
    name: "\u3046\u3064\u3057\u3048",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  doomdesire: {
    name: "\u306F\u3081\u3064\u306E\u306D\u304C\u3044",
    // Official flavor text: "技を 使った ２ターン後に 無数の 光の 束で 相手を 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u306F\u3081\u3064\u306E\u306D\u304C\u3044\u3092 \u672A\u6765\u306B\u8A17\u3057\u305F\uFF01",
    activate: "  {TARGET}\u306F \u306F\u3081\u3064\u306E\u306D\u304C\u3044\u306E \u653B\u6483\u3092\u53D7\u3051\u305F\uFF01"
  },
  doubleedge: {
    name: "\u3059\u3066\u307F\u30BF\u30C3\u30AF\u30EB",
    // Official flavor text: "命を 懸けて 相手に 突進して 攻撃する。 自分も かなり ダメージを 受ける。"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  doublehit: {
    name: "\u30C0\u30D6\u30EB\u30A2\u30BF\u30C3\u30AF",
    // Official flavor text: "しっぽなどを 使い 相手を たたいて 攻撃する。 ２回連続で ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  doubleironbash: {
    name: "\u30C0\u30D6\u30EB\u30D1\u30F3\u30C4\u30A1\u30FC",
    // Official flavor text: "胸の ナットを 軸に 回転して ２回 続けて うでを たたきつける。 相手を ひるませる ことが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  doublekick: {
    name: "\u306B\u3069\u3052\u308A",
    // Official flavor text: "２本の 足で 相手を けとばして 攻撃する。 ２回連続で ダメージを 与える。"
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  doubleshock: {
    name: "\u3067\u3093\u3053\u3046\u305D\u3046\u3052\u304D",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    typeChange: "  {POKEMON}\u306F \u96FB\u6C17\u3092 \u4F7F\u3044\u304D\u3063\u305F\uFF01"
  },
  doubleslap: {
    name: "\u304A\u3046\u3075\u304F\u30D3\u30F3\u30BF",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  doubleteam: {
    name: "\u304B\u3052\u3076\u3093\u3057\u3093",
    // Official flavor text: "素早い 動きで 分身を つくり 相手を まどわせて 回避率を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dracometeor: {
    name: "\u308A\u3085\u3046\u305B\u3044\u3050\u3093",
    // Official flavor text: "天空から 隕石を 相手に 落とす。使うと 反動で 自分の 特攻が がくっと さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonascent: {
    name: "\u30AC\u30EA\u30E7\u30A6\u30C6\u30F3\u30BB\u30A4",
    // Official flavor text: "大空から 急速落下 して 相手を 攻撃する。 自分の 防御と 特防が さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    megaNoItem: "  {TRAINER}\u306E \u5F37\u3044\u7948\u308A\u304C {POKEMON}\u306B \u5C4A\u304F\u2015\u2015\uFF01"
  },
  dragonbreath: {
    name: "\u308A\u3085\u3046\u306E\u3044\u3076\u304D",
    // Official flavor text: "ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragoncheer: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30A8\u30FC\u30EB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#focusenergy"
  },
  dragonclaw: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30AF\u30ED\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragondance: {
    name: "\u308A\u3085\u3046\u306E\u307E\u3044",
    // Official flavor text: "神秘的で 力強い 舞を 激しく おどる。 自分の 攻撃と 素早さを あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragondarts: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30A2\u30ED\u30FC",
    // Official flavor text: "ドラメシヤで ２回 攻撃。 相手が ２匹 いるときは それぞれに １回ずつ 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonenergy: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30A8\u30CA\u30B8\u30FC",
    // Official flavor text: "生命力を パワーに 変え 相手を 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonhammer: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30CF\u30F3\u30DE\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonpulse: {
    name: "\u308A\u3085\u3046\u306E\u306F\u3069\u3046",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonrage: {
    name: "\u308A\u3085\u3046\u306E\u3044\u304B\u308A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonrush: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30C0\u30A4\u30D6",
    // Official flavor text: "すさまじい 殺気で 威圧しながら 体当たりする。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  dragontail: {
    name: "\u30C9\u30E9\u30B4\u30F3\u30C6\u30FC\u30EB",
    // Official flavor text: "相手を はじきとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drainingkiss: {
    name: "\u30C9\u30EC\u30A4\u30F3\u30AD\u30C3\u30B9",
    // Official flavor text: "キッスによって 相手から ＨＰを 吸い取る。 与えた ダメージの 半分以上 ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drainpunch: {
    name: "\u30C9\u30EC\u30A4\u30F3\u30D1\u30F3\u30C1",
    // Official flavor text: "こぶしから 相手の 力を 吸い取る。 与えた ダメージの 半分の ＨＰを 回復できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  dreameater: {
    name: "\u3086\u3081\u304F\u3044",
    // Official flavor text: "寝ている 相手の 夢を 食べて 攻撃する。 ダメージの 半分の ＨＰを 回復する。"
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  drillpeck: {
    name: "\u30C9\u30EA\u30EB\u304F\u3061\u3070\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drillrun: {
    name: "\u30C9\u30EA\u30EB\u30E9\u30A4\u30CA\u30FC",
    // Official flavor text: "ドリルのように 体を 回転しながら 相手に 体当たりする。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drumbeating: {
    name: "\u30C9\u30E9\u30E0\u30A2\u30BF\u30C3\u30AF",
    // Official flavor text: "ドラムの 根っこを ドラミングで コントロールして こうげき することで 相手の 素早さを 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dualchop: {
    name: "\u30C0\u30D6\u30EB\u30C1\u30E7\u30C3\u30D7",
    // Official flavor text: "体の 硬い部分で 相手を たたいて 攻撃する。 ２回連続で ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dualwingbeat: {
    name: "\u30C0\u30D6\u30EB\u30A6\u30A4\u30F3\u30B0",
    // Official flavor text: "翼を 相手に ぶつけて 攻撃する。 ２回連続で ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dynamaxcannon: {
    name: "\u30C0\u30A4\u30DE\u30C3\u30AF\u30B9\u307B\u3046",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  dynamicpunch: {
    name: "\u3070\u304F\u308C\u3064\u30D1\u30F3\u30C1",
    // Official flavor text: "こん身の 力で パンチを くりだして 攻撃する。 相手を 必ず 混乱させる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  earthpower: {
    name: "\u3060\u3044\u3061\u306E\u3061\u304B\u3089",
    // Official flavor text: "相手の 足下へ 大地の力を 放出する。相手の 特防を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  earthquake: {
    name: "\u3058\u3057\u3093",
    // Official flavor text: "地震の 衝撃で 自分の 周りに いるものを 攻撃する。"
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
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  echoedvoice: {
    name: "\u30A8\u30B3\u30FC\u30DC\u30A4\u30B9",
    // Official flavor text: "響く 声で 相手を 攻撃する。 毎ターン だれかが 技を 使い続けると 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eerieimpulse: {
    name: "\u304B\u3044\u3067\u3093\u3071",
    // Official flavor text: "体から かいでんぱを 放ち 相手に 浴びせる ことによって 特攻を がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eeriespell: {
    name: "\u3076\u304D\u307F\u306A\u3058\u3085\u3082\u3093",
    // Official flavor text: "強力な サイコパワーで 攻撃。 相手が 最後に 使った技の ＰＰを ３だけ 減らす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "#spite"
  },
  eggbomb: {
    name: "\u30BF\u30DE\u30B4\u3070\u304F\u3060\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electricterrain: {
    name: "\u30A8\u30EC\u30AD\u30D5\u30A3\u30FC\u30EB\u30C9",
    // Official flavor text: "５ターンの 間 エレキフィールドにする。 地面にいる ポケモンは 眠らない。 でんきタイプの 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  electrify: {
    name: "\u305D\u3046\u3067\u3093",
    // Official flavor text: "相手が 技を だす前に そうでん すると そのターン 相手の 技は でんきタイプになる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u305D\u3046\u3067\u3093\u3067 \u6280\u304C \u3067\u3093\u304D\u30BF\u30A4\u30D7\u306B\u306A\u3063\u305F\uFF01"
  },
  electroball: {
    name: "\u30A8\u30EC\u30AD\u30DC\u30FC\u30EB",
    // Official flavor text: "電気の 塊を 相手に ぶつける。相手より 素早さが 速いほど 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  electrodrift: {
    name: "\u30A4\u30CA\u30BA\u30DE\u30C9\u30E9\u30A4\u30D6",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electroshot: {
    name: "\u30A8\u30EC\u30AF\u30C8\u30ED\u30D3\u30FC\u30E0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    prepare: "{POKEMON}\u306F \u96FB\u6C17\u3092 \u5438\u53CE\u3057\u305F\uFF01"
  },
  electroweb: {
    name: "\u30A8\u30EC\u30AD\u30CD\u30C3\u30C8",
    // Official flavor text: "電気の ネットで 相手を 捕まえて 攻撃する。 相手の 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  embargo: {
    name: "\u3055\u3057\u304A\u3055\u3048",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306B\u306F \u9053\u5177\u304C \u4F7F\u3048\u306A\u304F\u306A\u3063\u305F\uFF01",
    end: "  {POKEMON}\u306B \u9053\u5177\u304C \u4F7F\u3048\u308B\u3088\u3046\u306B\u306A\u3063\u305F\uFF01"
  },
  ember: {
    name: "\u3072\u306E\u3053",
    // Official flavor text: "小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  encore: {
    name: "\u30A2\u30F3\u30B3\u30FC\u30EB",
    // Official flavor text: "相手に アンコールした 技を ３回 続けて 出させる。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u30A2\u30F3\u30B3\u30FC\u30EB\u3092\u53D7\u3051\u305F\uFF01",
    end: "  {POKEMON}\u306E \u30A2\u30F3\u30B3\u30FC\u30EB\u72B6\u614B\u304C \u89E3\u3051\u305F\uFF01"
  },
  endeavor: {
    name: "\u304C\u3080\u3057\u3083\u3089",
    // Official flavor text: "相手の ＨＰが 自分の ＨＰと 同じくらいに なるように ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  endure: {
    name: "\u3053\u3089\u3048\u308B",
    // Official flavor text: "攻撃を 受けても ＨＰを 必ず １だけ 残せる。 連続で だすと 失敗しやすい。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u3053\u3089\u3048\u308B \u4F53\u52E2\u306B \u5165\u3063\u305F\uFF01",
    activate: "  {POKEMON}\u306F \u653B\u6483\u3092 \u3053\u3089\u3048\u305F\uFF01"
  },
  energyball: {
    name: "\u30A8\u30CA\u30B8\u30FC\u30DC\u30FC\u30EB",
    // Official flavor text: "自然から 集めた 命の力を 発射する。 相手の 特防を さげることがある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  entrainment: {
    name: "\u306A\u304B\u307E\u3065\u304F\u308A",
    // Official flavor text: "不思議な リズムで おどる。 動きを まねさせて 自分と 相手の 特性を 同じに する。"
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
    }
  },
  eruption: {
    name: "\u3075\u3093\u304B",
    // Official flavor text: "怒りを 爆発させて 相手を 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  esperwing: {
    name: "\u30AA\u30FC\u30E9\u30A6\u30A4\u30F3\u30B0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eternabeam: {
    name: "\u30E0\u30B2\u30F3\u30C0\u30A4\u30D3\u30FC\u30E0",
    // Official flavor text: "本来の 姿と なった ムゲンダイナ 最大の 攻撃。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  expandingforce: {
    name: "\u30EF\u30A4\u30C9\u30D5\u30A9\u30FC\u30B9",
    // Official flavor text: "サイコパワーで 相手を 攻撃する。 サイコフィールドの時 威力が あがり すべての 相手に ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  explosion: {
    name: "\u3060\u3044\u3070\u304F\u306F\u3064",
    // Official flavor text: "大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  extrasensory: {
    name: "\u3058\u3093\u3064\u3046\u308A\u304D",
    // Official flavor text: "みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  extremeevoboost: {
    name: "\u30CA\u30A4\u30F3\u30A8\u30DC\u30EB\u30D6\u30FC\u30B9\u30C8",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  extremespeed: {
    name: "\u3057\u3093\u305D\u304F",
    // Official flavor text: "目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  facade: {
    name: "\u304B\u3089\u3052\u3093\u304D",
    // Official flavor text: "自分が 毒 まひ やけど 状態のとき 相手に くりだすと 技の 威力が ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  fairylock: {
    name: "\u30D5\u30A7\u30A2\u30EA\u30FC\u30ED\u30C3\u30AF",
    // Official flavor text: "ロックを かけることによって 次のターン すべての ポケモンを 逃げられなくする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  \u6B21\u306E\u30BF\u30FC\u30F3\u306F \u9003\u3052\u3089\u308C\u306A\u3044\uFF01"
  },
  fairywind: {
    name: "\u3088\u3046\u305B\u3044\u306E\u304B\u305C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fakeout: {
    name: "\u306D\u3053\u3060\u307E\u3057",
    // Official flavor text: "先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  faketears: {
    name: "\u3046\u305D\u306A\u304D",
    // Official flavor text: "ないた ふりをして 涙を 流す。 こまらせる ことで 相手の 特防を がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  falsesurrender: {
    name: "\u3069\u3052\u3056\u3064\u304D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  falseswipe: {
    name: "\u307F\u306D\u3046\u3061",
    // Official flavor text: "相手の ＨＰが 必ず １だけ 残るように 手加減して 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  featherdance: {
    name: "\u30D5\u30A7\u30B6\u30FC\u30C0\u30F3\u30B9",
    // Official flavor text: "羽毛を ふりまいて 相手の 体に からませる。 相手の 攻撃を がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  feint: {
    name: "\u30D5\u30A7\u30A4\u30F3\u30C8",
    // Official flavor text: "まもるや みきり などを している 相手に 攻撃が できる。 守りの 効果を 解除させる。"
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
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {TARGET}\u306F \u30D5\u30A7\u30A4\u30F3\u30C8\u306B \u5F15\u3063\u304B\u304B\u3063\u305F\uFF01"
  },
  feintattack: {
    name: "\u3060\u307E\u3057\u3046\u3061",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fellstinger: {
    name: "\u3068\u3069\u3081\u3070\u308A",
    // Official flavor text: "この 技を 使って 相手を 倒すと 攻撃が ぐぐーんと あがる。"
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
  ficklebeam: {
    name: "\u304D\u307E\u3050\u30EC\u30FC\u30B6\u30FC",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u672C\u6C17\u3092 \u51FA\u3057\u305F\uFF01"
  },
  fierydance: {
    name: "\u307B\u306E\u304A\u306E\u307E\u3044",
    // Official flavor text: "炎を まとい はばたいて 相手を 攻撃する。自分の 特攻が あがることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fierywrath: {
    name: "\u3082\u3048\u3042\u304C\u308B\u3044\u304B\u308A",
    // Official flavor text: "怒りを 炎の ような オーラに 変えて 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  filletaway: {
    name: "\u307F\u3092\u3051\u305A\u308B",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  finalgambit: {
    name: "\u3044\u306E\u3061\u304C\u3051",
    // Official flavor text: "命懸けで 相手を 攻撃する。 自分は ひんしに なるが 相手に ＨＰ分の ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fireblast: {
    name: "\u3060\u3044\u3082\u3093\u3058",
    // Official flavor text: "大の字の 炎で 相手を 焼きつくす。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  firefang: {
    name: "\u307B\u306E\u304A\u306E\u30AD\u30D0",
    // Official flavor text: "炎を まとった キバで かみつく。 相手を ひるませたり やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  firelash: {
    name: "\u307B\u306E\u304A\u306E\u30E0\u30C1",
    // Official flavor text: "焼けたムチで 相手を 打ちつける。 攻撃を 受けた 相手は 防御が さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firepledge: {
    name: "\u307B\u306E\u304A\u306E\u3061\u304B\u3044",
    // Official flavor text: "炎の柱で 攻撃する。 くさと 組みあわせると 威力が あがって 周りが 火の海に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "#waterpledge",
    start: "  {TEAM}\u306E \u5468\u308A\u304C \u706B\u306E\u6D77\u306B \u5305\u307E\u308C\u305F\uFF01",
    end: "  {TEAM}\u306E \u5468\u308A\u306E \u706B\u306E\u6D77\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u706B\u306E\u6D77\u306E \u30C0\u30E1\u30FC\u30B8\u3092\u53D7\u3051\u305F\uFF01"
  },
  firepunch: {
    name: "\u307B\u306E\u304A\u306E\u30D1\u30F3\u30C1",
    // Official flavor text: "炎を こめた パンチで 相手を 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firespin: {
    name: "\u307B\u306E\u304A\u306E\u3046\u305A",
    // Official flavor text: "激しく 渦をまく 炎の中に ４ー５ターンの 間 相手を 閉じこめて 攻撃する。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u708E\u306E\u6E26\u306B \u9589\u3058\u3053\u3081\u3089\u308C\u305F\uFF01",
    move: "#wrap"
  },
  firstimpression: {
    name: "\u3067\u3042\u3044\u304C\u3057\u3089",
    // Official flavor text: "威力が 高い 技 だが 戦闘に 出たら すぐに 出さないと 成功 しない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  fishiousrend: {
    name: "\u30A8\u30E9\u304C\u307F",
    // Official flavor text: "かたい エラで かみつく。 相手より 先に 攻撃できると 技の 威力は ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fissure: {
    name: "\u3058\u308F\u308C",
    // Official flavor text: "地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  flail: {
    name: "\u3058\u305F\u3070\u305F",
    // Official flavor text: "じたばた 暴れて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は あがる。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  flameburst: {
    name: "\u306F\u3058\u3051\u308B\u307B\u306E\u304A",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON}\u306B\u3082 \u706B\u82B1\u304C \u964D\u308A\u304B\u304B\u3063\u305F\uFF01"
  },
  flamecharge: {
    name: "\u30CB\u30C8\u30ED\u30C1\u30E3\u30FC\u30B8",
    // Official flavor text: "炎を まとい 相手を 攻撃する。 力を ためて 自分の 素早さを あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamethrower: {
    name: "\u304B\u3048\u3093\u307B\u3046\u3057\u3083",
    // Official flavor text: "激しい 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamewheel: {
    name: "\u304B\u3048\u3093\u3050\u308B\u307E",
    // Official flavor text: "炎を まとい 相手に 突進して 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flareblitz: {
    name: "\u30D5\u30EC\u30A2\u30C9\u30E9\u30A4\u30D6",
    // Official flavor text: "炎を まとって 突進する。 自分も かなり ダメージを 受ける。 やけど状態に することが ある。"
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
  flash: {
    name: "\u30D5\u30E9\u30C3\u30B7\u30E5",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flashcannon: {
    name: "\u30E9\u30B9\u30BF\u30FC\u30AB\u30CE\u30F3",
    // Official flavor text: "体の 光を 一点に 集めて 力を 放つ。 相手の 特防を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flatter: {
    name: "\u304A\u3060\u3066\u308B",
    // Official flavor text: "相手を おだてて 混乱させる。 同時に 相手の 特攻も あげてしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fleurcannon: {
    name: "\u30D5\u30EB\u30FC\u30EB\u30AB\u30CE\u30F3",
    // Official flavor text: "強力な ビームを 放ったあと 自分の 特攻が がくっと さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fling: {
    name: "\u306A\u3052\u3064\u3051\u308B",
    // Official flavor text: "持たせた 道具を 素早く 投げつけて 攻撃する。 道具で 威力と 効果が 変わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    removeItem: "  {POKEMON}\u306F {ITEM}\u3092 \u6295\u3052\u3064\u3051\u305F\uFF01"
  },
  flipturn: {
    name: "\u30AF\u30A4\u30C3\u30AF\u30BF\u30FC\u30F3",
    // Official flavor text: "攻撃した あと ものすごい スピードで 戻ってきて 控えの ポケモンと 入れ替わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    switchOut: "#uturn"
  },
  floatyfall: {
    name: "\u3075\u308F\u3075\u308F\u30D5\u30A9\u30FC\u30EB",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  floralhealing: {
    name: "\u30D5\u30E9\u30EF\u30FC\u30D2\u30FC\u30EB",
    // Official flavor text: "最大ＨＰの 半分 相手の ＨＰを 回復する。 グラスフィールドの時 効果が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flowershield: {
    name: "\u30D5\u30E9\u30EF\u30FC\u30AC\u30FC\u30C9",
    // Official flavor text: "不思議な 力を 使って 場にいる くさタイプの ポケモン 全員の 防御を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flowertrick: {
    name: "\u30C8\u30EA\u30C3\u30AF\u30D5\u30E9\u30EF\u30FC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fly: {
    name: "\u305D\u3089\u3092\u3068\u3076",
    // Official flavor text: "１ターン目で 空へ 飛び ２ターン目に 相手を 攻撃する。"
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
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    },
    prepare: "{POKEMON}\u306F \u7A7A\u9AD8\u304F \u98DB\u3073\u3042\u304C\u3063\u305F\uFF01"
  },
  flyingpress: {
    name: "\u30D5\u30E9\u30A4\u30F3\u30B0\u30D7\u30EC\u30B9",
    // Official flavor text: "空中から 相手に ダイブする。 この技は かくとうタイプと 同時に ひこうタイプでも ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  focusblast: {
    name: "\u304D\u3042\u3044\u3060\u307E",
    // Official flavor text: "気合を 高めて ありったけの 力を 放出する。 相手の 特防を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  focusenergy: {
    name: "\u304D\u3042\u3044\u3060\u3081",
    // Official flavor text: "深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u5F35\u308A\u5207\u3063\u3066\u3044\u308B\uFF01",
    startFromItem: "  {POKEMON}\u306F {ITEM}\u3092 \u4F7F\u3063\u3066 \u5F35\u308A\u5207\u308A\u3060\u3057\u305F\uFF01",
    startFromZEffect: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 \u6025\u6240\u306B \u5F53\u305F\u308A\u3084\u3059\u304F\u306A\u3063\u305F\uFF01"
  },
  focuspunch: {
    name: "\u304D\u3042\u3044\u30D1\u30F3\u30C1",
    // Official flavor text: "精神を 高めて パンチを くりだす。 技を だすまでに 攻撃を 受けると 失敗する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u96C6\u4E2D\u529B\u3092 \u9AD8\u3081\u3066\u3044\u308B\uFF01",
    cant: "{POKEMON}\u306F \u96C6\u4E2D\u304C \u9014\u5207\u308C\u3066 \u6280\u304C \u3060\u305B\u306A\u3044\uFF01"
  },
  followme: {
    name: "\u3053\u306E\u3086\u3073\u3068\u307E\u308C",
    // Official flavor text: "自分に 注目させて 相手からの 攻撃を すべて 自分に むけさせる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    },
    start: "  {POKEMON}\u306F \u6CE8\u76EE\u306E\u7684\u306B \u306A\u3063\u305F\uFF01",
    startFromZEffect: "  {POKEMON}\u306F \u6CE8\u76EE\u306E\u7684\u306B \u306A\u3063\u305F\uFF01"
  },
  forcepalm: {
    name: "\u306F\u3063\u3051\u3044",
    // Official flavor text: "相手の 体に 衝撃波を 当てて 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  foresight: {
    name: "\u307F\u3084\u3076\u308B",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306E \u6B63\u4F53\u3092 \u898B\u7834\u3063\u305F\uFF01"
  },
  forestscurse: {
    name: "\u3082\u308A\u306E\u306E\u308D\u3044",
    // Official flavor text: "相手に 森ののろいを かける。 のろいを かけられた 相手は タイプに くさタイプが 追加される。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  foulplay: {
    name: "\u30A4\u30AB\u30B5\u30DE",
    // Official flavor text: "相手の 力を 利用する。 戦っている 相手の 攻撃が 高いほど ダメージが あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  freezedry: {
    name: "\u30D5\u30EA\u30FC\u30BA\u30C9\u30E9\u30A4",
    // Official flavor text: "相手を 急激に 冷やして こおり 状態に することが ある。 みずタイプにも 効果バツグンになる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  freezeshock: {
    name: "\u30D5\u30EA\u30FC\u30BA\u30DC\u30EB\u30C8",
    // Official flavor text: "電気を まとった 氷の 塊で ２ターン目に 相手を たたきつける。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    prepare: "  {POKEMON}\u306F \u51B7\u305F\u3044\u5149\u306B \u5305\u307E\u308C\u305F\uFF01"
  },
  freezingglare: {
    name: "\u3044\u3066\u3064\u304F\u3057\u305B\u3093",
    // Official flavor text: "両目から サイコパワーを 撃ちだして 攻撃する。 こおり状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  freezyfrost: {
    name: "\u3053\u3061\u3053\u3061\u30D5\u30ED\u30B9\u30C8",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frenzyplant: {
    name: "\u30CF\u30FC\u30C9\u30D7\u30E9\u30F3\u30C8",
    // Official flavor text: "大きな 樹木で 相手を たたきつけて 攻撃する。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frostbreath: {
    name: "\u3053\u304A\u308A\u306E\u3044\u3076\u304D",
    // Official flavor text: "冷たい 息を 相手に 吹きつけて 攻撃する。 必ず 急所に 当たる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frustration: {
    name: "\u3084\u3064\u3042\u305F\u308A",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furyattack: {
    name: "\u307F\u3060\u308C\u3065\u304D",
    // Official flavor text: "つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  furycutter: {
    name: "\u308C\u3093\u305E\u304F\u304E\u308A",
    // Official flavor text: "カマや ツメなどで 相手を 切りつけて 攻撃する。 連続で 当てると 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furyswipes: {
    name: "\u307F\u3060\u308C\u3072\u3063\u304B\u304D",
    // Official flavor text: "ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  fusionbolt: {
    name: "\u30AF\u30ED\u30B9\u30B5\u30F3\u30C0\u30FC",
    // Official flavor text: "巨大な 雷を たたきつける。 巨大な 炎の 影響を受け 技の 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fusionflare: {
    name: "\u30AF\u30ED\u30B9\u30D5\u30EC\u30A4\u30E0",
    // Official flavor text: "巨大な 炎を たたきつける。 巨大な 雷の 影響を受け 技の 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  futuresight: {
    name: "\u307F\u3089\u3044\u3088\u3061",
    // Official flavor text: "技を 使った ２ターン後に 相手に 念力の 塊を 送って 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u672A\u6765\u306B \u653B\u6483\u3092\u4E88\u77E5\u3057\u305F\uFF01",
    activate: "  {TARGET}\u306F \u307F\u3089\u3044\u3088\u3061\u306E \u653B\u6483\u3092\u53D7\u3051\u305F\uFF01"
  },
  gastroacid: {
    name: "\u3044\u3048\u304D",
    // Official flavor text: "胃液を 相手の 体に 吐きつける。 ついた 胃液は 相手の 特性の 効果を 消す。"
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
    start: "  {POKEMON}\u306E \u7279\u6027\u304C \u52B9\u304B\u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  geargrind: {
    name: "\u30AE\u30A2\u30BD\u30FC\u30B5\u30FC",
    // Official flavor text: "鋼鉄の ギアを 相手に 投げつけて 攻撃する。 ２回連続で ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gearup: {
    name: "\u30A2\u30B7\u30B9\u30C8\u30AE\u30A2",
    // Official flavor text: "ギアを 入れる ことによって 特性 プラスと マイナスの 攻撃と 特攻が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  genesissupernova: {
    name: "\u30AA\u30EA\u30B8\u30F3\u30BA\u30B9\u30FC\u30D1\u30FC\u30CE\u30F4\u30A1",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  geomancy: {
    name: "\u30B8\u30AA\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB",
    // Official flavor text: "１ターン目で エネルギーを 吸収し ２ターン目に 特攻 特防 素早さを ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    prepare: "{POKEMON}\u306F \u30D1\u30EF\u30FC\u3092 \u305F\u3081\u3053\u3093\u3067\u3044\u308B\uFF01"
  },
  gigadrain: {
    name: "\u30AE\u30AC\u30C9\u30EC\u30A4\u30F3",
    // Official flavor text: "養分を 吸い取り 攻撃する。 与えた ダメージの 半分の ＨＰを 回復できる。"
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
    }
  },
  gigaimpact: {
    name: "\u30AE\u30AC\u30A4\u30F3\u30D1\u30AF\u30C8",
    // Official flavor text: "持てる 力を すべて 使って 相手に 突撃する。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gigatonhammer: {
    name: "\u30C7\u30AB\u30CF\u30F3\u30DE\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gigavolthavoc: {
    name: "\u30B9\u30D1\u30FC\u30AD\u30F3\u30B0\u30AE\u30AC\u30DC\u30EB\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  glaciallance: {
    name: "\u30D6\u30EA\u30B6\u30FC\u30C9\u30E9\u30F3\u30B9",
    // Official flavor text: "吹雪を まとった 氷の 槍を 相手に 投げつけて 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  glaciate: {
    name: "\u3053\u3054\u3048\u308B\u305B\u304B\u3044",
    // Official flavor text: "凍えるような 冷気を 相手に 吹きつけて 攻撃する。 相手の 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  glaiverush: {
    name: "\u304D\u3087\u3051\u3093\u3068\u3064\u3052\u304D",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  glare: {
    name: "\u3078\u3073\u306B\u3089\u307F",
    // Official flavor text: "おなかの 模様で おびえさせて 相手を まひの 状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  glitzyglow: {
    name: "\u3069\u3070\u3069\u3070\u30AA\u30FC\u30E9",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxbefuddle: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B3\u30EF\u30AF",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxcannonade: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30DB\u30A6\u30B2\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {PARTY}\u304C \u6C34\u306E \u6D41\u308C\u306B \u5305\u307E\u308C\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u30AD\u30E7\u30C0\u30A4\u30DB\u30A6\u30B2\u30AD\u306E \u6D41\u308C\u306B \u98F2\u307F\u3053\u307E\u308C\u3066\u3044\u3066 \u82E6\u3057\u3044\uFF01"
  },
  gmaxcentiferno: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30D2\u30E3\u30C3\u30AB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxchistrike: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B7\u30F3\u30B2\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#focusenergy"
  },
  gmaxcuddle: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30DB\u30FC\u30E8\u30FC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxdepletion: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B2\u30F3\u30B9\u30A4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {TARGET}\u306E \uFF30\uFF30\u304C \u3078\u3063\u305F\uFF01"
  },
  gmaxdrumsolo: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B3\u30E9\u30F3\u30C0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxfinale: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30C0\u30F3\u30A8\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxfireball: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30AB\u30AD\u30E5\u30A6",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxfoamburst: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30DB\u30A6\u30DE\u30C4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxgoldrush: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B3\u30D0\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxgravitas: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30C6\u30F3\u30C9\u30A6",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxhydrosnipe: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30BD\u30B2\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxmalodor: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B7\u30E5\u30A6\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxmeltdown: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30E6\u30A6\u30B2\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxoneblow: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30A4\u30C1\u30B2\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxrapidflow: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30EC\u30F3\u30B2\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxreplenish: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B5\u30A4\u30BB\u30A4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxresonance: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30BB\u30F3\u30EA\u30C4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxsandblast: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B5\u30B8\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxsmite: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30C6\u30F3\u30D0\u30C4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxsnooze: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B9\u30A4\u30DE",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxsteelsurge: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B3\u30A6\u30B8\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {PARTY}\u306E \u5468\u308A\u306B \u3068\u304C\u3063\u305F \u306F\u304C\u306D\u304C \u305F\u3060\u3088\u3044\u306F\u3058\u3081\u305F\uFF01",
    end: "  {PARTY}\u306E \u5468\u308A\u306E \u306F\u304C\u306D\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01",
    damage: "  {POKEMON}\u306B \u3068\u304C\u3063\u305F \u306F\u304C\u306D\u304C \u98DF\u3044\u3053\u3093\u3060\uFF01"
  },
  gmaxstonesurge: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30AC\u30F3\u30B8\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxstunshock: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30AB\u30F3\u30C7\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxsweetness: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30AB\u30F3\u30ED",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxtartness: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B5\u30F3\u30B2\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxterror: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B2\u30F3\u30A8\u30A4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxvinelash: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30D9\u30F3\u30BF\u30C4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {PARTY}\u304C \u30E0\u30C1\u306E \u731B\u6253\u306B \u5305\u307E\u308C\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u30AD\u30E7\u30C0\u30A4\u30D9\u30F3\u30BF\u30C4\u306E \u731B\u6253\u306B \u3055\u3089\u3055\u308C\u3066\u3044\u3066 \u75DB\u3044\uFF01"
  },
  gmaxvolcalith: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30D5\u30F3\u30BB\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {PARTY}\u304C \u5CA9\u306B \u56F2\u307E\u308C\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u30AD\u30E7\u30C0\u30A4\u30D5\u30F3\u30BB\u30AD\u306E \u5CA9\u306B \u56F2\u307E\u308C\u3066\u3044\u3066 \u75DB\u3044\uFF01"
  },
  gmaxvoltcrash: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30D0\u30F3\u30E9\u30A4",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gmaxwildfire: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30B4\u30AF\u30A8\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {PARTY}\u304C \u307B\u306E\u304A\u306B \u5305\u307E\u308C\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u30AD\u30E7\u30C0\u30A4\u30B4\u30AF\u30A8\u30F3\u306E \u708E\u306B \u5305\u307E\u308C\u3066\u3044\u3066 \u71B1\u3044\uFF01"
  },
  gmaxwindrage: {
    name: "\u30AD\u30E7\u30C0\u30A4\u30D5\u30A6\u30B2\u30AD",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassknot: {
    name: "\u304F\u3055\u3080\u3059\u3073",
    // Official flavor text: "草を からませて 相手を 転ばせる。相手が 重いほど 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grasspledge: {
    name: "\u304F\u3055\u306E\u3061\u304B\u3044",
    // Official flavor text: "草の柱で 攻撃する。 みずと 組みあわせると 威力が あがって あたりが 湿原に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "#waterpledge",
    start: "  {TEAM}\u306E \u5468\u308A\u306B \u6E7F\u539F\u304C \u5E83\u304C\u3063\u305F\uFF01",
    end: "  {TEAM}\u306E \u5468\u308A\u306E \u6E7F\u539F\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01"
  },
  grasswhistle: {
    name: "\u304F\u3055\u3076\u3048",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassyglide: {
    name: "\u30B0\u30E9\u30B9\u30B9\u30E9\u30A4\u30C0\u30FC",
    // Official flavor text: "地面を 滑るように 相手を 攻撃。 グラスフィールドの時 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassyterrain: {
    name: "\u30B0\u30E9\u30B9\u30D5\u30A3\u30FC\u30EB\u30C9",
    // Official flavor text: "５ターンの 間 グラスフィールドにする。 地面にいると 毎ターン 回復する。 くさタイプの 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  gravapple: {
    name: "\uFF27\u306E\u3061\u304B\u3089",
    // Official flavor text: "高いところから りんごを 落として ダメージを 与える。 相手の 防御を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gravity: {
    name: "\u3058\u3085\u3046\u308A\u3087\u304F",
    // Official flavor text: "５ターンの間 ふゆうや ひこうタイプに じめんタイプの 技が 当たるようになる。 空中に 飛ぶ 技も 使えない。"
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
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  growl: {
    name: "\u306A\u304D\u3054\u3048",
    // Official flavor text: "かわいい なきごえを 聞かせて 気を ひき 油断を させて 相手の 攻撃を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  growth: {
    name: "\u305B\u3044\u3061\u3087\u3046",
    // Official flavor text: "体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
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
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  grudge: {
    name: "\u304A\u3093\u306D\u3093",
    // Official flavor text: "相手の 技で ひんしに されたとき おんねんを かけて その技の ＰＰを ０に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306E {MOVE}\u306F \u304A\u3093\u306D\u3093\u3067 \uFF30\uFF30\u304C\uFF10\u306B\u306A\u3063\u305F\uFF01",
    start: "{POKEMON}\u306F \u76F8\u624B\u306B \u304A\u3093\u306D\u3093\u3092 \u304B\u3051\u3088\u3046\u3068\u3057\u3066\u3044\u308B\uFF01"
  },
  guardianofalola: {
    name: "\u30AC\u30FC\u30C7\u30A3\u30A2\u30F3\u30FB\u30C7\u30FB\u30A2\u30ED\u30FC\u30E9",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guardsplit: {
    name: "\u30AC\u30FC\u30C9\u30B7\u30A7\u30A2",
    // Official flavor text: "超能力で 自分と 相手の 防御と 特防を たして 半分に わける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u304A\u305F\u304C\u3044\u306E\u30AC\u30FC\u30C9\u3092 \u30B7\u30A7\u30A2\u3057\u305F\uFF01"
  },
  guardswap: {
    name: "\u30AC\u30FC\u30C9\u30B9\u30EF\u30C3\u30D7",
    // Official flavor text: "超能力で 自分と 相手の 防御と 特防の 能力変化を 入れ替える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guillotine: {
    name: "\u30CF\u30B5\u30DF\u30AE\u30ED\u30C1\u30F3",
    // Official flavor text: "大きな ハサミで 相手を 切り裂いて 攻撃する。 当たれば 一撃で ひんしに する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  gunkshot: {
    name: "\u30C0\u30B9\u30C8\u30B7\u30E5\u30FC\u30C8",
    // Official flavor text: "汚い ゴミを 相手に ぶつけて 攻撃する。 毒状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gust: {
    name: "\u304B\u305C\u304A\u3053\u3057",
    // Official flavor text: "翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  gyroball: {
    name: "\u30B8\u30E3\u30A4\u30ED\u30DC\u30FC\u30EB",
    // Official flavor text: "体を 高速に 回転させて 体当たりする。相手より 素早さが 低いほど 強い。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  hail: {
    name: "\u3042\u3089\u308C",
    // Official flavor text: "５ターンの 間 あられを 降らして こおりタイプで ない ポケモン 全員に ダメージを 与える。"
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
    }
  },
  hammerarm: {
    name: "\u30A2\u30FC\u30E0\u30CF\u30F3\u30DE\u30FC",
    // Official flavor text: "強くて 重い こぶしを ふるって ダメージを 与える。 自分の 素早さが さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  happyhour: {
    name: "\u30CF\u30C3\u30D4\u30FC\u30BF\u30A4\u30E0",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u307F\u3093\u306A\u304C \u30CF\u30C3\u30D4\u30FC\u306A\u6C17\u5206\u306B \u5305\u307E\u308C\u305F\uFF01"
  },
  harden: {
    name: "\u304B\u305F\u304F\u306A\u308B",
    // Official flavor text: "全身に 力を こめて 体を 硬くして 自分の 防御を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hardpress: {
    name: "\u30CF\u30FC\u30C9\u30D7\u30EC\u30B9",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  haze: {
    name: "\u304F\u308D\u3044\u304D\u308A",
    // Official flavor text: "黒い霧を だして 戦闘に でている ポケモン 全員の 能力変化を もとに もどす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    // Only used in Gen 1
    activate: "  \u3059\u3079\u3066\u306E \u30B9\u30C6\u30FC\u30BF\u30B9\u304C \u3082\u3068\u306B \u3082\u3069\u3063\u305F\uFF01"
  },
  headbutt: {
    name: "\u305A\u3064\u304D",
    // Official flavor text: "頭を 突きだして まっすぐ つっこんで 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  headcharge: {
    name: "\u30A2\u30D5\u30ED\u30D6\u30EC\u30A4\u30AF",
    // Official flavor text: "すごい アフロの 頭で 相手に 突進して 攻撃する。 自分も 少し ダメージを 受ける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  headlongrush: {
    name: "\u3076\u3061\u304B\u307E\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  headsmash: {
    name: "\u3082\u308D\u306F\u306E\u305A\u3064\u304D",
    // Official flavor text: "命を 懸けて こん身の 力で 相手に ずつきを する。 自分も ものすごい ダメージを 受ける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  healbell: {
    name: "\u3044\u3084\u3057\u306E\u3059\u305A",
    // Official flavor text: "心地好い 鈴の 音色を 聞かせて 味方 全員の 状態異常を 回復 する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  \u9234\u306E\u97F3\u304C \u97FF\u304D\u308F\u305F\u3063\u305F\uFF01"
  },
  healblock: {
    name: "\u304B\u3044\u3075\u304F\u3075\u3046\u3058",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      end: "  {POKEMON}\u306E \u304B\u3044\u3075\u304F\u3075\u3046\u3058\u306E \u52B9\u679C\u304C\u5207\u308C\u305F\uFF01",
      cant: "{POKEMON}\u306F \u304B\u3044\u3075\u304F\u3075\u3046\u3058\u3067 {MOVE}\u304C \u3060\u305B\u306A\u3044\uFF01"
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
    start: "  {POKEMON}\u306F \u56DE\u5FA9\u52D5\u4F5C\u3092 \u5C01\u3058\u3089\u308C\u305F\uFF01",
    end: "  {POKEMON}\u306E \u304B\u3044\u3075\u304F\u3075\u3046\u3058\u306E \u52B9\u679C\u304C\u5207\u308C\u305F\uFF01",
    cant: "{POKEMON}\u306F \u304B\u3044\u3075\u304F\u3075\u3046\u3058\u3067 {MOVE}\u304C \u3060\u305B\u306A\u3044\uFF01",
    fail: "  \u3057\u304B\u3057 {POKEMON}\u306B\u306F \u3046\u307E\u304F \u6C7A\u307E\u3089\u306A\u304B\u3063\u305F\uFF01"
  },
  healingwish: {
    name: "\u3044\u3084\u3057\u306E\u306D\u304C\u3044",
    // Official flavor text: "自分は ひんしに なるが 控えから でてくる ポケモンの 状態異常と ＨＰを 回復する。"
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
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    heal: "  \u3044\u3084\u3057\u306E\u306D\u304C\u3044\u304C {POKEMON}\u306B \u5C4A\u3044\u305F\uFF01"
  },
  healorder: {
    name: "\u304B\u3044\u3075\u304F\u3057\u308C\u3044",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  healpulse: {
    name: "\u3044\u3084\u3057\u306E\u306F\u3069\u3046",
    // Official flavor text: "いやしのはどうを とばして 最大ＨＰの 半分 相手の ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  heartstamp: {
    name: "\u30CF\u30FC\u30C8\u30B9\u30BF\u30F3\u30D7",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  heartswap: {
    name: "\u30CF\u30FC\u30C8\u30B9\u30EF\u30C3\u30D7",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  heatcrash: {
    name: "\u30D2\u30FC\u30C8\u30B9\u30BF\u30F3\u30D7",
    // Official flavor text: "燃える 体で 相手に ぶつかって 攻撃する。 自分が 相手より 重いほど 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  heatwave: {
    name: "\u306D\u3063\u3077\u3046",
    // Official flavor text: "熱い 息を 相手に 吹きつけて 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  heavyslam: {
    name: "\u30D8\u30D3\u30FC\u30DC\u30F3\u30D0\u30FC",
    // Official flavor text: "重たい 体で 相手に ぶつかって 攻撃する。 自分が 相手より 重いほど 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  helpinghand: {
    name: "\u3066\u3060\u3059\u3051",
    // Official flavor text: "仲間を 助ける。 てだすけ された ポケモンの 技の 威力は いつもより 大きくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {SOURCE}\u306F {POKEMON}\u3092 \u624B\u52A9\u3051\u3059\u308B \u4F53\u52E2\u306B\u5165\u3063\u305F\uFF01"
  },
  hex: {
    name: "\u305F\u305F\u308A\u3081",
    // Official flavor text: "たたみかける ように 攻撃する。 状態異常の 相手に 大きな ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hiddenpower: {
    name: "\u3081\u3056\u3081\u308B\u30D1\u30EF\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
  hiddenpowerbug: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerdark: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerdragon: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerelectric: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerfighting: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerfire: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerflying: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerghost: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowergrass: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerground: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerice: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerpoison: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerpsychic: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerrock: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowersteel: {
    name: null
    // NEEDS TRANSLATION
  },
  hiddenpowerwater: {
    name: null
    // NEEDS TRANSLATION
  },
  highhorsepower: {
    name: "\uFF11\uFF10\u307E\u3093\u3070\u308A\u304D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  highjumpkick: {
    name: "\u3068\u3073\u3072\u3056\u3052\u308A",
    // Official flavor text: "ジャンプからの ひざげりで 相手を 攻撃する。 はずすと 自分が ダメージを 受ける。"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    damage: "#crash"
  },
  holdback: {
    name: "\u3066\u304B\u3052\u3093",
    // Official flavor text: "手加減 した 攻撃で 相手の ＨＰを 必ず １だけ 残す。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  holdhands: {
    name: "\u3066\u3092\u3064\u306A\u3050",
    // Official flavor text: "味方の ポケモン 同士が 手をつなぐ。 とっても 幸せな 気持ちに なれる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  honeclaws: {
    name: "\u3064\u3081\u3068\u304E",
    // Official flavor text: "ツメを 磨いて 鋭く する。 自分の 攻撃と 命中率を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hornattack: {
    name: "\u3064\u306E\u3067\u3064\u304F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  horndrill: {
    name: "\u3064\u306E\u30C9\u30EA\u30EB",
    // Official flavor text: "回転する つのを 相手に 突き刺して 攻撃する。 当たれば 一撃で ひんしに する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  hornleech: {
    name: "\u30A6\u30C3\u30C9\u30DB\u30FC\u30F3",
    // Official flavor text: "つのを 突き刺して 相手の 養分を 吸い取る。 与えた ダメージの 半分の ＨＰを 回復できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  howl: {
    name: "\u3068\u304A\u307C\u3048",
    // Official flavor text: "大声で ほえて 気合を 高め 自分と 味方の 攻撃を あげる。"
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
  hurricane: {
    name: "\u307C\u3046\u3075\u3046",
    // Official flavor text: "強烈な 風で 相手を 包みこんで 攻撃する。 相手を 混乱させることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  hydrocannon: {
    name: "\u30CF\u30A4\u30C9\u30ED\u30AB\u30CE\u30F3",
    // Official flavor text: "水の 大砲を 相手に 発射して 攻撃する。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydropump: {
    name: "\u30CF\u30A4\u30C9\u30ED\u30DD\u30F3\u30D7",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydrosteam: {
    name: "\u30CF\u30A4\u30C9\u30ED\u30B9\u30C1\u30FC\u30E0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydrovortex: {
    name: "\u30B9\u30FC\u30D1\u30FC\u30A2\u30AF\u30A2\u30C8\u30EB\u30CD\u30FC\u30C9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hyperbeam: {
    name: "\u306F\u304B\u3044\u3053\u3046\u305B\u3093",
    // Official flavor text: "強い 光線を 相手に 発射して 攻撃する。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  hyperdrill: {
    name: "\u30CF\u30A4\u30D1\u30FC\u30C9\u30EA\u30EB",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hyperfang: {
    name: "\u3072\u3063\u3055\u3064\u307E\u3048\u3070",
    // Official flavor text: "鋭い 前歯で 強く かみついて 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hyperspacefury: {
    name: "\u3044\u3058\u3052\u3093\u30E9\u30C3\u30B7\u30E5",
    // Official flavor text: "たくさんの 腕で まもるや みきり などを 無視した 連続攻撃。 自分の 防御が さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "#shadowforce",
    fail: "#darkvoid"
  },
  hyperspacehole: {
    name: "\u3044\u3058\u3052\u3093\u30DB\u30FC\u30EB",
    // Official flavor text: "異次元ホールで 突然 相手の 真横に 現れ 攻撃する。 まもるや みきり なども 無視 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "#shadowforce"
  },
  hypervoice: {
    name: "\u30CF\u30A4\u30D1\u30FC\u30DC\u30A4\u30B9",
    // Official flavor text: "うるさく 響く 大きな 振動を 相手に 与えて 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hypnosis: {
    name: "\u3055\u3044\u307F\u3093\u3058\u3085\u3064",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  iceball: {
    name: "\u30A2\u30A4\u30B9\u30DC\u30FC\u30EB",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    }
  },
  icebeam: {
    name: "\u308C\u3044\u3068\u3046\u30D3\u30FC\u30E0",
    // Official flavor text: "凍える ビームを 相手に 発射して 攻撃する。 こおり状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  iceburn: {
    name: "\u30B3\u30FC\u30EB\u30C9\u30D5\u30EC\u30A2",
    // Official flavor text: "すべてを 凍らせる 激しい 冷気で ２ターン目に 相手を 包みこむ。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    prepare: "  {POKEMON}\u306F \u51CD\u3048\u308B\u7A7A\u6C17\u306B \u5305\u307E\u308C\u305F\uFF01"
  },
  icefang: {
    name: "\u3053\u304A\u308A\u306E\u30AD\u30D0",
    // Official flavor text: "冷気を ひめた キバで かみつく。 相手を ひるませたり こおり状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icehammer: {
    name: "\u30A2\u30A4\u30B9\u30CF\u30F3\u30DE\u30FC",
    // Official flavor text: "強くて 重い こぶしを ふるって ダメージを 与える。 自分の 素早さが さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icepunch: {
    name: "\u308C\u3044\u3068\u3046\u30D1\u30F3\u30C1",
    // Official flavor text: "冷気を こめた パンチで 相手を 攻撃する。 こおり状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  iceshard: {
    name: "\u3053\u304A\u308A\u306E\u3064\u3076\u3066",
    // Official flavor text: "氷の塊を 一瞬で つくり 相手に 素早く 放つ。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icespinner: {
    name: "\u30A2\u30A4\u30B9\u30B9\u30D4\u30CA\u30FC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  iciclecrash: {
    name: "\u3064\u3089\u3089\u304A\u3068\u3057",
    // Official flavor text: "大きな 氷柱を 激しく ぶつけて 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  iciclespear: {
    name: "\u3064\u3089\u3089\u3070\u308A",
    // Official flavor text: "鋭い 氷柱を 相手に 発射して 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
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
  icywind: {
    name: "\u3053\u3054\u3048\u308B\u304B\u305C",
    // Official flavor text: "凍てつく 冷気を 相手に 吹きつけて 攻撃する。 相手の 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  imprison: {
    name: "\u3075\u3046\u3044\u3093",
    // Official flavor text: "相手が 自分と 同じ 技を おぼえていたら 相手だけ その技を 使えなくする。"
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
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u76F8\u624B\u306E\u6280\u3092 \u5C01\u5370\u3057\u305F\uFF01",
    cant: "{POKEMON}\u306F \u3075\u3046\u3044\u3093\u3067 {MOVE}\u304C \u3060\u305B\u306A\u3044\uFF01"
  },
  incinerate: {
    name: "\u3084\u304D\u3064\u304F\u3059",
    // Official flavor text: "炎で 相手を 攻撃する。 相手が きのみなどを 持っているとき 燃やして 使えなくする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    removeItem: "  {POKEMON}\u306E {ITEM}\u306F \u713C\u3051\u3066\u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  infernalparade: {
    name: "\u3072\u3083\u3063\u304D\u3084\u3053\u3046",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  inferno: {
    name: "\u308C\u3093\u3054\u304F",
    // Official flavor text: "激しい 炎で 相手を 包みこみ 攻撃する。 やけど状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infernooverdrive: {
    name: "\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30D5\u30EB\u30D5\u30EC\u30A4\u30E0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infestation: {
    name: "\u307E\u3068\u308F\u308A\u3064\u304F",
    // Official flavor text: "４ー５ターンの 間 相手に まとわりついて 攻撃する。 そのあいだ 相手は 逃げられない。"
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
    start: "  {POKEMON}\u306F {SOURCE}\u306B \u307E\u3068\u308F\u308A\u3064\u304B\u308C\u305F\uFF01"
  },
  ingrain: {
    name: "\u306D\u3092\u306F\u308B",
    // Official flavor text: "大地に 根を 張り 毎ターン 自分の ＨＰを 回復する。 根を 張っているので 入れ替えられない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
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
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u6839\u3092 \u306F\u3063\u305F\uFF01",
    block: "  {POKEMON}\u306F \u6839\u3092\u306F\u3063\u3066 \u52D5\u304B\u306A\u3044\uFF01",
    heal: "  {POKEMON}\u306F \u6839\u304B\u3089 \u990A\u5206\u3092 \u5438\u3044\u53D6\u3063\u305F\uFF01"
  },
  instruct: {
    name: "\u3055\u3044\u306F\u3044",
    // Official flavor text: "相手が 出した 技を 指示して もう一度 出させることが できる。"
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
    activate: "  {POKEMON}\u306E \u6307\u793A\u3067 {TARGET}\u306F \u6280\u3092 \u7E70\u308A\u51FA\u3057\u305F\uFF01"
  },
  iondeluge: {
    name: "\u30D7\u30E9\u30BA\u30DE\u30B7\u30E3\u30EF\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u96FB\u5B50\u306E\u30B7\u30E3\u30EF\u30FC\u304C \u964D\u308A\u305D\u305D\u3044\u3060\uFF01"
  },
  irondefense: {
    name: "\u3066\u3063\u307A\u304D",
    // Official flavor text: "皮膚を 鉄のように 硬くする ことで 自分の 防御を ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ironhead: {
    name: "\u30A2\u30A4\u30A2\u30F3\u30D8\u30C3\u30C9",
    // Official flavor text: "鋼の ような 硬い 頭で 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  irontail: {
    name: "\u30A2\u30A4\u30A2\u30F3\u30C6\u30FC\u30EB",
    // Official flavor text: "硬い しっぽで 相手を たたきつけて 攻撃する。 相手の 防御を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ivycudgel: {
    name: "\u30C4\u30BF\u3053\u3093\u307C\u3046",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  jawlock: {
    name: "\u304F\u3089\u3044\u3064\u304F",
    // Official flavor text: "お互い ひんしに なるまで 交代が できなくなる。 どちらかの ポケモンが いなくなると 効果は消える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  jetpunch: {
    name: "\u30B8\u30A7\u30C3\u30C8\u30D1\u30F3\u30C1",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  judgment: {
    name: "\u3055\u3070\u304D\u306E\u3064\u3076\u3066",
    // Official flavor text: "無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  jumpkick: {
    name: "\u3068\u3073\u3052\u308A",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    damage: "#crash"
  },
  junglehealing: {
    name: "\u30B8\u30E3\u30F3\u30B0\u30EB\u30D2\u30FC\u30EB",
    // Official flavor text: "ジャングルと 一体化して 自分と 場にいる 味方の ＨＰと 状態を 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  karatechop: {
    name: "\u304B\u3089\u3066\u30C1\u30E7\u30C3\u30D7",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  kinesis: {
    name: "\u30B9\u30D7\u30FC\u30F3\u307E\u3052",
    // Official flavor text: "スプーンを まげて 注意を ひき 相手の 命中率を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  kingsshield: {
    name: "\u30AD\u30F3\u30B0\u30B7\u30FC\u30EB\u30C9",
    // Official flavor text: "相手の 攻撃を 防ぐと 同時に 防御態勢になる。 触れた 相手の 攻撃を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  knockoff: {
    name: "\u306F\u305F\u304D\u304A\u3068\u3059",
    // Official flavor text: "相手の 持ち物を はたき 落として 戦闘が 終わるまで 使えなくする。 物を持つ 相手には ダメージが増す。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null
      // NEEDS TRANSLATION: not in PokeAPI
    },
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
    },
    removeItem: "  {SOURCE}\u306F {POKEMON}\u306E {ITEM}\u3092 \u306F\u305F\u304D\u843D\u3068\u3057\u305F\uFF01"
  },
  kowtowcleave: {
    name: "\u30C9\u30B2\u30B6\u30F3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  landswrath: {
    name: "\u30B0\u30E9\u30F3\u30C9\u30D5\u30A9\u30FC\u30B9",
    // Official flavor text: "大地の パワーを 集め 力を 相手に 集中させて ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  laserfocus: {
    name: "\u3068\u304E\u3059\u307E\u3059",
    // Official flavor text: "精神を 集中して 次の 攻撃を 必ず 急所に 当てる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u7CBE\u795E\u3092 \u7814\u304E\u6F84\u307E\u3057\u305F\uFF01"
  },
  lashout: {
    name: "\u3046\u3063\u3077\u3093\u3070\u3089\u3057",
    // Official flavor text: "相手への いらだちを ぶつけて 攻撃。 そのターンに 能力を さげられていると 技の 威力が ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lastresort: {
    name: "\u3068\u3063\u3066\u304A\u304D",
    // Official flavor text: "戦闘中に おぼえている 技を すべて 使うと はじめて だせる とっておきの 技。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lastrespects: {
    name: "\u304A\u306F\u304B\u307E\u3044\u308A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lavaplume: {
    name: "\u3075\u3093\u3048\u3093",
    // Official flavor text: "真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafage: {
    name: "\u3053\u306E\u306F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafblade: {
    name: "\u30EA\u30FC\u30D5\u30D6\u30EC\u30FC\u30C9",
    // Official flavor text: "はっぱを 剣のように あやつり 相手を 切りつけて 攻撃する。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafstorm: {
    name: "\u30EA\u30FC\u30D5\u30B9\u30C8\u30FC\u30E0",
    // Official flavor text: "とがった はっぱで 相手に あらしを おこす。使うと 反動で 自分の 特攻が がくっと さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leaftornado: {
    name: "\u30B0\u30E9\u30B9\u30DF\u30AD\u30B5\u30FC",
    // Official flavor text: "鋭い はっぱで 相手を 包みこんで 攻撃する。 命中率を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leechlife: {
    name: "\u304D\u3085\u3046\u3051\u3064",
    // Official flavor text: "血を 吸い取って 相手を 攻撃する。 与えた ダメージの 半分の ＨＰを 回復できる。"
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
    }
  },
  leechseed: {
    name: "\u3084\u3069\u308A\u304E\u306E\u30BF\u30CD",
    // Official flavor text: "植えつけた 相手の ＨＰを 毎ターン 少しだけ 吸い取り 自分の ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306B \u7A2E\u3092 \u690D\u3048\u3064\u3051\u305F\uFF01",
    end: "  {POKEMON}\u306F \u3084\u3069\u308A\u304E\u306E\u30BF\u30CD\u304B\u3089 \u89E3\u653E\u3055\u308C\u305F\uFF01",
    damage: "  \u3084\u3069\u308A\u304E\u304C {POKEMON}\u306E \u4F53\u529B\u3092\u596A\u3046\uFF01"
  },
  leer: {
    name: "\u306B\u3089\u307F\u3064\u3051\u308B",
    // Official flavor text: "鋭い 目つきで おびえさせて 相手の 防御を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  letssnuggleforever: {
    name: "\u307D\u304B\u307C\u304B\u30D5\u30EC\u30F3\u30C9\u30BF\u30A4\u30E0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lick: {
    name: "\u3057\u305F\u3067\u306A\u3081\u308B",
    // Official flavor text: "長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lifedew: {
    name: "\u3044\u306E\u3061\u306E\u3057\u305A\u304F",
    // Official flavor text: "不思議な 水を ふりまいて 自分と 場にいる 味方の ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightofruin: {
    name: "\u306F\u3081\u3064\u306E\u3072\u304B\u308A",
    // Official flavor text: "永遠の花 の パワーを かりて 強力な 光線を 撃ちだす。 自分も かなりの ダメージを 受ける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightscreen: {
    name: "\u3072\u304B\u308A\u306E\u304B\u3079",
    // Official flavor text: "５ターンの 間 不思議な かべで 相手から 受ける 特殊攻撃の ダメージを 弱める。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null,
      // NEEDS TRANSLATION
      start: "  {POKEMON}\u306F \u3068\u304F\u3057\u3085\u3053\u3046\u3052\u304D\u306B \u3064\u3088\u304F\u306A\u3063\u305F\uFF01"
    },
    start: "  {TEAM}\u306F \u3072\u304B\u308A\u306E\u304B\u3079\u3067 \u7279\u6B8A\u306B \u5F37\u304F\u306A\u3063\u305F\uFF01",
    end: "  {TEAM}\u306E \u3072\u304B\u308A\u306E\u304B\u3079\u304C \u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  lightthatburnsthesky: {
    name: "\u3066\u3093\u3053\u304C\u3059\u3081\u3064\u307C\u3046\u306E\u3072\u304B\u308A",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  liquidation: {
    name: "\u30A2\u30AF\u30A2\u30D6\u30EC\u30A4\u30AF",
    // Official flavor text: "水の 力で 相手に ぶつかって 攻撃する。 相手の 防御を さげる ことがある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lockon: {
    name: "\u30ED\u30C3\u30AF\u30AA\u30F3",
    // Official flavor text: "照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {SOURCE}\u306F {POKEMON}\u306B \u306D\u3089\u3044\u3092 \u3055\u3060\u3081\u305F\uFF01"
  },
  lovelykiss: {
    name: "\u3042\u304F\u307E\u306E\u30AD\u30C3\u30B9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lowkick: {
    name: "\u3051\u305F\u3050\u308A",
    // Official flavor text: "足を 強く けり 相手を 転ばせて 攻撃する。 相手が 重いほど 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  lowsweep: {
    name: "\u30ED\u30FC\u30AD\u30C3\u30AF",
    // Official flavor text: "素早い 動きで 相手の 足を ねらって 攻撃する。 相手の 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  luckychant: {
    name: "\u304A\u307E\u3058\u306A\u3044",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u304A\u307E\u3058\u306A\u3044\u306E \u529B\u3067 {TEAM}\u306E\u6025\u6240\u304C \u96A0\u308C\u305F\uFF01",
    end: "  {TEAM}\u306E \u304A\u307E\u3058\u306A\u3044\u304C\u89E3\u3051\u305F\uFF01"
  },
  luminacrash: {
    name: "\u30EB\u30DF\u30CA\u30B3\u30EA\u30B8\u30E7\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lunarblessing: {
    name: "\u307F\u304B\u3065\u304D\u306E\u3044\u306E\u308A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lunardance: {
    name: "\u307F\u304B\u3065\u304D\u306E\u307E\u3044",
    // Official flavor text: "自分は ひんしに なるが 控えから でてくる ポケモンの すべての 状態を 回復する。"
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
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    heal: "  {POKEMON}\u306F \u795E\u79D8\u7684\u306A \u6708\u306E\u5149\u306B \u5305\u307E\u308C\u305F\uFF01"
  },
  lunge: {
    name: "\u3068\u3073\u304B\u304B\u308B",
    // Official flavor text: "全力で 相手に 飛びかかって 攻撃。 相手の 攻撃を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lusterpurge: {
    name: "\u30E9\u30B9\u30BF\u30FC\u30D1\u30FC\u30B8",
    // Official flavor text: "まばゆい 光を 解放して 攻撃する。 相手の 特防を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  machpunch: {
    name: "\u30DE\u30C3\u30CF\u30D1\u30F3\u30C1",
    // Official flavor text: "目にも 留まらぬ ものすごい 速さで パンチを くりだす。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicalleaf: {
    name: "\u30DE\u30B8\u30AB\u30EB\u30EA\u30FC\u30D5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicaltorque: {
    name: "\u30DE\u30B8\u30AB\u30EB\u30A2\u30AF\u30BB\u30EB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magiccoat: {
    name: "\u30DE\u30B8\u30C3\u30AF\u30B3\u30FC\u30C8",
    // Official flavor text: "状態異常に なる 技や やどりぎのタネ などを だされたとき 相手に 跳ね返す。"
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
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u30DE\u30B8\u30C3\u30AF\u30B3\u30FC\u30C8\u306B \u5305\u307E\u308C\u305F\uFF01",
    move: "{POKEMON}\u306F {MOVE}\u3092 \u8DF3\u306D\u8FD4\u3057\u305F\uFF01"
  },
  magicpowder: {
    name: "\u307E\u307B\u3046\u306E\u3053\u306A",
    // Official flavor text: "まほうのこなを 浴びせて 相手を エスパータイプに 変化させる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  magicroom: {
    name: "\u30DE\u30B8\u30C3\u30AF\u30EB\u30FC\u30E0",
    // Official flavor text: "まか不思議な 空間を つくる。 ５ターンの間 すべてのポケモンの 道具の 効果が なくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magmastorm: {
    name: "\u30DE\u30B0\u30DE\u30B9\u30C8\u30FC\u30E0",
    // Official flavor text: "激しく 燃えたぎる 炎の なかに ４ー５ターンの 間 相手を 閉じこめて 攻撃する。"
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
    start: "  {POKEMON}\u306F \u30DE\u30B0\u30DE\u306E\u6E26\u306B \u9589\u3058\u3053\u3081\u3089\u308C\u305F\uFF01"
  },
  magnetbomb: {
    name: "\u30DE\u30B0\u30CD\u30C3\u30C8\u30DC\u30E0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magneticflux: {
    name: "\u3058\u3070\u305D\u3046\u3055",
    // Official flavor text: "磁場を 操作 することによって 特性 プラスと マイナスの 防御 特防が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magnetrise: {
    name: "\u3067\u3093\u3058\u3075\u3086\u3046",
    // Official flavor text: "電気で つくった 磁力の 力で 宙に 浮かぶ。 ５ターンの 間 浮遊できる。"
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
    start: "  {POKEMON}\u306F \u96FB\u78C1\u529B\u3067 \u6D6E\u304B\u3073\u3042\u304C\u3063\u305F\uFF01",
    end: "  {POKEMON}\u306F \u96FB\u78C1\u529B\u304C \u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  magnitude: {
    name: "\u30DE\u30B0\u30CB\u30C1\u30E5\u30FC\u30C9",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  \u30DE\u30B0\u30CB\u30C1\u30E5\u30FC\u30C9{NUMBER}\uFF01\uFF01"
  },
  makeitrain: {
    name: "\u30B4\u30FC\u30EB\u30C9\u30E9\u30C3\u30B7\u30E5",
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
    activate: "#payday"
  },
  maliciousmoonsault: {
    name: "\u30CF\u30A4\u30D1\u30FC\u30C0\u30FC\u30AF\u30AF\u30E9\u30C3\u30B7\u30E3\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  malignantchain: {
    name: "\u3058\u3083\u3069\u304F\u306E\u304F\u3055\u308A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  matblock: {
    name: "\u305F\u305F\u307F\u304C\u3048\u3057",
    // Official flavor text: "かえした タタミを 盾にして 自分や 味方への 技の ダメージを 防ぐ。 変化技は 防ぐことが できない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u305F\u305F\u307F\u304C\u3048\u3057\u3092 \u306D\u3089\u3063\u3066\u3044\u308B\uFF01",
    block: "  {MOVE}\u306F \u305F\u305F\u307F\u304C\u3048\u3057\u3067 \u9632\u304C\u308C\u305F\uFF01"
  },
  matchagotcha: {
    name: "\u30B7\u30E3\u30AB\u30B7\u30E3\u30AB\u307B\u3046",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxairstream: {
    name: "\u30C0\u30A4\u30B8\u30A7\u30C3\u30C8",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす ひこうタイプの 攻撃。 味方の 素早さを 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxdarkness: {
    name: "\u30C0\u30A4\u30A2\u30FC\u30AF",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす あくタイプの 攻撃。 相手の 特防を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxflare: {
    name: "\u30C0\u30A4\u30D0\u30FC\u30F3",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす ほのおタイプの 攻撃。 ５ターンの 間 日差しを 強くする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxflutterby: {
    name: "\u30C0\u30A4\u30EF\u30FC\u30E0",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす むしタイプの 攻撃。 相手の 特攻を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxgeyser: {
    name: "\u30C0\u30A4\u30B9\u30C8\u30EA\u30FC\u30E0",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす みずタイプの 攻撃。 ５ターンの 間 雨を 降らせる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxguard: {
    name: "\u30C0\u30A4\u30A6\u30A9\u30FC\u30EB",
    // Official flavor text: "相手の 攻撃を まったく 受けない。 連続で だすと 失敗しやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u653B\u6483\u304B\u3089 \u8EAB\u3092\u5B88\u3063\u305F\uFF01"
  },
  maxhailstorm: {
    name: "\u30C0\u30A4\u30A2\u30A4\u30B9",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす こおりタイプの 攻撃。 ５ターンの 間 あられを 降らす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxknuckle: {
    name: "\u30C0\u30A4\u30CA\u30C3\u30AF\u30EB",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす かくとうタイプの 攻撃。 味方の 攻撃を 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxlightning: {
    name: "\u30C0\u30A4\u30B5\u30F3\u30C0\u30FC",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす でんきタイプの 攻撃。 ５ターンの 間 エレキフィールドにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxmindstorm: {
    name: "\u30C0\u30A4\u30B5\u30A4\u30B3",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす エスパータイプの 攻撃。 ５ターンの 間 サイコフィールドにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxooze: {
    name: "\u30C0\u30A4\u30A2\u30B7\u30C3\u30C9",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす どくタイプの 攻撃。 味方の 特攻を 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxovergrowth: {
    name: "\u30C0\u30A4\u30BD\u30A6\u30B2\u30F3",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす くさタイプの 攻撃。 ５ターンの 間 グラスフィールドにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxphantasm: {
    name: "\u30C0\u30A4\u30DB\u30ED\u30A6",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす ゴーストタイプの 攻撃。 相手の 防御を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxquake: {
    name: "\u30C0\u30A4\u30A2\u30FC\u30B9",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす じめんタイプの 攻撃。 味方の 特防を 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxrockfall: {
    name: "\u30C0\u30A4\u30ED\u30C3\u30AF",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす いわタイプの 攻撃。 ５ターンの 間 砂あらしにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxstarfall: {
    name: "\u30C0\u30A4\u30D5\u30A7\u30A2\u30EA\u30FC",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす フェアリータイプの 攻撃。 ５ターンの 間 ミストフィールドにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxsteelspike: {
    name: "\u30C0\u30A4\u30B9\u30C1\u30EB",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす はがねタイプの 攻撃。 味方の 防御を 上げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxstrike: {
    name: "\u30C0\u30A4\u30A2\u30BF\u30C3\u30AF",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす ノーマルタイプの 攻撃。 相手の 素早さを 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  maxwyrmwind: {
    name: "\u30C0\u30A4\u30C9\u30E9\u30B0\u30FC\u30F3",
    // Official flavor text: "ダイマックスした ポケモンが 繰りだす ドラゴンタイプの 攻撃。 相手の 攻撃を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  meanlook: {
    name: "\u304F\u308D\u3044\u307E\u306A\u3056\u3057",
    // Official flavor text: "吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
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
  meditate: {
    name: "\u30E8\u30AC\u306E\u30DD\u30FC\u30BA",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mefirst: {
    name: "\u3055\u304D\u3069\u308A",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    }
  },
  megadrain: {
    name: "\u30E1\u30AC\u30C9\u30EC\u30A4\u30F3",
    // Official flavor text: "養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。"
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
    }
  },
  megahorn: {
    name: "\u30E1\u30AC\u30DB\u30FC\u30F3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megakick: {
    name: "\u30E1\u30AC\u30C8\u30F3\u30AD\u30C3\u30AF",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megapunch: {
    name: "\u30E1\u30AC\u30C8\u30F3\u30D1\u30F3\u30C1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  memento: {
    name: "\u304A\u304D\u307F\u3084\u3052",
    // Official flavor text: "自分は ひんしに なるが そのかわりに 相手の 攻撃と 特攻を がくっと さげる。"
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
    heal: "  {POKEMON}\u306F \uFF3A\u30D1\u30EF\u30FC\u3067 \u4F53\u529B\u304C \u56DE\u5FA9\u3057\u305F\uFF01"
  },
  menacingmoonrazemaelstrom: {
    name: "\u30E0\u30FC\u30F3\u30E9\u30A4\u30C8\u30D6\u30E9\u30B9\u30BF\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  metalburst: {
    name: "\u30E1\u30BF\u30EB\u30D0\u30FC\u30B9\u30C8",
    // Official flavor text: "技を だす前に 最後に 受けた 技の ダメージを 大きくして だした 相手に 返す。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  metalclaw: {
    name: "\u30E1\u30BF\u30EB\u30AF\u30ED\u30FC",
    // Official flavor text: "鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  metalsound: {
    name: "\u304D\u3093\u305E\u304F\u304A\u3093",
    // Official flavor text: "金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  meteorassault: {
    name: "\u30B9\u30BF\u30FC\u30A2\u30B5\u30EB\u30C8",
    // Official flavor text: "太い クキを ふりまわして 攻撃。 ただし 自分も よろめいてしまうため 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  meteorbeam: {
    name: "\u30E1\u30C6\u30AA\u30D3\u30FC\u30E0",
    // Official flavor text: "１ターン目に 宇宙の 力を 集めることで 特攻が あがり ２ターン目に 相手を 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    prepare: "{POKEMON}\u306B \u5B87\u5B99\u306E \u529B\u304C \u3042\u3075\u308C\u3060\u3059\uFF01"
  },
  meteormash: {
    name: "\u30B3\u30E1\u30C3\u30C8\u30D1\u30F3\u30C1",
    // Official flavor text: "すい星の ごとく パンチを くりだして 相手を 攻撃する。 自分の 攻撃が あがることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  metronome: {
    name: "\u3086\u3073\u3092\u3075\u308B",
    // Official flavor text: "指をふり 自分の 脳を 刺激して すべての 技の なかから どれか １つを くりだす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8bdsp: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen7letsgo: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    },
    move: "\u6307\u3092\u632F\u3063\u305F\u3089 {MOVE} \u304C\u3067\u305F\uFF01"
  },
  mightycleave: {
    name: "\u30D1\u30EF\u30D5\u30EB\u30A8\u30C3\u30B8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  milkdrink: {
    name: "\u30DF\u30EB\u30AF\u306E\u307F",
    // Official flavor text: "最大ＨＰの 半分 自分の ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  mimic: {
    name: "\u3082\u306E\u307E\u306D",
    // Official flavor text: "相手が 最後に 使った 技を 戦闘の あいだ 自分の 技に することが できる。"
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
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F {MOVE}\u3092 \u899A\u3048\u305F\uFF01"
  },
  mindblown: {
    name: "\u30D3\u30C3\u30AF\u30EA\u30D8\u30C3\u30C9",
    // Official flavor text: "自分の 頭を 爆発 させて 周りの すべてを 攻撃する。 自分も ダメージを 受けてしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: null
    // NEEDS TRANSLATION
  },
  mindreader: {
    name: "\u3053\u3053\u308D\u306E\u3081",
    // Official flavor text: "相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "#lockon"
  },
  minimize: {
    name: "\u3061\u3044\u3055\u304F\u306A\u308B",
    // Official flavor text: "体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。"
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
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  miracleeye: {
    name: "\u30DF\u30E9\u30AF\u30EB\u30A2\u30A4",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "#foresight"
  },
  mirrorcoat: {
    name: "\u30DF\u30E9\u30FC\u30B3\u30FC\u30C8",
    // Official flavor text: "相手から 受けた 特殊攻撃の ダメージを ２倍に して その相手に 返す。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  mirrormove: {
    name: "\u30AA\u30A6\u30E0\u304C\u3048\u3057",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  mirrorshot: {
    name: "\u30DF\u30E9\u30FC\u30B7\u30E7\u30C3\u30C8",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mist: {
    name: "\u3057\u308D\u3044\u304D\u308A",
    // Official flavor text: "白い霧で 体を おおう。 ５ターンの 間 相手に 能力を さげられなく なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null,
      // NEEDS TRANSLATION
      start: "  {POKEMON}\u306F \u3057\u308D\u3044\u304D\u308A\u306B\u3064\u3064\u307E\u308C\u305F\uFF01",
      block: "  {POKEMON}\u306F\u3057\u308D\u3044\u304D\u308A\u306B \u307E\u3082\u3089\u308C\u3066\u3044\u308B"
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      start: "  {POKEMON}\u306F \u3057\u308D\u3044\u304D\u308A\u306B\u3064\u3064\u307E\u308C\u305F\uFF01",
      block: "  \u3057\u304B\u3057\u3046\u307E\u304F\u6C7A\u307E\u3089\u306A\u304B\u3063\u305F\uFF01\uFF01"
    },
    start: "  {TEAM}\u306F \u767D\u3044\u9727\u306B \u5305\u307E\u308C\u305F\uFF01",
    end: "  {TEAM}\u3092 \u5305\u3093\u3067\u3044\u305F \u767D\u3044\u9727\u304C \u306A\u304F\u306A\u3063\u305F\uFF01",
    block: "  {POKEMON}\u306F \u767D\u3044\u9727\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  mistball: {
    name: "\u30DF\u30B9\u30C8\u30DC\u30FC\u30EB",
    // Official flavor text: "霧状の 羽毛で 包みこみ 攻撃する。 相手の 特攻を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistyexplosion: {
    name: "\u30DF\u30B9\u30C8\u30D0\u30FC\u30B9\u30C8",
    // Official flavor text: "自分の 周りに いる すべてを 攻撃するが 使うと 瀕死になる。 ミストフィールドで 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistyterrain: {
    name: "\u30DF\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9",
    // Official flavor text: "５ターンの 間 地面にいると 状態異常に ならず ドラゴン技の ダメージも 半分になる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  moonblast: {
    name: "\u30E0\u30FC\u30F3\u30D5\u30A9\u30FC\u30B9",
    // Official flavor text: "月の パワーを かりて 相手を 攻撃する。 相手の 特攻を さげる ことがある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  moongeistbeam: {
    name: "\u30B7\u30E3\u30C9\u30FC\u30EC\u30A4",
    // Official flavor text: "怪しい 光線を 放って 攻撃する。相手の 特性を 無視して 攻撃 することが できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moonlight: {
    name: "\u3064\u304D\u306E\u3072\u304B\u308A",
    // Official flavor text: "自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。"
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
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  morningsun: {
    name: "\u3042\u3055\u306E\u3072\u3056\u3057",
    // Official flavor text: "自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。"
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
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  mortalspin: {
    name: "\u30AD\u30E9\u30FC\u30B9\u30D4\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mountaingale: {
    name: "\u3072\u3087\u3046\u3056\u3093\u304A\u308D\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mudbomb: {
    name: "\u3069\u308D\u3070\u304F\u3060\u3093",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  muddywater: {
    name: "\u3060\u304F\u308A\u3085\u3046",
    // Official flavor text: "濁った 水を 相手に 発射して 攻撃する。 命中率を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mudshot: {
    name: "\u30DE\u30C3\u30C9\u30B7\u30E7\u30C3\u30C8",
    // Official flavor text: "泥の 塊を 相手に 投げつけて 攻撃する。 同時に 相手の 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mudslap: {
    name: "\u3069\u308D\u304B\u3051",
    // Official flavor text: "相手の 顔などに 泥を 投げつけて 攻撃する。 命中率を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mudsport: {
    name: "\u3069\u308D\u3042\u305D\u3073",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    }
  },
  multiattack: {
    name: "\u30DE\u30EB\u30C1\u30A2\u30BF\u30C3\u30AF",
    // Official flavor text: "高い エネルギーを まといつつ 相手に ぶつかって 攻撃する。 メモリに より タイプが 変わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mysticalfire: {
    name: "\u30DE\u30B8\u30AB\u30EB\u30D5\u30EC\u30A4\u30E0",
    // Official flavor text: "口から 吐きだす 特別 熱い 炎で 攻撃する。 相手の 特攻を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mysticalpower: {
    name: "\u3057\u3093\u3074\u306E\u3061\u304B\u3089",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  nastyplot: {
    name: "\u308F\u308B\u3060\u304F\u307F",
    // Official flavor text: "悪いことを 考えて 頭を 活性化させる。 自分の 特攻を ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  naturalgift: {
    name: "\u3057\u305C\u3093\u306E\u3081\u3050\u307F",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  naturepower: {
    name: "\u3057\u305C\u3093\u306E\u3061\u304B\u3089",
    // Official flavor text: "自然の 力で 攻撃する。 使う 場所で でてくる 技が 変化する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
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
    },
    move: "\u3057\u305C\u3093\u306E\u3061\u304B\u3089\u306F {MOVE} \u306B\u306A\u3063\u305F\uFF01"
  },
  naturesmadness: {
    name: "\u3057\u305C\u3093\u306E\u3044\u304B\u308A",
    // Official flavor text: "自然の 怒りを 相手に ぶつける。 相手の ＨＰは 半分に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  needlearm: {
    name: "\u30CB\u30FC\u30C9\u30EB\u30A2\u30FC\u30E0",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  neverendingnightmare: {
    name: "\u3080\u3052\u3093\u3042\u3093\u3084\u3078\u306E\u3044\u3056\u306A\u3044",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  nightdaze: {
    name: "\u30CA\u30A4\u30C8\u30D0\u30FC\u30B9\u30C8",
    // Official flavor text: "暗黒の 衝撃波を とばして 相手を 攻撃する。 命中率を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  nightmare: {
    name: "\u3042\u304F\u3080",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u60AA\u5922\u3092 \u898B\u59CB\u3081\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u60AA\u5922\u306B \u3046\u306A\u3055\u308C\u3066\u3044\u308B\uFF01"
  },
  nightshade: {
    name: "\u30CA\u30A4\u30C8\u30D8\u30C3\u30C9",
    // Official flavor text: "恐ろしい 幻を みせて 自分の レベルと 同じだけの ダメージを 相手に 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  nightslash: {
    name: "\u3064\u3058\u304E\u308A",
    // Official flavor text: "一瞬の すきを ついて 相手を 切りはらう。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  nobleroar: {
    name: "\u304A\u305F\u3051\u3073",
    // Official flavor text: "おたけびを あげて 相手を 威嚇し 相手の 攻撃と 特攻を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  noretreat: {
    name: "\u306F\u3044\u3059\u3044\u306E\u3058\u3093",
    // Official flavor text: "自分の すべての 能力が 上がるが 交代 したり 逃げることが できなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u306F\u3044\u3059\u3044\u306E\u3058\u3093\u3067 \u9003\u3052\u308B\u3053\u3068\u304C \u3067\u304D\u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  noxioustorque: {
    name: "\u30DD\u30A4\u30BA\u30F3\u30A2\u30AF\u30BB\u30EB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  nuzzle: {
    name: "\u307B\u3063\u307A\u3059\u308A\u3059\u308A",
    // Official flavor text: "電気を 帯びた ほっぺを すりつけて 攻撃。 相手を まひ状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  oblivionwing: {
    name: "\u30C7\u30B9\u30A6\u30A4\u30F3\u30B0",
    // Official flavor text: "ねらいを 定めた 相手から ＨＰを 吸い取る。 与えた ダメージの 半分以上 ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  obstruct: {
    name: "\u30D6\u30ED\u30C3\u30AD\u30F3\u30B0",
    // Official flavor text: "相手の 攻撃を まったく 受けない。 連続で だすと 失敗しやすい。 触れると 防御が がくっと 下がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  oceanicoperetta: {
    name: "\u308F\u3060\u3064\u307F\u306E\u30B7\u30F3\u30D5\u30A9\u30CB\u30A2",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  octazooka: {
    name: "\u30AA\u30AF\u30BF\u30F3\u307B\u3046",
    // Official flavor text: "相手の 顔などに 墨を 吹きかけて 攻撃する。 命中率を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  octolock: {
    name: "\u305F\u3053\u304C\u305F\u3081",
    // Official flavor text: "相手を 逃げられなくする。 かためられた 相手は 毎ターン 防御と 特防が 下がる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u305F\u3053\u304C\u305F\u3081\u3067 \u9003\u3052\u3089\u308C\u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  odorsleuth: {
    name: "\u304B\u304E\u308F\u3051\u308B",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    }
  },
  ominouswind: {
    name: "\u3042\u3084\u3057\u3044\u304B\u305C",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  orderup: {
    name: "\u3044\u3063\u3061\u3087\u3046\u3042\u304C\u308A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  originpulse: {
    name: "\u3053\u3093\u3052\u3093\u306E\u306F\u3069\u3046",
    // Official flavor text: "青白く 輝く 無数の 光線で 相手を 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  outrage: {
    name: "\u3052\u304D\u308A\u3093",
    // Official flavor text: "２ー３ターンの 間 暴れまくって 攻撃する。 暴れたあとは 混乱する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  overdrive: {
    name: "\u30AA\u30FC\u30D0\u30FC\u30C9\u30E9\u30A4\u30D6",
    // Official flavor text: "ギターや ベースを かきならして 激しく 響く 大きな 振動を 相手に 与えて 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  overheat: {
    name: "\u30AA\u30FC\u30D0\u30FC\u30D2\u30FC\u30C8",
    // Official flavor text: "フルパワーで 相手を 攻撃する。 使うと 反動で 自分の 特攻が がくっと さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  painsplit: {
    name: "\u3044\u305F\u307F\u308F\u3051",
    // Official flavor text: "自分の ＨＰと 相手の ＨＰを あわせて それを 自分と 相手で なかよく わける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u304A\u305F\u304C\u3044\u306E\u4F53\u529B\u3092 \u5206\u304B\u3061\u3042\u3063\u305F\uFF01"
  },
  paleowave: {
    name: null,
    // NEEDS TRANSLATION: not in PokeAPI
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  paraboliccharge: {
    name: "\u30D1\u30E9\u30DC\u30E9\u30C1\u30E3\u30FC\u30B8",
    // Official flavor text: "周りにいる ポケモン 全員に ダメージ。 与えた ダメージの 半分を 自分が 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  partingshot: {
    name: "\u3059\u3066\u30BC\u30EA\u30D5",
    // Official flavor text: "すてゼリフで 相手を いかくし 攻撃と 特攻を さげたのち 控えの ポケモンと 入れ替わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    heal: "#memento",
    switchOut: "#uturn"
  },
  payback: {
    name: "\u3057\u3063\u307A\u304C\u3048\u3057",
    // Official flavor text: "ためこんで 攻撃する。 相手より あとに 攻撃できると 技の 威力は ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  payday: {
    name: "\u30CD\u30B3\u306B\u3053\u3070\u3093",
    // Official flavor text: "相手の 体に 小判を 投げつけて 攻撃する。 戦闘の あとで お金が もらえる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u5C0F\u5224\u304C \u3042\u305F\u308A\u306B \u6563\u3089\u3070\u3063\u305F\uFF01"
  },
  peck: {
    name: "\u3064\u3064\u304F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  perishsong: {
    name: "\u307B\u308D\u3073\u306E\u3046\u305F",
    // Official flavor text: "歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \u307B\u308D\u3073\u306E\u3046\u305F\u3092 \u8074\u3044\u305F\u30DD\u30B1\u30E2\u30F3\u306F \uFF13\u30BF\u30FC\u30F3\u5F8C\u306B \u6EC5\u3073\u3066\u3057\u307E\u3046\uFF01",
    activate: "  {POKEMON}\u306E \u6EC5\u3073\u306E\u30AB\u30A6\u30F3\u30C8\u304C {NUMBER}\u306B\u306A\u3063\u305F\uFF01"
  },
  petalblizzard: {
    name: "\u306F\u306A\u3075\u3076\u304D",
    // Official flavor text: "激しい 花吹雪を 起こし 周りに いるものに 攻撃して ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  petaldance: {
    name: "\u306F\u306A\u3073\u3089\u306E\u307E\u3044",
    // Official flavor text: "２ー３ターンの 間 花を まきちらして 相手を 攻撃する。 まきちらした あとは 混乱する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  phantomforce: {
    name: "\u30B4\u30FC\u30B9\u30C8\u30C0\u30A4\u30D6",
    // Official flavor text: "１ターンめで どこかに 消えて ２ターンめに 相手を 攻撃する。 守りを 無視して 攻撃できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    prepare: "#shadowforce",
    activate: "#shadowforce"
  },
  photongeyser: {
    name: "\u30D5\u30A9\u30C8\u30F3\u30B2\u30A4\u30B6\u30FC",
    // Official flavor text: "光の 柱で 攻撃する。 攻撃と 特攻を 比べて 高いほうで ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pikapapow: {
    name: "\u30D4\u30AB\u30D4\u30AB\u30B5\u30F3\u30C0\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pinmissile: {
    name: "\u30DF\u30B5\u30A4\u30EB\u3070\u308A",
    // Official flavor text: "鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  plasmafists: {
    name: "\u30D7\u30E9\u30BA\u30DE\u30D5\u30A3\u30B9\u30C8",
    // Official flavor text: "電気を まとった こぶしで 攻撃。 ノーマルタイプの 技を でんきタイプに してしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  playnice: {
    name: "\u306A\u304B\u3088\u304F\u3059\u308B",
    // Official flavor text: "相手と なかよくなって 戦う 気力を 失わせ 相手の 攻撃を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  playrough: {
    name: "\u3058\u3083\u308C\u3064\u304F",
    // Official flavor text: "相手に じゃれついて 攻撃する。 相手の 攻撃を さげる ことがある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pluck: {
    name: "\u3064\u3044\u3070\u3080",
    // Official flavor text: "くちばしで 攻撃。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    removeItem: "#bugbite"
  },
  poisonfang: {
    name: "\u3069\u304F\u3069\u304F\u306E\u30AD\u30D0",
    // Official flavor text: "毒の ある キバで 相手に かみついて 攻撃する。 猛毒を おわせる ことが ある。"
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
  poisongas: {
    name: "\u3069\u304F\u30AC\u30B9",
    // Official flavor text: "毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  poisonjab: {
    name: "\u3069\u304F\u3065\u304D",
    // Official flavor text: "毒に そまった 触手や 腕で 相手を 突き刺す。 毒状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisonpowder: {
    name: "\u3069\u304F\u306E\u3053\u306A",
    // Official flavor text: "毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisonsting: {
    name: "\u3069\u304F\u3070\u308A",
    // Official flavor text: "毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  poisontail: {
    name: "\u30DD\u30A4\u30BA\u30F3\u30C6\u30FC\u30EB",
    // Official flavor text: "しっぽで たたく。 毒状態に することが あり 急所にも 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  polarflare: {
    name: null,
    // NEEDS TRANSLATION: not in PokeAPI
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pollenpuff: {
    name: "\u304B\u3075\u3093\u3060\u3093\u3054",
    // Official flavor text: "敵には 爆発する だんごを 使って 攻撃。 味方には 回復する だんごを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poltergeist: {
    name: "\u30DD\u30EB\u30BF\u30FC\u30AC\u30A4\u30B9\u30C8",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306B {ITEM}\u304C \u8972\u3044\u304B\u304B\u308B\uFF01"
  },
  populationbomb: {
    name: "\u30CD\u30BA\u30DF\u3056\u3093",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pounce: {
    name: "\u3068\u3073\u3064\u304F",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pound: {
    name: "\u306F\u305F\u304F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powder: {
    name: "\u3075\u3093\u3058\u3093",
    // Official flavor text: "ふんじんを 浴びせた 相手が ほのお技を 使うと 爆発して ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306B \u3075\u3093\u3058\u3093\u3092 \u3042\u3073\u305B\u305F\uFF01",
    activate: "  {MOVE}\u306B \u53CD\u5FDC\u3057\u3066 \u3075\u3093\u3058\u3093\u304C \u7206\u767A\u3057\u305F\uFF01"
  },
  powdersnow: {
    name: "\u3053\u306A\u3086\u304D",
    // Official flavor text: "冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  powergem: {
    name: "\u30D1\u30EF\u30FC\u30B8\u30A7\u30E0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powersplit: {
    name: "\u30D1\u30EF\u30FC\u30B7\u30A7\u30A2",
    // Official flavor text: "超能力で 自分と 相手の 攻撃と 特攻を たして 半分に わける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u304A\u305F\u304C\u3044\u306E\u30D1\u30EF\u30FC\u3092 \u30B7\u30A7\u30A2\u3057\u305F\uFF01"
  },
  powerswap: {
    name: "\u30D1\u30EF\u30FC\u30B9\u30EF\u30C3\u30D7",
    // Official flavor text: "超能力で 自分と 相手の 攻撃と 特攻の 能力変化を 入れ替える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powershift: {
    name: "\u30D1\u30EF\u30FC\u30B7\u30D5\u30C8",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u653B\u3081\u306E\u529B\u3068 \u5B88\u308A\u306E\u529B\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01",
    end: "#.start"
  },
  powertrick: {
    name: "\u30D1\u30EF\u30FC\u30C8\u30EA\u30C3\u30AF",
    // Official flavor text: "超能力で 自分の 攻撃と 防御の 力を 交換する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u653B\u6483\u3068 \u9632\u5FA1\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01",
    end: "#.start"
  },
  powertrip: {
    name: "\u3064\u3051\u3042\u304C\u308B",
    // Official flavor text: "自分の 強さを 鼻高々に 攻撃する。自分の 能力が あがって いるほど 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poweruppunch: {
    name: "\u30B0\u30ED\u30A6\u30D1\u30F3\u30C1",
    // Official flavor text: "繰り返し 打つことで だんだん こぶしが 固くなる。 相手に 当てると 攻撃が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powerwhip: {
    name: "\u30D1\u30EF\u30FC\u30A6\u30A3\u30C3\u30D7",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  precipiceblades: {
    name: "\u3060\u3093\u304C\u3044\u306E\u3064\u308B\u304E",
    // Official flavor text: "大地の 力を 刃に 変えて 相手を 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  present: {
    name: "\u30D7\u30EC\u30BC\u30F3\u30C8",
    // Official flavor text: "わなを しかけた 箱を 相手に わたして 攻撃する。ＨＰが 回復して しまうことも ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  prismaticlaser: {
    name: "\u30D7\u30EA\u30BA\u30E0\u30EC\u30FC\u30B6\u30FC",
    // Official flavor text: "プリズムの 力で 強力な 光線を 発射する。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  protect: {
    name: "\u307E\u3082\u308B",
    // Official flavor text: "相手の 攻撃を まったく 受けない。 連続で だすと 失敗しやすい。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u5B88\u308A\u306E \u4F53\u52E2\u306B \u5165\u3063\u305F\uFF01",
    block: "  {POKEMON}\u306F \u653B\u6483\u304B\u3089 \u8EAB\u3092\u5B88\u3063\u305F\uFF01"
  },
  psybeam: {
    name: "\u30B5\u30A4\u30B1\u3053\u3046\u305B\u3093",
    // Official flavor text: "不思議な 光線を 相手に 発射して 攻撃する。 混乱させることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psyblade: {
    name: "\u30B5\u30A4\u30B3\u30D6\u30EC\u30A4\u30C9",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psychic: {
    name: "\u30B5\u30A4\u30B3\u30AD\u30CD\u30B7\u30B9",
    // Official flavor text: "強い 念力を 相手に 送って 攻撃する。 相手の 特防を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  psychicfangs: {
    name: "\u30B5\u30A4\u30B3\u30D5\u30A1\u30F3\u30B0",
    // Official flavor text: "サイコパワーで かみついて 相手を 攻撃する。 ひかりのかべや リフレクター なども 破壊できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psychicnoise: {
    name: "\u30B5\u30A4\u30B3\u30CE\u30A4\u30BA",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psychicterrain: {
    name: "\u30B5\u30A4\u30B3\u30D5\u30A3\u30FC\u30EB\u30C9",
    // Official flavor text: "５ターンの間 地面にいると 先制技を 受けない。 エスパータイプの 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  psychoboost: {
    name: "\u30B5\u30A4\u30B3\u30D6\u30FC\u30B9\u30C8",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psychocut: {
    name: "\u30B5\u30A4\u30B3\u30AB\u30C3\u30BF\u30FC",
    // Official flavor text: "実体化させた 心の 刃で 相手を 切り裂く。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psychoshift: {
    name: "\u30B5\u30A4\u30B3\u30B7\u30D5\u30C8",
    // Official flavor text: "超能力で 暗示を かけて 自分の 受けている 状態異常を 相手に うつす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psychup: {
    name: "\u3058\u3053\u3042\u3093\u3058",
    // Official flavor text: "自分に 暗示を かけることで 能力変化の 状態を 相手と 同じにする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  psyshieldbash: {
    name: "\u30D0\u30EA\u30A2\u30FC\u30E9\u30C3\u30B7\u30E5",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psyshock: {
    name: "\u30B5\u30A4\u30B3\u30B7\u30E7\u30C3\u30AF",
    // Official flavor text: "不思議な 念波を 実体化して 相手を 攻撃する。 物理的な ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psystrike: {
    name: "\u30B5\u30A4\u30B3\u30D6\u30EC\u30A4\u30AF",
    // Official flavor text: "不思議な 念波を 実体化して 相手を 攻撃する。 物理的な ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  psywave: {
    name: "\u30B5\u30A4\u30B3\u30A6\u30A7\u30FC\u30D6",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  pulverizingpancake: {
    name: "\u307B\u3093\u304D\u3092\u3060\u3059 \u3053\u3046\u3052\u304D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  punishment: {
    name: "\u304A\u3057\u304A\u304D",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purify: {
    name: "\u3058\u3087\u3046\u304B",
    // Official flavor text: "相手の 状態異常を 治す。 治すと 自分は ＨＰを 回復 することが できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pursuit: {
    name: "\u304A\u3044\u3046\u3061",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
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
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: null
    // NEEDS TRANSLATION
  },
  pyroball: {
    name: "\u304B\u3048\u3093\u30DC\u30FC\u30EB",
    // Official flavor text: "小石を 燃やした 炎の ボールで 相手を 攻撃する。 やけど 状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  quash: {
    name: "\u3055\u304D\u304A\u304F\u308A",
    // Official flavor text: "相手を おさえつけて 行動の 順番を 最後に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {TARGET}\u306E \u9806\u756A\u3092 \u5148\u9001\u308A\u3057\u305F\uFF01"
  },
  quickattack: {
    name: "\u3067\u3093\u3053\u3046\u305B\u3063\u304B",
    // Official flavor text: "目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  quickguard: {
    name: "\u30D5\u30A1\u30B9\u30C8\u30AC\u30FC\u30C9",
    // Official flavor text: "自分と 味方を 相手の 先制攻撃から 守る。"
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
    start: "  {TEAM}\u306F \u30D5\u30A1\u30B9\u30C8\u30AC\u30FC\u30C9\u3067 \u5B88\u3089\u308C\u305F\uFF01",
    block: "  {POKEMON}\u306F \u30D5\u30A1\u30B9\u30C8\u30AC\u30FC\u30C9\u3067 \u5B88\u3089\u308C\u305F\uFF01"
  },
  quiverdance: {
    name: "\u3061\u3087\u3046\u306E\u307E\u3044",
    // Official flavor text: "神秘的で 美しい 舞を 軽やかに おどる。 自分の 特攻と 特防と 素早さを あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rage: {
    name: "\u3044\u304B\u308A",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  ragefist: {
    name: "\u3075\u3093\u3069\u306E\u3053\u3076\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  ragepowder: {
    name: "\u3044\u304B\u308A\u306E\u3053\u306A",
    // Official flavor text: "イライラさせる 粉を 自分に ふりかけて 注意を ひく。 相手の 攻撃を すべて 自分に むける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "#followme",
    startFromZEffect: "#followme"
  },
  ragingbull: {
    name: "\u30EC\u30A4\u30B8\u30F3\u30B0\u30D6\u30EB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  },
  ragingfury: {
    name: "\u3060\u3044\u3075\u3093\u3052\u304D",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  raindance: {
    name: "\u3042\u307E\u3054\u3044",
    // Official flavor text: "５ターンの 間 雨を 降らせて みずタイプの 威力を あげる。 ほのおタイプの 威力は さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  rapidspin: {
    name: "\u3053\u3046\u305D\u304F\u30B9\u30D4\u30F3",
    // Official flavor text: "回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ など 吹きとばす。自分の 素早さも あがる。"
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
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  razorleaf: {
    name: "\u306F\u3063\u3071\u30AB\u30C3\u30BF\u30FC",
    // Official flavor text: "はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  razorshell: {
    name: "\u30B7\u30A7\u30EB\u30D6\u30EC\u30FC\u30C9",
    // Official flavor text: "鋭い 貝殻で 切りつけて 攻撃する。 相手の 防御を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  razorwind: {
    name: "\u304B\u307E\u3044\u305F\u3061",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    prepare: "  {POKEMON}\u306E \u5468\u308A\u3067 \u7A7A\u6C17\u304C \u6E26\u3092\u5DFB\u304F\uFF01"
  },
  recover: {
    name: "\u3058\u3053\u3055\u3044\u305B\u3044",
    // Official flavor text: "細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  recycle: {
    name: "\u30EA\u30B5\u30A4\u30AF\u30EB",
    // Official flavor text: "戦闘中に 使って なくなった 自分の 持ち物を 再生させて 使えるように する。"
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
    },
    addItem: "  {POKEMON}\u306F {ITEM}\u3092 \u62FE\u3063\u3066\u304D\u305F\uFF01"
  },
  reflect: {
    name: "\u30EA\u30D5\u30EC\u30AF\u30BF\u30FC",
    // Official flavor text: "５ターンの 間 不思議な かべで 相手から 受ける 物理攻撃の ダメージを 弱める。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null,
      // NEEDS TRANSLATION
      start: "  {POKEMON}\u306F \u3060\u3052\u304D\u3053\u3046\u3052\u304D\u306B \u3064\u3088\u304F\u306A\u3063\u305F\uFF01"
    },
    start: "  {TEAM}\u306F \u30EA\u30D5\u30EC\u30AF\u30BF\u30FC\u3067 \u7269\u7406\u306B \u5F37\u304F\u306A\u3063\u305F\uFF01",
    end: "  {TEAM}\u306E \u30EA\u30D5\u30EC\u30AF\u30BF\u30FC\u304C \u306A\u304F\u306A\u3063\u305F\uFF01"
  },
  reflecttype: {
    name: "\u30DF\u30E9\u30FC\u30BF\u30A4\u30D7",
    // Official flavor text: "相手の タイプを 反射して 自分も 同じ タイプに なる。"
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
    typeChange: "  {POKEMON}\u306F {SOURCE}\u3068 \u540C\u3058\u30BF\u30A4\u30D7\u306B \u306A\u3063\u305F\uFF01"
  },
  refresh: {
    name: "\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  relicsong: {
    name: "\u3044\u306B\u3057\u3048\u306E\u3046\u305F",
    // Official flavor text: "いにしえのうたを 相手に 聞かせて 心に うったえて 攻撃する。 眠り状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rest: {
    name: "\u306D\u3080\u308B",
    // Official flavor text: "２ターンの 間 眠り続ける。 自分の ＨＰと 状態異常を すべて 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  retaliate: {
    name: "\u304B\u305F\u304D\u3046\u3061",
    // Official flavor text: "倒れた 味方の かたきを 討つ。 前の ターンに 味方が 倒されていると 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  return: {
    name: "\u304A\u3093\u304C\u3048\u3057",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  revelationdance: {
    name: "\u3081\u3056\u3081\u308B\u30C0\u30F3\u30B9",
    // Official flavor text: "全力で 踊って 攻撃する。 この 技の タイプは 自分の タイプと 同じになる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  revenge: {
    name: "\u30EA\u30D9\u30F3\u30B8",
    // Official flavor text: "相手から 技を 受けていると その相手に 対して 与える ダメージが ２倍に なる。"
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
  reversal: {
    name: "\u304D\u3057\u304B\u3044\u305B\u3044",
    // Official flavor text: "力を ふりしぼり 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は あがる。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  revivalblessing: {
    name: "\u3055\u3044\u304D\u306E\u3044\u306E\u308A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    heal: "  {POKEMON}\u306F \u5FA9\u6D3B\u3057\u3066 \u6226\u3048\u308B\u3088\u3046\u306B\u306A\u3063\u305F\uFF01"
  },
  risingvoltage: {
    name: "\u30E9\u30A4\u30B8\u30F3\u30B0\u30DC\u30EB\u30C8",
    // Official flavor text: "地面から 立ちのぼる 電撃で 攻撃。 相手が エレキフィールドに いる時 技の 威力が ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  roar: {
    name: "\u307B\u3048\u308B",
    // Official flavor text: "相手を 逃がして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  roaroftime: {
    name: "\u3068\u304D\u306E\u307B\u3046\u3053\u3046",
    // Official flavor text: "時間が ゆがむほどの 力を うちだして 相手を 攻撃する。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockblast: {
    name: "\u30ED\u30C3\u30AF\u30D6\u30E9\u30B9\u30C8",
    // Official flavor text: "硬い 岩石を 相手に 発射して 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
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
  rockclimb: {
    name: "\u30ED\u30C3\u30AF\u30AF\u30E9\u30A4\u30E0",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockpolish: {
    name: "\u30ED\u30C3\u30AF\u30AB\u30C3\u30C8",
    // Official flavor text: "自分の 体を 磨いて 空気の 抵抗を 少なくする。素早さを ぐーんと あげることが できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockslide: {
    name: "\u3044\u308F\u306A\u3060\u308C",
    // Official flavor text: "大きな 岩を 激しく ぶつけて 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  rocksmash: {
    name: "\u3044\u308F\u304F\u3060\u304D",
    // Official flavor text: "パンチで 攻撃する。相手の 防御を さげる ことが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockthrow: {
    name: "\u3044\u308F\u304A\u3068\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rocktomb: {
    name: "\u304C\u3093\u305B\u304D\u3075\u3046\u3058",
    // Official flavor text: "岩石を 投げつけて 攻撃する。 相手の 動きを 封じることで 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockwrecker: {
    name: "\u304C\u3093\u305B\u304D\u307B\u3046",
    // Official flavor text: "巨大な 岩を 相手に 発射して 攻撃する。 次の ターンは 動けなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  roleplay: {
    name: "\u306A\u308A\u304D\u308A",
    // Official flavor text: "相手に なりきって 自分も 相手と 同じ 特性に 変化する。"
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
    changeAbility: "  {POKEMON}\u306F {SOURCE}\u306E {ABILITY}\u3092 \u30B3\u30D4\u30FC\u3057\u305F\uFF01"
  },
  rollingkick: {
    name: "\u307E\u308F\u3057\u3052\u308A",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rollout: {
    name: "\u3053\u308D\u304C\u308B",
    // Official flavor text: "５ターンの 間 転がり続けて 攻撃する。 技が 当たるたびに 威力が あがる。"
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
    }
  },
  roost: {
    name: "\u306F\u306D\u3084\u3059\u3081",
    // Official flavor text: "地面に 降りて 体を やすめる。 最大ＨＰの 半分の ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: null
    // NEEDS TRANSLATION
  },
  rototiller: {
    name: "\u305F\u304C\u3084\u3059",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  round: {
    name: "\u308A\u3093\u3057\u3087\u3046",
    // Official flavor text: "歌で 相手を 攻撃する。 みんなで 輪唱すると 続けて だすことが でき 威力も あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ruination: {
    name: "\u30AB\u30BF\u30B9\u30C8\u30ED\u30D5\u30A3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sacredfire: {
    name: "\u305B\u3044\u306A\u308B\u307B\u306E\u304A",
    // Official flavor text: "神秘の 炎で 相手を 焼きつくして 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sacredsword: {
    name: "\u305B\u3044\u306A\u308B\u3064\u308B\u304E",
    // Official flavor text: "長い つので 切りつけ 攻撃する。 相手の 能力変化に 関係なく ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  safeguard: {
    name: "\u3057\u3093\u3074\u306E\u307E\u3082\u308A",
    // Official flavor text: "５ターンの 間 不思議な 力に 守られて 状態異常に ならなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {TEAM}\u306F \u795E\u79D8\u306E\u30D9\u30FC\u30EB\u306B \u5305\u307E\u308C\u305F\uFF01",
    end: "  {TEAM}\u3092 \u5305\u3093\u3067\u3044\u305F \u795E\u79D8\u306E\u30D9\u30FC\u30EB\u304C \u306A\u304F\u306A\u3063\u305F\uFF01",
    block: "  {POKEMON}\u306F \u795E\u79D8\u306E\u30D9\u30FC\u30EB\u306B \u5B88\u3089\u308C\u3066\u3044\u308B\uFF01"
  },
  saltcure: {
    name: "\u3057\u304A\u3065\u3051",
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
    start: "  {POKEMON}\u306F \u3057\u304A\u3065\u3051\u306B \u306A\u3063\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u3057\u304A\u3065\u3051\u306E \u30C0\u30E1\u30FC\u30B8\u3092 \u53D7\u3051\u3066\u3044\u308B"
  },
  sandattack: {
    name: "\u3059\u306A\u304B\u3051",
    // Official flavor text: "相手の 顔に 砂を かけて 命中率を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandsearstorm: {
    name: "\u306D\u3063\u3055\u306E\u3042\u3089\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandstorm: {
    name: "\u3059\u306A\u3042\u3089\u3057",
    // Official flavor text: "５ターンの 間 砂あらしで いわ じめん はがねタイプ 以外に ダメージ。 いわタイプの 特防が あがる。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sandtomb: {
    name: "\u3059\u306A\u3058\u3054\u304F",
    // Official flavor text: "激しく 吹きあれる 砂あらしの 中に ４ー５ターンの 間 相手を 閉じこめて 攻撃する。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u7802\u3058\u3054\u304F\u306B \u6355\u3089\u308F\u308C\u305F\uFF01"
  },
  sappyseed: {
    name: "\u3059\u304F\u3059\u304F\u30DC\u30F3\u30D0\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  savagespinout: {
    name: "\u305C\u3063\u305F\u3044\u307B\u3057\u3087\u304F\u304B\u3044\u3066\u3093\u3056\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  scald: {
    name: "\u306D\u3063\u3068\u3046",
    // Official flavor text: "熱く 煮えたぎる 水を 相手に 発射して 攻撃する。 やけど状態に することが ある。"
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
  scaleshot: {
    name: "\u30B9\u30B1\u30A4\u30EB\u30B7\u30E7\u30C3\u30C8",
    // Official flavor text: "ウロコを 撃ちだして 攻撃する。 ２ー５回の 間 連続で だす。 素早さが あがるが 防御が さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  scaryface: {
    name: "\u3053\u308F\u3044\u304B\u304A",
    // Official flavor text: "恐ろしい 顔で にらみ おびえさせて 相手の 素早さを がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  scorchingsands: {
    name: "\u306D\u3063\u3055\u306E\u3060\u3044\u3061",
    // Official flavor text: "熱く 焼けた 砂を 相手に ぶつけて 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  scratch: {
    name: "\u3072\u3063\u304B\u304F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  screech: {
    name: "\u3044\u3084\u306A\u304A\u3068",
    // Official flavor text: "おもわず 耳を ふさぎたくなる いやなおとを だして 相手の 防御を がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  searingshot: {
    name: "\u304B\u3048\u3093\u3060\u3093",
    // Official flavor text: "真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  searingsunrazesmash: {
    name: "\u30B5\u30F3\u30B7\u30E3\u30A4\u30F3\u30B9\u30DE\u30C3\u30B7\u30E3\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  secretpower: {
    name: "\u3072\u307F\u3064\u306E\u3061\u304B\u3089",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
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
    }
  },
  secretsword: {
    name: "\u3057\u3093\u3074\u306E\u3064\u308B\u304E",
    // Official flavor text: "長い つので 切りつけ 攻撃する。 つのが まとった 不思議な 力は 物理的な ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seedbomb: {
    name: "\u30BF\u30CD\u3070\u304F\u3060\u3093",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seedflare: {
    name: "\u30B7\u30FC\u30C9\u30D5\u30EC\u30A2",
    // Official flavor text: "体の 中から 衝撃波を 発生させる。相手の 特防を がくっと さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seismictoss: {
    name: "\u3061\u304D\u3085\u3046\u306A\u3052",
    // Official flavor text: "引力を 使い 投げとばす。 自分の レベルと 同じ ダメージを 相手に 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  selfdestruct: {
    name: "\u3058\u3070\u304F",
    // Official flavor text: "爆発を おこして 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  shadowball: {
    name: "\u30B7\u30E3\u30C9\u30FC\u30DC\u30FC\u30EB",
    // Official flavor text: "黒い影の 塊を 投げつけて 攻撃する。 相手の 特防を さげることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowbone: {
    name: "\u30B7\u30E3\u30C9\u30FC\u30DC\u30FC\u30F3",
    // Official flavor text: "魂の 宿った ホネで 相手を なぐりつけて 攻撃する。 相手の 防御を さげる ことがある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowclaw: {
    name: "\u30B7\u30E3\u30C9\u30FC\u30AF\u30ED\u30FC",
    // Official flavor text: "影から つくった 鋭い ツメで 相手を 切り裂く。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowforce: {
    name: "\u30B7\u30E3\u30C9\u30FC\u30C0\u30A4\u30D6",
    // Official flavor text: "１ターン目で 姿を 消して ２ターン目に 相手を 攻撃する。 守っていても 攻撃は 当たる。"
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
    activate: "  {TARGET}\u306E \u5B88\u308A\u3092 \u6253\u3061\u7834\u3063\u305F\uFF01",
    prepare: "{POKEMON}\u306E\u59FF\u304C \u4E00\u77AC\u306B\u3057\u3066 \u6D88\u3048\u305F\uFF01"
  },
  shadowpunch: {
    name: "\u30B7\u30E3\u30C9\u30FC\u30D1\u30F3\u30C1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowsneak: {
    name: "\u304B\u3052\u3046\u3061",
    // Official flavor text: "影を のばして 相手の 背後から 攻撃する。 必ず 先制攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowstrike: {
    name: null,
    // NEEDS TRANSLATION: not in PokeAPI
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sharpen: {
    name: "\u304B\u304F\u3070\u308B",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shatteredpsyche: {
    name: "\u30DE\u30AD\u30B7\u30DE\u30E0\u30B5\u30A4\u30D6\u30EC\u30A4\u30AB\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shedtail: {
    name: "\u3057\u3063\u307D\u304D\u308A",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u3057\u3063\u307D\u3092 \u5207\u3063\u3066 \u307F\u304C\u308F\u308A\u306B\u3057\u305F\uFF01",
    alreadyStarted: "#substitute",
    fail: "#substitute"
  },
  sheercold: {
    name: "\u305C\u3063\u305F\u3044\u308C\u3044\u3069",
    // Official flavor text: "相手を 一撃で 瀕死に する。 こおりタイプ 以外の ポケモンが 使うと 当たりにくい。"
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
  shellsidearm: {
    name: "\u30B7\u30A7\u30EB\u30A2\u30FC\u30E0\u30BA",
    // Official flavor text: "物理か 特殊か より多く ダメージを 与えられる 能力で 攻撃する。 毒状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shellsmash: {
    name: "\u304B\u3089\u3092\u3084\u3076\u308B",
    // Official flavor text: "殻を やぶって 自分の 防御 特防を さげるが 攻撃 特攻 素早さを ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shelltrap: {
    name: "\u30C8\u30E9\u30C3\u30D7\u30B7\u30A7\u30EB",
    // Official flavor text: "こうらの トラップを しかける。 相手が 物理技を 出すと 爆発して ダメージを 与える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u30C8\u30E9\u30C3\u30D7\u30B7\u30A7\u30EB\u3092 \u4ED5\u639B\u3051\u305F\uFF01",
    prepare: "  {POKEMON}\u306F \u30C8\u30E9\u30C3\u30D7\u30B7\u30A7\u30EB\u3092 \u4ED5\u639B\u3051\u305F\uFF01",
    cant: "{POKEMON}\u306E \u30C8\u30E9\u30C3\u30D7\u30B7\u30A7\u30EB\u306F \u4E0D\u767A\u306B \u7D42\u308F\u3063\u305F\uFF01"
  },
  shelter: {
    name: "\u305F\u3066\u3053\u3082\u308B",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shiftgear: {
    name: "\u30AE\u30A2\u30C1\u30A7\u30F3\u30B8",
    // Official flavor text: "歯車を 回して 自分の 攻撃を あげる だけでなく 素早さも ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shockwave: {
    name: "\u3067\u3093\u3052\u304D\u306F",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shoreup: {
    name: "\u3059\u306A\u3042\u3064\u3081",
    // Official flavor text: "最大ＨＰの 半分 自分の ＨＰを 回復する。 すなあらしの時は 多く 回復。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  signalbeam: {
    name: "\u30B7\u30B0\u30CA\u30EB\u30D3\u30FC\u30E0",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  silktrap: {
    name: "\u30B9\u30EC\u30C3\u30C9\u30C8\u30E9\u30C3\u30D7",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  silverwind: {
    name: "\u304E\u3093\u3044\u308D\u306E\u304B\u305C",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  simplebeam: {
    name: "\u30B7\u30F3\u30D7\u30EB\u30D3\u30FC\u30E0",
    // Official flavor text: "なぞの 念波を 相手に 送る。 念波を 受けとった 相手は 特性が たんじゅんに なる。"
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
    }
  },
  sing: {
    name: "\u3046\u305F\u3046",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sinisterarrowraid: {
    name: "\u30B7\u30E3\u30C9\u30FC\u30A2\u30ED\u30FC\u30BA\u30B9\u30C8\u30E9\u30A4\u30AF",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sizzlyslide: {
    name: "\u3081\u3089\u3081\u3089\u30D0\u30FC\u30F3",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sketch: {
    name: "\u30B9\u30B1\u30C3\u30C1",
    // Official flavor text: "相手が 使った 技を 自分の ものに する。 １回 使うと スケッチは 消える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON}\u306F {MOVE}\u3092 \u30B9\u30B1\u30C3\u30C1\u3057\u305F\uFF01"
  },
  skillswap: {
    name: "\u30B9\u30AD\u30EB\u30B9\u30EF\u30C3\u30D7",
    // Official flavor text: "超能力で 自分の 特性と 相手の 特性を 入れ替える。"
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
    activate: "  {POKEMON}\u306F \u304A\u305F\u304C\u3044\u306E \u7279\u6027\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01"
  },
  skittersmack: {
    name: "\u306F\u3044\u3088\u308B\u3044\u3061\u3052\u304D",
    // Official flavor text: "背後から はいより 攻撃する。 相手の 特攻を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  skullbash: {
    name: "\u30ED\u30B1\u30C3\u30C8\u305A\u3064\u304D",
    // Official flavor text: "１ターン目に 頭を ひっこめて 防御を あげる。 ２ターン目に 相手を 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    prepare: "{POKEMON}\u306F \u9996\u3092 \u5F15\u3063\u3053\u3081\u305F\uFF01"
  },
  skyattack: {
    name: "\u30B4\u30C3\u30C9\u30D0\u30FC\u30C9",
    // Official flavor text: "２ターン目に 相手を 攻撃する。 たまに ひるませる。 急所にも 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    prepare: "{POKEMON}\u3092 \u6FC0\u3057\u3044\u5149\u304C \u5305\u3080\uFF01"
  },
  skydrop: {
    name: "\u30D5\u30EA\u30FC\u30D5\u30A9\u30FC\u30EB",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    prepare: "{POKEMON}\u306F {TARGET}\u3092 \u4E0A\u7A7A\u306B \u9023\u308C\u53BB\u3063\u305F\uFF01",
    end: "  {POKEMON}\u306F \u30D5\u30EA\u30FC\u30D5\u30A9\u30FC\u30EB\u304B\u3089 \u89E3\u653E\u3055\u308C\u305F\uFF01",
    failSelect: "{POKEMON}\u306F \u30D5\u30EA\u30FC\u30D5\u30A9\u30FC\u30EB\u3067 \u81EA\u7531\u306B \u306A\u3089\u306A\u3044\uFF01",
    failTooHeavy: "  {POKEMON}\u306F \u91CD\u3059\u304E\u3066 \u6301\u3061\u4E0A\u3052\u3089\u308C\u306A\u3044\uFF01"
  },
  skyuppercut: {
    name: "\u30B9\u30AB\u30A4\u30A2\u30C3\u30D1\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
  slackoff: {
    name: "\u306A\u307E\u3051\u308B",
    // Official flavor text: "怠けて やすむ。 自分の ＨＰを 最大ＨＰの 半分 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  slam: {
    name: "\u305F\u305F\u304D\u3064\u3051\u308B",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  slash: {
    name: "\u304D\u308A\u3055\u304F",
    // Official flavor text: "ツメや カマなどで 相手を 切り裂いて 攻撃する。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sleeppowder: {
    name: "\u306D\u3080\u308A\u3054\u306A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sleeptalk: {
    name: "\u306D\u3054\u3068",
    // Official flavor text: "自分が おぼえている 技の うち どれか １つを くりだす。 自分が 寝ているときだけ 使える。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sludge: {
    name: "\u30D8\u30C9\u30ED\u3053\u3046\u3052\u304D",
    // Official flavor text: "汚い ヘドロを 相手に 投げつけて 攻撃する。 毒状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sludgebomb: {
    name: "\u30D8\u30C9\u30ED\u3070\u304F\u3060\u3093",
    // Official flavor text: "汚い ヘドロを 相手に 投げつけて 攻撃する。 毒状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sludgewave: {
    name: "\u30D8\u30C9\u30ED\u30A6\u30A7\u30FC\u30D6",
    // Official flavor text: "ヘドロの 波で 自分の 周りに いるものを 攻撃する。 毒状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  smackdown: {
    name: "\u3046\u3061\u304A\u3068\u3059",
    // Official flavor text: "石や 弾を 投げて 飛んでいる 相手を 攻撃する。 相手は うち落とされて 地面に 落ちる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u6483\u3061\u843D\u3068\u3055\u308C\u3066 \u5730\u9762\u306B \u843D\u3061\u305F\uFF01"
  },
  smartstrike: {
    name: "\u30B9\u30DE\u30FC\u30C8\u30DB\u30FC\u30F3",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  smellingsalts: {
    name: "\u304D\u3064\u3051",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
  smog: {
    name: "\u30B9\u30E2\u30C3\u30B0",
    // Official flavor text: "汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  smokescreen: {
    name: "\u3048\u3093\u307E\u304F",
    // Official flavor text: "煙や 墨などを 吹きかけて 相手の 命中率を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snaptrap: {
    name: "\u30C8\u30E9\u30D0\u30B5\u30DF",
    // Official flavor text: "トラバサミで 捕らえて ４－５ターンの 間 相手を はさんで 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u30C8\u30E9\u30D0\u30B5\u30DF\u306B \u6355\u3089\u308F\u308C\u305F\uFF01"
  },
  snarl: {
    name: "\u30D0\u30FC\u30AF\u30A2\u30A6\u30C8",
    // Official flavor text: "まくしたてる ように 怒鳴りつけて 相手の 特攻を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snatch: {
    name: "\u3088\u3053\u3069\u308A",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u76F8\u624B\u306E \u3067\u304B\u305F\u3092 \u3046\u304B\u304C\u3063\u3066\u3044\u308B\uFF01",
    activate: "  {POKEMON}\u306F {TARGET}\u306E \u6280\u3092 \u6A2A\u53D6\u308A\u3057\u305F\uFF01"
  },
  snipeshot: {
    name: "\u306D\u3089\u3044\u3046\u3061",
    // Official flavor text: "相手の 技を 引き受ける 特性や 技の 影響を 無視して 選んだ 相手を 攻撃 できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snore: {
    name: "\u3044\u3073\u304D",
    // Official flavor text: "自分が 寝ているときに 雑音を だして 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snowscape: {
    name: "\u3086\u304D\u3052\u3057\u304D",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soak: {
    name: "\u307F\u305A\u3073\u305F\u3057",
    // Official flavor text: "たくさんの 水を 浴びせかけて 相手を みずタイプに する。"
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
  softboiled: {
    name: "\u30BF\u30DE\u30B4\u3046\u307F",
    // Official flavor text: "最大ＨＰの 半分 自分の ＨＰを 回復する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  solarbeam: {
    name: "\u30BD\u30FC\u30E9\u30FC\u30D3\u30FC\u30E0",
    // Official flavor text: "１ターン目に 光を いっぱいに 集め ２ターン目に 光の 束を 発射して 攻撃する。"
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    prepare: "  {POKEMON}\u306F \u5149\u3092 \u5438\u53CE\u3057\u305F\uFF01"
  },
  solarblade: {
    name: "\u30BD\u30FC\u30E9\u30FC\u30D6\u30EC\u30FC\u30C9",
    // Official flavor text: "１ターン目に 光を いっぱいに 集め ２ターン目に その 力を 剣に 込めて 攻撃する。"
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
    prepare: "#solarbeam"
  },
  sonicboom: {
    name: "\u30BD\u30CB\u30C3\u30AF\u30D6\u30FC\u30E0",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  soulstealing7starstrike: {
    name: "\u3057\u3061\u305B\u3044\u3060\u3063\u3053\u3093\u305F\u3044",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spacialrend: {
    name: "\u3042\u304F\u3046\u305B\u3064\u3060\u3093",
    // Official flavor text: "周りの 空間ごと 相手を 引き裂き ダメージを 与える。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spark: {
    name: "\u30B9\u30D1\u30FC\u30AF",
    // Official flavor text: "電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sparklingaria: {
    name: "\u3046\u305F\u304B\u305F\u306E\u30A2\u30EA\u30A2",
    // Official flavor text: "歌うことによって たくさんの バルーンを 放出する。 技を 受けると やけどが 治る。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sparklyswirl: {
    name: "\u304D\u3089\u304D\u3089\u30B9\u30C8\u30FC\u30E0",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spectralthief: {
    name: "\u30B7\u30E3\u30C9\u30FC\u30B9\u30C1\u30FC\u30EB",
    // Official flavor text: "相手の 影に 潜り込み 相手の 能力アップを 奪って 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    clearBoost: "  {SOURCE}\u306F \u4E0A\u304C\u3063\u305F \u80FD\u529B\u3092 \u596A\u3044\u53D6\u3063\u305F\uFF01"
  },
  speedswap: {
    name: "\u30B9\u30D4\u30FC\u30C9\u30B9\u30EF\u30C3\u30D7",
    // Official flavor text: "相手の 素早さと 自分の 素早さを 入れ替えてしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F \u304A\u305F\u304C\u3044\u306E \u30B9\u30D4\u30FC\u30C9\u3092 \u5165\u308C\u66FF\u3048\u305F\uFF01"
  },
  spicyextract: {
    name: "\u30CF\u30D0\u30CD\u30ED\u30A8\u30AD\u30B9",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spiderweb: {
    name: "\u30AF\u30E2\u306E\u3059",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
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
  spikecannon: {
    name: "\u3068\u3052\u30AD\u30E3\u30CE\u30F3",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  spikes: {
    name: "\u307E\u304D\u3073\u3057",
    // Official flavor text: "相手の 足下に まきびしを しかける。交代で でてきた 相手の ポケモンに ダメージを 与える。"
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
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {TEAM}\u306E \u8DB3\u4E0B\u306B \u307E\u304D\u3073\u3057\u304C \u6563\u3089\u3070\u3063\u305F\uFF01",
    end: "  {TEAM}\u306E \u8DB3\u4E0B\u306E \u307E\u304D\u3073\u3057\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01",
    damage: "  {POKEMON}\u306F \u307E\u304D\u3073\u3057\u306E \u30C0\u30E1\u30FC\u30B8\u3092\u53D7\u3051\u305F\uFF01"
  },
  spikyshield: {
    name: "\u30CB\u30FC\u30C9\u30EB\u30AC\u30FC\u30C9",
    // Official flavor text: "相手の 攻撃を 防ぐと 同時に 触れた 相手の 体力を 削って しまう。"
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
    damage: "  {POKEMON}\u306F \u50B7\u3064\u3044\u305F\uFF01"
  },
  spinout: {
    name: "\u30DB\u30A4\u30FC\u30EB\u30B9\u30D4\u30F3",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spiritbreak: {
    name: "\u30BD\u30A6\u30EB\u30AF\u30E9\u30C3\u30B7\u30E5",
    // Official flavor text: "食らうと くじけるほどの 勢いで 攻撃。 相手の 特攻を 下げる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spiritshackle: {
    name: "\u304B\u3052\u306C\u3044",
    // Official flavor text: "攻撃と 同時に 相手の 影を 縫い付けて 逃げられなくする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  spite: {
    name: "\u3046\u3089\u307F",
    // Official flavor text: "相手が 最後に 使った技に 恨みを 抱いて その技の ＰＰを ４だけ 減らす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  {TARGET}\u306E {MOVE}\u3092 {NUMBER}\u524A\u3063\u305F\uFF01"
  },
  spitup: {
    name: "\u306F\u304D\u3060\u3059",
    // Official flavor text: "蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。"
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
    }
  },
  splash: {
    name: "\u306F\u306D\u308B",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u3057\u304B\u3057 \u4F55\u3082 \u8D77\u3053\u3089\u306A\u304B\u3063\u305F\uFF01"
  },
  splinteredstormshards: {
    name: "\u30E9\u30B8\u30A2\u30EB\u30A8\u30C3\u30B8\u30B9\u30C8\u30FC\u30E0",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  splishysplash: {
    name: "\u3056\u3076\u3056\u3076\u30B5\u30FC\u30D5",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spore: {
    name: "\u30AD\u30CE\u30B3\u306E\u307B\u3046\u3057",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spotlight: {
    name: "\u30B9\u30DD\u30C3\u30C8\u30E9\u30A4\u30C8",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#followme",
    startFromZEffect: "#followme"
  },
  springtidestorm: {
    name: "\u306F\u308B\u306E\u3042\u3089\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stealthrock: {
    name: "\u30B9\u30C6\u30EB\u30B9\u30ED\u30C3\u30AF",
    // Official flavor text: "相手の 周りに 無数の 岩を 浮かべて 交代で でてきた 相手の ポケモンに ダメージを 与える。"
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
    start: "  {TEAM}\u306E \u5468\u308A\u306B \u3068\u304C\u3063\u305F\u5CA9\u304C \u305F\u3060\u3088\u3044\u59CB\u3081\u305F\uFF01",
    end: "  {TEAM}\u306E \u5468\u308A\u306E \u30B9\u30C6\u30EB\u30B9\u30ED\u30C3\u30AF\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01",
    damage: "  {POKEMON}\u306B \u3068\u304C\u3063\u305F\u5CA9\u304C \u98DF\u3044\u3053\u3093\u3060\uFF01"
  },
  steameruption: {
    name: "\u30B9\u30C1\u30FC\u30E0\u30D0\u30FC\u30B9\u30C8",
    // Official flavor text: "ものすごく 熱い 蒸気を 相手に 浴びせる。 相手は やけどする ことがある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steamroller: {
    name: "\u30CF\u30FC\u30C9\u30ED\u30FC\u30E9\u30FC",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  steelbeam: {
    name: "\u3066\u3063\u3066\u3044\u3053\u3046\u305B\u3093",
    // Official flavor text: "全身から 集めた はがねを ビームとして 激しく 撃ちだす。 自分も ダメージを 受けてしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#mindblown"
  },
  steelroller: {
    name: "\u30A2\u30A4\u30A2\u30F3\u30ED\u30FC\u30E9\u30FC",
    // Official flavor text: "フィールドを 破壊しながら 攻撃。 なんらかの フィールド状態に 変わっていないと 技は 失敗する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelwing: {
    name: "\u306F\u304C\u306D\u306E\u3064\u3070\u3055",
    // Official flavor text: "硬い 翼を 相手に たたきつけて 攻撃する。 自分の 防御が あがることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stickyweb: {
    name: "\u306D\u3070\u306D\u3070\u30CD\u30C3\u30C8",
    // Official flavor text: "相手の 周りに ねばねばした ネットを はりめぐらせ 交代で でてきた 相手の 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {TEAM}\u306E \u8DB3\u4E0B\u306B \u306D\u3070\u306D\u3070\u30CD\u30C3\u30C8\u304C \u5E83\u304C\u3063\u305F\uFF01",
    end: "  {TEAM}\u306E \u8DB3\u4E0B\u306E \u306D\u3070\u306D\u3070\u30CD\u30C3\u30C8\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01",
    activate: "  {POKEMON}\u306F \u306D\u3070\u306D\u3070\u30CD\u30C3\u30C8\u306B \u3072\u3063\u304B\u304B\u3063\u305F\uFF01"
  },
  stockpile: {
    name: "\u305F\u304F\u308F\u3048\u308B",
    // Official flavor text: "力を 蓄えて 自分の 防御と 特防を あげる。 最大 ３回まで 蓄えられる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F {NUMBER}\u3064 \u305F\u304F\u308F\u3048\u305F\uFF01",
    end: "  {POKEMON}\u304C \u305F\u304F\u308F\u3048\u3066\u3044\u305F \u52B9\u679C\u304C\u5207\u308C\u305F\uFF01"
  },
  stokedsparksurfer: {
    name: "\u30E9\u30A4\u30C8\u30CB\u30F3\u30B0\u30B5\u30FC\u30D5\u30E9\u30A4\u30C9",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stomp: {
    name: "\u3075\u307F\u3064\u3051",
    // Official flavor text: "大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。"
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
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  stompingtantrum: {
    name: "\u3058\u3060\u3093\u3060",
    // Official flavor text: "悔しさを バネにして 攻撃する。 前の ターンに 技を 外していると 威力が 倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stoneaxe: {
    name: "\u304C\u3093\u305B\u304D\u30A2\u30C3\u30AF\u30B9",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stoneedge: {
    name: "\u30B9\u30C8\u30FC\u30F3\u30A8\u30C3\u30B8",
    // Official flavor text: "とがった 岩を 相手に 突き刺して 攻撃する。 急所に 当たりやすい。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  storedpower: {
    name: "\u30A2\u30B7\u30B9\u30C8\u30D1\u30EF\u30FC",
    // Official flavor text: "蓄積された パワーで 相手を 攻撃する。自分の 能力が あがっているほど 威力が あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stormthrow: {
    name: "\u3084\u307E\u3042\u3089\u3057",
    // Official flavor text: "強烈な 一撃を 相手に くりだす。攻撃は 必ず 急所に 当たる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  strangesteam: {
    name: "\u30EF\u30F3\u30C0\u30FC\u30B9\u30C1\u30FC\u30E0",
    // Official flavor text: "煙を 噴出して 相手を 攻撃。 混乱 させることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  strength: {
    name: "\u304B\u3044\u308A\u304D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  strengthsap: {
    name: "\u3061\u304B\u3089\u3092\u3059\u3044\u3068\u308B",
    // Official flavor text: "相手の 攻撃力と 同じだけ 自分の ＨＰを 回復する。 そして 相手の 攻撃を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stringshot: {
    name: "\u3044\u3068\u3092\u306F\u304F",
    // Official flavor text: "口から 吹きだした 糸を まきつけて 相手の 素早さを がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  struggle: {
    name: "\u308F\u308B\u3042\u304C\u304D",
    // Official flavor text: "自分の ＰＰが なくなると あがいて 相手を 攻撃する。 自分も 少し ダメージを 受ける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  strugglebug: {
    name: "\u3080\u3057\u306E\u3066\u3044\u3053\u3046",
    // Official flavor text: "抵抗して 相手を 攻撃する。 相手の 特攻を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stuffcheeks: {
    name: "\u307B\u304A\u3070\u308B",
    // Official flavor text: "持っている きのみを 食べて 防御を ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  stunspore: {
    name: "\u3057\u3073\u308C\u3054\u306A",
    // Official flavor text: "しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  submission: {
    name: "\u3058\u3054\u304F\u3050\u308B\u307E",
    // Official flavor text: "地面に 自分ごと 相手を 投げつけて 攻撃する。 自分も 少し ダメージを 受ける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  substitute: {
    name: "\u307F\u304C\u308F\u308A",
    // Official flavor text: "自分の ＨＰを 少し 削って 分身を だす。 分身は 自分の 身代わりに なる。"
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
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306E \u8EAB\u4EE3\u308F\u308A\u304C \u73FE\u308C\u305F\uFF01",
    alreadyStarted: "  \u3057\u304B\u3057 {POKEMON}\u306E \u8EAB\u4EE3\u308F\u308A\u306F \u3059\u3067\u306B \u3067\u3066\u3044\u305F",
    end: "  {POKEMON}\u306E \u8EAB\u4EE3\u308F\u308A\u306F \u6D88\u3048\u3066\u3057\u307E\u3063\u305F\u2026",
    fail: "  \u3057\u304B\u3057 \u8EAB\u4EE3\u308F\u308A\u3092 \u3060\u3059\u306B\u306F \u4F53\u529B\u304C \u8DB3\u308A\u306A\u304B\u3063\u305F\uFF01",
    activate: "  {POKEMON}\u306B \u304B\u308F\u3063\u3066 \u8EAB\u4EE3\u308F\u308A\u304C \u653B\u6483\u3092 \u53D7\u3051\u305F\uFF01"
  },
  subzeroslammer: {
    name: "\u30EC\u30A4\u30B8\u30F3\u30B0\u30B8\u30AA\u30D5\u30EA\u30FC\u30BA",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  suckerpunch: {
    name: "\u3075\u3044\u3046\u3061",
    // Official flavor text: "相手より 先に 攻撃 できる。 相手が だす技が 攻撃技でないと 失敗する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sunnyday: {
    name: "\u306B\u307B\u3093\u3070\u308C",
    // Official flavor text: "５ターンの 間 日差しを 強くして ほのおタイプの 威力を あげる。 みずタイプの 威力は さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sunsteelstrike: {
    name: "\u30E1\u30C6\u30AA\u30C9\u30E9\u30A4\u30D6",
    // Official flavor text: "流星の ような 勢いで 突進する。 相手の 特性を 無視して 攻撃 することが できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supercellslam: {
    name: "\u30B5\u30F3\u30C0\u30FC\u30C0\u30A4\u30D6",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#crash"
  },
  superfang: {
    name: "\u3044\u304B\u308A\u306E\u307E\u3048\u3070",
    // Official flavor text: "鋭い 前歯で 激しく かみついて 攻撃する。 相手の ＨＰは 半分に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  superpower: {
    name: "\u3070\u304B\u3062\u304B\u3089",
    // Official flavor text: "すごい 力を 発揮して 相手を 攻撃する。自分の 攻撃と 防御が さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersonic: {
    name: "\u3061\u3087\u3046\u304A\u3093\u3071",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersonicskystrike: {
    name: "\u30D5\u30A1\u30A4\u30CA\u30EB\u30C0\u30A4\u30D6\u30AF\u30E9\u30C3\u30B7\u30E5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  surf: {
    name: "\u306A\u307F\u306E\u308A",
    // Official flavor text: "大きな 波で 自分の 周りに いるものを 攻撃する。"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen3: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  surgingstrikes: {
    name: "\u3059\u3044\u308A\u3085\u3046\u308C\u3093\u3060",
    // Official flavor text: "みずの型を 極めし 流れるような ３回の 連撃。 必ず 急所に 当たる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  swagger: {
    name: "\u3044\u3070\u308B",
    // Official flavor text: "相手を 怒らせて 混乱させる。 怒りで 相手の 攻撃は ぐーんと あがってしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  swallow: {
    name: "\u306E\u307F\u3053\u3080",
    // Official flavor text: "蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。"
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
    }
  },
  sweetkiss: {
    name: "\u3066\u3093\u3057\u306E\u30AD\u30C3\u30B9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sweetscent: {
    name: "\u3042\u307E\u3044\u304B\u304A\u308A",
    // Official flavor text: "香りで 相手の 回避率を がくっと さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  swift: {
    name: "\u30B9\u30D4\u30FC\u30C9\u30B9\u30BF\u30FC",
    // Official flavor text: "星型の 光を 発射して 相手を 攻撃する。 攻撃は 必ず 命中する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  switcheroo: {
    name: "\u3059\u308A\u304B\u3048",
    // Official flavor text: "目にも とまらぬ 速さで 自分と 相手の 持ち物を 交換する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null
      // NEEDS TRANSLATION: not in PokeAPI
    },
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
    activate: "#trick"
  },
  swordsdance: {
    name: "\u3064\u308B\u304E\u306E\u307E\u3044",
    // Official flavor text: "戦いの舞を 激しく おどって 気合を 高める。 自分の 攻撃を ぐーんと あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  synchronoise: {
    name: "\u30B7\u30F3\u30AF\u30ED\u30CE\u30A4\u30BA",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  synthesis: {
    name: "\u3053\u3046\u3054\u3046\u305B\u3044",
    // Official flavor text: "自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。"
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
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  syrupbomb: {
    name: "\u307F\u305A\u3042\u3081\u30DC\u30E0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u3042\u3081\u307E\u307F\u308C\u306B \u306A\u3063\u305F\uFF01"
  },
  tackle: {
    name: "\u305F\u3044\u3042\u305F\u308A",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tachyoncutter: {
    name: "\u30BF\u30AD\u30AA\u30F3\u30AB\u30C3\u30BF\u30FC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tailglow: {
    name: "\u307B\u305F\u308B\u3073",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
  tailslap: {
    name: "\u30B9\u30A4\u30FC\u30D7\u30D3\u30F3\u30BF",
    // Official flavor text: "硬い しっぽで 相手を たたいて 攻撃する。 ２ー５回の 間 連続で だす。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  tailwhip: {
    name: "\u3057\u3063\u307D\u3092\u3075\u308B",
    // Official flavor text: "しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  tailwind: {
    name: "\u304A\u3044\u304B\u305C",
    // Official flavor text: "激しく 吹きあれる 風の渦を つくり ４ターンの 間 味方 全員の 素早さを あげる。"
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
    start: "  {TEAM}\u306B \u8FFD\u3044\u98A8\u304C \u5439\u304D\u59CB\u3081\u305F\uFF01",
    end: "  {TEAM}\u306E \u8FFD\u3044\u98A8\u304C \u6B62\u3093\u3060\uFF01"
  },
  takedown: {
    name: "\u3068\u3063\u3057\u3093",
    // Official flavor text: "すごい 勢いで 相手に ぶつかって 攻撃する。 自分も 少し ダメージを 受ける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  takeheart: {
    name: "\u30D6\u30EC\u30A4\u30D6\u30C1\u30E3\u30FC\u30B8",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tarshot: {
    name: "\u30BF\u30FC\u30EB\u30B7\u30E7\u30C3\u30C8",
    // Official flavor text: "ねばねばの タールを 浴びせて 相手の 素早さを 下げる。 相手は ほのおが 弱点に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u307B\u306E\u304A\u306B \u5F31\u304F\u306A\u3063\u305F\uFF01"
  },
  taunt: {
    name: "\u3061\u3087\u3046\u306F\u3064",
    // Official flavor text: "相手を 怒らせる。 ３ターンの 間 相手は ダメージを 与える 技しか だせなくなる。"
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
    },
    start: "  {POKEMON}\u306F \u6311\u767A\u306B \u4E57\u3063\u3066\u3057\u307E\u3063\u305F\uFF01",
    end: "  {POKEMON}\u306F \u6311\u767A\u306E\u52B9\u679C\u304C \u89E3\u3051\u305F\uFF01",
    cant: "{POKEMON}\u306F \u6311\u767A\u3055\u308C\u3066 {MOVE}\u304C \u3060\u305B\u306A\u3044\uFF01"
  },
  tearfullook: {
    name: "\u306A\u307F\u3060\u3081",
    // Official flavor text: "なみだめに なって 相手の 戦力を 喪失させる。 相手の 攻撃と 特攻が さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  teatime: {
    name: "\u304A\u3061\u3083\u304B\u3044",
    // Official flavor text: "おちゃかいを ひらいて 場にいる ポケモンが それぞれ 持っている きのみを 食べる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u304A\u3061\u3083\u304B\u3044\u3092\u3057\u3066 \u307F\u3093\u306A\u3067 \u304D\u306E\u307F\u3092 \u98DF\u3079\u305F\uFF01",
    fail: "  \u3057\u304B\u3057 \u4F55\u3082 \u8D77\u3053\u3089\u306A\u304B\u3063\u305F\uFF01"
  },
  technoblast: {
    name: "\u30C6\u30AF\u30CE\u30D0\u30B9\u30BF\u30FC",
    // Official flavor text: "光弾を 相手に 放出する。 自分の 持つ カセットにより タイプが 変わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tectonicrage: {
    name: "\u30E9\u30A4\u30B8\u30F3\u30B0\u30E9\u30F3\u30C9\u30AA\u30FC\u30D0\u30FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  teeterdance: {
    name: "\u30D5\u30E9\u30D5\u30E9\u30C0\u30F3\u30B9",
    // Official flavor text: "フラフラと ダンスを おどって 自分の 周りに いるものを 混乱状態に させる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  telekinesis: {
    name: "\u30C6\u30EC\u30AD\u30CD\u30B7\u30B9",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    start: "  {POKEMON}\u3092 \u5B99\u306B \u6D6E\u304B\u305B\u305F\uFF01",
    end: "  {POKEMON}\u306F \u30C6\u30EC\u30AD\u30CD\u30B7\u30B9\u304B\u3089 \u89E3\u653E\u3055\u308C\u305F\uFF01"
  },
  teleport: {
    name: "\u30C6\u30EC\u30DD\u30FC\u30C8",
    // Official flavor text: "ひかえの ポケモンが いるときに 使うと 入れ替わる。 野生の ポケモンは 逃げてしまう。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7letsgo: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen7: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  temperflare: {
    name: "\u3084\u3051\u3063\u3071\u3061",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terablast: {
    name: "\u30C6\u30E9\u30D0\u30FC\u30B9\u30C8",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terastarstorm: {
    name: "\u30C6\u30E9\u30AF\u30E9\u30B9\u30BF\u30FC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terrainpulse: {
    name: "\u3060\u3044\u3061\u306E\u306F\u3069\u3046",
    // Official flavor text: "フィールドの力を 借りて 攻撃。 使った時の フィールドの状態に よって 技の タイプと 威力が 変わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thief: {
    name: "\u3069\u308D\u307C\u3046",
    // Official flavor text: "攻撃と 同時に 道具を 盗む。 自分が 道具を 持っている 場合は 盗めない。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null
      // NEEDS TRANSLATION: not in PokeAPI
    },
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  thousandarrows: {
    name: "\u30B5\u30A6\u30B6\u30F3\u30A2\u30ED\u30FC",
    // Official flavor text: "浮いている ポケモンにも 当たる。 浮いていた 相手は 撃ち落とされて 地面に 落ちる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thousandwaves: {
    name: "\u30B5\u30A6\u30B6\u30F3\u30A6\u30A7\u30FC\u30D6",
    // Official flavor text: "地をはう 波によって 攻撃。 波に 巻き込まれた 相手は 戦闘から 逃げられなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  thrash: {
    name: "\u3042\u3070\u308C\u308B",
    // Official flavor text: "２ー３ターンの 間 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  throatchop: {
    name: "\u3058\u3054\u304F\u3065\u304D",
    // Official flavor text: "この 技を 受けた 相手は 地獄の 苦しみから ２ターンの間 音の 技を 出すことが できなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
      desc: null
      // NEEDS TRANSLATION
    },
    cant: "{POKEMON}\u306F \u3058\u3054\u304F\u3065\u304D\u306E \u52B9\u679C\u3067 \u6280\u304C \u51FA\u305B\u306A\u3044\uFF01"
  },
  thunder: {
    name: "\u304B\u307F\u306A\u308A",
    // Official flavor text: "激しい 雷を 相手に 落として 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen7: {
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
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  thunderbolt: {
    name: "\uFF11\uFF10\u307E\u3093\u30DC\u30EB\u30C8",
    // Official flavor text: "強い 電撃を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thundercage: {
    name: "\u30B5\u30F3\u30C0\u30FC\u30D7\u30EA\u30BA\u30F3",
    // Official flavor text: "ほとばしる 電気の おりの 中に ４ー５ターンの 間 相手を 閉じこめて 攻撃する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F {SOURCE}\u306B \u9589\u3058\u3053\u3081\u3089\u308C\u305F\uFF01"
  },
  thunderclap: {
    name: "\u3058\u3093\u3089\u3044",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thunderfang: {
    name: "\u304B\u307F\u306A\u308A\u306E\u30AD\u30D0",
    // Official flavor text: "電気を ためた キバで かみつく。 相手を ひるませたり まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thunderouskick: {
    name: "\u3089\u3044\u3081\u3044\u3052\u308A",
    // Official flavor text: "雷の ような 動きで 相手を 翻弄しながら キックする。 相手の 防御を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thunderpunch: {
    name: "\u304B\u307F\u306A\u308A\u30D1\u30F3\u30C1",
    // Official flavor text: "電撃を こめた パンチで 相手を 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thundershock: {
    name: "\u3067\u3093\u304D\u30B7\u30E7\u30C3\u30AF",
    // Official flavor text: "電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thunderwave: {
    name: "\u3067\u3093\u3058\u306F",
    // Official flavor text: "弱い 電撃を 浴びせることで 相手を まひ状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tickle: {
    name: "\u304F\u3059\u3050\u308B",
    // Official flavor text: "体を くすぐり 笑わせる ことで 相手の 攻撃と 防御を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tidyup: {
    name: "\u304A\u304B\u305F\u3065\u3051",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \u304B\u305F\u3065\u3051 \u304A\u308F\u308A\uFF01"
  },
  topsyturvy: {
    name: "\u3072\u3063\u304F\u308A\u304B\u3048\u3059",
    // Official flavor text: "相手に かかっている すべての 能力変化を ひっくり返して 逆にする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torchsong: {
    name: "\u30D5\u30EC\u30A2\u30BD\u30F3\u30B0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torment: {
    name: "\u3044\u3061\u3083\u3082\u3093",
    // Official flavor text: "相手に いちゃもんを つけて 同じ 技を ２回連続で だせなくする。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306F \u3044\u3061\u3083\u3082\u3093\u3092 \u3064\u3051\u3089\u308C\u305F\uFF01",
    end: "  {POKEMON}\u306E \u3044\u3061\u3083\u3082\u3093\u306E \u52B9\u679C\u304C\u5207\u308C\u305F\uFF01"
  },
  toxic: {
    name: "\u3069\u304F\u3069\u304F",
    // Official flavor text: "相手を 猛毒の 状態に する。 ターンが すすむほど 毒の ダメージが 増えていく。"
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
  toxicspikes: {
    name: "\u3069\u304F\u3073\u3057",
    // Official flavor text: "相手の 足下に どくびしを しかける。 交代で でてきた 相手の ポケモンに 毒を おわせる。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {TEAM}\u306E \u8DB3\u4E0B\u306B \u3069\u304F\u3073\u3057\u304C \u6563\u3089\u3070\u3063\u305F\uFF01",
    end: "  {TEAM}\u306E \u8DB3\u4E0B\u306E \u3069\u304F\u3073\u3057\u304C \u6D88\u3048\u53BB\u3063\u305F\uFF01"
  },
  toxicthread: {
    name: "\u3069\u304F\u306E\u3044\u3068",
    // Official flavor text: "毒の 混じった 糸を 吹き付ける。 相手を 毒にして 素早さを さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null,
      // NEEDS TRANSLATION: not in PokeAPI
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  trailblaze: {
    name: "\u304F\u3055\u308F\u3051",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  transform: {
    name: "\u3078\u3093\u3057\u3093",
    // Official flavor text: "相手の ポケモンに 変身することで 相手と まったく 同じ 技が 使える。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "{POKEMON}\u306F {SPECIES}\u306B \u5909\u8EAB\u3057\u305F\uFF01"
  },
  triattack: {
    name: "\u30C8\u30E9\u30A4\u30A2\u30BF\u30C3\u30AF",
    // Official flavor text: "３つの 光線で 攻撃する。 まひか やけどか こおり状態の どれかに することが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  trick: {
    name: "\u30C8\u30EA\u30C3\u30AF",
    // Official flavor text: "相手の すきを ついて 自分と 相手の 持ち物を 交換する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      desc: null
      // NEEDS TRANSLATION: not in PokeAPI
    },
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
    activate: "  {POKEMON}\u306F \u304A\u305F\u304C\u3044\u306E \u9053\u5177\u3092\u5165\u308C\u66FF\u3048\u305F\uFF01"
  },
  trickortreat: {
    name: "\u30CF\u30ED\u30A6\u30A3\u30F3",
    // Official flavor text: "相手を ハロウィンに 誘う。 相手の タイプに ゴーストタイプが 追加される。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trickroom: {
    name: "\u30C8\u30EA\u30C3\u30AF\u30EB\u30FC\u30E0",
    // Official flavor text: "まか不思議な 空間を つくる。 ５ターンの 間 遅い ポケモンから 行動できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  triplearrows: {
    name: "\uFF13\u307C\u3093\u306E\u3084",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tripleaxel: {
    name: "\u30C8\u30EA\u30D7\u30EB\u30A2\u30AF\u30BB\u30EB",
    // Official flavor text: "３回連続で キックを くりだして 攻撃する。 技が 当たるたびに 威力は あがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tripledive: {
    name: "\u30C8\u30EA\u30D7\u30EB\u30C0\u30A4\u30D6",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  triplekick: {
    name: "\u30C8\u30EA\u30D7\u30EB\u30AD\u30C3\u30AF",
    // Official flavor text: "３回連続で キックを くりだして 攻撃する。 技が 当たるたびに 威力は あがる。"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  tropkick: {
    name: "\u30C8\u30ED\u30D4\u30AB\u30EB\u30AD\u30C3\u30AF",
    // Official flavor text: "南国 由来の 熱い キックを 相手に 浴びせる。 相手の 攻撃を さげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trumpcard: {
    name: "\u304D\u308A\u3075\u3060",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  twinbeam: {
    name: "\u30C4\u30A4\u30F3\u30D3\u30FC\u30E0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  twineedle: {
    name: "\u30C0\u30D6\u30EB\u30CB\u30FC\u30C9\u30EB",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  twinkletackle: {
    name: "\u30E9\u30D6\u30EA\u30FC\u30B9\u30BF\u30FC\u30A4\u30F3\u30D1\u30AF\u30C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  twister: {
    name: "\u305F\u3064\u307E\u304D",
    // Official flavor text: "竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  upperhand: {
    name: "\u306F\u3084\u3066\u304C\u3048\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  uproar: {
    name: "\u3055\u308F\u3050",
    // Official flavor text: "３ターンの 間 騒いで 相手を 攻撃する。 そのあいだは だれも 眠れなくなる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
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
    },
    start: "  {POKEMON}\u306F \u9A12\u304E\u3060\u3057\u305F\uFF01",
    end: "  {POKEMON}\u306F \u304A\u3068\u306A\u3057\u304F\u306A\u3063\u305F\uFF01",
    upkeep: "  {POKEMON}\u306F \u9A12\u3044\u3067\u3044\u308B\uFF01",
    block: "  \u3057\u304B\u3057 {POKEMON}\u306F \u9A12\u304C\u3057\u304F\u3066 \u7720\u308C\u306A\u3044\uFF01",
    blockSelf: "  \u3057\u304B\u3057 {POKEMON}\u306F \u9A12\u3044\u3067\u3044\u3066 \u7720\u308C\u306A\u3044\uFF01"
  },
  uturn: {
    name: "\u3068\u3093\u307C\u304C\u3048\u308A",
    // Official flavor text: "攻撃したあと ものすごい スピードで もどってきて 控えの ポケモンと 入れ替わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    switchOut: "{POKEMON}\u306F {TRAINER}\u306E\u5143\u3078 \u623B\u3063\u3066\u3044\u304F\uFF01"
  },
  vacuumwave: {
    name: "\u3057\u3093\u304F\u3046\u306F",
    // Official flavor text: "こぶしを ふって 真空の 波を まきおこす。 必ず 先制攻撃できる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vcreate: {
    name: "\uFF36\u30B8\u30A7\u30CD\u30EC\u30FC\u30C8",
    // Official flavor text: "灼熱の 炎を 額から 発生させて 捨て身の 体当たり。 防御 特防 素早さが さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  veeveevolley: {
    name: "\u30D6\u30A4\u30D6\u30A4\u30D6\u30EC\u30A4\u30AF",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  venomdrench: {
    name: "\u30D9\u30CE\u30E0\u30C8\u30E9\u30C3\u30D7",
    // Official flavor text: "特殊な 毒液を 浴びせかける。 毒状態の 相手は 攻撃 特攻 素早さが さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  venoshock: {
    name: "\u30D9\u30CE\u30E0\u30B7\u30E7\u30C3\u30AF",
    // Official flavor text: "特殊な 毒液を 浴びせかける。 毒状態の 相手には 威力が ２倍に なる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  victorydance: {
    name: "\u3057\u3087\u3046\u308A\u306E\u307E\u3044",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vinewhip: {
    name: "\u3064\u308B\u306E\u30E0\u30C1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  visegrip: {
    name: "\u306F\u3055\u3080",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vitalthrow: {
    name: "\u3042\u3066\u307F\u306A\u3052",
    // Official flavor text: "相手より あとに 攻撃する。 そのかわり 自分の 攻撃は 必ず 命中する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  voltswitch: {
    name: "\u30DC\u30EB\u30C8\u30C1\u30A7\u30F3\u30B8",
    // Official flavor text: "攻撃したあと ものすごい スピードで もどってきて 控えポケモンと 入れ替わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    switchOut: "#uturn"
  },
  volttackle: {
    name: "\u30DC\u30EB\u30C6\u30C3\u30AB\u30FC",
    // Official flavor text: "電気を まとって 突進する。 自分も かなり ダメージを 受ける。 まひ状態に することが ある。"
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
  wakeupslap: {
    name: "\u3081\u3056\u307E\u3057\u30D3\u30F3\u30BF",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  waterfall: {
    name: "\u305F\u304D\u306E\u307C\u308A",
    // Official flavor text: "すごい 勢いで 相手に つっこむ。 相手を ひるませることが ある。"
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
  watergun: {
    name: "\u307F\u305A\u3067\u3063\u307D\u3046",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterpledge: {
    name: "\u307F\u305A\u306E\u3061\u304B\u3044",
    // Official flavor text: "水の柱で 攻撃する。 ほのおと 組みあわせると 威力が あがって 空に にじが かかる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\u306F {TARGET}\u3092 \u5F85\u3063\u3066\u3044\u308B\u2026",
    start: "  {TEAM}\u306E\u7A7A\u306B \u306B\u3058\u304C \u304B\u304B\u3063\u305F\uFF01",
    end: "  {TEAM}\u306E\u7A7A\u304B\u3089 \u306B\u3058\u304C \u6D88\u3048\u305F\uFF01"
  },
  waterpulse: {
    name: "\u307F\u305A\u306E\u306F\u3069\u3046",
    // Official flavor text: "水の 振動を 相手に 与えて 攻撃する。 相手を 混乱させることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  watershuriken: {
    name: "\u307F\u305A\u3057\u3085\u308A\u3051\u3093",
    // Official flavor text: "粘液で できた 手裏剣を ２ー５回の 間 連続で だす。 必ず 先制攻撃 できる。"
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
    }
  },
  watersport: {
    name: "\u307F\u305A\u3042\u305D\u3073",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
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
    }
  },
  waterspout: {
    name: "\u3057\u304A\u3075\u304D",
    // Official flavor text: "潮を 吹きつけて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は さがる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wavecrash: {
    name: "\u30A6\u30A7\u30FC\u30D6\u30BF\u30C3\u30AF\u30EB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  weatherball: {
    name: "\u30A6\u30A7\u30B6\u30FC\u30DC\u30FC\u30EB",
    // Official flavor text: "使ったときの 天気に よって 技の タイプと 威力が 変わる。"
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
    gen3: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    move: "\u30A6\u30EB\u30C8\u30E9\u30C0\u30C3\u30B7\u30E5\u30A2\u30BF\u30C3\u30AF\u306F \u5929\u6C17\u306B\u3088\u3063\u3066 {MOVE}\u306B \u306A\u3063\u305F\uFF01"
  },
  whirlpool: {
    name: "\u3046\u305A\u3057\u304A",
    // Official flavor text: "激しく 渦をまく 水の中に ４ー５ターンの 間 相手を 閉じこめて 攻撃する。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F \u6E26\u306E\u4E2D\u306B \u9589\u3058\u3053\u3081\u3089\u308C\u305F\uFF01"
  },
  whirlwind: {
    name: "\u3075\u304D\u3068\u3070\u3057",
    // Official flavor text: "相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen2: {
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  wickedblow: {
    name: "\u3042\u3093\u3053\u304F\u304D\u3087\u3046\u3060",
    // Official flavor text: "あくの型を 極めし 強烈な 一撃。 必ず 急所に 当たる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wickedtorque: {
    name: "\u30C0\u30FC\u30AF\u30A2\u30AF\u30BB\u30EB",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wideguard: {
    name: "\u30EF\u30A4\u30C9\u30AC\u30FC\u30C9",
    // Official flavor text: "味方全員に 当たる 攻撃を １ターンの 間 防ぐ。"
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
    },
    gen5: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  {TEAM}\u306F \u30EF\u30A4\u30C9\u30AC\u30FC\u30C9\u3067 \u5B88\u3089\u308C\u305F\uFF01",
    block: "  {POKEMON}\u306F \u30EF\u30A4\u30C9\u30AC\u30FC\u30C9\u3067 \u5B88\u3089\u308C\u305F\uFF01"
  },
  wildboltstorm: {
    name: "\u304B\u307F\u306A\u308A\u3042\u3089\u3057",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wildcharge: {
    name: "\u30EF\u30A4\u30EB\u30C9\u30DC\u30EB\u30C8",
    // Official flavor text: "電気を まとって 相手に ぶつかって 攻撃する。 自分も 少し ダメージを 受ける。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  willowisp: {
    name: "\u304A\u306B\u3073",
    // Official flavor text: "不気味で 怪しい 炎を 放って 相手を やけどの 状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wingattack: {
    name: "\u3064\u3070\u3055\u3067\u3046\u3064",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wish: {
    name: "\u306D\u304C\u3044\u3054\u3068",
    // Official flavor text: "次の ターンに 自分 もしくは 入れ替わった ポケモンの ＨＰを 最大ＨＰの 半分 回復する。"
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
    heal: "  {NICKNAME}\u306E \u306D\u304C\u3044\u3054\u3068\u304C \u304B\u306A\u3063\u305F\uFF01"
  },
  withdraw: {
    name: "\u304B\u3089\u306B\u3053\u3082\u308B",
    // Official flavor text: "殻に 潜りこんで 身を守り 自分の 防御を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wonderroom: {
    name: "\u30EF\u30F3\u30C0\u30FC\u30EB\u30FC\u30E0",
    // Official flavor text: "まか不思議な 空間を つくる。 ５ターンのあいだ すべてのポケモンの 防御と 特防が 入れ替わる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  woodhammer: {
    name: "\u30A6\u30C3\u30C9\u30CF\u30F3\u30DE\u30FC",
    // Official flavor text: "硬い 胴体を 相手に たたきつけて 攻撃する。 自分も かなり ダメージを 受ける。"
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
  workup: {
    name: "\u3075\u308B\u3044\u305F\u3066\u308B",
    // Official flavor text: "自分を 奮いたてて 攻撃と 特攻を あげる。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  worryseed: {
    name: "\u306A\u3084\u307F\u306E\u30BF\u30CD",
    // Official flavor text: "心を なやませる タネを 植えつける。 相手を 眠れなくして 特性を ふみんに する。"
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
    }
  },
  wrap: {
    name: "\u307E\u304D\u3064\u304F",
    // Official flavor text: "長い 体や つるなどを 使って ４ー５ターンの 間 相手に まきついて 攻撃する。"
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
      desc: null
      // NEEDS TRANSLATION
    },
    gen1: {
      desc: null,
      // NEEDS TRANSLATION
      shortDesc: null
      // NEEDS TRANSLATION
    },
    start: "  {POKEMON}\u306F {SOURCE}\u306B \u5DFB\u304D\u3064\u304B\u308C\u305F\uFF01",
    move: "{POKEMON}\u306E \u3053\u3046\u3052\u304D\u306F \u307E\u3060 \u3064\u3065\u3044\u3066\u3044\u308B"
  },
  wringout: {
    name: "\u3057\u307C\u308A\u3068\u308B",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  xscissor: {
    name: "\u30B7\u30B6\u30FC\u30AF\u30ED\u30B9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  yawn: {
    name: "\u3042\u304F\u3073",
    // Official flavor text: "大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\u306E \u7720\u6C17\u3092 \u8A98\u3063\u305F\uFF01"
  },
  zapcannon: {
    name: "\u3067\u3093\u3058\u307B\u3046",
    // Official flavor text: "大砲の ような 電気を 発射して 攻撃する。 相手を まひの 状態に する。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zenheadbutt: {
    name: "\u3057\u306D\u3093\u306E\u305A\u3064\u304D",
    // Official flavor text: "思念の 力を 額に 集めて 攻撃する。 相手を ひるませることが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zingzap: {
    name: "\u3073\u308A\u3073\u308A\u3061\u304F\u3061\u304F",
    // Official flavor text: "相手に ぶつかって 強力な 電気を浴びせ びりびりちくちく させる。 相手を ひるませる ことが ある。"
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zippyzap: {
    name: "\u3070\u3061\u3070\u3061\u30A2\u30AF\u30BB\u30EB",
    // Official flavor text: "この技は 使えません 思い出すことが できなくなりますが 技を 忘れることを おすすめします"
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
  }
};
//# sourceMappingURL=moves.js.map
