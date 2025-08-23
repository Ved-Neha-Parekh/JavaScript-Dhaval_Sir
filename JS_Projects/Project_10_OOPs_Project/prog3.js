class Car {
    drive() {
        console.log("Car is driving 🏎");
    }
}

class Bike {
    drive() {
        console.log("Bike is driving 🏍");
    }
}

function startJourney(vehicle) {
    vehicle.drive();
}

startJourney(new Car());
startJourney(new Bike());