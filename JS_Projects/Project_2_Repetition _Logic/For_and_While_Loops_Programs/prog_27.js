console.log("--- Program 27: Fibonacci series ---");

let numTerms = 1;

console.log(`--- Generating Fibonacci Series up to ${numTerms} terms ---`);

if (numTerms <= 0) {
  console.log("Error: Number of terms must be positive.");
} else if (numTerms === 1) {
  console.log("0");
} else if (numTerms === 2) {
  console.log("0, 1");
} else {
  let a = 0;
  let b = 1;

  let seriesOutput = `${a}, ${b}`;

  for (let i = 2; i < numTerms; i++) {
    let nextTerm = a + b;

    seriesOutput += `, ${nextTerm}`;
    a = b;
    b = nextTerm;
  }

  console.log(seriesOutput);
}

console.log("-------------------------------------------------");
