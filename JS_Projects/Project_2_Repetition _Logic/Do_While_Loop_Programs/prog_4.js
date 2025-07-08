// 4. Sum of multiples of 5 from 1 to 50

let sum = 0,
  i = 1;

do {
  if (i % 5 === 0) {
    sum += i;
  }
  i++;
} while (i <= 50);

console.log(`Sum: ${sum}`);
