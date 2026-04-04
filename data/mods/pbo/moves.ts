// [PBO] Move overrides for cosmetic event form compatibility.
// Standard Showdown uses exact species.name checks for form-locked moves.
// PBO event forms (H4, C, S, etc.) have different names but are battle-identical
// to their base species, so we relax the checks to use ID prefix matching.

export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
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
