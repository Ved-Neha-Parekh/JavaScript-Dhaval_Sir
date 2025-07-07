console.log("--- Program 12: Triangle type based on sides ---");

let a = 1;
let b = 1.2;
let c = 1.5;

console.log(`\nChecking triangle with sides : A=${a}, B=${b}, C=${c}`);

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Invalid Triangle: All side lengths must be positive.");
} else if (a + b <= c || a + c <= b || b + c <= a) {
  console.log(
    "Invalid Triangle: The sum of any two sides must be greater than third side."
  );
} else {x
  if (a === b && b === c) {
    console.log("This is an EQUILATERAL triangle (all sides are equal).");
  } else if (a === b || a === c || b === c) {
    console.log("This is an ISOSCELES triangle (exactly two sides are equal).");
  } else {
    console.log("This is a SCALENE triangle (no sides are equal).");
  }
}
