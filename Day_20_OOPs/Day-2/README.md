# 🚀 OOPs in JavaScript – Day 2 Practice & Projects

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-runtime-green?logo=node.js)
![OOP](https://img.shields.io/badge/Concepts-OOP-blue)
![Status](https://img.shields.io/badge/Practice-Day--2-orange)

This repo contains **OOPs practice programs (Day-2)** written in **JavaScript (ES6)**.  
It covers **Constructors, Inheritance, and Mini Projects** (Person–Student–Employee hierarchy).  

---

## 📂 Project Structure

- 📌 **constructor.js** → Practice of different types of constructors  
  - 🚗 `Car` (Parameterized constructor)  
  - 🎓 `Student` (Default constructor)  
  - 💻 `Laptop` (Parameterized constructor with multiple props)  
  - 📱 `Mobile_Phone` (Discount calculation method)  

- 📌 **inheritance.js** → Practice of `extends` + `super()` inheritance  
  - 👨 `Person → Student`  
  - 🧑‍💼 `Person → Employee`  
  - 🔺 `Shape → Circle/Rectangle` (Area calculation)  
  - 🛵🚙 `Vehicle → Bike/Car`  

- 📌 **project1.js** → Mini project: `Person → Employee` with **Annual Salary Calculation**  

- 📌 **project2.js** → Mini project: `Company` class managing multiple `Employees`  
  - ➕ Add employees to company  
  - 📋 Show all employees’ details  

---

## 📘 Notes (Day 2 Topics)

### 🔹 Class

- 🏗️ Blueprint for creating objects  
- Contains **properties** (data) and **methods** (functions)  

### 🔹 Object

- 🎯 Instance of a class  
- Created using `new ClassName(...)`  

### 🔹 Constructor

- ⚡ Special method in a class (`constructor`)  
- Auto-called when object is created  
- Used to initialize object’s data  

**Types of Constructors:**

1. 🟢 **Default constructor** → no parameters, sets default values  
2. 🟡 **Parameterized constructor** → takes arguments to set values  
3. 🔵 **Optional/default parameters** → `constructor(name = "Unknown", age = 0)`  

### 🔹 `this` Keyword

- 👆 Refers to the **current object**  
- Used to access properties & methods inside class  

### 🔹 Inheritance

- 🧬 `extends` keyword → create child class  
- 🎁 `super()` → call parent constructor  
- Child class can access parent’s properties & methods  
- ✅ Promotes **reusability & hierarchy**  

### 🔹 Method Overriding

- 🔄 Child class can redefine parent’s method  

---

## 📊 Quick Revision Table

| 📖 Concept      | 📝 Syntax / Keyword       | 💡 Example                  |
|-----------------|---------------------------|-----------------------------|
| Class           | `class ClassName {}`      | `class Student {}`          |
| Object          | `new ClassName()`         | `let s = new Student()`     |
| Constructor     | `constructor(args) {}`    | `constructor(name, age)`    |
| Default Values  | `param = value`           | `constructor(n = "NA")`     |
| `this`          | Current object reference  | `this.name = name`          |
| Inheritance     | `class B extends A`       | `class Student extends Person` |
| Parent call     | `super(args)`             | `super(name, age)`          |
| Override        | Redefine in child class   | `showInfo()`                |

---

## 🏆 Mini Projects

- 🧑‍💼 **Employee Annual Salary** → Calculates yearly salary using inheritance  
- 🏢 **Company Employee Manager** → Stores multiple employees in an array, prints details  

---

Made with 💙 by [**Ved**](https://github.com/scrollditx)  
