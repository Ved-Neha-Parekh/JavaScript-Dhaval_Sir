// 2. Sum of even numbers from 1 to 20.

let sum = 0,
  i = 1;

do {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
} while (i <= 20);

console.log(`Sum: ${sum}`);
