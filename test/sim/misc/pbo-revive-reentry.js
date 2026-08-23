'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('[PBO] Revive bag item re-entry', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it('should return an in-slot revived Pokemon to action via instaswitch', () => {
		// Doubles with NO bench on either side: when p1b self-faints, no force
		// switch is possible anywhere, so the corpse keeps its active slot.
		battle = common.createBattle({formatid: 'gen9pbowilddoublesbattle'}, [[
			{species: 'Blissey', level: 100, ability: 'naturalcure', moves: ['splash']},
			{species: 'Gardevoir', level: 100, ability: 'synchronize', moves: ['memento', 'tackle']},
		], [
			{species: 'Caterpie', level: 5, ability: 'runaway', moves: ['splash']},
			{species: 'Weedle', level: 5, ability: 'runaway', moves: ['splash']},
		]]);

		const gardevoir = battle.p1.active[1];

		// Turn 1: p1b Mementos itself into an in-slot corpse.
		battle.makeChoices('move 1, move 1 1', 'move 1, move 1');
		assert.equal(gardevoir.hp, 0, 'Memento must faint its user');
		assert.equal(gardevoir.isActive, false, 'faintMessages must clear isActive');
		assert.equal(battle.p1.pokemonLeft, 1);

		// Turn 2: p1a revives the in-slot corpse.
		battle.makeChoices('useitem p1b revive battle-9-item-1 0.5, pass', 'move 1, move 1');

		assert(gardevoir.hp > 0, 'Revive must restore HP');
		assert.equal(gardevoir.isActive, true,
			'an in-slot revived Pokemon must formally re-enter its slot (instaswitch)');
		assert.equal(battle.p1.pokemonLeft, 2);
		assert(battle.log.some(line => line.startsWith('|switch|p1b: Gardevoir|')),
			'the re-entry must emit a switch protocol line so clients re-render the slot');

		// Turn 3: the revived Pokemon must actually be able to act. Before the fix
		// it was a "zombie" — choices were accepted but runAction skipped its move.
		const caterpie = battle.p2.active[0];
		const hpBefore = caterpie.hp;
		battle.makeChoices('move 1, move 2 1', 'move 1, move 1');
		assert(caterpie.hp < hpBefore,
			'the revived Pokemon\'s move must execute (zombie regression)');
	});

	it('should not instaswitch a revived benched Pokemon', () => {
		// p1 has a pre-fainted bench mon (PBO pre-battle state). Reviving it must
		// leave it on the bench — re-entry is the player's choice via a normal
		// switch, not an automatic instaswitch.
		battle = common.createBattle({formatid: 'gen9pbowilddoublesbattle'}, [[
			{species: 'Blissey', level: 100, ability: 'naturalcure', moves: ['splash']},
			{species: 'Chansey', level: 100, ability: 'naturalcure', moves: ['splash']},
			{species: 'Gardevoir', level: 100, ability: 'synchronize', moves: ['tackle'], currentHp: 0, status: 'fnt'},
		], [
			{species: 'Caterpie', level: 5, ability: 'runaway', moves: ['splash']},
			{species: 'Weedle', level: 5, ability: 'runaway', moves: ['splash']},
		]]);

		const gardevoir = battle.p1.pokemon[2];
		assert.equal(gardevoir.fainted, true, 'bench mon must start fainted');

		battle.makeChoices('useitem p1:2 revive battle-9-item-2 0.5, move 1', 'move 1, move 1');

		assert(gardevoir.hp > 0, 'Revive must restore HP');
		assert.equal(gardevoir.isActive, false, 'a benched revive must stay on the bench');
		assert(!battle.log.some(line => line.startsWith('|switch|p1c')),
			'no switch line may be emitted for a benched revive');
	});
});
