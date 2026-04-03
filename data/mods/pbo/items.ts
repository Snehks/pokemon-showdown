export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	metronome: {
		inherit: true,
		condition: {
			onStart(pokemon) {
				this.effectState.lastMove = '';
				this.effectState.numConsecutive = 0;
				this.effectState.lastMoveSucceeded = false;
			},
			onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (!pokemon.hasItem('metronome')) {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (move.callsMove) return;
				// [PBO] Use internal tracking instead of pokemon.moveLastTurnResult
				// so item-use turns (potions, ethers, etc.) don't break the chain
				if (this.effectState.lastMove === move.id && this.effectState.lastMoveSucceeded) {
					this.effectState.numConsecutive++;
				} else if (pokemon.volatiles['twoturnmove']) {
					if (this.effectState.lastMove !== move.id) {
						this.effectState.numConsecutive = 1;
					} else {
						this.effectState.numConsecutive++;
					}
				} else {
					this.effectState.numConsecutive = 0;
				}
				this.effectState.lastMove = move.id;
			},
			onResidualOrder: 26,
			onResidual(pokemon) {
				// Capture move result before endTurn() wipes moveThisTurnResult.
				// undefined = no move attempted (item used) — preserve previous value.
				if (pokemon.moveThisTurnResult !== undefined) {
					this.effectState.lastMoveSucceeded = pokemon.moveThisTurnResult === true;
				}
			},
			onModifyDamage(damage, source, target, move) {
				const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
				const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
				this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
				return this.chainModify([dmgMod[numConsecutive], 4096]);
			},
		},
	},
};
