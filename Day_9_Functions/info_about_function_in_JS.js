//! Functions in JavaScript.

function whatIsFunction() {
  //? Function Declaration / Definition.
  console.log("What is Function?");
  console.log(
    "In JavaScript, a function is a reusable block of code designed to perform a specific task. Functions are fundamental building blocks for structuring and organizing code, promoting modularity and code reuse.\n"
  );
}

function namedFunction() {
  console.log("What is Named Function?");
  console.log(
    "Defined using the 'function' keyword followed by a name. Hoisted, meaning they can be called before their declaration in the code.\n"
  );
}

const arrowFunction = () => {
  console.log("What is arrow function?");
  console.log(
    "Arrow functions, introduced in ECMAScript 2015 (ES6), provide a concise syntax for writing function expressions in JavaScript. They offer a more compact way to define functions compared to traditional function expressions, particularly useful for shorter, single-expression functions.\n"
  );
};

const anonymousFunction = function () {
  console.log("What is Anonymous Function?");
  console.log(
    "In JavaScript, an anonymous function is a function that is declared without a name. Unlike named functions, which are defined with an identifier that can be used to call them later, anonymous functions are typically used in contexts where a function is needed immediately and does not require a name for future reference.\n"
  );
};

// ?Function calling
whatIsFunction();
namedFunction();
arrowFunction();
anonymousFunction();

(function () {
  console.log("What is 'IIFE' function? (using function keyword)");
  console.log(
    "An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is executed as soon as it is defined. This pattern is widely used for several reasons, primarily related to scope management and preventing global scope pollution.\n"
  );
})();

(() => {
  console.log("Using arrow function");
  console.log(
    "Immediately Invoked Function Expressions (IIFEs) can be created using arrow functions in JavaScript. The fundamental structure involves enclosing the arrow function in parentheses and then immediately invoking it with another set of parentheses."
  );
})();
