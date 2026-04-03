"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scripts = void 0;
exports.Scripts = {
    inherit: 'gen3',
    gen: 3,
    checkWin(faintData) {
        if (this.sides.every(side => !side.pokemonLeft)) {
            this.win(faintData ? faintData.target.side : null);
            return true;
        }
        for (const side of this.sides) {
            if (!side.foePokemonLeft()) {
                this.win(side);
                return true;
            }
        }
    },
};
