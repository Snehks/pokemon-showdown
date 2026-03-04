'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';

let battle;

describe('Dynahax [Status Immunity]', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should be immune to burn', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['willowisp'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move willowisp', 'move splash');
		assert.equal(battle.p2.active[0].status, '');
	});

	it('should be immune to paralysis', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['thunderwave'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move thunderwave', 'move splash');
		assert.equal(battle.p2.active[0].status, '');
	});

	it('should be immune to toxic', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['toxic'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move toxic', 'move splash');
		assert.equal(battle.p2.active[0].status, '');
	});

	it('should be immune to sleep', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['spore'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move spore', 'move splash');
		assert.equal(battle.p2.active[0].status, '');
	});

	it('should be immune to freeze from moves', () => {
		battle = common.createBattle({ formatid: FORMAT, forceRandomChance: true }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['icebeam'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move icebeam', 'move splash');
		assert.equal(battle.p2.active[0].status, '');
	});

	it('should block Toxic Spikes poison on switch-in', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['toxicspikes', 'splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }, { species: 'Blastoise', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move toxicspikes', 'move splash');
		battle.makeChoices('move splash', 'switch 2');
		assert.equal(battle.p2.active[0].status, '');
	});
});
