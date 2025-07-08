console.log("--- Program 14: Sum of numbers not divisible by 3 (1–30) ---");

let sum = 0;

for (let i = 0; i <= 30; i++) {
  if (i % 3 !== 0) {
    sum += i;
  }
}

console.log(`Sum: ${sum}`);
