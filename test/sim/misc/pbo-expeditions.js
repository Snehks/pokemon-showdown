'use strict';

const assert = require('./../../assert');
const Sim = require('./../../../dist/sim');
const Teams = Sim.Teams;

let battle;

/**
 * Create a PBO battle with the given format and teams.
 * Uses `new Sim.Battle` directly with `formatid` (which passes isTrusted=true)
 * to ensure @@@customRules are properly resolved.
 */
function createPboBattle(formatid, team1, team2, options = {}) {
	const p1Team = Teams.pack(team1);
	const p2Team = Teams.pack(team2);
	const b = new Sim.Battle({
		formatid,
		debug: true,
		seed: options.seed || [1, 2, 3, 4],
	});
	b.setPlayer('p1', {name: 'Player', team: p1Team});
	b.setPlayer('p2', {name: 'Wild', team: p2Team});
	return b;
}

describe('PBO Expedition Rulesets', () => {
	afterEach(() => {
		battle.destroy();
	});

	describe('pboexspectral', () => {
		it("should attach pboevasionboost volatile to p2 pokemon on switch-in", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexspectral', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const wildMon = battle.p2.active[0];
			assert(
				wildMon.volatiles['pboevasionboost'],
				`Wild mon should have pboevasionboost volatile. ` +
				`Volatiles: ${Object.keys(wildMon.volatiles).join(', ') || '(none)'}`
			);
		});

		it("should NOT attach pboevasionboost volatile to p1 pokemon", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexspectral', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const playerMon = battle.p1.active[0];
			assert(!playerMon.volatiles['pboevasionboost'], "Player mon should NOT have pboevasionboost volatile");
		});

		it("should have accuracy modification handler registered on the volatile", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexspectral', [
				{species: 'Alakazam', ability: 'magicguard', moves: ['psychic']},
			], [
				{species: 'Blissey', ability: 'naturalcure', moves: ['softboiled']},
			]);

			const volatile = battle.dex.conditions.get('pboevasionboost');
			assert(volatile.exists, "pboevasionboost condition should exist in the dex");
			assert.equal(volatile.effectType, 'Volatile');
			assert(volatile.onSourceModifyAccuracy, "pboevasionboost should have onSourceModifyAccuracy handler");
			assert.equal(volatile.onSourceModifyAccuracyPriority, -1, "handler should have priority -1");
		});

		it("should not prevent Levitate immunity to Ground moves", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexspectral', [
				{species: 'Machamp', ability: 'noguard', moves: ['earthquake']},
			], [
				{species: 'Gengar', ability: 'levitate', moves: ['shadowball']},
			]);

			const wildGengar = battle.p2.active[0];
			assert(wildGengar.volatiles['pboevasionboost'], "Gengar should have pboevasionboost volatile");

			const hpBefore = wildGengar.hp;
			battle.makeChoices('move earthquake', 'move shadowball');

			// Gengar immune to Earthquake via Levitate — HP unchanged from EQ
			assert.equal(wildGengar.hp, hpBefore, "Gengar HP should be unchanged — Levitate blocks Earthquake");
		});

		it("should not affect battles without the rule", () => {
			battle = createPboBattle('gen9pbowildbattle', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const wildMon = battle.p2.active[0];
			assert(!wildMon.volatiles['pboevasionboost'], "Wild mon should NOT have pboevasionboost without Spectral rule");
		});
	});
});
