function Student(name, age, roll_no, std) {
  this.name = name;
  this.age = age;
  this.roll_no = roll_no;
  this.std = std;
}

Student.prototype.displayStudent = function () {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.roll_no} and Standard: ${this.std}`
  );
};

let s1 = new Student("Raj", 18, 40, "12th");
s1.displayStudent();
