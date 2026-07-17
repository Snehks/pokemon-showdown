'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

const WILD_SPECIES = ['Caterpie', 'Pidgey', 'Rattata', 'Zubat', 'Weedle'];

function createCoopHordeBattle(enemyCount) {
	return common.createBattle({formatid: `gen9pbocoopwild2v${enemyCount}`}, [[
		{species: 'Chansey', level: 100, ability: 'naturalcure', moves: ['splash']},
		{species: 'Blissey', level: 100, ability: 'naturalcure', moves: ['splash']},
	], WILD_SPECIES.slice(0, enemyCount).map(species => (
		{species, level: 40, ability: 'runaway', moves: ['dragonrage']}
	))]);
}

function targetedWildChoices(enemyCount, target) {
	return Array(enemyCount).fill(`move 1 ${target}`).join(', ');
}

function createHordeBattle(enemyCount) {
	return common.createBattle({formatid: `gen9pbowildhorde1v${enemyCount}`}, [[
		{species: 'Charizard', level: 100, ability: 'blaze', moves: ['dragonrage', 'seismictoss', 'growl']},
	], WILD_SPECIES.slice(0, enemyCount).map(species => (
		{species, level: 40, ability: 'runaway', moves: ['splash']}
	))]);
}

function wildChoices(enemyCount, faintedSlots = 0) {
	const choices = [];
	for (let i = 0; i < enemyCount; i++) {
		choices.push(i < faintedSlots ? 'pass' : 'move 1');
	}
	return choices.join(', ');
}

describe('[PBO] Asymmetric wild horde battles', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
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

	it('should reject invalid horde target locations without throwing engine errors', () => {
		battle = common.createBattle({formatid: 'gen9pbowildhorde1v2'}, [[
			{species: 'Charizard', level: 100, ability: 'blaze', moves: ['dragonrage']},
		], [
			{species: 'Caterpie', level: 40, ability: 'shielddust', moves: ['splash']},
			{species: 'Pidgey', level: 40, ability: 'keeneye', moves: ['splash']},
		]]);

		assert.cantTarget(() => battle.choose('p1', 'move 1 3'), 'dragon rage');
	});

	for (const enemyCount of [3, 4, 5]) {
		it(`should run a 1v${enemyCount} wild horde with legal targets, spread moves, and final-slot win`, () => {
			battle = createHordeBattle(enemyCount);

			assert.equal(battle.sides[0].active.length, 1);
			assert.equal(battle.sides[1].active.length, enemyCount);

			const wildSlots = battle.sides[1].active.slice();
			for (let target = 1; target <= enemyCount; target++) {
				const wild = wildSlots[target - 1];
				const previousHp = wild.hp;
				battle.makeChoices(`move 1 ${target}`, wildChoices(enemyCount));
				assert(wild.hp < previousHp, `The player should be able to target wild slot ${target}`);
			}

			battle.makeChoices('move 3', wildChoices(enemyCount));
			for (let target = 1; target <= enemyCount; target++) {
				assert.statStage(wildSlots[target - 1], 'atk', -1, `Growl should affect wild slot ${target}`);
			}

			assert.cantTarget(
				() => battle.choose('p1', `move 2 ${enemyCount + 1}`),
				'seismic toss',
				`Expected target slot ${enemyCount + 1} to be invalid in 1v${enemyCount}`
			);

			for (let target = 1; target <= enemyCount; target++) {
				battle.makeChoices(`move 2 ${target}`, wildChoices(enemyCount, target - 1));
				assert.fainted(wildSlots[target - 1], `Wild slot ${target} should faint`);
				assert.equal(
					battle.ended,
					target === enemyCount,
					`The battle should ${target === enemyCount ? 'end' : 'continue'} after ${target} wild fainted`
				);
			}
		});
	}

	for (const enemyCount of [1, 3, 4, 5]) {
		it(`should run a 2v${enemyCount} co-op horde where every wild can target either human slot`, () => {
			battle = createCoopHordeBattle(enemyCount);

			assert.equal(battle.sides[0].active.length, 2);
			assert.equal(battle.sides[1].active.length, enemyCount);

			const firstHuman = battle.sides[0].active[0];
			const secondHuman = battle.sides[0].active[1];
			const firstHp = firstHuman.hp;
			const secondHp = secondHuman.hp;

			battle.makeChoices('move 1, move 1', targetedWildChoices(enemyCount, 1));
			assert(firstHuman.hp < firstHp, 'Every wild should be able to target human slot one');
			assert.equal(secondHuman.hp, secondHp, 'Human slot two should not be hit by slot-one choices');

			const firstHpAfterTurnOne = firstHuman.hp;
			battle.makeChoices('move 1, move 1', targetedWildChoices(enemyCount, 2));
			assert.equal(firstHuman.hp, firstHpAfterTurnOne, 'Human slot one should not be hit by slot-two choices');
			assert(secondHuman.hp < secondHp, 'Every wild should be able to target human slot two');

			for (const species of WILD_SPECIES.slice(0, enemyCount)) {
				assert(battle.log.some(line => line.startsWith(`|move|p2`) && line.includes(`: ${species}|Dragon Rage|`)),
					`${species} should receive and execute an action`);
			}
		});
	}

	it('should allow a normal move to target the co-op ally in a 2v3 horde', () => {
		battle = common.createBattle({formatid: 'gen9pbocoopwild2v3'}, [[
			{species: 'Machamp', level: 100, ability: 'noguard', moves: ['crunch']},
			{species: 'Blissey', level: 100, ability: 'naturalcure', moves: ['splash']},
		], WILD_SPECIES.slice(0, 3).map(species => (
			{species, level: 40, ability: 'runaway', moves: ['splash']}
		))]);

		const ally = battle.sides[0].active[1];
		const allyHp = ally.hp;

		battle.makeChoices('move 1 -2, move 1', 'move 1, move 1, move 1');

		assert(ally.hp < allyHp, 'The selected co-op ally should take damage');
		assert(battle.log.includes('|move|p1a: Machamp|Crunch|p1b: Blissey'),
			'The ally-targeted move should resolve instead of rejecting the turn');
	});

	it('should expose the co-op NPC boss format as 2v1', () => {
		const format = Dex.formats.get('gen9pbocoopnpc2v1');
		assert.equal(format.gameType, 'horde');
		assert.deepEqual(format.activeSlotsPerSide, [2, 1]);
	});
});
