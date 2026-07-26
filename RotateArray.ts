// Program to Rotate an Array by N Positions

let arr: number[] = [10, 20, 30, 40, 50];
let n: number = 2;

// Rotate the array
let rotatedArray: number[] = [...arr.slice(n), ...arr.slice(0, n)];

// Display the result
console.log("Original Array = " + arr);
console.log("Rotated Array = " + rotatedArray);