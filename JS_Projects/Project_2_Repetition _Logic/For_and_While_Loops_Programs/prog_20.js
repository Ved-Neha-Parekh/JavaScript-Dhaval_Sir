console.log(
  "--- Program 20:  Sum of numbers divisible by 4 but not 8 (1–50) ---"
);

let totalSum = 0;

for (let i = 1; i <= 50; i++) {
  // Check if divisible by 4 AND not divisible by 8
  if (i % 4 === 0 && i % 8 !== 0) {
    totalSum += i;
  }
}

console.log("Sum of numbers divisible by 4 but not 8 (1-50):", totalSum);
