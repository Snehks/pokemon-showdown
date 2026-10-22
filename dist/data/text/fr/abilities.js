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
    name: "Adaptabilit\xE9",
    // Official flavor text: "Quand le Pokémon utilise une capacité du même type que lui, le bonus de puissance qu'elle reçoit est encore plus important que normalement."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aerilate: {
    name: "Peau C\xE9leste",
    // Official flavor text: "Les capacités de type Normal deviennent de type Vol. Leur puissance augmente légèrement."
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
    name: "Boom Final",
    // Official flavor text: "Si le Pokémon est mis K.O. par une attaque directe, il inflige des dégâts à l’attaquant avant de s’évanouir."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "  {POKEMON} est bless\xE9 !"
  },
  airlock: {
    name: "Air Lock",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Les effets de la m\xE9t\xE9o se dissipent !"
  },
  analytic: {
    name: "Analyste",
    // Official flavor text: "Augmente la puissance des capacités du Pokémon s’il attaque en dernier."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  angerpoint: {
    name: "Col\xE9rique",
    // Official flavor text: "Si le Pokémon subit un coup critique, il entre dans une colère noire qui augmente son Attaque au maximum."
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
    boost: "  {POKEMON} monte son Attaque au maximum !"
  },
  angershell: {
    name: "Courroupace",
    // Official flavor text: "Le Pokémon enrage s’il a moins de la moitié de ses PV après avoir subi une attaque. Sa Déf. et sa Déf. Spé. baissent, et son Atq., son Atq. Spé. et sa Vit. augmentent."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  anticipation: {
    name: "Anticipation",
    // Official flavor text: "Le Pokémon devine si l'adversaire connaît une capacité dangereuse pour lui."
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
    activate: "  {POKEMON} est tout tremblant !"
  },
  arenatrap: {
    name: "Pi\xE8ge Sable",
    // Official flavor text: "Empêche l'adversaire de quitter le terrain."
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
    name: "Armure Caudale",
    // Official flavor text: "Une étrange queue recouvre la tête du Pokémon, ce qui empêche ce dernier et ses alliés d’être visés par une capacité prioritaire."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  aromaveil: {
    name: "Aroma-Voile",
    // Official flavor text: "Protège le Pokémon et ses alliés des effets limitant le libre arbitre."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} est prot\xE9g\xE9 par Aroma-Voile !"
  },
  asone: {
    name: "Osmose \xC9quine",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} a deux talents !"
  },
  asoneglastrier: {
    name: "Osmose \xC9quine (Blizzeval)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  asonespectrier: {
    name: "Osmose \xC9quine (Spectreval)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurabreak: {
    name: "Aura Invers\xE9e",
    // Official flavor text: "Inverse l’effet des talents « Aura » afin que ceux-ci baissent la puissance des capacités affectées au lieu de l’augmenter."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} inverse toutes les auras !"
  },
  auraguard: {
    name: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  baddreams: {
    name: "Mauvais R\xEAve",
    // Official flavor text: "Inflige des dégâts aux ennemis endormis."
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
    damage: "  {POKEMON} a le sommeil agit\xE9 !"
  },
  ballfetch: {
    name: "Ramasse Ball",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battery: {
    name: "Batterie",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlearmor: {
    name: "Armurbaston",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlebond: {
    name: "Synergie",
    // Official flavor text: "En battant un ennemi, ce Pokémon renforce ses liens avec son Dresseur, ce qui augmente son Attaque, son Attaque Spéciale et sa Vitesse."
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
    activate: "  {POKEMON} sent la force de la synergie !",
    transform: "{POKEMON} se transforme en Sachanobi !"
  },
  beadsofruin: {
    name: "Perles du Fl\xE9au",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Les Perles du Fl\xE9au {POKEMON:de} affaiblissent la D\xE9fense Sp\xE9ciale des Pok\xE9mon alentour !"
  },
  beastboost: {
    name: "Boost Chim\xE8re",
    // Official flavor text: "Augmente la stat la plus élevée du Pokémon quand il met K.O. un autre Pokémon."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  berserk: {
    name: "Folle Furie",
    // Official flavor text: "Augmente l’Attaque Spéciale du Pokémon lorsque ses PV tombent à la moitié à cause d’une attaque de l’adversaire."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bigpecks: {
    name: "C\u0153ur de Coq",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blaze: {
    name: "Brasier",
    // Official flavor text: "Augmente la puissance des capacités de type Feu du Pokémon quand il a perdu une certaine quantité de PV."
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
    name: "Pare-Balles",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cheekpouch: {
    name: "Bajoues",
    // Official flavor text: "Le Pokémon récupère des PV lorsqu’il consomme n’importe quelle Baie en plus de bénéficier de ses effets habituels."
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
    name: "Blanche Ruade",
    // Official flavor text: "Quand le Pokémon met un ennemi K.O., il émet un hennissement glaçant, ce qui augmente son Attaque."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chlorophyll: {
    name: "Chlorophylle",
    // Official flavor text: "Augmente la Vitesse du Pokémon s'il y a du soleil."
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
    name: "Corps Sain",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cloudnine: {
    name: "Ciel Gris",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#airlock"
  },
  colorchange: {
    name: "Homochromie",
    // Official flavor text: "Lorsque le Pokémon est touché par une capacité, il prend le type de celle-ci."
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
    name: "Hypersommeil",
    // Official flavor text: "Le Pokémon rêve en permanence et ne se réveille jamais. Il est capable d’attaquer normalement tout en dormant."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} est en Hypersommeil !"
  },
  commander: {
    name: "Commandant",
    // Official flavor text: "Si un Oyacata allié est sur le terrain quand ce Pokémon rejoint le combat, ce dernier entre dans sa bouche et devient son commandant."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} a \xE9t\xE9 aval\xE9 par {TARGET} et devient son commandant."
  },
  competitive: {
    name: "Battant",
    // Official flavor text: "Augmente beaucoup l’Attaque Spéciale du Pokémon quand ses stats ont été baissées par l’adversaire."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  compoundeyes: {
    name: "\u0152il Compos\xE9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  contrary: {
    name: "Contestation",
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
    name: "Corrosion",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  costar: {
    name: "Collab",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cottondown: {
    name: "Effilochage",
    // Official flavor text: "Quand le Pokémon est touché par une attaque, il dissémine des aigrettes qui diminuent la Vitesse de tout le monde, sauf la sienne."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cudchew: {
    name: "Ruminant",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  curiousmedicine: {
    name: "Breuvage Suspect",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cursedbody: {
    name: "Corps Maudit",
    // Official flavor text: "Quand le Pokémon est touché par une capacité adverse, il inflige parfois Entrave sur celle-ci."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cutecharm: {
    name: "Joli Sourire",
    // Official flavor text: "Peut séduire l'attaquant lorsque le Pokémon subit une attaque directe."
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
    name: "Moiteur",
    // Official flavor text: "Le Pokémon augmente l'humidité de l'air, ce qui empêche tous les Pokémon d'utiliser des capacités explosives telles que Destruction."
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
    block: "  {SOURCE} ne peut pas utiliser la capacit\xE9 {MOVE} !"
  },
  dancer: {
    name: "Danseuse",
    // Official flavor text: "Si n’importe quel Pokémon utilise une capacité dansante, le Pokémon utilise immédiatement cette danse lui aussi."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkaura: {
    name: "Aura T\xE9n\xE9breuse",
    // Official flavor text: "Augmente la puissance des capacités de type Ténèbres de tous les Pokémon."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} d\xE9gage une aura t\xE9n\xE9breuse !"
  },
  dauntlessshield: {
    name: "\xC9gide Inflexible",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  dazzling: {
    name: "Corps Color\xE9",
    // Official flavor text: "L’adversaire est abasourdi par le Pokémon, ce qui l’empêche de viser ce dernier et ses alliés avec une capacité prioritaire."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  defeatist: {
    name: "D\xE9faitiste",
    // Official flavor text: "Le Pokémon devient défaitiste quand ses PV tombent à la moitié, et son Attaque et son Attaque Spéciale sont divisées par deux."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defiant: {
    name: "Acharn\xE9",
    // Official flavor text: "Augmente beaucoup l'Attaque du Pokémon quand ses stats sont baissées par l'adversaire."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  deltastream: {
    name: "Souffle Delta",
    // Official flavor text: "Altère les conditions météo pour annuler les faiblesses du type Vol."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  desolateland: {
    name: "Terre Finale",
    // Official flavor text: "Altère les conditions météo pour neutraliser les attaques de type Eau."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  disguise: {
    name: "Fant\xF4masque",
    // Official flavor text: "Le déguisement qui recouvre le corps du Pokémon est capable de le protéger d’une attaque."
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
    block: "  Le d\xE9guisement absorbe l\u2019attaque !",
    transform: "Le d\xE9guisement {POKEMON:de} tombe !"
  },
  download: {
    name: "T\xE9l\xE9charge",
    // Official flavor text: "Le Pokémon compare la Défense et la Défense Spéciale de l’adversaire et, en fonction de la stat la plus basse, il augmente sa propre Attaque ou Attaque Spéciale."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonize: {
    name: "Peau Draconique",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonsmaw: {
    name: "Dent de Dragon",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drizzle: {
    name: "Crachin",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drought: {
    name: "S\xE9cheresse",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dryskin: {
    name: "Peau S\xE8che",
    // Official flavor text: "Quand le soleil brille, le Pokémon perd des PV et subit plus de dégâts des capacités Feu, mais il regagne des PV lorsqu'il pleut ou s'il est touché par une capacité Eau."
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
    name: "Matinal",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eartheater: {
    name: "Absorbe-Terre",
    // Official flavor text: "Si le Pokémon est touché par une capacité de type Sol, il regagne des PV au lieu de subir des dégâts."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eelevate: {
    name: "L\xE9vitaboost",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  effectspore: {
    name: "Pose Spore",
    // Official flavor text: "Peut paralyser, empoisonner ou endormir l'attaquant lorsque le Pokémon subit une attaque directe."
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
    name: "Cr\xE9a-\xC9lec",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electromorphosis: {
    name: "Grecharge",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} a \xE9t\xE9 touch\xE9 par la capacit\xE9 {MOVE} et se charge en \xE9lectricit\xE9 !"
  },
  embodyaspectcornerstone: {
    name: "Force M\xE9morielle (Pierre)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON} fait briller le Masque de la Pierre et sa D\xE9fense augmente !"
  },
  embodyaspecthearthflame: {
    name: "Force M\xE9morielle (Fourneau)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON} fait briller le Masque du Fourneau et son Attaque augmente !"
  },
  embodyaspectteal: {
    name: "Force M\xE9morielle (Turquoise)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON} fait briller le Masque Turquoise et sa Vitesse augmente !"
  },
  embodyaspectwellspring: {
    name: "Force M\xE9morielle (Puits)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  {POKEMON} fait briller le Masque du Puits et sa D\xE9fense Sp\xE9ciale augmente !"
  },
  emergencyexit: {
    name: "Repli Tactique",
    // Official flavor text: "Le Pokémon évite les situations inutilement dangereuses. Quand ses PV tombent à la moitié, il se réfugie dans sa Poké Ball."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fairyaura: {
    name: "Aura F\xE9\xE9rique",
    // Official flavor text: "Augmente la puissance des capacités de type Fée de tous les Pokémon."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} d\xE9gage une aura f\xE9\xE9rique !"
  },
  filter: {
    name: "Filtre",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firemane: {
    name: "Crini\xE8re de Feu",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamebody: {
    name: "Corps Ardent",
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
    name: "Rage Br\xFBlure",
    // Official flavor text: "Augmente la puissance des capacités spéciales quand le Pokémon est brûlé."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flashfire: {
    name: "Torche",
    // Official flavor text: "Lorsque le Pokémon est touché par une capacité de type Feu, il absorbe la chaleur pour renforcer ses propres capacités Feu."
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
    start: "  {POKEMON} augmente la puissance de ses capacit\xE9s de type Feu !"
  },
  flowergift: {
    name: "Don Floral",
    // Official flavor text: "Augmente l’Attaque et la Défense Spéciale du Pokémon et de ses alliés lorsque le soleil brille."
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
    name: "Flora-Voile",
    // Official flavor text: "Empêche les alliés de type Plante de subir des baisses de stats et des altérations de statut."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} est prot\xE9g\xE9 par Flora-Voile !"
  },
  fluffy: {
    name: "Boule de Poils",
    // Official flavor text: "Divise par deux les dégâts des attaques directes subies par le Pokémon, mais double les dégâts des capacités de type Feu."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  forecast: {
    name: "M\xE9t\xE9o",
    // Official flavor text: "Le Pokémon prend le type Eau, Feu ou Glace en fonction de la météo."
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
    name: "Pr\xE9diction",
    // Official flavor text: "Révèle l’une des capacités de l’adversaire quand le combat commence."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  La capacit\xE9 {MOVE} {TARGET:de} a \xE9t\xE9 d\xE9tect\xE9e\u202F!",
    activateNoTarget: "  Pr\xE9diction du {POKEMON} lui signale {MOVE}!"
  },
  friendguard: {
    name: "Garde-Ami",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frisk: {
    name: "Fouille",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON} fouille {TARGET} et trouve {ITEM:indefinite:classified} !",
    activateNoTarget: "  {POKEMON} a d\xE9cel\xE9 l'objet: {ITEM}!"
  },
  fullmetalbody: {
    name: "M\xE9tallo-Garde",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furcoat: {
    name: "Toison \xC9paisse",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  galewings: {
    name: "Ailes Bourrasque",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  galvanize: {
    name: "Peau \xC9lectrique",
    // Official flavor text: "Les capacités de type Normal deviennent de type Électrik. Leur puissance augmente légèrement."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gluttony: {
    name: "Gloutonnerie",
    // Official flavor text: "Si le Pokémon tient une Baie à manger en cas de PV bas, il la mange dès qu'il a perdu la moitié de ses PV."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  goodasgold: {
    name: "Corps en Or",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gooey: {
    name: "Poisseux",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gorillatactics: {
    name: "Ent\xEAtement",
    // Official flavor text: "Augmente l’Attaque, mais empêche d’utiliser toute autre capacité que celle utilisée en premier par le Pokémon."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grasspelt: {
    name: "Toison Herbue",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassysurge: {
    name: "Cr\xE9a-Herbe",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grimneigh: {
    name: "Sombre Ruade",
    // Official flavor text: "Quand le Pokémon met un ennemi K.O., il émet un hennissement terrifiant qui augmente son Attaque Spéciale."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guarddog: {
    name: "Chien de Garde",
    // Official flavor text: "L’Attaque du Pokémon augmente s’il subit l’effet du talent Intimidation. Les capacités ou objets qui font changer de Pokémon n’ont aucun effet sur lui."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gulpmissile: {
    name: "D\xE9gobage",
    // Official flavor text: "Quand le Pokémon utilise Surf ou Plongée, il revient avec une proie. Lorsqu’il subit des dégâts par la suite, il attaque en recrachant sa proie."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guts: {
    name: "Cran",
    // Official flavor text: "Augmente l'Attaque du Pokémon s'il est affecté par une altération de statut."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hadronengine: {
    name: "Moteur \xE0 Hadrons",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} cr\xE9e un champ \xE9lectrifi\xE9 et active une machine du futur !",
    activate: "  {POKEMON} active une machine du futur gr\xE2ce au champ \xE9lectrifi\xE9 !"
  },
  harvest: {
    name: "R\xE9colte",
    // Official flavor text: "Permet de réutiliser une même Baie plusieurs fois."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    addItem: "  {POKEMON} a r\xE9colt\xE9 {ITEM:indefinite}\u202F!"
  },
  healer: {
    name: "C\u0153ur Soin",
    // Official flavor text: "Soigne parfois une altération de statut d’un allié proche."
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
    name: "Ignifug\xE9",
    // Official flavor text: "Diminue de moitié les dégâts infligés au Pokémon par les capacités de type Feu."
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
    name: "Heavy Metal",
    // Official flavor text: "Double le poids du Pokémon."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  honeygather: {
    name: "Cherche Miel",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hospitality: {
    name: "Aux Petits Soins",
    shortDesc: null,
    // NEEDS TRANSLATION
    heal: "  {POKEMON} boit le th\xE9 pr\xE9par\xE9 par {SOURCE} !"
  },
  hugepower: {
    name: "Coloforce",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hungerswitch: {
    name: "D\xE9clic Fringale",
    // Official flavor text: "À la fin de chaque tour, le Pokémon alterne entre ses formes Mode Rassasié et Mode Affamé."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hustle: {
    name: "Agitation",
    // Official flavor text: "Améliore l'Attaque du Pokémon, mais diminue la Précision."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydration: {
    name: "Hydratation",
    // Official flavor text: "Soigne les altérations de statut du Pokémon quand il pleut."
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
    name: "Hyper Cutter",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icebody: {
    name: "Corps Gel",
    // Official flavor text: "Régénère peu à peu les PV du Pokémon quand il neige."
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
    name: "T\xEAte de Gel",
    // Official flavor text: "Le glaçon sur sa tête encaisse les attaques physiques à la place du Pokémon, mais sa destruction modifie son apparence. Le glaçon se reforme quand il neige."
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
    name: "\xC9cailles Glac\xE9es",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  illuminate: {
    name: "Lumiattirance",
    // Official flavor text: "Le Pokémon illumine les alentours, ce qui empêche sa Précision de baisser."
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
    name: "Illusion",
    // Official flavor text: "Le Pokémon prend l’apparence du dernier membre de l’équipe pour tromper l’adversaire."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    end: "  L\u2019illusion {POKEMON:de} se brise !"
  },
  immunity: {
    name: "Vaccin",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  imposter: {
    name: "Imposteur",
    // Official flavor text: "Le Pokémon prend l’apparence du Pokémon adverse."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infiltrator: {
    name: "Infiltration",
    // Official flavor text: "Traverse les barrières et les clones adverses pour attaquer directement."
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
    name: "Expuls\u2019Organes",
    // Official flavor text: "Le Pokémon inflige à l’adversaire l’ayant mis K.O. des dégâts égaux au nombre de PV qu’il lui restait avant le coup de grâce."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#aftermath"
  },
  innerfocus: {
    name: "Attention",
    // Official flavor text: "Le Pokémon a un mental à toute épreuve qui empêche les attaques ennemies de lui faire peur. Il est aussi immunisé contre le talent Intimidation."
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
    name: "Insomnia",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  intimidate: {
    name: "Intimidation",
    // Official flavor text: "Le Pokémon rugit lorsqu'il arrive au combat, ce qui intimide l'ennemi et baisse son Attaque."
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
    name: "Lame Indomptable",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  ironbarbs: {
    name: "\xC9pine de Fer",
    // Official flavor text: "Inflige des dégâts à l’attaquant lorsque le Pokémon subit une attaque directe."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#roughskin"
  },
  ironfist: {
    name: "Poing de Fer",
    // Official flavor text: "Augmente la puissance des capacités coups de poing."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  justified: {
    name: "C\u0153ur Noble",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  keeneye: {
    name: "Regard Vif",
    // Official flavor text: "Les yeux perçants du Pokémon empêchent sa Précision de baisser."
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
    name: "Maladresse",
    // Official flavor text: "Le Pokémon ne peut utiliser aucun objet tenu."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafguard: {
    name: "Feuille Garde",
    // Official flavor text: "Protège le Pokémon contre les altérations de statut quand le soleil brille."
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
    name: "L\xE9vitation",
    // Official flavor text: "Le Pokémon flotte, ce qui l'immunise contre les capacités de type Sol."
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
    name: "Lib\xE9ro",
    // Official flavor text: "Le Pokémon prend le type de la capacité qu’il utilise. Ce talent ne peut se déclencher qu’une fois par entrée au combat du Pokémon."
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
    name: "Light Metal",
    // Official flavor text: "Divise par deux le poids du Pokémon."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightningrod: {
    name: "Paratonnerre",
    // Official flavor text: "Le Pokémon détourne sur lui les capacités de type Électrik et les neutralise, tout en augmentant son Attaque Spéciale."
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
    activate: "  {POKEMON} attire l\u2019attaque sur lui !"
  },
  limber: {
    name: "\xC9chauffement",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lingeringaroma: {
    name: "Odeur Tenace",
    // Official flavor text: "Lorsque le Pokémon subit une attaque directe, le talent de l’attaquant est remplacé par Odeur Tenace."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  Une odeur tenace impr\xE8gne {TARGET} !"
  },
  liquidooze: {
    name: "Suintement",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON} aspire le suintement !"
  },
  liquidvoice: {
    name: "Hydrata-Son",
    // Official flavor text: "Toutes les attaques sonores du Pokémon prennent le type Eau."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  longreach: {
    name: "Longue Port\xE9e",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicbounce: {
    name: "Miroir Magik",
    // Official flavor text: "Annule les effets des capacités de statut subies par le Pokémon et les retourne à l’envoyeur."
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
    name: "Garde Magik",
    // Official flavor text: "Seules les attaques peuvent blesser le Pokémon."
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
    name: "Magicien",
    // Official flavor text: "Les capacités volent aussi l’objet tenu par la cible."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magmaarmor: {
    name: "Armumagma",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magnetpull: {
    name: "Magn\xE9pi\xE8ge",
    // Official flavor text: "Attire les Pokémon Acier grâce à un champ magnétique, ce qui les empêche de quitter le terrain."
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
    name: "\xC9caille Sp\xE9ciale",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megalauncher: {
    name: "M\xE9ga Blaster",
    // Official flavor text: "Augmente la puissance des capacités qui projettent une aura."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megasol: {
    name: "M\xE9ga-Soleil",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  merciless: {
    name: "Cruaut\xE9",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mimicry: {
    name: "Mim\xE9tisme",
    // Official flavor text: "Le Pokémon adopte le même type que le terrain lorsqu’un champ est actif."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} a repris son type d\u2019origine !"
  },
  mindseye: {
    name: "\u0152il R\xE9v\xE9lateur",
    // Official flavor text: "Le Pokémon ignore les changements d’Esquive des cibles et peut toucher les Pokémon Spectre avec des capacités Normal ou Combat. Sa Précision ne peut pas baisser."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  minus: {
    name: "Moins",
    // Official flavor text: "L’Attaque Spéciale du Pokémon augmente si un Pokémon allié a le talent Moins ou Plus."
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
    name: "Armure Miroir",
    // Official flavor text: "Le Pokémon renvoie les effets réducteurs de stats qu’il reçoit."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistysurge: {
    name: "Cr\xE9a-Brume",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moldbreaker: {
    name: "Brise Moule",
    // Official flavor text: "Le Pokémon ignore les talents adverses qui auraient un effet sur ses capacités."
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
    start: "  {POKEMON} brise le moule !"
  },
  moody: {
    name: "Lunatique",
    // Official flavor text: "Augmente beaucoup une stat du Pokémon et en baisse une autre au hasard à chaque tour."
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
    name: "Motoris\xE9",
    // Official flavor text: "Si le Pokémon est touché par une capacité de type Électrik, il ne subit aucun dégât et sa Vitesse augmente."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moxie: {
    name: "Impudence",
    // Official flavor text: "Quand le Pokémon met un ennemi K.O., sa confiance en lui ne connaît plus de limite et son Attaque augmente."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multiscale: {
    name: "Multi\xE9caille",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multitype: {
    name: "Multi-Type",
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
    name: "Momie",
    // Official flavor text: "Lorsque le Pokémon subit une attaque directe, le talent de l’attaquant est remplacé par Momie."
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
    changeAbility: "  Le talent {TARGET:de} devient Momie !"
  },
  myceliummight: {
    name: "Force Fongique",
    // Official flavor text: "Le Pokémon agit toujours plus lentement quand il utilise une capacité de statut, mais il ignore les talents adverses."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  naturalcure: {
    name: "M\xE9dic Nature",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  },
  neuroforce: {
    name: "C\xE9r\xE9bro-Force",
    // Official flavor text: "Augmente encore plus la puissance des attaques super efficaces."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  neutralizinggas: {
    name: "Gaz Inhibiteur",
    // Official flavor text: "Si un Pokémon avec Gaz Inhibiteur est sur le terrain, les effets des talents de tous les autres Pokémon ne s’activent pas ou sont neutralisés."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  Un gaz inhibiteur envahit les lieux !",
    end: "  Les effets du gaz inhibiteur se sont dissip\xE9s."
  },
  noguard: {
    name: "Annule Garde",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  normalize: {
    name: "Normalise",
    // Official flavor text: "Toutes les capacités du Pokémon deviennent de type Normal, quel que soit leur type original. Leur puissance augmente légèrement."
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
    name: "Ben\xEAt",
    // Official flavor text: "Le Pokémon est un grand benêt, ce qui l'immunise contre l'attraction, la provocation ou l'intimidation."
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
    name: "Opportuniste",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  orichalcumpulse: {
    name: "Pouls Orichalque",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Le soleil brille et {POKEMON} lib\xE8re l\u2019\xE9nergie d\u2019une pulsation primitive !",
    activate: "  {POKEMON} tire profit des rayons du soleil et lib\xE8re l\u2019\xE9nergie d\u2019une pulsation primitive !"
  },
  overcoat: {
    name: "Envelocape",
    // Official flavor text: "Protège des dégâts occasionnés par les tempêtes de sable, ainsi que des effets des capacités qui libèrent de la poudre et des spores."
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
    name: "Engrais",
    // Official flavor text: "Augmente la puissance des capacités de type Plante du Pokémon quand il a perdu une certaine quantité de PV."
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
    name: "Tempo Perso",
    // Official flavor text: "Le Pokémon vit sa vie à son propre rythme, ce qui l'immunise contre la confusion et l'intimidation."
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
    name: "Amour Filial",
    // Official flavor text: "La mère et son petit unissent leurs forces pour attaquer deux fois d’affilée."
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
    name: "Voile Pastel",
    // Official flavor text: "Protège le Pokémon et ses alliés contre toutes les altérations de statut liées à l’empoisonnement."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  perishbody: {
    name: "Corps Condamn\xE9",
    // Official flavor text: "Lorsque le Pokémon est directement touché par une capacité, l’assaillant et lui tomberont K.O. dans trois tours, à moins qu’ils ne soient remplacés entre temps."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Les deux Pok\xE9mon seront K.O. dans trois tours !"
  },
  pickpocket: {
    name: "Pickpocket",
    // Official flavor text: "Vole l’objet que tient l’attaquant quand le Pokémon subit une attaque directe."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pickup: {
    name: "Ramassage",
    // Official flavor text: "Permet parfois au Pokémon de ramasser les objets que d’autres Pokémon ont utilisés. Il lui arrive aussi d’en trouver hors des combats."
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
    name: "Transperceuse",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pixilate: {
    name: "Peau F\xE9\xE9rique",
    // Official flavor text: "Les capacités de type Normal deviennent de type Fée. Leur puissance augmente légèrement."
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
    name: "Plus",
    // Official flavor text: "L’Attaque Spéciale du Pokémon augmente si un Pokémon allié a le talent Moins ou Plus."
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
    name: "Soin Poison",
    // Official flavor text: "Quand le Pokémon est empoisonné, il regagne des PV au lieu d’en perdre."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisonpoint: {
    name: "Point Poison",
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
    name: "Emprise Toxique",
    // Official flavor text: "Lorsque Pêchaminus empoisonne un Pokémon grâce à l’une de ses capacités, ce dernier devient également confus."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisontouch: {
    name: "Toxitouche",
    // Official flavor text: "Peut empoisonner l’ennemi par simple contact."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powerconstruct: {
    name: "Rassemblement",
    // Official flavor text: "Lorsque le Pokémon perd la moitié de ses PV, ses Cellules se rassemblent pour l’encourager, ce qui lui permet de prendre sa Forme Parfaite."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  Vous sentez la pr\xE9sence d\u2019un grand nombre d\u2019individus !",
    transform: "{POKEMON} prend sa Forme Parfaite !"
  },
  powerofalchemy: {
    name: "Osmose",
    // Official flavor text: "Le Pokémon acquiert le talent d’un allié mis K.O."
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
    name: "Cercle d\u2019\xC9nergie",
    // Official flavor text: "Augmente la puissance des capacités des Pokémon qui se trouvent à proximité."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prankster: {
    name: "Farceur",
    // Official flavor text: "Rend les capacités de statut du Pokémon prioritaires."
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
    name: "Pression",
    // Official flavor text: "Met la pression à l’adversaire pour le forcer à dépenser plus de PP."
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
    start: "  {POKEMON} augmente la pression !"
  },
  primordialsea: {
    name: "Mer Primaire",
    // Official flavor text: "Altère les conditions météo pour neutraliser les attaques de type Feu."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prismarmor: {
    name: "Prisme-Armure",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  propellertail: {
    name: "Propulseur",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  protean: {
    name: "Prot\xE9en",
    // Official flavor text: "Le Pokémon prend le type de la capacité qu’il utilise. Ce talent ne peut se déclencher qu’une fois par entrée au combat du Pokémon."
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
    name: "Pal\xE9osynth\xE8se",
    // Official flavor text: "Quand le soleil brille ou que le Pokémon tient une capsule d’Énergie Booster, sa stat la plus élevée augmente."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  Le soleil brille, ce qui a permis \xE0 {POKEMON} d\u2019activer Pal\xE9osynth\xE8se !",
    activateFromItem: "  {POKEMON} a activ\xE9 Pal\xE9osynth\xE8se gr\xE2ce \xE0 son \xC9nergie Booster !",
    start: "  {STAT:definite:capitalize} {POKEMON:de} est renforc\xE9e !",
    end: "  L\u2019effet du talent Pal\xE9osynth\xE8se {POKEMON:de} s\u2019est dissip\xE9 !"
  },
  psychicsurge: {
    name: "Cr\xE9a-Psy",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  punkrock: {
    name: "Punk Rock",
    // Official flavor text: "Augmente la puissance des capacités basées sur le son. Le Pokémon ne subit que la moitié des dégâts quand il est touché par ce genre de capacités."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purepower: {
    name: "Force Pure",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purifyingsalt: {
    name: "Sel Purificateur",
    // Official flavor text: "Le sel pur immunise le Pokémon contre les altérations de statut, et diminue de moitié les dégâts des capacités de type Spectre."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  quarkdrive: {
    name: "Charge Quantique",
    // Official flavor text: "Quand un champ électrifié est actif ou que le Pokémon tient une capsule d’Énergie Booster, sa stat la plus élevée augmente."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} a activ\xE9 Charge Quantique gr\xE2ce au champ \xE9lectrifi\xE9 !",
    activateFromItem: "  {POKEMON} a activ\xE9 Charge Quantique gr\xE2ce \xE0 son \xC9nergie Booster !",
    start: "  {STAT:definite:capitalize} {POKEMON:de} est renforc\xE9e !",
    end: "  L\u2019effet du talent Charge Quantique {POKEMON:de} s\u2019est dissip\xE9 !"
  },
  queenlymajesty: {
    name: "Prestance Royale",
    // Official flavor text: "L’adversaire est impressionné par la majesté du Pokémon, ce qui l’empêche de viser ce dernier et ses alliés avec une capacité prioritaire."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  quickdraw: {
    name: "Tir Vif",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  Tir Vif permet \xE0 {POKEMON} d\u2019agir plus vite que d\u2019habitude !"
  },
  quickfeet: {
    name: "Pied V\xE9loce",
    // Official flavor text: "Augmente la Vitesse du Pokémon en cas d'altération de statut."
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
    name: "Cuvette",
    // Official flavor text: "Le Pokémon récupère progressivement des PV lorsqu'il pleut."
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
    name: "Phobique",
    // Official flavor text: "Si le Pokémon est touché par le talent Intimidation ou une attaque de type Ténèbres, Spectre ou Insecte, sa phobie se révèle et sa Vitesse augmente."
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
    name: "Receveur",
    // Official flavor text: "Le Pokémon reçoit le talent d’un allié mis K.O."
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
    changeAbility: "  Le Pok\xE9mon re\xE7oit le talent {ABILITY} {SOURCE:de} !"
  },
  reckless: {
    name: "T\xE9m\xE9raire",
    // Official flavor text: "Augmente la puissance des capacités occasionnant un contrecoup."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  refrigerate: {
    name: "Peau Gel\xE9e",
    // Official flavor text: "Les capacités de type Normal deviennent de type Glace. Leur puissance augmente légèrement."
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
    name: "R\xE9g\xE9-Force",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ripen: {
    name: "M\xFBrissement",
    // Official flavor text: "Le Pokémon fait mûrir la Baie qu’il tient et double ainsi son effet."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rivalry: {
    name: "Rivalit\xE9",
    // Official flavor text: "Le Pokémon déteste la concurrence et inflige plus de dégâts si sa cible est du même sexe. Par contre, il en inflige moins si sa cible est du sexe opposé."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rkssystem: {
    name: "Syst\xE8me Alpha",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockhead: {
    name: "T\xEAte de Roc",
    // Official flavor text: "Le Pokémon peut utiliser des capacités occasionnant un contrecoup sans perdre de PV."
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
    name: "Porte-Roche",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  roughskin: {
    name: "Peau Dure",
    // Official flavor text: "Blesse l'attaquant lorsque le Pokémon subit une attaque directe."
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
    damage: "  {POKEMON} est bless\xE9 !"
  },
  runaway: {
    name: "Fuite",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandforce: {
    name: "Force Sable",
    // Official flavor text: "Augmente la puissance des capacités de types Roche, Sol et Acier en cas de tempête de sable."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandrush: {
    name: "Baigne Sable",
    // Official flavor text: "Augmente la Vitesse lors des tempêtes de sable."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandspit: {
    name: "Expul\u2019Sable",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sandstream: {
    name: "Sable Volant",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandveil: {
    name: "Voile Sable",
    // Official flavor text: "Augmente l'Esquive du Pokémon lors des tempêtes de sable."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sapsipper: {
    name: "Herbivore",
    // Official flavor text: "Annule les attaques de type Plante subies par le Pokémon et augmente son Attaque."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  schooling: {
    name: "Banc",
    // Official flavor text: "Le Pokémon se rassemble avec ses congénères quand ses PV sont élevés. Quand il ne lui reste plus beaucoup de PV, le banc se disperse."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON} forme un banc !",
    transformEnd: "Le banc {POKEMON:de} se d\xE9sagr\xE8ge !"
  },
  scrappy: {
    name: "Querelleur",
    // Official flavor text: "Permet aux capacités de type Normal ou Combat du Pokémon de toucher les Pokémon de type Spectre. Immunise aussi contre le talent Intimidation."
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
    name: "Brise-Barri\xE8re",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seedsower: {
    name: "Semencier",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  serenegrace: {
    name: "S\xE9r\xE9nit\xE9",
    // Official flavor text: "Augmente les chances d'infliger des effets additionnels."
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
    name: "Spectro-Bouclier",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowtag: {
    name: "Marque Ombre",
    // Official flavor text: "Empêche les Pokémon ennemis de quitter le terrain."
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
    name: "Incisif",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shedskin: {
    name: "Mue",
    // Official flavor text: "Le Pokémon soigne parfois ses altérations de statut en muant."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sheerforce: {
    name: "Sans Limite",
    // Official flavor text: "Les capacités ayant un effet additionnel le perdent, mais leur puissance augmente."
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
    name: "Coque Armure",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shielddust: {
    name: "\xC9cran Poudre",
    // Official flavor text: "Le Pokémon dispose d'un écran naturel qui le protège des effets additionnels des attaques ennemies."
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
    name: "Bouclier-Carcan",
    // Official flavor text: "Lorsque le Pokémon perd la moitié de ses PV, son enveloppe se brise et il adopte une posture offensive."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "Le talent Bouclier-Carcan s\u2019active !",
    transformEnd: "Le talent Bouclier-Carcan n\u2019est plus actif !"
  },
  simple: {
    name: "Simple",
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
    name: "Multi-Coups",
    // Official flavor text: "Les capacités pouvant frapper plusieurs fois frappent toujours le nombre maximal de coups."
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
    name: "D\xE9but Calme",
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
    start: "  {POKEMON} n\u2019arrive pas \xE0 se motiver\u202F!",
    end: "  {POKEMON} arrive enfin \xE0 s\u2019y mettre s\xE9rieusement !"
  },
  slushrush: {
    name: "Chasse-Neige",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sniper: {
    name: "Sniper",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snowcloak: {
    name: "Rideau Neige",
    // Official flavor text: "Augmente l'Esquive du Pokémon quand il neige."
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
    name: "Alerte Neige",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  solarpower: {
    name: "Force Soleil",
    // Official flavor text: "Quand le soleil brille, l'Attaque Spéciale du Pokémon augmente mais il perd des PV à chaque tour."
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
    name: "Solide Roc",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soulheart: {
    name: "Animac\u0153ur",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soundproof: {
    name: "Anti-Bruit",
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
    name: "Turbo",
    // Official flavor text: "La Vitesse du Pokémon augmente à chaque tour."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spicyspray: {
    name: "Haban\xE9ruption",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stakeout: {
    name: "Filature",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stall: {
    name: "Frein",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stalwart: {
    name: "Nerfs d\u2019Acier",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stamina: {
    name: "Endurance",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stancechange: {
    name: "D\xE9clic Tactique",
    // Official flavor text: "Le Pokémon prend la Forme Assaut lorsqu’il utilise une capacité offensive, et la Forme Parade lorsqu’il utilise Bouclier Royal."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "Passage en Forme Assaut !",
    transformEnd: "Passage en Forme Parade !"
  },
  static: {
    name: "Statik",
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
    name: "Impassible",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steamengine: {
    name: "Turbine",
    // Official flavor text: "Lorsque le Pokémon est touché par des capacités de type Eau ou Feu, sa Vitesse augmente énormément."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelworker: {
    name: "Expert Acier",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelyspirit: {
    name: "Boost Acier",
    // Official flavor text: "Augmente la puissance des attaques de type Acier du Pokémon et de ses alliés."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stench: {
    name: "Puanteur",
    // Official flavor text: "Le Pokémon émet une odeur si nauséabonde qu'il peut effrayer sa cible en l'attaquant."
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
    name: "Glu",
    // Official flavor text: "Les objets sont collés au corps gluant du Pokémon, ce qui empêche ses adversaires de les dérober."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    block: "  L\u2019objet {POKEMON:de} ne peut pas \xEAtre vol\xE9 !"
  },
  stormdrain: {
    name: "Lavabo",
    // Official flavor text: "Le Pokémon détourne sur lui les capacités de type Eau et les neutralise, tout en augmentant son Attaque Spéciale."
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
    name: "Prognathe",
    // Official flavor text: "Le Pokémon a une mâchoire robuste qui augmente la puissance de ses capacités de morsure."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sturdy: {
    name: "Fermet\xE9",
    // Official flavor text: "Le Pokémon encaisse toujours au moins une attaque s’il a tous ses PV. Il est également immunisé contre les capacités pouvant mettre K.O. en un coup."
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
    activate: "  {POKEMON} encaisse les coups !"
  },
  suctioncups: {
    name: "Ventouse",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} s\u2019accroche avec ses ventouses !"
  },
  superluck: {
    name: "Chanceux",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersweetsyrup: {
    name: "Nectar Mielleux",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Le nectar {POKEMON:de} d\xE9gage un parfum sucr\xE9 !"
  },
  supremeoverlord: {
    name: "G\xE9n\xE9ral Supr\xEAme",
    // Official flavor text: "Quand le Pokémon entre sur le terrain, son Attaque et son Attaque Spéciale augmentent légèrement pour chaque allié mis K.O. auparavant."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} re\xE7oit la puissance de ses alli\xE9s mis K.O. !"
  },
  surgesurfer: {
    name: "Surf Caudal",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  swarm: {
    name: "Essaim",
    // Official flavor text: "Augmente la puissance des capacités de type Insecte du Pokémon quand il a perdu une certaine quantité de PV."
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
    name: "Gluco-Voile",
    // Official flavor text: "Le Pokémon et ses alliés ne peuvent pas s’endormir."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  Gluco-Voile emp\xEAche {POKEMON} de dormir !"
  },
  swiftswim: {
    name: "Glissade",
    // Official flavor text: "Augmente la Vitesse du Pokémon s'il pleut."
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
    name: "\xC9p\xE9e du Fl\xE9au",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  L\u2019\xC9p\xE9e du Fl\xE9au {POKEMON:de} affaiblit la D\xE9fense des Pok\xE9mon alentour !"
  },
  symbiosis: {
    name: "Symbiose",
    // Official flavor text: "Quand les alliés utilisent l’objet qu’ils tiennent, le Pokémon leur donne l’objet qu’il tient en remplacement."
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
    activate: "  {POKEMON} donne {ITEM:definite:classified} \xE0 {TARGET} !"
  },
  synchronize: {
    name: "Synchro",
    // Official flavor text: "Quand le Pokémon est brûlé, paralysé ou empoisonné par un autre Pokémon, il partage ce statut avec celui-ci."
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
    name: "Bois du Fl\xE9au",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Le Bois du Fl\xE9au {POKEMON:de} affaiblit l\u2019Attaque des Pok\xE9mon alentour !"
  },
  tangledfeet: {
    name: "Pieds Confus",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tanglinghair: {
    name: "M\xE8che Rebelle",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  technician: {
    name: "Technicien",
    // Official flavor text: "Augmente la puissance des capacités les plus faibles."
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
    name: "T\xE9l\xE9pathe",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} ne peut pas \xEAtre attaqu\xE9 par ses alli\xE9s !"
  },
  teraformzero: {
    name: "T\xE9raformation 0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terashell: {
    name: "T\xE9ra-Carapace",
    // Official flavor text: "Grâce à sa carapace qui renferme l’énergie de tous les types, les capacités subies par ce Pokémon quand ses PV sont au maximum ne sont pas très efficaces."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} fait briller sa carapace et fausse les affinit\xE9s de type !"
  },
  terashift: {
    name: "T\xE9ramorphose",
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON} se transforme !"
  },
  teravolt: {
    name: "T\xE9ra-Voltage",
    // Official flavor text: "Le Pokémon ignore les talents adverses qui auraient un effet sur ses capacités."
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
    start: "  {POKEMON} d\xE9gage une aura \xE9lectrique instable !"
  },
  thermalexchange: {
    name: "Thermodynamique",
    // Official flavor text: "Lorsque le Pokémon est touché par une capacité de type Feu, son Attaque augmente. Il ne peut pas être brûlé."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thickfat: {
    name: "Isograisse",
    // Official flavor text: "Le Pokémon est protégé par une épaisse couche de graisse qui diminue de moitié les dégâts qu'il subit des capacités de types Feu et Glace."
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
    name: "Lentiteint\xE9e",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torrent: {
    name: "Torrent",
    // Official flavor text: "Augmente la puissance des capacités de type Eau du Pokémon quand il a perdu une certaine quantité de PV."
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
    name: "Griffe Dure",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicboost: {
    name: "Rage Poison",
    // Official flavor text: "Augmente la puissance des capacités physiques quand le Pokémon est empoisonné."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicchain: {
    name: "Cha\xEEne Toxique",
    // Official flavor text: "Grâce aux pouvoirs de sa chaîne imprégnée de toxines, le Pokémon peut empoisonner gravement sa cible en la touchant avec une capacité."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicdebris: {
    name: "D\xE9p\xF4t Toxique",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trace: {
    name: "Calque",
    // Official flavor text: "Lorsque le Pokémon entre au combat, il calque le talent d'un ennemi pour remplacer le sien."
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
    changeAbility: "  Le talent {ABILITY} {SOURCE:de} a \xE9t\xE9 calqu\xE9 !"
    // SV fr_common:6723
  },
  transistor: {
    name: "Transistor",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  triage: {
    name: "Priogu\xE9rison",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  truant: {
    name: "Absent\xE9isme",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    cant: "{POKEMON} paresse !"
  },
  turboblaze: {
    name: "Turbo Brasier",
    // Official flavor text: "Le Pokémon ignore les talents adverses qui auraient un effet sur ses capacités."
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
    start: "  {POKEMON} d\xE9gage une aura de flammes incandescentes !"
  },
  unaware: {
    name: "Inconscient",
    // Official flavor text: "Le Pokémon ignore les changements de stats des autres Pokémon, qu'il attaque ou soit attaqué."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unburden: {
    name: "D\xE9lestage",
    // Official flavor text: "Augmente la Vitesse du Pokémon s'il perd ou utilise l'objet qu'il tenait au début du combat."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unnerve: {
    name: "Tension",
    // Official flavor text: "Fait stresser l’adversaire, ce qui l’empêche de manger des Baies."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {TEAM:capitalize} est tendue et ne peut plus manger de Baies !"
  },
  unseenfist: {
    name: "Poing Invisible",
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "Urne du Fl\xE9au",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  L\u2019Urne du Fl\xE9au {POKEMON:de} affaiblit l\u2019Attaque Sp\xE9ciale des Pok\xE9mon alentour !"
  },
  victorystar: {
    name: "Victorieux",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vitalspirit: {
    name: "Esprit Vital",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  voltabsorb: {
    name: "Absorbe-Volt",
    // Official flavor text: "Si le Pokémon est touché par une capacité Électrik, il ne subit aucun dégât et regagne des PV à la place."
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
    name: "\xC2me Vagabonde",
    // Official flavor text: "Lorsque le Pokémon est directement touché par une capacité, il échange son talent avec celui de l’assaillant."
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
    name: "Absorbe-Eau",
    // Official flavor text: "Si le Pokémon est touché par une capacité Eau, il ne subit aucun dégât et regagne des PV à la place."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterbubble: {
    name: "Aquabulle",
    // Official flavor text: "Réduit la puissance des capacités de type Feu subies par le Pokémon. Il est également immunisé contre les brûlures."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  watercompaction: {
    name: "Sable Humide",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterveil: {
    name: "Ignifu-Voile",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  weakarmor: {
    name: "Armurouill\xE9e",
    // Official flavor text: "Quand le Pokémon est touché par une capacité physique, sa Défense baisse mais sa Vitesse augmente beaucoup."
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
    name: "Bien Cuit",
    // Official flavor text: "Si le Pokémon est touché par une capacité de type Feu, il ne subit aucun dégât et sa Défense augmente beaucoup."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  whitesmoke: {
    name: "\xC9cran Fum\xE9e",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wimpout: {
    name: "Escampette",
    // Official flavor text: "Le Pokémon perd confiance quand ses PV tombent à la moitié et s’enfuit dans sa Poké Ball."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  windpower: {
    name: "Turbine \xC9olienne",
    // Official flavor text: "Si le Pokémon est touché par une capacité faisant appel au vent, il se charge en électricité."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#electromorphosis"
  },
  windrider: {
    name: "A\xE9roport\xE9",
    // Official flavor text: "L’Attaque du Pokémon augmente si un vent arrière souffle ou s’il est touché par une capacité faisant appel au vent. Dans ce dernier cas, il ne subit aucun dégât."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wonderguard: {
    name: "Garde Mystik",
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
    name: "Peau Miracle",
    // Official flavor text: "Le Pokémon résiste mieux aux capacités de statut."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zenmode: {
    name: "Mode Transe",
    // Official flavor text: "Le Pokémon change de forme quand il lui reste moins de la moitié de ses PV."
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
    transform: "Le talent Mode Transe s\u2019active !",
    transformEnd: "Le talent Mode Transe n\u2019est plus actif !"
  },
  zerotohero: {
    name: "Supermutation",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} est revenu sous une autre forme !"
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
