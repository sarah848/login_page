const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("submit");
let loginErrorMsg = document.getElementByName("login-error-msg");

// Prevents form from being submitted when login/submit button is clicked
loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const email = loginForm.Email.value;
    const password = loginForm.Password.value;
    
    if (email === "user@gmail.com" && password === "password") {
        alert("You have successfully logged in.");
       // location.reload();

    } else if (email !== "user@gmail.com" && password === "password") {
        loginErrorMsg.style.opacity = 1;
        
    } else if (email === "user@gmail.com" && password !== "password") {
        loginErrorMsg = "Invalid Password!";
        loginErrorMsg.style.opacity = 1;

    } else (email !== "user@gmail.com" && password !== "password") {
        loginErrorMsg = "Invalid Email & Password!";
        loginErrorMsg.style.opacity = 1;
    }
} )