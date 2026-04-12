export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	nosturdywild: {
		effectType: 'Rule',
		name: 'No Sturdy Wild',
		desc: "Sturdy is suppressed for wild Pokemon (p2).",
		onSwitchIn(pokemon) {
			if (pokemon.side === this.sides[1] && pokemon.ability === 'sturdy') {
				pokemon.ability = '' as ID;
			}
		},
	},

	// ── Expedition rulesets ─────────────────────────────────────────────
	// Activated via @@@rulesetId in the format string.
	// Each rule attaches a volatile or modifies battle state for PBO expeditions.

	pboexspectral: {
		effectType: 'Rule',
		name: 'PBO EX Spectral',
		desc: "Wild Pokemon gain evasion boost (accuracy penalty for moves targeting them).",
		onSwitchIn(pokemon) {
			if (pokemon.side === this.sides[1]) {
				pokemon.addVolatile('pboevasionboost');
			}
		},
	},
	pboevasionboost: {
		name: 'PBO Evasion Boost',
		effectType: 'Volatile',
		onStart(target) {
			this.add('-start', target, 'pboevasionboost');
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, source, target, move) {
			if (typeof accuracy !== 'number') return;
			// 75% accuracy multiplier (3072/4096) for moves targeting this Pokemon
			return this.chainModify([3072, 4096]);
		},
	},
};
