// 1. Object with method
let companyInfo = {
  coName: "Red & White Pvt Ltd",
  coLocation: "Raj Empire, Lunsikui, Nvs",
  printInfo() {
    console.log(
      `Company Name "${this.coName}" and Our Location ${this.coLocation} visit soon....`
    );
  },
};

// Call company info method
companyInfo.printInfo();

// 2. Employee class
class Employee {
  constructor(empName, empSalary, empId) {
    this.empName = empName;
    this.empSalary = empSalary;
    this.empId = empId;
  }

  // 3. printInfo method
  printInfo() {
    console.log(
      `Employee ID: "${this.empId}" and Employee Name: "${this.empName}" and Employee Salary: "${this.empSalary}"`
    );
  }

  // 4. incSalary method (annual salary)
  incSalary() {
    let annualSalary = this.empSalary * 12;
    console.log(`Your annual salary is "${annualSalary}"`);
  }
}

// 5. Manager class extends Employee
class Manager extends Employee {
  constructor(empName, empSalary, empId, empDept) {
    super(empName, empSalary, empId); // Call parent constructor
    this.empDept = empDept;
  }

  // 6. Method Overriding - printInfo with department added
  printInfo() {
    console.log(
      `Employee ID: "${this.empId}" and Employee Name: "${this.empName}" and Employee Salary: "${this.empSalary}" and Employee Department: "${this.empDept}"`
    );
  }
}

// 7. Create Manager object
let man1 = new Manager("Ved", 50000, 1, "IT");

// 8. Call methods on Manager object
man1.printInfo();
man1.incSalary();
