// 12. Sum of digits of all numbers from 1 to 50

let sum = 0,
  i = 1;

do {
  let num = i;
  do {
    sum += num % 10;
    num = parseInt(num / 10);
  } while (num > 0);
  i++;
} while (i <= 50);

console.log(`Sum: ${sum}`);
