'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const PVP_FORMAT = 'gen9pbopvpbattle';
const PVP_NO_PREVIEW_FORMAT = 'gen9pbopvpbattlenopreview';
const WILD_FORMAT = 'gen9pbowildbattle';
const NPC_FORMAT = 'gen9pbonpcnationaldex';
const STANDARD_FORMAT = 'gen9pbostandardbattle';
const WILD_FORMATS = [
	WILD_FORMAT,
	'gen9pbowildhorde1v2',
	'gen9pbowildhorde1v3',
	'gen9pbowildhorde1v4',
	'gen9pbowildhorde1v5',
	'gen9pbocoopwild2v1',
	'gen9pbocoopwild2v3',
	'gen9pbocoopwild2v4',
	'gen9pbocoopwild2v5',
	'gen9pbowilddoublesbattle',
	'gen9pbowildtriplesbattle',
];

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

describe('PBO Sleep Clause - wild formats', () => {
	let battle;
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	it('should be absent from every wild format', () => {
		for (const formatId of WILD_FORMATS) {
			const format = Dex.formats.get(formatId);
			assert(!format.ruleset?.includes('Sleep Clause Mod'), `${formatId} should not use Sleep Clause Mod`);
		}
	});

	it('should allow Spore on a second target in the ordinary wild format', () => {
		battle = createSleepClauseBattle(WILD_FORMAT);

		battle.makeChoices('move spore', 'move splash');
		assert.equal(battle.p2.pokemon[0].status, 'slp', 'Magikarp should be asleep');

		battle.makeChoices('move spore', 'switch 2');
		assert.equal(battle.p2.active[0].status, 'slp', 'Feebas should also be asleep');
	});

	it('should allow two simultaneous wild slots to be put to sleep in a 1v5 horde', () => {
		battle = common.createBattle({ formatid: 'gen9pbowildhorde1v5' }, [[
			{ species: 'Breloom', ability: 'technician', moves: ['spore'] },
		], [
			{ species: 'Magikarp', ability: 'swiftswim', moves: ['splash'] },
			{ species: 'Feebas', ability: 'swiftswim', moves: ['splash'] },
			{ species: 'Caterpie', ability: 'shielddust', moves: ['splash'] },
			{ species: 'Pidgey', ability: 'keeneye', moves: ['splash'] },
			{ species: 'Rattata', ability: 'runaway', moves: ['splash'] },
		]]);

		battle.makeChoices('move spore 1', 'move splash, move splash, move splash, move splash, move splash');
		battle.makeChoices('move spore 2', 'move splash, move splash, move splash, move splash, move splash');

		assert.equal(battle.p2.active[0].status, 'slp', 'The first wild slot should be asleep');
		assert.equal(battle.p2.active[1].status, 'slp', 'The second wild slot should also be asleep');
	});

	it('should allow co-op partners to put different wild slots to sleep in the same turn', () => {
		battle = common.createBattle({ formatid: 'gen9pbocoopwild2v3' }, [[
			{ species: 'Breloom', ability: 'technician', moves: ['spore'] },
			{ species: 'Amoonguss', ability: 'regenerator', moves: ['spore'] },
		], [
			{ species: 'Magikarp', ability: 'swiftswim', moves: ['splash'] },
			{ species: 'Feebas', ability: 'swiftswim', moves: ['splash'] },
			{ species: 'Caterpie', ability: 'shielddust', moves: ['splash'] },
		]]);

		battle.makeChoices('move spore 1, move spore 2', 'move splash, move splash, move splash');

		assert.equal(battle.p2.active[0].status, 'slp', 'The first partner should sleep wild slot one');
		assert.equal(battle.p2.active[1].status, 'slp', 'The second partner should sleep wild slot two');
	});
});

describe('PBO Sleep Clause - NPC/Standard formats', () => {
	let battle;
	afterEach(() => battle.destroy());

	for (const [name, format] of [['NPC', NPC_FORMAT], ['Standard', STANDARD_FORMAT]]) {
		it(`should block Spore on a second target in ${name} format`, () => {
			battle = createSleepClauseBattle(format);

			battle.makeChoices('move spore', 'move splash');
			assert.equal(battle.p2.pokemon[0].status, 'slp', 'Magikarp should be asleep');

			battle.makeChoices('move spore', 'switch 2');
			assert.equal(battle.p2.active[0].status, '', `Feebas should NOT be asleep (Sleep Clause in ${name})`);
		});
	}
});
