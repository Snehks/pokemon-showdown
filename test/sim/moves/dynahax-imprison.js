'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';
const DOUBLES = 'gen9pbonpcdoublesbattle';

let battle;

// Imprison locks the boss out of every move the user also carries, which can
// softlock a Dynahax raid. It targets the USER, so the boss's onTryHit never
// sees it. It must be blocked so NO route works:
//   - direct pick  -> greyed out in the picker (onFoeDisableMove)
//   - indirect call -> fails at the move level (onTry) for Sleep Talk / Metronome
//                      / Assist / Copycat / Instruct, which bypass the picker.
describe('Dynahax [Imprison hard block]', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it('should disable Imprison in the picker vs a Dynahax boss (singles)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['imprison', 'tackle'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['flamethrower'] }],
		]);
		const imprison = battle.p1.activeRequest.active[0].moves.find(m => m.id === 'imprison');
		assert(imprison);
		assert.equal(imprison.disabled, true);
		assert.cantMove(() => battle.makeChoices('move imprison', 'move flamethrower'), 'Smeargle', 'Imprison', true);
	});

	it('should disable Imprison in the picker vs Dynahax bosses (doubles)', () => {
		battle = common.createBattle({ formatid: DOUBLES }, [
			[
				{ species: 'Smeargle', ability: 'owntempo', moves: ['imprison', 'splash'] },
				{ species: 'Ditto', ability: 'owntempo', moves: ['splash'] },
			],
			[
				{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] },
				{ species: 'Blastoise', ability: 'dynahax', moves: ['splash'] },
			],
		]);
		const imprison = battle.p1.activeRequest.active[0].moves.find(m => m.id === 'imprison');
		assert(imprison);
		assert.equal(imprison.disabled, true);
	});

	it('should fail Imprison called indirectly via Sleep Talk vs a Dynahax boss', () => {
		// With moves [sleeptalk, imprison], Sleep Talk can only call Imprison
		// (Sleep Talk itself carries the nosleeptalk flag), so this fires every turn.
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'imprison'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		for (let i = 0; i < 6; i++) {
			battle.makeChoices('move sleeptalk', 'move splash');
			assert.equal(battle.p1.active[0].volatiles['imprison'], undefined,
				`Imprison must not apply via Sleep Talk (turn ${i + 1})`);
		}
	});

	it('should fail Imprison called indirectly via Sleep Talk vs a Dynahax boss (doubles)', () => {
		battle = common.createBattle({ formatid: DOUBLES, seed: [0, 0, 0, 0] }, [
			[
				{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'imprison'] },
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
			assert.equal(battle.p1.active[0].volatiles['imprison'], undefined,
				`Imprison must not apply via Sleep Talk in doubles (turn ${i + 1})`);
		}
	});

	it('should still allow Imprison against a normal (non-Dynahax) foe', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['imprison'] }],
			[{ species: 'Charizard', ability: 'blaze', moves: ['splash'] }],
		]);
		battle.makeChoices('move imprison', 'move splash');
		assert(battle.p1.active[0].volatiles['imprison'],
			'Imprison must work normally against a non-Dynahax foe');
	});
});
