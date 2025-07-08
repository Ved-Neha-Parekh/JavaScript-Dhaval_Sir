console.log("--- Program 21: Sum of alternate numbers (1, 3, 5... to 19) ---");

let i = 1;
let sum = 0;
while (i < 20) {
  sum += i;
  i += 2;
}
console.log("Sum of alternate numbers (odd):", sum);
