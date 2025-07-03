//  2. Sum of even numbers from 1 to 20 (for loop)

let sum = 0,
  i = 1;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(`Sum of even number (1-20): ${sum}`);

sum = 0;

while (i <= 20) {
  if (i % 2 !== 0) {
    sum += i;
  }
  i++;
}
console.log(`Sum of odd number (1-20): ${sum}`);
