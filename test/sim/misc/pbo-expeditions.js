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

	// ── Phase 3: Inline effects ──────────────────────────────────────

	describe('pboexswift', () => {
		it("should boost wild Pokemon's Speed by +1 on switch-in", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexswift', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const wildMon = battle.p2.active[0];
			assert.equal(wildMon.boosts.spe, 1, "Wild mon should have +1 Speed boost");
		});

		it("should NOT boost player Pokemon's Speed", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexswift', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const playerMon = battle.p1.active[0];
			assert.equal(playerMon.boosts.spe, 0, "Player mon should NOT have Speed boost");
		});
	});

	describe('pboexresilient', () => {
		it("should boost wild Pokemon's Defense by +1 on switch-in", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexresilient', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const wildMon = battle.p2.active[0];
			assert.equal(wildMon.boosts.def, 1, "Wild mon should have +1 Defense boost");
		});

		it("should NOT boost player Pokemon's Defense", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexresilient', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const playerMon = battle.p1.active[0];
			assert.equal(playerMon.boosts.def, 0, "Player mon should NOT have Defense boost");
		});
	});

	describe('pboexofenfeeblement', () => {
		it("should apply -1 to exactly one stat on wild Pokemon", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofenfeeblement', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const wildMon = battle.p2.active[0];
			const stats = ['atk', 'def', 'spa', 'spd', 'spe'];
			const droppedStats = stats.filter(s => wildMon.boosts[s] === -1);
			const unchangedStats = stats.filter(s => wildMon.boosts[s] === 0);
			assert.equal(droppedStats.length, 1, `Exactly one stat should be -1, got: ${JSON.stringify(wildMon.boosts)}`);
			assert.equal(unchangedStats.length, 4, `Four stats should be unchanged, got: ${JSON.stringify(wildMon.boosts)}`);
		});

		it("should NOT affect player Pokemon stats", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofenfeeblement', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const playerMon = battle.p1.active[0];
			const stats = ['atk', 'def', 'spa', 'spd', 'spe'];
			const allZero = stats.every(s => playerMon.boosts[s] === 0);
			assert(allZero, `Player stats should be unmodified, got: ${JSON.stringify(playerMon.boosts)}`);
		});
	});

	describe('pboexofmist', () => {
		it("should apply -1 Accuracy and -1 Sp. Def to player Pokemon on switch-in", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofmist', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const playerMon = battle.p1.active[0];
			assert.equal(playerMon.boosts.accuracy, -1, "Player mon should have -1 Accuracy");
			assert.equal(playerMon.boosts.spd, -1, "Player mon should have -1 Sp. Def");
		});

		it("should NOT affect wild Pokemon stats", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofmist', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const wildMon = battle.p2.active[0];
			assert.equal(wildMon.boosts.accuracy, 0, "Wild mon should NOT have Accuracy drop");
			assert.equal(wildMon.boosts.spd, 0, "Wild mon should NOT have Sp. Def drop");
		});

		it("should re-apply boosts on second switch-in (no gate)", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofmist', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat', 'uturn']},
				{species: 'Alakazam', ability: 'magicguard', moves: ['psychic']},
			], [
				{species: 'Blissey', ability: 'naturalcure', moves: ['softboiled']},
			]);

			// First mon gets -1/-1 on initial switch
			const firstMon = battle.p1.active[0];
			assert.equal(firstMon.boosts.accuracy, -1);
			assert.equal(firstMon.boosts.spd, -1);

			// Switch to Alakazam — it should also get -1/-1
			battle.makeChoices('switch 2', 'move softboiled');
			const secondMon = battle.p1.active[0];
			assert.equal(secondMon.boosts.accuracy, -1, "Second mon should get -1 Accuracy on switch-in");
			assert.equal(secondMon.boosts.spd, -1, "Second mon should get -1 Sp. Def on switch-in");
		});
	});

	describe('pboexofweakness', () => {
		it("should apply -1 to exactly one stat on player Pokemon", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofweakness', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const playerMon = battle.p1.active[0];
			const stats = ['atk', 'def', 'spa', 'spd', 'spe'];
			const droppedStats = stats.filter(s => playerMon.boosts[s] === -1);
			assert.equal(droppedStats.length, 1, `Exactly one player stat should be -1, got: ${JSON.stringify(playerMon.boosts)}`);
		});

		it("should NOT affect wild Pokemon stats", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofweakness', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const wildMon = battle.p2.active[0];
			const stats = ['atk', 'def', 'spa', 'spd', 'spe'];
			const allZero = stats.every(s => wildMon.boosts[s] === 0);
			assert(allZero, `Wild stats should be unmodified, got: ${JSON.stringify(wildMon.boosts)}`);
		});

		it("should re-apply on second switch-in (no gate)", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofweakness', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat', 'uturn']},
				{species: 'Alakazam', ability: 'magicguard', moves: ['psychic']},
			], [
				{species: 'Blissey', ability: 'naturalcure', moves: ['softboiled']},
			]);

			// Switch to second mon
			battle.makeChoices('switch 2', 'move softboiled');
			const secondMon = battle.p1.active[0];
			const stats = ['atk', 'def', 'spa', 'spd', 'spe'];
			const droppedStats = stats.filter(s => secondMon.boosts[s] === -1);
			assert(droppedStats.length >= 1, `Second mon should get -1 to a stat on switch-in, got: ${JSON.stringify(secondMon.boosts)}`);
		});
	});

	describe('pboexofconfusion', () => {
		it("should confuse player's lead Pokemon on first switch-in", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofconfusion', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const playerMon = battle.p1.active[0];
			assert(playerMon.volatiles['confusion'], "Player's lead should be confused");
		});

		it("should NOT confuse wild Pokemon", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofconfusion', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['tackle']},
			]);

			const wildMon = battle.p2.active[0];
			assert(!wildMon.volatiles['confusion'], "Wild mon should NOT be confused");
		});

		it("should NOT confuse second Pokemon on switch (first-switch gate)", () => {
			battle = createPboBattle('gen9pbowildbattle@@@pboexofconfusion', [
				{species: 'Machamp', ability: 'noguard', moves: ['closecombat']},
				{species: 'Alakazam', ability: 'magicguard', moves: ['psychic']},
			], [
				{species: 'Blissey', ability: 'naturalcure', moves: ['softboiled']},
			]);

			// First mon should be confused
			assert(battle.p1.active[0].volatiles['confusion'], "Lead should be confused");

			// Switch to second mon
			battle.makeChoices('switch 2', 'move softboiled');
			const secondMon = battle.p1.active[0];
			assert(!secondMon.volatiles['confusion'], "Second mon should NOT be confused — gate already fired");
		});
	});
});
