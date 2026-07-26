// Program to Find Duplicate Elements in an Array

let arr: number[] = [10, 20, 30, 20, 40, 10, 50];

console.log("Duplicate Elements:");

for (let i: number = 0; i < arr.length; i++) {

    for (let j: number = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            console.log(arr[i]);
            break;
        }
    }
}