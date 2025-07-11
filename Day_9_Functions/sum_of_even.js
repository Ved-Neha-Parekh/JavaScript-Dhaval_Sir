function sumOfEvenNums(start, end) {
  let sum = 0;
  let i = start;
  while (i <= end) {
    if (i % 2 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(sumOfEvenNums(1, 12));
