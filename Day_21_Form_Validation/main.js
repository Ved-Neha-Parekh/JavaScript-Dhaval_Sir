const form = document.getElementById("signupForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  if (username.value === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  } else if (username.value.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  if (email.value === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    emailError.textContent = "Email must contain @ and .";
    isValid = false;
  } else if (email.value.indexOf("@") > email.value.lastIndexOf(".")) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (password.value === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    alert("From submitted successfully ✅");
    form.reset();
  }
});
