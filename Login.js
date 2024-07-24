function login(loginForm, loginErrorMsg, alertFunction) {
    const email = loginForm.Email.value;
    const password = loginForm.Password.value;

    if (!email || !password) {
        throw new Error('Email and password are required');
    } else if (email === "user@gmail.com" && password === "password") {
        alertFunction("You have successfully logged in.");
        return true;
    } else if (password === "password" && email !== "user@gmail.com") {
        loginErrorMsg.textContent = "Invalid Email!";
        loginErrorMsg.style.opacity = 1;
        return false;
    } else if (email === "user@gmail.com" && password !== "password") {
        loginErrorMsg.textContent = "Invalid Password!";
        loginErrorMsg.style.opacity = 1;
        return false;
    } else {
        loginErrorMsg.textContent = "Invalid Email & Password!";
        loginErrorMsg.style.opacity = 1;
        return false;
    }
}

module.exports = login;

