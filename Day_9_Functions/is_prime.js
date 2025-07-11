function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log("--- isPrime Tests ---");
console.log(`Is 1 prime? ${isPrime(1)}`);
console.log(`Is 2 prime? ${isPrime(2)}`);
console.log(`Is 3 prime? ${isPrime(3)}`);
console.log(`Is 4 prime? ${isPrime(4)}`);
console.log(`Is 5 prime? ${isPrime(5)}`);
console.log(`Is 7 prime? ${isPrime(7)}`);
console.log(`Is 9 prime? ${isPrime(9)}`);
console.log(`Is 11 prime? ${isPrime(11)}`);
console.log(`Is 13 prime? ${isPrime(13)}`);
console.log(`Is 17 prime? ${isPrime(17)}`);
console.log(`Is 25 prime? ${isPrime(25)}`);
console.log(`Is 29 prime? ${isPrime(29)}`);
console.log(`Is 97 prime? ${isPrime(97)}`);
