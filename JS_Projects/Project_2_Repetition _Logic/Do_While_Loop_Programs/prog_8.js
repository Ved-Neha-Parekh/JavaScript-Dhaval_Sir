let sum = 0,
  currentNumber = 2;

do {
  let isCurrentNumberPrime = true;
  let i = 2;
  do {
    if (currentNumber % i === 0 && currentNumber !== i) {
      isCurrentNumberPrime = false;
      break;
    }
    i++;
  } while (i < currentNumber);

  if (isCurrentNumberPrime) {
    console.log(`Found a prime number: ${currentNumber}`);
    sum += currentNumber;
  }
  currentNumber++;
} while (currentNumber <= 50);

console.log(`Sum: ${sum}`);
