"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moves = void 0;
exports.Moves = {
    gastroacid: {
        inherit: true,
        condition: {
            // Ability suppression implemented in Pokemon.ignoringAbility() within sim/pokemon.js
            onStart(pokemon) {
                this.add('-endability', pokemon);
                this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon, pokemon, 'gastroacid');
                if (pokemon.m.innates) {
                    for (const innate of pokemon.m.innates) {
                        pokemon.removeVolatile("ability" + innate);
                    }
                }
            },
        },
    },
};
