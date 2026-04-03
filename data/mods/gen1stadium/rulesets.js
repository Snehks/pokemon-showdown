"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rulesets = void 0;
exports.Rulesets = {
    standardag: {
        inherit: true,
        ruleset: [
            'Obtainable', 'Exact HP Mod', 'Cancel Mod',
        ],
    },
    standard: {
        effectType: 'ValidatorRule',
        name: 'Standard',
        ruleset: [
            'Standard AG',
            'Stadium Sleep Clause', 'Freeze Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause',
        ],
    },
};
