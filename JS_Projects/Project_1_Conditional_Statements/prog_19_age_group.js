console.log("--- Program 19: Age Group Categorization ---");

let age = 65;

console.log(`\nAge: ${age}`);

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior Citizen");
}
