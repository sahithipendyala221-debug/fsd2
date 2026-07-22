// =============================
// Program 1: Product Details
// =============================

let productName: string = "Wireless Mouse";
let productPrice: number = 49.99;
let isAvailable: boolean = true;

console.log("Data type of productName is -> " + typeof productName);
console.log("Data type of productPrice is -> " + typeof productPrice);
console.log("Data type of isAvailable is -> " + typeof isAvailable);

function displayProductDetails(title: string, cost: number, inStock: boolean): void {
    console.log(`Product: ${title}`);
    console.log(`Price: $${cost}`);
    console.log(`Availability: ${inStock ? "In Stock" : "Out of Stock"}`);
}

displayProductDetails(productName, productPrice, isAvailable);


// =============================
// Program 2: Student Details
// =============================

let studentName: string = "Rahul";
let studentAge: number = 20;
let isPresent: boolean = true;

console.log("Data type of studentName is -> " + typeof studentName);
console.log("Data type of studentAge is -> " + typeof studentAge);
console.log("Data type of isPresent is -> " + typeof isPresent);

function displayStudentDetails(name: string, age: number, present: boolean): void {
    console.log(`Student Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Attendance: ${present ? "Present" : "Absent"}`);
}

displayStudentDetails(studentName, studentAge, isPresent);


// =============================
// Program 3: Employee Details
// =============================

let employeeName: string = "Anjali";
let employeeSalary: number = 55000;
let isPermanent: boolean = true;

console.log("Data type of employeeName is -> " + typeof employeeName);
console.log("Data type of employeeSalary is -> " + typeof employeeSalary);
console.log("Data type of isPermanent is -> " + typeof isPermanent);

function displayEmployeeDetails(name: string, salary: number, permanent: boolean): void {
    console.log(`Employee Name: ${name}`);
    console.log(`Salary: ₹${salary}`);
    console.log(`Employment Status: ${permanent ? "Permanent" : "Temporary"}`);
}

displayEmployeeDetails(employeeName, employeeSalary, isPermanent);