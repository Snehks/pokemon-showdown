"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conditions = void 0;
exports.Conditions = {
    frostbite: {
        name: 'frostbite',
        effectType: 'Status',
        onStart(target) {
            this.add('-start', target, 'Frostbite', '[silent]');
            this.add('-message', `${target.species.name} is inflicted with frostbite!`);
        },
        onSwitchIn(pokemon) {
            this.add('-start', pokemon, 'Frostbite', '[silent]');
        },
        onResidualOrder: 10,
        onResidual(pokemon) {
            this.damage(pokemon.baseMaxhp / 16);
        },
        onBasePower(basePower, source, target) {
            return basePower / 2;
        },
    },
};
