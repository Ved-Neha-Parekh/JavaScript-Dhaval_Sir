function generateFibonacci(num) {
  if (num <= 0) return " ";
  if (num === 1) return "0";

  let num1 = 0,
    num2 = 1;

  let result = "0, 1";

  for (let i = 2; i < num; i++) {
    let nextTerm = num1 + num2;

    result += ", " + nextTerm;

    num1 = num2;
    num2 = nextTerm;
  }

  return result;
}

console.log(`Fibonacci (num=10): ${generateFibonacci(10)}`);
