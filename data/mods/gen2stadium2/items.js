"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
// Gen 2 Stadium fixes Dragon Fang and Dragon Scale having the wrong effects.
exports.Items = {
    dragonfang: {
        inherit: true,
        onModifyDamage(damage, source, target, move) {
            if (move?.type === 'Dragon') {
                return damage * 1.1;
            }
        },
    },
    dragonscale: {
        inherit: true,
        onModifyDamage() { },
    },
};
