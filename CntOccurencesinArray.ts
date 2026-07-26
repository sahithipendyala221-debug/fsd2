// Program to Count the Occurrences of Each Element in an Array

let arr: number[] = [10, 20, 10, 30, 20, 10, 40];
let count: { [key: number]: number } = {};

// Count the occurrences
for (let i: number = 0; i < arr.length; i++) {

    let element: number = arr[i];

    if (count[element]) {
        count[element]++;
    } else {
        count[element] = 1;
    }
}

// Display the occurrences
console.log("Array = " + arr);
console.log("Occurrences of Each Element:");

for (let element in count) {
    console.log(element + " : " + count[element]);
}