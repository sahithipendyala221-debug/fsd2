"use strict";
function computeFinalCostTraditional(amount, taxRatio) {
    return amount + (amount * taxRatio);
}
const computeFinalCostArrow = (amount, taxRatio) => {
    return amount + (amount * taxRatio);
};
const createGreetingBanner = (venueName) => `Enjoy your session at ${venueName}!`;
const standardRate = 420;
const dutyFee = 0.12;
console.log(createGreetingBanner("Premium Arena"));
const totalTraditional = computeFinalCostTraditional(standardRate, dutyFee);
console.log("Traditional Calculation: $" + totalTraditional);
const totalArrow = computeFinalCostArrow(standardRate, dutyFee);
console.log("Arrow Calculation: $" + totalArrow);
