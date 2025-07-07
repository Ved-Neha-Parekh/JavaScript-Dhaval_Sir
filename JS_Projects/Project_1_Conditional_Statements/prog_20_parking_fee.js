console.log("--- Program 20: Parking Fee System ---");

let hours = 4;
let fee = 0;

console.log(`\nHours parked: ${hours}`);

if (hours <= 1) {
  fee = 20;
} else if (hours <= 3) {
  fee = 50;
} else if (hours <= 6) {
  fee = 100;
} else {
  fee = 200;
}

console.log(`Fee: Rs. ${fee}`);
