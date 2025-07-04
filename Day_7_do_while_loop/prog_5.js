// 5. Sum of squares from 1 to 10.

let sum = 0,
  i = 1;

do {
  sum += i * i;
  i++;
} while (i <= 10);

console.log(`Sum: ${sum}`);
