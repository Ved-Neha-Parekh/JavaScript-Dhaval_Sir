// 1. Person class banao jisme constructor me name, age ho aur ek method showPerson().Student class banao jo Person ko extend kare aur extra property rollNo rakhe. Ek method showStudent() likho.

// 2. Person class se Employee class inherit karo jisme empId aur salary ho. Ek method showEmployee() banao.

// 3. Shape class banao (constructor me color ho). Fir Circle aur Rectangle classes inherit karo aur unme area calculate karne ka method banao.

// 4. Vehicle class banao jisme constructor me brand, model ho. Fir Car aur Bike classes inherit karo aur unme alag-alag methods likho (carType(), bikeType()).

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showPerson() {
    console.log(`Name: ${this.name} and Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }

  showStudent() {
    console.log(`Roll No: ${this.rollNo}`);
  }
}

// let s1 = new Student("Ved",18,42);
// s1.showStudent();

class Employee extends Person {
  constructor(name, age, empId, salary) {
    super(name, age);
    this.empId = empId;
    this.salary = salary;
  }

  showEmployee() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Emp_Id: ${this.empId} and Salary: ${this.salary}`
    );
  }
}

// let emp = new Employee("Ved", "18", "E01", 50000);
// emp.showEmployee();

class Shape {
  constructor(color) {
    this.color = color;
  }

  showColor() {
    console.log(`Shape Color: ${this.color}`);
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

// let circle = new Circle("Red",5);
// circle.showColor();
// console.log(`Area of Circle:${circle.calculateArea()}`)

// let rectangle = new Rectangle(5,10,"Blue");
// rectangle.showColor();
// console.log(`Area of Rectangle:${rectangle.calculateArea()}`)

class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showInfo() {
    console.log(`${this.brand} and ${this.model}`);
  }
}

class Bike extends Vehicle {
  constructor(brand, model, bikeType) {
    super(brand, model);
    this.bikeType = bikeType;
  }

  bikeTypeInfo() {
    console.log(`Bike type is ${this.bikeType}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, carType) {
    super(brand, model);
    this.carType = carType;
  }

  carTypeInfo() {
    console.log(`Car type is ${this.carType}`);
  }
}

// let bike = new Bike("Royal Enfield", "Classic 350", "Cruiser");
// bike.showInfo();
// bike.bikeTypeInfo();

// let car = new Car("Tata", "Nexon", "SUV");  
// car.showInfo();
// car.carTypeInfo();
