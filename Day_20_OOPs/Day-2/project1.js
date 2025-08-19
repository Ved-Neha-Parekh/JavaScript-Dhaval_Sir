// Ek Person class banao → Employee inherit karo. Employee ke paas: empId, salary, aur ek method calculateAnnualSalary() ho.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showPerson() {
    console.log(`Name: ${this.name} and Age: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, empId, salary) {
    super(name, age);
    this.empId = empId;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

let emp = new Employee("Ved", 18, "E01", 50000);
emp.showPerson();
console.log(`Annual Salary: ${emp.calculateAnnualSalary()}`);
