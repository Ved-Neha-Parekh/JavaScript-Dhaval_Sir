let student1 = {
  name: "Raj",
  age: 18,
  roll_no: 40,
  std: "12th",
  displayStudent: function () {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.roll_no} and Standard: ${this.std}`
    );
  },
};

let student2 = {
  name: "Krishna",
  age: 18,
  roll_no: 42,
  std: "12th",
  displayStudent: function () {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.roll_no} and Standard: ${this.std}`
    );
  },
};

student2.__proto__ = student1;
student1.displayStudent();
student2.displayStudent();
