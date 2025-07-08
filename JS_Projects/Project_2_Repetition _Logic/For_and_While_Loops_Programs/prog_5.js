console.log("--- Program : Sum of multiples of 5 from 1 to 50 ---");

let sum = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    sum += i;
  }
}

console.log(`Sum of multiple of 5 (1-50): ${sum}`);
