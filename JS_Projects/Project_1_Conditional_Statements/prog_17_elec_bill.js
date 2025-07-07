console.log("--- Program 17: Electricity Bill Calculator ---");

let unit = 180;
let billAmount = 0;

console.log(`\nCalculating bill for ${unit} units...`);

if (unit <= 50) {
  billAmount = unit * 1;
} else if (unit <= 150) {
  billAmount = unit * 2;
} else if (unit <= 250) {
  billAmount = unit * 3;
} else {
  billAmount = unit * 5;
}

console.log(`Bill: Rs. ${billAmount}`);
