// =====================================
// Program 1: Using the 'any' Type
// =====================================

let customer: any = "Ravi";

console.log("Customer:", customer);

customer = 12345;
console.log("Customer ID:", customer);

customer = false;
console.log("Membership Active:", customer);


// =====================================
// Program 2: Using the 'unknown' Type
// =====================================

let item: unknown = "Laptop";

if (typeof item === "string") {
    console.log("Item Name:", item);
    console.log("Length:", item.length);
}

item = 1500;

if (typeof item === "number") {
    console.log("Price:", item);
}


// =====================================
// Program 3: Using the 'void' Type
// =====================================

function displayOrder(orderId: number): void {
    console.log("Order ID:", orderId);
}

function displayStatus(status: string): void {
    console.log("Order Status:", status);
}

displayOrder(101);
displayStatus("Delivered");