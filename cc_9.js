// Task 1 - Create Employee Class
class Employee { // creates employee class with details
    constructor (name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department
        this.salary = salary;
    }
    getDetails() { // creates method that returns the employee's details
        return `Name: ${this.name}, Employee ID: ${this.id}, Department: ${this.department} Salary: $${this.salary}`
    }
    calculateAnnualSalary() { // calculates the annual salary of the employee
        return this.salary * 12;
    }
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Logs the method to the console - Output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(`Annual Salary: $${emp1.calculateAnnualSalary()}`); // Logs the method to the console - Output: Annual Salary: $60000