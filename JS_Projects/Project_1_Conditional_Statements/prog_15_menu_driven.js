console.log("--- Program 15: Menu Selection Program ---");

let choice = 2;

console.log(`\nYour choice is: ${choice}`);

switch (choice) {
  case 1:
    console.log("You selected Burger");
    break;
  case 2:
    console.log("You selected Pizza");
    break;
  case 3:
    console.log("You selected Pasta");
    break;
  default:
    console.log("Invalid choice");
    break;
}
