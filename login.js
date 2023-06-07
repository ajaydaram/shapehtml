const loginForm = document.getElementById("login-form");
const registrationForm = document.getElementById("registration-form");

function showRegistration() {
    loginForm.style.display = "none";
    registrationForm.style.display = "block";
}

function showLogin() {
    loginForm.style.display = "block";
    registrationForm.style.display = "none";
}

function login() {
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;

// Perform validation here
    if (username == "admin" && password == "password") {
        alert("Login successful!");
        window.location.href = "home.html";
        return true;
    } else {
        alert("Invalid username or password.");
        return false;
    }
}

function register() {
    let newUsername = document.getElementsByName("new-username")[0].value;
    let newPassword = document.getElementsByName("new-password")[0].value;

// Perform validation here
    alert("Registration successful!");
    window.location.href = "home.html";
    return true;
}

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    login();
});

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    register();
});
