// [PBO] Dynahax — custom Dynamax raid boss ability.
// Ported from AbilityCache.java (lines 1303-1384).
// Suppresses non-move damage, blocks status, blocks specific moves/abilities,
// limits draining to 0 HP, and gastro-acids non-Dynahax foes on entry.

export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	// [PBO] Fix: vanilla onEnd emits |-end|fallenundefined when Kingambit leads
	// with no fainted allies (effectState.fallen is never set by onStart).
	supremeoverlord: {
		inherit: true,
		onEnd(pokemon) {
			if (this.effectState.fallen) {
				this.add('-end', pokemon, `fallen${this.effectState.fallen}`, '[silent]');
			}
		},
	},
	// [PBO] Cursed Body must not disable Dynahax raid boss moves — bosses have
	// tiny Max-move sets and a successful disable can softlock the encounter.
	cursedbody: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (source.volatiles['disable']) return;
			if (source.hasAbility('dynahax')) return;
			if (!move.isMax && !move.flags['futuremove'] && move.id !== 'struggle') {
				if (this.randomChance(3, 10)) {
					source.addVolatile('disable', this.effectState.target);
				}
			}
		},
	},
	conquerorshaki: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.foes()) {
				if (!activated) {
					this.add('-ability', pokemon, "Conqueror's Haki", 'boost');
					activated = true;
				}
				this.boost({atk: -1, spa: -1}, target, pokemon, null, true);
			}
		},
		flags: {
			failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1,
			failskillswap: 1, cantsuppress: 1,
		},
		name: "Conqueror's Haki",
		rating: 5,
		num: -2,
	},
	worldsstrongestcreature: {
		onDamagePriority: -40,
		onDamage(damage, target, source, effect) {
			if ((this.effectState as any).used) return;
			if (target.hp <= 1) return;
			if (damage >= target.hp && effect && effect.effectType === 'Move') {
				(this.effectState as any).used = true;
				this.add('-ability', target, "World's Strongest Creature");
				return target.hp - 1;
			}
		},
		flags: {
			failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1,
			failskillswap: 1, cantsuppress: 1,
		},
		name: "World's Strongest Creature",
		rating: 5,
		num: -3,
	},
	drunkendragon: {
		onAfterMoveSecondary(target, source, move) {
			const state = this.effectState as any;
			if (state.used) return;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			if (target.hp <= target.maxhp / 2) {
				state.used = true;
				this.add('-ability', target, 'Drunken Dragon');
				this.heal(Math.floor(target.maxhp / 4), target, target, this.effect);
				this.boost({atk: 1, spe: 1}, target, target);
			}
		},
		flags: {
			failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1,
			failskillswap: 1, cantsuppress: 1,
		},
		name: "Drunken Dragon",
		rating: 5,
		num: -4,
	},
	dynahax: {
		// Block ALL non-move damage (weather ticks, status ticks, Life Orb, hazards, item damage, etc.)
		// Mirrors: cancelsStatusEffectDamage, cancelsWeatherEffectAffect,
		//          shouldLifeOrbRecoil, shouldTakeItemDamage
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') return false;
		},

		// Block all non-move healing (Grassy Terrain, Leftovers, Aqua Ring, etc.)
		// Mirrors: canPokemonGainHpFromTerrain → false, getModifiedRestorationHpFromItem → 1
		onTryHeal(damage, target, source, effect) {
			if (effect && effect.effectType !== 'Move') return 0;
		},

		// [PBO] Max/G-Max moves used natively have basePower 10 in move data.
		// Boost to 130 (standard G-Max power derived from ~90 BP base moves).
		onBasePower(basePower, attacker, defender, move) {
			if (move.isMax && basePower <= 10) {
				return 130;
			}
		},

		// [PBO] Max moves are hardcoded Physical in move data. Dynahax bosses
		// use them directly (not derived from a base move), so pick the better
		// attacking stat. Uses storedStats directly (base + IVs + EVs + nature + level)
		// so stat stages, abilities, items, burns, etc. do NOT flip the category mid-battle.
		onModifyMove(move, pokemon) {
			if (move.isMax) {
				move.category = pokemon.storedStats.spa > pokemon.storedStats.atk ?
					'Special' : 'Physical';
			}
		},

		// Block self-inflicted confusion (Outrage, Thrash, Petal Dance).
		// Enemy confusion (Confuse Ray, Dynamic Punch) still works.
		// Self-inflicted: source is null (lockedmove onEnd) or source === target.
		onTryAddVolatile(status, target, source) {
			if (status.id === 'confusion' && (!source || source === target)) return null;
		},

		// Immune to all status conditions
		// Mirrors: canAddStatus → always false
		onSetStatus(status, target, source, effect) {
			this.add('-immune', target, '[from] ability: Dynahax');
			return false;
		},

		// Disable moves that bypass onTryHit or should not rely on targeting the boss.
		// Destiny Bond / Grudge / Baton Pass / Power Trick target the user.
		// Guard Split / Power Split / Speed Swap swap stats with the boss and trivialise raids.
		// Dragon Cheer targets an ally. Skill Swap and Bestow are disabled in the picker
		// instead of only failing on use (Bestow still also fails via onTryHit as a
		// catch-all for indirect calls like Metronome).
		// Soak / Magic Powder / Trick-or-Treat / Forest's Curse / Doodle change a target's
		// typing — players cast them on an ALLY (never the boss) to make the ally immune to
		// the boss's attacks, which onTryHit alone can't stop (the boss is not the target).
		// Disabling them in the picker (like Destiny Bond) blocks every target.
		// Imprison / Role Play / Copycat are banned & disabled: Imprison locks the boss out of
		// shared moves, Role Play / Copycat copy abilities/moves to break intended checks. They
		// stay in the onTryHit blocked set too as a catch-all for indirect calls (Metronome).
		// Pattern: same as Imprison's onFoeDisableMove.
		onFoeDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (
					moveSlot.id === 'destinybond' ||
					moveSlot.id === 'grudge' ||
					moveSlot.id === 'batonpass' ||
					moveSlot.id === 'skillswap' ||
					moveSlot.id === 'bestow' ||
					moveSlot.id === 'powertrick' ||
					moveSlot.id === 'dragoncheer' ||
					moveSlot.id === 'guardsplit' ||
					moveSlot.id === 'powersplit' ||
					moveSlot.id === 'speedswap' ||
					moveSlot.id === 'soak' ||
					moveSlot.id === 'magicpowder' ||
					moveSlot.id === 'trickortreat' ||
					moveSlot.id === 'forestscurse' ||
					moveSlot.id === 'doodle' ||
					moveSlot.id === 'imprison' ||
					moveSlot.id === 'roleplay' ||
					moveSlot.id === 'copycat'
				) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},

		// Block specific status moves, trapping moves, and OHKO moves
		// Mirrors: defenderPreventsMoveExecution (DYNAMAX_IGNORE_MOVE_LIST)
		onTryHit(target, source, move) {
			if (target === source) return;
			const blocked = new Set([
				'soak', 'magicpowder', 'trickortreat', 'forestscurse',
				'doodle', 'perishsong', 'torment', 'taunt', 'encore',
				'trick', 'switcheroo', 'bestow', 'entrainment', 'skillswap', 'painsplit',
				'endeavor', 'finalgambit', 'simplebeam', 'destinybond', 'foulplay',
				'bind', 'infestation', 'clamp', 'firespin', 'magmastorm',
				'sandtomb', 'snaptrap', 'thundercage', 'whirlpool', 'wrap',
				'healpulse', 'superfang', 'grudge', 'batonpass', 'leechseed',
				'imprison', 'roleplay', 'copycat',
				// Stat-swap moves target the boss directly. They are disabled in the
				// picker (onFoeDisableMove) for direct use, but must ALSO fail here so
				// indirect calls (Sleep Talk / Assist / Metronome / Copycat) can't swap
				// stats with the boss and trivialise the raid. (Power Trick is self-target
				// and Dragon Cheer is ally-target, so they never reach the boss's onTryHit
				// and stay picker-only — neither manipulates the boss's stats.)
				'guardsplit', 'powersplit', 'speedswap',
			]);
			if (blocked.has(move.id) || move.ohko) {
				this.add('-immune', target, '[from] ability: Dynahax');
				return null;
			}
		},

		// Block foe item theft (Magician, Pickpocket)
		// Mirrors: vetoesAbility(DYNAMAX_IGNORE_ABILITY_LIST) for item-stealing abilities
		onTakeItem(item: object, pokemon: object, source: object) {
			if (source && source !== pokemon) return false;
		},

		// Draining moves heal 0 HP
		// Mirrors: getHpToAbsorb → 1 (we use chainModify(0) which floors to 0)
		onSourceTryHeal(damage, target, source, effect) {
			if (effect?.id === 'drain') return this.chainModify(0);
		},

		// [PBO] Floor the boss's OWN stat drops at -1. Engine-enforced so stat
		// protection no longer depends on the AI rolling Haze/Clear Smog or on the
		// boss even knowing those moves. Only negative deltas are clamped — positive
		// self-boosts from the boss's own Max moves (Max Knuckle atk+1, Max Ooze
		// spa+1, Max Steelspike def+1, etc.) are left untouched. A single drop may
		// still land at -1 (so Intimidate/Sticky Web keep a token effect), but never
		// reaches -2. Mirrors Clear Body's onTryBoost shape but one-sided and floored
		// instead of a hard zero.
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return; // the boss's own boosts bypass
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				const delta = boost[i]!;
				if (delta >= 0) continue; // never touch raises
				const floored = Math.max(target.boosts[i] + delta, -1);
				const allowed = floored - target.boosts[i]; // <= 0
				if (allowed === 0) {
					delete boost[i];
				} else {
					boost[i] = allowed;
				}
				showMsg = true;
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add('-fail', target, 'unboost', '[from] ability: Dynahax', `[of] ${target}`);
			}
		},

		// [PBO] At end of turn, reset any FOE positive stat boosts to 0. Engine-enforced
		// replacement for the AI choosing Haze — players can no longer set up and sweep by
		// blocking the boss's Haze (via Imprison, denying its turn, etc.). Only positive
		// stages are cleared; the player's negative stages (self-inflicted drops, or drops
		// the boss applied via Max Phantasm/Strike) are preserved. Fires per foe via foes(),
		// so doubles raids (a boost on the second player slot) are covered structurally.
		// Runs at the standard end-of-turn residual order (28/2, same as Speed Boost / Moody),
		// so the player still gets one turn of their boost before it is wiped.
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			for (const foe of pokemon.foes()) {
				let cleared = false;
				let i: BoostID;
				for (i in foe.boosts) {
					if (foe.boosts[i] > 0) {
						foe.boosts[i] = 0;
						cleared = true;
					}
				}
				if (cleared) {
					this.add('-clearpositiveboost', foe, pokemon, 'ability: Dynahax');
				}
			}
		},

		// Can't be traced, skill swapped, etc.
		flags: {
			failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1,
			failskillswap: 1, cantsuppress: 1,
		},
		name: "Dynahax",
		rating: 5,
		num: -1, // Custom PBO ability
	},
};
