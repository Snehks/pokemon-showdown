"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moves = void 0;
exports.Moves = {
    volttackle: {
        inherit: true,
        onModifyMove(move, pokemon, target) {
            if (pokemon.baseSpecies.name === "Raichu-Mega-X") {
                move.self = { boosts: { atk: 1 } };
            }
        },
    },
};
