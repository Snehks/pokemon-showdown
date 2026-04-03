"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conditions = void 0;
exports.Conditions = {
    invulnerability: {
        // Dig/Fly
        name: 'invulnerability',
        onInvulnerability(target, source, move) {
            if (target === source)
                return true;
            if ((move.id === 'swift' && target.volatiles['substitute']) || move.id === 'transform')
                return true;
            this.add('-message', 'The foe ' + target.name + ' can\'t be hit while invulnerable!');
            return false;
        },
    },
};
