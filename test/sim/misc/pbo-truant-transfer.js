'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const NPC_SINGLES = 'gen9pbonpcnationaldex';
const NPC_DOUBLES = 'gen9pbonpcdoublesbattle';
// PvP No Preview shares PvP rules without the Team Preview request phase.
const PVP = 'gen9pbopvpbattlenopreview';

let battle;

// Production abuse (Change 62): a Truant Durant uses Entrainment to give the
// NPC's Pokemon Truant, making it loaf every other turn. Skill Swap enables
// the identical transfer. The Truant Transfer Clause (NPC formats only):
//  - picker-disables Entrainment / Skill Swap for Truant users (onDisableMove)
//  - hard-blocks both at move level (onTry) so indirect calls via Sleep Talk /
//    Metronome / Assist / Instruct fail too
// PvP formats do not carry the clause — Entrainment Durant stays legal there.
describe('Truant Transfer Clause', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it('should disable Entrainment and Skill Swap in the picker for a Truant user in NPC singles', () => {
		battle = common.createBattle({ formatid: NPC_SINGLES, seed: [0, 0, 0, 0] }, [
			[{ species: 'Durant', ability: 'truant', moves: ['entrainment', 'skillswap', 'xscissor'] }],
			[{ species: 'Snorlax', ability: 'thickfat', moves: ['splash'] }],
		]);
		const moves = battle.p1.activeRequest.active[0].moves;
		assert(moves.find(m => m.id === 'entrainment').disabled,
			'Entrainment must be disabled for a Truant user in NPC battles');
		assert(moves.find(m => m.id === 'skillswap').disabled,
			'Skill Swap must be disabled for a Truant user in NPC battles');
		assert(!moves.find(m => m.id === 'xscissor').disabled,
			'Other moves must stay enabled for a Truant user');
	});

	it('should disable the transfer moves for a Truant user in NPC doubles', () => {
		battle = common.createBattle({ formatid: NPC_DOUBLES, seed: [0, 0, 0, 0] }, [
			[
				{ species: 'Durant', ability: 'truant', moves: ['entrainment', 'skillswap', 'xscissor'] },
				{ species: 'Blissey', ability: 'naturalcure', moves: ['splash'] },
			],
			[
				{ species: 'Snorlax', ability: 'thickfat', moves: ['splash'] },
				{ species: 'Garchomp', ability: 'roughskin', moves: ['splash'] },
			],
		]);
		const moves = battle.p1.activeRequest.active[0].moves;
		assert(moves.find(m => m.id === 'entrainment').disabled,
			'Entrainment must be disabled in NPC doubles');
		assert(moves.find(m => m.id === 'skillswap').disabled,
			'Skill Swap must be disabled in NPC doubles');
		assert(!moves.find(m => m.id === 'xscissor').disabled,
			'Other moves must stay enabled in NPC doubles');
	});

	it('should fail Entrainment called via Sleep Talk by a Truant user', () => {
		battle = common.createBattle({ formatid: NPC_SINGLES, seed: [1, 2, 3, 4] }, [
			[{ species: 'Durant', ability: 'truant', moves: ['sleeptalk', 'entrainment'] }],
			[{ species: 'Breloom', ability: 'technician', moves: ['spore', 'splash'] }],
		]);
		// Turn 1: Breloom spores Durant. Keep sporing so Durant stays asleep
		// even after waking (Truant loafs on alternating turns, so several
		// attempts are needed before a sleeping, non-loafing Sleep Talk fires).
		for (let i = 0; i < 8; i++) {
			if (battle.log.some(line => line.startsWith('|move|p1a: Durant|Entrainment'))) break;
			battle.makeChoices('move sleeptalk', 'move spore');
		}
		assert(battle.log.some(line => line.startsWith('|move|p1a: Durant|Entrainment')),
			'Sleep Talk should have attempted Entrainment.\n' + battle.log.join('\n'));
		assert(battle.log.some(line => line.startsWith('|-fail|p1a: Durant')),
			'Entrainment must fail when called indirectly by a Truant user.\n' + battle.log.join('\n'));
		assert.equal(battle.p2.active[0].ability, 'technician',
			'The target must keep its own ability');
	});

	it('should not affect Entrainment from a non-Truant user in NPC formats', () => {
		battle = common.createBattle({ formatid: NPC_SINGLES, seed: [0, 0, 0, 0] }, [
			[{ species: 'Durant', ability: 'swarm', moves: ['entrainment'] }],
			[{ species: 'Snorlax', ability: 'thickfat', moves: ['splash'] }],
		]);
		const entrainment = battle.p1.activeRequest.active[0].moves.find(m => m.id === 'entrainment');
		assert(!entrainment.disabled, 'Entrainment must stay selectable for non-Truant users');
		battle.makeChoices('move entrainment', 'move splash');
		assert.equal(battle.p2.active[0].ability, 'swarm',
			'Vanilla Entrainment must still pass non-Truant abilities in NPC battles');
	});

	it('should not apply in PvP formats', () => {
		battle = common.createBattle({ formatid: PVP, seed: [0, 0, 0, 0] }, [
			[{ species: 'Durant', ability: 'truant', moves: ['entrainment', 'skillswap'] }],
			[{ species: 'Snorlax', ability: 'thickfat', moves: ['splash'] }],
		]);
		const moves = battle.p1.activeRequest.active[0].moves;
		assert(!moves.find(m => m.id === 'entrainment').disabled,
			'Entrainment Durant must stay legal in PvP');
		assert(!moves.find(m => m.id === 'skillswap').disabled,
			'Skill Swap must stay legal in PvP');
		battle.makeChoices('move entrainment', 'move splash');
		assert.equal(battle.p2.active[0].ability, 'truant',
			'Entrainment must still pass Truant to the target in PvP');
	});
});
