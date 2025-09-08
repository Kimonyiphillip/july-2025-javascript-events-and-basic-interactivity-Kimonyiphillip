// ==========================
//  Part 1: Event Handling
// ==========================
const msgBtn = document.getElementById('msgBtn');
const msgOutput = document.getElementById('msgOutput');

msgBtn.addEventListener('click', function() {
  msgOutput.textContent = "🎉 Button clicked! JavaScript is working.";
});


// ==========================
// Part 2: Interactive Elements
// ==========================

// 1) Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById('toggleModeBtn');
toggleModeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// 2) Counter
let count = 0;
const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

increaseBtn.addEventListener('click', function() {
  count++;
  counterValue.textContent = count;
});

resetBtn.addEventListener('click', function() {
  count = 0;
  counterValue.textContent = count;
});


// ==========================
//  Part 3: Form Validation
// ==========================
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

userForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (min 6 characters)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success Message
  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
    formSuccess.classList.add("success");
    userForm.reset();
  } else {
    formSuccess.textContent = "";
  }
});
