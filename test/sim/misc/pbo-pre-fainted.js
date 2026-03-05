'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('[PBO] Pre-Fainted Pokemon', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should exclude pre-fainted Pokemon from pokemonLeft count', () => {
		battle = common.createBattle({ formatid: 'gen9pbostandardbattle' }, [
			[
				{ species: 'Charizard', ability: 'Blaze', moves: ['splash'], currentHp: 1 },
				{ species: 'Pikachu', ability: 'Static', moves: ['splash'], currentHp: 0 },
			],
			[{ species: 'Blastoise', ability: 'Torrent', moves: ['surf'] }],
		]);

		// Pikachu starts fainted — pokemonLeft should be 1, not 2
		assert.equal(battle.p1.pokemonLeft, 1,
			'pokemonLeft should exclude pre-fainted Pikachu');
		assert(battle.p1.pokemon[1].fainted, 'Pikachu should be fainted');
		assert.equal(battle.p1.pokemon[1].hp, 0, 'Pikachu HP should be 0');
	});

	it('should end the battle when only alive Pokemon faints', () => {
		battle = common.createBattle({ formatid: 'gen9pbostandardbattle' }, [
			[
				{ species: 'Charizard', ability: 'Blaze', moves: ['splash'], currentHp: 1 },
				{ species: 'Pikachu', ability: 'Static', moves: ['splash'], currentHp: 0 },
			],
			[{ species: 'Blastoise', ability: 'Torrent', moves: ['surf'] }],
		]);

		battle.makeChoices('move 1', 'move 1');

		// Charizard at 1 HP should be KO'd by Surf — battle must end
		assert(battle.ended, 'Battle should end when only alive Pokemon faints');
		assert.equal(battle.winner, 'Player 2',
			'Player 2 should win when all of Player 1 alive Pokemon faint');
	});

	it('should not affect teams with no pre-fainted Pokemon', () => {
		battle = common.createBattle({ formatid: 'gen9pbostandardbattle' }, [
			[
				{ species: 'Charizard', ability: 'Blaze', moves: ['splash'] },
				{ species: 'Pikachu', ability: 'Static', moves: ['splash'] },
			],
			[{ species: 'Blastoise', ability: 'Torrent', moves: ['splash'] }],
		]);

		// Both Pokemon healthy — pokemonLeft should be 2
		assert.equal(battle.p1.pokemonLeft, 2,
			'pokemonLeft should be full team size when no Pokemon are pre-fainted');
	});
});
