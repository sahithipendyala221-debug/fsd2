// Program to Demonstrate Static Variable and Static Method

class Student {

    name: string;

    // Static variable
    static collegeName: string = "SVECW";

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Instance method
    displayStudent(): void {
        console.log("Student Name = " + this.name);
    }

    // Static method
    static displayCollege(): void {
        console.log("College Name = " + Student.collegeName);
    }
}

// Create objects
let student1 = new Student("Abhi");
let student2 = new Student("Sahithi");

// Display student details
student1.displayStudent();
student2.displayStudent();

// Call the static method
Student.displayCollege();
