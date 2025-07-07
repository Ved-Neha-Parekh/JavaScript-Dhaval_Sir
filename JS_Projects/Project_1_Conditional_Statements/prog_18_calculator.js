console.log("--- Program 18: Simple Calculator ---");

let op = "+"; // Operator: can be '+' or '-'
let a = 10;
let b = 5;

console.log(`\nOperation: ${a} ${op} ${b}`);

if (op === "+") {
  console.log(`Result: ${a + b}`);
} else if (op === "-") {
  console.log(`Result: ${a - b}`);
} else {
  console.log("Invalid operator");
}
