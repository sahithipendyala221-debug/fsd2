// Program to Check Strong Number

let num: number = 145;
let originalNum: number = num;
let sum: number = 0;

// Find the sum of factorials of each digit
while (num > 0) {

    let digit: number = num % 10;
    let factorial: number = 1;

    // Calculate factorial of the digit
    for (let i: number = 1; i <= digit; i++) {
        factorial = factorial * i;
    }

    sum = sum + factorial;

    // Remove the last digit
    num = Math.floor(num / 10);
}

// Check whether the number is Strong or not
if (sum === originalNum) {
    console.log(originalNum + " is a Strong Number.");
} else {
    console.log(originalNum + " is Not a Strong Number.");
}