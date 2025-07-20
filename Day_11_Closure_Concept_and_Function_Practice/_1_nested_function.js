// function outerFunction() {
//   let outerVar = "I am Outer";

//   function innerFunction() {
//     console.log(outerVar);
//     console.log("I am inner function");
//   }

//   function secondInner() {
//     console.log("Hello Second Inner here..");
//   }

//   secondInner();
//   innerFunction();
// }
// outerFunction();

function name() {
  let name = "Ved";
  function greet() {
    console.log("Hello " + name);
  }

  function prtMsg() {
    console.log("You are amazing!");
  }

  prtMsg();

  greet();
}
name();

// Closure means function returning function using parent function variable and it can prevent parent function variable even after execution