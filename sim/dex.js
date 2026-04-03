"use strict";
/**
 * Dex
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Handles getting data about pokemon, items, etc. Also contains some useful
 * helper functions for using dex data.
 *
 * By default, nothing is loaded until you call Dex.mod(mod) or
 * Dex.forFormat(format).
 *
 * You may choose to preload some things:
 * - Dex.includeMods() ~10ms
 *   This will preload `Dex.dexes`, giving you a list of possible mods.
 * - Dex.includeFormats() ~30ms
 *   As above, but will also preload `Dex.formats.all()`.
 * - Dex.includeData() ~500ms
 *   As above, but will also preload all of Dex.data for Gen 8, so
 *   functions like `Dex.species.get`, etc will be instantly usable.
 * - Dex.includeModData() ~1500ms
 *   As above, but will also preload `Dex.dexes[...].data` for all mods.
 *
 * Note that preloading is never necessary. All the data will be
 * automatically preloaded when needed, preloading will just spend time
 * now so you don't need to spend time later.
 *
 * @license MIT
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dex = exports.ModdedDex = exports.toID = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const Data = __importStar(require("./dex-data"));
const dex_conditions_1 = require("./dex-conditions");
const dex_moves_1 = require("./dex-moves");
const dex_items_1 = require("./dex-items");
const dex_abilities_1 = require("./dex-abilities");
const dex_species_1 = require("./dex-species");
const dex_formats_1 = require("./dex-formats");
const utils_1 = require("../lib/utils");
const BASE_MOD = 'gen9';
const DATA_DIR = path.resolve(__dirname, '../data');
const MODS_DIR = path.resolve(DATA_DIR, './mods');
const dexes = Object.create(null);
const DATA_TYPES = [
    'Abilities', 'Rulesets', 'FormatsData', 'Items', 'Learnsets', 'Moves',
    'Natures', 'Pokedex', 'Scripts', 'Conditions', 'TypeChart', 'PokemonGoData',
];
const DATA_FILES = {
    Abilities: 'abilities',
    Rulesets: 'rulesets',
    FormatsData: 'formats-data',
    Items: 'items',
    Learnsets: 'learnsets',
    Moves: 'moves',
    Natures: 'natures',
    Pokedex: 'pokedex',
    PokemonGoData: 'pokemongo',
    Scripts: 'scripts',
    Conditions: 'conditions',
    TypeChart: 'typechart',
};
exports.toID = Data.toID;
class ModdedDex {
    constructor(mod = 'base') {
        this.Data = Data;
        this.Condition = dex_conditions_1.Condition;
        this.Ability = dex_abilities_1.Ability;
        this.Item = dex_items_1.Item;
        this.Move = dex_moves_1.DataMove;
        this.Species = dex_species_1.Species;
        this.Format = dex_formats_1.Format;
        this.ModdedDex = ModdedDex;
        this.name = "[ModdedDex]";
        this.toID = Data.toID;
        this.gen = 0;
        this.parentMod = '';
        this.modsLoaded = false;
        this.deepClone = utils_1.Utils.deepClone;
        this.deepFreeze = utils_1.Utils.deepFreeze;
        this.Multiset = utils_1.Utils.Multiset;
        this.aliases = null;
        this.fuzzyAliases = null;
        this.isBase = (mod === 'base');
        this.currentMod = mod;
        this.dataDir = (this.isBase ? DATA_DIR : MODS_DIR + '/' + this.currentMod);
        this.dataCache = null;
        this.textCache = null;
        this.formats = new dex_formats_1.DexFormats(this);
        this.abilities = new dex_abilities_1.DexAbilities(this);
        this.items = new dex_items_1.DexItems(this);
        this.moves = new dex_moves_1.DexMoves(this);
        this.species = new dex_species_1.DexSpecies(this);
        this.conditions = new dex_conditions_1.DexConditions(this);
        this.natures = new Data.DexNatures(this);
        this.types = new Data.DexTypes(this);
        this.stats = new Data.DexStats(this);
    }
    get data() {
        return this.loadData();
    }
    get dexes() {
        this.includeMods();
        return dexes;
    }
    mod(mod) {
        if (!dexes['base'].modsLoaded)
            dexes['base'].includeMods();
        return dexes[mod || 'base'].includeData();
    }
    forGen(gen) {
        if (!gen)
            return this;
        return this.mod(`gen${gen}`);
    }
    forFormat(format) {
        if (!this.modsLoaded)
            this.includeMods();
        const mod = this.formats.get(format).mod;
        return dexes[mod || BASE_MOD].includeData();
    }
    modData(dataType, id) {
        if (this.isBase)
            return this.data[dataType][id];
        if (this.data[dataType][id] !== dexes[this.parentMod].data[dataType][id])
            return this.data[dataType][id];
        return (this.data[dataType][id] = utils_1.Utils.deepClone(this.data[dataType][id]));
    }
    effectToString() {
        return this.name;
    }
    /**
     * Sanitizes a username or Pokemon nickname
     *
     * Returns the passed name, sanitized for safe use as a name in the PS
     * protocol.
     *
     * Such a string must uphold these guarantees:
     * - must not contain any ASCII whitespace character other than a space
     * - must not start or end with a space character
     * - must not contain any of: | , [ ]
     * - must not be the empty string
     * - must not contain Unicode RTL control characters
     *
     * If no such string can be found, returns the empty string. Calling
     * functions are expected to check for that condition and deal with it
     * accordingly.
     *
     * getName also enforces that there are not multiple consecutive space
     * characters in the name, although this is not strictly necessary for
     * safety.
     */
    getName(name) {
        if (typeof name !== 'string' && typeof name !== 'number')
            return '';
        name = `${name}`.replace(/[|\s[\],\u202e]+/g, ' ').trim();
        if (name.length > 18)
            name = name.substr(0, 18).trim();
        // remove zalgo
        name = name.replace(/[\u0300-\u036f\u0483-\u0489\u0610-\u0615\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06ED\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]{3,}/g, '');
        name = name.replace(/[\u239b-\u23b9]/g, '');
        return name;
    }
    /**
     * Returns false if the target is immune; true otherwise.
     * Also checks immunity to some statuses.
     */
    getImmunity(source, target) {
        const sourceType = typeof source !== 'string' ? source.type : source;
        // @ts-expect-error really wish TS would support this
        const targetTyping = target.getTypes?.() || target.types || target;
        if (Array.isArray(targetTyping)) {
            for (const type of targetTyping) {
                if (!this.getImmunity(sourceType, type))
                    return false;
            }
            return true;
        }
        const typeData = this.types.get(targetTyping);
        if (typeData && typeData.damageTaken[sourceType] === 3)
            return false;
        return true;
    }
    getEffectiveness(source, target) {
        const sourceType = typeof source !== 'string' ? source.type : source;
        // @ts-expect-error really wish TS would support this
        const targetTyping = target.getTypes?.() || target.types || target;
        let totalTypeMod = 0;
        if (Array.isArray(targetTyping)) {
            for (const type of targetTyping) {
                totalTypeMod += this.getEffectiveness(sourceType, type);
            }
            return totalTypeMod;
        }
        const typeData = this.types.get(targetTyping);
        if (!typeData)
            return 0;
        switch (typeData.damageTaken[sourceType]) {
            case 1: return 1; // super-effective
            case 2: return -1; // resist
            // in case of weird situations like Gravity, immunity is handled elsewhere
            default: return 0;
        }
    }
    getDescs(table, id, dataEntry) {
        if (dataEntry.shortDesc) {
            return {
                desc: dataEntry.desc,
                shortDesc: dataEntry.shortDesc,
            };
        }
        const entry = this.loadTextData()[table][id];
        if (!entry)
            return null;
        const descs = {
            desc: '',
            shortDesc: '',
        };
        for (let i = this.gen; i < dexes['base'].gen; i++) {
            const curDesc = entry[`gen${i}`]?.desc;
            const curShortDesc = entry[`gen${i}`]?.shortDesc;
            if (!descs.desc && curDesc) {
                descs.desc = curDesc;
            }
            if (!descs.shortDesc && curShortDesc) {
                descs.shortDesc = curShortDesc;
            }
            if (descs.desc && descs.shortDesc)
                break;
        }
        if (!descs.shortDesc)
            descs.shortDesc = entry.shortDesc || '';
        if (!descs.desc)
            descs.desc = entry.desc || descs.shortDesc;
        return descs;
    }
    /**
     * Ensure we're working on a copy of a move (and make a copy if we aren't)
     *
     * Remember: "ensure" - by default, it won't make a copy of a copy:
     *     moveCopy === Dex.getActiveMove(moveCopy)
     *
     * If you really want to, use:
     *     moveCopyCopy = Dex.getActiveMove(moveCopy.id)
     */
    getActiveMove(move) {
        if (move && typeof move.hit === 'number')
            return move;
        move = this.moves.get(move);
        const moveCopy = this.deepClone(move);
        moveCopy.hit = 0;
        return moveCopy;
    }
    getHiddenPower(ivs) {
        const hpTypes = [
            'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel',
            'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark',
        ];
        const tr = this.trunc;
        const stats = { hp: 31, atk: 31, def: 31, spe: 31, spa: 31, spd: 31 };
        if (this.gen <= 2) {
            // Gen 2 specific Hidden Power check. IVs are still treated 0-31 so we get them 0-15
            const atkDV = tr(ivs.atk / 2);
            const defDV = tr(ivs.def / 2);
            const speDV = tr(ivs.spe / 2);
            const spcDV = tr(ivs.spa / 2);
            return {
                type: hpTypes[4 * (atkDV % 4) + (defDV % 4)],
                power: tr((5 * ((spcDV >> 3) + (2 * (speDV >> 3)) + (4 * (defDV >> 3)) + (8 * (atkDV >> 3))) + (spcDV % 4)) / 2 + 31),
            };
        }
        else {
            // Hidden Power check for Gen 3 onwards
            let hpTypeX = 0;
            let hpPowerX = 0;
            let i = 1;
            for (const s in stats) {
                hpTypeX += i * (ivs[s] % 2);
                hpPowerX += i * (tr(ivs[s] / 2) % 2);
                i *= 2;
            }
            return {
                type: hpTypes[tr(hpTypeX * 15 / 63)],
                // After Gen 6, Hidden Power is always 60 base power
                power: (this.gen && this.gen < 6) ? tr(hpPowerX * 40 / 63) + 30 : 60,
            };
        }
    }
    /**
     * Truncate a number into an unsigned 32-bit integer, for
     * compatibility with the cartridge games' math systems.
     */
    trunc(num, bits = 0) {
        if (bits)
            return (num >>> 0) % (2 ** bits);
        return num >>> 0;
    }
    dataSearch(target, searchIn, isInexact) {
        if (!target)
            return null;
        searchIn = searchIn || ['Pokedex', 'Moves', 'Abilities', 'Items', 'Natures'];
        const searchObjects = {
            Pokedex: 'species', Moves: 'moves', Abilities: 'abilities', Items: 'items', Natures: 'natures', TypeChart: 'types',
        };
        const searchTypes = {
            Pokedex: 'pokemon', Moves: 'move', Abilities: 'ability', Items: 'item', Natures: 'nature', TypeChart: 'type',
        };
        let searchResults = [];
        for (const table of searchIn) {
            const res = this[searchObjects[table]].get(target);
            if (res.exists && res.gen <= this.gen) {
                searchResults.push({
                    isInexact,
                    searchType: searchTypes[table],
                    name: res.name,
                });
            }
        }
        if (searchResults.length)
            return searchResults;
        if (isInexact)
            return null; // prevent infinite loop
        this.loadAliases();
        const fuzzyAliases = exports.Dex.fuzzyAliases.get((0, exports.toID)(target));
        if (fuzzyAliases) {
            for (const table of searchIn) {
                for (const alias of fuzzyAliases) {
                    const res = this[searchObjects[table]].get(alias);
                    if (res.exists && res.gen <= this.gen) {
                        searchResults.push({
                            isInexact: true,
                            searchType: searchTypes[table],
                            name: res.name,
                        });
                    }
                }
            }
        }
        if (searchResults.length)
            return searchResults;
        const cmpTarget = (0, exports.toID)(target);
        let maxLd = 3;
        if (cmpTarget.length <= 1) {
            return null;
        }
        else if (cmpTarget.length <= 4) {
            maxLd = 1;
        }
        else if (cmpTarget.length <= 6) {
            maxLd = 2;
        }
        searchResults = null;
        for (const table of searchIn) {
            const searchObj = this.data[table];
            if (!searchObj)
                continue;
            for (const j in searchObj) {
                const ld = utils_1.Utils.levenshtein(cmpTarget, j, maxLd);
                if (ld <= maxLd) {
                    const word = searchObj[j].name || j;
                    const results = this.dataSearch(word, searchIn, word);
                    if (results) {
                        searchResults = results;
                        maxLd = ld;
                    }
                }
            }
        }
        return searchResults;
    }
    loadDataFile(basePath, dataType) {
        try {
            const filePath = basePath + DATA_FILES[dataType];
            const dataObject = require(filePath);
            if (!dataObject || typeof dataObject !== 'object') {
                throw new TypeError(`${filePath}, if it exists, must export a non-null object`);
            }
            if (dataObject[dataType]?.constructor?.name !== 'Object') {
                throw new TypeError(`${filePath}, if it exists, must export an object whose '${dataType}' property is an Object`);
            }
            return dataObject[dataType];
        }
        catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND' && e.code !== 'ENOENT') {
                throw e;
            }
        }
    }
    loadTextFile(name, exportName) {
        return require(`${DATA_DIR}/text/${name}`)[exportName];
    }
    includeMods() {
        if (!this.isBase)
            throw new Error(`This must be called on the base Dex`);
        if (this.modsLoaded)
            return this;
        for (const mod of fs.readdirSync(MODS_DIR)) {
            dexes[mod] = new ModdedDex(mod);
        }
        this.modsLoaded = true;
        return this;
    }
    includeModData() {
        for (const mod in this.dexes) {
            dexes[mod].includeData();
        }
        return this;
    }
    includeData() {
        this.loadData();
        return this;
    }
    loadTextData() {
        if (dexes['base'].textCache)
            return dexes['base'].textCache;
        dexes['base'].textCache = {
            Pokedex: this.loadTextFile('pokedex', 'PokedexText'),
            Moves: this.loadTextFile('moves', 'MovesText'),
            Abilities: this.loadTextFile('abilities', 'AbilitiesText'),
            Items: this.loadTextFile('items', 'ItemsText'),
            Default: this.loadTextFile('default', 'DefaultText'),
        };
        return dexes['base'].textCache;
    }
    getAlias(id) {
        return this.loadAliases().get(id);
    }
    loadAliases() {
        if (!this.isBase)
            return exports.Dex.loadAliases();
        if (this.aliases)
            return this.aliases;
        const exported = require(path.resolve(DATA_DIR, 'aliases'));
        const aliases = new Map();
        for (const [alias, target] of Object.entries(exported.Aliases)) {
            aliases.set(alias, (0, exports.toID)(target));
        }
        const compoundNames = new Map();
        for (const name of exported.CompoundWordNames) {
            compoundNames.set((0, exports.toID)(name), name);
        }
        const fuzzyAliases = new Map();
        const addFuzzy = (alias, target) => {
            if (alias === target)
                return;
            if (alias.length < 2)
                return;
            const prev = fuzzyAliases.get(alias) || [];
            if (!prev.includes(target))
                prev.push(target);
            fuzzyAliases.set(alias, prev);
        };
        const addFuzzyForme = (alias, target, forme, formeLetter) => {
            addFuzzy(`${alias}${forme}`, target);
            if (!forme)
                return;
            addFuzzy(`${alias}${formeLetter}`, target);
            addFuzzy(`${formeLetter}${alias}`, target);
            if (forme === 'alola')
                addFuzzy(`alolan${alias}`, target);
            else if (forme === 'galar')
                addFuzzy(`galarian${alias}`, target);
            else if (forme === 'hisui')
                addFuzzy(`hisuian${alias}`, target);
            else if (forme === 'paldea')
                addFuzzy(`paldean${alias}`, target);
            else if (forme === 'megax')
                addFuzzy(`mega${alias}x`, target);
            else if (forme === 'megay')
                addFuzzy(`mega${alias}y`, target);
            else
                addFuzzy(`${forme}${alias}`, target);
            if (forme === 'megax' || forme === 'megay') {
                addFuzzy(`mega${alias}`, target);
                addFuzzy(`${alias}mega`, target);
                addFuzzy(`m${alias}`, target);
                addFuzzy(`${alias}m`, target);
            }
        };
        for (const table of ['Items', 'Abilities', 'Moves', 'Pokedex']) {
            const data = this.data[table];
            for (const [id, entry] of Object.entries(data)) {
                let name = compoundNames.get(id) || entry.name;
                let forme = '';
                let formeLetter = '';
                if (name.includes('(')) {
                    addFuzzy((0, exports.toID)(name.split('(')[0]), id);
                }
                if (table === 'Pokedex') {
                    // can't Dex.species.get; aliases isn't loaded
                    const species = entry;
                    const baseid = (0, exports.toID)(species.baseSpecies);
                    if (baseid && baseid !== id) {
                        name = compoundNames.get(baseid) || baseid;
                    }
                    forme = (0, exports.toID)(species.forme || species.baseForme);
                    if (forme === 'fan') {
                        formeLetter = 's';
                    }
                    else if (forme === 'bloodmoon') {
                        formeLetter = 'bm';
                    }
                    else {
                        // not doing baseForme as a hack to make aliases point to base forme
                        formeLetter = (species.forme || '').split(/ |-/).map(part => (0, exports.toID)(part).charAt(0)).join('');
                    }
                    addFuzzy(forme, id);
                }
                addFuzzyForme((0, exports.toID)(name), id, forme, formeLetter);
                const fullSplit = name.split(/ |-/).map(exports.toID);
                if (fullSplit.length < 2)
                    continue;
                const fullAcronym = fullSplit.map(x => x.charAt(0)).join('');
                addFuzzyForme(fullAcronym, id, forme, formeLetter);
                const fullAcronymWord = fullAcronym + fullSplit[fullSplit.length - 1].slice(1);
                addFuzzyForme(fullAcronymWord, id, forme, formeLetter);
                for (const wordPart of fullSplit)
                    addFuzzyForme(wordPart, id, forme, formeLetter);
                const spaceSplit = name.split(' ').map(exports.toID);
                if (spaceSplit.length !== fullSplit.length) {
                    const spaceAcronym = spaceSplit.map(x => x.charAt(0)).join('');
                    addFuzzyForme(spaceAcronym, id, forme, formeLetter);
                    const spaceAcronymWord = spaceAcronym + spaceSplit[spaceSplit.length - 1].slice(1);
                    addFuzzyForme(spaceAcronymWord, id, forme, formeLetter);
                    for (const word of fullSplit)
                        addFuzzyForme(word, id, forme, formeLetter);
                }
            }
        }
        this.aliases = aliases;
        this.fuzzyAliases = fuzzyAliases;
        return this.aliases;
    }
    loadData() {
        if (this.dataCache)
            return this.dataCache;
        dexes['base'].includeMods();
        const dataCache = {};
        const basePath = this.dataDir + '/';
        const Scripts = this.loadDataFile(basePath, 'Scripts') || {};
        // We want to inherit most of Scripts but not this.
        const init = Scripts.init;
        this.parentMod = this.isBase ? '' : (Scripts.inherit || 'base');
        let parentDex;
        if (this.parentMod) {
            parentDex = dexes[this.parentMod];
            if (!parentDex || parentDex === this) {
                throw new Error(`Unable to load ${this.currentMod}. 'inherit' in scripts.ts should specify a parent mod from which to inherit data, or must be not specified.`);
            }
        }
        if (!parentDex) {
            // Formats are inherited by mods and used by Rulesets
            this.includeFormats();
        }
        for (const dataType of DATA_TYPES) {
            dataCache[dataType] = this.loadDataFile(basePath, dataType);
            if (dataType === 'Rulesets' && !parentDex) {
                for (const format of this.formats.all()) {
                    dataCache.Rulesets[format.id] = { ...format, ruleTable: null };
                }
            }
        }
        if (parentDex) {
            for (const dataType of DATA_TYPES) {
                const parentTypedData = parentDex.data[dataType];
                if (!dataCache[dataType] && !init) {
                    dataCache[dataType] = parentTypedData;
                    continue;
                }
                const childTypedData = dataCache[dataType] || (dataCache[dataType] = {});
                for (const entryId in parentTypedData) {
                    if (childTypedData[entryId] === null) {
                        // null means don't inherit
                        delete childTypedData[entryId];
                    }
                    else if (!(entryId in childTypedData)) {
                        // If it doesn't exist it's inherited from the parent data
                        childTypedData[entryId] = parentTypedData[entryId];
                    }
                    else if (childTypedData[entryId]?.inherit) {
                        // {inherit: true} can be used to modify only parts of the parent data,
                        // instead of overwriting entirely
                        delete childTypedData[entryId].inherit;
                        // Merge parent and child's entry, with child overwriting parent.
                        childTypedData[entryId] = { ...parentTypedData[entryId], ...childTypedData[entryId] };
                    }
                }
            }
        }
        // Flag the generation. Required for team validator.
        this.gen = dataCache.Scripts.gen;
        if (!this.gen)
            throw new Error(`Mod ${this.currentMod} needs a generation number in scripts.js`);
        this.dataCache = dataCache;
        // Execute initialization script.
        if (init)
            init.call(this);
        return this.dataCache;
    }
    includeFormats() {
        this.formats.load();
        return this;
    }
}
exports.ModdedDex = ModdedDex;
dexes['base'] = new ModdedDex();
// "gen9" is an alias for the current base data
dexes[BASE_MOD] = dexes['base'];
exports.Dex = dexes['base'];
exports.default = exports.Dex;
