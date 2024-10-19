const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        alert("Form Submitted Successfully");
    }
});

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    return isNameValid && isEmailValid && isPasswordValid; // All validations must pass
}

function validateName() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    const icon = nameError.previousElementSibling; // The icon element

    // Reset error message and icon styles
    nameError.innerHTML = "";
    icon.classList.remove('fa-xmark', 'fa-check');
    icon.style.color = "";

    // Validate name input
    if (!name.length) {
        setError(icon, nameError, "Name is required");
        return false;
    }

    if (!/^[A-Za-z]+([ '-][A-Za-z]+)*$/.test(name)) {
        setError(icon, nameError, "Write Your Full Name (letters, spaces, hyphens allowed)");
        return false;
    }

    icon.classList.add('fa-check'); // Set checkmark if valid
    icon.style.color = "green"; // Green for valid input
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError'); // Updated to use the correct ID
    const icon = emailError.previousElementSibling; // The icon element for email

    // Reset error message and icon styles
    emailError.innerHTML = "";
    icon.classList.remove('fa-xmark', 'fa-check');
    icon.style.color = "";

    // Validate email input
    if (!email.length) {
        setError(icon, emailError, "Email is required");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError(icon, emailError, "Enter a valid email address");
        return false;
    }

    icon.classList.add('fa-check'); // Set checkmark if valid
    icon.style.color = "green"; // Green for valid input
    return true;
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError'); // Updated to use the correct ID
    const icon = passwordError.previousElementSibling; // The icon element for password

    // Reset error message and icon styles
    passwordError.innerHTML = "";
    icon.classList.remove('fa-xmark', 'fa-check');
    icon.style.color = "";

    // Validate password input
    if (!password.length) {
        setError(icon, passwordError, "Password is required");
        return false;
    }

    if (password.length < 8) { // Example: Password must be at least 8 characters
        setError(icon, passwordError, "Password must be at least 8 characters long");
        return false;
    }

    icon.classList.add('fa-check'); // Set checkmark if valid
    icon.style.color = "green"; // Green for valid input
    return true;
}

// Function to set error message and icon
function setError(icon, errorElement, message) {
    errorElement.innerHTML = message; // Set error message
    icon.classList.remove('fa-check'); // Remove checkmark class
    icon.classList.add('fa-xmark'); // Add cross sign class
    icon.style.color = "red"; // Set color for error
}
