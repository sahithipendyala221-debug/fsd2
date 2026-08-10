// Program to Merge Two Arrays Using the Spread Operator

let arr1: number[] = [10, 20, 30];
let arr2: number[] = [40, 50, 60];

// Merge the arrays using the spread operator
let mergedArray: number[] = [...arr1, ...arr2];

// Display the arrays
console.log("First Array = " + arr1);
console.log("Second Array = " + arr2);
console.log("Merged Array = " + mergedArray);
