// 6. Sum of digits of a number (e.g., 12345)

let sum = 0,
  i = 12345,
  rem = 0;

do {
  rem = i % 10;
  sum += rem;
  i = parseInt(i / 10);
} while (i > 0);

console.log(`Sum: ${sum}`);
