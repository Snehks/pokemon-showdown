'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';

let battle;

describe('Dynahax [Blocked Moves]', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it('should block Taunt', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['taunt'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move taunt', 'move splash');
		assert.equal(battle.p2.active[0].volatiles['taunt'], undefined);
	});

	it('should block Encore', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['encore', 'splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash', 'flamethrower'] }],
		]);
		battle.makeChoices('move splash', 'move splash');
		battle.makeChoices('move encore', 'move flamethrower');
		assert.equal(battle.p2.active[0].volatiles['encore'], undefined);
	});

	it('should block Torment', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['torment'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move torment', 'move splash');
		assert.equal(battle.p2.active[0].volatiles['torment'], undefined);
	});

	it('should block Perish Song', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['perishsong', 'splash'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move perishsong', 'move splash');
		assert.equal(battle.p2.active[0].volatiles['perishsong'], undefined);
	});

	it('should block Trick / Switcheroo', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', item: 'choicescarf', moves: ['trick'] }],
			[{ species: 'Charizard', ability: 'dynahax', item: 'leftovers', moves: ['splash'] }],
		]);
		battle.makeChoices('move trick', 'move splash');
		assert.equal(battle.p2.active[0].item, 'leftovers');
	});

	it('should disable Bestow in the picker for foes', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', item: 'leftovers', moves: ['bestow', 'tackle'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);

		const bestow = battle.p1.activeRequest.active[0].moves.find(move => move.id === 'bestow');
		assert(bestow);
		assert.equal(bestow.disabled, true);
		// Boss never picks up the foe's item, and the foe keeps it.
		assert.cantMove(() => battle.makeChoices('move bestow', 'move splash'), 'Smeargle', 'Bestow', true);
		assert.equal(battle.p2.active[0].item, '');
		assert.equal(battle.p1.active[0].item, 'leftovers');
	});

	it('should block Entrainment', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['entrainment'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move entrainment', 'move splash');
		assert.equal(battle.p2.active[0].ability, 'dynahax');
	});

	it('should disable Skill Swap', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['skillswap', 'tackle'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);

		const skillSwap = battle.p1.activeRequest.active[0].moves.find(move => move.id === 'skillswap');
		assert(skillSwap);
		assert.equal(skillSwap.disabled, true);
		assert.equal(battle.p2.active[0].ability, 'dynahax');
	});

	it('should block Pain Split', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['painsplit'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].hp = 1;
		const bossHp = battle.p2.active[0].hp;
		battle.makeChoices('move painsplit', 'move splash');
		assert.equal(battle.p2.active[0].hp, bossHp);
	});

	it('should block Super Fang', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['superfang'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move superfang', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block Endeavor', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['endeavor'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p1.active[0].hp = 1;
		battle.makeChoices('move endeavor', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should block Foul Play', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['foulplay'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move foulplay', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should disable Destiny Bond for foes', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['destinybond', 'tackle'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['flamethrower'] }],
		]);
		assert.cantMove(() => battle.makeChoices('move destinybond', 'move flamethrower'), 'Smeargle', 'Destiny Bond', true);
	});

	it('should disable Baton Pass for foes', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['batonpass', 'tackle'] }, { species: 'Pikachu', ability: 'static', moves: ['thunderbolt'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['flamethrower'] }],
		]);
		assert.cantMove(() => battle.makeChoices('move batonpass', 'move flamethrower'), 'Smeargle', 'Baton Pass', true);
	});

	it('should disable Skill Swap and exploit setup moves for foes', () => {
		for (const move of ['skillswap', 'powertrick', 'dragoncheer', 'guardsplit', 'powersplit', 'speedswap']) {
			if (battle) {
				battle.destroy();
				battle = null;
			}
			battle = common.createBattle({ formatid: 'gen9pbonpcdoublesbattle' }, [
				[
					{ species: 'Smeargle', ability: 'owntempo', moves: [move, 'splash'] },
					{ species: 'Garchomp', ability: 'roughskin', moves: ['splash'] },
				],
				[
					{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] },
					{ species: 'Blastoise', ability: 'dynahax', moves: ['splash'] },
				],
			]);

			const smeargleMove = battle.p1.activeRequest.active[0].moves.find(activeMove => activeMove.id === move);
			assert(smeargleMove);
			assert.equal(smeargleMove.disabled, true);
		}
	});

	it('should keep Focus Energy enabled for foes', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['focusenergy', 'tackle'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);

		const focusEnergy = battle.p1.activeRequest.active[0].moves.find(activeMove => activeMove.id === 'focusenergy');
		assert(focusEnergy);
		assert.equal(focusEnergy.disabled, false);
		battle.makeChoices('move focusenergy', 'move splash');
		assert(battle.p1.active[0].volatiles['focusenergy']);
	});

	it('should block Heal Pulse', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['healpulse'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.p2.active[0].hp = 1;
		battle.makeChoices('move healpulse', 'move splash');
		assert.equal(battle.p2.active[0].hp, 1);
	});

	it('should block Final Gambit', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['finalgambit'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move finalgambit', 'move splash');
		assert.fullHP(battle.p2.active[0]);
	});

	it('should disable type-change and banned moves in the picker for foes', () => {
		// Type-change moves (Soak / Magic Powder / Trick-or-Treat / Forest's Curse / Doodle)
		// were only blocked when aimed at the boss via onTryHit; players cast them on an ALLY
		// to gain a typing immunity, which never targets the boss. They are now disabled in the
		// picker like Destiny Bond. Imprison / Role Play / Copycat are banned & disabled outright.
		for (const move of [
			'soak', 'magicpowder', 'trickortreat', 'forestscurse', 'doodle',
			'imprison', 'roleplay', 'copycat',
		]) {
			if (battle) {
				battle.destroy();
				battle = null;
			}
			battle = common.createBattle({ formatid: FORMAT }, [
				[{ species: 'Smeargle', ability: 'owntempo', moves: [move, 'tackle'] }],
				[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
			]);

			const smeargleMove = battle.p1.activeRequest.active[0].moves.find(activeMove => activeMove.id === move);
			assert(smeargleMove, `${move} should be in the request`);
			assert.equal(smeargleMove.disabled, true, `${move} must be disabled in the Dynahax picker`);
		}
	});

	it('should block Simple Beam', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['simplebeam'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move simplebeam', 'move splash');
		assert.equal(battle.p2.active[0].ability, 'dynahax');
	});

	it('should block trapping moves (Bind, Fire Spin, Whirlpool)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['bind'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move bind', 'move splash');
		assert.equal(battle.p2.active[0].volatiles['partiallytrapped'], undefined);
	});

	it('should block OHKO moves (Sheer Cold)', () => {
		battle = common.createBattle({ formatid: FORMAT, forceRandomChance: true }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['sheercold'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move sheercold', 'move splash');
		assert.false.fainted(battle.p2.active[0]);
	});

	it('should block OHKO moves (Fissure)', () => {
		battle = common.createBattle({ formatid: FORMAT, forceRandomChance: true }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['fissure'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move fissure', 'move splash');
		assert.false.fainted(battle.p2.active[0]);
	});

	it('should disable Grudge for foes', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['grudge', 'tackle'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['flamethrower'] }],
		]);
		assert.cantMove(() => battle.makeChoices('move grudge', 'move flamethrower'), 'Smeargle', 'Grudge', true);
	});

	it('should block Leech Seed (singles)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Smeargle', ability: 'owntempo', moves: ['leechseed'] }],
			[{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] }],
		]);
		battle.makeChoices('move leechseed', 'move splash');
		assert.equal(battle.p2.active[0].volatiles['leechseed'], undefined);
	});

	it('should block Leech Seed (doubles)', () => {
		battle = common.createBattle({ formatid: 'gen9pbonpcdoublesbattle' }, [
			[
				{ species: 'Smeargle', ability: 'owntempo', moves: ['leechseed', 'splash'] },
				{ species: 'Ditto', ability: 'owntempo', moves: ['splash'] },
			],
			[
				{ species: 'Charizard', ability: 'dynahax', moves: ['splash'] },
				{ species: 'Blastoise', ability: 'dynahax', moves: ['splash'] },
			],
		]);
		battle.makeChoices('move leechseed 1, move splash', 'move splash, move splash');
		assert.equal(battle.p2.active[0].volatiles['leechseed'], undefined);
	});
});
