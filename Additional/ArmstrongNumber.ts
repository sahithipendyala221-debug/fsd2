// Program to Check Armstrong Number

let num: number = 153;
let originalNum: number = num;
let sum: number = 0;

// Count the number of digits
let digits: number = num.toString().length;

// Reset num for calculation
num = originalNum;

// Calculate the sum of each digit raised to the power of digits
while (num > 0) {
    let digit: number = num % 10;
    sum = sum + Math.pow(digit, digits);
    num = Math.floor(num / 10);
}

// Check whether the number is Armstrong or not
if (sum === originalNum) {
    console.log(originalNum + " is an Armstrong Number.");
} else {
    console.log(originalNum + " is Not an Armstrong Number.");
}
