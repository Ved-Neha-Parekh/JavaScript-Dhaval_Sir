class Animal {
  speak() {
    console.log("This animal makes a generic sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("🐶 The dog says: Woof! Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("🐱 The cat says: Meowww!");
  }
}

class Duck extends Animal {
  speak() {
    console.log("🦆 The duck says: Quack! Quack!");
  }
}

let myPets = [new Dog(), new Cat(), new Duck()];

myPets.forEach((pet) => pet.speak());
