function computeFinalCostTraditional(amount: number, taxRatio: number): number {
    return amount + (amount * taxRatio);
}

const computeFinalCostArrow = (amount: number, taxRatio: number): number => {
    return amount + (amount * taxRatio);
};

const createGreetingBanner = (venueName: string): string => `Enjoy your session at ${venueName}!`;

const standardRate: number = 420;
const dutyFee: number = 0.12;

console.log(createGreetingBanner("Premium Arena"));

const totalTraditional = computeFinalCostTraditional(standardRate, dutyFee);
console.log("Traditional Calculation: $" + totalTraditional);

const totalArrow = computeFinalCostArrow(standardRate, dutyFee);
console.log("Arrow Calculation: $" + totalArrow);