'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('[PBO] Asymmetric wild horde battles', () => {
	afterEach(() => {
		if (battle) battle.destroy();
	});

	it('should run a 1v2 wild horde with independent wild slots', () => {
		battle = common.createBattle({formatid: 'gen9pbowildhorde1v2'}, [[
			{species: 'Charizard', level: 100, ability: 'blaze', moves: ['dragonrage', 'seismictoss']},
		], [
			{species: 'Caterpie', level: 40, ability: 'shielddust', moves: ['splash']},
			{species: 'Pidgey', level: 40, ability: 'keeneye', moves: ['splash']},
		]]);

		assert.equal(battle.sides[0].active.length, 1);
		assert.equal(battle.sides[1].active.length, 2);

		const firstWild = battle.sides[1].active[0];
		const secondWild = battle.sides[1].active[1];

		battle.makeChoices('move 1 1', 'move 1, move 1');
		assert(firstWild.hp < firstWild.maxhp, 'The player should be able to target the first wild slot');
		assert(battle.log.some(line => line.startsWith('|move|p2a: Caterpie|Splash|')),
			'The first wild slot should be able to act');
		assert(battle.log.some(line => line.startsWith('|move|p2b: Pidgey|Splash|')),
			'The second wild slot should be able to act');

		battle.makeChoices('move 1 2', 'move 1, move 1');
		assert(secondWild.hp < secondWild.maxhp, 'The player should be able to target the second wild slot');
		assert(!battle.ended, 'The battle should continue while both wild slots are still alive');

		battle.makeChoices('move 2 1', 'move 1, move 1');
		assert.fainted(firstWild);
		assert(!battle.ended, 'The battle should continue while one wild slot is still alive');

		battle.makeChoices('move 2 2', 'pass, move 1');
		assert.fainted(secondWild);
		assert(battle.ended, 'The battle should end after both wild slots faint');
	});
});
