const loginform=document.getElementById("loginform");

loginform.addEventListener(
    "submit",
    function(event){
        event.preventDefault();
        const email=document.getElementById("email").value.trim();
        const password=document.getElementById("password").value;
        if(email===""){
            alert("Please enter your email address.");
            return;
        }
        if(email.includes(" ")){
            alert("Email address cannot contain spaces.");
            return;
        }
        if(!email.includes("@")){
            alert("email address must contain '@' symbol.");
            return;
        }
        if(!email.includes(".")){
            alert("Email address must contain '.' symbol.");
            return;
        }
        if(password===""){
            alert("Please enter your password.");
            return;
        }
        if(password.length<6){
            alert("Password must be at least 6 characters long.");
            return;
        }
    if(password.length>20){
            alert("Password cannot exceed 20 characters.");
            return;
        }
        if(password.includes(" ")){
            alert("Password cannot contain spaces.");
            return;
        }

        if(!/[A-Z]/.test(password)){
            alert("Password must contain at least one uppercase letter.");
            return;
        }
        if(!/[a-z]/.test(password)){
            alert("Password must contain at least one lowercase letter.");
            return;
        }
        if(!/[0-9]/.test(password)){
            alert("Password must contain at least one number.");
            return;
        }
        if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            alert("Password must contain at least one special character.");
            return;
        }
        
        alert("Login successful!");
    }
);

    
