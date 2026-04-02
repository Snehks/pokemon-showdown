'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

const FORMAT = 'gen9pbonpcnationaldex';

let battle;

describe('PBO Permanent Weather', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should persist permanent weather across turns', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Pikachu', ability: 'static', moves: ['thunderbolt'] }],
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['softboiled'] }],
		]);
		const status = battle.dex.conditions.get('raindance');
		battle.field.weather = status.id;
		battle.field.weatherState = battle.initEffectState({ id: status.id });
		battle.field.weatherState.duration = 0;
		battle.field.pboPermaWeather = status.id;
		battle.singleEvent('FieldStart', status, battle.field.weatherState, battle.field, null, null);
		battle.eachEvent('WeatherChange', null);

		for (let i = 0; i < 10; i++) {
			battle.makeChoices('move thunderbolt', 'move softboiled');
		}
		assert.equal(battle.field.weather, 'raindance', 'Permanent rain should persist');
	});

	it('should restore permanent weather after temporary weather expires', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['sunnyday', 'softboiled'] }],
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['softboiled'] }],
		]);
		const status = battle.dex.conditions.get('raindance');
		battle.field.weather = status.id;
		battle.field.weatherState = battle.initEffectState({ id: status.id });
		battle.field.weatherState.duration = 0;
		battle.field.pboPermaWeather = status.id;
		battle.singleEvent('FieldStart', status, battle.field.weatherState, battle.field, null, null);
		battle.eachEvent('WeatherChange', null);

		battle.makeChoices('move sunnyday', 'move softboiled');
		assert.equal(battle.field.weather, 'sunnyday', 'Sun should override rain');

		for (let i = 0; i < 5; i++) {
			battle.makeChoices('move softboiled', 'move softboiled');
		}
		assert.equal(battle.field.weather, 'raindance', 'Permanent rain should restore after sun expires');
	});

	it('permanent weather wins over lead ability weather at battle start', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Torkoal', ability: 'drought', moves: ['splash'] }],
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['softboiled'] }],
		]);
		assert.equal(battle.field.weather, 'sunnyday', 'Drought should have set sun');

		const status = battle.dex.conditions.get('raindance');
		battle.field.weather = status.id;
		battle.field.weatherState = battle.initEffectState({ id: status.id });
		battle.field.weatherState.duration = 0;
		battle.field.pboPermaWeather = status.id;
		battle.singleEvent('FieldStart', status, battle.field.weatherState, battle.field, null, null);
		battle.eachEvent('WeatherChange', null);

		assert.equal(battle.field.weather, 'raindance', 'Permanent rain should overwrite Drought sun');

		for (let i = 0; i < 5; i++) {
			battle.makeChoices('move splash', 'move softboiled');
		}
		assert.equal(battle.field.weather, 'raindance', 'Permanent rain should persist');
	});

	it('Air Lock suppresses effective weather but permanent weather field remains', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Rayquaza', ability: 'airlock', moves: ['splash'] }],
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['softboiled'] }],
		]);
		const status = battle.dex.conditions.get('raindance');
		battle.field.weather = status.id;
		battle.field.weatherState = battle.initEffectState({ id: status.id });
		battle.field.weatherState.duration = 0;
		battle.field.pboPermaWeather = status.id;

		assert.equal(battle.field.weather, 'raindance', 'Weather field should still be rain');
		assert.equal(battle.field.effectiveWeather(), '', 'Effective weather suppressed by Air Lock');
	});

	it('should not restore when no permanent weather was set', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['raindance', 'softboiled'] }],
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['softboiled'] }],
		]);
		battle.makeChoices('move raindance', 'move softboiled');
		assert.equal(battle.field.weather, 'raindance');

		for (let i = 0; i < 5; i++) {
			battle.makeChoices('move softboiled', 'move softboiled');
		}
		assert.equal(battle.field.weather, '', 'Weather should clear to none without permanent weather');
	});
});

describe('PBO Permanent Terrain', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should restore permanent terrain after temporary terrain expires', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['grassyterrain', 'softboiled'] }],
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['softboiled'] }],
		]);
		const status = battle.dex.conditions.get('electricterrain');
		battle.field.terrain = status.id;
		battle.field.terrainState = battle.initEffectState({ id: status.id });
		battle.field.terrainState.duration = 0;
		battle.field.pboPermaTerrain = status.id;
		battle.singleEvent('FieldStart', status, battle.field.terrainState, battle.field, null, null);
		battle.eachEvent('TerrainChange', null);

		battle.makeChoices('move grassyterrain', 'move softboiled');
		assert.equal(battle.field.terrain, 'grassyterrain');

		for (let i = 0; i < 5; i++) {
			battle.makeChoices('move softboiled', 'move softboiled');
		}
		assert.equal(battle.field.terrain, 'electricterrain', 'Permanent electric terrain should restore');
	});

	it('should not restore when no permanent terrain was set', () => {
		battle = common.createBattle({ formatid: FORMAT }, [
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['electricterrain', 'softboiled'] }],
			[{ species: 'Blissey', ability: 'naturalcure', moves: ['softboiled'] }],
		]);
		battle.makeChoices('move electricterrain', 'move softboiled');
		for (let i = 0; i < 5; i++) {
			battle.makeChoices('move softboiled', 'move softboiled');
		}
		assert.equal(battle.field.terrain, '', 'Terrain should clear without permanent terrain');
	});
});
