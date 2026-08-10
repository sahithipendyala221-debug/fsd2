let num1: number = 12;
let num2: number = 18;

let a: number = num1;
let b: number = num2;

// Find GCD
while (b !== 0) {
    let temp: number = b;
    b = a % b;
    a = temp;
}

let gcd: number = a;

// Find LCM
let lcm: number = (num1 * num2) / gcd;

// Display the results
console.log("First Number = " + num1);
console.log("Second Number = " + num2);
console.log("GCD = " + gcd);
console.log("LCM = " + lcm);
