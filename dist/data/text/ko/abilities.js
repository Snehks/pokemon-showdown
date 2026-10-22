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
    name: "\uC801\uC751\uB825",
    // Official flavor text: "자신과 같은 타입의 기술 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aerilate: {
    name: "\uC2A4\uCE74\uC774\uC2A4\uD0A8",
    // Official flavor text: "노말타입의 기술이 비행타입이 된다. 위력이 조금 올라간다."
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
    name: "\uC720\uD3ED",
    // Official flavor text: "기절했을 때 접촉한 상대에게 데미지를 준다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "  {POKEMON:topic} \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!"
  },
  airlock: {
    name: "\uC5D0\uC5B4\uB85D",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \uB0A0\uC528\uC758 \uC601\uD5A5\uC774 \uC5C6\uC5B4\uC84C\uB2E4!"
  },
  analytic: {
    name: "\uC560\uB110\uB77C\uC774\uC988",
    // Official flavor text: "제일 마지막에 기술을 쓰면 기술의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  angerpoint: {
    name: "\uBD84\uB178\uC758\uACBD\uD608",
    // Official flavor text: "급소에 공격이 맞으면 크게 분노해 공격력이 최대가 된다."
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
    boost: "  {POKEMON:topic} \uACF5\uACA9\uC774 \uCD5C\uACE0\uCE58\uAE4C\uC9C0 \uC62C\uB77C\uAC14\uB2E4!"
  },
  angershell: {
    name: "\uBD84\uB178\uC758\uAECD\uC9C8",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  anticipation: {
    name: "\uC704\uD5D8\uC608\uC9C0",
    // Official flavor text: "상대가 지닌 위험한 기술을 감지할 수 있다."
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
    activate: "  {POKEMON:topic} \uBAB8\uC744 \uB5A8\uC5C8\uB2E4!"
  },
  arenatrap: {
    name: "\uAC1C\uBBF8\uC9C0\uC625",
    // Official flavor text: "배틀에서 상대를 도망칠 수 없게 한다."
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
    name: "\uD14C\uC77C\uC544\uBA38",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  aromaveil: {
    name: "\uC544\uB85C\uB9C8\uBCA0\uC77C",
    // Official flavor text: "자신과 같은 편으로 향하는 멘탈 공격을 막을 수 있다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON:object} \uC544\uB85C\uB9C8\uBCA0\uC77C\uC774 \uC9C0\uCF1C \uC8FC\uACE0 \uC788\uB2E4!"
  },
  asone: {
    name: "\uD63C\uC5F0\uC77C\uCCB4",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON:topic} \uB450 \uAC00\uC9C0 \uD2B9\uC131\uC744 \uACB8\uBE44\uD55C\uB2E4!"
  },
  asoneglastrier: {
    name: "\uD63C\uC5F0\uC77C\uCCB4 (\uBE14\uB9AC\uC790\uD3EC\uC2A4)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  asonespectrier: {
    name: "\uD63C\uC5F0\uC77C\uCCB4 (\uB808\uC774\uC2A4\uD3EC\uC2A4)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurabreak: {
    name: "\uC624\uB77C\uBE0C\uB808\uC774\uD06C",
    // Official flavor text: "오라의 효과를 역전시켜 위력을 떨어뜨린다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON:topic} \uBAA8\uB4E0 \uC624\uB77C\uB97C \uC81C\uC555\uD55C\uB2E4!"
  },
  auraguard: {
    name: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  baddreams: {
    name: "\uB098\uC774\uD2B8\uBA54\uC5B4",
    // Official flavor text: "잠듦 상태의 상대에게 데미지를 준다."
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
    damage: "  {POKEMON:topic} \uB098\uC774\uD2B8\uBA54\uC5B4\uC5D0 \uC2DC\uB2EC\uB9AC\uACE0 \uC788\uB2E4!"
  },
  ballfetch: {
    name: "\uBCFC\uC90D\uAE30",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battery: {
    name: "\uBC30\uD130\uB9AC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlearmor: {
    name: "\uC804\uD22C\uBB34\uC7A5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlebond: {
    name: "\uC720\uB300\uBCC0\uD654",
    // Official flavor text: "상대를 쓰러뜨리면 트레이너와의 유대감이 깊어져서 지우개굴닌자로 변한다. 물수리검이 강해진다."
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
    activate: "  {POKEMON:directional}\uBD80\uD130 \uC720\uB300\uC758 \uD798\uC774 \uB118\uCCD0\uD750\uB978\uB2E4!",
    transform: "{POKEMON:topic} \uC9C0\uC6B0\uAC1C\uAD74\uB2CC\uC790\uB85C \uBCC0\uD588\uB2E4!"
  },
  beadsofruin: {
    name: "\uC7AC\uC559\uC758\uAD6C\uC2AC",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\uC758 \uC7AC\uC559\uC758\uAD6C\uC2AC\uC5D0 \uC758\uD574 \uC8FC\uC704\uC758 \uD2B9\uC218\uBC29\uC5B4\uAC00 \uC57D\uD574\uC84C\uB2E4!"
  },
  beastboost: {
    name: "\uBE44\uC2A4\uD2B8\uBD80\uC2A4\uD2B8",
    // Official flavor text: "상대를 기절시켰을 때 자신의 가장 높은 능력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  berserk: {
    name: "\uBC1C\uB048",
    // Official flavor text: "상대의 공격으로 HP가 절반이 되면 특수공격이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bigpecks: {
    name: "\uBD80\uD480\uB9B0\uAC00\uC2B4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blaze: {
    name: "\uB9F9\uD654",
    // Official flavor text: "HP가 줄었을 때 불꽃타입 기술의 위력이 올라간다."
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
    name: "\uBC29\uD0C4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cheekpouch: {
    name: "\uBCFC\uC8FC\uBA38\uB2C8",
    // Official flavor text: "어떤 나무열매라도 먹으면 HP도 회복한다."
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
    name: "\uBC31\uC758\uC6B8\uC74C",
    // Official flavor text: "상대를 쓰러뜨리면 차가운 울음소리를 내면서 공격이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chlorophyll: {
    name: "\uC5FD\uB85D\uC18C",
    // Official flavor text: "날씨가 맑을 때 스피드가 올라간다."
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
    name: "\uD074\uB9AC\uC5B4\uBC14\uB514",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cloudnine: {
    name: "\uB0A0\uC528\uBD80\uC815",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#airlock"
  },
  colorchange: {
    name: "\uBCC0\uC0C9",
    // Official flavor text: "상대에게 받은 기술의 타입으로 자신의 타입이 변화한다."
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
    name: "\uC808\uB300\uC548\uAE78",
    // Official flavor text: "항상 비몽사몽 상태로 절대 깨지 않는다. 잠든 상태로 공격할 수 있다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON:topic} \uBE44\uBABD\uC0AC\uBABD \uC0C1\uD0DC!"
  },
  commander: {
    name: "\uC0AC\uB839\uD0D1",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON:topic} \uC0AC\uB839\uD0D1\uC774 \uB418\uC5B4 {TARGET}\uC5D0\uAC8C \uC0BC\uCF1C\uC84C\uB2E4!"
  },
  competitive: {
    name: "\uC2B9\uAE30",
    // Official flavor text: "능력이 떨어지면 특수공격이 크게 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  compoundeyes: {
    name: "\uBCF5\uC548",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  contrary: {
    name: "\uC2EC\uC220\uAFB8\uB7EC\uAE30",
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
    name: "\uBD80\uC2DD",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  costar: {
    name: "\uD611\uC5F0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cottondown: {
    name: "\uC19C\uD138",
    // Official flavor text: "공격을 받으면 솜털을 흩뿌려서 자신을 제외한 모든 포켓몬의 스피드를 떨어뜨린다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cudchew: {
    name: "\uB418\uC0C8\uAE40\uC9C8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  curiousmedicine: {
    name: "\uAE30\uBB18\uD55C\uC57D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cursedbody: {
    name: "\uC800\uC8FC\uBC1B\uC740\uBC14\uB514",
    // Official flavor text: "공격을 받으면 상대의 기술을 사슬묶기 상태로 만들 때가 있다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cutecharm: {
    name: "\uD5E4\uB871\uD5E4\uB871\uBC14\uB514",
    // Official flavor text: "자신과 접촉한 상대를 헤롱헤롱 상태로 만들 때가 있다."
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
    name: "\uC2B5\uAE30",
    // Official flavor text: "주변을 습하게 함으로써 자폭 등 폭발하는 기술을 아무도 못 쓰게 한다."
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
    block: "  {SOURCE:topic} {MOVE:object} \uC4F8 \uC218 \uC5C6\uB2E4!"
  },
  dancer: {
    name: "\uBB34\uD76C",
    // Official flavor text: "누군가 춤 기술을 쓰면 자신도 이어서 춤 기술을 쓸 수 있다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkaura: {
    name: "\uB2E4\uD06C\uC624\uB77C",
    // Official flavor text: "전원의 악타입 기술이 강해진다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON:topic} \uB2E4\uD06C\uC624\uB77C\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  dauntlessshield: {
    name: "\uBD88\uAD74\uC758\uBC29\uD328",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  dazzling: {
    name: "\uBE44\uBE44\uB4DC\uBC14\uB514",
    // Official flavor text: "상대를 놀라게 해서 이쪽을 향한 선제 기술을 사용할 수 없게 한다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  defeatist: {
    name: "\uBB34\uAE30\uB825",
    // Official flavor text: "HP가 절반이 되면 무기력해져서 공격과 특수공격이 반감된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defiant: {
    name: "\uC624\uAE30",
    // Official flavor text: "능력이 떨어지면 공격이 크게 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  deltastream: {
    name: "\uB378\uD0C0\uC2A4\uD2B8\uB9BC",
    // Official flavor text: "비행타입의 약점이 없어지는 날씨로 만든다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  desolateland: {
    name: "\uB05D\uC758\uB300\uC9C0",
    // Official flavor text: "물타입의 공격을 받지 않는 날씨로 만든다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  disguise: {
    name: "\uD0C8",
    // Official flavor text: "몸을 덮는 탈로 1번 공격을 막을 수 있다."
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
    block: "  \uD0C8\uC774 \uB300\uD0C0\uAC00 \uB418\uC5C8\uB2E4!",
    transform: "{POKEMON}\uC758 \uC815\uCCB4\uAC00 \uB4DC\uB7EC\uB0AC\uB2E4!"
  },
  download: {
    name: "\uB2E4\uC6B4\uB85C\uB4DC",
    // Official flavor text: "상대의 방어와 특수방어를 비교해서 낮은 쪽 능력에 맞춰서 자신의 공격이나 특수공격을 올린다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonize: {
    name: "\uB4DC\uB798\uACE4\uC2A4\uD0A8",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonsmaw: {
    name: "\uC6A9\uC758\uD131",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drizzle: {
    name: "\uC794\uBE44",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drought: {
    name: "\uAC00\uBB44",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dryskin: {
    name: "\uAC74\uC870\uD53C\uBD80",
    // Official flavor text: "비가 오는 날씨나 물타입의 기술로 HP가 회복되고 맑을 때나 불꽃타입의 기술로는 줄어든다."
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
    name: "\uC77C\uCC0D\uAE30\uC0C1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eartheater: {
    name: "\uD759\uBA39\uAE30",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eelevate: {
    name: "\uCC9C\uC815\uBD80\uC9C0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  effectspore: {
    name: "\uD3EC\uC790",
    // Official flavor text: "공격으로 자신에게 접촉한 상대를 독이나 마비, 잠듦 상태로 만들 때가 있다."
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
    name: "\uC77C\uB809\uD2B8\uB9AD\uBA54\uC774\uCEE4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electromorphosis: {
    name: "\uC804\uAE30\uB85C\uBC14\uAFB8\uAE30",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON:topic} {MOVE}\uC5D0 \uB9DE\uC544 \uCDA9\uC804\uB418\uC5C8\uB2E4!"
  },
  embodyaspectcornerstone: {
    name: "\uCD08\uC0C1\uD22C\uC601 (\uC8FC\uCDA7\uB3CC)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON:topic} \uC8FC\uCDA7\uB3CC\uC758\uAC00\uBA74\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uBC29\uC5B4\uAC00 \uC62C\uB77C\uAC14\uB2E4!"
  },
  embodyaspecthearthflame: {
    name: "\uCD08\uC0C1\uD22C\uC601 (\uD654\uB355)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON:topic} \uD654\uB355\uC758\uAC00\uBA74\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uACF5\uACA9\uC774 \uC62C\uB77C\uAC14\uB2E4!"
  },
  embodyaspectteal: {
    name: "\uCD08\uC0C1\uD22C\uC601 (\uBCBD\uB85D)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON:topic} \uBCBD\uB85D\uC758\uAC00\uBA74\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uC2A4\uD53C\uB4DC\uAC00 \uC62C\uB77C\uAC14\uB2E4!"
  },
  embodyaspectwellspring: {
    name: "\uCD08\uC0C1\uD22C\uC601 (\uC6B0\uBB3C)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON:topic} \uC6B0\uBB3C\uC758\uAC00\uBA74\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uD2B9\uC218\uBC29\uC5B4\uAC00 \uC62C\uB77C\uAC14\uB2E4!"
  },
  emergencyexit: {
    name: "\uC704\uAE30\uD68C\uD53C",
    // Official flavor text: "HP가 절반이 되면 위험을 회피하기 위해 지닌 포켓몬으로 돌아간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fairyaura: {
    name: "\uD398\uC5B4\uB9AC\uC624\uB77C",
    // Official flavor text: "전원의 페어리타입 기술이 강해진다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON:topic} \uD398\uC5B4\uB9AC\uC624\uB77C\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  filter: {
    name: "\uD544\uD130",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firemane: {
    name: "\uBD88\uAF43\uC758\uAC08\uAE30",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamebody: {
    name: "\uBD88\uAF43\uBAB8",
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
    name: "\uC5F4\uD3ED\uC8FC",
    // Official flavor text: "화상 상태가 되었을 때 특수 기술의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flashfire: {
    name: "\uD0C0\uC624\uB974\uB294\uBD88\uAF43",
    // Official flavor text: "불꽃타입의 기술을 받으면 불꽃을 받아서 자신이 사용하는 불꽃타입의 기술이 강해진다."
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
    start: "  {POKEMON:topic} \uBD88\uAF43\uC758 \uC704\uB825\uC774 \uC62C\uB77C\uAC14\uB2E4!"
  },
  flowergift: {
    name: "\uD50C\uB77C\uC6CC\uAE30\uD504\uD2B8",
    // Official flavor text: "날씨가 맑을 때 자신과 같은 편의 공격과 특수방어의 능력이 올라간다."
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
    name: "\uD50C\uB77C\uC6CC\uBCA0\uC77C",
    // Official flavor text: "같은 편의 풀타입 포켓몬은 능력이 떨어지지 않고 상태 이상도 되지 않는다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON:object} \uD50C\uB77C\uC6CC\uBCA0\uC77C\uC774 \uC9C0\uCF1C \uC8FC\uACE0 \uC788\uB2E4!"
  },
  fluffy: {
    name: "\uBCF5\uC2AC\uBCF5\uC2AC",
    // Official flavor text: "상대로부터 받은 접촉하는 기술의 데미지를 반감시키지만 불꽃타입 기술의 데미지는 2배가 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  forecast: {
    name: "\uAE30\uBD84\uD30C",
    // Official flavor text: "날씨의 영향을 받아 물타입, 불꽃타입, 얼음타입 중 하나로 변화한다."
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
    name: "\uC608\uC9C0\uBABD",
    // Official flavor text: "등장했을 때 상대가 지닌 기술을 하나만 꿰뚫어본다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  {TARGET}\uC758 {MOVE:object} \uAC04\uD30C\uD588\uB2E4!",
    activateNoTarget: null
    // NEEDS TRANSLATION
  },
  friendguard: {
    name: "\uD504\uB80C\uB4DC\uAC00\uB4DC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frisk: {
    name: "\uD1B5\uCC30",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON:topic} {TARGET}\uC758 {ITEM:object} \uD1B5\uCC30\uD588\uB2E4!",
    activateNoTarget: "  {POKEMON:topic} {ITEM:object} \uD1B5\uCC30\uD588\uB2E4!"
  },
  fullmetalbody: {
    name: "\uBA54\uD0C8\uD504\uB85C\uD14D\uD2B8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furcoat: {
    name: "\uD37C\uCF54\uD2B8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  galewings: {
    name: "\uC9C8\uD48D\uB0A0\uAC1C",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  galvanize: {
    name: "\uC77C\uB809\uD2B8\uB9AD\uC2A4\uD0A8",
    // Official flavor text: "노말타입 기술이 전기타입이 된다. 위력이 조금 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gluttony: {
    name: "\uBA39\uBCF4",
    // Official flavor text: "HP가 줄어들면 먹을 나무열매를 HP가 절반일 때 먹어버린다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  goodasgold: {
    name: "\uD669\uAE08\uBAB8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gooey: {
    name: "\uBBF8\uB048\uBBF8\uB048",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gorillatactics: {
    name: "\uBB34\uC544\uC9C0\uACBD",
    // Official flavor text: "공격이 올라가지만 처음에 선택한 기술 외에는 쓸 수 없게 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grasspelt: {
    name: "\uD480\uBAA8\uD53C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassysurge: {
    name: "\uADF8\uB798\uC2A4\uBA54\uC774\uCEE4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grimneigh: {
    name: "\uD751\uC758\uC6B8\uC74C",
    // Official flavor text: "상대를 쓰러뜨리면 무서운 울음소리를 내면서 특수공격이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guarddog: {
    name: "\uD30C\uC218\uACAC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gulpmissile: {
    name: "\uADF8\uB300\uB85C\uAFC0\uAEBD\uBBF8\uC0AC\uC77C",
    // Official flavor text: "파도타기나 다이빙을 쓰면 먹이를 물어온다. 데미지를 받으면 먹이를 토해내서 공격한다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guts: {
    name: "\uADFC\uC131",
    // Official flavor text: "상태 이상이 되면 근성을 보여서 공격이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hadronengine: {
    name: "\uD558\uB4DC\uB860\uC5D4\uC9C4",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON:topic} \uC77C\uB809\uD2B8\uB9AD\uD544\uB4DC\uB97C \uC804\uAC1C\uD558\uC5EC \uBBF8\uB798 \uAE30\uAD00\uC744 \uAC00\uB3D9\uD588\uB2E4!!",
    activate: "  {POKEMON:topic} \uC77C\uB809\uD2B8\uB9AD\uD544\uB4DC\uC758 \uD798\uC73C\uB85C \uBBF8\uB798 \uAE30\uAD00\uC744 \uAC00\uB3D9\uD588\uB2E4!!"
  },
  harvest: {
    name: "\uC218\uD655",
    // Official flavor text: "사용한 나무열매를 몇 번이고 만들어 낸다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    addItem: "  {POKEMON:topic} {ITEM:object} \uC218\uD655\uD588\uB2E4!"
  },
  healer: {
    name: "\uCE58\uC720\uC758\uB9C8\uC74C",
    // Official flavor text: "같은 편의 상태 이상을 가끔 회복시킨다."
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
    name: "\uB0B4\uC5F4",
    // Official flavor text: "내열인 몸으로 인해 불꽃타입 공격의 데미지를 반감한다."
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
    name: "\uD5E4\uBE44\uBA54\uD0C8",
    // Official flavor text: "자신의 무게가 2배가 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  honeygather: {
    name: "\uAFC0\uBAA8\uC73C\uAE30",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hospitality: {
    name: "\uB300\uC811",
    shortDesc: null,
    // NEEDS TRANSLATION
    heal: "  {SOURCE:subject} \uB0B4\uC628 \uCC28\uB97C {POKEMON:subject} \uBAA8\uB450 \uBE44\uC6E0\uB2E4!"
  },
  hugepower: {
    name: "\uCC9C\uD558\uC7A5\uC0AC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hungerswitch: {
    name: "\uAF2C\uB974\uB975\uC2A4\uC704\uCE58",
    // Official flavor text: "턴이 끝날 때마다 배부른 모양, 배고픈 모양, 배부른 모양...으로 번갈아서 모습을 바꾼다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hustle: {
    name: "\uC758\uC695",
    // Official flavor text: "자신의 공격이 높아지지만 명중률이 떨어진다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydration: {
    name: "\uCD09\uCD09\uBC14\uB514",
    // Official flavor text: "비가 오는 날씨일 때 상태 이상이 회복된다."
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
    name: "\uAD34\uB825\uC9D1\uAC8C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icebody: {
    name: "\uC544\uC774\uC2A4\uBC14\uB514",
    // Official flavor text: "날씨가 싸라기눈일 때 HP를 조금씩 회복한다."
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
    name: "\uC544\uC774\uC2A4\uD398\uC774\uC2A4",
    // Official flavor text: "물리공격을 머리의 얼음이 대신 맞아주지만 모습도 바뀐다. 얼음은 싸라기눈이 내리면 원래대로 돌아온다."
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
    name: "\uC5BC\uC74C\uC778\uBD84",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  illuminate: {
    name: "\uBC1C\uAD11",
    // Official flavor text: "주변을 밝게 하는 것으로 야생 포켓몬과 만나기 쉬워진다."
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
    name: "\uC77C\uB8E8\uC804",
    // Official flavor text: "지닌 포켓몬 중 제일 뒤에 있는 포켓몬으로 둔갑하여 나와서 상대를 속인다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    end: "  {POKEMON}\uC758 \uC77C\uB8E8\uC804\uC774 \uD480\uB838\uB2E4!"
  },
  immunity: {
    name: "\uBA74\uC5ED",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  imposter: {
    name: "\uAD34\uC9DC",
    // Official flavor text: "눈앞의 포켓몬으로 변신해버린다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infiltrator: {
    name: "\uD2C8\uC0C8\uD3EC\uCC29",
    // Official flavor text: "상대의 벽이나 대타출동을 뚫고 공격할 수 있다."
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
    name: "\uB0B4\uC6A9\uBB3C\uBD84\uCD9C",
    // Official flavor text: "상대가 쓰러뜨렸을 때 HP의 남은 양만큼 상대에게 데미지를 준다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#aftermath"
  },
  innerfocus: {
    name: "\uC815\uC2E0\uB825",
    // Official flavor text: "단련한 정신으로 인하여 상대의 공격에 풀죽지 않는다."
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
    name: "\uBD88\uBA74",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  intimidate: {
    name: "\uC704\uD611",
    // Official flavor text: "등장했을 때 위협해서 상대를 위축시켜 상대의 공격을 떨어뜨린다."
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
    name: "\uBD88\uC694\uC758\uAC80",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  ironbarbs: {
    name: "\uCCA0\uAC00\uC2DC",
    // Official flavor text: "자신과 접촉한 상대에게 철가시로 데미지를 준다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#roughskin"
  },
  ironfist: {
    name: "\uCCA0\uC8FC\uBA39",
    // Official flavor text: "펀치를 사용하는 기술의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  justified: {
    name: "\uC815\uC758\uC758\uB9C8\uC74C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  keeneye: {
    name: "\uB0A0\uCE74\uB85C\uC6B4\uB208",
    // Official flavor text: "날카로운 눈 덕분에 명중률이 떨어지지 않는다."
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
    name: "\uC11C\uD22C\uB984",
    // Official flavor text: "지니고 있는 도구를 쓸 수 없다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafguard: {
    name: "\uB9AC\uD504\uAC00\uB4DC",
    // Official flavor text: "날씨가 맑을 때는 상태 이상이 되지 않는다."
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
    name: "\uBD80\uC720",
    // Official flavor text: "땅에서 뜨는 것으로 땅타입의 기술을 받지 않는다."
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
    name: "\uB9AC\uBCA0\uB85C",
    // Official flavor text: "자신이 사용한 기술과 같은 타입으로 변화한다."
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
    name: "\uB77C\uC774\uD2B8\uBA54\uD0C8",
    // Official flavor text: "자신의 무게가 절반이 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightningrod: {
    name: "\uD53C\uB8B0\uCE68",
    // Official flavor text: "전기타입의 기술을 자신에게 끌어모아 데미지를 받지 않고 특수공격을 올린다."
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
    activate: "  {POKEMON:topic} \uACF5\uACA9\uC744 \uB04C\uC5B4\uB4E4\uC600\uB2E4!"
  },
  limber: {
    name: "\uC720\uC5F0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lingeringaroma: {
    name: "\uAC00\uC2DC\uC9C0\uC54A\uB294\uD5A5\uAE30",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  {TARGET}\uC5D0\uAC8C \uD5A5\uAE30\uAC00 \uBC30\uC5B4\uC11C \uAC00\uC2DC\uC9C0 \uC54A\uAC8C \uB418\uC5C8\uB2E4!"
  },
  liquidooze: {
    name: "\uD574\uAC10\uC561",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON:topic} \uD574\uAC10\uC561\uC744 \uD761\uC218\uD588\uB2E4!"
  },
  liquidvoice: {
    name: "\uCD09\uCD09\uBCF4\uC774\uC2A4",
    // Official flavor text: "모든 소리 기술이 물타입이 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  longreach: {
    name: "\uC6D0\uACA9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicbounce: {
    name: "\uB9E4\uC9C1\uBBF8\uB7EC",
    // Official flavor text: "상대가 쓴 변화 기술을 받지 않고 그대로 되받아칠 수 있다."
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
    name: "\uB9E4\uC9C1\uAC00\uB4DC",
    // Official flavor text: "공격 이외에는 데미지를 입지 않는다."
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
    name: "\uB9E4\uC9C0\uC158",
    // Official flavor text: "기술을 맞은 상대의 도구를 빼앗아 버린다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magmaarmor: {
    name: "\uB9C8\uADF8\uB9C8\uC758\uBB34\uC7A5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magnetpull: {
    name: "\uC790\uB825",
    // Official flavor text: "강철타입의 포켓몬을 자력으로 끌어모아 도망칠 수 없게 한다."
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
    name: "\uC774\uC0C1\uD55C\uBE44\uB298",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megalauncher: {
    name: "\uBA54\uAC00\uB7F0\uCC98",
    // Official flavor text: "파동 기술의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megasol: {
    name: "\uBA54\uAC00\uC194\uB77C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  merciless: {
    name: "\uBB34\uB3C4\uD55C\uD589\uB3D9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mimicry: {
    name: "\uC758\uD0DC",
    // Official flavor text: "필드의 상태에 따라 포켓몬의 타입이 바뀐다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON}\uC758 \uD0C0\uC785\uC774 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uC544\uC654\uB2E4!"
  },
  mindseye: {
    name: "\uC2EC\uC548",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  minus: {
    name: "\uB9C8\uC774\uB108\uC2A4",
    // Official flavor text: "플러스나 마이너스의 특성을 가진 포켓몬이 동료에 있으면 자신의 특수공격이 올라간다."
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
    name: "\uBBF8\uB7EC\uC544\uBA38",
    // Official flavor text: "자신이 받는 능력 다운 효과에 한해 되받아친다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistysurge: {
    name: "\uBBF8\uC2A4\uD2B8\uBA54\uC774\uCEE4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moldbreaker: {
    name: "\uD2C0\uAE68\uAE30",
    // Official flavor text: "상대 특성에 방해받지 않고 상대에게 기술을 쓸 수 있다."
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
    start: "  {POKEMON}\uC758 \uD2C0\uAE68\uAE30!"
  },
  moody: {
    name: "\uBCC0\uB355\uC7C1\uC774",
    // Official flavor text: "매 턴 능력 중 하나가 크게 오르고 하나가 떨어진다."
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
    name: "\uC804\uAE30\uC5D4\uC9C4",
    // Official flavor text: "전기타입의 기술을 받으면 데미지를 받지 않고 스피드가 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moxie: {
    name: "\uC790\uAE30\uACFC\uC2E0",
    // Official flavor text: "상대를 쓰러뜨리면 자신감이 붙어서 공격이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multiscale: {
    name: "\uBA40\uD2F0\uC2A4\uCF00\uC77C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multitype: {
    name: "\uBA40\uD2F0\uD0C0\uC785",
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
    name: "\uBBF8\uB77C",
    // Official flavor text: "상대가 접촉하면 상대를 미라로 만들어버린다."
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
    changeAbility: "  {TARGET:topic} \uD2B9\uC131\uC774 \uBBF8\uB77C\uAC00 \uB418\uC5B4 \uBC84\uB838\uB2E4!"
  },
  myceliummight: {
    name: "\uADE0\uC0AC\uC758\uD798",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  naturalcure: {
    name: "\uC790\uC5F0\uD68C\uBCF5",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  },
  neuroforce: {
    name: "\uBE0C\uB808\uC778\uD3EC\uC2A4",
    // Official flavor text: "효과가 굉장한 공격의 위력이 더욱 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  neutralizinggas: {
    name: "\uD654\uD559\uBCC0\uD654\uAC00\uC2A4",
    // Official flavor text: "화학변화가스를 가진 포켓몬이 배틀에 나와 있으면 모든 포켓몬이 가진 특성의 효과가 사라지거나 발동하지 않게 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  \uC8FC\uC704\uAC00 \uD654\uD559\uBCC0\uD654\uAC00\uC2A4\uB85C \uAC00\uB4DD \uCC3C\uB2E4!",
    end: "  \uD654\uD559\uBCC0\uD654\uAC00\uC2A4\uC758 \uD6A8\uACFC\uAC00 \uC0AC\uB77C\uC84C\uB2E4!"
  },
  noguard: {
    name: "\uB178\uAC00\uB4DC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  normalize: {
    name: "\uB178\uB9D0\uC2A4\uD0A8",
    // Official flavor text: "어떤 타입의 기술도 모두 노말타입이 된다. 위력이 조금 올라간다."
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
    name: "\uB454\uAC10",
    // Official flavor text: "둔감해서 헤롱헤롱이나 도발 상태가 되지 않는다."
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
    name: "\uD3B8\uC2B9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  orichalcumpulse: {
    name: "\uC9C4\uD64D\uBE5B\uACE0\uB3D9",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON:topic} \uD587\uC0B4\uC744 \uAC15\uD558\uAC8C \uD558\uC5EC \uACE0\uB300\uC758 \uACE0\uB3D9\uC744 \uD3ED\uBC1C\uC2DC\uCF30\uB2E4!!",
    activate: "  {POKEMON:topic} \uD587\uC0B4\uC744 \uBC1B\uC544 \uACE0\uB300\uC758 \uACE0\uB3D9\uC744 \uD3ED\uBC1C\uC2DC\uCF30\uB2E4!!"
  },
  overcoat: {
    name: "\uBC29\uC9C4",
    // Official flavor text: "모래바람이나 싸라기눈 등의 데미지를 입지 않는다. 가루의 기술을 받지 않는다."
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
    name: "\uC2EC\uB85D",
    // Official flavor text: "HP가 줄었을 때 풀타입 기술의 위력이 올라간다."
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
    name: "\uB9C8\uC774\uD398\uC774\uC2A4",
    // Official flavor text: "마이페이스라서 혼란 상태가 되지 않는다."
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
    name: "\uBD80\uC790\uC720\uCE5C",
    // Official flavor text: "부모와 자식 2마리로 2번 공격할 수 있다."
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
    name: "\uD30C\uC2A4\uD154\uBCA0\uC77C",
    // Official flavor text: "자신과 같은 편이 독의 상태 이상 효과를 받지 않게 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  perishbody: {
    name: "\uBA78\uB9DD\uC758\uBC14\uB514",
    // Official flavor text: "접촉하는 기술을 받으면 3턴 후에 양쪽 모두 기절한다. 교체되면 효과가 없어진다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \uB450 \uD3EC\uCF13\uBAAC \uBAA8\uB450 3\uD134 \uD6C4\uC5D0 \uC4F0\uB7EC\uC838 \uBC84\uB9B0\uB2E4!"
  },
  pickpocket: {
    name: "\uB098\uC05C\uC190\uBC84\uB987",
    // Official flavor text: "접촉한 상대의 도구를 훔친다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pickup: {
    name: "\uD53D\uC5C5",
    // Official flavor text: "상대가 사용한 도구를 주워올 때가 있다. 모험 중에도 주워온다."
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
    name: "\uAD00\uD1B5\uB4DC\uB9B4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pixilate: {
    name: "\uD398\uC5B4\uB9AC\uC2A4\uD0A8",
    // Official flavor text: "노말타입의 기술이 페어리타입이 된다. 위력이 조금 올라간다."
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
    name: "\uD50C\uB7EC\uC2A4",
    // Official flavor text: "플러스나 마이너스의 특성을 가진 포켓몬이 동료에 있으면 자신의 특수공격이 올라간다."
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
    name: "\uD3EC\uC774\uC98C\uD790",
    // Official flavor text: "독 상태가 되면 HP가 줄지 않고 증가한다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisonpoint: {
    name: "\uB3C5\uAC00\uC2DC",
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
    name: "\uB3C5\uC870\uC885",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisontouch: {
    name: "\uB3C5\uC218",
    // Official flavor text: "접촉하기만 해도 상대를 독 상태로 만들 때가 있다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powerconstruct: {
    name: "\uC2A4\uC6DC\uCCB4\uC778\uC9C0",
    // Official flavor text: "HP가 절반이 되면 셀들이 응원하러 달려와 퍼펙트폼으로 모습이 변한다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \uB9CE\uC740 \uAE30\uCC99\uC774 \uB290\uAEF4\uC9C4\uB2E4...!",
    transform: "{POKEMON:topic} \uD37C\uD399\uD2B8\uD3FC\uC73C\uB85C \uBC14\uB00C\uC5C8\uB2E4!"
  },
  powerofalchemy: {
    name: "\uACFC\uD559\uC758\uD798",
    // Official flavor text: "쓰러진 같은 편의 특성을 이어받아 같은 특성으로 바뀐다."
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
    name: "\uD30C\uC6CC\uC2A4\uD3FF",
    // Official flavor text: "옆에 있기만 해도 기술의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prankster: {
    name: "\uC9D3\uAD82\uC740\uB9C8\uC74C",
    // Official flavor text: "변화 기술을 먼저 쓸 수 있다."
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
    name: "\uD504\uB808\uC154",
    // Official flavor text: "프레셔를 줘서 상대가 쓰는 기술의 PP를 많이 줄인다."
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
    start: "  {POKEMON:topic} \uD504\uB808\uC154\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  primordialsea: {
    name: "\uC2DC\uC791\uC758\uBC14\uB2E4",
    // Official flavor text: "불꽃타입의 공격을 받지 않는 날씨로 만든다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prismarmor: {
    name: "\uD504\uB9AC\uC998\uC544\uBA38",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  propellertail: {
    name: "\uC2A4\uD06C\uB8E8\uC9C0\uB290\uB7EC\uBBF8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  protean: {
    name: "\uBCC0\uD658\uC790\uC7AC",
    // Official flavor text: "자신이 사용한 기술과 같은 타입으로 변화한다."
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
    name: "\uACE0\uB300\uD65C\uC131",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON:topic} \uCF8C\uCCAD\uC5D0 \uC758\uD574 \uACE0\uB300\uD65C\uC131\uC744 \uBC1C\uB3D9\uD588\uB2E4!",
    activateFromItem: "  {POKEMON:topic} \uBD80\uC2A4\uD2B8\uC5D0\uB108\uC9C0\uC5D0 \uC758\uD574 \uACE0\uB300\uD65C\uC131\uC744 \uBC1C\uB3D9\uD588\uB2E4!",
    start: "  {POKEMON}\uC758 {STAT:subject} \uAC15\uD654\uB418\uC5C8\uB2E4!",
    end: "  {POKEMON}\uC5D0\uAC8C\uC11C \uACE0\uB300\uD65C\uC131\uC758 \uD6A8\uACFC\uAC00 \uC0AC\uB77C\uC84C\uB2E4!"
  },
  psychicsurge: {
    name: "\uC0AC\uC774\uCF54\uBA54\uC774\uCEE4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  punkrock: {
    name: "\uD391\uD06C\uB85D",
    // Official flavor text: "소리 기술의 위력이 올라간다. 상대로부터 받는 소리 기술의 데미지는 절반이 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purepower: {
    name: "\uC21C\uC218\uD55C\uD798",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purifyingsalt: {
    name: "\uC815\uD654\uC758\uC18C\uAE08",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  quarkdrive: {
    name: "\uCFFC\uD06C\uCC28\uC9C0",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON:topic} \uC77C\uB809\uD2B8\uB9AD\uD544\uB4DC\uC5D0 \uC758\uD574 \uCFFC\uD06C\uCC28\uC9C0\uB97C \uBC1C\uB3D9\uD588\uB2E4!",
    activateFromItem: "  {POKEMON:topic} \uBD80\uC2A4\uD2B8\uC5D0\uB108\uC9C0\uC5D0 \uC758\uD574 \uCFFC\uD06C\uCC28\uC9C0\uB97C \uBC1C\uB3D9\uD588\uB2E4!",
    start: "  {POKEMON}\uC758 {STAT:subject} \uAC15\uD654\uB418\uC5C8\uB2E4!",
    end: "  {POKEMON}\uC5D0\uAC8C\uC11C \uCFFC\uD06C\uCC28\uC9C0\uC758 \uD6A8\uACFC\uAC00 \uC0AC\uB77C\uC84C\uB2E4!"
  },
  queenlymajesty: {
    name: "\uC5EC\uC655\uC758\uC704\uC5C4",
    // Official flavor text: "상대에게 위압감을 줘서 이쪽을 향한 선제 기술을 사용할 수 없게 한다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  quickdraw: {
    name: "\uD035\uB4DC\uB85C",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON:topic} \uD035\uB4DC\uB85C\uC5D0 \uC758\uD574 \uD589\uB3D9\uC774 \uBE68\uB77C\uC84C\uB2E4!"
  },
  quickfeet: {
    name: "\uC18D\uBCF4",
    // Official flavor text: "상태 이상이 되면 스피드가 올라간다."
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
    name: "\uC816\uC740\uC811\uC2DC",
    // Official flavor text: "비가 오는 날씨일 때 조금씩 HP를 회복한다."
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
    name: "\uC8FC\uB205",
    // Official flavor text: "악타입과 고스트타입과 벌레타입의 기술을 받으면 주눅이 들어 스피드가 올라간다."
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
    name: "\uB9AC\uC2DC\uBC84",
    // Official flavor text: "쓰러진 같은 편의 특성을 이어받아 같은 특성이 된다."
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
    changeAbility: "  {SOURCE}\uC758 {ABILITY:object} \uC774\uC5B4\uBC1B\uC558\uB2E4!"
  },
  reckless: {
    name: "\uC774\uD310\uC0AC\uD310",
    // Official flavor text: "반동 데미지를 받는 기술의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  refrigerate: {
    name: "\uD504\uB9AC\uC988\uC2A4\uD0A8",
    // Official flavor text: "노말타입의 기술이 얼음타입이 된다. 위력이 조금 올라간다."
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
    name: "\uC7AC\uC0DD\uB825",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ripen: {
    name: "\uC219\uC131",
    // Official flavor text: "나무열매를 숙성시켜서 효과가 2배가 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rivalry: {
    name: "\uD22C\uC7C1\uC2EC",
    // Official flavor text: "성별이 같으면 투쟁심을 불태워 강해진다. 성별이 다르면 약해진다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rkssystem: {
    name: "AR\uC2DC\uC2A4\uD15C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockhead: {
    name: "\uB3CC\uBA38\uB9AC",
    // Official flavor text: "반동을 받는 기술을 사용해도 HP가 줄지 않는다."
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
    name: "\uBC14\uC704\uB098\uB974\uAE30",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  roughskin: {
    name: "\uAE4C\uCE60\uD55C\uD53C\uBD80",
    // Official flavor text: "공격을 받았을 때 자신에게 접촉한 상대를 까칠까칠한 피부로 상처를 입힌다."
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
    damage: "  {POKEMON:topic} \uB370\uBBF8\uC9C0\uB97C \uC785\uC5C8\uB2E4!"
  },
  runaway: {
    name: "\uB3C4\uC8FC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandforce: {
    name: "\uBAA8\uB798\uC758\uD798",
    // Official flavor text: "날씨가 모래바람일 때 바위타입과 땅타입과 강철타입의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandrush: {
    name: "\uBAA8\uB798\uD5E4\uCE58\uAE30",
    // Official flavor text: "날씨가 모래바람일 때 스피드가 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandspit: {
    name: "\uBAA8\uB798\uBFDC\uAE30",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sandstream: {
    name: "\uBAA8\uB798\uB0A0\uB9BC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandveil: {
    name: "\uBAA8\uB798\uC228\uAE30",
    // Official flavor text: "모래바람일 때 회피율이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sapsipper: {
    name: "\uCD08\uC2DD",
    // Official flavor text: "풀타입 기술을 받으면 데미지를 입지 않고 공격이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  schooling: {
    name: "\uC5B4\uAD70",
    // Official flavor text: "HP가 많을 때 무리지어 강해진다. HP가 얼마 남지 않으면 무리는 뿔뿔이 흩어진다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON}\uC758 \uBB34\uB9AC\uAC00 \uBAA8\uC600\uB2E4!",
    transformEnd: "{POKEMON}\uC758 \uBB34\uB9AC\uB294 \uBFD4\uBFD4\uC774 \uD769\uC5B4\uC84C\uB2E4!"
  },
  scrappy: {
    name: "\uBC30\uC9F1",
    // Official flavor text: "고스트타입 포켓몬에게 노말타입과 격투타입의 기술을 맞게 한다."
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
    name: "\uBC30\uB9AC\uC5B4\uD504\uB9AC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seedsower: {
    name: "\uB118\uCE58\uB294\uC528",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  serenegrace: {
    name: "\uD558\uB298\uC758\uC740\uCD1D",
    // Official flavor text: "하늘의 은총 덕분에 기술의 추가 효과가 나오기 쉽다."
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
    name: "\uC2A4\uD399\uD130\uAC00\uB4DC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowtag: {
    name: "\uADF8\uB9BC\uC790\uBC1F\uAE30",
    // Official flavor text: "상대의 그림자를 밟아 도망치거나 교체할 수 없게 한다."
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
    name: "\uC608\uB9AC\uD568",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shedskin: {
    name: "\uD0C8\uD53C",
    // Official flavor text: "몸의 껍질을 벗어 던져 상태 이상을 회복할 때가 있다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sheerforce: {
    name: "\uC6B0\uACA9\uB2E4\uC9D0",
    // Official flavor text: "기술의 추가 효과가 없어지지만 그만큼 높은 위력으로 기술을 사용할 수 있다."
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
    name: "\uC870\uAC00\uBE44\uAC11\uC637",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shielddust: {
    name: "\uC778\uBD84",
    // Official flavor text: "인분에 보호받아 기술의 추가 효과를 받지 않게 된다."
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
    name: "\uB9AC\uBC0B\uC2E4\uB4DC",
    // Official flavor text: "HP가 절반이 되면 껍질이 깨져 공격적으로 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "\uB9AC\uBC0B\uC2E4\uB4DC \uBC1C\uB3D9!",
    transformEnd: "\uB9AC\uBC0B\uC2E4\uB4DC \uD574\uC81C!"
  },
  simple: {
    name: "\uB2E8\uC21C",
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
    name: "\uC2A4\uD0AC\uB9C1\uD06C",
    // Official flavor text: "연속 기술을 사용하면 항상 최고 횟수를 사용할 수 있다."
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
    name: "\uC2AC\uB85C\uC2A4\uD0C0\uD2B8",
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
    start: "  {POKEMON:topic} \uCEE8\uB514\uC158\uC774 \uC88B\uC544\uC9C0\uC9C0 \uC54A\uB294\uB2E4!",
    end: "  {POKEMON:topic} \uCEE8\uB514\uC158\uC744 \uD68C\uBCF5\uD588\uB2E4!"
  },
  slushrush: {
    name: "\uB208\uCE58\uC6B0\uAE30",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sniper: {
    name: "\uC2A4\uB098\uC774\uD37C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snowcloak: {
    name: "\uB208\uC228\uAE30",
    // Official flavor text: "날씨가 싸라기눈일 때 회피율이 올라간다."
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
    name: "\uB208\uD37C\uB728\uB9AC\uAE30",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  solarpower: {
    name: "\uC120\uD30C\uC6CC",
    // Official flavor text: "날씨가 맑으면 특수공격이 올라가지만 매 턴 HP가 줄어든다."
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
    name: "\uD558\uB4DC\uB85D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soulheart: {
    name: "\uC18C\uC6B8\uD558\uD2B8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soundproof: {
    name: "\uBC29\uC74C",
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
    name: "\uAC00\uC18D",
    // Official flavor text: "매 턴 스피드가 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spicyspray: {
    name: "\uD558\uBC14\uB124\uB85C\uBD84\uCD9C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stakeout: {
    name: "\uC7A0\uBCF5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stall: {
    name: "\uC2DC\uAC04\uBC8C\uAE30",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stalwart: {
    name: "\uAD73\uAC74\uD55C\uC2E0\uB150",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stamina: {
    name: "\uC9C0\uAD6C\uB825",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stancechange: {
    name: "\uBC30\uD2C0\uC2A4\uC704\uCE58",
    // Official flavor text: "공격 기술을 쓰면 블레이드폼으로 기술 킹실드를 쓰면 실드폼으로 변한다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "\uBE14\uB808\uC774\uB4DC\uD3FC \uCCB4\uC778\uC9C0!",
    transformEnd: "\uC2E4\uB4DC\uD3FC \uCCB4\uC778\uC9C0!"
  },
  static: {
    name: "\uC815\uC804\uAE30",
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
    name: "\uBD88\uAD74\uC758\uB9C8\uC74C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steamengine: {
    name: "\uC99D\uAE30\uAE30\uAD00",
    // Official flavor text: "물타입이나 불꽃타입 기술을 받으면 스피드가 매우 크게 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelworker: {
    name: "\uAC15\uCCA0\uC220\uC0AC",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelyspirit: {
    name: "\uAC15\uCCA0\uC815\uC2E0",
    // Official flavor text: "같은 편의 강철타입 공격의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stench: {
    name: "\uC545\uCDE8",
    // Official flavor text: "악취를 풍겨서 공격했을 때 상대가 풀죽을 때가 있다."
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
    name: "\uC810\uCC29",
    // Official flavor text: "점착질의 몸에 도구가 달라붙어 있어 상대에게 도구를 뺏기지 않는다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    block: "  {POKEMON}\uC758 \uB3C4\uAD6C\uB97C \uBE7C\uC557\uC744 \uC218 \uC5C6\uB2E4!"
  },
  stormdrain: {
    name: "\uB9C8\uC911\uBB3C",
    // Official flavor text: "물타입의 기술을 자신에게 끌어모아 데미지는 받지 않고 특수공격이 올라간다."
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
    name: "\uC639\uACE8\uCC2C\uD131",
    // Official flavor text: "턱이 튼튼하여 무는 기술의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sturdy: {
    name: "\uC639\uACE8\uCC38",
    // Official flavor text: "상대 기술을 받아도 일격으로 쓰러지지 않는다. 일격필살 기술도 효과 없다."
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
    activate: "  {POKEMON:topic} \uACF5\uACA9\uC744 \uBC84\uD17C\uB2E4!"
  },
  suctioncups: {
    name: "\uD761\uBC18",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON:topic} \uD761\uBC18 \uB54C\uBB38\uC5D0 \uB4E4\uB7EC\uBD99\uC5B4 \uC788\uB2E4!"
  },
  superluck: {
    name: "\uB300\uC6B4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersweetsyrup: {
    name: "\uAC10\uBBF8\uB85C\uC6B4\uAFC0",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\uC758 \uAFC0\uC5D0\uC11C \uB2EC\uCF64\uD55C \uD5A5\uAE30\uAC00 \uB098\uACE0 \uC788\uB2E4!"
  },
  supremeoverlord: {
    name: "\uCD1D\uB300\uC7A5",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON:topic} \uC4F0\uB7EC\uC9C4 \uB3D9\uB8CC\uC5D0\uAC8C\uC11C \uD798\uC744 \uBC1B\uC558\uB2E4!"
  },
  surgesurfer: {
    name: "\uC11C\uD551\uD14C\uC77C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  swarm: {
    name: "\uBC8C\uB808\uC758\uC54C\uB9BC",
    // Official flavor text: "HP가 줄었을 때 벌레타입 기술의 위력이 올라간다."
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
    name: "\uC2A4\uC704\uD2B8\uBCA0\uC77C",
    // Official flavor text: "같은 편의 포켓몬이 잠들지 않게 된다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON:topic} \uC2A4\uC704\uD2B8\uBCA0\uC77C \uB54C\uBB38\uC5D0 \uC7A0\uB4E4\uC9C0 \uC54A\uB294\uB2E4!"
  },
  swiftswim: {
    name: "\uC4F1\uC4F1",
    // Official flavor text: "비가 오는 날씨일 때 스피드가 올라간다."
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
    name: "\uC7AC\uC559\uC758\uAC80",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\uC758 \uC7AC\uC559\uC758\uAC80\uC5D0 \uC758\uD574 \uC8FC\uC704\uC758 \uBC29\uC5B4\uAC00 \uC57D\uD574\uC84C\uB2E4!"
  },
  symbiosis: {
    name: "\uACF5\uC0DD",
    // Official flavor text: "같은 편이 도구를 쓰면 자신이 지니고 있는 도구를 같은 편에게 건넨다."
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
    activate: "  {POKEMON:topic} {ITEM:object} {TARGET}\uC5D0\uAC8C \uC9C0\uB2C8\uAC8C \uD588\uB2E4!"
  },
  synchronize: {
    name: "\uC2F1\uD06C\uB85C",
    // Official flavor text: "자신이 걸린 독이나 마비, 화상을 상대에게 옮긴다."
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
    name: "\uC7AC\uC559\uC758\uBAA9\uAC04",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\uC758 \uC7AC\uC559\uC758\uBAA9\uAC04\uC5D0 \uC758\uD574 \uC8FC\uC704\uC758 \uACF5\uACA9\uC774 \uC57D\uD574\uC84C\uB2E4!"
  },
  tangledfeet: {
    name: "\uAC08\uC9C0\uC790\uAC78\uC74C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tanglinghair: {
    name: "\uCEEC\uB9AC\uD5E4\uC5B4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  technician: {
    name: "\uD14C\uD06C\uB2C8\uC158",
    // Official flavor text: "위력이 약한 기술의 위력을 올려서 공격할 수 있다."
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
    name: "\uD154\uB808\uD30C\uC2DC",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON:topic} \uAC19\uC740 \uD3B8\uC758 \uACF5\uACA9\uC744 \uBC1B\uC9C0 \uC54A\uB294\uB2E4!"
  },
  teraformzero: {
    name: "\uC81C\uB85C\uD3EC\uBC0D",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terashell: {
    name: "\uD14C\uB77C\uC178",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON:topic} \uB4F1\uAECD\uC9C8\uC744 \uBE5B\uB098\uAC8C \uD558\uC5EC \uD0C0\uC785 \uC0C1\uC131\uC744 \uC65C\uACE1\uC2DC\uCF30\uB2E4!!"
  },
  terashift: {
    name: "\uD14C\uB77C\uCCB4\uC778\uC9C0",
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON}\uC758 \uBAA8\uC2B5\uC774 \uBCC0\uD654\uD588\uB2E4!"
  },
  teravolt: {
    name: "\uD14C\uB77C\uBCFC\uD2F0\uC9C0",
    // Official flavor text: "상대 특성에 방해받지 않고 상대에게 기술을 쓸 수 있다."
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
    start: "  {POKEMON:topic} \uC138\uCC28\uAC8C \uD280\uB294 \uC624\uB77C\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  thermalexchange: {
    name: "\uC5F4\uAD50\uD658",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thickfat: {
    name: "\uB450\uAEBC\uC6B4\uC9C0\uBC29",
    // Official flavor text: "두꺼운 지방으로 보호되고 있어 불꽃타입과 얼음타입의 기술의 데미지를 반감시킨다."
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
    name: "\uC0C9\uC548\uACBD",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torrent: {
    name: "\uAE09\uB958",
    // Official flavor text: "HP가 줄었을 때 물타입 기술의 위력이 올라간다."
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
    name: "\uB2E8\uB2E8\uD55C\uBC1C\uD1B1",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicboost: {
    name: "\uB3C5\uD3ED\uC8FC",
    // Official flavor text: "독 상태가 되었을 때 물리 기술의 위력이 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicchain: {
    name: "\uB3C5\uC0AC\uC2AC",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicdebris: {
    name: "\uB3C5\uCE58\uC7A5",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trace: {
    name: "\uD2B8\uB808\uC774\uC2A4",
    // Official flavor text: "등장했을 때 상대의 특성을 트레이스해서 같은 특성이 된다."
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
    changeAbility: "  {POKEMON:topic} {SOURCE}\uC758 {ABILITY:object} \uD2B8\uB808\uC774\uC2A4\uD588\uB2E4!"
  },
  transistor: {
    name: "\uD2B8\uB79C\uC9C0\uC2A4\uD130",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  triage: {
    name: "\uD790\uB9C1\uC2DC\uD504\uD2B8",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  truant: {
    name: "\uAC8C\uC73C\uB984",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    cant: "{POKEMON:topic} \uAC8C\uC73C\uB984\uC744 \uD53C\uC6B0\uACE0 \uC788\uB2E4."
  },
  turboblaze: {
    name: "\uD130\uBCF4\uBE14\uB808\uC774\uC988",
    // Official flavor text: "상대 특성에 방해받지 않고 상대에게 기술을 쓸 수 있다."
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
    start: "  {POKEMON:topic} \uD65C\uD65C \uD0C0\uC624\uB974\uB294 \uC624\uB77C\uB97C \uBC1C\uC0B0\uD558\uACE0 \uC788\uB2E4!"
  },
  unaware: {
    name: "\uCC9C\uC9C4",
    // Official flavor text: "상대의 능력 변화를 무시하고 공격할 수 있다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unburden: {
    name: "\uACE1\uC608",
    // Official flavor text: "지니던 도구가 없어지면 스피드가 올라간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unnerve: {
    name: "\uAE34\uC7A5\uAC10",
    // Official flavor text: "상대를 긴장시켜 나무열매를 먹지 못하게 한다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {TEAM:topic} \uAE34\uC7A5\uD574\uC11C \uB098\uBB34\uC5F4\uB9E4\uB97C \uBA39\uC744 \uC218 \uC5C6\uAC8C \uB418\uC5C8\uB2E4!"
  },
  unseenfist: {
    name: "\uBCF4\uC774\uC9C0\uC54A\uB294\uC8FC\uBA39",
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "\uC7AC\uC559\uC758\uADF8\uB987",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON}\uC758 \uC7AC\uC559\uC758\uADF8\uB987\uC5D0 \uC758\uD574 \uC8FC\uC704\uC758 \uD2B9\uC218\uACF5\uACA9\uC774 \uC57D\uD574\uC84C\uB2E4!"
  },
  victorystar: {
    name: "\uC2B9\uB9AC\uC758\uBCC4",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vitalspirit: {
    name: "\uC758\uAE30\uC591\uC591",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  voltabsorb: {
    name: "\uCD95\uC804",
    // Official flavor text: "전기타입의 기술을 받으면 데미지를 받지 않고 회복한다."
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
    name: "\uB5A0\uB3C4\uB294\uC601\uD63C",
    // Official flavor text: "접촉하는 기술로 공격해온 포켓몬과 특성을 바꾼다."
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
    name: "\uC800\uC218",
    // Official flavor text: "물타입의 기술을 받으면 데미지를 받지 않고 회복한다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterbubble: {
    name: "\uC218\uD3EC",
    // Official flavor text: "자신을 향하는 불꽃타입 기술의 위력을 떨어뜨린다. 화상을 입지 않는다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  watercompaction: {
    name: "\uAFB8\uB355\uAFB8\uB355\uAD73\uAE30",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterveil: {
    name: "\uC218\uC758\uBCA0\uC77C",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  weakarmor: {
    name: "\uAE68\uC5B4\uC9C4\uAC11\uC637",
    // Official flavor text: "물리 기술로 데미지를 받으면 방어가 떨어지고 스피드가 크게 올라간다."
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
    name: "\uB178\uB987\uB178\uB987\uBC14\uB514",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  whitesmoke: {
    name: "\uD558\uC580\uC5F0\uAE30",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wimpout: {
    name: "\uB3C4\uB9DD\uD0DC\uC138",
    // Official flavor text: "HP가 절반이 되면 황급히 도망쳐서 지닌 포켓몬으로 돌아간다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  windpower: {
    name: "\uD48D\uB825\uBC1C\uC804",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#electromorphosis"
  },
  windrider: {
    name: "\uBC14\uB78C\uD0C0\uAE30",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wonderguard: {
    name: "\uBD88\uAC00\uC0AC\uC758\uBD80\uC801",
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
    name: "\uBBF8\uB77C\uD074\uC2A4\uD0A8",
    // Official flavor text: "변화 기술을 받기 어려운 몸으로 되어 있다."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zenmode: {
    name: "\uB2EC\uB9C8\uBAA8\uB4DC",
    // Official flavor text: "HP가 절반 이하가 되면 모습이 변화한다."
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
    transform: "\uB2EC\uB9C8\uBAA8\uB4DC \uBC1C\uB3D9!",
    transformEnd: "\uB2EC\uB9C8\uBAA8\uB4DC \uD574\uC81C!"
  },
  zerotohero: {
    name: "\uB9C8\uC774\uD2F0\uCCB4\uC778\uC9C0",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON:topic} \uBCC0\uC2E0\uD558\uACE0 \uB3CC\uC544\uC654\uB2E4!"
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
