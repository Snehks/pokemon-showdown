// [PBO] Custom format for PBO battle engine.
// No team validation rules — PBO validates server-side.

export const Formats: FormatList = [
	{section: "PBO"},
	{
		name: "[Gen 9] PBO Standard Battle",
		mod: 'pbo',
		ruleset: ['Cancel Mod', 'HP Percentage Mod'],
	},
	{
		name: "[Gen 9] PBO NPC National Dex",
		mod: 'pbo',
		ruleset: ['Cancel Mod', 'HP Percentage Mod'],
	},
	{
		name: "[Gen 9] PBO PvP Battle",
		mod: 'pbo',
		ruleset: ['Team Preview', 'Cancel Mod', 'HP Percentage Mod'],
	},
];
