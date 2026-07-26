// Program to Find the Second Largest Number in an Array

let arr: number[] = [12, 45, 8, 67, 23, 90, 34];

let largest: number = arr[0];
let secondLargest: number = arr[0];

// Find the second largest number
for (let i: number = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }
    else if (arr[i] > secondLargest && arr[i] != largest) {
        secondLargest = arr[i];
    }
}


console.log("Second Largest Number = " + secondLargest);