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
};
