// Program to Create a Student Class with a Constructor

class Student {

    name: string;
    rollNo: number;
    course: string;

    // Constructor
    constructor(name: string, rollNo: number, course: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }

    // Method to display student details
    display(): void {
        console.log("Student Name = " + this.name);
        console.log("Roll Number = " + this.rollNo);
        console.log("Course = " + this.course);
    }
}

// Create an object
let student1 = new Student("Sahithi", 96 , "B.Tech");

// Call the display method
student1.display();