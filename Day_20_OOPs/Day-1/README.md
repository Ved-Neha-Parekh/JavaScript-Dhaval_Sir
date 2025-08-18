# JavaScript Classes & Objects - Notes

## 1. Object

**What is an Object?**

- Layman: Imagine an object like your “student” profile – it has details (name, marks) and can do actions (show marks, print name).
- English: An object is a container with *properties* (data) and *methods* (functions that do something).

**How to create?**

const student = {
name: "Raj",
marks: 95,
printMarks: function() {
console.log("Marks:", this.marks); // 'this' points to student object
}
};

- *Key point*: Object = Data (properties) + Actions (methods)

---

## 2. `this` Keyword

**What is `this`?**

- Layman: Think of “this” as saying “me” or “myself” inside the object/function.
- English: Refers to the current object where the code is running.

Example:
const bike = {
brand: "Honda",
showBrand: function() {
console.log(this.brand); // 'this' means bike here
}
};

---

## 3. Class

**What is a Class?**

- Layman: Like a blueprint or recipe for making many similar things (students, cars).
- English: Defines the structure (properties and methods) for creating objects of a certain type.

**How to create?**
class Student {
constructor(name, marks) { // ‘constructor’ runs when object is made
this.name = name;
this.marks = marks;
}
printMarks() {
console.log("Marks:", this.marks);
}
}

*Key point*: Class = Blueprint, Object = Actual thing made using blueprint.

---

## 4. Constructor

**What is a Constructor?**

- Layman: Think of this as the “setup” – runs once when you make something new.
- English: A special method that initializes properties of a newly created object.

Example:
class Employee {
constructor(name, salary) {
this.name = name;
this.salary = salary;
}
}

---

## 5. Methods in Class

**What is a Method?**

- Layman: Actions the object can perform (like a student can ‘print marks’, 'introduce', etc).
- English: Functions defined inside a class for its objects.

Example:
class BankAccount {
deposit(amount) {
// adds money to account
}
}

---

## 6. Inheritance (`extends`, `super`)

**What is Inheritance?**

- Layman: Like children inheriting traits from parents. New things get traits from old things.
- English: One class (child) can take properties/methods from another class (parent).

**Keywords:**

- `extends`: Used for inheritance.
- `super`: Used to call parent class's constructor or methods from child class.

Example:
class Person {
constructor(name) { this.name = name; }
}
class Engineer extends Person {
constructor(name, field) {
super(name); // parent’s setup
this.field = field;
}
}

---

## 7. Method Overriding

**What is Method Overriding?**

- Layman: If both parent and child have the same method, child’s method will run (child's rules win).
- English: Child class re-defines parent class method with its own behavior.

Example:
class Animal {
speak() { console.log("Animal noise"); }
}
class Dog extends Animal {
speak() { console.log("Bark!"); } // Dog's version replaces parent's
}

---

## Revision Table

| Topic              | Layman’s Short Description              | Main Keyword/Concept      |
|--------------------|-----------------------------------------|--------------------------|
| Object             | Data + Actions in a bundle              | properties, methods      |
| `this`             | ‘Me’ inside object/code                 | refers to current object |
| Class              | Blueprint for objects                   | class                    |
| Constructor        | Initial setup of object                 | constructor              |
| Method             | Action function inside class/object      | function in class        |
| Inheritance        | Pass traits from parent to child        | extends, super           |
| Method Overriding  | Child replaces parent’s method          | override method          |
| Prototype Chain    | Backup helpers in a chain               | prototype                |

---

Made with 💙 by [Ved](https://github.com/scrollditx)
