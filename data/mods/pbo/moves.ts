// [PBO] Move overrides for cosmetic event form compatibility.
// Standard Showdown uses exact species.name checks for form-locked moves.
// PBO event forms (H4, C, S, etc.) have different names but are battle-identical
// to their base species, so we relax the checks to use ID prefix matching.

// [PBO] Helper: Dynahax bosses use Max moves natively without Dynamaxing,
// so they lack the 'dynamax' volatile that vanilla Showdown checks.
// This predicate lets Max move secondary effects fire for Dynahax users too.
function canUseMaxEffect(source: {volatiles: Record<string, unknown>; ability: string}): boolean {
	return !!source.volatiles['dynamax'] || source.ability === 'dynahax';
}

export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	// --- Max move secondary effect overrides for Dynahax bosses ---
	maxairstream: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spe: 1}, pokemon);
				}
			},
		},
	},
	maxdarkness: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.foes()) {
					this.boost({spd: -1}, pokemon);
				}
			},
		},
	},
	maxflare: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				this.field.setWeather('sunnyday');
			},
		},
	},
	maxflutterby: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.foes()) {
					this.boost({spa: -1}, pokemon);
				}
			},
		},
	},
	maxgeyser: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				this.field.setWeather('raindance');
			},
		},
	},
	maxhailstorm: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				this.field.setWeather('hail');
			},
		},
	},
	maxknuckle: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({atk: 1}, pokemon);
				}
			},
		},
	},
	maxlightning: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				this.field.setTerrain('electricterrain');
			},
		},
	},
	maxmindstorm: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				this.field.setTerrain('psychicterrain');
			},
		},
	},
	maxooze: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spa: 1}, pokemon);
				}
			},
		},
	},
	maxovergrowth: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				this.field.setTerrain('grassyterrain');
			},
		},
	},
	maxphantasm: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.foes()) {
					this.boost({def: -1}, pokemon);
				}
			},
		},
	},
	maxquake: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({spd: 1}, pokemon);
				}
			},
		},
	},
	maxrockfall: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				this.field.setWeather('sandstorm');
			},
		},
	},
	maxstarfall: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				this.field.setTerrain('mistyterrain');
			},
		},
	},
	maxsteelspike: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.alliesAndSelf()) {
					this.boost({def: 1}, pokemon);
				}
			},
		},
	},
	maxstrike: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.foes()) {
					this.boost({spe: -1}, pokemon);
				}
			},
		},
	},
	maxwyrmwind: {
		inherit: true,
		self: {
			onHit(source) {
				if (!canUseMaxEffect(source)) return;
				for (const pokemon of source.foes()) {
					this.boost({atk: -1}, pokemon);
				}
			},
		},
	},

	// --- Cosmetic event form overrides ---
	hyperspacefury: {
		inherit: true,
		onTry(source) {
			// Accept Hoopa-Unbound and its cosmetic event forms (e.g. Hoopa-Unbound-H4).
			// Vanilla check `source.species.name === 'Hoopa-Unbound'` rejects event forms
			// because their name includes the event suffix.
			if (source.species.id.startsWith('hoopaunbound')) {
				return;
			}
			this.hint("Only a Pokemon whose form is Hoopa Unbound can use this move.");
			if (source.species.id.startsWith('hoopa')) {
				this.attrLastMove('[still]');
				this.add('-fail', source, 'move: Hyperspace Fury', '[forme]');
				return null;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Hyperspace Fury');
			return null;
		},
	},
};
