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

**Total: 11 changes across 6 files.**

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

## How to Upgrade

1. `git fetch upstream && git merge upstream/v<new_version>`
2. Search for `[PBO]` in `sim/teams.ts`, `sim/pokemon.ts`, `sim/side.ts`, `sim/battle.ts`, `sim/battle-queue.ts`, `data/mods/pbo/`, and `config/custom-formats.ts`
3. Resolve conflicts (changes are at end-of-interface and end-of-constructor)
4. Run tests: `npm test` + PBO integration tests
5. Tag: `git tag v<new_version>-pbo`
