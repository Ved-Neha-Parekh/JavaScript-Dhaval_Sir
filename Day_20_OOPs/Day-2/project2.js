// Ek Company class banao jisme ek array of Employees rakho aur method showAllEmployees() banao jo sab employees ke details print kare.

class Employee {
  constructor(name, age, empId, salary) {
    this.name = name;
    this.age = age;
    this.empId = empId;
    this.salary = salary;
  }

  showEmployee() {
    console.log(
      `Name: ${this.name}, Employee ID: ${this.empId}, Salary: ${this.salary}`
    );
  }
}

class Company {
  constructor(coName) {
    this.coName = coName;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  showAllEmployees() {
    console.log(`Company: ${this.coName}`);
    this.employees.forEach((emp) => emp.showEmployee());
  } 
}

let c1 = new Company("TCS");
c1.addEmployee(new Employee("Ved", 18, "E01", 50000));
c1.addEmployee(new Employee("Dev", 21, "E02", 40000));
c1.addEmployee(new Employee("Raj", 19, "E03", 55000));

c1.showAllEmployees();
