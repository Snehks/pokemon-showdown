"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var petmods_exports = {};
__export(petmods_exports, {
  commands: () => commands
});
module.exports = __toCommonJS(petmods_exports);
var import_lib = require("../../lib");
function formatMove(move, format) {
  const dex = Dex.forFormat(format);
  const parentDex = Dex.forFormat(dex.parentMod);
  move = dex.moves.get(move);
  const id = move.id;
  const custom = dex.data.Moves[id] !== parentDex.data.Moves[id];
  return custom ? `<button name="send" value="/dt ${move.name}, ${format.name}"		style="display: inline; padding: 0; border: 0; font: inherit; font-style: italic; cursor: pointer;		background: transparent; color: currentColor; -webkit-appearance: none;">${move.name}</i></button>` : `<a href="https://${Config.routes.dex}/moves/${move.id}" target="_blank" class="subtle" style="white-space:nowrap">${move.name}</a>`;
}
function formatAbility(ability, format) {
  const dex = Dex.forFormat(format);
  const parentDex = Dex.forFormat(dex.parentMod);
  ability = dex.abilities.get(ability);
  const id = Dex.toID(ability.name);
  const custom = dex.data.Abilities[id] !== parentDex.data.Abilities[id];
  return custom ? `<button name="send" value="/dt ${ability.name}, ${format.mod}"		style="display: inline; padding: 0; border: 0; font: inherit;		font-style: italic; cursor: pointer; background: transparent;		color: currentColor; -webkit-appearance: none;">${ability.name}</i></button>` : `<a href="https://${Config.routes.dex}/abilities/${ability.id}" target="_blank" class="subtle" style="white-space:nowrap">${ability.name}</a>`;
}
function formatItem(item, format) {
  const dex = Dex.forFormat(format);
  const parentDex = Dex.forFormat(dex.parentMod);
  item = dex.items.get(item);
  const id = Dex.toID(item.name);
  const custom = dex.data.Items[id] !== parentDex.data.Items[id];
  return custom ? `<button name="send" value="/dt ${item.name}, ${format.mod}"		style="display: inline; padding: 0; border: 0; font: inherit;		font-style: italic; cursor: pointer; background: transparent;		color: currentColor; -webkit-appearance: none;">${item.name}</i></button>` : `<a href="https://${Config.routes.dex}/items/${item.id}" target="_blank" class="subtle" style="white-space:nowrap">${item.name}</a>`;
}
function getSets(species, format) {
  const dex = Dex.forFormat(format);
  const dexFormat = Dex.formats.get(format);
  species = dex.species.get(species);
  const folderName = dexFormat.mod;
  const setsFile = JSON.parse(
    (0, import_lib.FS)(`data/random-battles/${folderName}/random-sets.json`).readIfExistsSync() || "{}"
  );
  const data = setsFile[species.id];
  if (!data?.sets?.length) return null;
  return data;
}
const commands = {
  chatbats: "petmodrandbats",
  pmotm: "petmodrandbats",
  pmlc: "petmodrandbats",
  petmodrandbats(target, room, user, connection, cmd) {
    if (!target || cmd === "petmodrandbats") return this.parse(`/help petmodrandbats`);
    const format = Dex.formats.get(Dex.getAlias(cmd) || cmd);
    if (!format) return this.errorReply(`No format ${cmd} was found.`);
    if (format.id === "gen9randomtandem") return this.parse(`/help tandems`);
    if (!this.runBroadcast()) return;
    const dex = Dex.forFormat(format);
    const searchResults = dex.dataSearch(target, ["Pokedex"]);
    if (!searchResults?.length) {
      throw new Chat.ErrorMessage(`No Pok\xE9mon named '${target}' was found in ${format}. (Check your spelling?)`);
    }
    let inexactMsg = "";
    if (searchResults[0].isInexact) {
      inexactMsg = `No Pok\xE9mon named '${target}' was found in ${format}. Searching for '${searchResults[0].name}' instead.`;
    }
    const species = dex.species.get(searchResults[0].name);
    const movesets = [];
    const setsToCheck = [species];
    if (species.otherFormes) setsToCheck.push(...species.otherFormes.map((pkmn) => dex.species.get(pkmn)));
    for (const pokemon of setsToCheck) {
      const data = getSets(pokemon, format);
      if (!data) continue;
      const sets = data.sets;
      const level = data.level;
      let buf2 = `<span class="gray">Moves for ${pokemon.name} in ${format.name}:</span><br/>`;
      buf2 += `<b>Level</b>: ${level}`;
      for (const set of sets) {
        if (set.role) buf2 += `<details class="details"><summary>${set.role}</summary><br/>`;
        if (dex.gen === 9 && set.teraTypes) {
          buf2 += `<b>Tera Type${Chat.plural(set.teraTypes)}</b>: ${set.teraTypes.join(", ")}<br/>`;
        }
        buf2 += `<b>Moves</b>: ${set.movepool.sort().map((move) => formatMove(move, format)).join(", ")}<br/>`;
        if (set.abilities) {
          buf2 += `<b>Abilit${Chat.plural(set.abilities, "ies", "y")}</b>: ${set.abilities.sort().map((abil) => formatAbility(abil, format)).join(", ")}<br/>`;
        }
        if (set.items) {
          buf2 += `<b>Item${Chat.plural(set.items, "s", "")}</b>: ${set.items.sort().map((item) => formatItem(item, format)).join(", ")}`;
        }
        buf2 += "</details>";
      }
      movesets.push(buf2);
    }
    if (!movesets.length) {
      this.sendReply(inexactMsg);
      throw new Chat.ErrorMessage(`Error: ${species.name} has no data in ${format.name}`);
    }
    const buf = movesets.join("<hr/>");
    this.sendReply(inexactMsg);
    this.sendReplyBox(buf);
  },
  petmodrandbatshelp: [
    `/pmotm [pokemon] - Shows sets of a Pokemon in the Pet Mod of the Month.`,
    `/pmlc [pokemon] - Shows sets of a Pokemon in the Pet Mod Leader's Choice`,
    `/chatbats [pokemon] - Shows sets of a Pokemon in [Gen 9] Chatbats.`
  ],
  tandems(target, room, user, connection, cmd) {
    if (!target) return this.parse(`/help tandems`);
    if (!this.runBroadcast()) return;
    const tandemData = JSON.parse(
      (0, import_lib.FS)(`data/mods/gen9randomtandem/tandems.json`).readIfExistsSync()
    );
    if (target === "all") {
      const heads = Object.keys(tandemData).sort().map((id) => Dex.species.get(id).name).join(", ");
      return this.sendReplyBox(`<span class="gray">All Heads:</span><br />${heads}`);
    }
    const searchResults = Dex.dataSearch(target, ["Pokedex"]);
    if (!searchResults?.length) {
      throw new Chat.ErrorMessage(`No Pok\xE9mon named '${target}' was found. (Check your spelling?)`);
    }
    let inexactMsg = "";
    if (searchResults[0].isInexact) {
      inexactMsg = `No Pok\xE9mon named '${target}' was found. Searching for '${searchResults[0].name}' instead.`;
    }
    const pokemon = Dex.species.get(searchResults[0].name).id;
    const tandems = tandemData[pokemon];
    if (!tandems) {
      throw new Chat.ErrorMessage(`${pokemon} is not a Head.`);
    }
    ;
    let buf = `<span class="gray">Tandems for ${Dex.species.get(pokemon).name}:</span><br/>`;
    for (const tandem of tandems) {
      buf += `<details class="details"><summary>${Dex.species.get(tandem.species).name}</summary>`;
      buf += `<b>Abilit${Chat.plural(tandem.abilities, "ies", "y")}</b>: ${tandem.abilities.map((ability) => Dex.abilities.get(ability).name).sort().join(", ")}<br/>`;
      buf += `<b>Item${Chat.plural(tandem.items, "s", "")}</b>: ${tandem.items.map((item) => Dex.items.get(item).name).sort().join(", ")}<br/>`;
      buf += `<b>Tera Type${Chat.plural(tandem.teraTypes)}</b>: ${tandem.teraTypes.join(", ")}<br/>`;
      if (tandem.nature) buf += `<b>Nature</b>: ${tandem.nature}<br/>`;
      if (tandem.moves.length > 2) {
        buf += `<b>Forced Moves</b>: ${tandem.forcedMoves.map((move) => Dex.moves.get(move).name).sort().join(", ")}<br/>`;
        buf += `<b>Moves</b>: ${tandem.moves.map((move) => Dex.moves.get(move).name).sort().join(", ")}<br/>`;
      } else {
        buf += `<b>Moves</b>: ${[...tandem.forcedMoves, ...tandem.moves].map((move) => Dex.moves.get(move).name).sort().join(", ")}<br/>`;
      }
      buf += "</details>";
      buf += "<hr/>";
    }
    this.sendReply(inexactMsg);
    this.sendReplyBox(buf);
  },
  tandemshelp: [
    `/tandems [pokemon] - Show the possible Tandems of a Head Pokemon in [Gen 9] Random Tandem.`,
    `/tandems all - Shows a list of all Head Pokemon in [Gen 9] Random Tandem.`,
    `!tandems [pokemon] - Shows everyone that information. Requires: + % @ ~`
  ]
  /* dexentry(target, room, user, connection, cmd) {
  		if (!target) return this.parse('/help dexentry');
  
  		const dex = Dex.forFormat('gen9randombattle');
  		const dexEntry: { [species: string]: Entries } = require('./../../data/mods/gen9randomtandem/entries.json');
  
  		const pokemon = dex.species.get(target);
  		const entry = dexEntry[pokemon.id];
  
  		if (!pokemon.exists || !entry) return this.parse('/help dexentry');
  		if (!this.runBroadcast()) return;
  
  		let buf = `<span class="gray">Flavor for ${pokemon.name}:</span><br/>`;
  		// we COULD guard against nonexistence but that should never happen anyway
  		buf += `<b>${entry.redName} Red:</b> ${entry.redEntry}`;
  		if (entry.greenName && entry.greenEntry) {
  			buf += `<br/><b>${entry.greenName} Green:</b> ${entry.greenEntry}`;
  		}
  
  		this.sendReplyBox(buf);
  	},
  	dexentryhelp: [
  		`/dexentry [pokemon] - Show the Dex flavor for the [pokemon] in [FILL].`,
  		`!dexentry [pokemon] - Shows everyone that information. Requires: + % @ ~`,
  	], */
};
//# sourceMappingURL=petmods.js.map
