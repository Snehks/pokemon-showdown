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
var ui_template_exports = {};
__export(ui_template_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(ui_template_exports);
const translations = {
  // #region Generic
  // ==================================================================
  // TRANSLATORS: a label, like "Ability: Intimidate"
  "{LABEL}: ": null,
  "{PERCENT}%": null,
  // TRANSLATORS: as a value, like "Ability: None"
  "None": null,
  "(no item)": null,
  "(no ability)": null,
  "(no weather)": null,
  // TRANSLATORS: a side condition on the opponent's side, like "Foe's Stealth Rock"
  "Foe's {CONDITION}": null,
  // TRANSLATORS: for constructing lists
  "{FIRST} or {SECOND}": null,
  "{FIRST} and {SECOND}": null,
  ", {NEXT}": null,
  ", or {LAST}": null,
  ", and {LAST}": null,
  // TRANSLATORS: this is for lists of users specifically
  // TRANSLATORS: (languages with counters should use the "person" counter)
  ", and {NUMBER} others": null,
  // #endregion Generic
  // #region Dex
  // ==================================================================
  "Pok\xE9mon": null,
  "Move": null,
  // NOT USED
  "Moves": null,
  "Item": null,
  "Items": null,
  "Ability": null,
  "Abilities": null,
  "Hidden Ability": null,
  // TRANSLATORS: "" as in a Pokémon's type; "kind" as in kind of tournament or help ticket
  "Type": {
    "": null,
    "kind": null
  },
  "Types": null,
  "Nature": null,
  "Category": null,
  "Categories": null,
  "Gender": null,
  "Egg Group": null,
  // NOT USED
  "Egg Groups": null,
  "Tag": null,
  // NOT USED
  "Article": null,
  "Articles": null,
  // NOT USED
  "Tier": null,
  // NOT USED
  "Tiers": null,
  "Format": null,
  "Formats": null,
  // NOT USED
  "Color": null,
  // TRANSLATORS: "" as in a form you fill in; "like forme" as in a Pokémon's form/forme
  "Form": {
    "": null,
    "like forme": null
    // NOT USED
  },
  "Forme": null,
  // NOT USED
  "Dex#": null,
  "Generation": null,
  // TRANSLATORS: intentionally chosen to be very short. do not go longer than three letters for this one
  "Gen {NUMBER}": null,
  "Evolution": null,
  "Pre-Evolution": null,
  "Does Not Evolve": null,
  // TRANSLATORS: /dt details
  "Height": null,
  "{NUMBER} m": null,
  "Weight": null,
  "{NUMBER} kg": null,
  "Crit rate": null,
  // TRANSLATORS: "" as in user account; "pokemon" as in someone who uses an item/move
  "User": {
    "": null,
    "pokemon": null
  },
  "Required move": null,
  "Target": null,
  "Z-Crystal": null,
  "Dynamax power": null,
  "Past gens only": null,
  "Fling base power": null,
  "Fling effect": null,
  "Natural Gift type": null,
  "Natural Gift base power": null,
  // #endregion Dex
  // #region Teambuilder
  // ==================================================================
  "Shiny": null,
  "Happiness": null,
  "Level": null,
  "Nickname": null,
  // TRANSLATORS: only the EV vs IV distinction is important
  // TRANSLATORS: the English speaking community likes to distinguish all of these,
  // TRANSLATORS: but other languages don't need to
  "EV": null,
  // NOT USED
  "EVs": null,
  "IV": null,
  // NOT USED
  "IVs": null,
  "DVs": null,
  "AV": null,
  // NOT USED
  "AVs": null,
  "Point": null,
  // NOT USED
  "Points": null,
  // TRANSLATORS: used in Teambuilder, so it should be capitalized (unlike "stats" in names.ts)
  "Stats": null,
  "Team": null,
  // TRANSLATORS: "Teams" as in "plural of Team"
  "Teams": null,
  // NOT USED
  "Teams List": null,
  // NOT USED
  "Tera {TYPE}": null,
  // TRANSLATORS: the Tera type label in the team editor (the battle button uses "Tera {TYPE}" with the type's icon)
  "Tera": null,
  // TRANSLATORS: search result headings
  // TRANSLATORS: "Usually useless" is intentionally evasive
  // TRANSLATORS: only for moves that are outclassed or widely considered obviously bad
  // TRANSLATORS: (to avoid arguments about what we're recommending)
  "Usually useless moves": null,
  "Sketched moves": null,
  "Useless sketched moves": null,
  "Special Event Ability": null,
  "Situational Abilities": null,
  "Unviable Abilities": null,
  "Illegal Pok\xE9mon": null,
  "Illegal results": null,
  "CAP moves": null,
  "Glitch": null,
  "{TYPE}-type Pok\xE9mon": null,
  "{TYPE}-type moves": null,
  "{CATEGORY} moves": null,
  "{ABILITY} Pok\xE9mon": null,
  "Specific to {VALUE}": null,
  "Generation {NUMBER}": null,
  // #endregion Teambuilder
  // #region Battle
  // ==================================================================
  "Mega Evolution": null,
  "Z-Power": null,
  "Z-Effect": null,
  "Dynamax": null,
  "Dynamax Level": null,
  "Ultra Burst": null,
  // TRANSLATORS: type effectiveness
  "Super effective": null,
  "Extremely effective": null,
  "Effective": null,
  // NOT USED
  "Not very effective": null,
  "Mostly ineffective": null,
  "No effect": null,
  "Weak": null,
  "Resist": null,
  "Immune": null,
  // NOT USED
  // TRANSLATORS: battle tooltips
  "Usually moves first (priority +{PRIORITY}).": null,
  "Nearly always moves first (priority +{PRIORITY}).": null,
  "Nearly always moves last (priority \u2212{PRIORITY}).": null,
  "Fails if current HP is {HP}.": null,
  "KOs yourself if current HP is exactly {HP}.": null,
  "(Transformed into {SPECIES})": null,
  "(Changed forme: {SPECIES})": null,
  "Possible Illusion #{NUMBER}": null,
  "({HP}/{MAXHP} pixels)": null,
  "Would take if ability removed: {PERCENT}%": null,
  "Next damage: {PERCENT}%": null,
  "Turns asleep: {NUMBER}": null,
  "(More than 4 moves is usually a sign of Illusion Zoroark/Zorua.)": null,
  "(Pressure is not visible in Gen 3, so in certain situations, the exact amount of PP used may be unknown.)": null,
  "(Your opponent has two indistinguishable Pok\xE9mon, making it impossible for you to tell which one has which moves/ability/item.)": null,
  "(no conditions)": null,
  "({NUMBER} turn)": null,
  "({NUMBER} turns)": null,
  "(After stat modifiers:)": null,
  "Calls {MOVE}": null,
  "(base: {VALUE})": null,
  "({LOW} to {HIGH})": null,
  "(revealed)": null,
  "{LOW} to {HIGH}": null,
  "(before stat stage changes)": null,
  "(before external modifiers)": null,
  "<strong>{EFFECT}</strong> vs. {POKEMON}": null,
  "Base power vs. {POKEMON}": null,
  " or ": null
  // #endregion Battle
};
//# sourceMappingURL=ui-template.js.map
