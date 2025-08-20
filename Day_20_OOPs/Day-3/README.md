# 🔥 JavaScript OOP & Inheritance – Day 3 Research

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![OOP](https://img.shields.io/badge/Concepts-Inheritance-blue)
![Status](https://img.shields.io/badge/Research-Day--3-orange)

---

## ⚡ OOPs in JavaScript – Surface vs Behind the Scenes

- Jab hum `class` likhte hain JS me, voh **real class system (jaise Java, C#)** nahi hota.  
- JS ke andar sab kuch **objects + prototypes** ke upar based hai.  
- `class` bas ek **syntactic sugar** hai jo andar se **prototype-based inheritance** use karta hai.  

---

## 🧬 Inheritance in JavaScript

### 1️⃣ Prototypal Inheritance (Real JS Mechanism)

- Har object ke paas ek hidden property hoti hai `[[Prototype]]` (ya `__proto__`).  
- Agar tum object ki koi property/method call karo aur voh object me na mile → JS **prototype chain** me search karta hai.  
- Example: `student.__proto__ = person` → ab student person ke methods use kar sakta hai.  

### 2️⃣ Class Inheritance (ES6 Syntax)

- ES6 (2015) ne `class`, `extends`, `super()` introduce kiya.  
- Ye syntax Java, C++ jaisa dikhata hai → easy to read.  
- BUT internally abhi bhi **prototypal inheritance** hi hota hai.  

### 3️⃣ Functional Inheritance

- Functions ya factory functions use karke objects banate ho.  
- Ye private variables + public methods de sakta hai.  

### 4️⃣ Mixins

- Multiple objects ke features combine karna bina strict inheritance ke.  
- Example: `Object.assign(target, source1, source2)`  

---

## 🧱 OOP Concepts in JS (Layman Style)

| 🏷️ Concept        | ⚡ Explanation (Easy) |
|-------------------|------------------------|
| **Objects**       | Real cheez jisme data + methods hoti hai (jaise ek Student object). |
| **Classes**       | Blueprint → object banane ka design. |
| **Encapsulation** | Data + methods ko ek jagah bandhna, aur kuch cheeze hide karna (jaise private balance bank account me). |
| **Inheritance**   | Parent → Child properties share karna (reusability). |
| **Polymorphism**  | Same method alag objects me alag behavior (Dog bark(), Cat meow()). |
| **Abstraction**   | Complex cheez ko hide karke sirf easy interface dena (car start button → andar engine kaise kaam karta hai uski tension nahi). |

---

## 📊 Quick Revision Table

| 🧩 Type                 | 🔑 Keyword / Example                | 📝 Notes |
|--------------------------|-------------------------------------|----------|
| Prototypal Inheritance   | `obj.__proto__` / `Object.getPrototypeOf(obj)` | Real JS inheritance mechanism |
| Class Inheritance (ES6)  | `class Child extends Parent` + `super()` | Syntactic sugar, easy syntax |
| Functional Inheritance   | Factory functions returning objects | Useful for closures & private vars |
| Mixins                   | `Object.assign()` / spread syntax   | Add features from multiple sources |

---

❤️ Made with love by [**Ved**](https://github.com/scrollditx)  
