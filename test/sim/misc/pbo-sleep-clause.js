'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const PVP_FORMAT = 'gen9pbopvpbattle';
const PVP_NO_PREVIEW_FORMAT = 'gen9pbopvpbattlenopreview';
const WILD_FORMAT = 'gen9pbowildbattle';
const NPC_FORMAT = 'gen9pbonpcnationaldex';
const STANDARD_FORMAT = 'gen9pbostandardbattle';

function createSleepClauseBattle(format) {
	return common.createBattle({ formatid: format }, [
		[{ species: 'Breloom', ability: 'technician', moves: ['spore', 'machpunch'] }],
		[
			{ species: 'Magikarp', ability: 'swiftswim', moves: ['splash'] },
			{ species: 'Feebas', ability: 'swiftswim', moves: ['splash'] },
		],
	]);
}

describe('PBO Sleep Clause - PvP formats', () => {
	let battle;
	afterEach(() => battle.destroy());

	it('should block Spore on a second target in PvP format', () => {
		battle = createSleepClauseBattle(PVP_FORMAT);
		// Skip team preview
		battle.makeChoices('default', 'default');

		// Put Magikarp to sleep
		battle.makeChoices('move spore', 'move splash');
		assert.equal(battle.p2.pokemon[0].status, 'slp', 'Magikarp should be asleep');

		// Switch to Feebas, try Spore again — should be blocked
		battle.makeChoices('move spore', 'switch 2');
		assert.equal(battle.p2.active[0].status, '', 'Feebas should NOT be asleep (Sleep Clause)');
	});

	it('should block Spore on a second target in PvP No Preview format', () => {
		battle = createSleepClauseBattle(PVP_NO_PREVIEW_FORMAT);

		battle.makeChoices('move spore', 'move splash');
		assert.equal(battle.p2.pokemon[0].status, 'slp', 'Magikarp should be asleep');

		battle.makeChoices('move spore', 'switch 2');
		assert.equal(battle.p2.active[0].status, '', 'Feebas should NOT be asleep (Sleep Clause)');
	});

	it('should still allow Rest when Sleep Clause is active in PvP', () => {
		battle = common.createBattle({ formatid: PVP_NO_PREVIEW_FORMAT }, [
			[{ species: 'Breloom', ability: 'technician', moves: ['spore', 'tackle'] }],
			[
				{ species: 'Magikarp', ability: 'swiftswim', moves: ['splash'] },
				{ species: 'Blissey', ability: 'serenegrace', moves: ['rest', 'softboiled'] },
			],
		]);

		// Put Magikarp to sleep
		battle.makeChoices('move spore', 'move splash');
		assert.equal(battle.p2.pokemon[0].status, 'slp');

		// Switch to Blissey, damage it first so Rest has an effect
		battle.makeChoices('move tackle', 'switch 2');
		// Use Rest — self-sleep should still work despite Sleep Clause
		battle.makeChoices('move tackle', 'move rest');
		assert.equal(battle.p2.active[0].status, 'slp', 'Rest should still work under Sleep Clause');
	});
});

describe('PBO Sleep Clause - NPC/Wild/Standard formats', () => {
	let battle;
	afterEach(() => battle.destroy());

	for (const [name, format] of [['Wild', WILD_FORMAT], ['NPC', NPC_FORMAT], ['Standard', STANDARD_FORMAT]]) {
		it(`should block Spore on a second target in ${name} format`, () => {
			battle = createSleepClauseBattle(format);

			battle.makeChoices('move spore', 'move splash');
			assert.equal(battle.p2.pokemon[0].status, 'slp', 'Magikarp should be asleep');

			battle.makeChoices('move spore', 'switch 2');
			assert.equal(battle.p2.active[0].status, '', `Feebas should NOT be asleep (Sleep Clause in ${name})`);
		});
	}
});
