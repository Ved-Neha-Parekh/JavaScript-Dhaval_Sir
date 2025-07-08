console.log("--- Program 13: Sum of digits of all numbers from 1 to 50 ---");

let sum = 0;

for (let i = 1; i <= 50; i++) {
  let num = i;
  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
}

console.log(`Sum: ${sum}`);
