console.log("--- Program 18: Sum of numbers between 10 and 30 not divisible by 2 or  ---");


let sum = 0;
for (let i = 10; i <= 30; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum += i;
  }
}

console.log(`Sum: ${sum}`);
