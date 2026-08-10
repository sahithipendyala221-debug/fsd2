// Program to Find the Sum of Digits of a Number

let num: number = 12345;
let sum: number = 0;

// Find the sum of digits
while (num > 0) {

    // Extract the last digit
    let digit: number = num % 10;

    // Add the digit to sum
    sum = sum + digit;

    // Remove the last digit
    num = Math.floor(num / 10);
}

// Display the result
console.log("Sum of Digits = " + sum);
