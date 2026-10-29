'use strict';

const assert = require('./../../assert');
const common = require('./../../common');
const { Dex } = require('./../../../dist/sim');

const FORMAT = 'gen9pbonpcnationaldex';

// [event id, base id] of the Halloween 2026 forms added after the first 45 (Changes 69 and 70)
const FORMS = [
	['typhlosionh5', 'typhlosion'],
	['mandibuzzh5', 'mandibuzz'],
	['calyrexshadowh5', 'calyrexshadow'],
	['mewtwoshadow', 'mewtwo'],
	['mewtwoshadowmegax', 'mewtwomegax'],
	['mewtwoshadowmegay', 'mewtwomegay'],
	['mewtwoh5', 'mewtwo'],
];

let battle;

describe('PBO Halloween 2026 late forms', () => {
	afterEach(() => {
		if (battle) battle.destroy();
		battle = null;
	});

	for (const [eventId, baseId] of FORMS) {
		it(`${eventId} is its base ${baseId} under a new name`, () => {
			const dex = Dex.mod('pbo');
			const form = dex.species.get(eventId);
			const base = dex.species.get(baseId);
			assert(form.exists, `${eventId} is not registered`);
			assert.equal(form.id, eventId);
			assert.deepEqual(form.types, base.types);
			assert.deepEqual(form.baseStats, base.baseStats);
			assert.deepEqual(form.abilities, base.abilities);
			assert.equal(form.baseSpecies, base.baseSpecies);
		});
	}

	for (const species of ['Mewtwo-Shadow', 'Mewtwo-H5']) it(`${species} mega-evolves with Mewtwonite X and Y`, () => {
		for (const [stone, mega] of [['mewtwonitex', 'Mewtwo-Mega-X'], ['mewtwonitey', 'Mewtwo-Mega-Y']]) {
			battle = common.createBattle({ formatid: FORMAT }, [
				[{ species, ability: 'pressure', item: stone, moves: ['psystrike'] }],
				[{ species: 'Chansey', ability: 'naturalcure', moves: ['splash'] }],
			]);
			battle.makeChoices('move psystrike mega', 'move splash');
			assert.equal(battle.p1.active[0].species.name, mega);
			battle.destroy();
			battle = null;
		}
	});

	it('Calyrex-Shadow-H5 battles with As One (Spectrier)', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Calyrex-Shadow-H5', ability: 'asonespectrier', moves: ['astralbarrage'] }],
			[{ species: 'Mew', ability: 'synchronize', moves: ['splash'] }],
		]);
		assert.equal(battle.p1.active[0].ability, 'asonespectrier');
		battle.makeChoices('move astralbarrage', 'move splash');
		assert.false.fullHP(battle.p2.active[0]);
	});
});
