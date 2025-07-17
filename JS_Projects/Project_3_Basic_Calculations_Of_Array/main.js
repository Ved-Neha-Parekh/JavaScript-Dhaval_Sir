//! Mini Employee Management System with SWITCH

let employees = [
  { id: 1, name: "Ved", role: "Back End Development", salary: 50000 },
  { id: 2, name: "Krishna", role: "Front End Development", salary: 50000 },
  { id: 3, name: "Chitt", role: "Full Stack Development", salary: 60000 },
];

//? Hardcoded choice: 1-10
let choice = null; //! Change this number to test different operations

switch (choice) {
  case 1:
    // Push (Add at END)
    employees.push({ id: 4, name: "Adi", role: "CA", salary: 55000 });
    console.log("After Push:", employees);
    break;

  case 2:
    // Pop (Remove LAST)
    employees.pop();
    console.log("After Pop:", employees);
    break;

  case 3:
    // Unshift (Add at START)
    employees.unshift({ id: 0, name: "Raj", role: "Intern", salary: 20000 });
    console.log("After Unshift:", employees);
    break;

  case 4:
    // Shift (Remove FIRST)
    employees.shift();
    console.log("After Shift:", employees);
    break;

  case 5:
    // Splice (Remove 1 at index 1)
    employees.splice(1, 1);
    console.log("After Splice Remove:", employees);
    break;

  case 6:
    // Splice (Add at index 1)
    employees.splice(1, 0, { id: 5, name: "Ria", role: "HR", salary: 35000 });
    console.log("After Splice Add:", employees);
    break;

  case 7:
    // map() - Employee Names
    let employeeNames = employees.map((emp) => emp.name);
    console.log("Employee Names:", employeeNames);
    break;

  case 8:
    // filter() - High Paid
    let highPaid = employees.filter((emp) => emp.salary > 40000);
    console.log("High Paid Employees:", highPaid);
    break;

  case 9:
    // forEach() - All Details
    console.log("All Employee Details:");
    employees.forEach((emp) => {
      console.log(`ID: ${emp.id}, Name: ${emp.name}, Role: ${emp.role}`);
    });
    break;

  case 10:
    // indexOf, includes
    let names = employees.map((emp) => emp.name);
    let idx = names.indexOf("Ved");
    console.log("Index of Ved:", idx);

    let nameExists = names.includes("Ved");
    console.log("Is Ved Included?", nameExists);
    break;

  default:
    console.log("Invalid Choice");
}
