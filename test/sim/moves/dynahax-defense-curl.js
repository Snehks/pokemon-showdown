'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';
const DOUBLES = 'gen9pbonpcdoublesbattle';

let battle;

// Defense Curl is banned against Dynahax bosses (owner request). It targets the
// USER, so the boss's onTryHit never sees it. It must be blocked so NO route works:
//   - direct pick  -> greyed out in the picker (onFoeDisableMove)
//   - indirect call -> fails at the move level (onTry) for Sleep Talk / Metronome
//                      / Assist / Copycat / Instruct, which bypass the picker.
// Rollout / Ice Ball stay usable.
describe('Dynahax [Defense Curl hard block]', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it('should disable Defense Curl in the picker vs a Dynahax boss (singles)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['defensecurl', 'rollout'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		const moves = battle.p1.activeRequest.active[0].moves;
		assert.equal(moves.find(m => m.id === 'defensecurl').disabled, true);
		assert.false(moves.find(m => m.id === 'rollout').disabled, 'Rollout must stay usable');
		assert.cantMove(() => battle.makeChoices('move defensecurl', 'move splash'), 'Snorlax', 'Defense Curl', true);
	});

	it('should disable Defense Curl in the picker vs Dynahax bosses (doubles)', () => {
		battle = common.createBattle({ formatid: DOUBLES }, [
			[
				{ species: 'Snorlax', ability: 'owntempo', moves: ['defensecurl', 'iceball'] },
				{ species: 'Ditto', ability: 'owntempo', moves: ['splash'] },
			],
			[
				{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] },
				{ species: 'Blastoise', ability: 'dynahax', moves: ['splash'] },
			],
		]);
		const moves = battle.p1.activeRequest.active[0].moves;
		assert.equal(moves.find(m => m.id === 'defensecurl').disabled, true);
		assert.false(moves.find(m => m.id === 'iceball').disabled, 'Ice Ball must stay usable');
	});

	it('should fail Defense Curl called indirectly via Sleep Talk vs a Dynahax boss', () => {
		// With moves [sleeptalk, defensecurl], Sleep Talk can only call Defense Curl
		// (Sleep Talk itself carries the nosleeptalk flag), so this fires every turn.
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'defensecurl'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		battle.makeChoices('move sleeptalk', 'move splash');
		assert(battle.log.some(line => line.startsWith('|-fail|p1a: Snorlax|move: Defense Curl')),
			'Sleep Talk must call Defense Curl and Defense Curl must fail');
		for (let i = 0; i < 6; i++) {
			if (i > 0) battle.makeChoices('move sleeptalk', 'move splash');
			assert.equal(battle.p1.active[0].boosts.def, 0,
				`Defense Curl must not boost via Sleep Talk (turn ${i + 1})`);
			assert.equal(battle.p1.active[0].volatiles['defensecurl'], undefined,
				`Defense Curl must not apply via Sleep Talk (turn ${i + 1})`);
		}
	});

	it('should fail Defense Curl called indirectly via Metronome vs a Dynahax boss', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Clefable', ability: 'magicguard', moves: ['metronome'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		// Force Metronome's random pick to Defense Curl.
		const sample = battle.sample.bind(battle);
		battle.sample = items => items.find(item => item?.id === 'defensecurl') || sample(items);
		battle.makeChoices('move metronome', 'move splash');
		assert(battle.log.some(line => line.startsWith('|-fail|p1a: Clefable|move: Defense Curl')),
			'Defense Curl called by Metronome must fail');
		assert.equal(battle.p1.active[0].boosts.def, 0);
		assert.equal(battle.p1.active[0].volatiles['defensecurl'], undefined);
	});

	it('should fail Defense Curl called indirectly via Sleep Talk vs a Dynahax boss (doubles)', () => {
		battle = common.createBattle({ formatid: DOUBLES, seed: [0, 0, 0, 0] }, [
			[
				{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'defensecurl'] },
				{ species: 'Ditto', ability: 'owntempo', moves: ['splash'] },
			],
			[
				{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] },
				{ species: 'Blastoise', ability: 'dynahax', moves: ['splash'] },
			],
		]);
		battle.p1.active[0].setStatus('slp');
		for (let i = 0; i < 6; i++) {
			battle.makeChoices('move sleeptalk, move splash', 'move splash, move splash');
			assert.equal(battle.p1.active[0].boosts.def, 0,
				`Defense Curl must not boost via Sleep Talk in doubles (turn ${i + 1})`);
			assert.equal(battle.p1.active[0].volatiles['defensecurl'], undefined,
				`Defense Curl must not apply via Sleep Talk in doubles (turn ${i + 1})`);
		}
	});

	it('should still allow Defense Curl against a normal (non-Dynahax) foe', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['defensecurl'] }],
			[{ species: 'Charizard', ability: 'blaze', moves: ['splash'] }],
		]);
		battle.makeChoices('move defensecurl', 'move splash');
		assert.statStage(battle.p1.active[0], 'def', 1);
		assert(battle.p1.active[0].volatiles['defensecurl'],
			'Defense Curl must work normally against a non-Dynahax foe');
	});

	it('should still allow Defense Curl via Sleep Talk against a normal foe', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'defensecurl'] }],
			[{ species: 'Charizard', ability: 'blaze', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		battle.makeChoices('move sleeptalk', 'move splash');
		assert.statStage(battle.p1.active[0], 'def', 1);
		assert(battle.p1.active[0].volatiles['defensecurl'],
			'Defense Curl via Sleep Talk must still work against a non-Dynahax foe');
	});
});
