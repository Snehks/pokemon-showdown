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

**Total: 15 changes across 7 files.**

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
| Status immunity | `onSetStatus` | Cannot gain any status condition |
| Move blocking | `onTryHit` | Blocks 28 specific moves (trapping, OHKO, status theft, etc.) |
| Ability suppression | `onStart` | Gastro Acids all non-Dynahax foes on entry |
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

## How to Upgrade

1. `git fetch upstream && git merge upstream/v<new_version>`
2. Search for `[PBO]` in `sim/teams.ts`, `sim/pokemon.ts`, `sim/side.ts`, `sim/battle.ts`, `sim/battle-queue.ts`, `data/mods/pbo/scripts.ts`, `data/mods/pbo/abilities.ts`, and `config/custom-formats.ts`
3. Resolve conflicts (changes are at end-of-interface and end-of-constructor)
4. Run tests: `npm test` + PBO integration tests
5. Tag: `git tag v<new_version>-pbo`
