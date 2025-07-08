console.log("--- Program 17: Sum of numbers from 1 to n until sum > 50 ---");

let i = 1,
  sum = 0;
while (sum <= 50) {
  sum += i;
  i++;
}
console.log(`Sum: ${sum}`);
