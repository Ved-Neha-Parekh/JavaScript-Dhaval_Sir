function greet(name, age) {
  if (age === undefined) {
    console.log(`👋 Hello, ${name}!`);
  } else {
    console.log(`🎂 Hello, ${name}! You're ${age} years old.`);
  }
}

greet("Mr A");
greet("Mr B", 25);
