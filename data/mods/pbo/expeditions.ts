/**
 * PBO Expedition rulesets — activated via @@@rulesetId in the format string.
 * Each ruleset is independently testable; one file for side-by-side readability.
 */
export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
	pboexspectral: {
		effectType: 'Rule',
		name: 'PBO Expedition Spectral',
		desc: "Wild Pokemon gain evasion boost (accuracy penalty for moves targeting them).",
		onSwitchIn(pokemon) {
			// Attach volatile to wild (p2) Pokemon only
			if (pokemon.side === this.sides[1]) {
				pokemon.addVolatile('pboevasionboost');
			}
		},
	},
	pboevasionboost: {
		name: 'PBO Evasion Boost',
		effectType: 'Volatile',
		onStart(target) {
			this.add('-start', target, 'pboevasionboost', '[silent]');
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, source, target, move) {
			if (typeof accuracy !== 'number') return;
			// 75% accuracy multiplier (3072/4096) for moves targeting this Pokemon
			return this.chainModify([3072, 4096]);
		},
	},
};
