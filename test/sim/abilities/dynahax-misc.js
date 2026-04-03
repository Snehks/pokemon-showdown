'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';

let battle;

describe('Dynahax [Ability Coexistence / Item Theft / Drain / Flags]', () => {
	afterEach(() => {
		battle.destroy();
	});

	// ── Player abilities should work normally vs Dynahax ──

	it('should NOT suppress foe abilities (Drought activates normally)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Torkoal', ability: 'drought', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		assert(battle.field.isWeather('sunnyday'));
	});

	it('should NOT suppress foe abilities (Poison Heal heals normally)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Gliscor', ability: 'poisonheal', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('tox');
		battle.p1.active[0].hp = battle.p1.active[0].maxhp - 100;
		const hpBefore = battle.p1.active[0].hp;
		battle.makeChoices('move splash', 'move splash');
		assert(battle.p1.active[0].hp > hpBefore);
	});

	it('should NOT suppress foe abilities (Intimidate lowers Dynahax attack)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Gyarados', ability: 'intimidate', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		assert.equal(battle.p2.active[0].boosts.atk, -1);
	});

	// ── Iron Barbs / Rough Skin blocked by onDamage (non-move), not Gastro Acid ──

	it('should block Iron Barbs recoil damage to Dynahax', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Ferrothorn', ability: 'ironbarbs', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['firefang'] }],
		]);
		battle.makeChoices('move splash', 'move firefang');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block Rough Skin recoil damage to Dynahax', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Garchomp', ability: 'roughskin', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['dragonclaw'] }],
		]);
		battle.makeChoices('move splash', 'move dragonclaw');
		assert.fullHP(battle.p2.active[0]);
	});

	// ── Item theft protection (Magician, Pickpocket) ──

	it('should block Magician from stealing Dynahax item', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Delphox', ability: 'magician', moves: ['psyshock'] }],
			[{ species: 'Blissey', ability: 'dynahax', item: 'leftovers', moves: ['splash'] }],
		]);
		battle.makeChoices('move psyshock', 'move splash');
		assert.equal(battle.p2.active[0].item, 'leftovers');
	});

	it('should block Pickpocket from stealing Dynahax item', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Weavile', ability: 'pickpocket', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', item: 'leftovers', moves: ['dragonclaw'] }],
		]);
		battle.makeChoices('move splash', 'move dragonclaw');
		assert.equal(battle.p2.active[0].item, 'leftovers');
	});

	// ── Drain nullification ──

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

	// ── Protection flags ──

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
