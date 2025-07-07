console.log("--- Program 11: Login authentication (role-based) ---");

const USER_ROLE_ADMIN = "admin";
const USER_ROLE_EDITOR = "editor";
const USER_ROLE_VIEWER = "viewer";
const USER_ROLE_USER = "user";
const USER_ROLE_GUEST = "guest";

let userCurrentRole = USER_ROLE_ADMIN;

console.log("---Role-Based Access Checker---");

// Scenario 1: Admin Dashboard Access
console.log("\n--- Scenario-1: Admin Dashboard Access---");
console.log("Checking admin access. Please wait...");

if (userCurrentRole === USER_ROLE_ADMIN) {
  console.log(
    `Welcome Admin! User: '${userCurrentRole}' has access to Admin Dashboard.`
  );
} else {
  console.log(
    `User: '${userCurrentRole}' does NOT have access to Admin Dashboard. Admin Permission Required.`
  );
}
console.log("\n--- General Welcome ---");

switch (userCurrentRole) {
  case USER_ROLE_ADMIN:
    console.log("Welcome Admin! You have full control over the system.");
    break;
  case USER_ROLE_EDITOR:
    console.log("Welcome Editor! You can manage content.");
    break;
  case USER_ROLE_VIEWER:
    console.log("Welcome Viewer! Enjoy Browse the content.");
    break;
  case USER_ROLE_USER:
    console.log("Welcome User! Explore your personalized dashboard.");
    break;
  case USER_ROLE_GUEST:
    console.log("Welcome Guest! Limited access available.");
    break;
  default:
    console.log("Welcome! Your role is not recognized.");
}
