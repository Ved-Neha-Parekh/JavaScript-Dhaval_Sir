//! Functions in JavaScript - Expanded Information

// --- 1. Function Declaration / Definition ---
// This is the most common way to define a function.
// They are hoisted, meaning they can be called before they are defined in the code.
function whatIsFunction() {
  console.log("--- What is Function? (Function Declaration) ---");
  console.log(
    "In JavaScript, a function is a reusable block of code designed to perform a specific task. Functions are fundamental building blocks for structuring and organizing code, promoting modularity and code reuse."
  );
  console.log(
    "Function Declarations are hoisted, meaning they are moved to the top of their scope during the compilation phase, allowing you to call them before their actual definition in the code."
  );
  console.log("Example: `function functionName() { ... }`\n");
}

// --- 2. Named Function ---
// A function declaration is inherently a named function.
function namedFunction() {
  console.log("--- What is Named Function? ---");
  console.log(
    "A named function is simply a function that has an identifier (a name) assigned to it. Function Declarations are always named functions."
  );
  console.log(
    "The name allows you to refer to and call the function later in your code. They are also hoisted."
  );
  console.log("Example: `function myNamedFunc() { ... }`\n");
}

// --- 3. Function Expression ---
// A function expression defines a function as part of an expression.
// They are NOT hoisted in the same way as declarations; you must define them before calling.
const functionExpression = function () {
  // This is an anonymous function expression
  console.log("--- What is Function Expression? ---");
  console.log(
    "A function expression defines a function as part of an expression, usually assigned to a variable."
  );
  console.log(
    "Unlike function declarations, function expressions are not hoisted, meaning you cannot call them before they are defined in the code."
  );
  console.log("Example: `const myFunc = function() { ... };`\n");
};

// --- 4. Arrow Function ---
// Introduced in ES6, a concise syntax for writing function expressions.
// They do not have their own `this` context (they lexically inherit `this`).
const arrowFunction = () => {
  console.log("--- What is Arrow Function? ---");
  console.log(
    "Arrow functions, introduced in ECMAScript 2015 (ES6), provide a concise syntax for writing function expressions in JavaScript."
  );
  console.log(
    "They offer a more compact way to define functions compared to traditional function expressions, particularly useful for shorter, single-expression functions."
  );
  console.log(
    "Key features: Shorter syntax, no `this` binding (lexical `this`), cannot be used as constructors, and cannot be hoisted."
  );
  console.log("Example: `const myArrowFunc = () => { ... };`\n");
};

// --- 5. Anonymous Function ---
// A function without a name. Often used as callbacks or in function expressions.
const anonymousFunction = function () {
  console.log("--- What is Anonymous Function? ---");
  console.log(
    "In JavaScript, an anonymous function is a function that is declared without a name."
  );
  console.log(
    "They are typically used in contexts where a function is needed immediately and does not require a name for future reference, such as callbacks for event listeners, `setTimeout`, or array methods (`map`, `filter`)."
  );
  console.log("Example: `setTimeout(function() { ... }, 1000);`\n");
};

// --- 6. IIFE (Immediately Invoked Function Expression) ---
// A function that runs as soon as it is defined.
// Used for scope isolation and preventing global variable pollution.
(function () {
  console.log("--- What is 'IIFE' function? (using function keyword) ---");
  console.log(
    "An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is executed as soon as it is defined."
  );
  console.log(
    "This pattern is widely used for several reasons, primarily related to scope management and preventing global scope pollution. Variables declared inside an IIFE are not accessible from outside."
  );
  console.log("Example: `(function() { ... })();`\n");
})();

// IIFE using arrow function syntax
(() => {
  console.log("--- IIFE using Arrow Function ---");
  console.log(
    "Immediately Invoked Function Expressions (IIFEs) can also be created using arrow functions in JavaScript."
  );
  console.log(
    "The fundamental structure involves enclosing the arrow function in parentheses and then immediately invoking it with another set of parentheses."
  );
  console.log("Example: `(() => { ... })();`\n");
})();

// --- Types of Functions Based on Parameters and Return Values ---

// 1. TNRN (Takes Nothing, Returns Nothing)
// These functions perform an action (side effect) but do not take any input
// and do not explicitly return a value. They implicitly return `undefined`.
function takesNothingReturnsNothing() {
  console.log("--- TNRN (Takes Nothing, Returns Nothing) ---");
  console.log("This function simply prints a message.");
  // No parameters, no explicit return statement.
  console.log("Example: `function sayHello() { console.log('Hello'); }`\n");
}

// 2. TNRS (Takes Nothing, Returns Something)
// These functions do not take any input parameters but compute and return a value.
function takesNothingReturnsSomething() {
  console.log("--- TNRS (Takes Nothing, Returns Something) ---");
  const randomNumber = Math.random();
  console.log("This function generates and returns a random number.");
  console.log("Example: `function getRandom() { return Math.random(); }`");
  return randomNumber; // Returns a value
}

// 3. TSRN (Takes Something, Returns Nothing)
// These functions take one or more input parameters but perform an action (side effect)
// and do not explicitly return a value. They implicitly return `undefined`.
function takesSomethingReturnsNothing(name) {
  console.log("--- TSRN (Takes Something, Returns Nothing) ---");
  console.log(
    `Hello, ${name}! This function takes a name and prints a greeting.`
  );
  // Takes 'name' parameter, no explicit return statement.
  console.log(
    "Example: `function greetUser(name) { console.log('Hello, ' + name); }`\n"
  );
}

// 4. TSRS (Takes Something, Returns Something)
// These functions take one or more input parameters, perform some computation,
// and then explicitly return a value based on the inputs. This is very common.
function takesSomethingReturnsSomething(num1, num2) {
  console.log("--- TSRS (Takes Something, Returns Something) ---");
  const sum = num1 + num2;
  console.log(
    `This function takes two numbers (${num1}, ${num2}) and returns their sum.`
  );
  console.log("Example: `function add(a, b) { return a + b; }`");
  return sum; // Returns a value
}

// --- Function Calling / Execution ---
console.log("\n--- Calling Functions ---");

whatIsFunction();
namedFunction();
functionExpression(); // Call the function expression
arrowFunction();
anonymousFunction(); // Call the anonymous function expression

// Calling functions based on parameters/return types
takesNothingReturnsNothing();

const randomVal = takesNothingReturnsSomething();
console.log(`Random value generated by TNRS function: ${randomVal}\n`);

takesSomethingReturnsNothing("Alice");

const sumResult = takesSomethingReturnsSomething(10, 20);
console.log(`Sum returned by TSRS function: ${sumResult}\n`);
