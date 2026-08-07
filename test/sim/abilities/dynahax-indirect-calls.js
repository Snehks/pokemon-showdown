'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';
const DOUBLES = 'gen9pbonpcdoublesbattle';

let battle;

// Dynahax bans Baton Pass / Power Split / Guard Split / Speed Swap via the
// picker disable (onFoeDisableMove), but move-calling moves (Sleep Talk /
// Metronome / Assist) execute via actions.useMove(), which never checks
// disabled slots. Discord report: "You can still use Baton Pass during the
// Dynamax event, and there's a chance to trigger banned moves like Power
// Split and Guard Split by luck." (luck = Metronome).
//
// Fix:
//   - Power Split / Guard Split / Speed Swap target the boss -> added to the
//     Dynahax onTryHit blocked Set (catches every indirect call).
//   - Baton Pass targets the USER -> onTryHit can't see it; hard-blocked at
//     move level (moves.ts onTry), same pattern as Imprison.
//
// Sleep Talk is used as the deterministic proxy for Metronome: with moves
// [sleeptalk, <payload>] the pool contains only the payload (Sleep Talk
// carries the nosleeptalk flag), so it fires every turn.
describe('Dynahax [Indirect banned-move calls]', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it('should fail Baton Pass called via Sleep Talk vs a Dynahax boss', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[
				// Ditto backup: without a valid switch target Baton Pass would
				// fail naturally and the test would pass for the wrong reason.
				{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'batonpass'] },
				{ species: 'Ditto', ability: 'owntempo', moves: ['splash'] },
			],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		for (let i = 0; i < 6; i++) {
			battle.makeChoices('move sleeptalk', 'move splash');
			assert.notEqual(battle.p1.requestState, 'switch',
				`Baton Pass must not force a switch via Sleep Talk (turn ${i + 1})`);
			assert.equal(battle.p1.active[0].species.name, 'Snorlax',
				`Snorlax must still be active (turn ${i + 1})`);
		}
	});

	it('should fail Baton Pass called via Sleep Talk vs Dynahax bosses (doubles)', () => {
		battle = common.createBattle({ formatid: DOUBLES, seed: [0, 0, 0, 0] }, [
			[
				{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'batonpass'] },
				{ species: 'Blissey', ability: 'naturalcure', moves: ['splash'] },
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
			assert.notEqual(battle.p1.requestState, 'switch',
				`Baton Pass must not force a switch via Sleep Talk in doubles (turn ${i + 1})`);
		}
	});

	it('should still allow Baton Pass via Sleep Talk against a normal foe', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[
				{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'batonpass'] },
				{ species: 'Ditto', ability: 'owntempo', moves: ['splash'] },
			],
			[{ species: 'Charizard', ability: 'blaze', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		battle.makeChoices('move sleeptalk', 'move splash');
		assert.equal(battle.p1.requestState, 'switch',
			'Baton Pass via Sleep Talk must still work against a non-Dynahax foe');
	});

	it('should block Power Split called via Sleep Talk vs a Dynahax boss', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'powersplit'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		const bossAtk = battle.p2.active[0].storedStats.atk;
		const bossSpa = battle.p2.active[0].storedStats.spa;
		for (let i = 0; i < 6; i++) {
			battle.makeChoices('move sleeptalk', 'move splash');
			assert.equal(battle.p2.active[0].storedStats.atk, bossAtk,
				`Boss Atk must be untouched by Power Split via Sleep Talk (turn ${i + 1})`);
			assert.equal(battle.p2.active[0].storedStats.spa, bossSpa,
				`Boss SpA must be untouched by Power Split via Sleep Talk (turn ${i + 1})`);
		}
	});

	it('should block Guard Split called via Sleep Talk vs a Dynahax boss', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'guardsplit'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		const bossDef = battle.p2.active[0].storedStats.def;
		const bossSpd = battle.p2.active[0].storedStats.spd;
		for (let i = 0; i < 6; i++) {
			battle.makeChoices('move sleeptalk', 'move splash');
			assert.equal(battle.p2.active[0].storedStats.def, bossDef,
				`Boss Def must be untouched by Guard Split via Sleep Talk (turn ${i + 1})`);
			assert.equal(battle.p2.active[0].storedStats.spd, bossSpd,
				`Boss SpD must be untouched by Guard Split via Sleep Talk (turn ${i + 1})`);
		}
	});

	it('should block Speed Swap called via Sleep Talk vs a Dynahax boss', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'speedswap'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		const bossSpe = battle.p2.active[0].storedStats.spe;
		for (let i = 0; i < 6; i++) {
			battle.makeChoices('move sleeptalk', 'move splash');
			assert.equal(battle.p2.active[0].storedStats.spe, bossSpe,
				`Boss Spe must be untouched by Speed Swap via Sleep Talk (turn ${i + 1})`);
		}
	});

	it('should still allow Power Split via Sleep Talk against a normal foe', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Shuckle', ability: 'sturdy', moves: ['sleeptalk', 'powersplit'] }],
			[{ species: 'Charizard', ability: 'blaze', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		const bossAtk = battle.p2.active[0].storedStats.atk;
		battle.makeChoices('move sleeptalk', 'move splash');
		assert.notEqual(battle.p2.active[0].storedStats.atk, bossAtk,
			'Power Split via Sleep Talk must still work against a non-Dynahax foe');
	});
});
