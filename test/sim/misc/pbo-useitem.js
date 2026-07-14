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

		battle.makeChoices('useitem p1a potion battle-42-item-7 50', 'move 1');

		assert.equal(charizard.hp, hpBeforePotion + 50, 'Potion should heal the configured amount');
		assert(battle.log.some(line => line === '|bagitem|p1a|potion|battle-42-item-7'),
			'Battle log should include the exact bag item action token');
		assert(battle.log.some(line => line.includes('|-heal|p1a: Charizard|') && line.includes('[from] bagitem: potion')),
			'Battle log should include heal protocol line from potion bag item');
	});

	it('should reject a useitem action without an execution token', () => {
		battle = common.createBattle({formatid: 'gen9pbostandardbattle'}, [
			[{species: 'Charizard', ability: 'Blaze', moves: ['splash'], currentHp: 100}],
			[{species: 'Blastoise', ability: 'Torrent', moves: ['splash']}],
		]);

		const charizard = battle.p1.active[0];
		const hpBeforePotion = charizard.hp;

		assert.throws(
			() => battle.makeChoices('useitem p1a potion', 'move 1'),
			/useitem requires target, script name, and action token/
		);

		assert.equal(charizard.hp, hpBeforePotion, 'A tokenless item action must not execute');
		assert(!battle.log.some(line => line.startsWith('|bagitem|')),
			'A rejected item action must not emit an execution acknowledgement');
	});
});
