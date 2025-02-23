// Task 1 - Employee Class
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

// Task 2 - Manager Class with Inheritance
class Manager extends Employee { // creates Manager class that extends to the Employee class
    constructor (name, id, department, salary, teamsize) {
        super (name, id, department, salary);
        this.teamsize = teamsize // defines teamsize
        
    }
    getDetails() { // creates method that adds team size to the class details
        return `Manager: ${this.name}, Employee ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamsize}`
    }
    calculateBonus() { // creates method that returns 10% of the Manager's annual salary
        return this.salary * 12 * .10
    }
};
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // logs the method to the console - Output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(`Manager Bonus: $${mgr1.calculateBonus()}`); // logs the method to the console - Output: 9600