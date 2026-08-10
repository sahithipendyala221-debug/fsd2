// Program to Convert Binary to Decimal

let binary: string = "11001";
let decimal: number = 0;
let power: number = 0;

// Convert Binary to Decimal
for (let i: number = binary.length - 1; i >= 0; i--) {

    // Convert the character to a number
    let digit: number = Number(binary[i]);

    // Add digit × 2^power to decimal
    decimal = decimal + digit * Math.pow(2, power);

    // Increase the power
    power++;
}

// Display the result
console.log("Binary Number = " + binary);
console.log("Decimal Number = " + decimal);
