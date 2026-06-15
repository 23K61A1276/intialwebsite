document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("message").innerHTML =
            "Login Successful!";
    } else {
        document.getElementById("message").innerHTML =
            "Invalid Username or Password";
    }
});
