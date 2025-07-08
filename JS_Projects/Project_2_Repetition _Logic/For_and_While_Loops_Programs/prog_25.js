console.log("--- Program 25: Factorials of 'N' number ---");

let num = 5,
  fact = 1;

for (let i = num; i >= 1; i--) {
  fact *= i;
}

console.log(`Factorial of 1 to ${num} is ${fact}.`);
