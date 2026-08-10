// Program to Convert Decimal to Binary

let decimal: number = 25;
let binary: string = "";

// Store the original number
let originalNumber: number = decimal;

// Convert decimal to binary
while (decimal > 0) {

    // Get the remainder (0 or 1)
    let remainder: number = decimal % 2;

    // Add the remainder to the front of the binary string
    binary = remainder + binary;

    // Divide the number by 2
    decimal = Math.floor(decimal / 2);
}

// Display the result
console.log("Decimal Number = " + originalNumber);
console.log("Binary Number = " + binary);
