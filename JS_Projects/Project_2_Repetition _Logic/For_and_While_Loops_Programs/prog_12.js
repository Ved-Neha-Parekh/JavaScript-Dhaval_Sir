console.log(
  "--- Program 12: Sum of odd numbers between 100 and 150 using  ---"
);

let sum = 0;

for (let i = 100; i <= 150; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log(`Sum: ${sum}`);
