console.log("--- Program 16: BMI Classification Program ---");

let bmi = 28.5; // You can change this BMI value

console.log(`\nYour BMI is: ${bmi}`);

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 24.9) {
  console.log("Normal");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
