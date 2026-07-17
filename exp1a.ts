let productName: string = "Wireless Mouse";
let productPrice: number = 49.99;
let isAvailable: boolean = true;

console.log("Data type of productName is -> " + typeof productName); 
console.log("Data type of productPrice is -> " + typeof productPrice); 
console.log("Data type of isAvailable is -> " + typeof isAvailable); 

function displayProductDetails(title: string, cost: number, inStock: boolean): void {
    console.log(`Product: ${title}`);
    console.log(`Price: $${cost}`);
    console.log(`Availability: ${inStock ? "In Stock" : "Out of Stock"}`);
}

displayProductDetails(productName, productPrice, isAvailable);