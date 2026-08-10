// Program to Check Perfect Number

let num: number = 28;
let sum: number = 0;

// Find the sum of all proper divisors
for (let i: number = 1; i < num; i++) {
    if (num % i === 0) {
        sum = sum + i;
    }
}

// Check whether the number is perfect or not
if (sum === num) {
    console.log(num + " is a Perfect Number.");
} else {
    console.log(num + " is Not a Perfect Number.");
}
