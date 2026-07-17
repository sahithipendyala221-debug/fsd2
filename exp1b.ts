let gameReward: any = 50;
gameReward = "Golden Key";
gameReward = true;

let looseData: unknown = "Level Completed";
if (typeof looseData === "string") {
    console.log("Message length: " + looseData.length);
}

function broadcastAlert(phrase: string): void {
    console.log("GAME NOTICE: " + phrase);
}

broadcastAlert("New player joined.");