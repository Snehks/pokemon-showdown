'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';

let battle;

describe('Dynahax', () => {
	afterEach(() => {
		battle.destroy();
	});

	// ── Non-move damage immunity (onDamage) ──

	it('should block sandstorm damage', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Hippowdon', ability: 'sandstream', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move splash', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block hail damage', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Abomasnow', ability: 'snowwarning', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move splash', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block Stealth Rock damage on switch-in', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['stealthrock', 'splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }, { species: 'Blastoise', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move stealthrock', 'move splash');
		battle.makeChoices('move splash', 'switch 2');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block Spikes damage on switch-in', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['spikes', 'splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }, { species: 'Blastoise', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move spikes', 'move splash');
		battle.makeChoices('move splash', 'switch 2');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block Life Orb recoil', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', item: 'lifeorb', moves: ['flamethrower'] }],
		]);
		battle.makeChoices('move splash', 'move flamethrower');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block Leech Seed sap damage', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['leechseed', 'splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move leechseed', 'move splash');
		battle.makeChoices('move splash', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block burn residual damage', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p2.active[0].setStatus('brn');
		battle.makeChoices('move splash', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block poison residual damage', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p2.active[0].setStatus('psn');
		battle.makeChoices('move splash', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should still take damage from regular moves', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['tackle'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move tackle', 'move splash');
		assert.false.fullHP(battle.p2.active[0]);
	});
});
