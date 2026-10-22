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
    name: "Adaptable",
    // Official flavor text: "Potencia aún más los movimientos cuyo tipo coincida con el suyo."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aerilate: {
    name: "Piel Celeste",
    // Official flavor text: "Convierte los movimientos de tipo Normal en tipo Volador y aumenta ligeramente su potencia."
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
    name: "Detonaci\xF3n",
    // Official flavor text: "Daña al agresor que le ha dado el golpe de gracia con un movimiento de contacto."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "  \xA1{POKEMON} ha resultado herido!"
  },
  airlock: {
    name: "Bucle Aire",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  Los efectos del tiempo atmosf\xE9rico se han neutralizado."
  },
  analytic: {
    name: "C\xE1lculo Final",
    // Official flavor text: "Aumenta la potencia de su movimiento si es el último en atacar."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  angerpoint: {
    name: "Irascible",
    // Official flavor text: "Si recibe un golpe crítico, monta en cólera y sube su Ataque hasta el máximo."
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
    boost: "  \xA1El Ataque de {POKEMON} ha aumentado al m\xE1ximo!"
  },
  angershell: {
    name: "Coraza Ira",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  anticipation: {
    name: "Anticipaci\xF3n",
    // Official flavor text: "Prevé los movimientos peligrosos del rival."
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
    activate: "  \xA1{POKEMON} se ha estremecido!"
  },
  arenatrap: {
    name: "Trampa Arena",
    // Official flavor text: "Evita que el rival huya."
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
    name: "Cola Armadura",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  aromaveil: {
    name: "Velo Aroma",
    // Official flavor text: "Se protege a sí mismo y a sus aliados de ataques que impiden elegir movimientos."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  \xA1Velo Aroma ha protegido a {POKEMON}!"
  },
  asone: {
    name: "Unidad Ecuestre",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} tiene dos habilidades!"
  },
  asoneglastrier: {
    name: "Unidad Ecuestre (Glastrier)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  asonespectrier: {
    name: "Unidad Ecuestre (Spectrier)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null
    // NEEDS TRANSLATION
  },
  aurabreak: {
    name: "Rompeaura",
    // Official flavor text: "Invierte los efectos de las auras, por lo que baja la potencia de ciertos movimientos en vez de subirla."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} ha invertido todas las auras!"
  },
  auraguard: {
    name: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  baddreams: {
    name: "Mal Sue\xF1o",
    // Official flavor text: "Inflige daño a cualquier rival que esté dormido."
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
    damage: "  \xA1{POKEMON} est\xE1 inmerso en un sue\xF1o agitado!"
  },
  ballfetch: {
    name: "Recogebolas",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battery: {
    name: "Bater\xEDa",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlearmor: {
    name: "Armadura Batalla",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  battlebond: {
    name: "Fuerte Afecto",
    // Official flavor text: "Al derrotar a un rival, los vínculos con su Entrenador se refuerzan y se convierte en Greninja Ash. Su Shuriken de Agua también se ve potenciado."
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
    activate: "  \xA1{POKEMON} siente la fuerza de vuestro afecto mutuo!",
    transform: "\xA1{POKEMON} se ha convertido en Greninja Ash!"
  },
  beadsofruin: {
    name: "Abalorio Debacle",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} ha mermado la Defensa Especial de los dem\xE1s Pok\xE9mon con Abalorio Debacle!"
  },
  beastboost: {
    name: "Ultraimpulso",
    // Official flavor text: "Si derrota a un rival en ese turno, aumenta su característica más fuerte."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  berserk: {
    name: "C\xF3lera",
    // Official flavor text: "Aumenta su Ataque Especial si sus PS se ven reducidos a la mitad debido a algún ataque."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  bigpecks: {
    name: "Sacapecho",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  blaze: {
    name: "Mar Llamas",
    // Official flavor text: "Potencia sus movimientos de tipo Fuego cuando le quedan pocos PS."
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
    name: "Antibalas",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cheekpouch: {
    name: "Carrillo",
    // Official flavor text: "Recupera PS al comer cualquier baya."
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
    name: "Relincho Blanco",
    // Official flavor text: "Al derrotar a un objetivo, emite un relincho gélido y aumenta su Ataque."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  chlorophyll: {
    name: "Clorofila",
    // Official flavor text: "Sube su Velocidad cuando hace sol."
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
    name: "Cuerpo Puro",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cloudnine: {
    name: "Aclimataci\xF3n",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#airlock"
  },
  colorchange: {
    name: "Cambio Color",
    // Official flavor text: "Adopta el tipo del último movimiento del que es blanco."
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
    name: "Letargo Perenne",
    // Official flavor text: "No despierta jamás de su profundo letargo e incluso ataca dormido."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} est\xE1 sumido en un profundo letargo!"
  },
  commander: {
    name: "Comandar",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \xA1{POKEMON} ha sido engullido por {TARGET} y se ha convertido en su comandante!"
  },
  competitive: {
    name: "Tenacidad",
    // Official flavor text: "Aumenta mucho su Ataque Especial cuando el rival le baja cualquiera de sus características."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  compoundeyes: {
    name: "Ojo Compuesto",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  contrary: {
    name: "Respond\xF3n",
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
    name: "Corrosi\xF3n",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  costar: {
    name: "Un\xEDsono",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cottondown: {
    name: "Pelusa",
    // Official flavor text: "Al ser alcanzado por un ataque, suelta una pelusa de algodón que reduce la Velocidad de todos los demás Pokémon."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cudchew: {
    name: "Rumia",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  curiousmedicine: {
    name: "Medicina Extra\xF1a",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cursedbody: {
    name: "Cuerpo Maldito",
    // Official flavor text: "Puede anular el movimiento usado en su contra."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  cutecharm: {
    name: "Gran Encanto",
    // Official flavor text: "Puede causar enamoramiento al rival que lo toque."
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
    name: "Humedad",
    // Official flavor text: "Aumenta la humedad del entorno y evita que se puedan utilizar movimientos explosivos, tales como Autodestrucción."
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
    block: "  \xA1{SOURCE} no puede usar {MOVE}!"
  },
  dancer: {
    name: "Pareja de Baile",
    // Official flavor text: "Puede copiar inmediatamente cualquier movimiento de baile que haya usado otro Pokémon presente en el combate."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  darkaura: {
    name: "Aura Oscura",
    // Official flavor text: "Aumenta la potencia de todos los movimientos de tipo Siniestro."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} irradia un aura oscura!"
  },
  dauntlessshield: {
    name: "Escudo Recio",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  dazzling: {
    name: "Cuerpo V\xEDvido",
    // Official flavor text: "Desconcierta al rival y le impide utilizar movimientos con prioridad en su contra."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  defeatist: {
    name: "Flaqueza",
    // Official flavor text: "Se debilita tanto cuando sus PS se ven reducidos a la mitad que su Ataque y su Ataque Especial bajan."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  defiant: {
    name: "Competitivo",
    // Official flavor text: "Sube mucho su Ataque cuando el rival le baja las características."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  deltastream: {
    name: "R\xE1faga Delta",
    // Official flavor text: "Altera el clima para anular las vulnerabilidades del tipo Volador."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  desolateland: {
    name: "Tierra del Ocaso",
    // Official flavor text: "Altera el clima para anular los ataques de tipo Agua."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  disguise: {
    name: "Disfraz",
    // Official flavor text: "Puede eludir un ataque valiéndose de la tela que le cubre el cuerpo una vez por combate."
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
    block: "  \xA1El disfraz ha actuado como se\xF1uelo!",
    transform: "\xA1El disfraz de {POKEMON} se ha roto!"
  },
  download: {
    name: "Descarga",
    // Official flavor text: "Compara la Defensa y la Defensa Especial del rival para ver cuál es inferior y aumenta su propio Ataque o Ataque Especial según sea lo más eficaz."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonize: {
    name: "Piel Dragontina",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dragonsmaw: {
    name: "Mand\xEDbula Drag\xF3n",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drizzle: {
    name: "Llovizna",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  drought: {
    name: "Sequ\xEDa",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  dryskin: {
    name: "Piel Seca",
    // Official flavor text: "Pierde PS si hace sol y los recupera si llueve o recibe un movimiento de tipo Agua. Los movimientos de tipo Fuego, por su parte, le hacen más daño de lo normal."
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
    name: "Madrugar",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eartheater: {
    name: "Geofagia",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  eelevate: {
    name: "Impulso Anguila",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  effectspore: {
    name: "Efecto Espora",
    // Official flavor text: "Puede dormir, envenenar o paralizar al Pokémon con el que entre en contacto al recibir un ataque."
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
    name: "Electrog\xE9nesis",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  electromorphosis: {
    name: "Dinamo",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} se ha cargado de electricidad gracias a {MOVE}!"
  },
  embodyaspectcornerstone: {
    name: "Evocarrecuerdos (Cimiento)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  \xA1{POKEMON} ha hecho brillar la M\xE1scara Cimiento y ha aumentado su Defensa!"
  },
  embodyaspecthearthflame: {
    name: "Evocarrecuerdos (Horno)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  \xA1{POKEMON} ha hecho brillar la M\xE1scara Horno y ha aumentado su Ataque!"
  },
  embodyaspectteal: {
    name: "Evocarrecuerdos (Turquesa)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  \xA1{POKEMON} ha hecho brillar la M\xE1scara Turquesa y ha aumentado su Velocidad!"
  },
  embodyaspectwellspring: {
    name: "Evocarrecuerdos (Fuente)",
    // PS-style disambiguator (not part of the official name)
    shortDesc: null,
    // NEEDS TRANSLATION
    boost: "  \xA1{POKEMON} ha hecho brillar la M\xE1scara Fuente y ha aumentado su Defensa Especial!"
  },
  emergencyexit: {
    name: "Retirada",
    // Official flavor text: "Abandona el terreno de combate cuando sus PS se ven reducidos a la mitad para evitar males mayores."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  fairyaura: {
    name: "Aura Fe\xE9rica",
    // Official flavor text: "Aumenta la potencia de todos los movimientos de tipo Hada."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} irradia un aura fe\xE9rica!"
  },
  filter: {
    name: "Filtro",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  firemane: {
    name: "Crin de Fuego",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flamebody: {
    name: "Cuerpo Llama",
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
    name: "\xCDmpetu Ardiente",
    // Official flavor text: "Aumenta la potencia de sus ataques especiales cuando sufre quemaduras."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  flashfire: {
    name: "Absorbe Fuego",
    // Official flavor text: "Si le alcanza algún movimiento de tipo Fuego, potencia sus propios movimientos de dicho tipo."
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
    start: "  \xA1La potencia de los movimientos de tipo Fuego de {POKEMON} ha aumentado!"
  },
  flowergift: {
    name: "Don Floral",
    // Official flavor text: "Si hace sol, aumenta su Ataque y su Defensa Especial, así como los de sus aliados."
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
    name: "Velo Flor",
    // Official flavor text: "Evita que los Pokémon de tipo Planta aliados sufran problemas de estado o que les bajen sus características."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  \xA1Velo Flor ha protegido a {POKEMON}!"
  },
  fluffy: {
    name: "Peluche",
    // Official flavor text: "Reduce a la mitad el daño provocado por los movimientos de contacto, pero duplica el infligido por los de tipo Fuego."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  forecast: {
    name: "Predicci\xF3n",
    // Official flavor text: "Cambia a tipo Agua, Fuego o Hielo en función del tiempo atmosférico."
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
    name: "Alerta",
    // Official flavor text: "Indica el movimiento más potente del rival al entrar en combate."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    activate: "  \xA1Se ha detectado el movimiento {MOVE} de {TARGET}!",
    activateNoTarget: "  \xA1Alerta de {POKEMON} detect\xF3 {MOVE}!"
  },
  friendguard: {
    name: "Compiescolta",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  frisk: {
    name: "Cacheo",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen5: {
      shortDesc: null
      // NEEDS TRANSLATION
    },
    activate: "  \xA1{POKEMON} ha cacheado a {TARGET} y ha hallado {ITEM:indefinite:classified}!",
    activateNoTarget: "  \xA1{POKEMON} ha cacheado a su rival y ha encontrado {ITEM}!"
  },
  fullmetalbody: {
    name: "Guardia Met\xE1lica",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  furcoat: {
    name: "Pelaje Recio",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  galewings: {
    name: "Alas Vendaval",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  galvanize: {
    name: "Piel El\xE9ctrica",
    // Official flavor text: "Convierte los movimientos de tipo Normal en tipo Eléctrico y aumenta ligeramente su potencia."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gluttony: {
    name: "Gula",
    // Official flavor text: "Cuando sus PS se ven reducidos a la mitad, engulle la baya que normalmente solo se comería cuando le quedasen pocos PS."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  goodasgold: {
    name: "Cuerpo \xC1ureo",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gooey: {
    name: "Baba",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gorillatactics: {
    name: "Monotema",
    // Official flavor text: "Potencia su Ataque, pero solo puede usar el primer movimiento escogido."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grasspelt: {
    name: "Manto Frondoso",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grassysurge: {
    name: "Herbog\xE9nesis",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  grimneigh: {
    name: "Relincho Negro",
    // Official flavor text: "Al derrotar a un objetivo, emite un relincho aterrador y aumenta su Ataque Especial."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guarddog: {
    name: "Perro Guardi\xE1n",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  gulpmissile: {
    name: "Tragamisil",
    // Official flavor text: "Tras usar Surf o Buceo, emerge con una presa en la boca. Al recibir daño, ataca escupiéndola al rival."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  guts: {
    name: "Agallas",
    // Official flavor text: "Si sufre un problema de estado, se viene arriba y aumenta su Ataque."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hadronengine: {
    name: "Motor Hadr\xF3nico",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} crea un campo el\xE9ctrico que impulsa su motor futurista!",
    activate: "  \xA1El campo el\xE9ctrico impulsa el motor futurista de {POKEMON}!"
  },
  harvest: {
    name: "Cosecha",
    // Official flavor text: "Puede reutilizar varias veces una misma baya."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    addItem: "  \xA1{POKEMON} ha recogido {ITEM:indefinite}!"
  },
  healer: {
    name: "Alma Cura",
    // Official flavor text: "A veces cura los problemas de estado de un aliado."
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
    name: "Ign\xEDfugo",
    // Official flavor text: "Su cuerpo, resistente al calor, reduce a la mitad el daño recibido por movimientos de tipo Fuego."
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
    name: "Metal Pesado",
    // Official flavor text: "Duplica su peso."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  honeygather: {
    name: "Recogemiel",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hospitality: {
    name: "Hospitalidad",
    shortDesc: null,
    // NEEDS TRANSLATION
    heal: "  \xA1{POKEMON} se ha bebido el t\xE9 que ha preparado {SOURCE}!"
  },
  hugepower: {
    name: "Potencia",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hungerswitch: {
    name: "Mutapetito",
    // Official flavor text: "Alterna entre su Forma Saciada y Forma Voraz al final de cada turno."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hustle: {
    name: "Entusiasmo",
    // Official flavor text: "Aumenta su Ataque, pero reduce su Precisión."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  hydration: {
    name: "Hidrataci\xF3n",
    // Official flavor text: "Cura los problemas de estado si está lloviendo."
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
    name: "Corte Fuerte",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  icebody: {
    name: "G\xE9lido",
    // Official flavor text: "Recupera PS de forma gradual cuando hay tormentas de granizo."
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
    name: "Cara de Hielo",
    // Official flavor text: "Absorbe el daño de un ataque físico con el hielo de la cabeza, tras lo cual cambia de forma. El hielo se regenerará la próxima vez que granice."
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
    name: "Escama de Hielo",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  illuminate: {
    name: "Iluminaci\xF3n",
    // Official flavor text: "Aumenta la probabilidad de encontrar Pokémon al iluminar el entorno."
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
    name: "Ilusi\xF3n",
    // Official flavor text: "Adopta el aspecto del último Pokémon del equipo al entrar en combate para desconcertar al rival."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    end: "  \xA1La ilusi\xF3n de {POKEMON} se ha desvanecido!"
  },
  immunity: {
    name: "Inmunidad",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  imposter: {
    name: "Impostor",
    // Official flavor text: "Se transforma en el Pokémon que tiene enfrente."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  infiltrator: {
    name: "Allanamiento",
    // Official flavor text: "Ataca sorteando la barrera o el sustituto del rival."
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
    name: "Rev\xE9s",
    // Official flavor text: "Al caer debilitado, inflige al rival un daño equivalente a los PS que le quedaran."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#aftermath"
  },
  innerfocus: {
    name: "Fuerza Mental",
    // Official flavor text: "Gracias a su profunda concentración, no se amedrenta ante los ataques del rival."
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
    name: "Insomnio",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  intimidate: {
    name: "Intimidaci\xF3n",
    // Official flavor text: "Al entrar en combate amilana al rival de tal manera que su Ataque disminuye."
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
    name: "Espada Ind\xF3mita",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  ironbarbs: {
    name: "Punta Acero",
    // Official flavor text: "Inflige daño al rival si este le golpea con un movimiento de contacto."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    damage: "#roughskin"
  },
  ironfist: {
    name: "Pu\xF1o F\xE9rreo",
    // Official flavor text: "Aumenta la potencia de los puñetazos."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  justified: {
    name: "Justiciero",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  keeneye: {
    name: "Vista Lince",
    // Official flavor text: "Su aguda vista evita que le disminuya la Precisión."
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
    name: "Zoquete",
    // Official flavor text: "No puede usar objetos equipados."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  leafguard: {
    name: "Defensa Hoja",
    // Official flavor text: "Evita los problemas de estado si hace sol."
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
    name: "Levitaci\xF3n",
    // Official flavor text: "Su capacidad de flotar sobre el suelo le proporciona inmunidad frente a los movimientos de tipo Tierra."
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
    name: "L\xEDbero",
    // Official flavor text: "Cambia su tipo al del movimiento que va a usar."
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
    name: "Metal Liviano",
    // Official flavor text: "Reduce a la mitad su peso."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lightningrod: {
    name: "Pararrayos",
    // Official flavor text: "Atrae y neutraliza los movimientos de tipo Eléctrico, que además le suben el Ataque Especial."
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
    activate: "  \xA1{POKEMON} ha atra\xEDdo el ataque!"
  },
  limber: {
    name: "Flexibilidad",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  lingeringaroma: {
    name: "Olor Persistente",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    changeAbility: "  \xA1Un olor persistente impregna a {TARGET}!"
  },
  liquidooze: {
    name: "Lodo L\xEDquido",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    damage: "  \xA1{POKEMON} ha absorbido la secreci\xF3n viscosa t\xF3xica!"
  },
  liquidvoice: {
    name: "Voz Fluida",
    // Official flavor text: "Hace que todos sus movimientos que usan sonido pasen a ser de tipo Agua."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  longreach: {
    name: "Remoto",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magicbounce: {
    name: "Espejo M\xE1gico",
    // Official flavor text: "Puede devolver los movimientos de estado lanzados por el rival, sin verse afectado por ellos."
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
    name: "Muro M\xE1gico",
    // Official flavor text: "Solo recibe daño de ataques."
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
    name: "Prestidigitador",
    // Official flavor text: "Roba el objeto del Pokémon al que alcance con un movimiento."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magmaarmor: {
    name: "Escudo Magma",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  magnetpull: {
    name: "Im\xE1n",
    // Official flavor text: "Su magnetismo atrae a los Pokémon de tipo Acero y les impide huir."
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
    name: "Escama Especial",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megalauncher: {
    name: "Megadisparador",
    // Official flavor text: "Aumenta la potencia de algunos movimientos de pulsos y auras."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  megasol: {
    name: "Megasolar",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  merciless: {
    name: "Ensa\xF1amiento",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mimicry: {
    name: "Mimetismo",
    // Official flavor text: "Cambia su tipo según el campo que haya en el terreno de combate."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \xA1{POKEMON} ha recobrado su tipo original!"
  },
  mindseye: {
    name: "Ojo Mental",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  minus: {
    name: "Menos",
    // Official flavor text: "Potencia su Ataque Especial si un Pokémon aliado tiene la habilidad Más o Menos."
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
    name: "Coraza Reflejo",
    // Official flavor text: "Refleja los efectos que reducen las características."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  mistysurge: {
    name: "Nebulog\xE9nesis",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moldbreaker: {
    name: "Rompemoldes",
    // Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
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
    start: "  \xA1{POKEMON} rompe el molde!"
  },
  moody: {
    name: "Veleta",
    // Official flavor text: "Una característica le sube mucho en cada turno, pero le baja otra."
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
    name: "Electromotor",
    // Official flavor text: "Si le alcanza un movimiento de tipo Eléctrico, le sube la Velocidad en vez de sufrir daño."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  moxie: {
    name: "Autoestima",
    // Official flavor text: "Al debilitar a un objetivo, su confianza se refuerza de tal manera que aumenta su Ataque."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multiscale: {
    name: "Multiescamas",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  multitype: {
    name: "Multitipo",
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
    name: "Momia",
    // Official flavor text: "Contagia la habilidad Momia al rival que entre en contacto con él."
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
    changeAbility: "  \xA1La habilidad de {TARGET} es ahora Momia!"
  },
  myceliummight: {
    name: "Poder F\xFAngico",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  naturalcure: {
    name: "Cura Natural",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: null
    // NEEDS TRANSLATION
  },
  neuroforce: {
    name: "Fuerza Cerebral",
    // Official flavor text: "Potencia los ataques supereficaces."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  neutralizinggas: {
    name: "Gas Reactivo",
    // Official flavor text: "Anula los efectos de las habilidades de los demás Pokémon presentes mientras esté en el terreno de combate."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    },
    start: "  \xA1Un gas reactivo se propaga por toda la zona!",
    end: "  El gas reactivo se ha disipado."
  },
  noguard: {
    name: "Indefenso",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  normalize: {
    name: "Normalidad",
    // Official flavor text: "Hace que todos sus movimientos se vuelvan de tipo Normal y aumenten ligeramente su potencia."
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
    name: "Despiste",
    // Official flavor text: "Su indiferencia evita que sea provocado o caiga presa del enamoramiento."
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
    name: "Oportunista",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  orichalcumpulse: {
    name: "Latido Oricalco",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} intensifica el brillo del sol y desata su pulso primigenio!",
    activate: "  \xA1{POKEMON} recibe los rayos del sol y desata su pulso primigenio!"
  },
  overcoat: {
    name: "Funda",
    // Official flavor text: "No le afectan las tormentas de arena, el granizo y los movimientos con polvos."
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
    name: "Espesura",
    // Official flavor text: "Potencia sus movimientos de tipo Planta cuando le quedan pocos PS."
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
    name: "Ritmo Propio",
    // Official flavor text: "Como le gusta hacer las cosas a su manera, los rivales no logran confundirlo."
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
    name: "Amor Filial",
    // Official flavor text: "Une fuerzas con su cría y ataca dos veces."
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
    name: "Velo Pastel",
    // Official flavor text: "Se protege a sí mismo y a sus aliados del envenenamiento."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  perishbody: {
    name: "Cuerpo Mortal",
    // Official flavor text: "Si le alcanza un movimiento de contacto, se debilitará al cabo de 3 turnos, así como su agresor, a menos que abandonen el terreno de combate."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1Ambos Pok\xE9mon se debilitar\xE1n dentro de tres turnos!"
  },
  pickpocket: {
    name: "Hurto",
    // Official flavor text: "Si el rival usa un movimiento de contacto al atacar, le roba el objeto."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pickup: {
    name: "Recogida",
    // Official flavor text: "Puede recoger objetos que el rival haya usado, o bien otros que encuentre en plena aventura."
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
    name: "Turbotaladro",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  pixilate: {
    name: "Piel Fe\xE9rica",
    // Official flavor text: "Convierte los movimientos de tipo Normal en tipo Hada y aumenta ligeramente su potencia."
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
    name: "M\xE1s",
    // Official flavor text: "Potencia su Ataque Especial si un Pokémon aliado tiene la habilidad Más o Menos."
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
    name: "Ant\xEDdoto",
    // Official flavor text: "Si resulta envenenado, recupera PS en vez de perderlos."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisonpoint: {
    name: "Punto T\xF3xico",
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
    name: "T\xEDtere T\xF3xico",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  poisontouch: {
    name: "Toque T\xF3xico",
    // Official flavor text: "Puede envenenar al objetivo con solo tocarlo."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  powerconstruct: {
    name: "Agrupamiento",
    // Official flavor text: "Cuando sus PS se ven reducidos a la mitad, las células se reagrupan y adopta su Forma Completa."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  Sientes m\xFAltiples presencias...",
    transform: "\xA1{POKEMON} ha adoptado la Forma Completa!"
  },
  powerofalchemy: {
    name: "Reacci\xF3n Qu\xEDmica",
    // Official flavor text: "Reacciona copiando la habilidad de un aliado debilitado."
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
    name: "Fuente Energ\xEDa",
    // Official flavor text: "Potencia los movimientos de los Pokémon adyacentes."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prankster: {
    name: "Bromista",
    // Official flavor text: "Sus movimientos de estado tienen prioridad alta."
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
    name: "Presi\xF3n",
    // Official flavor text: "Presiona al rival para que sus PP se acaben antes."
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
    start: "  \xA1{POKEMON} ejerce presi\xF3n!"
  },
  primordialsea: {
    name: "Mar del Albor",
    // Official flavor text: "Altera el clima para anular los ataques de tipo Fuego."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  prismarmor: {
    name: "Armadura Prisma",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  propellertail: {
    name: "H\xE9lice Caudal",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  protean: {
    name: "Mutatipo",
    // Official flavor text: "Cambia su tipo al del movimiento que va a usar."
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
    name: "Paleos\xEDntesis",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \xA1La habilidad Paleos\xEDntesis de {POKEMON} se ha activado gracial al sol!",
    activateFromItem: "  \xA1{POKEMON} ha usado la Energ\xEDa Potenciadora para activar Paleos\xEDntesis!",
    start: "  \xA1{STAT:definite:capitalize} de {POKEMON} se ha reforzado!",
    end: "  \xA1El efecto de Paleos\xEDntesis de {POKEMON} ha desaparecido!"
  },
  psychicsurge: {
    name: "Psicog\xE9nesis",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  punkrock: {
    name: "Punk Rock",
    // Official flavor text: "Potencia los movimientos que usan sonido y reduce a la mitad el daño que le infligen dichos movimientos."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purepower: {
    name: "Energ\xEDa Pura",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  purifyingsalt: {
    name: "Sal Purificadora",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  quarkdrive: {
    name: "Carga Cuark",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \xA1La habilidad Carga Cuark de {POKEMON} se ha activado gracias al campo el\xE9ctrico!",
    activateFromItem: "  \xA1{POKEMON} ha usado la Energ\xEDa Potenciadora para activar Carga Cuark!",
    start: "  \xA1{STAT:definite:capitalize} de {POKEMON} se ha reforzado!",
    end: "  \xA1El efecto de Carga Cuark de {POKEMON} ha desaparecido!"
  },
  queenlymajesty: {
    name: "Regia Presencia",
    // Official flavor text: "Intimida al objetivo y le impide usar movimientos con prioridad."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "#damp"
  },
  quickdraw: {
    name: "Mano R\xE1pida",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \xA1{POKEMON} ataca primero gracias a la habilidad Mano R\xE1pida!"
  },
  quickfeet: {
    name: "Pies R\xE1pidos",
    // Official flavor text: "Aumenta la Velocidad si sufre problemas de estado."
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
    name: "Cura Lluvia",
    // Official flavor text: "Recupera PS de forma gradual cuando llueve."
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
    name: "Cobard\xEDa",
    // Official flavor text: "Si le alcanza un movimiento de tipo Siniestro, Bicho o Fantasma, el miedo hace que le suba la Velocidad."
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
    name: "Receptor",
    // Official flavor text: "Adquiere la habilidad de un aliado debilitado."
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
    changeAbility: "  \xA1El Pok\xE9mon ha recibido la habilidad {ABILITY} de {SOURCE}!"
  },
  reckless: {
    name: "Audaz",
    // Official flavor text: "Potencia los movimientos que también dañan al usuario."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  refrigerate: {
    name: "Piel Helada",
    // Official flavor text: "Convierte los movimientos de tipo Normal en tipo Hielo y aumenta ligeramente su potencia."
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
    name: "Regeneraci\xF3n",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  ripen: {
    name: "Maduraci\xF3n",
    // Official flavor text: "Hace madurar las bayas, por lo que duplica sus efectos."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rivalry: {
    name: "Rivalidad",
    // Official flavor text: "Si el objetivo es del mismo sexo, su competitividad le lleva a infligir más daño. Si es del sexo contrario, en cambio, el daño será menor."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rkssystem: {
    name: "Sistema Alfa",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  rockhead: {
    name: "Cabeza Roca",
    // Official flavor text: "No puede dañarse con sus propios movimientos."
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
    name: "Transportarrocas",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  roughskin: {
    name: "Piel Tosca",
    // Official flavor text: "Hiere con su piel áspera al rival que lo ataque con un movimiento de contacto."
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
    damage: "  \xA1{POKEMON} ha resultado herido!"
  },
  runaway: {
    name: "Fuga",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandforce: {
    name: "Poder Arena",
    // Official flavor text: "Potencia los movimientos de tipo Tierra, Acero y Roca durante las tormentas de arena."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandrush: {
    name: "\xCDmpetu Arena",
    // Official flavor text: "Aumenta su Velocidad durante las tormentas de arena."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandspit: {
    name: "Expulsarena",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      desc: null
      // NEEDS TRANSLATION
    }
  },
  sandstream: {
    name: "Chorro Arena",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sandveil: {
    name: "Velo Arena",
    // Official flavor text: "Aumenta su Evasión durante las tormentas de arena."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sapsipper: {
    name: "Herb\xEDvoro",
    // Official flavor text: "Neutraliza los movimientos de tipo Planta y sube su Ataque."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  schooling: {
    name: "Banco",
    // Official flavor text: "Forma bancos con sus congéneres cuando tiene muchos PS, lo cual le otorga más fuerza. Cuando le quedan pocos PS, el banco se dispersa."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "\xA1{POKEMON} ha formado un banco!",
    transformEnd: "\xA1El banco de {POKEMON} se ha dispersado!"
  },
  scrappy: {
    name: "Intr\xE9pido",
    // Official flavor text: "Puede alcanzar a Pokémon de tipo Fantasma con movimientos de tipo Normal o Lucha."
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
    name: "Antibarrera",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  seedsower: {
    name: "Disemillar",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  serenegrace: {
    name: "Dicha",
    // Official flavor text: "Aumenta la probabilidad de que los movimientos causen efectos secundarios."
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
    name: "Guardia Espectro",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shadowtag: {
    name: "Sombra Trampa",
    // Official flavor text: "Impide que el enemigo huya o sea cambiado por otro."
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
    name: "Cortante",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shedskin: {
    name: "Mudar",
    // Official flavor text: "Puede curar sus problemas de estado al mudar la piel."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sheerforce: {
    name: "Potencia Bruta",
    // Official flavor text: "Sube la potencia de sus movimientos en detrimento de los efectos secundarios, que se ven anulados."
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
    name: "Caparaz\xF3n",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  shielddust: {
    name: "Polvo Escudo",
    // Official flavor text: "El polvo de escamas que lo envuelve lo protege de los efectos secundarios de los ataques recibidos."
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
    name: "Escudo Limitado",
    // Official flavor text: "Rompe su coraza cuando sus PS se ven reducidos a la mitad y adopta una forma ofensiva."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "\xA1Escudo Limitado activado!",
    transformEnd: "Escudo Limitado desactivado."
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
    name: "Encadenado",
    // Official flavor text: "Ejecuta siempre los movimientos múltiples con el número máximo de golpes."
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
    name: "Inicio Lento",
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
    start: "  \xA1{POKEMON} no rinde todo lo que podr\xEDa!",
    end: "  \xA1{POKEMON} ahora va a a por todas!"
  },
  slushrush: {
    name: "Quitanieves",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  sniper: {
    name: "Francotirador",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  snowcloak: {
    name: "Manto N\xEDveo",
    // Official flavor text: "Sube la Evasión cuando graniza."
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
    name: "Nevada",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen8: {
      shortDesc: null
      // NEEDS TRANSLATION
    }
  },
  solarpower: {
    name: "Poder Solar",
    // Official flavor text: "Si hace sol, aumenta su Ataque Especial, pero pierde PS en cada turno."
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
    name: "Roca S\xF3lida",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soulheart: {
    name: "Cor\xE1nima",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  soundproof: {
    name: "Insonorizar",
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
    name: "Impulso",
    // Official flavor text: "Aumenta su Velocidad en cada turno."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  spicyspray: {
    name: "Salpicante",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stakeout: {
    name: "Vigilante",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stall: {
    name: "Rezagado",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stalwart: {
    name: "Ac\xE9rrimo",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stamina: {
    name: "Firmeza",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stancechange: {
    name: "Cambio T\xE1ctico",
    // Official flavor text: "Adopta la Forma Filo al lanzar un ataque, o bien la Forma Escudo si usa el movimiento Escudo Real."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen6: {
      desc: null
      // NEEDS TRANSLATION
    },
    transform: "\xA1Cambio a Forma Filo!",
    transformEnd: "\xA1Cambio a Forma Escudo!"
  },
  static: {
    name: "Electricidad Est\xE1tica",
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
    name: "Impasible",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steamengine: {
    name: "Combustible",
    // Official flavor text: "Si le alcanza un movimiento de tipo Fuego o Agua, le sube muchísimo la Velocidad."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelworker: {
    name: "Acero Templado",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  steelyspirit: {
    name: "Alma Acerada",
    // Official flavor text: "Potencia los movimientos de tipo Acero de los aliados."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  stench: {
    name: "Hedor",
    // Official flavor text: "Puede amedrentar al rival al atacarlo debido al mal olor que emana."
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
    name: "Viscosidad",
    // Official flavor text: "Los objetos se quedan pegados a su cuerpo, por lo que no pueden robárselos."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    gen4: {
      desc: null
      // NEEDS TRANSLATION
    },
    block: "  \xA1Es imposible robarle objetos a {POKEMON}!"
  },
  stormdrain: {
    name: "Colector",
    // Official flavor text: "Atrae y neutraliza los movimientos de tipo Agua, que además le suben el Ataque Especial."
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
    name: "Mand\xEDbula Fuerte",
    // Official flavor text: "Su robusta mandíbula le confiere una mordedura potente."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  sturdy: {
    name: "Robustez",
    // Official flavor text: "Evita que el rival pueda debilitarlo de un solo golpe cuando tiene los PS al máximo. También evita los movimientos fulminantes."
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
    activate: "  \xA1{POKEMON} ha aguantado el golpe!"
  },
  suctioncups: {
    name: "Ventosas",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  \xA1{POKEMON} se aferra al suelo gracias a la habilidad Ventosas!"
  },
  superluck: {
    name: "Afortunado",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  supersweetsyrup: {
    name: "N\xE9ctar Dulce",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1El n\xE9ctar de {POKEMON} desprende un aroma dulz\xF3n!"
  },
  supremeoverlord: {
    name: "General Supremo",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \xA1{POKEMON} recibe fuerzas de los aliados ca\xEDdos!"
  },
  surgesurfer: {
    name: "Cola Surf",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  swarm: {
    name: "Enjambre",
    // Official flavor text: "Potencia sus movimientos de tipo Bicho cuando le quedan pocos PS."
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
    name: "Velo Dulce",
    // Official flavor text: "No cae dormido y evita también que sus aliados se duerman."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  \xA1{POKEMON} no se ha dormido debido al efecto de Velo Dulce!"
  },
  swiftswim: {
    name: "Nado R\xE1pido",
    // Official flavor text: "Sube su Velocidad cuando llueve."
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
    name: "Espada Debacle",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} ha mermado la Defensa de los dem\xE1s Pok\xE9mon con Espada Debacle!"
  },
  symbiosis: {
    name: "Simbiosis",
    // Official flavor text: "Pasa su objeto a un aliado que ya haya utilizado el suyo."
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
    activate: "  \xA1{POKEMON} le ha dado {ITEM:definite:classified} a {TARGET}!"
  },
  synchronize: {
    name: "Sincron\xEDa",
    // Official flavor text: "Contagia el envenenamiento, las quemaduras o la parálisis al Pokémon que le cause ese estado."
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
    name: "Tablilla Debacle",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} ha mermado el Ataque de los dem\xE1s Pok\xE9mon con Tablilla Debacle!"
  },
  tangledfeet: {
    name: "Tumbos",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  tanglinghair: {
    name: "Rizos Rebeldes",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  technician: {
    name: "Experto",
    // Official flavor text: "Potencia sus movimientos más débiles."
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
    name: "Telepat\xEDa",
    shortDesc: null,
    // NEEDS TRANSLATION
    block: "  \xA1{POKEMON} no ha sufrido el ataque de su aliado!"
  },
  teraformzero: {
    name: "Teraformaci\xF3n 0",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  terashell: {
    name: "Teracaparaz\xF3n",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \xA1{POKEMON} ha hecho brillar su caparaz\xF3n y ha alterado su compatibilidad entre tipos!"
  },
  terashift: {
    name: "Teracambio",
    shortDesc: null,
    // NEEDS TRANSLATION
    transform: "\xA1{POKEMON} se ha transformado!"
  },
  teravolt: {
    name: "Terravoltaje",
    // Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
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
    start: "  \xA1{POKEMON} desprende un aura chisporroteante!"
  },
  thermalexchange: {
    name: "Termoconversi\xF3n",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  thickfat: {
    name: "Sebo",
    // Official flavor text: "Gracias a la gruesa capa de grasa que lo protege, reduce a la mitad el daño que recibe de ataques de tipo Fuego o Hielo."
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
    name: "Cromolente",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  torrent: {
    name: "Torrente",
    // Official flavor text: "Potencia sus movimientos de tipo Agua cuando le quedan pocos PS."
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
    name: "Garra Dura",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicboost: {
    name: "\xCDmpetu T\xF3xico",
    // Official flavor text: "Aumenta la potencia de sus ataques físicos cuando está envenenado."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicchain: {
    name: "Cadena T\xF3xica",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  toxicdebris: {
    name: "Capa T\xF3xica",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  trace: {
    name: "Calco",
    // Official flavor text: "Al entrar en combate copia la habilidad del rival."
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
    changeAbility: "  \xA1{POKEMON} rastre\xF3 {ABILITY} de {SOURCE}!"
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
    name: "Primer Auxilio",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  truant: {
    name: "Ausente",
    shortDesc: null,
    // NEEDS TRANSLATION
    gen3: {
      desc: null
      // NEEDS TRANSLATION
    },
    cant: "\xA1{POKEMON} est\xE1 holgazaneando!"
  },
  turboblaze: {
    name: "Turbollama",
    // Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
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
    start: "  \xA1{POKEMON} desprende un aura llameante!"
  },
  unaware: {
    name: "Ignorante",
    // Official flavor text: "Pasa por alto las mejoras en las características del rival al atacar."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unburden: {
    name: "Liviano",
    // Official flavor text: "Sube su Velocidad si usa o pierde el objeto que lleva."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  unnerve: {
    name: "Nerviosismo",
    // Official flavor text: "Pone nervioso al rival y le impide usar bayas."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{TEAM:capitalize} est\xE1 muy nervioso y no puede comer bayas!"
  },
  unseenfist: {
    name: "Pu\xF1o Invisible",
    shortDesc: null,
    // NEEDS TRANSLATION
    champions: {
      shortDesc: null
      // NEEDS TRANSLATION: not in PokeAPI
    }
  },
  vesselofruin: {
    name: "Caldero Debacle",
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "  \xA1{POKEMON} ha mermado el Ataque Especial de los dem\xE1s Pok\xE9mon con Caldero Debacle!"
  },
  victorystar: {
    name: "Tinovictoria",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  vitalspirit: {
    name: "Esp\xEDritu Vital",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  voltabsorb: {
    name: "Absorbe Electricidad",
    // Official flavor text: "Si le alcanza un movimiento de tipo Eléctrico, recupera PS en vez de sufrir daño."
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
    name: "Alma Errante",
    // Official flavor text: "Si le alcanza un movimiento de contacto, intercambia su habilidad con la del agresor."
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
    name: "Absorbe Agua",
    // Official flavor text: "Si le alcanza un movimiento de tipo Agua, recupera PS en vez de sufrir daño."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterbubble: {
    name: "Pompa",
    // Official flavor text: "Reduce el daño que le provocan los movimientos de tipo Fuego y es inmune a las quemaduras."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  watercompaction: {
    name: "Hidrorrefuerzo",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  waterveil: {
    name: "Velo Agua",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  weakarmor: {
    name: "Armadura Fr\xE1gil",
    // Official flavor text: "Al recibir daño de un ataque físico, le baja la Defensa, pero le sube mucho la Velocidad."
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
    name: "Cuerpo Horneado",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  whitesmoke: {
    name: "Humo Blanco",
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wimpout: {
    name: "Huida",
    // Official flavor text: "Se asusta y abandona el terreno de combate cuando sus PS se ven reducidos a la mitad."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  windpower: {
    name: "Energ\xEDa E\xF3lica",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null,
    // NEEDS TRANSLATION
    start: "#electromorphosis"
  },
  windrider: {
    name: "Surcavientos",
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  wonderguard: {
    name: "Superguarda",
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
    name: "Piel Milagro",
    // Official flavor text: "Presenta una mayor resistencia ante los movimientos de estado."
    desc: null,
    // NEEDS TRANSLATION
    shortDesc: null
    // NEEDS TRANSLATION
  },
  zenmode: {
    name: "Modo Daruma",
    // Official flavor text: "Cambia de forma si sus PS se ven reducidos a la mitad."
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
    transform: "\xA1Modo Daruma activado!",
    transformEnd: "Modo Daruma desactivado."
  },
  zerotohero: {
    name: "Cambio Heroico",
    shortDesc: null,
    // NEEDS TRANSLATION
    activate: "  \xA1{POKEMON} ha vuelto con una transformaci\xF3n heroica!"
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
