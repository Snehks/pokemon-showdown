'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';

let battle;

describe('Dynahax [Gastro Acid / Drain / Flags]', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should Gastro Acid non-Dynahax foes on entry', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Gyarados', ability: 'intimidate', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		assert(battle.p1.active[0].volatiles['gastroacid'] !== undefined);
	});

	it('should not Gastro Acid a fellow Dynahax user', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Gyarados', ability: 'dynahax', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		assert.equal(battle.p1.active[0].volatiles['gastroacid'], undefined);
	});

	it('should suppress Iron Barbs via Gastro Acid', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Ferrothorn', ability: 'ironbarbs', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		assert(battle.p1.active[0].volatiles['gastroacid'] !== undefined);
	});

	it('should nullify Drain Punch healing', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['drainpunch'] }],
			[{ species: 'Blissey', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].hp = 1;
		battle.makeChoices('move drainpunch', 'move splash');
		assert.equal(battle.p1.active[0].hp, 1);
	});

	it('should nullify Giga Drain healing', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['gigadrain'] }],
			[{ species: 'Blissey', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].hp = 1;
		battle.makeChoices('move gigadrain', 'move splash');
		assert.equal(battle.p1.active[0].hp, 1);
	});

	it('should nullify Oblivion Wing healing', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['oblivionwing'] }],
			[{ species: 'Blissey', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].hp = 1;
		battle.makeChoices('move oblivionwing', 'move splash');
		assert.equal(battle.p1.active[0].hp, 1);
	});

	it('should have all required protection flags', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
			[{ species: 'Blastoise', ability: 'blaze', moves: ['splash'] }],
		]);
		const Dex = require('./../../../dist/sim/dex').Dex;
		const dynahax = Dex.mod('pbo').abilities.get('dynahax');
		assert.equal(dynahax.flags.failroleplay, 1);
		assert.equal(dynahax.flags.failskillswap, 1);
		assert.equal(dynahax.flags.cantsuppress, 1);
		assert.equal(dynahax.flags.notrace, 1);
		assert.equal(dynahax.flags.noentrain, 1);
		assert.equal(dynahax.flags.noreceiver, 1);
	});
});
