// Constructors
// 1. Ek Car class banao jisme constructor brand, model, price le aur ek method showDetails() ho.

// 2. Ek Student class banao jisme default constructor ho jo name = "Unknown", age = 0 rakhe aur ek method display() banaye.

// 3. Ek Laptop class banao jisme parameterized constructor ho aur ek method showConfig() ho.

// 4. Ek Mobile class banao jisme constructor me brand, model, aur price pass karo. Ek aur method discountedPrice(percent) likho jo discount ke baad price return kare.

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  showDetails() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}`
    );
  }
}

// let car1 = new Car("BMW", "M4", 17000);
// car1.showDetails();

class Student {
  constructor() {
    this.name = "Unknown";
    this.age = 0;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// let s1 = new Student();
// s1.display();

class Laptop {
  constructor(brand, price, model, processor) {
    this.brand = brand;
    this.price = price;
    this.model = model;
    this.processor = processor;
  }

  showConfig() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Processor: ${this.processor}`
    );
  }
}

// let laptop1 = new Laptop("HP",25000,"G 650","i3");
// laptop1.showConfig();

class Mobile_Phone {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  discountedPrice(percent) {
    let discountedPrice = (percent / 100) * this.price;
    return this.price - discountedPrice;
  }
}

// let phn1 = new Mobile_Phone("Vivo", "Y18", 12000);
// console.log("Final Price:", phn1.discountedPrice(5));