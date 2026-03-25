// [PBO] Custom format for PBO battle engine.
// No team validation rules — PBO validates server-side.
// [PBO] Terastal/Z-Move/Dynamax clauses: these gimmicks are disabled in all PBO formats.
// They remain available in Showdown's built-in gen{1-9}randombattle formats (Random Battles).

export const Formats: FormatList = [
	{section: "PBO"},
	{
		name: "[Gen 9] PBO Standard Battle",
		mod: 'pbo',
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO NPC National Dex",
		mod: 'pbo',
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO PvP Battle",
		mod: 'pbo',
		ruleset: ['Team Preview', 'Cancel Mod', 'HP Percentage Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO Wild Battle",
		mod: 'pbo',
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'No Sturdy Wild', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO PvP Battle No Preview",
		mod: 'pbo',
		ruleset: ['Cancel Mod', 'HP Percentage Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
];
