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
    name: "Anpassung",
    // Official flavor text: "Erhöht die Stärke von Attacken, die dem Typ des Pokémon entsprechen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aerilate: {
    name: "Zenithaut",
    // Official flavor text: "Attacken vom Typ Normal nehmen den Typ Flug an und ihre Stärke erhöht sich ein wenig."
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
    name: "Finalschlag",
    // Official flavor text: "Wird das Pokémon durch eine direkte Attacke besiegt, fügt es dem Angreifer Schaden zu."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "  {POKEMON} wurde Schaden zugef\xFCgt!"
  },
  airlock: {
    name: "Klimaschutz",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Jegliche wetterbedingten Effekte wurden aufgehoben!"
  },
  analytic: {
    name: "Analyse",
    // Official flavor text: "Greift das Pokémon zuletzt an, erhöht sich die Stärke der Attacke, die es einsetzt."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  angerpoint: {
    name: "Kurzschluss",
    // Official flavor text: "Wird nach Einstecken eines Volltreffers wütend und maximiert dabei seinen Angriffs-Wert."
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
    boost: "  Der Angriffs-Wert von {POKEMON} erreicht das Maximum!"
  },
  angershell: {
    name: "Wutpanzer",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  anticipation: {
    name: "Vorahnung",
    // Official flavor text: "Kann gefährliche gegnerische Attacken erahnen."
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
    activate: "  {POKEMON} erschaudert!"
  },
  arenatrap: {
    name: "Ausweglos",
    // Official flavor text: "Hindert Gegner im Kampf an der Flucht."
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
    name: "Schweifr\xFCstung",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  aromaveil: {
    name: "Dufth\xFClle",
    // Official flavor text: "Kann alle Team-Pokémon vor mentalen Angriffen schützen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} wird von Dufth\xFClle gesch\xFCtzt!"
  },
  asone: {
    name: "Reitgespann",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} verf\xFCgt \xFCber zwei F\xE4higkeiten!"
  },
  asoneglastrier: {
    name: "Reitgespann (Polaross)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  asonespectrier: {
    name: "Reitgespann (Phantoross)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurabreak: {
    name: "Aura-Umkehr",
    // Official flavor text: "Kehrt die Wirkung von Auren um und senkt so die Stärke bestimmter Attacken, anstatt sie zu erhöhen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} kehrt die Wirkung aller Aura-F\xE4higkeiten um!"
  },
  auraguard: {
    name: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  baddreams: {
    name: "Alptraum",
    // Official flavor text: "Fügt schlafenden Gegnern Schaden zu."
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
    damage: "  {POKEMON} ist in einem Alptraum gefangen!"
  },
  ballfetch: {
    name: "Apport",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battery: {
    name: "Batterie",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlearmor: {
    name: "Kampfpanzer",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlebond: {
    name: "Freundschaftsakt",
    // Official flavor text: "Besiegt es ein Ziel, vertieft dies die Freundschaft zu seinem Trainer, wodurch es die Ash-Form annimmt und sein Wasser-Shuriken stärker wird."
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
    activate: "  {POKEMON} ist von der Macht der Freundschaft erf\xFCllt!",
    transform: "{POKEMON} hat die Ash-Form angenommen!"
  },
  beadsofruin: {
    name: "Unheilsjuwelen",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Unheilsjuwelen von {POKEMON} schw\xE4cht die Spezial-Verteidigung aller Pok\xE9mon im Umkreis!"
  },
  beastboost: {
    name: "Bestien-Boost",
    // Official flavor text: "Erhöht in jeder Runde, in der es ein anderes Pokémon besiegt, seinen höchsten Statuswert."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  berserk: {
    name: "Wutausbruch",
    // Official flavor text: "Fallen seine KP nach einem Angriff auf die Hälfte des Maximalwerts oder weniger, steigt sein Spezial-Angriff."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bigpecks: {
    name: "Brustbieter",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blaze: {
    name: "Gro\xDFbrand",
    // Official flavor text: "Erhöht die Stärke von Feuer-Attacken, wenn die KP auf einen gewissen Wert fallen."
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
    name: "Kugelsicher",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cheekpouch: {
    name: "Backentaschen",
    // Official flavor text: "Regeneriert beim Konsum von Beeren ungeachtet der Beerensorte KP."
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
    name: "Helles Wiehern",
    // Official flavor text: "Besiegt es ein Pokémon, stößt es ein frostiges Wiehern aus und erhöht damit seinen Angriff."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chlorophyll: {
    name: "Chlorophyll",
    // Official flavor text: "Erhöht bei Sonnenschein die Initiative."
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
    name: "Neutraltorso",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cloudnine: {
    name: "Wolke Sieben",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#airlock"
  },
  colorchange: {
    name: "Farbwechsel",
    // Official flavor text: "Ändert seinen Typ zu dem der Attacke des Angreifers."
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
    name: "Dauerschlaf",
    // Official flavor text: "Das Pokémon befindet sich ununterbrochen im Halbschlaf und wacht nie vollständig auf. Es kann jedoch im Schlaf angreifen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} befindet sich im Halbschlaf!"
  },
  commander: {
    name: "Kommandant",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} wurde von {TARGET} verschluckt und \xFCbernimmt das Kommando!"
  },
  competitive: {
    name: "Unbeugsamkeit",
    // Official flavor text: "Erhöht den Spezial-Angriff stark, wenn ein Statuswert gesenkt wurde."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  compoundeyes: {
    name: "Facettenauge",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  contrary: {
    name: "Umkehrung",
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
    name: "Korrosion",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  costar: {
    name: "Synchronauftritt",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cottondown: {
    name: "Wollflaum",
    // Official flavor text: "Wird es von einem Angriff getroffen, verstreut es Teile seines Wollflaums, wodurch die Initiative aller anderen Pokémon sinkt."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cudchew: {
    name: "Wiederk\xE4uer",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  curiousmedicine: {
    name: "Kuriose Arznei",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cursedbody: {
    name: "Tastfluch",
    // Official flavor text: "Blockiert eventuell die Attacke, mit welcher der Angreifer es getroffen hat."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cutecharm: {
    name: "Charmebolzen",
    // Official flavor text: "Wird dieses Pokémon durch eine direkte Attacke angegriffen, verliebt sich der Gegner eventuell in es."
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
    name: "Feuchtigkeit",
    // Official flavor text: "Befeuchtet die Umgebung und verhindert so den Einsatz von Attacken wie Finale, die Explosionen auslösen."
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
    block: "  {SOURCE} kann {MOVE} nicht einsetzen!"
  },
  dancer: {
    name: "T\xE4nzer",
    // Official flavor text: "Kann direkt im Anschluss an die Tanz-Attacke eines anderen Pokémon ebenfalls eine solche einsetzen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkaura: {
    name: "Dunkelaura",
    // Official flavor text: "Erhöht die Stärke aller Attacken des Typs Unlicht."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} strahlt eine dunkle Aura aus!"
  },
  dauntlessshield: {
    name: "Wackerer Schild",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  dazzling: {
    name: "Buntk\xF6rper",
    // Official flavor text: "Überrascht Gegner und hindert sie so daran, Erstschlag-Attacken gegen es einzusetzen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  defeatist: {
    name: "Schw\xE4chling",
    // Official flavor text: "Fallen seine KP auf die Hälfte des Maximalwerts oder weniger, bekommt es Angst. Dadurch wird die Stärke seines Angriffs und Spezial-Angriffs halbiert."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defiant: {
    name: "Siegeswille",
    // Official flavor text: "Erhöht den Angriff stark, wenn ein Statuswert gesenkt wurde."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  deltastream: {
    name: "Delta-Wind",
    // Official flavor text: "Ändert das Wetter, um die Schwächen des Typs Flug zu beseitigen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  desolateland: {
    name: "Endland",
    // Official flavor text: "Ändert das Wetter, um Wasser-Attacken wirkungslos zu machen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  disguise: {
    name: "Kost\xFCmspuk",
    // Official flavor text: "Kann ein Mal pro Kampf mit seinem gruseligen Kostüm einen Angriff abwehren."
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
    block: "  Sein Kost\xFCm hat die Attacke absorbiert!",
    transform: "Die Tarnung von {POKEMON} ist aufgeflogen!"
  },
  download: {
    name: "Download",
    // Official flavor text: "Ist die Spezial-Verteidigung des Gegners höher als seine Verteidigung, wird der eigene Spezial-Angriff erhöht. Ist die Verteidigung höher, steigt der Angriff."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonize: {
    name: "Drachenschicht",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonsmaw: {
    name: "Drachenkiefer",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drizzle: {
    name: "Niesel",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drought: {
    name: "D\xFCrre",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dryskin: {
    name: "Trockenheit",
    // Official flavor text: "Bei Sonnenschein verliert das Pokémon KP und der Schaden durch Feuer-Attacken steigt. Bei Regen und Treffern durch Wasser-Attacken regeneriert es KP."
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
    name: "Fr\xFChwecker",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eartheater: {
    name: "Bodenschmaus",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eelevate: {
    name: "Emporwindung",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  effectspore: {
    name: "Sporenwirt",
    // Official flavor text: "Wird dieses Pokémon durch eine direkte Attacke angegriffen, kann das beim Gegner Paralyse, Vergiftung oder Schlaf auslösen."
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
    name: "Elektro-Erzeuger",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electromorphosis: {
    name: "Dynamo",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} wurde von {MOVE} getroffen und l\xE4dt sich auf!"
  },
  embodyaspectcornerstone: {
    name: "Erinnerungskraft (Fundament)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  Die Fundamentmaske von {POKEMON} funkelt und erh\xF6ht seine Verteidigung!"
  },
  embodyaspecthearthflame: {
    name: "Erinnerungskraft (Ofen)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  Die Ofenmaske von {POKEMON} funkelt und erh\xF6ht seinen Angriff!"
  },
  embodyaspectteal: {
    name: "Erinnerungskraft (T\xFCrkis)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  Die T\xFCrkisgr\xFCne Maske von {POKEMON} funkelt und erh\xF6ht seine Initiative!"
  },
  embodyaspectwellspring: {
    name: "Erinnerungskraft (Brunnen)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  Die Brunnenmaske von {POKEMON} funkelt und erh\xF6ht seine Spezial-Verteidigung!"
  },
  emergencyexit: {
    name: "R\xFCckzug",
    // Official flavor text: "Fallen seine KP auf die Hälfte des Maximalwerts oder weniger, bringt es sich in Sicherheit."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fairyaura: {
    name: "Feenaura",
    // Official flavor text: "Erhöht die Stärke aller Attacken des Typs Fee."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} strahlt eine Feenaura aus!"
  },
  filter: {
    name: "Filter",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firemane: {
    name: "Flammenm\xE4hne",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamebody: {
    name: "Flammk\xF6rper",
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
    name: "Hitzewahn",
    // Official flavor text: "Erhöht bei Verbrennungen die Stärke von Spezial-Attacken."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flashfire: {
    name: "Feuerf\xE4nger",
    // Official flavor text: "Verstärkt Feuer-Attacken, wenn es von Feuer-Attacken getroffen wird."
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
    start: "  Die St\xE4rke der Feuer-Attacken von {POKEMON} wurde erh\xF6ht!"
  },
  flowergift: {
    name: "Pflanzengabe",
    // Official flavor text: "Erhöht bei Sonnenschein den Angriff und die Spezial-Verteidigung aller Team-Pokémon."
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
    name: "Bl\xFCtenh\xFClle",
    // Official flavor text: "Schützt Mitstreiter vom Typ Pflanze vor dem Senken ihrer Statuswerte sowie vor Statusproblemen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} wird von Bl\xFCtenh\xFClle gesch\xFCtzt!"
  },
  fluffy: {
    name: "Flauschigkeit",
    // Official flavor text: "Halbiert den Schaden, den es durch direkte Attacken nimmt, aber verdoppelt dafür den durch Feuer-Attacken erlittenen Schaden."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  forecast: {
    name: "Prognose",
    // Official flavor text: "Nimmt je nach Wetter entweder den Typ Wasser, Feuer oder Eis an."
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
    name: "Vorwarnung",
    // Official flavor text: "Gibt bei Kampfantritt Auskunft über eine Attacke aus dem gegnerischen Repertoire."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  {MOVE} von {TARGET} wurde enth\xFCllt!",
    activateNoTarget: "  Vorwarnung von {POKEMON}: Konzentration auf {MOVE}!"
  },
  friendguard: {
    name: "Freundeshut",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frisk: {
    name: "Schn\xFCffler",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  {POKEMON} hat das Item {ITEM} von {TARGET} erschn\xFCffelt!",
    activateNoTarget: "  {POKEMON} hat {ITEM} erschn\xFCffelt!"
  },
  fullmetalbody: {
    name: "Metallprotektor",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furcoat: {
    name: "Fellkleid",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  galewings: {
    name: "Orkanschwingen",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  galvanize: {
    name: "Elektrohaut",
    // Official flavor text: "Attacken vom Typ Normal nehmen den Typ Elektro an und ihre Stärke erhöht sich ein wenig."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gluttony: {
    name: "V\xF6llerei",
    // Official flavor text: "Setzt bestimmte Beeren nicht erst in einer Notlage ein, sondern bereits dann, wenn seine KP auf die Hälfte des Maximalwerts fallen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  goodasgold: {
    name: "Goldk\xF6rper",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gooey: {
    name: "Viskosit\xE4t",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gorillatactics: {
    name: "Affenfokus",
    // Official flavor text: "Erhöht den Angriff, aber nur die zuerst gewählte Attacke kann eingesetzt werden."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grasspelt: {
    name: "Pflanzenpelz",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassysurge: {
    name: "Gras-Erzeuger",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grimneigh: {
    name: "Dunkles Wiehern",
    // Official flavor text: "Besiegt es ein Pokémon, stößt es ein furchteinflößendes Wiehern aus und erhöht damit seinen Spezial-Angriff."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guarddog: {
    name: "Wachhund",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gulpmissile: {
    name: "W\xFCrggeschoss",
    // Official flavor text: "Wenn das Pokémon Surfer oder Taucher einsetzt, fängt es sich dabei Beute. Erleidet es anschließend Schaden, greift es an, indem es die Beute wieder ausspuckt."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guts: {
    name: "Adrenalin",
    // Official flavor text: "Bei Statusproblemen setzt es Adrenalin frei und erhöht so seinen Angriffs-Wert."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hadronengine: {
    name: "Hadronen-Motor",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} erzeugt ein Elektrofeld und setzt dadurch einen futuristischen Motor in Gang!",
    activate: "  {POKEMON} setzt durch das Elektrofeld einen futuristischen Motor in Gang!"
  },
  harvest: {
    name: "Reiche Ernte",
    // Official flavor text: "Dieselbe Beere kann mehrmals verwendet werden."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    addItem: "  {POKEMON} hat {ITEM} geerntet!"
  },
  healer: {
    name: "Heilherz",
    // Official flavor text: "Befreit Mitstreiter gelegentlich von Statusproblemen."
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
    name: "Hitzeschutz",
    // Official flavor text: "Sein Hitze abweisender Körper halbiert den durch Feuer-Attacken erlittenen Schaden."
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
    name: "Schwermetall",
    // Official flavor text: "Verdoppelt das eigene Gewicht."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  honeygather: {
    name: "Honigmaul",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hospitality: {
    name: "Gastlichkeit",
    shortDesc: null,
    // NEEDS TRANSLATION
    heal: "  {POKEMON} trinkt den von {SOURCE} zubereiteten Tee!"
  },
  hugepower: {
    name: "Kraftkoloss",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hungerswitch: {
    name: "Hei\xDFhunger",
    // Official flavor text: "Das Pokémon ändert zum Ende jeder Runde seine Form und wechselt somit zwischen dem Pappsatt- und dem Kohldampfmuster."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hustle: {
    name: "\xDCbereifer",
    // Official flavor text: "Erhöht den Angriffs-Wert, aber senkt die Genauigkeit."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydration: {
    name: "Hydration",
    // Official flavor text: "Heilt bei Regen Statusprobleme."
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
    name: "Scherenmacht",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icebody: {
    name: "Eishaut",
    // Official flavor text: "Regeneriert bei Hagel nach und nach KP."
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
    name: "Tiefk\xFChlkopf",
    // Official flavor text: "Der Eisblock um seinen Kopf blockt eine physische Attacke ab. Dies bewirkt jedoch einen Formwechsel. Durch Hagel wird der Eisblock wiederhergestellt."
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
    name: "Eisfl\xFCgelstaub",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  illuminate: {
    name: "Erleuchtung",
    // Official flavor text: "Erhellt die Umgebung und erhöht dadurch die Wahrscheinlichkeit, wilden Pokémon zu begegnen."
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
    name: "Trugbild",
    // Official flavor text: "Führt den Gegner hinters Licht, indem es bei Kampfantritt die Gestalt des Pokémon an der letzten Stelle im Team annimmt."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    end: "  Das Trugbild von {POKEMON} verschwindet!"
  },
  immunity: {
    name: "Immunit\xE4t",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  imposter: {
    name: "Doppelg\xE4nger",
    // Official flavor text: "Kämpft als Kopie seines Gegenübers."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infiltrator: {
    name: "Schwebedurch",
    // Official flavor text: "Überwindet gegnerische Schilde sowie Delegatoren und greift an."
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
    name: "Magenkrempler",
    // Official flavor text: "Wird es durch eine Attacke besiegt, fügt es dem Angreifer Schaden in Höhe des KP-Werts zu, den es besaß, bevor es kampfunfähig wurde."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#aftermath"
  },
  innerfocus: {
    name: "Konzentrator",
    // Official flavor text: "Verhindert durch erhöhte Konzentrationsfähigkeit Zurückschrecken."
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
    name: "Bedroher",
    // Official flavor text: "Senkt den Angriff der Gegner, indem es sie gleich zu Kampfantritt bedroht und einschüchtert."
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
    name: "K\xFChnes Schwert",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  ironbarbs: {
    name: "Eisenstachel",
    // Official flavor text: "Fügt dem Angreifer bei Berührung mit eisernen Stacheln Schaden zu."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#roughskin"
  },
  ironfist: {
    name: "Eisenfaust",
    // Official flavor text: "Erhöht die Stärke von Hieb-, Punch-, Faust- und Schlag-Attacken."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  justified: {
    name: "Redlichkeit",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  keeneye: {
    name: "Adlerauge",
    // Official flavor text: "Sein scharfer Blick hindert Angreifer daran, seine Genauigkeit zu senken."
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
    name: "Tollpatsch",
    // Official flavor text: "Das Pokémon kann keine getragenen Items verwenden."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafguard: {
    name: "Floraschild",
    // Official flavor text: "Verhindert bei Sonnenschein Statusprobleme."
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
    name: "Schwebe",
    // Official flavor text: "Verleiht volle Immunität gegen alle Boden-Attacken durch Schwebezustand."
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
    name: "Libero",
    // Official flavor text: "Das Pokémon nimmt bei Einsatz einer Attacke deren Typ an."
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
    name: "Leichtmetall",
    // Official flavor text: "Halbiert das eigene Gewicht."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightningrod: {
    name: "Blitzf\xE4nger",
    // Official flavor text: "Zieht Elektro-Attacken an. Statt durch diese Schaden zu nehmen, erhöht es den eigenen Spezial-Angriff."
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
    activate: "  {POKEMON} zieht den Angriff auf sich!"
  },
  limber: {
    name: "Flexibilit\xE4t",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lingeringaroma: {
    name: "Duftschwade",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  {TARGET} haftet ein penetranter Geruch an!"
  },
  liquidooze: {
    name: "Kloakenso\xDFe",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "  {POKEMON} saugt Kloakenso\xDFe auf!"
  },
  liquidvoice: {
    name: "Pl\xE4tscherstimme",
    // Official flavor text: "Bewirkt, dass alle Lärm-Attacken des Pokémon den Typ Wasser annehmen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  longreach: {
    name: "Langstrecke",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicbounce: {
    name: "Magiespiegel",
    // Official flavor text: "Lenkt Status-Attacken auf den Angreifer um, ohne selbst von ihnen getroffen zu werden."
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
    name: "Magieschild",
    // Official flavor text: "Das Pokémon nimmt nur durch Offensiv-Attacken Schaden."
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
    name: "Zauberer",
    // Official flavor text: "Trifft das Pokémon ein Ziel mit einer Attacke, kann es ihm dabei sein Item stehlen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magmaarmor: {
    name: "Magmapanzer",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magnetpull: {
    name: "Magnetfalle",
    // Official flavor text: "Hindert Stahl-Pokémon durch Magnetismus an der Flucht."
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
    name: "Notschutz",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megalauncher: {
    name: "Megawumme",
    // Official flavor text: "Erhöht die Stärke einiger Wellen-, Aura- und Puls-Attacken."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megasol: {
    name: "Mega-Solarladung",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  merciless: {
    name: "Qu\xE4lerei",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mimicry: {
    name: "Mimese",
    // Official flavor text: "Der Typ des Pokémon ändert sich in Abhängigkeit vom Zustand des Feldes."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} nimmt wieder seinen urspr\xFCnglichen Typ an!"
  },
  mindseye: {
    name: "Geistiges Auge",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  minus: {
    name: "Minus",
    // Official flavor text: "Erhöht den Spezial-Angriff, wenn das Pokémon einen Mitstreiter mit der Fähigkeit Plus oder Minus hat."
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
    name: "Spiegelr\xFCstung",
    // Official flavor text: "Lenkt ausschließlich Effekte, welche die Statuswerte des Pokémon senken würden, auf den Angreifer um."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistysurge: {
    name: "Nebel-Erzeuger",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moldbreaker: {
    name: "\xDCberbr\xFCckung",
    // Official flavor text: "Attacken können ungeachtet der Fähigkeiten des Zieles verwendet werden."
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
    start: "  {POKEMON} gelingt es, gegnerische F\xE4higkeiten zu \xFCberbr\xFCcken!"
  },
  moody: {
    name: "Gef\xFChlswippe",
    // Official flavor text: "Erhöht in jeder Runde aufs Neue einen Statuswert stark und senkt einen anderen."
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
    name: "Starthilfe",
    // Official flavor text: "Treffer durch Elektro-Attacken verursachen keinen Schaden, sondern geben dem Pokémon eine Starthilfe und erhöhen so seine Initiative."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moxie: {
    name: "Hochmut",
    // Official flavor text: "Besiegt es ein Pokémon, steigt sein Selbstvertrauen und somit auch sein Angriff."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multiscale: {
    name: "Multischuppe",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multitype: {
    name: "Variabilit\xE4t",
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
    name: "Mumie",
    // Official flavor text: "Überträgt bei Berührung die Fähigkeit Mumie auf den Angreifer."
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
    changeAbility: "  {TARGET} hat die F\xE4higkeit Mumie angenommen!"
  },
  myceliummight: {
    name: "Myzelienkraft",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  naturalcure: {
    name: "Innere Kraft",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  },
  neuroforce: {
    name: "Zerebralmacht",
    // Official flavor text: "Erhöht die Stärke von sehr effektiven Attacken."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  neutralizinggas: {
    name: "Reaktionsgas",
    // Official flavor text: "Solange ein Pokémon mit der Fähigkeit Reaktionsgas am Kampf beteiligt ist, werden die Fähigkeiten aller anderen Pokémon unterdrückt oder aufgehoben."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  Reaktionsgas hat sich in der Umgebung ausgebreitet!",
    end: "  Das Reaktionsgas h\xF6rt auf zu wirken!"
  },
  noguard: {
    name: "Schildlos",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  normalize: {
    name: "Regulierung",
    // Official flavor text: "Alle Attacken des Pokémon nehmen den Typ Normal an und ihre Stärke erhöht sich ein wenig."
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
    name: "D\xF6sigkeit",
    // Official flavor text: "Das Pokémon ist so apathisch, dass es nicht betört oder provoziert werden kann."
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
    name: "Profiteur",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  orichalcumpulse: {
    name: "Orichalkum-Puls",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {POKEMON} verst\xE4rkt das Sonnenlicht und entfesselt dadurch einen urzeitlichen Puls!",
    activate: "  {POKEMON} badet im Sonnenlicht und entfesselt dadurch einen urzeitlichen Puls!"
  },
  overcoat: {
    name: "Partikelschutz",
    // Official flavor text: "Nimmt weder durch Wetterlagen wie Sandsturm oder Hagel noch durch Pulver oder Puder Schaden."
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
    name: "Notd\xFCnger",
    // Official flavor text: "Erhöht die Stärke von Pflanzen-Attacken, wenn die KP auf einen gewissen Wert fallen."
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
    name: "Tempomacher",
    // Official flavor text: "Das Pokémon lässt sich nicht aus der Ruhe bringen und verhindert so Verwirrung."
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
    name: "Familienbande",
    // Official flavor text: "Zwei Generationen setzen jeweils ein Mal zum Angriff an."
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
    name: "Pastellh\xFClle",
    // Official flavor text: "Schützt das Pokémon und seine Mitstreiter vor Vergiftung."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  perishbody: {
    name: "Unheilsk\xF6rper",
    // Official flavor text: "Erleidet es einen Treffer von einer direkten Attacke, wird es zusammen mit dem Angreifer nach drei Runden besiegt. Rettung ist durch Austausch möglich."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Beide Pok\xE9mon gehen nach drei Runden K.O.!"
  },
  pickpocket: {
    name: "Langfinger",
    // Official flavor text: "Stiehlt das Item des Angreifers bei Berührung."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pickup: {
    name: "Mitnahme",
    // Official flavor text: "Hebt gelegentlich von Gegnern benutzte Items auf. Dies geschieht nicht nur während Kämpfen, sondern auch unterwegs."
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
    name: "Stichbohrer",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pixilate: {
    name: "Feenschicht",
    // Official flavor text: "Attacken vom Typ Normal nehmen den Typ Fee an und ihre Stärke erhöht sich ein wenig."
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
    // Official flavor text: "Erhöht den Spezial-Angriff, wenn das Pokémon einen Mitstreiter mit der Fähigkeit Plus oder Minus hat."
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
    name: "Aufheber",
    // Official flavor text: "Das Pokémon erleidet keinen Schaden durch Vergiftung, sondern regeneriert KP."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisonpoint: {
    name: "Giftdorn",
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
    name: "Giftpuppenspiel",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisontouch: {
    name: "Giftgriff",
    // Official flavor text: "Kann das Ziel durch bloßes Berühren vergiften."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powerconstruct: {
    name: "Scharwandel",
    // Official flavor text: "Fallen seine KP auf die Hälfte des Maximalwerts oder weniger, eilen ihm weitere Zellen zu Hilfe und es nimmt die Optimumform an."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  Du sp\xFCrst die Pr\xE4senz vieler Zellen...!",
    transform: "{POKEMON} hat die Optimumform angenommen!"
  },
  powerofalchemy: {
    name: "Chemiekraft",
    // Official flavor text: "Wechselt seine Fähigkeit zu der eines kampfunfähig gewordenen Mitstreiters."
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
    name: "Kraftquelle",
    // Official flavor text: "Erhöht bei direkt benachbarten Pokémon die Stärke von Attacken."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prankster: {
    name: "Strolch",
    // Official flavor text: "Ermöglicht einen Erstschlag mit Status-Attacken."
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
    name: "Erzwinger",
    // Official flavor text: "Zwingt Gegner dazu, beim Einsatz von Attacken mehr AP zu verbrauchen."
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
    start: "  {POKEMON} setzt Gegner mit Erzwinger unter Druck!"
  },
  primordialsea: {
    name: "Urmeer",
    // Official flavor text: "Ändert das Wetter, um Feuer-Attacken wirkungslos zu machen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prismarmor: {
    name: "Prismar\xFCstung",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  propellertail: {
    name: "Schraubflosse",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  protean: {
    name: "Wandlungskunst",
    // Official flavor text: "Das Pokémon nimmt bei Einsatz einer Attacke deren Typ an."
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
    name: "Pal\xE4osynthese",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} leitet dank des Sonnenscheins die Pal\xE4osynthese ein!",
    activateFromItem: "  {POKEMON} nutzt das Item Energiekapsel, um die Pal\xE4osynthese einzuleiten.",
    start: "  {STAT} von {POKEMON} wird verst\xE4rkt!",
    end: "  Der Effekt der Pal\xE4osynthese von {POKEMON} l\xE4sst nach!"
  },
  psychicsurge: {
    name: "Psycho-Erzeuger",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  punkrock: {
    name: "Punk Rock",
    // Official flavor text: "Erhöht die Stärke von eigenen Lärm-Attacken und halbiert den Schaden, den das Pokémon selbst durch Lärm-Attacken erleidet."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purepower: {
    name: "Mentalkraft",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purifyingsalt: {
    name: "L\xE4utersalz",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  quarkdrive: {
    name: "Quantenantrieb",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} aktiviert dank des Elektrofelds den Quantenantrieb!",
    activateFromItem: "  {POKEMON} nutzt das Item Energiekapsel, um den Quantenantrieb zu aktivieren.",
    start: "  {STAT} von {POKEMON} wird verst\xE4rkt!",
    end: "  Der Effekt des Quantenantriebs von {POKEMON} l\xE4sst nach!"
  },
  queenlymajesty: {
    name: "Majest\xE4t",
    // Official flavor text: "Schüchtert Gegner ein und hindert sie so daran, Erstschlag-Attacken gegen es einzusetzen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  quickdraw: {
    name: "Schnellschuss",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  Durch Schnellschuss kann {POKEMON} schneller handeln als sonst!"
  },
  quickfeet: {
    name: "Rasanz",
    // Official flavor text: "Erhöht bei Statusproblemen die Initiative."
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
    name: "Regengenuss",
    // Official flavor text: "Regeneriert bei Regen nach und nach KP."
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
    name: "Hasenfu\xDF",
    // Official flavor text: "Wird es von einer Unlicht-, Geister- oder Käfer-Attacke getroffen, bekommt es Angst und seine Initiative steigt."
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
    name: "Receiver",
    // Official flavor text: "Wird einer seiner Mitstreiter besiegt, erhält es dessen Fähigkeit."
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
    changeAbility: "  Die F\xE4higkeit {ABILITY} von {SOURCE} wurde \xFCbernommen!"
  },
  reckless: {
    name: "Achtlos",
    // Official flavor text: "Erhöht die Stärke von Attacken mit Rückstoßschaden."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  refrigerate: {
    name: "Frostschicht",
    // Official flavor text: "Attacken vom Typ Normal nehmen den Typ Eis an und ihre Stärke erhöht sich ein wenig."
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
    name: "Belebekraft",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ripen: {
    name: "Heranreifen",
    // Official flavor text: "Verdoppelt den Effekt von Beeren, indem es sie heranreifen lässt."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rivalry: {
    name: "Rivalit\xE4t",
    // Official flavor text: "Greift es einen Rivalen desselben Geschlechts an, wird es stärker. Greift es ein Ziel des anderen Geschlechts an, wird es schwächer."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rkssystem: {
    name: "Alpha-System",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockhead: {
    name: "Steinhaupt",
    // Official flavor text: "Verhindert Schaden, der durch Rückstoß entstehen würde."
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
    name: "Steintr\xE4ger",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  roughskin: {
    name: "Rauhaut",
    // Official flavor text: "Angreifer werden durch die raue Haut des Pokémon bei direkten Attacken verletzt."
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
    damage: "  {POKEMON} wurde Schaden zugef\xFCgt!"
  },
  runaway: {
    name: "Angsthase",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandforce: {
    name: "Sandgewalt",
    // Official flavor text: "Erhöht in Sandstürmen die Stärke von Gesteins-, Boden- und Stahl-Attacken."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandrush: {
    name: "Sandscharrer",
    // Official flavor text: "Erhöht in Sandstürmen die Initiative."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandspit: {
    name: "Sandspeier",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sandstream: {
    name: "Sandsturm",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandveil: {
    name: "Sandschleier",
    // Official flavor text: "Erhöht in Sandstürmen den Ausweichwert."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sapsipper: {
    name: "Vegetarier",
    // Official flavor text: "Wird es von einer Pflanzen-Attacke getroffen, erleidet es keinerlei Schaden und sein Angriff steigt."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  schooling: {
    name: "Fischschwarm",
    // Official flavor text: "Verfügt es über einen hohen KP-Wert, wird es zu einem Schwarm und gewinnt an Stärke. Ist der KP-Wert niedrig, löst sich der Schwarm wieder auf."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON} hat einen Schwarm gebildet!",
    transformEnd: "Der Schwarm von {POKEMON} hat sich zerstreut!"
  },
  scrappy: {
    name: "Rauflust",
    // Official flavor text: "Bewirkt, dass Normal- und Kampf-Attacken auch Pokémon vom Typ Geist treffen können."
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
    name: "Hemmungslos",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seedsower: {
    name: "Streusaat",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  serenegrace: {
    name: "Edelmut",
    // Official flavor text: "Erhöht die Wahrscheinlichkeit, dass Zusatzeffekte von Attacken auftreten."
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
    name: "Phantomschutz",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowtag: {
    name: "Wegsperre",
    // Official flavor text: "Hindert Gegner an der Flucht beziehungsweise am Auswechseln, indem es ihnen den Weg versperrt."
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
    name: "Scharfkantig",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shedskin: {
    name: "Expidermis",
    // Official flavor text: "Das Pokémon befreit sich eventuell von Statusproblemen, indem es seine Haut abstreift."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sheerforce: {
    name: "Rohe Gewalt",
    // Official flavor text: "Erhöht die Stärke von Attacken, aber hebt dafür ihre Zusatzeffekte auf."
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
    name: "Panzerhaut",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shielddust: {
    name: "Puderabwehr",
    // Official flavor text: "Blockiert durch Puder die Zusatzeffekte gegnerischer Angriffe."
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
    name: "Limitschild",
    // Official flavor text: "Fallen seine KP auf die Hälfte des Maximalwerts oder weniger, zerbricht die Panzerung des Pokémon und es wird aggressiver."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "Limitschild wird aktiviert!",
    transformEnd: "Limitschild wird aufgehoben!"
  },
  simple: {
    name: "Wankelmut",
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
    name: "Wertelink",
    // Official flavor text: "Landet mit Serien-Attacken immer die maximale Anzahl an Treffern."
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
    name: "Saumselig",
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
    start: "  {POKEMON} kommt nicht in Fahrt!",
    end: "  {POKEMON} kriegt schlie\xDFlich doch noch die Kurve!"
  },
  slushrush: {
    name: "Schneescharrer",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sniper: {
    name: "Supersch\xFCtze",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snowcloak: {
    name: "Schneemantel",
    // Official flavor text: "Erhöht bei Hagel den Ausweichwert."
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
    name: "Hagelalarm",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  solarpower: {
    name: "Solarkraft",
    // Official flavor text: "Führt bei Sonnenschein in jeder Runde zu KP-Verlusten, erhöht aber den Spezial-Angriff."
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
    name: "Felskern",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soulheart: {
    name: "Seelenherz",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soundproof: {
    name: "L\xE4rmschutz",
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
    name: "Temposchub",
    // Official flavor text: "Erhöht in jeder Runde die Initiative."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spicyspray: {
    name: "Chilispritzer",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stakeout: {
    name: "Beschattung",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stall: {
    name: "Zeitspiel",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stalwart: {
    name: "Stahlr\xFCckgrat",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stamina: {
    name: "Z\xE4higkeit",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stancechange: {
    name: "Taktikwechsel",
    // Official flavor text: "Setzt das Pokémon eine Offensiv-Attacke ein, nimmt es die Klingenform an. Setzt es danach die Attacke Königsschild ein, nimmt es die Schildform an."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "Formwechsel zur Klingenform!",
    transformEnd: "Formwechsel zur Schildform!"
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
    name: "Felsenfest",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steamengine: {
    name: "Dampfantrieb",
    // Official flavor text: "Wird es von einer Wasser- oder Feuer-Attacke getroffen, steigt seine Initiative drastisch."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelworker: {
    name: "Stahlprofi",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelyspirit: {
    name: "St\xE4hlerner Wille",
    // Official flavor text: "Erhöht die Stärke von Stahl-Attacken auf Mitstreiterseite."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stench: {
    name: "Duftnote",
    // Official flavor text: "Lässt das Ziel beim Angriff eventuell durch Gestank zurückschrecken."
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
    name: "Klebek\xF6rper",
    // Official flavor text: "Trägt es ein Item, bleibt dieses an seinem klebrigen Körper haften, wodurch Item-Diebstahl verhindert wird."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    block: "  {POKEMON} konnte kein Item abgenommen werden!"
  },
  stormdrain: {
    name: "Sturmsog",
    // Official flavor text: "Zieht Wasser-Attacken an. Statt durch diese Schaden zu nehmen, erhöht es den eigenen Spezial-Angriff."
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
    name: "Titankiefer",
    // Official flavor text: "Der kräftige Kiefer des Pokémon erhöht die Stärke von Biss-Attacken."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sturdy: {
    name: "Robustheit",
    // Official flavor text: "Bietet Schutz gegen K.O.-Attacken. Bei vollen KP übersteht das Pokémon auch K.O.-Treffer."
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
    activate: "  {POKEMON} \xFCbersteht die Attacke!"
  },
  suctioncups: {
    name: "Saugnapf",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} verankert sich mithilfe von Saugnapf!"
  },
  superluck: {
    name: "Gl\xFCckspilz",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersweetsyrup: {
    name: "S\xFC\xDFer Nektar",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Der Nektar von {POKEMON} verstr\xF6mt einen s\xFC\xDFen Geruch!"
  },
  supremeoverlord: {
    name: "Feldherr",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} gewinnt durch gefallene Mitstreiter an Kraft!"
  },
  surgesurfer: {
    name: "Surf-Schweif",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  swarm: {
    name: "Hexaplaga",
    // Official flavor text: "Erhöht die Stärke von Käfer-Attacken, wenn die KP auf einen gewissen Wert fallen."
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
    name: "Zuckerh\xFClle",
    // Official flavor text: "Alle Team-Pokémon können nicht einschlafen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} schl\xE4ft aufgrund von Zuckerh\xFClle nicht ein!"
  },
  swiftswim: {
    name: "Wassertempo",
    // Official flavor text: "Erhöht bei Regen die Initiative."
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
    name: "Unheilsschwert",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Unheilsschwert von {POKEMON} schw\xE4cht die Verteidigung aller Pok\xE9mon im Umkreis!"
  },
  symbiosis: {
    name: "Nutznie\xDFer",
    // Official flavor text: "Gibt Mitstreitern, die ihr Item aufgebraucht haben, sein eigenes Item."
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
    activate: "  {POKEMON} gibt {TARGET} das Item {ITEM} zum Tragen!"
  },
  synchronize: {
    name: "Synchro",
    // Official flavor text: "Erleidet das Pokémon Verbrennungen, Vergiftungen oder Paralyse, ereilt das jeweilige Statusproblem auch den Verursacher."
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
    name: "Unheilstafeln",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Unheilstafeln von {POKEMON} schw\xE4cht den Angriff aller Pok\xE9mon im Umkreis!"
  },
  tangledfeet: {
    name: "Fu\xDFangel",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tanglinghair: {
    name: "Lockenkopf",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  technician: {
    name: "Techniker",
    // Official flavor text: "Erhöht die Stärke von schwächeren Attacken."
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
    name: "Telepathie",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  {POKEMON} nimmt keinen Schaden durch Angriffe von Mitstreitern!"
  },
  teraformzero: {
    name: "Teraforming Null",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terashell: {
    name: "Tera-Panzer",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  Der Panzer von {POKEMON} funkelt und verzerrt die Wechselwirkungen zwischen den Typen!"
  },
  terashift: {
    name: "Tera-Wandel",
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "{POKEMON} verwandelt sich!"
  },
  teravolt: {
    name: "Teravolt",
    // Official flavor text: "Attacken können ungeachtet der Fähigkeit des Zieles eingesetzt werden."
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
    start: "  {POKEMON} strahlt eine knisternde Aura aus!"
  },
  thermalexchange: {
    name: "Thermowandel",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thickfat: {
    name: "Speckschicht",
    // Official flavor text: "Das Pokémon wird von einer dicken Fettschicht geschützt, was den durch Feuer- und Eis-Attacken erlittenen Schaden halbiert."
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
    name: "Aufwertung",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torrent: {
    name: "Sturzbach",
    // Official flavor text: "Erhöht die Stärke von Wasser-Attacken, wenn die KP auf einen gewissen Wert fallen."
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
    name: "Krallenwucht",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicboost: {
    name: "Giftwahn",
    // Official flavor text: "Erhöht bei Vergiftungen die Stärke von physischen Attacken."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicchain: {
    name: "Giftkette",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicdebris: {
    name: "Giftbelag",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trace: {
    name: "Erfassen",
    // Official flavor text: "Kopiert bei Kampfantritt die Fähigkeit eines Gegners."
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
    changeAbility: "  {ABILITY} von {SOURCE} wurde erfasst und kopiert!"
    // SV de_common:6723; ability renamed Fährte → Erfassen in gen 8
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
    name: "Heilwandel",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  truant: {
    name: "Schnarchnase",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    cant: "{POKEMON} faulenzt!"
  },
  turboblaze: {
    name: "Turbobrand",
    // Official flavor text: "Attacken können ungeachtet der Fähigkeit des Zieles eingesetzt werden."
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
    start: "  {POKEMON} strahlt eine lodernde Aura aus!"
  },
  unaware: {
    name: "Unkenntnis",
    // Official flavor text: "Greift das Pokémon an, ignoriert es sämtliche Statusveränderungen des Zieles."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unburden: {
    name: "Entlastung",
    // Official flavor text: "Wenn das von ihm getragene Item verwendet wird oder verloren geht, erhöht dies seine Initiative."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unnerve: {
    name: "Anspannung",
    // Official flavor text: "Erzeugt bei Gegnern Stress und hindert sie so daran, Beeren zu konsumieren."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  {TEAM:capitalize} kriegen vor Anspannung keine Beeren mehr runter!"
  },
  unseenfist: {
    name: "Verborgene Faust",
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "Unheilsgef\xE4\xDF",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Unheilsgef\xE4\xDF von {POKEMON} schw\xE4cht den Spezial-Angriff aller Pok\xE9mon im Umkreis!"
  },
  victorystar: {
    name: "Triumphstern",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vitalspirit: {
    name: "Munterkeit",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  voltabsorb: {
    name: "Voltabsorber",
    // Official flavor text: "Treffer durch Elektro-Attacken verursachen keinen Schaden, sondern regenerieren stattdessen KP."
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
    name: "Rastlose Seele",
    // Official flavor text: "Wird das Pokémon von einer direkten Attacke getroffen, tauscht es seine Fähigkeit mit der des Angreifers."
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
    name: "H2O-Absorber",
    // Official flavor text: "Treffer durch Wasser-Attacken verursachen keinen Schaden, sondern regenerieren stattdessen KP."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterbubble: {
    name: "Wasserblase",
    // Official flavor text: "Feuer-Attacken fügen dem Pokémon weniger Schaden zu. Verhindert Verbrennungen."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  watercompaction: {
    name: "Verklumpen",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterveil: {
    name: "Aquah\xFClle",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  weakarmor: {
    name: "Bruchr\xFCstung",
    // Official flavor text: "Senkt bei erlittenem Treffer durch eine physische Attacke die Verteidigung des Pokémon, aber erhöht dafür seine Initiative stark."
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
    name: "Knusperkruste",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  whitesmoke: {
    name: "Pulverrauch",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wimpout: {
    name: "Rei\xDFaus",
    // Official flavor text: "Fallen seine KP auf die Hälfte des Maximalwerts oder weniger, zieht es sich ängstlich zurück."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  windpower: {
    name: "Windkraft",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#electromorphosis"
  },
  windrider: {
    name: "Windreiter",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wonderguard: {
    name: "Wunderwache",
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
    name: "Wunderhaut",
    // Official flavor text: "Wehrt mit robustem Körper viele Status-Attacken ab."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zenmode: {
    name: "Trance-Modus",
    // Official flavor text: "Fallen seine KP auf die Hälfte des Maximalwerts oder weniger, wechselt es seine Gestalt."
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
    transform: "Es verf\xE4llt in den Trance-Modus!",
    transformEnd: "Es verl\xE4sst den Trance-Modus!"
  },
  zerotohero: {
    name: "Superwechsel",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  {POKEMON} hat sich verwandelt und ist zur\xFCckgekehrt!"
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
