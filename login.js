document.querySelector(".submit-btn").addEventListener("click", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedData = JSON.parse(localStorage.getItem("userData"));

    if(!storedData){
        alert("No user found! Please register first ❌");
        return;
    }
    if(email === storedData.email && password === storedData.password){
        alert("Login Successful ✅");

        // Redirect to home page
        window.location.href = "../Home/home.html";
    } else {
        alert("Invalid Email or Password ❌");
    }
});