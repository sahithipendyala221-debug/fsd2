// Program to Create a Student Class with a readonly Student ID

class Student {

    readonly studentId: number;
    name: string;
    course: string;

    // Constructor
    constructor(studentId: number, name: string, course: string) {
        this.studentId = studentId;
        this.name = name;
        this.course = course;
    }

    // Method to display student details
    display(): void {
        console.log("Student ID = " + this.studentId);
        console.log("Student Name = " + this.name);
        console.log("Course = " + this.course);
    }
}

// Create an object
let student1 = new Student(101, "Sahithi", "B.Tech");

// Display student details
student1.display();

