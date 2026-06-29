'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';
const DOUBLES = 'gen9pbonpcdoublesbattle';

let battle;

describe('Dynahax [Stat Protection]', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	// ── Boss's own stat drops are floored at -1 ──

	it('should floor the boss attack drop at -1 when hit by a -2 move (Charm)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['charm'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		// Charm lowers Attack by 2; Dynahax must clamp it to -1.
		battle.makeChoices('move charm', 'move splash');
		assert.equal(battle.p2.active[0].boosts.atk, -1);
	});

	it('should not drop the boss below -1 across repeated drops', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['growl'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move growl', 'move splash');
		battle.makeChoices('move growl', 'move splash');
		battle.makeChoices('move growl', 'move splash');
		assert.equal(battle.p2.active[0].boosts.atk, -1);
	});

	it('should still allow a single Intimidate to land at -1 (regression)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Gyarados', ability: 'intimidate', moves: ['splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		assert.equal(battle.p2.active[0].boosts.atk, -1);
	});

	it('should preserve the boss\'s own positive Max-move self-boost', () => {
		// Max Knuckle (Fighting Max move) raises the user's Attack by 1.
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Blissey', ability: 'owntempo', moves: ['splash'] }],
			[{ species: 'Machamp', ability: 'dynahax', moves: ['maxknuckle'] }],
		]);
		battle.makeChoices('move splash', 'move maxknuckle');
		assert.equal(battle.p2.active[0].boosts.atk, 1);
	});

	// ── Foe positive boosts are wiped at end of turn ──

	it('should clear a foe Swords Dance boost at end of turn', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Scizor', ability: 'owntempo', moves: ['swordsdance'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move swordsdance', 'move splash');
		// +2 applied this turn, then reset to 0 by Dynahax onResidual.
		assert.equal(battle.p1.active[0].boosts.atk, 0);
	});

	it('should clear a foe boost even when called indirectly via Sleep Talk', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['sleeptalk', 'swordsdance'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		// Sleep Talk randomly calls Swords Dance; whichever turn it lands, the boost
		// is reset at end of turn. Run a few turns to let Sleep Talk fire.
		for (let i = 0; i < 4; i++) {
			battle.makeChoices('move sleeptalk', 'move splash');
			assert.equal(battle.p1.active[0].boosts.atk, 0, `atk should be 0 after turn ${i + 1}`);
		}
	});

	it('should clear a Belly Drum (setBoost) foe boost at end of turn', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['bellydrum'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move bellydrum', 'move splash');
		assert.equal(battle.p1.active[0].boosts.atk, 0);
	});

	it('should preserve a foe NEGATIVE boost while clearing positives', () => {
		// Curse on a non-Ghost raises atk+def and lowers spe. Positives must be
		// wiped end of turn, but the spe drop must survive.
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Snorlax', ability: 'owntempo', moves: ['curse'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move curse', 'move splash');
		assert.equal(battle.p1.active[0].boosts.atk, 0);
		assert.equal(battle.p1.active[0].boosts.def, 0);
		assert.equal(battle.p1.active[0].boosts.spe, -1);
	});

	it('should clear a foe boost on the SECOND active slot in doubles', () => {
		battle = common.createBattle({ formatid: DOUBLES }, [
			[
				{ species: 'Snorlax', ability: 'owntempo', moves: ['splash'] },
				{ species: 'Scizor', ability: 'owntempo', moves: ['swordsdance', 'splash'] },
			],
			[
				{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] },
				{ species: 'Blastoise', ability: 'dynahax', moves: ['splash'] },
			],
		]);
		battle.makeChoices('move splash, move swordsdance', 'move splash, move splash');
		assert.equal(battle.p1.active[1].boosts.atk, 0);
	});

	// ── Indirectly-called stat-swap moves fail (WS2 gap closed) ──

	it('should fail Guard Split called indirectly via Sleep Talk (boss def unchanged)', () => {
		battle = common.createBattle({ formatid: FORMAT, seed: [0, 0, 0, 0] }, [
			[{ species: 'Shuckle', ability: 'owntempo', moves: ['sleeptalk', 'guardsplit'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].setStatus('slp');
		const bossDef = battle.p2.active[0].boosts.def;
		const bossStoredDef = battle.p2.active[0].storedStats.def;
		for (let i = 0; i < 4; i++) {
			battle.makeChoices('move sleeptalk', 'move splash');
		}
		// Guard Split must never have averaged defenses with the boss.
		assert.equal(battle.p2.active[0].storedStats.def, bossStoredDef);
		assert.equal(battle.p2.active[0].boosts.def, bossDef);
	});
});
