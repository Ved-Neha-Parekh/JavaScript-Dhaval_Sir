# 🔒 JavaScript OOP – Day 4 Research (Encapsulation & Abstraction)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![OOP](https://img.shields.io/badge/OOP-Encapsulation_&_Abstraction-blue)
![Status](https://img.shields.io/badge/Research-Day--4-orange)

---

## 🧩 Encapsulation in JavaScript

### 📖 Definition

Encapsulation ka matlab hai **data (properties) aur methods (functions)** ko ek jagah band kar dena → taaki object/class apna khud ka **capsule** ban jaye.  

👉 Matlab: Object ke andar sab kuch safe & organized ho.  

### 🔑 Why Encapsulation?

- Data ko secure karna (directly access na ho).  
- Code easy to maintain.  
- Reusability.  

### 🛠️ JS me Encapsulation kaise hota hai?

1. **Normal public fields** → sab accessible.  
2. **Underscore `_` convention** → private jaisa feel, lekin enforce nahi hota (sirf developers ke liye signal).  
   - Example: `_salary`  
3. **`#` Private fields (ES2020)** → real private, class ke bahar access nahi hoga.  
   - Example: `#pin`  

---

## 🎭 Abstraction in JavaScript

### 📖 Definition

Abstraction ka matlab hai **implementation details ko hide karna** aur sirf **necessary features show karna**.  

👉 Matlab: Tum fridge ka **switch ON** karte ho → andar compressor kaise kaam kar raha hai, yeh tumhe nahi pata, aur pata bhi zaroori nahi.  

### 🔑 Why Abstraction?

- Complexity kam hoti hai.  
- Sirf required cheez dikhai deti hai, baaki chhup jaati hai.  
- Developer ko **clean interface** milta hai.  

### 🛠️ JS me Abstraction kaise hota hai?

1. **Private fields (`#`)** → unnecessary details chhup jaati hain.  
2. **Closures** → ek function ke andar private variables bante hain jo bahar se directly access nahi hote.  
3. **Modules** → sirf wahi export karo jo external use ke liye hai, baaki implementation hidden.  

---

## 🔑 Encapsulation vs Abstraction (Comparison)

| Feature         | Encapsulation 🧩 | Abstraction 🎭 |
|-----------------|-----------------|----------------|
| **Meaning**     | Data + methods ko ek capsule me band karna | Implementation details ko hide karna |
| **Focus**       | **How** data is stored/secured | **What** functionality is exposed |
| **Achieved by** | Classes, Objects, Access modifiers | Private fields, Closures, Modules |
| **Goal**        | Data security + organization | Simplicity + clean interface |

---

## ⚡ Quick Notes (Day 4)

- `_` → sirf convention (private nahi, bas ek signal hai).  
- `#` → real private field (new feature, modern JS).  
- **Encapsulation** → data + functions ek jagah.  
- **Abstraction** → jo zaroori hai woh show, jo complex hai woh hide.  
- Dono ek sath use hote hain taaki code secure + easy to use ho.  

---

❤️ Made with love by [**Ved**](https://github.com/scrollditx);
