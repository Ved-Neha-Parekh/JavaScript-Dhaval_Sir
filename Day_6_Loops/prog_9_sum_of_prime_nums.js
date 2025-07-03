let sum = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber++) {
  let isCurrentNumberPrime = true;
  for (let i = 2; i < currentNumber; i++) {
    if (currentNumber % i === 0) {
      isCurrentNumberPrime = false;
      break;
    }
  }
  if (isCurrentNumberPrime) {
    console.log(`Found a prime number: ${currentNumber}`);
    sum += currentNumber;
  }
}

console.log(`Sum: ${sum}`);
