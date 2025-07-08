console.log("--- Program 11: Sum of even numbers between 50 and 100 ---");

let sum = 0;

for (let i = 50; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(`Sum: ${sum}`);
