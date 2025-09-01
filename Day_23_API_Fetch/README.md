# 🌐 API & Fetch Notes

## 📌 What is API?

- **API (Application Programming Interface)** ek **bridge** hai jo do systems ko connect karta hai.
- Ek taraf **client (user/browser)** hota hai, dusri taraf **server (data provider)**.
- API ke through client data **mangta hai** aur server data **bhejta hai**.

---

## 🍽 Waiter Example (Mind Map)

**Situation:**  

- Tum ek restaurant mei ho (Client).  
- Tum waiter ko order dete ho (API Request).  
- Waiter kitchen mei jata hai aur food lekar aata hai (API Response).  
- Tumhe food milta hai bina kitchen mei ghuse (Client ko direct server ki access nahi milti).

### 🧠 Mind Map

Client (You)
│
│ Request
▼
Waiter (API)
│
│ Forward request
▼
Kitchen (Server/Database)
│
│ Response (Data)
▼
Client (Food/Info shown)

---

## 🚀 Fetch in JavaScript

- **fetch()** ek method hai jo API se data lene ya bhejne ke liye use hota hai.
- Yeh **Promise-based** hota hai (asynchronous kaam karta hai).

### 🔑 Steps

1. API call karo → `fetch(url)`
2. Response ko JSON mei convert karo → `.then(res => res.json())`
3. Data ko use karo → `.then(data => {...})`
4. Error handle karo → `.catch(err => {...})`

---

## 🛠 Types of Fetch Requests

1. **GET** → Data read karne ke liye  
2. **POST** → Naya data bhejne/insert karne ke liye  
3. **PUT** → Pura data update karne ke liye  
4. **PATCH** → Data ka chhota part update karne ke liye  
5. **DELETE** → Data delete karne ke liye  

---
