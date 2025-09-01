window.onload = () => 
document.getElementById("Login").style.display="none";


function doRegister() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let result=register(name, email, password)
    alert(result);
    if(result==="Registration successful"){
        document.getElementById("Register").style.display="none";
        document.getElementById("Login").style.display="block";

    }
}

function doLogin() {
    let email = document.getElementById("logEmail").value;
    let password = document.getElementById("logPassword").value;
    alert(login(email, password));
}



function register (name, email, password) {

    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){
        return "Please use a valid email address";
    }

    // get item from local storage
    // convert from string
    const getusers = localStorage.getItem("users");
    
    const users = JSON.parse(getusers) || [];

    const check = users.find((user) => user.email === email);

    if (check) {
        return "Email aready exist";
    }

    users.push({name, email, password});

    const str = JSON.stringify(users);

    localStorage.setItem("users",JSON.stringify(users));

    return "Registration successful";

}


function login (email, password) {

    const getusers = localStorage.getItem("users");
    
    const users = JSON.parse(getusers) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
        return "Invalid credentials";
    } else {
         localStorage.setitem("currentUser", JSON.stringify(user));
         document.getElementById("Login").style.display = "none";
         document.getElementById("Dashboard").style.display = "block";
         document.getElementById("welcomeMsg").innerText = 'Welcome, ${user.name}';
         return 'Login successful . Welcome ${user.name}';
    }
}