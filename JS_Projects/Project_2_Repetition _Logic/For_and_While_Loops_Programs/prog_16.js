console.log("--- Program 16: S Sum of all numbers ending with digit 7 (1–100) ---");


let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 10 === 7) {
    sum += i;
  }
}
console.log(`Sum: ${sum}`);
