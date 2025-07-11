function factorialCalculator(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (num === 0) {
    return 1;
  }
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorialCalculator(5));
console.log(factorialCalculator(0));
