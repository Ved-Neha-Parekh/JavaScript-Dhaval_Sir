console.log("--- Program 2: Print 5 4 3 2 1 ---");
let num = 5;

console.log("\n--- Using (for) Loop ---");
for (let i = 5; i >= 1; i--) {
  console.log(`${i}`);
}

console.log("--------------------------");
console.log("\n--- Using (while) Loop ---");
while (num >= 1) {
  console.log(`${num}`);
  num--;
}
console.log("--------------------------");
console.log("\n--- Using (do-while) Loop ---");

num = 5;
do {
  console.log(`${num}`);
  num--;
} while (num >= 1);
console.log("--------------------------");
