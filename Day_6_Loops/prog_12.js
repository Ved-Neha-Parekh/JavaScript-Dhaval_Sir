let sum = 0;

for (let i = 100; i <= 150; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log(`Sum: ${sum}`);
