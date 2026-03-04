'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('[PBO] EV Clamping', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should allow extreme HP EVs in PBO NPC National Dex format', () => {
		battle = common.createBattle({ formatid: 'gen9pbonpcnationaldex' }, [
			[{ species: 'Charizard', ability: 'Blaze', moves: ['splash'], evs: { hp: 12000000, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 } }],
			[{ species: 'Charizard', ability: 'Blaze', moves: ['splash'] }],
		]);
		const pokemon = battle.p1.active[0];
		assert.equal(pokemon.set.evs.hp, 12000000, 'HP EV should not be clamped in NPC format');
		assert(pokemon.maxhp > 1000, 'maxhp should reflect extreme EVs');
	});

	it('should clamp EVs to 255 in PBO Standard Battle format', () => {
		battle = common.createBattle({ formatid: 'gen9pbostandardbattle' }, [
			[{ species: 'Charizard', ability: 'Blaze', moves: ['splash'], evs: { hp: 12000000, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 } }],
			[{ species: 'Charizard', ability: 'Blaze', moves: ['splash'] }],
		]);
		const pokemon = battle.p1.active[0];
		assert.equal(pokemon.set.evs.hp, 255, 'HP EV should be clamped to 255 in standard format');
	});

	it('should allow extreme EVs on non-HP stats in NPC format', () => {
		battle = common.createBattle({ formatid: 'gen9pbonpcnationaldex' }, [
			[{ species: 'Charizard', ability: 'Blaze', moves: ['splash'], evs: { hp: 0, atk: 5000000, def: 0, spa: 0, spd: 0, spe: 0 } }],
			[{ species: 'Charizard', ability: 'Blaze', moves: ['splash'] }],
		]);
		const pokemon = battle.p1.active[0];
		assert.equal(pokemon.set.evs.atk, 5000000, 'Atk EV should not be clamped in NPC format');
	});

	it('should still clamp IVs to 31 in NPC format', () => {
		battle = common.createBattle({ formatid: 'gen9pbonpcnationaldex' }, [
			[{ species: 'Charizard', ability: 'Blaze', moves: ['splash'], ivs: { hp: 999, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 } }],
			[{ species: 'Charizard', ability: 'Blaze', moves: ['splash'] }],
		]);
		const pokemon = battle.p1.active[0];
		assert.equal(pokemon.set.ivs.hp, 31, 'IVs should still be clamped to 31');
	});
});
