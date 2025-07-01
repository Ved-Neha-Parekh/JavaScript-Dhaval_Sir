// operators.js

// This file demonstrates various JavaScript operators and type conversion.

// --- 1. Arithmetic Operators ---
// These operators perform mathematical calculations.

console.log("--- Arithmetic Operators ---");

let num1 = 10;
let num2 = 3;

console.log("Addition (num1 + num2):", num1 + num2); // Output: 13
console.log("Subtraction (num1 - num2):", num1 - num2); // Output: 7
console.log("Multiplication (num1 * num2):", num1 * num2); // Output: 30
console.log("Division (num1 / num2):", num1 / num2); // Output: 3.333...
console.log("Modulus (num1 % num2):", num1 % num2); // Output: 1 (remainder of 10 / 3)
console.log("Exponentiation (num1 ** num2):", num1 ** num2); // Output: 1000 (10 to the power of 3)

let counter = 5;
console.log("Initial counter:", counter); // Output: 5

// Increment operators
console.log("Post-increment (counter++):", counter++); // Output: 5 (uses current value, then increments)
console.log("Counter after post-increment:", counter); // Output: 6

console.log("Pre-increment (++counter):", ++counter); // Output: 7 (increments, then uses new value)
console.log("Counter after pre-increment:", counter); // Output: 7

// Decrement operators work similarly (--)

// --- 2. Assignment Operators ---
// These operators assign values to variables.

console.log("\n--- Assignment Operators ---");

let x = 10;
console.log("Initial x:", x); // Output: 10

x += 5; // Equivalent to: x = x + 5;
console.log("x after x += 5:", x); // Output: 15

x -= 3; // Equivalent to: x = x - 3;
console.log("x after x -= 3:", x); // Output: 12

x *= 2; // Equivalent to: x = x * 2;
console.log("x after x *= 2:", x); // Output: 24

x /= 4; // Equivalent to: x = x / 4;
console.log("x after x /= 4:", x); // Output: 6

x %= 5; // Equivalent to: x = x % 5;
console.log("x after x %= 5:", x); // Output: 1

// --- 3. Comparison Operators ---
// These operators compare two values and return a boolean (true or false).

console.log("\n--- Comparison Operators ---");

let val1 = 10;
let val2 = "10"; // A string containing the number 10
let val3 = 5;

// Loose Equality (==): Checks only for value, attempts type conversion.
console.log("val1 == val2 (10 == '10'):", val1 == val2); // Output: true (string "10" is converted to number 10)
console.log("val1 == val3 (10 == 5):", val1 == val3); // Output: false

// Strict Equality (===): Checks for both value AND type. No type conversion.
console.log("val1 === val2 (10 === '10'):", val1 === val2); // Output: false (types are different: number vs string)
console.log("val1 === val3 (10 === 5):", val1 === val3); // Output: false

// Loose Inequality (!=): Checks if values are NOT equal (with type conversion).
console.log("val1 != val3 (10 != 5):", val1 != val3); // Output: true

// Strict Inequality (!==): Checks if values or types are NOT equal.
console.log("val1 !== val2 (10 !== '10'):", val1 !== val2); // Output: true (types are different)

console.log("Greater than (val1 > val3):", val1 > val3); // Output: true
console.log("Less than (val1 < val3):", val1 < val3); // Output: false
console.log("Greater than or equal to (val1 >= val2):", val1 >= val2); // Output: true (10 >= 10)
console.log("Less than or equal to (val1 <= val3):", val1 <= val3); // Output: false

// --- 4. Logical Operators ---
// These operators combine or modify boolean expressions.

console.log("\n--- Logical Operators ---");

let isSunny = true;
let isWarm = false;
let hasHat = true;

// Logical AND (&&): Returns true if ALL operands are true.
console.log("Go to beach? (isSunny && isWarm):", isSunny && isWarm); // Output: false

// Logical OR (||): Returns true if AT LEAST ONE operand is true.
console.log("Stay home? (isSunny || isWarm):", isSunny || isWarm); // Output: true

// Logical NOT (!): Inverts the boolean value.
console.log("Don't need hat? (!hasHat):", !hasHat); // Output: false

// Short-circuiting with || and &&
// || returns the first truthy value or the last value if all are falsy.
let userPreference = "" || "Default Theme"; // "" is falsy, so "Default Theme" is returned
console.log(
  "User preference (empty string || 'Default Theme'):",
  userPreference
); // Output: Default Theme

// && returns the first falsy value or the last value if all are truthy.
let isAdmin = true;
let accessLevel = isAdmin && "Full Access"; // isAdmin is truthy, so "Full Access" is returned
console.log("Access level (isAdmin && 'Full Access'):", accessLevel); // Output: Full Access

// --- 5. Ternary (Conditional) Operator ---
// A shorthand for simple if-else statements.
// Syntax: condition ? valueIfTrue : valueIfFalse;

console.log("\n--- Ternary Operator ---");

let age = 20;
let drivingStatus = age >= 18 ? "Can Drive" : "Cannot Drive";
console.log("Driving Status (age 20):", drivingStatus); // Output: Can Drive

let temperature = 15;
let weatherSuggestion =
  temperature > 25 ? "Wear light clothes" : "Wear warm clothes";
console.log("Weather Suggestion (temp 15):", weatherSuggestion); // Output: Wear warm clothes

// --- 6. Type Conversion (Coercion) ---
// JavaScript automatically converts data types (implicit) or you can do it manually (explicit).

console.log("\n--- Type Conversion ---");

// Implicit Coercion (Automatic)
console.log("String + Number ('5' + 2):", "5" + 2); // Output: "52" (Number 2 becomes string "2")
console.log("String - Number ('10' - 4):", "10" - 4); // Output: 6 (String "10" becomes number 10)
console.log("String * Number ('3' * '2'):", "3" * "2"); // Output: 6 (Both strings become numbers)
console.log("Invalid conversion ('abc' * 2):", "abc" * 2); // Output: NaN (Not a Number)

// Explicit Coercion (Manual)
let strNum = "123";
let numValue = Number(strNum); // Converts string "123" to number 123
console.log("Number('123'):", numValue, "Type:", typeof numValue); // Output: 123, Type: number

let numToStr = String(456); // Converts number 456 to string "456"
console.log("String(456):", numToStr, "Type:", typeof numToStr); // Output: "456", Type: string

let boolFromZero = Boolean(0); // Converts 0 (falsy) to false
let boolFromText = Boolean("Hello"); // Converts "Hello" (truthy) to true
console.log("Boolean(0):", boolFromZero); // Output: false
console.log("Boolean('Hello'):", boolFromText); // Output: true

let parsedInt = parseInt("100px"); // Parses string to integer, stops at non-numeric char
console.log("parseInt('100px'):", parsedInt); // Output: 100

let parsedFloat = parseFloat("3.14abc"); // Parses string to float
console.log("parseFloat('3.14abc'):", parsedFloat); // Output: 3.14
