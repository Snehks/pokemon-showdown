'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';

let battle;

describe('Dynahax [Mega Evolution]', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should keep Dynahax after the boss Mega Evolves', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Lapras', ability: 'waterabsorb', moves: ['splash'] }],
			[{ species: 'Swampert', ability: 'dynahax', item: 'swampertite', moves: ['splash'] }],
		]);
		battle.makeChoices('move splash', 'move splash mega');

		const boss = battle.p2.active[0];
		assert.species(boss, 'Swampert-Mega');
		assert.equal(boss.ability, 'dynahax');
		assert.equal(boss.baseAbility, 'dynahax');
	});

	it('should still block OHKO moves after the boss Mega Evolves', () => {
		battle = common.createBattle({ formatid: FORMAT, forceRandomChance: true }, [
			[{ species: 'Lapras', ability: 'waterabsorb', moves: ['sheercold'] }],
			[{ species: 'Venusaur', ability: 'dynahax', item: 'venusaurite', moves: ['splash'] }],
		]);
		battle.makeChoices('move sheercold', 'move splash mega');

		const boss = battle.p2.active[0];
		assert.species(boss, 'Venusaur-Mega');
		assert.false.fainted(boss);
	});

	it('should let OHKO moves through once a non-Dynahax Mega has evolved', () => {
		battle = common.createBattle({ formatid: FORMAT, forceRandomChance: true }, [
			[{ species: 'Lapras', ability: 'waterabsorb', moves: ['sheercold'] }],
			[{ species: 'Venusaur', ability: 'overgrow', item: 'venusaurite', moves: ['splash'] }],
		]);
		battle.makeChoices('move sheercold', 'move splash mega');

		assert.fainted(battle.p2.active[0]);
	});

	it('should give a non-Dynahax Pokemon its Mega ability as usual', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Lapras', ability: 'waterabsorb', moves: ['splash'] }],
			[{ species: 'Swampert', ability: 'torrent', item: 'swampertite', moves: ['splash'] }],
		]);
		battle.makeChoices('move splash', 'move splash mega');

		assert.equal(battle.p2.active[0].ability, 'swiftswim');
	});
});
