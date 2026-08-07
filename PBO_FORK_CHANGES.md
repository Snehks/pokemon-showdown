# PBO Fork Changes — Pokemon Showdown

This documents every change made to the upstream Pokemon Showdown codebase
for PBO integration. When upgrading to a new Showdown version, re-apply
these changes by searching for `[PBO]` comments in the source.

**Base version:** v0.11.10
**Upstream repo:** https://github.com/smogon/pokemon-showdown

---

## Change Summary

| # | File | What | Why |
|---|------|------|-----|
| 1 | `sim/teams.ts` | Extended `PokemonSet` interface | Add `currentHp`, `status`, `statusDuration`, `movePP` fields |
| 2 | `sim/teams.ts` | Extended `pack()` | Write pre-battle state fields to packed string |
| 3 | `sim/teams.ts` | Extended `unpack()` | Parse pre-battle state fields from packed string |
| 4 | `sim/pokemon.ts` | Extended constructor | Apply `currentHp`, `status`, `movePP` during Pokemon init |
| 5 | `data/mods/pbo/scripts.ts` | PBO mod | Always include level in details string (PBO has levels > 100) |
| 6 | `config/custom-formats.ts` | PBO custom format | `[Gen 9] PBO Standard Battle` with no team validation |
| 7 | `sim/side.ts` | Extended `ChosenAction` | Add `useitem` choice type + `bagItemScript`, `bagItemToken`, `bagItemData` fields |
| 8 | `sim/side.ts` | Extended `choose()` | Parse `useitem <target> <script> <actionToken> <data...>` command |
| 9 | `sim/battle-queue.ts` | Extended `resolveAction` | Add `useitem: 7` to action order (before moves) |
| 10 | `sim/battle.ts` | Extended `runAction` | Execute bag item scripts via `case 'useitem'` |
| 11 | `data/mods/pbo/scripts.ts` | Bag item scripts | 11 scripts: potion, revive, full_restore, cure_status, ether, elixir, x_stat, dire_hit, guard_spec, clear_boost, potion_by_portion |
| 12 | `data/mods/pbo/abilities.ts` | Dynahax ability | Custom Dynamax raid boss ability — blocks non-move damage, status, specific moves/abilities, draining |
| 13 | `sim/pokemon.ts` | Skip EV clamp for NPC format | PBO raid bosses use extreme EVs (e.g. 12M HP EV); skip 0-255 clamp when `format.id === 'gen9pbonpcnationaldex'` |
| 14 | `config/custom-formats.ts` | PBO NPC National Dex format | `[Gen 9] PBO NPC National Dex` — NPC battles with unclamped EVs for raid bosses |
| 15 | `sim/side.ts` | `forcepass` choice command | Allows passing a healthy Pokemon's turn (failed flee in wild battles) |
| 16 | `config/custom-formats.ts` | PBO PvP Battle format | `[Gen 9] PBO PvP Battle` with Team Preview rule for PvP battles |
| 17 | `config/custom-formats.ts` | PBO PvP No Preview format | `[Gen 9] PBO PvP Battle No Preview` — PvP without team preview |
| 18 | `sim/side.ts` | `forfeit` choice command | Calls `battle.win(foe)` for instant forfeit |
| 19 | `sim/battle-actions.ts`, `data/mods/pbo/abilities.ts` | Dynahax Max move power | Skip BP zeroing for Dynahax + boost Max/G-Max BP to 130 |
| 20 | `config/custom-formats.ts` | Gimmick clauses | Disable Terastal/Z-Move/Dynamax in non-random PBO formats; random formats intentionally allow Tera |
| 21 | `config/custom-formats.ts` | Overflow Stat Mod | Prevent 16-bit stat overflow for high-level Pokemon with +nature |
| 22 | `data/mods/pbo/scripts.ts` | Christmas form registration | Add missing Clefairy-C and Clefable-C to PBO_EVENT_FORMS |
| 23 | `data/mods/pbo/abilities.ts` | Dynahax healing block | Block all non-move healing (Grassy Terrain, Leftovers, etc.) against Dynahax bosses |
| 24 | `data/mods/pbo/abilities.ts` | Dynahax type-move block | Block type-changing moves (Magic Powder, Trick-or-Treat, Forest's Curse) against Dynahax |
| 25 | `data/mods/pbo/scripts.ts` | Permanent weather/terrain | Restore server-set weather/terrain after temporary effects expire |
| 26 | `data/mods/pbo/abilities.ts` | Dynahax Destiny Bond/Grudge block | Disable Destiny Bond and Grudge via onFoeDisableMove |
| 27 | `data/mods/pbo/abilities.ts` | Dynahax Gastro Acid removal | Remove Gastro Acid suppression of player abilities; fix onTakeItem |
| 28 | `data/mods/pbo/items.ts` | Metronome item fix | Internal tracking prevents bag item turns from breaking Metronome chains |
| 29 | `config/custom-formats.ts` | Sleep Clause Mod | Add Sleep Clause Mod to all PBO format rulesets |
| 30 | `data/mods/pbo/moves.ts` | Hyperspace Fury event forms | Relax species check to allow Hoopa-Unbound event forms (H4, etc.) |
| 31 | `data/mods/pbo/abilities.ts` | Supreme Overlord guard | Guard onEnd against undefined `fallen` when no allies have fainted |
| 32 | `sim/battle.ts` | Overflow Stat Mod 32-bit fix | Use 32-bit arithmetic instead of 16-bit cap for nature stat calculation |
| 33 | `data/mods/pbo/scripts.ts` | Easter E5 event forms | Register 13 Easter E5 cosmetic event forms in PBO_EVENT_FORMS |
| 34 | `config/custom-formats.ts` | PvP Doubles formats | Add PvP Doubles Battle, PvP Doubles No Preview with `gameType: 'doubles'` |
| 35 | `config/custom-formats.ts` | Wild Doubles/Triples formats | Add Wild Doubles Battle (`gameType: 'doubles'`) and Wild Triples Battle (`gameType: 'triples'`) |
| 36 | `data/mods/pbo/moves.ts` | Dynahax Max move secondary effects | Override all 18 Max moves to fire weather/terrain/stat effects for Dynahax (no `dynamax` volatile) |
| 37 | `data/mods/pbo/abilities.ts` | Dynahax Max move category | `onModifyMove` sets Max move category via `storedStats` so boosts don't flip it mid-battle |
| 38 | `data/mods/pbo/abilities.ts` | Dynahax self-confusion immunity | `onTryAddVolatile` blocks self-inflicted confusion (Outrage/Thrash) while allowing enemy confusion |
| 39 | `data/mods/pbo/scripts.ts` | Cosmetic event form registration | `init()` clones ~372 PBO event forms (Halloween/Christmas/Summer/Valentine/Easter) from their base species into the Pokedex |
| 40 | `data/mods/pbo/abilities.ts` | Dynahax Baton Pass block | `onFoeDisableMove` disables Baton Pass against Dynahax bosses (same pattern as Destiny Bond/Grudge) |
| 41 | `config/custom-formats.ts`, `sim/pokemon.ts` | NPC Doubles Battle format | New `gen9pbonpcdoublesbattle` format for NPC trainer double battles + EV clamping exception |
| 42 | `config/custom-formats.ts` | Random Singles/Doubles formats | New `gen9pborandomsinglesbattle` and `gen9pborandomdoublesbattle` formats without Terastal Clause so random battles allow Tera with Showdown-assigned competitive tera types |
| 43 | `data/mods/pbo/abilities.ts` | Dynahax Leech Seed block | Add `leechseed` to `onTryHit` blocked Set so Leech Seed fails on Dynamax raid bosses with `-immune` instead of applying the volatile |
| 44 | `config/custom-formats.ts`, `sim/dex-formats.ts`, `sim/global-types.ts`, `sim/battle.ts`, `sim/side.ts`, `sim/pokemon.ts`, `test/sim/misc/pbo-asymmetric-horde.js` | Asymmetric wild horde format | Add PBO-only `horde` game type support for side-specific active slot counts such as player 1v2 wild battles |
| 45 | `data/mods/pbo/abilities.ts` | Cursed Body skip on Dynahax | Override Cursed Body so its 30% disable roll is skipped when the attacker has the Dynahax ability — prevents Dynamax raid bosses from being softlocked when their tiny Max-move set gets disabled |
| 46 | `config/custom-formats.ts`, `sim/side.ts`, `test/sim/misc/pbo-asymmetric-horde.js` | Wider wild horde matrix | Add PBO wild horde 1v3, 1v4, and 1v5 formats and parse target slots beyond triples |
| 47 | `data/mods/pbo/abilities.ts` | Dynahax exploit setup move block | Disable Skill Swap, Power Trick, and Dragon Cheer for foes while Dynahax bosses are active |
| 48 | `data/mods/pbo/abilities.ts` | Dynahax stat-swap move block | Disable Guard Split, Power Split, and Speed Swap for foes while Dynahax bosses are active (Focus Energy stays enabled) |
| 49 | `data/mods/pbo/scripts.ts` | Summer 2026 S3 event forms | Register Summer 2026 cosmetic forms in PBO_EVENT_FORMS |
| 50 | `data/mods/pbo/abilities.ts` | Dynahax Bestow block | Disable Bestow in the picker (`onFoeDisableMove`) and keep it in the `onTryHit` blocked Set so it fails against Dynahax bosses instead of handing them the foe's held item |
| 51 | `data/mods/pbo/scripts.ts` | Summer 2026 S3 legendary forms | Register 3 more Summer 2026 forms (Latias-S3, Latios-S3, Volcanion-S3) in PBO_EVENT_FORMS |
| 52 | `data/mods/pbo/abilities.ts` | Dynahax type-change & move-copy block | Disable Soak / Magic Powder / Trick-or-Treat / Forest's Curse / Doodle in the picker (players cast them on an ally for a typing immunity, which never targets the boss so onTryHit can't stop it) and ban & disable Imprison / Role Play / Copycat (added to both `onFoeDisableMove` and the `onTryHit` blocked Set) |
| 53 | `data/mods/pbo/abilities.ts` | Dynahax engine-enforced stat protection | **REVERTED by Change 56.** Floored the boss's own stat drops at -1 (`onTryBoost`) and reset all FOE positive boosts to 0 at end of turn (`onResidual`); also added Guard Split / Power Split / Speed Swap to the `onTryHit` blocked Set |
| 54 | `data/mods/pbo/abilities.ts` | One Piece Champion boss abilities | Add XML-assignable Conqueror's Haki, World's Strongest Creature, and Drunken Dragon custom boss abilities |
| 55 | `data/mods/pbo/scripts.ts` | Blaziken-S3 event form | Register missing Blaziken-S3 in the Summer 2026 S3 event-form block |
| 56 | `data/mods/pbo/abilities.ts`, `data/mods/pbo/moves.ts` | Revert Dynahax engine stat protection + hard-block Imprison | Remove Change 53's `onTryBoost` floor, `onResidual` foe-boost wipe, and the Guard Split / Power Split / Speed Swap `onTryHit` entries. Add an `imprison` `onTry` override in `moves.ts` so Imprison fails against a Dynahax boss by **any** route (direct pick, Sleep Talk, Metronome, Assist, Instruct) in single and double battles |
| 57 | `data/mods/pbo/abilities.ts` | Dynahax percentage-damage move block | Add Nature's Madness, Guardian of Alola, and Ruination to the Dynahax `onTryHit` blocked Set so percentage-HP damage fails against raid bosses |

**Total: 57 changes across 14 files.**

---

## Why

PBO is an MMO. Pokemon carry state between battles — a player's Charizard
might enter a wild battle at 50% HP, poisoned, with 3/10 PP on Flamethrower.
Standard Showdown always starts fresh (full HP, no status, max PP). These
changes let us inject pre-battle state via the packed team format so Showdown
simulates from the correct starting point.

---

## Change 1: `PokemonSet` interface (sim/teams.ts)

**Location:** End of `PokemonSet` interface, after `teraType`.

**Added fields:**
```typescript
currentHp?: number;       // Starting HP (absolute, not percentage)
status?: string;          // Starting status: 'brn', 'par', 'slp', 'psn', 'tox', 'frz'
statusDuration?: number;  // Turns remaining for sleep/freeze (0 = use default)
movePP?: number[];        // Current PP per move slot [15, 0, 5, 20]
```

**Backward compatible:** All fields are optional. Standard `PokemonSet` objects
work unchanged.

---

## Change 2: `pack()` function (sim/teams.ts)

**Location:** End of per-Pokemon packing loop, after the happiness/misc section.

**Format extension:**
```
...|happiness,hpType,pokeball,gmax,dmaxlvl,teratype|currentHp|status|statusDuration|movePP
```

The extra `|`-delimited fields are only appended when at least one PBO field
is set. Standard teams pack identically to upstream.

---

## Change 3: `unpack()` function (sim/teams.ts)

**Location:** The happiness/misc parsing section.

**How it works:** After finding the `]` delimiter for the current Pokemon,
the remaining string between `i` and `]` is split on `|`. The first segment
is the standard happiness/misc comma-separated data. Segments 2-5 (if present)
are the PBO fields: `currentHp`, `status`, `statusDuration`, `movePP`.

Standard packed strings have no `|` in this section, so `segments.length === 1`
and PBO fields are simply not set.

---

## Change 4: Pokemon constructor (sim/pokemon.ts)

**Location:** End of constructor, after `this.hp = this.maxhp;`.

**What it does:**
1. If `set.currentHp` is set: override `this.hp` (clamped to maxhp; if 0, mark fainted)
2. If `set.status` is set: apply status + initialize statusState with duration
3. If `set.movePP` is set: override each `baseMoveSlots[k].pp`, then re-copy to `moveSlots`

**Edge cases:**
- `currentHp = 0` → Pokemon starts fainted (faintQueued = true)
- `movePP[k]` is clamped to `maxpp` so it can't exceed the move's maximum
- Missing `movePP` entries leave those move slots at max PP

---

## Change 5: PBO mod (data/mods/pbo/scripts.ts)

**What it does:** Overrides `pokemon.getUpdatedDetails()` to always include the
level in the details string (e.g. `Charizard, L100, M`).

**Why:** Vanilla Showdown omits level when `level === 100`. PBO has levels > 100,
so clients receiving `Charizard, M` can't distinguish L100 from L150. The PBO
mod ensures every details string includes `L<level>`.

**Pattern:** Same override mechanism as `data/mods/gen1/scripts.ts` which
overrides `pokemon.getStat()`.

---

## Change 6: PBO custom format (config/custom-formats.ts)

**What it does:** Defines `[Gen 9] PBO Standard Battle` format (ID:
`gen9pbostandardbattle`) that uses the `pbo` mod.

**Ruleset:** `Cancel Mod`, `HP Percentage Mod` — no team validation rules
since PBO validates teams server-side.

---

## Change 7: `ChosenAction` interface (sim/side.ts)

**Location:** `ChosenAction` interface definition.

**What it does:**
1. Adds `'useitem'` to the `choice` union type
2. Adds three optional fields:
```typescript
bagItemScript?: string;   // Name of the bag item script to execute
bagItemToken?: string;    // Server-generated execution acknowledgement token
bagItemData?: string[];    // Additional data passed to the script
```

**Backward compatible:** Both fields are optional. Existing actions work unchanged.

---

## Change 8: `choose()` method (sim/side.ts)

**Location:** Switch statement in `Side.choose()`, after `case 'default':`.

**What it does:** Parses the `useitem` command format:
```
useitem <targetRef> <scriptName> <actionToken> <data...>
```

Target resolution:
- `p1a` → active Pokemon (slot a) on side p1
- `p1:2` → bench Pokemon at index 2 on side p1

Pushes a `ChosenAction` with `choice: 'useitem'`, the resolved target, script name,
server-generated action token, and item data array. Tokenless actions are rejected.

---

## Change 9: `resolveAction` orders (sim/battle-queue.ts)

**Location:** Orders map in `BattleQueue.resolveAction()`.

**What it does:** Adds `useitem: 7` to the action order map. This places bag item
usage after revival blessing (6) but well before moves (200), matching the mainline
games where bag items are used before any attacks.

---

## Change 10: `runAction` execution (sim/battle.ts)

**Location:** Switch statement in `Battle.runAction()`, before `case 'residual':`.

**What it does:** Executes the bag item script:
1. Looks up `bagItems[action.bagItemScript]` from `this.dex.data.Scripts`
2. Calls `script.use(battle, target, scriptName, data)`
3. After successful completion, emits `|bagitem|<target>|<scriptName>|<actionToken>`
4. Catches and logs errors gracefully

---

## Change 11: Bag item scripts (data/mods/pbo/scripts.ts)

**Location:** `bagItems` record in the PBO mod's `Scripts` export.

**11 scripts ported from Cobblemon's bag item system:**

| Script | Purpose | Data args |
|--------|---------|-----------|
| `potion` | Heal flat HP | `[amount]` |
| `revive` | Revive fainted Pokemon | `[healthRatio]` (0.0-1.0) |
| `full_restore` | Full heal + cure status + cure confusion | none |
| `cure_status` | Cure specific statuses | `[status1, status2, ...]` |
| `ether` | Restore PP for one move | `[moveId, amount?]` |
| `elixir` | Restore PP for all moves | `[amount?]` |
| `x_stat` | Boost a stat | `[stat, stages]` |
| `dire_hit` | Add Focus Energy (crit boost) | none |
| `guard_spec` | Add Mist side condition | none |
| `clear_boost` | Clear all stat boosts | none |
| `potion_by_portion` | Heal by HP ratio, optional confusion | `[ratio, confuse?]` |

---

## Change 12: Dynahax ability (data/mods/pbo/abilities.ts)

**What it does:** Implements the Dynahax ability for Dynamax raid bosses. Ported from
`AbilityCache.java` (lines 1303-1384).

**Key behaviors:**
| Effect | Showdown Event | Description |
|--------|---------------|-------------|
| Block non-move damage | `onDamage` | Weather, status ticks, Life Orb, hazards, item damage — all blocked |
| Block non-move healing | `onTryHeal` | Grassy Terrain, Leftovers, Aqua Ring, Ingrain, etc. — all blocked (prevents players exploiting terrain to heal the boss) |
| Status immunity | `onSetStatus` | Cannot gain any status condition |
| Move blocking | `onTryHit` | Blocks 31 specific moves (trapping, OHKO, status theft, type-changing, etc.) — includes Magic Powder, Trick-or-Treat, Forest's Curse |
| Item theft protection | `onTakeItem` | Blocks foe item theft (Magician, Pickpocket) |
| Drain nullification | `onSourceTryHeal` | Draining moves heal 0 HP |
| Unswappable | `flags` | Can't be traced, skill swapped, entrained, or suppressed |

---

## Change 13: Skip EV clamp for NPC format (sim/pokemon.ts)

**Location:** Pokemon constructor, EV clamping loop (after `for (stat in this.set.evs)`).

**What it does:** When `format.id === 'gen9pbonpcnationaldex'`, the EV upper bound is
`Infinity` instead of `255`. This allows PBO's Dynamax raid bosses to use extreme EVs
(e.g. 12,000,000 HP EV) to achieve the massive HP pools expected by the DynamaxAttackNpc
system, without affecting PvP or wild battles.

**Why:** Standard Showdown clamps EVs to 0-255 per stat. PBO NPCPokemon sets HP EVs
far above 255 to inflate the raid boss's max HP. Without this change, the boss starts
with far too little HP.

---

## Change 14: PBO NPC National Dex format (config/custom-formats.ts)

**What it does:** Defines `[Gen 9] PBO NPC National Dex` format (ID:
`gen9pbonpcnationaldex`) that uses the `pbo` mod.

**Ruleset:** Same as PBO Standard Battle (`Cancel Mod`, `HP Percentage Mod`).

**Why:** NPC battles need a separate format so that the EV clamp bypass (Change 13)
only applies to NPC/raid battles, not to PvP or wild battles.

---

## Change 15: `forcepass` choice command (sim/side.ts)

**Location:** `choose()` switch statement, after `case 'pass'` / `case 'skip'`.

**What it does:** Adds a `forcepass` command that pushes a `pass` action without
checking whether the Pokemon is fainted or commanding. Standard `pass` is rejected
by Showdown for healthy Pokemon in `move` request state.

**Why:** In the main series games, when a flee attempt fails, the player's turn is
consumed — the wild Pokemon attacks while the player does nothing. PBO needs to tell
Showdown to skip the player's action. Standard `pass` is only valid for fainted or
commanding Pokemon, so `forcepass` bypasses that validation.

**Usage from PBO server:** `battle.choose('p1', 'forcepass')` after a failed flee.

---

## Change 16: PBO PvP Battle format (config/custom-formats.ts)

**Location:** `config/custom-formats.ts`, after PBO NPC National Dex entry.

**What it does:** Adds a `[Gen 9] PBO PvP Battle` format (ID: `gen9pbopvpbattle`)
with the `Team Preview` rule. This enables Showdown to emit `teampreview` requests
so players can select their lead Pokemon before a PvP battle starts.

**Ruleset:** `['Team Preview', 'Cancel Mod', 'HP Percentage Mod']`

**Why:** PvP battles need team preview so players can see each other's team and pick
leads. The existing `gen9pbostandardbattle` format lacks Team Preview and is used for
wild/NPC battles where preview isn't needed.

**Usage from PBO server:** Start a PvP battle with `format: 'gen9pbopvpbattle'` to
get the `teampreview` request flow.

---

## Change 17: PBO PvP No Preview format (config/custom-formats.ts)

**Location:** `config/custom-formats.ts`, after PBO PvP Battle entry.

**What it does:** Adds a `[Gen 9] PBO PvP Battle No Preview` format
(ID: `gen9pbopvpbattlenopreview`) without the `Team Preview` rule. Same as
`gen9pbopvpbattle` but skips team preview, going straight to battle.

**Ruleset:** `['Cancel Mod', 'HP Percentage Mod']`

**Why:** Some PvP tiers (e.g., RANDOM) don't need team preview. This provides
a PvP-specific format without preview, keeping PvP and NPC/wild formats separate
for future rule divergence.

**Usage from PBO server:** Start a no-preview PvP battle with
`format: 'gen9pbopvpbattlenopreview'`.

---

## Change 18: `forfeit` choice command (sim/side.ts)

**Location:** `choose()` switch statement, after `case 'forcepass'`.

**What it does:** Adds a `forfeit` command that immediately ends the battle by calling
`this.battle.win(this.foe)`. The forfeiting player's opponent wins instantly.

**Why:** PBO needs a way for players to forfeit mid-battle. Standard Showdown doesn't
expose a simple forfeit command through the choice system.

**Usage from PBO server:** `battle.choose('p1', 'forfeit')` to forfeit as player 1.

---

## Change 19: Dynahax Max move power (sim/battle-actions.ts, data/mods/pbo/abilities.ts)

**Problem:** Dynamax raid bosses have G-Max/Max moves directly in their moveset but never
actually Dynamax in the engine (they're conceptually "always dynamaxed"). Two issues:

1. `battle-actions.ts` forces `basePower = 0` for any Max/G-Max move when the Pokemon
   lacks the `dynamax` volatile
2. G-Max moves have `basePower: 10` in their data — normally the real power is derived
   from the base move during Dynamax transformation, but there's no transformation here

**Fix (two parts):**

1. **`sim/battle-actions.ts`** — Skip the BP zeroing check when the source has the
   Dynahax ability. Non-Dynahax Pokemon using hacked Max moves still get zeroed.

2. **`data/mods/pbo/abilities.ts`** — `onBasePower` handler boosts any Max/G-Max move
   with `basePower <= 10` to 130 (standard G-Max power for ~90 BP base moves).

**Why both:** The `onBasePower` event fires before the zeroing check in `battle-actions.ts`,
so both changes are needed — the ability sets the correct power, and the zeroing bypass
preserves it.

**Scoping:** Only affects Pokemon with the Dynahax ability (raid bosses). No impact on
PvP, wild battles, or standard Dynamax.

---

## Change 20: Gimmick clauses on non-random PBO formats (config/custom-formats.ts)

**What it does:** Adds `Terastal Clause`, `Z-Move Clause`, and `Dynamax Clause` to
the ruleset of non-random PBO custom formats (Standard, NPC, PvP, Wild, PvP No Preview,
and later non-random variants). PBO random formats intentionally omit `Terastal Clause`
so Showdown-assigned Tera types remain usable there, but still keep `Z-Move Clause` and
`Dynamax Clause`.

**Effect:** In non-random PBO formats:
- Terastallization is disabled (`canTerastallize = null` on all Pokemon at battle start)
- Z-Moves are banned (Z-Crystal validation + rule announcement)
- Dynamax is disabled (`dynamaxUsed = true` on all sides at battle start)

**Not affected:** Showdown's built-in `gen{1-9}randombattle` formats are untouched.
PBO random formats introduced in Change 42 intentionally allow Terastallization while
keeping Z-Moves and Dynamax disabled.

**Dynahax compatibility:** Dynamax Clause prevents the Dynamax *action*, but Dynahax
raid bosses never Dynamax — they have G-Max/Max moves directly in their moveset. The
Dynahax ability handles power scaling independently. Confirmed safe by integration tests.

**Why:** PBO restricts Terastallization to Random Battles and keeps Z-Moves/Dynamax
disabled in PBO-owned formats. These mechanics are not part of the standard PBO battle
experience.

---

## Change 21: Overflow Stat Mod on all PBO formats (config/custom-formats.ts)

**What it does:** Adds `Overflow Stat Mod` to the ruleset of all five PBO custom formats.

**Why:** Showdown applies a 16-bit truncation when multiplying a stat by a +nature modifier
(`tr(stat * 110, 16)`). For standard L100 battles this never overflows, but PBO has levels
above 100. A Pokemon with a high base stat, max EVs, and a boosting nature at L120+ can
exceed the 16-bit boundary (65535), causing the stat to wrap around to a tiny value.

**Example:** Regirock (base 200 Def) at L120 with 252 Def EVs, 31 IVs, Impish (+Def)
calculates a pre-nature stat of 597. `597 * 110 = 65670 > 65535`, so the 16-bit truncation
wraps to `65670 - 65536 = 134`, producing a final Defense stat of `134 / 100 = 1`. This
caused Regirock to be OHKOed by any physical move.

**Fix:** `Overflow Stat Mod` caps the pre-nature stat at 595 before multiplication,
preventing the overflow. `595 * 110 = 65450 < 65536` stays safe.

---

## Change 22: Christmas form registration (data/mods/pbo/scripts.ts)

**What it does:** Adds `Clefairy-C` and `Clefable-C` to the `PBO_EVENT_FORMS` array.

**Why:** These two Christmas forms were missing from the event form registry, discovered
by the all-pokemon dex resolution test. Without registration, Showdown couldn't resolve
these forms during battle and would treat them as unknown species.

---

## Change 23: Dynahax healing block (data/mods/pbo/abilities.ts)

**What it does:** Adds an `onTryHeal` handler to the Dynahax ability that blocks all
non-move healing (Grassy Terrain, Leftovers, Aqua Ring, Ingrain, etc.) by returning `0`.

**Why:** Players were exploiting Grassy Terrain to heal the Dynamax boss during community
raid events, ruining the encounter. Mirrors the existing `onDamage` pattern that blocks
non-move damage.

**Pattern:** `if (effect && effect.effectType !== 'Move') return 0;`

---

## Change 24: Dynahax type-changing move block (data/mods/pbo/abilities.ts)

**What it does:** Extends the Dynahax `onTryHit` move blocklist to include type-changing
moves: Magic Powder, Trick-or-Treat, and Forest's Curse.

**Why:** These moves could alter the Dynahax boss's type, breaking encounter balance.
The original blocklist missed them because they target the opponent rather than the user.

---

## Change 25: Permanent weather/terrain (data/mods/pbo/scripts.ts)

**What it does:** Overrides `Field.clearWeather()` and `Field.clearTerrain()` in the PBO
mod to restore permanent weather/terrain when temporary effects expire.

**How it works:** The PBO server sets `pboPermaWeather` / `pboPermaTerrain` on the Field
object at battle start. When a temporary weather/terrain ends (e.g., Rain Dance expires
after 5 turns), the override checks for the permanent field and restores it with
`duration: 0` (infinite).

**Why:** PBO maps can have permanent weather/terrain (e.g., a volcanic route with permanent
sun). Without this, a player using Rain Dance would permanently clear the route's weather
when it expires. The mainline games restore permanent weather after temporary effects end.

---

## Change 26: Dynahax Destiny Bond/Grudge block (data/mods/pbo/abilities.ts)

**What it does:** Adds an `onFoeDisableMove` handler to the Dynahax ability that disables
Destiny Bond and Grudge for all opposing Pokemon.

**Why:** Destiny Bond and Grudge target the user, not the boss, so the existing `onTryHit`
handler never fires for them. `onFoeDisableMove` fires during move selection and prevents
the moves from being chosen at all. Same pattern as Imprison's `onFoeDisableMove`.

---

## Change 27: Dynahax Gastro Acid removal + onTakeItem fix (data/mods/pbo/abilities.ts)

**What it does:** Two changes:
1. **Removed** the `onStart` handler that applied Gastro Acid to all non-Dynahax foes on
   entry. This was suppressing player abilities during Dynahax raids, which was unintended.
2. **Fixed** the `onTakeItem` handler to properly block foe item theft (Magician, Pickpocket)
   by checking `if (source && source !== pokemon) return false;`.

**Why:** The Gastro Acid suppression was a leftover from an early implementation that
matched the Java server's `hasGastroAcidChangeableAbility` check too literally. Player
abilities should work normally in Dynahax raids — only the boss's ability is special.

---

## Change 28: Metronome item fix (data/mods/pbo/items.ts)

**What it does:** Creates a new `data/mods/pbo/items.ts` file that overrides the Metronome
item's condition to use internal state tracking (`effectState.lastMove`,
`effectState.lastMoveSucceeded`) instead of `pokemon.moveLastTurnResult`.

**Why:** Vanilla Showdown's Metronome item checks `pokemon.moveLastTurnResult` to determine
if the consecutive-use chain continues. When PBO players use bag items (potions, ethers),
`moveLastTurnResult` becomes `undefined` because no move was executed that turn. This broke
the Metronome chain even though the player didn't switch moves. The override captures the
move result in `onResidual` before `endTurn()` wipes it, and preserves the previous value
when no move was attempted (item-use turn).

---

## Change 29: Sleep Clause Mod on all PBO formats (config/custom-formats.ts)

**What it does:** Adds `Sleep Clause Mod` to the ruleset of all PBO custom formats
(Standard, NPC, PvP, Wild, PvP No Preview).

**Effect:** Only one opposing Pokemon can be put to sleep at a time. Attempting to sleep
a second Pokemon fails. Self-inflicted sleep (Rest) is exempt.

**Why:** Standard competitive Pokemon rule. Prevents degenerate sleep-spam strategies in
both PvP and wild/NPC battles.

---

## Change 30: Hyperspace Fury event form fix (data/mods/pbo/moves.ts)

**What it does:** Creates a new `data/mods/pbo/moves.ts` file that overrides Hyperspace
Fury's `onTry` check. Instead of `source.species.name === 'Hoopa-Unbound'` (exact match),
it uses `source.species.id.startsWith('hoopaunbound')` (prefix match).

**Why:** Vanilla Showdown rejects Hyperspace Fury for any species name that isn't exactly
`Hoopa-Unbound`. PBO event forms like `Hoopa-Unbound-H4` have different names but are
battle-identical to the base species. The prefix match allows all Hoopa-Unbound cosmetic
variants to use the move.

---

## Change 31: Supreme Overlord guard (data/mods/pbo/abilities.ts)

**What it does:** Overrides Supreme Overlord's `onEnd` handler to check if
`effectState.fallen` is defined before emitting the `|-end|fallen{N}` protocol line.

**Why:** Vanilla Showdown's `onEnd` emits `|-end|fallenundefined` when Kingambit leads
with no fainted allies because `effectState.fallen` is never set by `onStart` (it's only
set when allies faint). This produced malformed protocol output that PBO's battle log
parser couldn't handle.

---

## Change 32: Overflow Stat Mod 32-bit arithmetic (sim/battle.ts)

**What it does:** When `overflowstatmod` rule is active, uses 32-bit arithmetic
(`tr(stat * 110 / 100)`) instead of the previous cap-at-595 approach
(`Math.min(stat, 595)` then `tr(tr(stat * 110, 16) / 100)`).

**Why:** The original Overflow Stat Mod (Change 21) capped the pre-nature stat at 595 to
stay under the 16-bit boundary. This worked but produced slightly wrong final stats for
Pokemon with pre-nature stats between 595 and the actual overflow point. The 32-bit fix
simply skips the 16-bit truncation entirely when the rule is active, producing mathematically
correct results for all stat values.

**Example:** A Pokemon with pre-nature stat 600 and +nature:
- Old: `min(600, 595) = 595`, then `tr(595 * 110, 16) / 100 = 654` (slightly low)
- New: `tr(600 * 110 / 100) = 660` (correct)

---

## Change 33: Easter E5 event forms (data/mods/pbo/scripts.ts)

**What it does:** Registers 13 Easter E5 cosmetic event forms in the `PBO_EVENT_FORMS`
array: Altaria-E5, Arcanine-E5, Breloom-E5, Cinderace-E5, Diancie-E5, Diancie-Mega-E5,
Diggersby-E5, Dragonite-E5, Genesect-E5, Meloetta-E5, Togekiss-E5, Togepi-E5, Togetic-E5.

**Why:** New Easter 2026 event forms added to PBO. Without registration in the Showdown
fork, these forms would be treated as unknown species during battles.

**Note:** Altaria-Mega-E5 was initially included (v34, 14 forms) but removed in v35
(13 forms) because Mega forms require separate handling.

---

## Change 34: PvP Doubles formats (config/custom-formats.ts)

**What it does:** Adds two new PvP doubles format entries:
- `[Gen 9] PBO PvP Doubles Battle` — with Team Preview, `gameType: 'doubles'`
- `[Gen 9] PBO PvP Doubles No Preview` — without Team Preview, `gameType: 'doubles'`

**IDs:** `gen9pbopvpdoublesbattle`, `gen9pbopvpdoublesnopreview`

**Ruleset:** Same as their singles PvP equivalents plus `gameType: 'doubles'`.

**Why:** PBO's doubles PvP challenge system needs dedicated formats with `gameType: 'doubles'`
so Showdown generates proper doubles battle protocol (2 active slots per side, doubles
targeting, etc.).

---

## Change 35: Wild Doubles/Triples formats (config/custom-formats.ts)

**What it does:** Adds two new wild battle format entries:
- `[Gen 9] PBO Wild Doubles Battle` — `gameType: 'doubles'`, includes `No Sturdy Wild`
- `[Gen 9] PBO Wild Triples Battle` — `gameType: 'triples'`, includes `No Sturdy Wild`

**IDs:** `gen9pbowilddoublesbattle`, `gen9pbowildtriplesbattle`

**Why:** PBO's multi-slot wild encounter system needs dedicated formats. `No Sturdy Wild`
prevents wild Pokemon from surviving at 1 HP (Sturdy) in multi-wild encounters. Triples
format exists for the triple wild encounter system.

---

## Change 36: Dynahax Max move secondary effects (data/mods/pbo/moves.ts)

**What it does:** Overrides all 18 Max moves' `self.onHit` to use `canUseMaxEffect(source)`
which accepts either the `dynamax` volatile OR the `dynahax` ability.

**Why:** Vanilla Showdown gates all Max move secondary effects (weather, terrain, stat
changes) behind `if (!source.volatiles['dynamax']) return;`. Dynahax bosses use Max moves
natively without Dynamaxing, so they lack the volatile. Without this fix, Max Flare doesn't
set sun, Max Geyser doesn't set rain, Max Knuckle doesn't boost Atk, etc.

**Moves overridden:** maxairstream, maxdarkness, maxflare, maxflutterby, maxgeyser,
maxhailstorm, maxknuckle, maxlightning, maxmindstorm, maxooze, maxovergrowth, maxphantasm,
maxquake, maxrockfall, maxstarfall, maxsteelspike, maxstrike, maxwyrmwind.

---

## Change 37: Dynahax Max move category (data/mods/pbo/abilities.ts)

**What it does:** Adds `onModifyMove` to Dynahax ability. When the move `isMax`, sets
`move.category` to `'Special'` if `pokemon.storedStats.spa > pokemon.storedStats.atk`,
`'Physical'` otherwise. Uses `storedStats` directly (base + IVs + EVs + nature + level)
rather than live stats, so Calm Mind / Swords Dance / items / burns / abilities do NOT
flip the category mid-battle.

**Why:** Max moves are hardcoded `category: "Physical"` in move data. Normally this doesn't
matter because the category is inherited from the base move during Dynamax. But Dynahax bosses
use Max moves directly (not derived from a base move), so a special attacker like Volcarona
(485 SpA vs 234 Atk) would hit with its weaker stat. Using `storedStats` (instead of
`pokemon.getStat('spa'/'atk', false, true)` as in the original implementation) prevents
stat-stage boosts from flipping the category after the boss uses a setup move.

---

## Change 38: Dynahax self-confusion immunity (data/mods/pbo/abilities.ts)

**What it does:** Adds `onTryAddVolatile` that blocks confusion when `source` is null or
`source === target` (self-inflicted).

**Why:** Outrage, Thrash, and Petal Dance apply confusion to the user when the lockedmove
ends. Dynahax bosses should be immune to this self-punishment since they're raid bosses.
Enemy confusion (Confuse Ray, Dynamic Punch, etc.) still works — only self-inflicted
confusion is blocked.

---

## Change 39: Cosmetic event form registration (data/mods/pbo/scripts.ts)

**What it does:** Adds a `Scripts.init()` handler (~400 lines in `data/mods/pbo/scripts.ts`)
that iterates `PBO_EVENT_FORMS` and clones each entry as a Pokedex entry. Each event form
inherits all battle-relevant properties from its base species (stats, types, abilities,
`canMegaEvo`, `canGigantamax`, `battleOnly`, etc.) and only overrides identity fields
(`name`, `forme`, `baseSpecies`). Form lists (`otherFormes`, `cosmeticFormes`, `formeOrder`)
and evolution chains (`evos`, `prevo`) are cleared so cosmetic forms don't accidentally
inherit sub-form trees.

**Why:** PBO has ~372 cosmetic event forms (Halloween / Christmas / Summer / Valentine /
Easter skins). Without this `init()` clone, Showdown doesn't know the IDs exist and treats
them as unknown species when the PBO server packs a team with a skinned Pokemon. Changes 22
and 33 document individual form additions to the `PBO_EVENT_FORMS` array, but the underlying
registration mechanism was never backfilled. Original commit: `24cb4e26d` (Mar 2, 2026).

---

## Change 40: Dynahax Baton Pass block (data/mods/pbo/abilities.ts)

**What it does:** Extends the `onFoeDisableMove` handler (from Change 26) to also disable
Baton Pass for all opposing Pokemon. Also adds `batonpass` to the `onTryHit` blocked Set
for consistency with how `destinybond` and `grudge` are listed in both places.

**Why:** Baton Pass targets the user (`target: "self"`, `selfSwitch: 'copyvolatile'`),
so the Dynahax boss's `onTryHit` never fires for it — same blind spot as Destiny Bond/Grudge.
Without this block, a player could Baton Pass out of a Dynahax raid and escape with
boosts/volatiles intact, trivializing the encounter. Same fix pattern as Change 26.

---

## Change 41: NPC Doubles Battle format (config/custom-formats.ts, sim/pokemon.ts)

**What it does:** Adds a new `[Gen 9] PBO NPC Doubles Battle` format
(`gen9pbonpcdoublesbattle`) for NPC trainer double battles. Uses `gameType: 'doubles'`
with the same ruleset as NPC singles (no team preview, standard PBO clauses). Also
extends the EV clamping exception in `sim/pokemon.ts` to include the new format ID,
so Dynamax raid bosses with extreme EVs work correctly in NPC doubles.

**Why:** PBO is adding NPC double battles (trainers with 2 active pokemon). A dedicated
format keeps NPC-specific rules (no preview, NPC clauses) separate from PvP doubles.

---

## Change 42: Random Singles/Doubles formats (config/custom-formats.ts)

**What it does:** Adds two new PBO formats for random battles:

- `gen9pborandomsinglesbattle` — `[Gen 9] PBO Random Singles Battle`
- `gen9pborandomdoublesbattle` — `[Gen 9] PBO Random Doubles Battle` (`gameType: 'doubles'`)

Both rulesets drop `Terastal Clause` (which would otherwise set
`pokemon.canTerastallize = null` at battle start) but keep `Z-Move Clause` and
`Dynamax Clause` active in line with all other PBO formats. Other rules mirror the
existing PvP no-preview variants: `Sleep Clause Mod`, `Cancel Mod`,
`HP Percentage Mod`, `Overflow Stat Mod`. No `Team Preview`.

**Why:** PBO's random battle mode uses Showdown's built-in `gen9randombattle` /
`gen9randomdoublesbattle` team generators, which assign each Pokemon a
competitive `teraType` (e.g. Landorus-Therian Tera Flying) baked into the random
set. Before these formats, every random battle was wrapped in
`gen9pbopvpbattlenopreview` or `gen9pbopvpdoublesnopreview`, both of which carry
Terastal Clause — so the Tera button was always disabled on the client even
when the set declared a tera type. Dedicated random formats let that value reach
`pokemon.canTerastallize` as a usable string while keeping Z-Move / Dynamax
locked (gen 9 random sets don't configure those gimmicks).

Non-random PvP, wild, and NPC battles continue to use the clause-locked formats.
Server-side routing (`ShowdownPvpBattle.kt`) selects the new formats when the
tier is `BattleTier.RANDOM`.

---

## Change 43: Dynahax Leech Seed block (data/mods/pbo/abilities.ts)

**What it does:** Adds `leechseed` to the `onTryHit` blocked Set in the Dynahax
ability so Leech Seed fails on Dynamax raid bosses with `-immune` text instead
of applying the `leechseed` volatile.

**Why:** Vanilla Leech Seed only has a Grass-type immunity check
(`data/moves.ts:onTryImmunity`), and Dynahax's existing protections did not
cover it: `onSetStatus` only blocks non-volatile status (burn/poison/sleep),
and `onTryAddVolatile` only blocks self-confusion. Leech Seed sets
`volatileStatus: 'leechseed'`, so it slipped through both hooks. The Java
legacy ability had a catch-all `canAddStatus → false`
(`AbilityCache.java:1335`) that blanket-blocked volatiles — the TS port
replaced it with the more granular hooks and missed Leech Seed. Affects
both NPC singles (`gen9pbonpcnationaldex`) and NPC doubles
(`gen9pbonpcdoublesbattle`) raid formats. Discord bug 1497588614698242122.

**Tests:** `test/sim/abilities/dynahax-moves.js` — `should block Leech Seed
(singles)` and `should block Leech Seed (doubles)`.

---

## Change 44: Asymmetric wild horde format (config/custom-formats.ts, sim/dex-formats.ts, sim/global-types.ts, sim/battle.ts, sim/side.ts, sim/pokemon.ts)

**What it does:** Adds a PBO-only horde battle shape for wild battles where the
two sides do not have the same number of active slots. The first supported
format is:

- `gen9pbowildhorde1v2` — `[Gen 9] PBO Wild Horde 1v2`

The format uses `gameType: 'horde'` and declares `activeSlotsPerSide: [1, 2]`.
The engine still keeps `activePerHalf` as the maximum side width so shared
field-position math continues to work, but `Side` initialization uses the
per-side slot count for horde battles. Target validation and adjacency checks
then treat opposing horde slots as reachable without pretending the player has
an empty second active slot.

**Files changed:**

- `config/custom-formats.ts` — declares the `gen9pbowildhorde1v2` format.
- `sim/dex-formats.ts` — adds optional `activeSlotsPerSide?: [number, number]`.
- `sim/global-types.ts` — adds `horde` to `GameType`.
- `sim/battle.ts` — derives `activePerHalf` from the widest side and adds horde
  target validation, including a guard for invalid target slots.
- `sim/side.ts` — creates each side's active array from `activeSlotsPerSide`
  when `gameType === 'horde'`.
- `sim/pokemon.ts` — treats opposing horde slots as adjacent for targetability.
- `test/sim/misc/pbo-asymmetric-horde.js` — covers 1v2 slot shape, targeting,
  wild-side actions, battle end after both wild Pokemon faint, and invalid
  target rejection.

**Why:** Showdown's standard battle shapes are symmetric: singles is 1v1,
doubles is 2v2, triples is 3v3, etc. PBO wild hordes need battles such as one
player Pokemon versus two wild Pokemon. Modeling that as doubles with a fainted
or dummy player slot creates incorrect client requests and extra edge cases.
A dedicated PBO horde game type lets the simulator represent the real battle
shape directly while keeping the change gated to PBO formats.

**Tests:** `test/sim/misc/pbo-asymmetric-horde.js` — `should run a 1v2 wild
horde with independent wild slots` and `should reject invalid horde target
locations without throwing engine errors`.

**Original commits:** `91a7620ed` and `950b491f9`.

---

## Change 45: Cursed Body skip on Dynahax (data/mods/pbo/abilities.ts)

**What it does:** Overrides the vanilla `cursedbody` ability with `inherit: true`
so the only handler that changes is `onDamagingHit`. The override mirrors the
vanilla logic exactly (skip if attacker is already disabled, skip Max moves,
skip future moves, skip Struggle, then `randomChance(3, 10)` to add the
`disable` volatile) but adds an early `return` when the attacker has the
Dynahax ability:

```ts
if (source.hasAbility('dynahax')) return;
```

`flags`, `name`, `rating`, and `num` come from the vanilla definition via
`inherit: true`.

**Why:** Dynamax raid bosses use the PBO-only Dynahax ability and their
moveset is just a handful of Max moves. A successful Cursed Body disable on
the boss's only viable attack can softlock or stall the encounter from the
party's perspective. Dynahax already blocks a long list of disruptive effects
(Disable, Encore, Taunt, Torment, Leech Seed, Destiny Bond, Grudge, Baton
Pass, item theft, drain healing, etc.); skipping Cursed Body's disable roll
fits squarely in that defensive blanket. This only affects raid encounters —
in PvP, wild, NPC, and random battles no one has Dynahax, so vanilla Cursed
Body behavior is unchanged.

**Backward compatible:** No new fields, no schema change, no protocol change.
Only a behavioral early-return for one ability against one ability.

---

## Change 46: Wider wild horde matrix (config/custom-formats.ts, sim/side.ts)

**What it does:** Extends the PBO horde format family from 1v2 to:

- `gen9pbowildhorde1v3` — `[Gen 9] PBO Wild Horde 1v3`
- `gen9pbowildhorde1v4` — `[Gen 9] PBO Wild Horde 1v4`
- `gen9pbowildhorde1v5` — `[Gen 9] PBO Wild Horde 1v5`

Each format uses `gameType: 'horde'` and an `activeSlotsPerSide` shape of
`[1, N]`. Move-choice target parsing now accepts single-digit target locations
up to 9 and relies on the existing horde target validation to reject slots that
do not exist for the current battle.

**Why:** PBO's first asymmetric wild battle only covered 1v2. The server now
needs the same real side-count model for larger solo hordes, and target slots
4 and 5 must parse as locations rather than being folded into the move id.

**Tests:** `test/sim/misc/pbo-asymmetric-horde.js` covers 1v3, 1v4, and 1v5
target legality, spread moves, invalid targets, and win conditions.

---

## Change 47: Dynahax exploit setup move block (data/mods/pbo/abilities.ts)

**What it does:** Extends Dynahax's `onFoeDisableMove` protection to disable:

- `skillswap`
- `powertrick`
- `dragoncheer`

Skill Swap was already blocked when used directly into a Dynahax boss, but it
still appeared as selectable. Power Trick targets the user and Dragon Cheer
targets an ally, so neither move reaches the boss's `onTryHit` handler.

**Why:** These setup moves let players stack or transfer crit/stat advantages
around Dynamax raid bosses in doubles. In particular, Dragon Cheer can create
Focus Energy-style crit pressure without switching, which can trivialize
Dynahax boss damage races. Focus Energy itself is intentionally left enabled
so players retain a single-Pokemon crit setup option.

**Tests:** `test/sim/abilities/dynahax-moves.js` now verifies Skill Swap,
Power Trick, and Dragon Cheer are disabled in the `gen9pbonpcdoublesbattle`
format while Dynahax bosses are active.

---

## Change 48: Dynahax stat-swap move block (data/mods/pbo/abilities.ts)

**What it does:** Extends Dynahax's `onFoeDisableMove` protection further to disable:

- `guardsplit`
- `powersplit`
- `speedswap`

These moves don't go through `onTryHit` cleanly because they target the boss
to swap stats rather than apply a status or do damage, so they previously
slipped past Dynahax's other protections.

**Why:** Guard Split / Power Split / Speed Swap let a player average or steal
a raid boss's stats — a frail Smeargle equalising HP/Defenses with a Dynamax
boss trivialises raid damage races and breaks the boss's intended difficulty
curve. Focus Energy is **intentionally not on this list** — single-Pokemon
crit setup is a fair pressure tool against raid bosses (see Change 47 notes).

**Tests:** `test/sim/abilities/dynahax-moves.js` extends the exploit-setup
loop to cover `guardsplit`, `powersplit`, `speedswap` and adds an explicit
"Focus Energy still works" case so the allowed/blocked split is regression-tested.

---

## Change 49: Summer 2026 S3 event forms (data/mods/pbo/scripts.ts)

**What it does:** Registers 29 Summer 2026 cosmetic event forms (suffix `S3`) in
the `PBO_EVENT_FORMS` array — 25 base forms (Froakie-S3, Frogadier-S3, Greninja-S3,
Whimsicott-S3, Sceptile-S3, Samurott-Hisui-S3, Gliscor-S3, Flareon-S3, Venusaur-S3,
Grimmsnarl-S3, Salamence-S3, Terrakion-S3, Pecharunt-S3, Barbaracle-S3, Zangoose-S3,
Scyther-S3, Lucario-S3, Infernape-S3, Blaziken-S3, Gyarados-S3, Blastoise-S3, Jolteon-S3,
Vaporeon-S3, Glaceon-S3, Crawdaunt-S3) and 4 Mega forms (Gyarados-Mega-S3,
Venusaur-Mega-S3, Salamence-Mega-S3, Sceptile-Mega-S3). Each entry is a
`[eventId, baseId, displayName, "S3"]` tuple consumed by the `init()` handler
(Change 39), which clones the base species' battle data under the new id.

**Why:** The PBO Summer 2026 event ships these skinned variants. Without
registration in the fork, the server packs a team referencing e.g. `greninjas3`
and Showdown rejects it as an unknown species. The Mega-S3 forms clone the base
mega species so a summer form holding its Mega Stone evolves into the matching
summer mega.

**Tests:** Verified post-build that all 29 forms resolve via
`Dex.mod('pbo').species.get(id)` with stats/types/abilities inherited from the
base species (e.g. `gyaradosmegas3` → Water/Dark, Atk 155), and that every base
id exists in the vanilla Pokedex so `init()` skips none.

---

## Change 50: Dynahax Bestow block (data/mods/pbo/abilities.ts)

**What it does:** Disables Bestow against Dynahax raid bosses via two
complementary hooks — the same belt-and-braces pattern already used for Skill
Swap:

- `onFoeDisableMove` greys Bestow out in the foe's move picker so it can never
  be selected against a boss.
- `onTryHit` keeps `bestow` in the blocked Set so any indirect call (e.g.
  Metronome) still fails with `-immune` text and never resolves against the boss.

**Why:** Bestow (`target: "normal"`) hands the *user's* held item to the
target via `onHit`. Against a Dynamax raid boss this would force a held item
onto the boss — e.g. handing it a Choice/berry/utility item it was never
intended to carry — which can alter the boss's behaviour and trivialise the
encounter. Bestow's item transfer slipped past Dynahax's existing item
protection: `onTakeItem` only blocks foes *stealing* the boss's item
(Magician/Pickpocket/Trick taking), not a foe *giving* one. Disabling it in
the picker matches the Destiny Bond / Baton Pass UX (no wasted turn), and the
`onTryHit` guard mirrors how Trick / Switcheroo are handled as a robust
catch-all. Affects both NPC singles (`gen9pbonpcnationaldex`) and NPC doubles
(`gen9pbonpcdoublesbattle`) raid formats.

**Tests:** `test/sim/abilities/dynahax-moves.js` — `should disable Bestow in
the picker for foes` asserts the move's `disabled` flag, that the choice is
rejected, and that neither side's held item moves.

---

## Change 51: Summer 2026 S3 legendary forms (data/mods/pbo/scripts.ts)

**What it does:** Registers 3 additional Summer 2026 cosmetic event forms (suffix
`S3`) in the `PBO_EVENT_FORMS` array — Latias-S3 (`latiass3`), Latios-S3
(`latioss3`), and Volcanion-S3 (`volcanions3`). Each is a
`[eventId, baseId, displayName, "S3"]` tuple consumed by the `init()` handler
(Change 39), which clones the base species' battle data under the new id. These
extend Change 49's batch — these three legendaries were in prior summer events
(they already have `-S` and `-S2` forms) but were missing from the initial S3
registration. Suffix `S3` = Summer event #3, applied uniformly to every form for
the event (not a per-species serial).

**Why:** The PBO Summer 2026 event ships these skinned legendary variants
(Latios/Latias exchange NPCs, Volcanion ladder reward). Without registration in
the fork, the server packs a team referencing e.g. `latiass3` and Showdown
rejects it as an unknown species. No `megas.csv` row or `otherFormes` mega-link
is added — matching the most-recent `-S2` precedent for these species, so the
S3 forms do not mega-evolve in battle.

**Tests:** Verified post-build that all 3 forms resolve via the compiled
`dist/data/mods/pbo/scripts.js` `PBO_EVENT_FORMS` (31 total `S3` tuples = 28 from
Change 49 + 3), with every base id (`latias`, `latios`, `volcanion`) present in
the vanilla Pokedex so `init()` clones rather than skips.

---

## Change 52: Dynahax type-change & move-copy block (data/mods/pbo/abilities.ts)

**What it does:** Extends Dynahax's foe-move protection in two ways:

- Adds `soak`, `magicpowder`, `trickortreat`, `forestscurse`, and `doodle` to
  `onFoeDisableMove` so they are greyed out in the foe's picker (like Destiny
  Bond). They were already in the `onTryHit` blocked Set, but that only fires
  when the move targets the boss.
- Adds `imprison`, `roleplay`, and `copycat` to **both** `onFoeDisableMove` and
  the `onTryHit` blocked Set ("banned & disabled") — disabled in the picker, with
  the `onTryHit` entry as a catch-all for indirect calls (e.g. Metronome).

**Why:** The type-change moves were exploitable because Dynamax raids are
multi-player: a player would cast Soak / Trick-or-Treat / Forest's Curse / Magic
Powder / Doodle on a **teammate** (or themselves), never on the boss, to flip the
ally's typing and make it 100% immune to the boss's attacks. Because the boss was
never the target, the `onTryHit` block (which keys off the boss being the target)
never fired. Disabling them in the picker stops the move from being selected
against any target. Imprison locks the boss out of moves the user also carries;
Role Play / Copycat copy abilities/last-used moves to sidestep intended raid
checks — all three are banned outright.

**Tests:** `test/sim/abilities/dynahax-moves.js` replaces the old "block on use"
type-change cases with a picker loop asserting `disabled === true` for all eight
moves (`soak`, `magicpowder`, `trickortreat`, `forestscurse`, `doodle`,
`imprison`, `roleplay`, `copycat`) while a Dynahax boss is active.

---

## Change 53: Dynahax engine-enforced stat protection (data/mods/pbo/abilities.ts)

> **⚠️ REVERTED by Change 56.** The `onTryBoost` floor, the `onResidual`
> foe-boost wipe, and the Guard Split / Power Split / Speed Swap `onTryHit`
> entries described below were removed. Boss stat drops are no longer floored at
> `-1`, foe positive boosts are no longer wiped end of turn, and the stat-swap
> moves are only disabled in the picker again (not blocked on indirect use). The
> section is kept for history. See Change 56.

**What it does:** Moves Dynamax raid-boss stat protection out of the AI and into
the engine. Three additions to the `dynahax` ability:

- **`onTryBoost`** — floors the boss's OWN stat drops at `-1`. Only negative
  deltas are clamped (`target.boosts[i] + delta >= -1`); positive self-boosts from
  the boss's own Max moves (Max Knuckle `atk+1`, Max Ooze `spa+1`, Max Steelspike
  `def+1`, etc.) are left untouched. A single drop may still land at `-1` (so
  Intimidate / Sticky Web keep a token effect), but never reaches `-2`. Mirrors
  Clear Body's `onTryBoost` shape but one-sided and floored instead of a hard zero.
- **`onResidual`** (order 28 / sub 2, same as Speed Boost / Moody) — at end of
  turn, resets every FOE's positive stat stages to `0` via `pokemon.foes()`,
  emitting `-clearpositiveboost` per affected foe. The player's negative stages
  (self-inflicted drops, or drops the boss applied via Max Phantasm/Strike) are
  preserved. Fires per foe, so doubles raids (a boost on the second player slot)
  are covered structurally.
- **`onTryHit` blocked Set** — adds `guardsplit`, `powersplit`, `speedswap`. These
  target the boss directly and were already disabled in the picker
  (`onFoeDisableMove`), but indirect calls (Sleep Talk / Assist / Metronome) could
  still swap stats with the boss. (Power Trick is self-target and Dragon Cheer is
  ally-target, so they never reach the boss's `onTryHit` and stay picker-only —
  neither manipulates the boss's stats.)

**Why:** Stat protection previously relied on the server-side
`HazeOrClearSmogWrapperAIGenerator` AI *choosing* Haze/Clear Smog — a probabilistic
(25%/75%) roll that only worked if the boss actually knew one of those moves with
PP. Players found exploits that prevented the boss from ever using Haze (Imprison,
denying its turn, calling banned moves indirectly), leaving boss/foe stats uncapped
at the standard ±6 and letting a buffed player sweep the raid. Engine enforcement
removes the moveset dependency and the RNG. The end-of-turn timing (rather than
immediate) lets a player see their boost land and act once with it before it is
wiped — matching the intended "the boss hazes your boosts each turn" behavior.

The AI wrapper is intentionally KEPT as a dormant redundant safety net (its trigger
conditions are now almost never met); it is not removed in this change.

**Tests:** `test/sim/abilities/dynahax-boosts.js` — boss drop floored at `-1`
(Charm/Growl); single Intimidate still `-1` (regression); foe Swords Dance / Belly
Drum cleared at end of turn; foe boost cleared even when called via Sleep Talk;
boss's own Max Knuckle `atk+1` preserved; foe negative boost (Curse `spe-1`)
preserved while positives cleared; doubles boost on the second slot cleared; Guard
Split called indirectly via Sleep Talk fails (boss def unchanged).

---

## Change 54: One Piece Champion boss abilities (data/mods/pbo/abilities.ts)

Adds three PBO-only custom abilities for the One Piece Champion boss encounter:

- `Conqueror's Haki`: on entry, lowers all active opposing Pokemon's Attack and Special Attack by one stage.
- `World's Strongest Creature`: once per battle, survives direct move damage that would KO the holder and leaves it at 1 HP.
- `Drunken Dragon`: once per battle after direct damage leaves the holder at or below 50% HP, heals 25% max HP and raises Attack and Speed by one stage.

These are assigned through NPC XML with the existing `ability="..."` Pokemon attribute.

---

## Change 55: Blaziken-S3 event form registration (data/mods/pbo/scripts.ts)

Adds the missing `Blaziken-S3` Summer 2026 cosmetic form to `PBO_EVENT_FORMS`
as `["blazikens3", "blaziken", "Blaziken-S3", "S3"]`.

**Why:** PBO data contains `Blaziken-S3` (`showdownId=blazikens3`, pokedex 1887).
Without this fork registration, `ShowdownEventFormRegistrationTest` fails and battles
that pack the form cannot resolve the species in `Dex.mod('pbo')`.

---

## Change 56: Revert Dynahax engine stat protection + hard-block Imprison (data/mods/pbo/abilities.ts, data/mods/pbo/moves.ts)

**What it does:** Two parts.

1. **Reverts Change 53.** Removes the three additions Change 53 made to the
   `dynahax` ability:
   - the `onTryBoost` hook that floored the boss's own stat drops at `-1`,
   - the `onResidual` (order 28 / sub 2) hook that wiped every foe's positive
     stat stages at end of turn (and its `-clearpositiveboost` message),
   - the `guardsplit` / `powersplit` / `speedswap` entries in the `onTryHit`
     blocked Set.

   After the revert, boss stat drops behave like vanilla (Charm takes the boss to
   `-2`, Intimidate stacks normally), foe boosts persist between turns, and Guard
   Split / Power Split / Speed Swap are once again **only** disabled in the picker
   via `onFoeDisableMove` (indirect calls succeed again). Stat protection reverts
   to relying on the server-side `HazeOrClearSmogWrapperAIGenerator` AI. The test
   file `test/sim/abilities/dynahax-boosts.js` (added by Change 53) is deleted.

2. **Hard-blocks Imprison against a Dynahax boss by any route.** Adds an
   `imprison` `onTry` override in `moves.ts`: if any foe has the `dynahax`
   ability, the move fails (`-fail` + `[still]`). Imprison targets the **user**
   (`target: "self"`), so it never reaches the boss's `onTryHit`, and the existing
   `onFoeDisableMove` entry only greys it out in the picker — it does not stop
   indirect casts (Sleep Talk / Metronome / Assist / Instruct). `onTry` fires on
   the shared `useMove` path for every invocation route, so Imprison can never
   apply against a Dynahax boss in any single or double battle. Against normal
   (non-Dynahax) foes, Imprison behaves exactly as vanilla.

**Why:** The Change 53 engine-enforced stat protection was reverted at the owner's
request. Imprison remains a raid-softlock hazard (it can lock the boss out of its
tiny Max-move set, and it survives indirect calls the picker-disable misses), so it
is now blocked at the move level as the single source of truth for "Imprison can't
be used against a Dynahax boss."

**Tests:** `test/sim/moves/dynahax-imprison.js` — Imprison disabled in the picker
(singles + doubles); Imprison fails when called indirectly via Sleep Talk (singles
+ doubles); Imprison still works against a non-Dynahax foe. The reverted
`test/sim/abilities/dynahax-boosts.js` is removed.

---

## Change 57: Dynahax percentage-damage move block (data/mods/pbo/abilities.ts)

Adds `naturesmadness`, `guardianofalola`, and `ruination` to the Dynahax
`onTryHit` blocked Set alongside `superfang`. These moves deal fixed percentage
HP damage and would otherwise bypass normal raid-boss damage expectations.

**Tests:** `test/sim/abilities/dynahax-moves.js` now verifies Nature's Madness,
Guardian of Alola, and Ruination leave a Dynahax boss at full HP.

---

## Change 58: Dynahax indirect banned-move bypass (data/mods/pbo/abilities.ts, data/mods/pbo/moves.ts)

Discord report: "You can still use Baton Pass during the Dynamax event, and
there's a chance to trigger banned moves like Power Split and Guard Split by
luck." Move-calling moves (Sleep Talk / Metronome / Assist) execute via
`actions.useMove()`, which never checks the picker disable
(`onFoeDisableMove`), so every move banned only at selection level could still
execute through an indirect call:

- **Power Split / Guard Split / Speed Swap** target the boss but were missing
  from the `onTryHit` blocked Set — an indirect call averaged/swapped the
  player's stats with the boss's inflated stats, trivialising raids. Added all
  three to the blocked Set.
- **Baton Pass** targets the USER, so `onTryHit` never fires for it — an
  indirect call let a player escape a raid with boosts/volatiles intact. Added
  an `onTry` hard block at move level (fails against any Dynahax foe by every
  route), same pattern as Imprison (Change 56).

**Tests:** `test/sim/abilities/dynahax-indirect-calls.js` verifies Sleep
Talk-called Baton Pass / Power Split / Guard Split / Speed Swap all fail
against Dynahax bosses (singles + doubles for Baton Pass) and still work
against normal foes.

---

## Change 59: Remove Sleep Clause from wild battles (config/custom-formats.ts)

Removes `Sleep Clause Mod` from every PBO wild format: ordinary wild singles,
solo hordes (`1v2` through `1v5`), co-op wild formats (`2v1` through `2v5`),
wild doubles, and wild triples. PvP, NPC, and standard formats retain the
clause.

Wild encounters are not competitive matches, so putting one wild Pokemon to
sleep must not prevent another wild Pokemon from being put to sleep. This is
especially important for hordes with multiple simultaneous opponents and keeps
the rule consistent when a partner joins the same encounter.

**Tests:** `test/sim/misc/pbo-sleep-clause.js` verifies the clause is absent
from every wild format, multiple wild slots can be asleep in solo and co-op
hordes, and PvP/NPC/standard formats still enforce the clause.

---

## Upgrade Checklist

1. `git fetch upstream && git merge upstream/v<new_version>`
2. Search for `[PBO]` in `sim/teams.ts`, `sim/pokemon.ts`, `sim/side.ts`, `sim/battle.ts`, `sim/battle-queue.ts`, `data/mods/pbo/scripts.ts`, `data/mods/pbo/abilities.ts`, `data/mods/pbo/items.ts`, `data/mods/pbo/moves.ts`, and `config/custom-formats.ts`. Also search for `activeSlotsPerSide` and `gameType === 'horde'` in `sim/dex-formats.ts`, `sim/global-types.ts`, `sim/battle.ts`, `sim/side.ts`, and `sim/pokemon.ts`.
3. Resolve conflicts (changes are at end-of-interface and end-of-constructor)
4. Run tests: `npm test` + PBO integration tests
5. Tag: `git tag v<base_version>-pbo-vNN`
## Co-op PvE asymmetric formats

PBO co-op PvE keeps both human-controlled active Pokemon on `p1` and uses the
existing `horde` game type for unequal side sizes. The following formats extend
the v68 `activeSlotsPerSide` support:

- `gen9pbocoopwild2v1` — `[Gen 9] PBO Coop Wild 2v1`
- `gen9pbocoopwild2v3` — `[Gen 9] PBO Coop Wild 2v3`
- `gen9pbocoopwild2v4` — `[Gen 9] PBO Coop Wild 2v4`
- `gen9pbocoopwild2v5` — `[Gen 9] PBO Coop Wild 2v5`
- `gen9pbocoopnpc2v1` — `[Gen 9] PBO Coop NPC 2v1`

Symmetric `2v2` continues to use the existing PBO wild doubles format. Engine
tests verify that every opponent slot can target either human slot, including
all five opponent actions in `2v5`.
