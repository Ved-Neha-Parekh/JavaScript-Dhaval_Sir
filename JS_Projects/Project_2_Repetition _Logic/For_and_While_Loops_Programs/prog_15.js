console.log("--- Program 15: 14. Sum of factorial numbers 1! + 2! + 3! + ... + 5! ---");


let sum = 0,
  fact;

for (let i = 1; i <= 5; i++) {
  fact = 1;
  for (let j = 1; j <= i; j++) {
    fact *= j;
  }
  sum += fact;
}

console.log(`Sum: ${sum}`);
