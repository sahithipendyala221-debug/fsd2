// ====================== PROGRAM 1 ======================
// Variable Type Annotations

let studentName: string = "Arjun";
let studentAge: number = 20;
let isHosteller: boolean = true;

// Function Parameter and Return Type Annotations

function getStudentInfo(name: string, age: number): string {
    return `${name} is ${age} years old.`;
}

// Array Annotations

let subjects: string[] = ["Java", "Python", "TypeScript"];

// Using Annotated Variables and Function

const studentSummary: string = getStudentInfo(studentName, studentAge);

console.log(studentSummary);
console.log(`Subjects: ${subjects.join(", ")}`);
console.log(`Hosteller: ${isHosteller ? "Yes" : "No"}`);


// ====================== PROGRAM 2 ======================
// Variable Type Annotations

let productName: string = "Laptop";
let productPrice: number = 65000;
let inStock: boolean = true;

// Function Parameter and Return Type Annotations

function getProductDetails(name: string, price: number): string {
    return `${name} costs ₹${price}.`;
}

// Array Annotations

let features: string[] = ["16GB RAM", "512GB SSD", "Intel i7"];

// Using Annotated Variables and Function

const productSummary: string = getProductDetails(productName, productPrice);

console.log(productSummary);
console.log(`Features: ${features.join(", ")}`);
console.log(`Available: ${inStock ? "Yes" : "No"}`);


// ====================== PROGRAM 3 ======================
// Variable Type Annotations

let courseName: string = "TypeScript Basics";
let duration: number = 30;
let certificateAvailable: boolean = true;

// Function Parameter and Return Type Annotations

function getCourseInfo(course: string, days: number): string {
    return `${course} is completed in ${days} days.`;
}

// Array Annotations

let topics: string[] = ["Variables", "Functions", "Arrays"];

// Using Annotated Variables and Function

const courseSummary: string = getCourseInfo(courseName, duration);

console.log(courseSummary);
console.log(`Topics: ${topics.join(", ")}`);
console.log(`Certificate: ${certificateAvailable ? "Available" : "Not Available"}`);

/*
TYPE SAFETY CHECKS (Examples)

studentName = 123;        // Error
productPrice = "65000";   // Error
duration = "30";          // Error
*/