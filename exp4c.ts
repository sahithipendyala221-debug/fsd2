// Generic Variables

let productIds: Array<number> = [101, 102, 103];
let employeeNames: Array<string> = ["Arjun", "Meera", "Kiran"];

console.log("Product IDs:", productIds);
console.log("Employee Names:", employeeNames);


// Generic Class

class Inventory<T> {
    item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        console.log("Getting Item...");
        return this.item;
    }

    updateItem(newItem: T): void {
        this.item = newItem;
        console.log("Item Updated Successfully");
    }
}

const laptopStock = new Inventory<number>(25);
console.log("Laptop Stock:", laptopStock.getItem());

laptopStock.updateItem(30);
console.log("Updated Stock:", laptopStock.getItem());

const department = new Inventory<string>("Computer Science");
console.log("Department:", department.getItem());

interface Book {
    title: string;
    pages: number;
}

const bookStore = new Inventory<Book>({
    title: "Learning TypeScript",
    pages: 420
});

console.log("Book:", bookStore.getItem());


// Generic Functions

function getLastElement<T>(items: T[]): T {
    return items[items.length - 1];
}

console.log(getLastElement([10, 20, 30, 40]));
console.log(getLastElement(["Red", "Blue", "Green"]));

function createPackage<T>(item: T): { data: T; packedBy: string } {
    return {
        data: item,
        packedBy: "Warehouse-A"
    };
}

console.log(createPackage("Monitor"));
console.log(createPackage(999));

interface Mobile {
    brand: string;
    model: string;
}

const mobile: Mobile = {
    brand: "OnePlus",
    model: "12R"
};

console.log(createPackage(mobile));


// Generic Constraints

interface HasName {
    name: string;
}

function printName<T extends HasName>(value: T): void {
    console.log("Name:", value.name);
}

const student = {
    name: "Akhil",
    age: 20
};

const employee = {
    name: "Sneha",
    city: "Hyderabad"
};

printName(student);
printName(employee);

interface HasPrice {
    price: number;
}

function showPrice<T extends HasPrice>(product: T): void {
    console.log("Price: ₹" + product.price);
}

const keyboard = {
    product: "Keyboard",
    price: 1200
};

const mouse = {
    product: "Mouse",
    price: 800,
    company: "Logitech"
};

showPrice(keyboard);
showPrice(mouse);

const lastNumber = getLastElement([5, 15, 25, 35]);
console.log("Last Number:", lastNumber);

const lastCity = getLastElement(["Delhi", "Mumbai", "Chennai"]);
console.log("Last City:", lastCity);