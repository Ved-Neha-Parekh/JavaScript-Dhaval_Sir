// 10. Sum of even numbers between 50 and 100

let sum = 0,
  i = 50;

do {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
} while (i <= 100);

console.log(`Sum: ${sum}`);
