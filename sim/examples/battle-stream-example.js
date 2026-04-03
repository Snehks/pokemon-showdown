"use strict";
/**
 * Battle Stream Example
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Example of how to create AIs battling against each other.
 * Run this using `node build && node .sim-dist/examples/battle-stream-example`.
 *
 * @license MIT
 * @author Guangcong Luo <guangcongluo@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const random_player_ai_1 = require("../tools/random-player-ai");
/*********************************************************************
 * Run AI
 *********************************************************************/
const streams = (0, __1.getPlayerStreams)(new __1.BattleStream());
const spec = {
    formatid: "gen7customgame",
};
const p1spec = {
    name: "Bot 1",
    team: __1.Teams.pack(__1.Teams.generate('gen7randombattle')),
};
const p2spec = {
    name: "Bot 2",
    team: __1.Teams.pack(__1.Teams.generate('gen7randombattle')),
};
const p1 = new random_player_ai_1.RandomPlayerAI(streams.p1);
const p2 = new random_player_ai_1.RandomPlayerAI(streams.p2);
console.log("p1 is " + p1.constructor.name);
console.log("p2 is " + p2.constructor.name);
void p1.start();
void p2.start();
void (async () => {
    for await (const chunk of streams.omniscient) {
        console.log(chunk);
    }
})();
void streams.omniscient.write(`>start ${JSON.stringify(spec)}
>player p1 ${JSON.stringify(p1spec)}
>player p2 ${JSON.stringify(p2spec)}`);
