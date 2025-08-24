# JavaScript Polymorphism Examples

This repository contains a collection of 10 JavaScript programs, each designed to illustrate the concept of polymorphism in an accessible and practical way.

**Polymorphism**, a key principle of object-oriented programming (OOP), allows objects of different classes to be treated as objects of a common superclass. This means that a single function or method can produce different results based on the object it is acting upon.

## Project Structure

Each program (`prog1.js` through `prog10.js`) is a self-contained example focusing on a specific real-world scenario where polymorphism is used.

---

### prog1.js - Animal Sounds

- **Concept:** Method Overriding in inheritance.
- **Description:**  
  A base `Animal` class is extended by `Dog` and `Cat` classes. Each subclass provides its own unique `speak()` method, demonstrating how the same method call can lead to different outputs depending on the object type.

---

### prog2.js - Dynamic Greetings

- **Concept:** Function Overloading (Simulated).
- **Description:**  
  This program showcases how a single function (`greet`) can handle a varying number of arguments gracefully. It's a simple form of polymorphism where the function's behavior changes based on the presence of an optional parameter.

---

### prog3.js - Vehicle Journeys

- **Concept:** Interface-based Polymorphism.
- **Description:**  
  The `startJourney()` function accepts any object that has a `drive()` method, regardless of its class (`Car` or `Bike`). This highlights the power of a common interface.

---

### prog4.js - Diverse Payments

- **Concept:** Polymorphism in Collections.
- **Description:**  
  An array containing different payment types (`CreditCard`, `PayPal`) is iterated over. The same `pay()` method is called for each object, but each object's specific implementation is executed.

---

### prog5.js - Notification System

- **Concept:** Strategy Pattern.
- **Description:**  
  A central system can send notifications through different channels (`Email`, `SMS`) by simply using objects that share a common `send()` method. This demonstrates how polymorphism makes a system flexible and extensible.

---

### prog6.js - Shipping Calculations

- **Concept:** Flexible Business Logic.
- **Description:**  
  A single `getShippingCost()` function calculates costs for various shipping providers (`Flipkart`, `Amazon`, `Delivery`). Each provider object encapsulates its own unique calculation logic.

---

### prog7.js - Checkout Process

- **Concept:** Uniform Interface for Actions.
- **Description:**  
  The `checkout()` function provides a single point of interaction for processing payments. It can handle any payment type (`CreditCardPayment`, `UPIPayment`, `PayPalPayment`) as long as the object has a `process()` method.

---

### prog8.js - Logging System

- **Concept:** Logging Abstraction.
- **Description:**  
  This program uses polymorphism to abstract the logging destination. A single function (`logMessage`) can log a message to the console, a file, or a database by accepting the appropriate logger object.

---

### prog9.js - User Notifications

- **Concept:** Behavioral Polymorphism with Iteration.
- **Description:**  
  A function `notifyAll` iterates through a list of users, sending them a notification. The type of notification sent (`EmailNotification`, `SMSNotification`, `PushNotification`) is determined by the object passed to the function, showcasing flexibility.

---

### prog10.js - Document Export

- **Concept:** File Format Exporters.
- **Description:**  
  A central function `exportFile` can export a document to different file formats (`PDF`, `DOCX`, `TXT`) simply by accepting a different exporter object. This is a classic example of polymorphism in file
