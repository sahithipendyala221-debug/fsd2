
class StudentPortal {
    public studentName: string;
    private password: string;
    private marks: number;
    protected attendance: number = 0;
    constructor(name: string, password: string, marks: number) {
        this.studentName = name;
        this.password = password;
        this.marks = marks;
    }


    public viewMarks(enteredPassword: string): void {
        if (this.checkPassword(enteredPassword)) {
            console.log("Student: " + this.studentName);
            console.log("Marks: " + this.marks);
        } else {
            console.log("Incorrect Password!");
        }
    }

   
    public updateAttendance(days: number): void {
        this.attendance += days;
        console.log("Attendance Updated: " + this.attendance + " days");
    }


    private checkPassword(pass: string): boolean {
        return this.password === pass;
    }
}


class PremiumStudent extends StudentPortal {
    public addBonusAttendance(): void {
        this.attendance += 5;   // Protected member is accessible
        console.log("Bonus Attendance Added.");
        console.log("Total Attendance: " + this.attendance);

        
    }
}

const student = new StudentPortal("Rahul", "abc123", 92);
console.log("Welcome " + student.studentName);
student.viewMarks("abc123");
student.updateAttendance(20);
const premium = new PremiumStudent("Anjali", "pass456", 95);
premium.viewMarks("pass456");
premium.addBonusAttendance();