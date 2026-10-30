'use strict';

const assert = require('./../../assert');
const common = require('./../../common');
const { Dex } = require('./../../../dist/sim');
const { PBO_EVENT_FORMS } = require('./../../../dist/data/mods/pbo/scripts');

let battle;

describe('Eviolite', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it(`should multiply the defenses of a Pokemon that can evolve by 1.5`, () => {
		battle = common.createBattle([[
			{ species: 'Omanyte', ability: 'shellarmor', item: 'eviolite', moves: ['rest'] },
		], [
			{ species: 'Cherrim', moves: ['seedbomb', 'megadrain'] },
		]]);
		battle.makeChoices();
		assert.false.fainted(battle.p1.active[0]);
		battle.makeChoices('auto', 'move megadrain');
		assert.false.fainted(battle.p1.active[0]);
	});

	it(`should not multiply the defenses of a Pokemon that cannot evolve by 1.5`, () => {
		battle = common.createBattle([[
			{ species: 'Omastar', ability: 'shellarmor', item: 'eviolite', moves: ['rest'] },
			{ species: 'Omastar', ability: 'shellarmor', item: 'eviolite', moves: ['rest'] },
		], [
			{ species: 'Sceptile', item: 'meadowplate', moves: ['leafblade', 'megadrain'] },
		]]);
		battle.makeChoices();
		assert.fainted(battle.p1.active[0]);
		battle.makeChoices(); // switch in the second Omastar
		battle.makeChoices('auto', 'move megadrain');
		assert.fainted(battle.p1.active[0]);
	});

	it(`should multiply the defenses of a National Dex Pokemon that can evolve by 1.5`, () => {
		battle = common.createBattle([[
			{ species: 'Geodude', ability: 'shellarmor', item: 'eviolite', moves: ['rest'] },
		], [
			{ species: 'Roserade', moves: ['seedbomb', 'absorb'] },
		]]);
		battle.makeChoices();
		assert.false.fainted(battle.p1.active[0]);
		battle.makeChoices('auto', 'move absorb');
		assert.false.fainted(battle.p1.active[0]);
	});

	describe('[PBO] Chansey-H', () => {
		function createDefenseBattle(species, item, move = 'closecombat') {
			return common.createBattle({ formatid: 'gen9pbopvpbattlenopreview', seed: [1, 2, 3, 4] }, [
				[{
					species, item, ability: 'Natural Cure', moves: ['splash'],
					nature: 'Bold', level: 100, evs: { hp: 252, def: 252, spd: 4 },
				}],
				[{
					species: 'Zeraora', ability: 'Volt Absorb', moves: [move],
					nature: 'Jolly', level: 100, evs: { atk: 252, spe: 252, hp: 4 },
				}],
			]);
		}

		for (const [stat, expected] of [['def', 178], ['spd', 370]]) {
			it(`should apply Eviolite to Chansey-H ${stat}`, () => {
				battle = createDefenseBattle('Chansey-H', 'Eviolite');
				const pokemon = battle.p1.active[0];
				console.log(JSON.stringify({
					species: pokemon.species.id, item: pokemon.item,
					stat, raw: pokemon.storedStats[stat], effective: pokemon.getStat(stat),
				}));
				assert.equal(pokemon.getStat(stat), expected);
			});
		}

		for (const [species, item, defense, specialDefense] of [
			['Chansey-H', '', 119, 247],
			['Chansey', 'Eviolite', 178, 370],
			['Blissey', 'Eviolite', 130, 307],
		]) {
			it(`should preserve defenses for ${species} holding ${item || 'no item'}`, () => {
				battle = createDefenseBattle(species, item);
				assert.equal(battle.p1.active[0].getStat('def'), defense);
				assert.equal(battle.p1.active[0].getStat('spd'), specialDefense);
			});
		}

		for (const move of ['closecombat', 'thunderbolt']) {
			it(`should reduce ${move} damage to Chansey-H just as it does for Chansey`, () => {
				const damage = [];
				for (const [species, item] of [
					['Chansey-H', ''],
					['Chansey-H', 'Eviolite'],
					['Chansey', 'Eviolite'],
				]) {
					if (damage.length) battle.destroy();
					battle = createDefenseBattle(species, item, move);
					const pokemon = battle.p1.active[0];
					const hp = pokemon.hp;
					battle.makeChoices('move 1', 'move 1');
					damage.push(hp - pokemon.hp);
				}
				console.log(JSON.stringify({ move, unheldChanseyH: damage[0], heldChanseyH: damage[1], heldChansey: damage[2] }));
				assert.equal(damage[1], damage[2]);
				assert(damage[1] < damage[0]);
			});
		}

		it(`should suppress Chansey-H Eviolite boosts during Magic Room`, () => {
			battle = createDefenseBattle('Chansey-H', 'Eviolite');
			const pokemon = battle.p1.active[0];
			battle.field.addPseudoWeather('magicroom', pokemon);
			assert.equal(pokemon.getStat('def'), 119);
			assert.equal(pokemon.getStat('spd'), 247);
			battle.field.removePseudoWeather('magicroom');
			assert.equal(pokemon.getStat('def'), 178);
			assert.equal(pokemon.getStat('spd'), 370);
		});
	});

	describe('[PBO] event forms', () => {
		// [def, spd] of each [species, item], each in its own battle
		function defensesOf(...sets) {
			const defenses = [];
			for (const [species, item] of sets) {
				if (defenses.length) battle.destroy();
				battle = common.createBattle({ formatid: 'gen9pbopvpbattlenopreview' }, [
					[{ species, item, moves: ['splash'], nature: 'Bold', level: 100, evs: { hp: 252, def: 252, spd: 4 } }],
					[{ species: 'Zeraora', moves: ['splash'] }],
				]);
				const pokemon = battle.p1.active[0];
				defenses.push([pokemon.getStat('def'), pokemon.getStat('spd')]);
			}
			return defenses;
		}

		for (const [form, base] of [['Bisharp-H5', 'Bisharp'], ['Chansey-H5', 'Chansey'], ['Ursaring-H5', 'Ursaring']]) {
			it(`should apply Eviolite to ${form} just as it does for ${base}`, () => {
				const [unheld, held, baseHeld] = defensesOf([form, ''], [form, 'Eviolite'], [base, 'Eviolite']);
				assert.deepEqual(held, unheld.map(stat => Math.floor(stat * 1.5)));
				assert.deepEqual(held, baseHeld);
			});
		}

		for (const form of ['Kingambit-H5', 'Blissey-H5', 'Ursaluna-H5']) {
			it(`should not apply Eviolite to the fully evolved ${form}`, () => {
				const [unheld, held] = defensesOf([form, ''], [form, 'Eviolite']);
				assert.deepEqual(held, unheld);
			});
		}

		it(`should give every event form the evolution status of its base form`, () => {
			const dex = Dex.mod('pbo');
			let evolvable = 0;
			for (const [eventId, baseId] of PBO_EVENT_FORMS) {
				const form = dex.species.get(eventId);
				const base = dex.species.get(baseId);
				assert(form.exists, `${eventId} is not registered`);
				assert.equal(form.nfe, base.nfe, `${form.name} should evolve exactly when ${base.name} does`);
				if (form.nfe) evolvable++;
			}
			// 76 when Eviolite came to event forms (Buneary-E, Bisharp-H5, Chansey-H5, Ursaring-H5...)
			assert(evolvable >= 76, `only ${evolvable} event forms can evolve`);
		});
	});
});
