console.log("--- Program 24: Average of 'N' numbers");

let num = 5,
  sum = 0;
let avg;

for (let i = 1; i <= num; i++) {
  sum += i;
}

avg = sum / num;

console.log(`Average of 1 to ${num} is ${avg}`);
