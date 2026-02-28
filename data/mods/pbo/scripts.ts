// [PBO] Custom mod for PBO battle engine.
// PBO has levels > 100, so we always include the level in the details string.
// Vanilla Showdown omits level when level === 100.

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	pokemon: {
		inherit: true,
		// [PBO] Always include level in details string.
		// Vanilla Showdown omits level when level === 100, but PBO has levels > 100.
		getUpdatedDetails(level?: number) {
			let name = this.species.name;
			if (['Greninja-Bond', 'Rockruff-Dusk'].includes(name)) name = this.species.baseSpecies;
			if (!level) level = this.level;
			return name + `, L${level}` +
				(this.gender === '' ? '' : `, ${this.gender}`) +
				(this.set.shiny ? ', shiny' : '');
		},
	},
};
