// Program to Demonstrate public, private, and protected Access Modifiers

class Employee {

    public name: string;

    private salary: number;

    protected department: string;

    // Constructor
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    // Method to display employee details
    display(): void {
        console.log("Employee Name = " + this.name);
        console.log("Salary = " + this.salary);
        console.log("Department = " + this.department);
    }
}

// Derived class
class Manager extends Employee {

    showDepartment(): void {
        console.log("Department = " + this.department);
    }
}

// Create object
let emp1 = new Employee("Sahithi", 50000, "IT");

// Access public member
console.log("Employee Name = " + emp1.name);


// Display details using method
emp1.display();

// Create Manager object
let manager1 = new Manager("Abhi", 70000, "HR");

// Access protected member through derived class
manager1.showDepartment();
