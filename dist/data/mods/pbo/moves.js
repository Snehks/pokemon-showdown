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
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
function canUseMaxEffect(source) {
  return !!source.volatiles["dynamax"] || source.ability === "dynahax";
}
const Moves = {
  // --- Max move secondary effect overrides for Dynahax bosses ---
  maxairstream: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.alliesAndSelf()) {
          this.boost({ spe: 1 }, pokemon);
        }
      }
    }
  },
  maxdarkness: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.foes()) {
          this.boost({ spd: -1 }, pokemon);
        }
      }
    }
  },
  maxflare: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        this.field.setWeather("sunnyday");
      }
    }
  },
  maxflutterby: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.foes()) {
          this.boost({ spa: -1 }, pokemon);
        }
      }
    }
  },
  maxgeyser: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        this.field.setWeather("raindance");
      }
    }
  },
  maxhailstorm: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        this.field.setWeather("hail");
      }
    }
  },
  maxknuckle: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.alliesAndSelf()) {
          this.boost({ atk: 1 }, pokemon);
        }
      }
    }
  },
  maxlightning: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        this.field.setTerrain("electricterrain");
      }
    }
  },
  maxmindstorm: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        this.field.setTerrain("psychicterrain");
      }
    }
  },
  maxooze: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.alliesAndSelf()) {
          this.boost({ spa: 1 }, pokemon);
        }
      }
    }
  },
  maxovergrowth: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        this.field.setTerrain("grassyterrain");
      }
    }
  },
  maxphantasm: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.foes()) {
          this.boost({ def: -1 }, pokemon);
        }
      }
    }
  },
  maxquake: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.alliesAndSelf()) {
          this.boost({ spd: 1 }, pokemon);
        }
      }
    }
  },
  maxrockfall: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        this.field.setWeather("sandstorm");
      }
    }
  },
  maxstarfall: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        this.field.setTerrain("mistyterrain");
      }
    }
  },
  maxsteelspike: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.alliesAndSelf()) {
          this.boost({ def: 1 }, pokemon);
        }
      }
    }
  },
  maxstrike: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.foes()) {
          this.boost({ spe: -1 }, pokemon);
        }
      }
    }
  },
  maxwyrmwind: {
    inherit: true,
    self: {
      onHit(source) {
        if (!canUseMaxEffect(source)) return;
        for (const pokemon of source.foes()) {
          this.boost({ atk: -1 }, pokemon);
        }
      }
    }
  },
  // --- Cosmetic event form overrides ---
  hyperspacefury: {
    inherit: true,
    onTry(source) {
      if (source.species.id.startsWith("hoopaunbound")) {
        return;
      }
      this.hint("Only a Pokemon whose form is Hoopa Unbound can use this move.");
      if (source.species.id.startsWith("hoopa")) {
        this.attrLastMove("[still]");
        this.add("-fail", source, "move: Hyperspace Fury", "[forme]");
        return null;
      }
      this.attrLastMove("[still]");
      this.add("-fail", source, "move: Hyperspace Fury");
      return null;
    }
  }
};
//# sourceMappingURL=moves.js.map
