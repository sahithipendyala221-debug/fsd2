// Program 1: Check Prime Number

let num: number = 29;
let isPrime: boolean = true;

// Numbers less than or equal to 1 are not prime
if (num <= 1) {
    isPrime = false;
} else {
    // Check divisibility from 2 to square root of the number
    for (let i: number = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Display the result
if (isPrime) {
    console.log(num + " is a Prime Number.");
} else {
    console.log(num + " is Not a Prime Number.");
}
