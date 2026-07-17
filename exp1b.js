"use strict";
let gameReward = 50;
gameReward = "Golden Key";
gameReward = true;
let looseData = "Level Completed";
if (typeof looseData === "string") {
    console.log("Message length: " + looseData.length);
}
function broadcastAlert(phrase) {
    console.log("GAME NOTICE: " + phrase);
}
broadcastAlert("New player joined.");
