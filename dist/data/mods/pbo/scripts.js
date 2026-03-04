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
var scripts_exports = {};
__export(scripts_exports, {
  Scripts: () => Scripts
});
module.exports = __toCommonJS(scripts_exports);
const PBO_EVENT_FORMS = [
  ["abomasnowc", "abomasnow", "Abomasnow-C", "C"],
  ["absolh", "absol", "Absol-H", "H"],
  ["absolh2", "absol", "Absol-H2", "H2"],
  ["absolh3fullmoon", "absol", "Absol-H3-FullMoon", "H3-FullMoon"],
  ["absolh3shadowmoon", "absol", "Absol-H3-ShadowMoon", "H3-ShadowMoon"],
  ["absolh4", "absol", "Absol-H4", "H4"],
  ["aerodactylh", "aerodactyl", "Aerodactyl-H", "H"],
  ["aggronh4", "aggron", "Aggron-H4", "H4"],
  ["aggronmegah4", "aggronmega", "Aggron-Mega-H4", "H4"],
  ["alakazamh", "alakazam", "Alakazam-H", "H"],
  ["alakazamh2", "alakazam", "Alakazam-H2", "H2"],
  ["altariac", "altaria", "Altaria-C", "C"],
  ["annihilapes", "annihilape", "Annihilape-S", "S"],
  ["appletune", "appletun", "Appletun-E", "E"],
  ["appline", "applin", "Applin-E", "E"],
  ["arbokh4", "arbok", "Arbok-H4", "H4"],
  ["arcaninec", "arcanine", "Arcanine-C", "C"],
  ["archeopsh4", "archeops", "Archeops-H4", "H4"],
  ["armaldoh4", "armaldo", "Armaldo-H4", "H4"],
  ["armarougeh4", "armarouge", "Armarouge-H4", "H4"],
  ["azumarille", "azumarill", "Azumarill-E", "E"],
  ["azumarillh", "azumarill", "Azumarill-H", "H"],
  ["bagonh", "bagon", "Bagon-H", "H"],
  ["banetteh", "banette", "Banette-H", "H"],
  ["banetteh2", "banette", "Banette-H2", "H2"],
  ["banetteh3day", "banette", "Banette-H3-Day", "H3-Day"],
  ["banetteh3night", "banette", "Banette-H3-Night", "H3-Night"],
  ["banetteh4", "banette", "Banette-H4", "H4"],
  ["barraskewdas", "barraskewda", "Barraskewda-S", "S"],
  ["beartich", "beartic", "Beartic-H", "H"],
  ["bisharph", "bisharp", "Bisharp-H", "H"],
  ["blacephalonh", "blacephalon", "Blacephalon-H", "H"],
  ["blastoiseh", "blastoise", "Blastoise-H", "H"],
  ["blastoiseh2", "blastoise", "Blastoise-H2", "H2"],
  ["blastoises", "blastoise", "Blastoise-S", "S"],
  ["blisseyh", "blissey", "Blissey-H", "H"],
  ["braixenh", "braixen", "Braixen-H", "H"],
  ["braixenh2", "braixen", "Braixen-H2", "H2"],
  ["breloomh4", "breloom", "Breloom-H4", "H4"],
  ["brelooms", "breloom", "Breloom-S", "S"],
  ["bulbasaurh", "bulbasaur", "Bulbasaur-H", "H"],
  ["bunearye", "buneary", "Buneary-E", "E"],
  ["cacturnec", "cacturne", "Cacturne-C", "C"],
  ["camerupts", "camerupt", "Camerupt-S", "S"],
  ["celebic4", "celebi", "Celebi-C4", "C4"],
  ["ceruledgeh4", "ceruledge", "Ceruledge-H4", "H4"],
  ["chandelureh4", "chandelure", "Chandelure-H4", "H4"],
  ["chandelures", "chandelure", "Chandelure-S", "S"],
  ["chanseyh", "chansey", "Chansey-H", "H"],
  ["charizardh", "charizard", "Charizard-H", "H"],
  ["charizardh2", "charizard", "Charizard-H2", "H2"],
  ["charizards", "charizard", "Charizard-S", "S"],
  ["charmanderh", "charmander", "Charmander-H", "H"],
  ["charmeleonh", "charmeleon", "Charmeleon-H", "H"],
  ["chesnaughts", "chesnaught", "Chesnaught-S", "S"],
  ["cinderaceh", "cinderace", "Cinderace-H", "H"],
  ["cinderaceh4", "cinderace", "Cinderace-H4", "H4"],
  ["clefablec4", "clefable", "Clefable-C4", "C4"],
  ["cloysterc4", "cloyster", "Cloyster-C4", "C4"],
  ["cloysterh", "cloyster", "Cloyster-H", "H"],
  ["cobalionh4", "cobalion", "Cobalion-H4", "H4"],
  ["comfeyh4", "comfey", "Comfey-H4", "H4"],
  ["conkeldurrh", "conkeldurr", "Conkeldurr-H", "H"],
  ["conkeldurrh2", "conkeldurr", "Conkeldurr-H2", "H2"],
  ["corviknighth4", "corviknight", "Corviknight-H4", "H4"],
  ["crawdaunth", "crawdaunt", "Crawdaunt-H", "H"],
  ["cresseliac", "cresselia", "Cresselia-C", "C"],
  ["cresseliah4", "cresselia", "Cresselia-H4", "H4"],
  ["crocalors", "crocalor", "Crocalor-S", "S"],
  ["cuboneh", "cubone", "Cubone-H", "H"],
  ["darmanitanh", "darmanitan", "Darmanitan-H", "H"],
  ["dartrixs", "dartrix", "Dartrix-S", "S"],
  ["decidueyehisuis", "decidueyehisui", "Decidueye-Hisui-S", "S"],
  ["delibirdc4", "delibird", "Delibird-C4", "C4"],
  ["delphoxh", "delphox", "Delphox-H", "H"],
  ["delphoxh2", "delphox", "Delphox-H2", "H2"],
  ["delphoxh4", "delphox", "Delphox-H4", "H4"],
  ["diggersbye", "diggersby", "Diggersby-E", "E"],
  ["dippline", "dipplin", "Dipplin-E", "E"],
  ["dragapulth", "dragapult", "Dragapult-H", "H"],
  ["dragapulth2", "dragapult", "Dragapult-H2", "H2"],
  ["dragonitec", "dragonite", "Dragonite-C", "C"],
  ["dragonites", "dragonite", "Dragonite-S", "S"],
  ["eeveeh", "eevee", "Eevee-H", "H"],
  ["eeveeh2", "eevee", "Eevee-H2", "H2"],
  ["eevees", "eevee", "Eevee-S", "S"],
  ["electabuzzh", "electabuzz", "Electabuzz-H", "H"],
  ["electivirec", "electivire", "Electivire-C", "C"],
  ["electivireh", "electivire", "Electivire-H", "H"],
  ["empoleonh4", "empoleon", "Empoleon-H4", "H4"],
  ["empoleons", "empoleon", "Empoleon-S", "S"],
  ["enteih", "entei", "Entei-H", "H"],
  ["enteih2", "entei", "Entei-H2", "H2"],
  ["enteih3", "entei", "Entei-H3", "H3"],
  ["espathrav", "espathra", "Espathra-V", "V"],
  ["espeonh", "espeon", "Espeon-H", "H"],
  ["espeons", "espeon", "Espeon-S", "S"],
  ["excadrills", "excadrill", "Excadrill-S", "S"],
  ["exeggcutee", "exeggcute", "Exeggcute-E", "E"],
  ["exeggutoralolae", "exeggutoralola", "Exeggutor-Alola-E", "E"],
  ["exeggutore", "exeggutor", "Exeggutor-E", "E"],
  ["feebash", "feebas", "Feebas-H", "H"],
  ["fennekinh", "fennekin", "Fennekin-H", "H"],
  ["fennekinh2", "fennekin", "Fennekin-H2", "H2"],
  ["ferrothorns", "ferrothorn", "Ferrothorn-S", "S"],
  ["flapplee", "flapple", "Flapple-E", "E"],
  ["flareonh", "flareon", "Flareon-H", "H"],
  ["flareonh2", "flareon", "Flareon-H2", "H2"],
  ["flittlev", "flittle", "Flittle-V", "V"],
  ["flygonc4", "flygon", "Flygon-C4", "C4"],
  ["frillishh4", "frillish", "Frillish-H4", "H4"],
  ["froakies", "froakie", "Froakie-S", "S"],
  ["frogadiers", "frogadier", "Frogadier-S", "S"],
  ["fuecocos", "fuecoco", "Fuecoco-S", "S"],
  ["galladeh", "gallade", "Gallade-H", "H"],
  ["galladev", "gallade", "Gallade-V", "V"],
  ["garchompc", "garchomp", "Garchomp-C", "C"],
  ["garchomph", "garchomp", "Garchomp-H", "H"],
  ["garchompmegas", "garchompmega", "Garchomp-Mega-S", "S"],
  ["garchomps", "garchomp", "Garchomp-S", "S"],
  ["gardevoirh", "gardevoir", "Gardevoir-H", "H"],
  ["gardevoirh2", "gardevoir", "Gardevoir-H2", "H2"],
  ["gardevoirh4", "gardevoir", "Gardevoir-H4", "H4"],
  ["gardevoirmegah2", "gardevoirmega", "Gardevoir-Mega-H2", "H2"],
  ["gardevoirv", "gardevoir", "Gardevoir-V", "V"],
  ["gastrodons", "gastrodon", "Gastrodon-S", "S"],
  ["genesecte", "genesect", "Genesect-E", "E"],
  ["gengarh", "gengar", "Gengar-H", "H"],
  ["gengarh2", "gengar", "Gengar-H2", "H2"],
  ["gengarh3", "gengar", "Gengar-H3", "H3"],
  ["gholdengoc4", "gholdengo", "Gholdengo-C4", "C4"],
  ["gigalithc", "gigalith", "Gigalith-C", "C"],
  ["gimmighoulc4", "gimmighoul", "Gimmighoul-C4", "C4"],
  ["glaceonh", "glaceon", "Glaceon-H", "H"],
  ["glaceons", "glaceon", "Glaceon-S", "S"],
  ["gligarh", "gligar", "Gligar-H", "H"],
  ["gliscorh", "gliscor", "Gliscor-H", "H"],
  ["granbullh4", "granbull", "Granbull-H4", "H4"],
  ["greninjas", "greninja", "Greninja-S", "S"],
  ["greninjas2", "greninja", "Greninja-S2", "S2"],
  ["grimmsnarlc", "grimmsnarl", "Grimmsnarl-C", "C"],
  ["grimmsnarlh", "grimmsnarl", "Grimmsnarl-H", "H"],
  ["guzzlordh4", "guzzlord", "Guzzlord-H4", "H4"],
  ["gyaradosh", "gyarados", "Gyarados-H", "H"],
  ["gyaradosh2", "gyarados", "Gyarados-H2", "H2"],
  ["gyaradosh3", "gyarados", "Gyarados-H3", "H3"],
  ["hatennah", "hatenna", "Hatenna-H", "H"],
  ["hatterenec4", "hatterene", "Hatterene-C4", "C4"],
  ["hattereneh", "hatterene", "Hatterene-H", "H"],
  ["hattremh", "hattrem", "Hattrem-H", "H"],
  ["heatranh", "heatran", "Heatran-H", "H"],
  ["helioliskc4", "heliolisk", "Heliolisk-C4", "C4"],
  ["heracrossh", "heracross", "Heracross-H", "H"],
  ["hippowdons", "hippowdon", "Hippowdon-S", "S"],
  ["hoopah4", "hoopa", "Hoopa-H4", "H4"],
  ["hoopaunboundh4", "hoopaunbound", "Hoopa-Unbound-H4", "H4"],
  ["houndoomh", "houndoom", "Houndoom-H", "H"],
  ["hydrapplee", "hydrapple", "Hydrapple-E", "E"],
  ["hydreigonc", "hydreigon", "Hydreigon-C", "C"],
  ["hydreigonh", "hydreigon", "Hydreigon-H", "H"],
  ["indeedeec", "indeedee", "Indeedee-C", "C"],
  ["indeedeev", "indeedee", "Indeedee-V", "V"],
  ["infernapeh4", "infernape", "Infernape-H4", "H4"],
  ["infernapes", "infernape", "Infernape-S", "S"],
  ["inteleonh", "inteleon", "Inteleon-H", "H"],
  ["ivysaurh", "ivysaur", "Ivysaur-H", "H"],
  ["jellicenth4", "jellicent", "Jellicent-H4", "H4"],
  ["jirachih", "jirachi", "Jirachi-H", "H"],
  ["jolteonh", "jolteon", "Jolteon-H", "H"],
  ["kabutopsh", "kabutops", "Kabutops-H", "H"],
  ["kabutopsh4", "kabutops", "Kabutops-H4", "H4"],
  ["kangaskhanh", "kangaskhan", "Kangaskhan-H", "H"],
  ["keldeoh", "keldeo", "Keldeo-H", "H"],
  ["keldeoh2", "keldeo", "Keldeo-H2", "H2"],
  ["keldeoh3", "keldeo", "Keldeo-H3", "H3"],
  ["keldeoh4", "keldeo", "Keldeo-H4", "H4"],
  ["keldeoresoluteh", "keldeoresolute", "Keldeo-Resolute-H", "H"],
  ["keldeoresoluteh2", "keldeoresolute", "Keldeo-Resolute-H2", "H2"],
  ["keldeoresoluteh3", "keldeoresolute", "Keldeo-Resolute-H3", "H3"],
  ["keldeoresoluteh4", "keldeoresolute", "Keldeo-Resolute-H4", "H4"],
  ["kingdrah", "kingdra", "Kingdra-H", "H"],
  ["kingdrah2", "kingdra", "Kingdra-H2", "H2"],
  ["kingdras", "kingdra", "Kingdra-S", "S"],
  ["kirliah", "kirlia", "Kirlia-H", "H"],
  ["klefkih4", "klefki", "Klefki-H4", "H4"],
  ["kommooe", "kommoo", "Kommo-o-E", "E"],
  ["laprass", "lapras", "Lapras-S", "S"],
  ["laprass2", "lapras", "Lapras-S2", "S2"],
  ["latiash4", "latias", "Latias-H4", "H4"],
  ["latiass", "latias", "Latias-S", "S"],
  ["latiass2", "latias", "Latias-S2", "S2"],
  ["latioss", "latios", "Latios-S", "S"],
  ["latioss2", "latios", "Latios-S2", "S2"],
  ["leafeonh", "leafeon", "Leafeon-H", "H"],
  ["leafeons", "leafeon", "Leafeon-S", "S"],
  ["lilliganthisuis", "lilliganthisui", "Lilligant-Hisui-S", "S"],
  ["lopunnye", "lopunny", "Lopunny-E", "E"],
  ["lopunnyh4", "lopunny", "Lopunny-H4", "H4"],
  ["lucarioc", "lucario", "Lucario-C", "C"],
  ["lucarioh", "lucario", "Lucario-H", "H"],
  ["lucarioh2", "lucario", "Lucario-H2", "H2"],
  ["lucarioh4", "lucario", "Lucario-H4", "H4"],
  ["lucariomegah4", "lucariomega", "Lucario-Mega-H4", "H4"],
  ["ludicolos", "ludicolo", "Ludicolo-S", "S"],
  ["luxrayh4", "luxray", "Luxray-H4", "H4"],
  ["machampc4", "machamp", "Machamp-C4", "C4"],
  ["magikarph", "magikarp", "Magikarp-H", "H"],
  ["magikarph2", "magikarp", "Magikarp-H2", "H2"],
  ["magikarph3", "magikarp", "Magikarp-H3", "H3"],
  ["magnezonec4", "magnezone", "Magnezone-C4", "C4"],
  ["mamoswinec", "mamoswine", "Mamoswine-C", "C"],
  ["mamoswineh", "mamoswine", "Mamoswine-H", "H"],
  ["mandibuzzh", "mandibuzz", "Mandibuzz-H", "H"],
  ["manectricc4", "manectric", "Manectric-C4", "C4"],
  ["mantinec4", "mantine", "Mantine-C4", "C4"],
  ["marowakalolah", "marowakalola", "Marowak-Alola-H", "H"],
  ["marowakh", "marowak", "Marowak-H", "H"],
  ["mausholdv", "maushold", "Maushold-V", "V"],
  ["mawileh", "mawile", "Mawile-H", "H"],
  ["medichamc", "medicham", "Medicham-C", "C"],
  ["medichammegac", "medichammega", "Medicham-Mega-C", "C"],
  ["meowscaradac", "meowscarada", "Meowscarada-C", "C"],
  ["metagrossh4", "metagross", "Metagross-H4", "H4"],
  ["mewh", "mew", "Mew-H", "H"],
  ["mewh2", "mew", "Mew-H2", "H2"],
  ["mewh4", "mew", "Mew-H4", "H4"],
  ["miloticc4", "milotic", "Milotic-C4", "C4"],
  ["milotich", "milotic", "Milotic-H", "H"],
  ["milotics", "milotic", "Milotic-S", "S"],
  ["miniorc4", "minior", "Minior-C4", "C4"],
  ["munchlaxc", "munchlax", "Munchlax-C", "C"],
  ["nidokingc4", "nidoking", "Nidoking-C4", "C4"],
  ["nidokingv", "nidoking", "Nidoking-V", "V"],
  ["nidoqueenc", "nidoqueen", "Nidoqueen-C", "C"],
  ["nidoqueenv", "nidoqueen", "Nidoqueen-V", "V"],
  ["ninetalesalolac", "ninetalesalola", "Ninetales-Alola-C", "C"],
  ["ninetalesalolac4", "ninetalesalola", "Ninetales-Alola-C4", "C4"],
  ["ninetalesh4", "ninetales", "Ninetales-H4", "H4"],
  ["ninetaless", "ninetales", "Ninetales-S", "S"],
  ["noctowlc4", "noctowl", "Noctowl-C4", "C4"],
  ["omastarh", "omastar", "Omastar-H", "H"],
  ["pelippers", "pelipper", "Pelipper-S", "S"],
  ["phantomblaziken", "blaziken", "Phantom Blaziken", "Phantom"],
  ["phantomsceptile", "sceptile", "Phantom Sceptile", "Phantom"],
  ["pikachus", "pikachu", "Pikachu-S", "S"],
  ["pipluph4", "piplup", "Piplup-H4", "H4"],
  ["politoeds", "politoed", "Politoed-S", "S"],
  ["poliwrathc4", "poliwrath", "Poliwrath-C4", "C4"],
  ["primarinah4", "primarina", "Primarina-H4", "H4"],
  ["primarinas", "primarina", "Primarina-S", "S"],
  ["prinpluph4", "prinplup", "Prinplup-H4", "H4"],
  ["raichualolas", "raichualola", "Raichu-Alola-S", "S"],
  ["raichus", "raichu", "Raichu-S", "S"],
  ["raikouh", "raikou", "Raikou-H", "H"],
  ["raikouh2", "raikou", "Raikou-H2", "H2"],
  ["raikouh3", "raikou", "Raikou-H3", "H3"],
  ["raltsh", "ralts", "Ralts-H", "H"],
  ["regicec", "regice", "Regice-C", "C"],
  ["reunicluss", "reuniclus", "Reuniclus-S", "S"],
  ["revavroomh4", "revavroom", "Revavroom-H4", "H4"],
  ["rhyperiorh4", "rhyperior", "Rhyperior-H4", "H4"],
  ["ribombees", "ribombee", "Ribombee-S", "S"],
  ["rillaboomh", "rillaboom", "Rillaboom-H", "H"],
  ["rioluc", "riolu", "Riolu-C", "C"],
  ["rioluh", "riolu", "Riolu-H", "H"],
  ["rioluh4", "riolu", "Riolu-H4", "H4"],
  ["roseradev", "roserade", "Roserade-V", "V"],
  ["sableyeh", "sableye", "Sableye-H", "H"],
  ["salamenceh", "salamence", "Salamence-H", "H"],
  ["salamenceh2", "salamence", "Salamence-H2", "H2"],
  ["salazzleh4", "salazzle", "Salazzle-H4", "H4"],
  ["sandslashalolac4", "sandslashalola", "Sandslash-Alola-C4", "C4"],
  ["sawsbuckc4", "sawsbuck", "Sawsbuck-C4", "C4"],
  ["sceptileh4", "sceptile", "Sceptile-H4", "H4"],
  ["scizorh", "scizor", "Scizor-H", "H"],
  ["scizorh2", "scizor", "Scizor-H2", "H2"],
  ["scizorh3", "scizor", "Scizor-H3", "H3"],
  ["scizors", "scizor", "Scizor-S", "S"],
  ["scraftyc4", "scrafty", "Scrafty-C4", "C4"],
  ["scytherh", "scyther", "Scyther-H", "H"],
  ["scytherh2", "scyther", "Scyther-H2", "H2"],
  ["scytherh3", "scyther", "Scyther-H3", "H3"],
  ["scythers", "scyther", "Scyther-S", "S"],
  ["sharpedoh", "sharpedo", "Sharpedo-H", "H"],
  ["sharpedos", "sharpedo", "Sharpedo-S", "S"],
  ["shayminlandginkgo", "shaymin", "Shaymin-Land-Ginkgo", "Land-Ginkgo"],
  ["shayminlandhydrangea", "shaymin", "Shaymin-Land-Hydrangea", "Land-Hydrangea"],
  ["shayminlandsakura", "shaymin", "Shaymin-Land-Sakura", "Land-Sakura"],
  ["shayminskyginkgo", "shayminsky", "Shaymin-Sky-Ginkgo", "Sky-Ginkgo"],
  ["shayminskyhydrangea", "shayminsky", "Shaymin-Sky-Hydrangea", "Sky-Hydrangea"],
  ["shayminskysakura", "shayminsky", "Shaymin-Sky-Sakura", "Sky-Sakura"],
  ["shelgonh", "shelgon", "Shelgon-H", "H"],
  ["shellderh", "shellder", "Shellder-H", "H"],
  ["shuppeth", "shuppet", "Shuppet-H", "H"],
  ["shuppeth2", "shuppet", "Shuppet-H2", "H2"],
  ["shuppeth3day", "shuppet", "Shuppet-H3-Day", "H3-Day"],
  ["shuppeth3night", "shuppet", "Shuppet-H3-Night", "H3-Night"],
  ["shuppeth4", "shuppet", "Shuppet-H4", "H4"],
  ["skarmoryh", "skarmory", "Skarmory-H", "H"],
  ["skarmoryh2", "skarmory", "Skarmory-H2", "H2"],
  ["skarmoryh4", "skarmory", "Skarmory-H4", "H4"],
  ["skeledirges", "skeledirge", "Skeledirge-S", "S"],
  ["skeledirges2", "skeledirge", "Skeledirge-S2", "S2"],
  ["slakingh4", "slaking", "Slaking-H4", "H4"],
  ["slowbroh", "slowbro", "Slowbro-H", "H"],
  ["slowbroh2", "slowbro", "Slowbro-H2", "H2"],
  ["slowkingh", "slowking", "Slowking-H", "H"],
  ["slowkingh2", "slowking", "Slowking-H2", "H2"],
  ["slowpokeh", "slowpoke", "Slowpoke-H", "H"],
  ["slowpokeh2", "slowpoke", "Slowpoke-H2", "H2"],
  ["snorlaxc", "snorlax", "Snorlax-C", "C"],
  ["snorlaxs", "snorlax", "Snorlax-S", "S"],
  ["snubbullh4", "snubbull", "Snubbull-H4", "H4"],
  ["squirtleh", "squirtle", "Squirtle-H", "H"],
  ["stantlerc", "stantler", "Stantler-C", "C"],
  ["staraptore", "staraptor", "Staraptor-E", "E"],
  ["starmiec", "starmie", "Starmie-C", "C"],
  ["starmiev", "starmie", "Starmie-V", "V"],
  ["staryuc", "staryu", "Staryu-C", "C"],
  ["steelixs", "steelix", "Steelix-S", "S"],
  ["suicuneh", "suicune", "Suicune-H", "H"],
  ["suicuneh2", "suicune", "Suicune-H2", "H2"],
  ["suicuneh3", "suicune", "Suicune-H3", "H3"],
  ["swamperth4", "swampert", "Swampert-H4", "H4"],
  ["sylveonh", "sylveon", "Sylveon-H", "H"],
  ["sylveons", "sylveon", "Sylveon-S", "S"],
  ["talonflamec", "talonflame", "Talonflame-C", "C"],
  ["tangrowthh", "tangrowth", "Tangrowth-H", "H"],
  ["teddiursah4", "teddiursa", "Teddiursa-H4", "H4"],
  ["tinkatinkh4", "tinkatink", "Tinkatink-H4", "H4"],
  ["tinkatonh4", "tinkaton", "Tinkaton-H4", "H4"],
  ["tinkatuffh4", "tinkatuff", "Tinkatuff-H4", "H4"],
  ["togekisse", "togekiss", "Togekiss-E", "E"],
  ["togekissh", "togekiss", "Togekiss-H", "H"],
  ["togekissv", "togekiss", "Togekiss-V", "V"],
  ["togepie", "togepi", "Togepi-E", "E"],
  ["togetice", "togetic", "Togetic-E", "E"],
  ["torkoalc", "torkoal", "Torkoal-C", "C"],
  ["torkoals", "torkoal", "Torkoal-S", "S"],
  ["torterrah4", "torterra", "Torterra-H4", "H4"],
  ["torterras", "torterra", "Torterra-S", "S"],
  ["toucannonh", "toucannon", "Toucannon-H", "H"],
  ["toxicroaks", "toxicroak", "Toxicroak-S", "S"],
  ["tropiuss", "tropius", "Tropius-S", "S"],
  ["tyranitarc4", "tyranitar", "Tyranitar-C4", "C4"],
  ["tyranitarh", "tyranitar", "Tyranitar-H", "H"],
  ["tyranitarh2", "tyranitar", "Tyranitar-H2", "H2"],
  ["tyranitarmegac4", "tyranitarmega", "Tyranitar-Mega-C4", "C4"],
  ["tyrantrumh", "tyrantrum", "Tyrantrum-H", "H"],
  ["tyrantrumh4", "tyrantrum", "Tyrantrum-H4", "H4"],
  ["umbreonh", "umbreon", "Umbreon-H", "H"],
  ["umbreonh4", "umbreon", "Umbreon-H4", "H4"],
  ["ursalunah4", "ursaluna", "Ursaluna-H4", "H4"],
  ["ursaringh4", "ursaring", "Ursaring-H4", "H4"],
  ["vanilluxec", "vanilluxe", "Vanilluxe-C", "C"],
  ["vaporeonh", "vaporeon", "Vaporeon-H", "H"],
  ["vaporeons", "vaporeon", "Vaporeon-S", "S"],
  ["venusaurc4", "venusaur", "Venusaur-C4", "C4"],
  ["venusaurh", "venusaur", "Venusaur-H", "H"],
  ["venusaurh2", "venusaur", "Venusaur-H2", "H2"],
  ["venusaurs", "venusaur", "Venusaur-S", "S"],
  ["volcanions", "volcanion", "Volcanion-S", "S"],
  ["volcanions2", "volcanion", "Volcanion-S2", "S2"],
  ["volcaronah", "volcarona", "Volcarona-H", "H"],
  ["volcaronas", "volcarona", "Volcarona-S", "S"],
  ["vulpixalolac", "vulpixalola", "Vulpix-Alola-C", "C"],
  ["wartortleh", "wartortle", "Wartortle-H", "H"],
  ["weavilec", "weavile", "Weavile-C", "C"],
  ["whimsicottc", "whimsicott", "Whimsicott-C", "C"],
  ["xurkitreec", "xurkitree", "Xurkitree-C", "C"],
  ["xurkitreec4", "xurkitree", "Xurkitree-C4", "C4"],
  ["yveltalh4", "yveltal", "Yveltal-H4", "H4"]
];
const Scripts = {
  gen: 9,
  // [PBO] Register all cosmetic event forms as clones of their base species.
  // Runs after parent data is loaded, so all base species entries are available.
  init() {
    for (const [eventId, baseId, displayName, forme] of PBO_EVENT_FORMS) {
      const baseData = this.data.Pokedex[baseId];
      if (!baseData)
        continue;
      this.data.Pokedex[eventId] = {
        ...baseData,
        name: displayName,
        baseSpecies: baseData.baseSpecies || baseData.name,
        forme,
        // Clear inherited form lists — event forms don't have sub-forms.
        otherFormes: null,
        cosmeticFormes: null,
        formeOrder: null,
        // Don't inherit evolution chains.
        evos: [],
        prevo: ""
      };
    }
  },
  // [PBO] Bag item scripts for useitem command
  bagItems: {
    potion: {
      use(battle, pokemon, itemId, data) {
        const amount = pokemon.heal(parseInt(data[0]));
        if (amount) {
          battle.add("-heal", pokemon, pokemon.getHealth, "[from] bagitem: " + itemId);
        }
      }
    },
    revive: {
      use(battle, pokemon, itemId, data) {
        const healthRatio = parseFloat(data[0]);
        if (pokemon.fainted) {
          pokemon.fainted = false;
          pokemon.side.pokemonLeft++;
          pokemon.faintQueued = false;
          pokemon.subFainted = false;
          pokemon.hp = 1;
          pokemon.cureStatus(true);
          pokemon.sethp(Math.floor(healthRatio * pokemon.maxhp));
          battle.add("-heal", pokemon, pokemon.getHealth, "[from] bagitem: " + itemId);
        }
      }
    },
    full_restore: {
      use(battle, pokemon, itemId, data) {
        const amount = pokemon.heal(pokemon.maxhp);
        if (amount) {
          battle.add("-heal", pokemon, pokemon.getHealth, "[from] bagitem: " + itemId);
        }
        if (pokemon.status) {
          pokemon.cureStatus(true);
        }
        if (pokemon.volatiles["confusion"]) {
          pokemon.removeVolatile("confusion");
        }
      }
    },
    cure_status: {
      use(battle, pokemon, itemId, data) {
        let shouldCureNonvolatile = false;
        const curedVolatiles = [];
        for (const status of data) {
          if (pokemon.status === status) {
            shouldCureNonvolatile = true;
          } else if (pokemon.volatiles[status]) {
            curedVolatiles.push(status);
          }
        }
        if (shouldCureNonvolatile) {
          pokemon.cureStatus(true);
        }
        for (const volatile of curedVolatiles) {
          pokemon.removeVolatile(volatile);
        }
      }
    },
    ether: {
      use(battle, pokemon, itemId, data) {
        const moveId = data[0];
        const amount = data[1] ? parseInt(data[1]) : 999;
        for (const moveSlot of pokemon.moveSlots) {
          if (moveSlot.id === moveId) {
            moveSlot.pp = Math.min(moveSlot.pp + amount, moveSlot.maxpp);
            break;
          }
        }
      }
    },
    elixir: {
      use(battle, pokemon, itemId, data) {
        const amount = data[0] ? parseInt(data[0]) : 999;
        for (const moveSlot of pokemon.moveSlots) {
          moveSlot.pp = Math.min(moveSlot.pp + amount, moveSlot.maxpp);
        }
      }
    },
    x_stat: {
      use(battle, pokemon, itemId, data) {
        const stat = data[0];
        const boosts = {};
        boosts[stat] = parseInt(data[1]);
        battle.boost(boosts, pokemon, null, { effectType: "BagItem", name: itemId });
      }
    },
    dire_hit: {
      use(battle, pokemon, itemId, data) {
        pokemon.addVolatile("focusenergy");
      }
    },
    guard_spec: {
      use(battle, pokemon, itemId, data) {
        pokemon.side.addSideCondition("mist");
      }
    },
    clear_boost: {
      use(battle, pokemon, itemId, data) {
        pokemon.clearBoosts();
        battle.add("-clearallboost", pokemon, "[from] bagitem: " + itemId);
      }
    },
    potion_by_portion: {
      use(battle, pokemon, itemId, data) {
        const ratio = parseFloat(data[0]);
        const healAmount = Math.floor(ratio * pokemon.maxhp);
        const amount = pokemon.heal(healAmount);
        if (amount) {
          battle.add("-heal", pokemon, pokemon.getHealth, "[from] bagitem: " + itemId);
        }
        if (data[1] === "true") {
          pokemon.addVolatile("confusion");
        }
      }
    }
  },
  pokemon: {
    inherit: true,
    // [PBO] Always include level in details string.
    // Vanilla Showdown omits level when level === 100, but PBO has levels > 100.
    getUpdatedDetails(level) {
      let name = this.species.name;
      if (["Greninja-Bond", "Rockruff-Dusk"].includes(name))
        name = this.species.baseSpecies;
      if (!level)
        level = this.level;
      return name + `, L${level}` + (this.gender === "" ? "" : `, ${this.gender}`) + (this.set.shiny ? ", shiny" : "");
    }
  }
};
//# sourceMappingURL=scripts.js.map
