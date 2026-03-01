// [PBO] Custom mod for PBO battle engine.
// PBO has levels > 100, so we always include the level in the details string.
// Vanilla Showdown omits level when level === 100.

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	// [PBO] Bag item scripts for useitem command
	bagItems: {
		potion: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				const amount = pokemon.heal(parseInt(data[0]));
				if (amount) {
					battle.add('-heal', pokemon, pokemon.getHealth, '[from] bagitem: ' + itemId);
				}
			},
		},
		revive: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				const healthRatio = parseFloat(data[0]);
				if (pokemon.fainted) {
					pokemon.fainted = false;
					pokemon.side.pokemonLeft++;
					pokemon.faintQueued = false;
					pokemon.subFainted = false;
					pokemon.hp = 1;
					pokemon.cureStatus(true);
					pokemon.sethp(Math.floor(healthRatio * pokemon.maxhp));
					battle.add('-heal', pokemon, pokemon.getHealth, '[from] bagitem: ' + itemId);
				}
			},
		},
		full_restore: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				const amount = pokemon.heal(pokemon.maxhp);
				if (amount) {
					battle.add('-heal', pokemon, pokemon.getHealth, '[from] bagitem: ' + itemId);
				}
				if (pokemon.status) {
					pokemon.cureStatus(true);
				}
				if (pokemon.volatiles['confusion']) {
					pokemon.removeVolatile('confusion');
				}
			},
		},
		cure_status: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				let shouldCureNonvolatile = false;
				const curedVolatiles: string[] = [];
				for (const status of data) {
					if (pokemon.status === status) {
						shouldCureNonvolatile = true;
					} else if (pokemon.volatiles[status]) {
						curedVolatiles.push(status);
					}
				}
				if (shouldCureNonvolatile) {
					pokemon.cureStatus(true);
				}
				for (const volatile of curedVolatiles) {
					pokemon.removeVolatile(volatile);
				}
			},
		},
		ether: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				const moveId = data[0];
				const amount = data[1] ? parseInt(data[1]) : 999;
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === moveId) {
						moveSlot.pp = Math.min(moveSlot.pp + amount, moveSlot.maxpp);
						break;
					}
				}
			},
		},
		elixir: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				const amount = data[0] ? parseInt(data[0]) : 999;
				for (const moveSlot of pokemon.moveSlots) {
					moveSlot.pp = Math.min(moveSlot.pp + amount, moveSlot.maxpp);
				}
			},
		},
		x_stat: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				const stat = data[0];
				const boosts: any = {};
				boosts[stat] = parseInt(data[1]);
				battle.boost(boosts, pokemon, null, {effectType: 'BagItem', name: itemId});
			},
		},
		dire_hit: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				pokemon.addVolatile('focusenergy');
			},
		},
		guard_spec: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				pokemon.side.addSideCondition('mist');
			},
		},
		clear_boost: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				pokemon.clearBoosts();
				battle.add('-clearallboost', pokemon, '[from] bagitem: ' + itemId);
			},
		},
		potion_by_portion: {
			use(battle: any, pokemon: any, itemId: string, data: string[]) {
				const ratio = parseFloat(data[0]);
				const healAmount = Math.floor(ratio * pokemon.maxhp);
				const amount = pokemon.heal(healAmount);
				if (amount) {
					battle.add('-heal', pokemon, pokemon.getHealth, '[from] bagitem: ' + itemId);
				}
				if (data[1] === 'true') {
					pokemon.addVolatile('confusion');
				}
			},
		},
	},
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
