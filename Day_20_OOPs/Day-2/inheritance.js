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

let s1 = new Student("Ved",18,42);
s1.showStudent();
