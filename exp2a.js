"use strict";
function welcomeCustomer(name) {
    return `Hello, ${name}! Welcome to FoodDash.`;
}
function getDeliveryAddress(area = "Downtown") {
    return `Delivery Area: ${area}`;
}
function placeOrder(itemId, instructions) {
    console.log("Processing item ID: " + itemId);
    if (instructions) {
        console.log("Note: " + instructions);
    }
}
function computeBillTotal(...prices) {
    return prices.reduce((sum, current) => sum + current, 0);
}
const addTaxAndDelivery = (baseCost, charge) => baseCost + charge;
const getPromoBanner = (restaurant) => `Exclusive deals at ${restaurant}!`;
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
