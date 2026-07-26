// Program to Find the Missing Number in an Array

let arr: number[] = [1, 2, 3, 5, 6];
let n: number = 6;

// Calculate the expected sum of numbers from 1 to n
let totalSum: number = (n * (n + 1)) / 2;

// Calculate the sum of array elements
let arraySum: number = 0;

for (let i: number = 0; i < arr.length; i++) {
    arraySum = arraySum + arr[i];
}

// Find the missing number
let missingNumber: number = totalSum - arraySum;

// Display the result
console.log("Missing Number = " + missingNumber);