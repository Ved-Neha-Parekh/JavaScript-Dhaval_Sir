class Vehicle {
  drive() {
    console.log("A vehicle is moving.");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("🚗 The car is driving on the highway!");
  }
}

class Bike extends Vehicle {
  drive() {
    console.log("🏍️ The bike is cruising through the city!");
  }
}

function startJourney(vehicle) {
  vehicle.drive();
}

startJourney(new Car());
startJourney(new Bike());
