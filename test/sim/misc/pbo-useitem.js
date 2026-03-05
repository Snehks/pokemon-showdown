'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('[PBO] Bag item useitem action', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should execute potion script and emit bagitem/heal protocol lines', () => {
		battle = common.createBattle({formatid: 'gen9pbostandardbattle'}, [
			[{species: 'Charizard', ability: 'Blaze', moves: ['splash'], currentHp: 100}],
			[{species: 'Blastoise', ability: 'Torrent', moves: ['splash']}],
		]);

		const charizard = battle.p1.active[0];
		const hpBeforePotion = charizard.hp;

		battle.makeChoices('useitem p1a potion 50', 'move 1');

		assert.equal(charizard.hp, hpBeforePotion + 50, 'Potion should heal the configured amount');
		assert(battle.log.some(line => line === '|bagitem|p1a|potion'),
			'Battle log should include bagitem protocol line for potion use');
		assert(battle.log.some(line => line.includes('|-heal|p1a: Charizard|') && line.includes('[from] bagitem: potion')),
			'Battle log should include heal protocol line from potion bag item');
	});
});
