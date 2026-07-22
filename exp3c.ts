// ReadOnly & Static Properties

class Employee {

    // Static property (shared by all employees)
    public static companyName: string = "Tech Solutions";
    public static totalEmployees: number = 0;

    // Readonly property
    public readonly employeeId: string;

    // Normal properties
    public employeeName: string;
    public department: string;

    // Constructor
    constructor(name: string, id: string, dept: string) {
        this.employeeName = name;
        this.employeeId = id;
        this.department = dept;

        Employee.totalEmployees++;
    }

    // Static method
    public static showCompanyInfo(): void {
        console.log("Company Name: " + Employee.companyName);
        console.log("Total Employees: " + Employee.totalEmployees);
    }

    // Instance method
    public displayDetails(): void {
        console.log("Employee Name : " + this.employeeName);
        console.log("Employee ID   : " + this.employeeId);
        console.log("Department    : " + this.department);
        console.log("----------------------------");
    }
}

// -------- Execution --------

// Access static members
Employee.showCompanyInfo();

// Create objects
const emp1 = new Employee("Rahul", "EMP101", "Development");
const emp2 = new Employee("Anjali", "EMP102", "Testing");

// Display details
emp1.displayDetails();
emp2.displayDetails();

// Read readonly property
console.log("Employee ID of Rahul: " + emp1.employeeId);

// ERROR (Don't uncomment)
// emp1.employeeId = "EMP999";

// Check updated static value
Employee.showCompanyInfo();