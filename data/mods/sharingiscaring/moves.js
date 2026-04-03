"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moves = void 0;
exports.Moves = {
    poltergeist: {
        inherit: true,
        onTry(source, target) {
            return !!target.item || Object.keys(target.volatiles).some(volatile => volatile.startsWith('item:'));
        },
    },
};
