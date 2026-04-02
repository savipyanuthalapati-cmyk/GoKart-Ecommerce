document.getElementById("formContainer").addEventListener("submit",function data(e){
    e.preventDefault()
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let mobile=document.getElementById("mobile").value;

    console.log(name,email,password,mobile);

    let userData={
        name:name,
        email:email,
        mobile:mobile,
        password:password
    }

    localStorage.setItem("userData",JSON.stringify(userData))
    window.location.href="../Login/login.html"
})