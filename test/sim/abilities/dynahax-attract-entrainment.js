'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';
const DOUBLES = 'gen9pbonpcdoublesbattle';

let battle;

// Discord report (Dynamax raid abuse):
//  - Attract infatuated the raid boss, locking it out of Haze (and other
//    moves) for 12+ turns while players stacked -6 debuffs. Infatuation is a
//    VOLATILE, so the onSetStatus immunity never covered it.
//  - Entrainment freely passed abilities. Targeting the boss was already in
//    the onTryHit blocked Set, but in doubles raids players cast it on their
//    OWN partner (e.g. passing Hustle for a permanent 1.5x Attack boost),
//    which onTryHit on the boss can never see.
//
// Fix:
//  - attract + entrainment added to onFoeDisableMove (unselectable in raids,
//    regardless of target)
//  - attract added to the onTryHit blocked Set (indirect calls via Sleep Talk
//    / Metronome / Assist bypass the picker disable)
//  - attract volatile blocked in onTryAddVolatile (covers Cute Charm contact
//    infatuation)
describe('Dynahax [Attract / Entrainment ban]', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it('should disable Attract and Entrainment in the picker vs a Dynahax boss', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Espeon', ability: 'synchronize', gender: 'M', moves: ['attract', 'entrainment', 'psychic'] }],
			[{ species: 'Charizard', ability: 'dynahax', gender: 'F', moves: ['splash'] }],
		]);
		const request = battle.p1.activeRequest;
		const attract = request.active[0].moves.find(m => m.id === 'attract');
		const entrainment = request.active[0].moves.find(m => m.id === 'entrainment');
		assert(attract.disabled, 'Attract must be disabled vs a Dynahax boss');
		assert(entrainment.disabled, 'Entrainment must be disabled vs a Dynahax boss');
	});

	it('should disable Entrainment in doubles even for ally targeting', () => {
		battle = common.createBattle({ formatid: DOUBLES, seed: [0, 0, 0, 0] }, [
			[
				{ species: 'Durant', ability: 'hustle', moves: ['entrainment', 'splash'] },
				{ species: 'Blissey', ability: 'naturalcure', moves: ['splash'] },
			],
			[
				{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] },
				{ species: 'Blastoise', ability: 'dynahax', moves: ['splash'] },
			],
		]);
		const request = battle.p1.activeRequest;
		const entrainment = request.active[0].moves.find(m => m.id === 'entrainment');
		assert(entrainment.disabled,
			'Entrainment must be unselectable in doubles raids (ally Hustle-passing abuse)');
	});

	it('should block Attract called via Sleep Talk vs a Dynahax boss', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Snorlax', ability: 'owntempo', gender: 'M', moves: ['sleeptalk', 'attract'] }],
			[{ species: 'Charizard', ability: 'dynahax', gender: 'F', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		for (let i = 0; i < 3; i++) {
			battle.makeChoices('move sleeptalk', 'move splash');
			assert.false(!!battle.p2.active[0].volatiles['attract'],
				`Dynahax boss must not be infatuated via Sleep Talk Attract (turn ${i + 1})`);
		}
	});

	it('should block Cute Charm infatuation on a Dynahax boss', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Clefable', ability: 'cutecharm', gender: 'M', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', gender: 'F', moves: ['tackle'] }],
		]);
		// Force the 30% Cute Charm roll deterministically by trying several turns.
		for (let i = 0; i < 8; i++) {
			battle.makeChoices('move splash', 'move tackle');
			assert.false(!!battle.p2.active[0].volatiles['attract'],
				`Dynahax boss must never be infatuated by Cute Charm (turn ${i + 1})`);
		}
	});

	it('should still allow Attract and Entrainment against normal foes', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Espeon', ability: 'synchronize', gender: 'M', moves: ['attract', 'entrainment', 'psychic'] }],
			[{ species: 'Charizard', ability: 'blaze', gender: 'F', moves: ['splash'] }],
		]);
		const request = battle.p1.activeRequest;
		const attract = request.active[0].moves.find(m => m.id === 'attract');
		const entrainment = request.active[0].moves.find(m => m.id === 'entrainment');
		assert.false(!!attract.disabled, 'Attract must stay usable vs normal foes');
		assert.false(!!entrainment.disabled, 'Entrainment must stay usable vs normal foes');

		battle.makeChoices('move attract', 'move splash');
		assert(battle.p2.active[0].volatiles['attract'],
			'Attract must still infatuate a normal foe');
	});
});
