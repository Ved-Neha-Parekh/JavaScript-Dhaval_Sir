// 11. Sum of odd numbers between 100 and 150 using

let sum = 0,
  i = 100;

do {
  if (i % 2 !== 0) {
    sum += i;
  }
  i++;
} while (i <= 150);

console.log(`Sum: ${sum}`);
