// Generic Box<T> Class to Store and Display Different Types of Data

class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Stored Value:", this.value);
    }
}

// Box with Number
let numberBox = new Box<number>(100);
numberBox.display();

// Box with String
let stringBox = new Box<string>("Hello TypeScript");
stringBox.display();

// Box with Boolean
let booleanBox = new Box<boolean>(true);
booleanBox.display();
