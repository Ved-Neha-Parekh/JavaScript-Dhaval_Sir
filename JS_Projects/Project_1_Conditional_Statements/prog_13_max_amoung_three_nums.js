console.log("--- Program 13: Largest among three numbers ---");

let num_1 = 10, // Change num_1, num_2, num_3
  num_2 = 15,
  num_3 = 5;

console.log("--- Welcome to Largest Number Finder ---");

// 1. Comparing '3' numbers
console.log("\n--- Scenario: Comparing '3'  Numbers for Largest ---");

if (num_1 > num_2 && num_1 > num_3) {
  console.log(`'${num_1}' is largest then '${num_2}' and '${num_3}'`);
} else if (num_2 > num_1 && num_2 > num_3) {
  console.log(`'${num_2}' is largest then '${num_1}' and '${num_3}'`);
} else {
  console.log(`'${num_3}' is largest then '${num_1}' and '${num_2}'`);
}
