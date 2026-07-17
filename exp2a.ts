function welcomeCustomer(name: string): string {
    return `Hello, ${name}! Welcome to FoodDash.`;
}

function getDeliveryAddress(area: string = "Downtown"): string {
    return `Delivery Area: ${area}`;
}

function placeOrder(itemId: number, instructions?: string): void {
    console.log("Processing item ID: " + itemId);
    if (instructions) {
        console.log("Note: " + instructions);
    }
}

function computeBillTotal(...prices: number[]): number {
    return prices.reduce((sum, current) => sum + current, 0);
}

const addTaxAndDelivery = (baseCost: number, charge: number) => baseCost + charge;
const getPromoBanner = (restaurant: string): string => `Exclusive deals at ${restaurant}!`;

console.log(welcomeCustomer("Rohan"));
console.log(getDeliveryAddress());
console.log(getDeliveryAddress("North End"));

placeOrder(501);
placeOrder(702, "Leave at the door step");

const billAmount = computeBillTotal(12, 5, 24, 8);
console.log("Subtotal: $" + billAmount);

const finalPrice = addTaxAndDelivery(billAmount, 4.5);
console.log("Grand Total: $" + finalPrice);
console.log(getPromoBanner("Burger Joint"));