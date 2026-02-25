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

**Total: 4 changes across 2 files.**

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

## How to Upgrade

1. `git fetch upstream && git merge upstream/v<new_version>`
2. Search for `[PBO]` in `sim/teams.ts` and `sim/pokemon.ts`
3. Resolve conflicts (changes are at end-of-interface and end-of-constructor)
4. Run tests: `npm test` + PBO integration tests
5. Tag: `git tag v<new_version>-pbo`
