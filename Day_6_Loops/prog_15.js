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
