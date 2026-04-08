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
| 7 | `sim/side.ts` | Extended `ChosenAction` | Add `useitem` choice type + `bagItemScript`, `bagItemData` fields |
| 8 | `sim/side.ts` | Extended `choose()` | Parse `useitem <target> <script> <data...>` command |
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
| 20 | `config/custom-formats.ts` | Gimmick clauses | Add Terastal/Z-Move/Dynamax Clause to all PBO formats |
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
| 37 | `data/mods/pbo/abilities.ts` | Dynahax Max move category | `onModifyMove` sets Max move category to Special when SpA > Atk |
| 38 | `data/mods/pbo/abilities.ts` | Dynahax self-confusion immunity | `onTryAddVolatile` blocks self-inflicted confusion (Outrage/Thrash) while allowing enemy confusion |

**Total: 38 changes across 10 files.**

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
2. Adds two optional fields:
```typescript
bagItemScript?: string;   // Name of the bag item script to execute
bagItemData?: string[];    // Additional data passed to the script
```

**Backward compatible:** Both fields are optional. Existing actions work unchanged.

---

## Change 8: `choose()` method (sim/side.ts)

**Location:** Switch statement in `Side.choose()`, after `case 'default':`.

**What it does:** Parses the `useitem` command format:
```
useitem <targetRef> <scriptName> <data...>
```

Target resolution:
- `p1a` → active Pokemon (slot a) on side p1
- `p1:2` → bench Pokemon at index 2 on side p1

Pushes a `ChosenAction` with `choice: 'useitem'`, the resolved target, script name,
and item data array.

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
2. Emits `|bagitem|<target>|<scriptName>` protocol line
3. Calls `script.use(battle, target, scriptName, data)`
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

## Change 20: Gimmick clauses on all PBO formats (config/custom-formats.ts)

**What it does:** Adds `Terastal Clause`, `Z-Move Clause`, and `Dynamax Clause` to
the ruleset of all five PBO custom formats (Standard, NPC, PvP, Wild, PvP No Preview).

**Effect:** In all PBO formats:
- Terastallization is disabled (`canTerastallize = null` on all Pokemon at battle start)
- Z-Moves are banned (Z-Crystal validation + rule announcement)
- Dynamax is disabled (`dynamaxUsed = true` on all sides at battle start)

**Not affected:** Showdown's built-in `gen{1-9}randombattle` formats (used by PBO's
Random Battle mode) are untouched and retain all gimmick mechanics.

**Dynahax compatibility:** Dynamax Clause prevents the Dynamax *action*, but Dynahax
raid bosses never Dynamax — they have G-Max/Max moves directly in their moveset. The
Dynahax ability handles power scaling independently. Confirmed safe by integration tests.

**Why:** PBO restricts Tera, Z-Moves, and Dynamax to Random Battles only. These mechanics
are not part of the standard PBO battle experience.

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
`move.category` to `'Special'` if SpA > Atk, `'Physical'` otherwise.

**Why:** Max moves are hardcoded `category: "Physical"` in move data. Normally this doesn't
matter because the category is inherited from the base move during Dynamax. But Dynahax bosses
use Max moves directly (not derived from a base move), so a special attacker like Volcarona
(485 SpA vs 234 Atk) would hit with its weaker stat.

---

## Change 38: Dynahax self-confusion immunity (data/mods/pbo/abilities.ts)

**What it does:** Adds `onTryAddVolatile` that blocks confusion when `source` is null or
`source === target` (self-inflicted).

**Why:** Outrage, Thrash, and Petal Dance apply confusion to the user when the lockedmove
ends. Dynahax bosses should be immune to this self-punishment since they're raid bosses.
Enemy confusion (Confuse Ray, Dynamic Punch, etc.) still works — only self-inflicted
confusion is blocked.

---

## How to Upgrade

1. `git fetch upstream && git merge upstream/v<new_version>`
2. Search for `[PBO]` in `sim/teams.ts`, `sim/pokemon.ts`, `sim/side.ts`, `sim/battle.ts`, `sim/battle-queue.ts`, `data/mods/pbo/scripts.ts`, `data/mods/pbo/abilities.ts`, `data/mods/pbo/items.ts`, `data/mods/pbo/moves.ts`, and `config/custom-formats.ts`
3. Resolve conflicts (changes are at end-of-interface and end-of-constructor)
4. Run tests: `npm test` + PBO integration tests
5. Tag: `git tag v<new_version>-pbo`
