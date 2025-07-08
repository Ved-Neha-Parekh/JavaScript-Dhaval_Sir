//  16. Sum of numbers from 1 to n until sum > 50

let sum = 0,
  i = 1;

do {
  sum += i;
  i++;
} while (sum <= 50);

console.log(`Sum: ${sum}`);
