// Program: Create a MathOperations Namespace with add(), subtract(), multiply(), and divide() Functions

namespace MathOperations {

    // Function to add two numbers
    export function add(a: number, b: number): number {
        return a + b;
    }

    // Function to subtract two numbers
    export function subtract(a: number, b: number): number {
        return a - b;
    }

    // Function to multiply two numbers
    export function multiply(a: number, b: number): number {
        return a * b;
    }

    // Function to divide two numbers
    export function divide(a: number, b: number): number {
        if (b === 0) {
            console.log("Division by zero is not allowed.");
            return 0;
        }
        return a / b;
    }
}

// Predefined values
let num1: number = 20;
let num2: number = 5;

// Calling namespace functions
console.log("First Number: " + num1);
console.log("Second Number: " + num2);

console.log("Addition = " + MathOperations.add(num1, num2));
console.log("Subtraction = " + MathOperations.subtract(num1, num2));
console.log("Multiplication = " + MathOperations.multiply(num1, num2));
console.log("Division = " + MathOperations.divide(num1, num2));
