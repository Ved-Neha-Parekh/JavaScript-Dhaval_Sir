function greet(name, age) {
  if (age === undefined) {
    console.log(`Hello ${name}`);
  } else {
    console.log(`Hello ${name}, you are ${age} years old`);
  }
}

greet("Julu bhai");
greet("Julu bhai", 18);
