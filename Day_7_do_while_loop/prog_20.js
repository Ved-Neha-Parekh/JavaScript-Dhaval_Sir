// 20. Sum of alternate numbers (1, 3, 5... to 19) using

let sum = 0,
  i = 1;

do {
  sum += i;
  i += 2;
} while (i < 20);

console.log(`Sum: ${sum}`);
