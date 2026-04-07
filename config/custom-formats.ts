// [PBO] Custom format for PBO battle engine.
// No team validation rules — PBO validates server-side.
// [PBO] Terastal/Z-Move/Dynamax clauses: these gimmicks are disabled in all PBO formats.
// They remain available in Showdown's built-in gen{1-9}randombattle formats (Random Battles).
// [PBO] Overflow Stat Mod: prevents 16-bit truncation overflow in nature multiplication.
// Standard Showdown only needs this for Eternatus-Eternamax, but PBO has levels > 100
// which can push high-base-stat Pokemon (e.g. Regirock Def 200 at L120) past the 65535
// threshold when multiplied by a +nature (x1.1). Without this, the stat wraps to 1.

export const Formats: FormatList = [
	{section: "PBO"},
	{
		name: "[Gen 9] PBO Standard Battle",
		mod: 'pbo',
		ruleset: ['Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO NPC National Dex",
		mod: 'pbo',
		ruleset: ['Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO PvP Battle",
		mod: 'pbo',
		ruleset: ['Team Preview', 'Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO Wild Battle",
		mod: 'pbo',
		ruleset: ['Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'No Sturdy Wild', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO PvP Battle No Preview",
		mod: 'pbo',
		ruleset: ['Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO PvP Doubles Battle",
		mod: 'pbo',
		gameType: 'doubles',
		ruleset: ['Team Preview', 'Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO PvP Doubles No Preview",
		mod: 'pbo',
		gameType: 'doubles',
		ruleset: ['Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO Wild Doubles Battle",
		mod: 'pbo',
		gameType: 'doubles',
		ruleset: ['Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'No Sturdy Wild', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
	{
		name: "[Gen 9] PBO Wild Triples Battle",
		mod: 'pbo',
		gameType: 'triples',
		ruleset: ['Sleep Clause Mod', 'Cancel Mod', 'HP Percentage Mod', 'Overflow Stat Mod', 'No Sturdy Wild', 'Terastal Clause', 'Z-Move Clause', 'Dynamax Clause'],
	},
];
