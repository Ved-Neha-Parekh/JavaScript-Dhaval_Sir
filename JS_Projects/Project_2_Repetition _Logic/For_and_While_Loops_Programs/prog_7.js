console.log("--- Program 7: Sum of digits of a number (e.g., 12345) ---");


let sum = 0;
let num = 12345;
let rem = 0;
while (num > 0) {
  rem = num % 10;
  sum += rem;
  num = parseInt(num / 10);
}
console.log(`Sum of number: ${sum}`);
