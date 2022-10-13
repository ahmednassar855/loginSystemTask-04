function signUp(){
    document.querySelector("#signUpForm").classList.replace("d-none","d-block");
    document.querySelector("#loginForm").classList.add("d-none");
    document.querySelector("#userName").classList.replace("d-none","d-block");

    document.querySelector("#signUp").classList.add("d-none");
    document.querySelector("#userName").classList.replace("d-none","d-block");

    document.querySelector("#registerBtn").classList.replace("d-none","d-block");
    document.querySelector("#signIn").classList.replace("d-none","d-block");
    
    document.querySelector(".signInbtn").classList.add("d-none");
    
}


function logIn(){
    document.querySelector("#signUpForm").classList.replace("d-block","d-none");
    document.querySelector("#loginForm").classList.replace("d-none", "d-block");
    document.querySelector("#userName").classList.replace("d-block","d-none");

    document.querySelector("#signUp").classList.replace("d-none", "d-block");

    document.querySelector("#registerBtn").classList.replace("d-block","d-none");
    document.querySelector("#signIn").classList.replace("d-block","d-none");

    document.querySelector(".signInbtn").classList.replace("d-none","d-block");
}

function youAreLogin(){
    document.querySelector("#loginForm").classList.add("d-none"); 
    document.querySelector("#userEmail").classList.add("d-none"); 
    document.querySelector("#userPassword").classList.add("d-none");
    document.querySelector(".signUpbtn").classList.add("d-none");
    document.querySelector(".signInbtn").classList.add("d-none");
    document.querySelector(".welcome").classList.replace("d-none","d-block");
}

function youAreLogOut(){
    document.querySelector("#loginForm").classList.replace("d-none","d-block"); 
    document.querySelector("#userEmail").classList.replace("d-none","d-block"); 
    document.querySelector("#userPassword").classList.replace("d-none","d-block");
    document.querySelector(".signUpbtn").classList.replace("d-none","d-block");
    document.querySelector(".signInbtn").classList.replace("d-none","d-block");
    document.querySelector(".welcome").classList.replace("d-block","d-none");
}


var newUserName = document.getElementById("userName");
var newUserEmail = document.getElementById("userEmail");
var newUserPassword = document.getElementById("userPassword");


function validateRegexName(){
    var regexName = /^[A-Z][a-z]{3,20}$/ig;
    if( newUserName.value.match(regexName) ){
        return true;
    }else{
        document.getElementById("successMessage").innerHTML = 
            `
            <div class="text-decoration-underline">Invalid User Name</div>
            <p>Enter First Character capital only , enter char at least 3 chat and max 20 char</p>
            `;
            document.querySelector('.successOrFailedMessage').classList.replace("d-none" ,"d-block");
            document.querySelector('.successOrFailedMessage').classList.add("bg-danger");

        return false;
    }
   
}

function checkEmailIfExist(){
    users = JSON.parse(localStorage.getItem("users"));
    if( localStorage.getItem("users") !=null ){
        var index = users.findIndex(checkEmail => checkEmail.userEmail === newUserEmail.value );
        console.log(index);
        if (index <0){
            return true;
        }else{
            console.log("email is exist");
            document.getElementById("successMessage").innerHTML = 
            `
            <div class="text-decoration-underline">Invalid Email</div>
            Theis Email is already reserved 
            `;
            document.querySelector('.successOrFailedMessage').classList.replace("d-none" ,"d-block");
            document.querySelector('.successOrFailedMessage').classList.add("bg-danger"); 
            return false;
        } 
    }
    return true;
    
}

function validateRegexEmail() {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( newUserEmail.value.match(regexEmail) ){
        return true;
    }else{
        document.getElementById("successMessage").innerHTML = 
        `
        <div class="text-decoration-underline text-danger">Invalid Email</div>
        <div class="text-start">
            <P >The email shall follow the same structure</P>
            <ul>
                <li>mysite@ourearth.com</li>
                <li>my.ownsite@ourearth.org</li>
                <li> mysite@you.me.net</li>
            </ul>
        </div>
       
        `;
        document.querySelector('.successOrFailedMessage').classList.replace("d-none" ,"d-block");
        document.querySelector('.successOrFailedMessage').classList.add("bg-warning");
        return false;
    }
}

function CheckRegexPassword() { 
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(newUserPassword.value.match(passw)){
        return true;
    }else{ 
        document.getElementById("successMessage").innerHTML = 
            `
            <div class="text-decoration-underline">Invalid Pawssord</div>
            password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter1
            `;
        document.querySelector('.successOrFailedMessage').classList.replace("d-none" ,"d-block");
        document.querySelector('.successOrFailedMessage').classList.add("bg-warning");
        return false;
    }
}

function addSucessfully(){
    document.getElementById("successMessage").innerHTML = "Added successfully";      
    document.querySelector('.successOrFailedMessage').classList.replace("d-none" ,"d-block");
    document.querySelector('.successOrFailedMessage').classList.add("bg-info");
}


// comment : add new user
var users = [];
function addNewUser(){
    if( localStorage.getItem("users") !=null ){
        if( validateRegexName() && validateRegexEmail()  && CheckRegexPassword() && checkEmailIfExist()){
            newUser = {
                userName : newUserName.value.trim(),
                userEmail : newUserEmail.value.trim(),
                userPassword : newUserPassword.value.trim()
            }       
            console.log(newUser);
            console.log("this email is not exist in data and will add it");
            users.push(newUser);
            localStorage.setItem("users",JSON.stringify(users));
                
            addSucessfully();
            logIn();
            console.log("add seccessfully");       
            clear();
        }
    }
    else if (validateRegexName() && validateRegexEmail()  && CheckRegexPassword() ){
        newUser = {
            userName : newUserName.value.trim(),
            userEmail : newUserEmail.value.trim(),
            userPassword : newUserPassword.value.trim()
        }       
        console.log(newUser);
        console.log("this email is not exist in data and will add it");
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
            
        addSucessfully();
        logIn();
        console.log("add seccessfully");       
        clear();
    }
    else {
        console.log("erorrrrr re5m");
    }
    
}

function clear(){
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
}


//  check if email and password are exist to can login

function SignIn(){
    if ( checkEmailIsCorrect() && checkPasswordISCorrect() ){
        youAreLogin();
        welcome();
    }
    
   
}
function checkEmailIsCorrect(){
    users = JSON.parse(localStorage.getItem("users"));
    var index = users.findIndex(checkEmail => checkEmail.userEmail === newUserEmail.value );
        console.log(index);
        if (index >= 0){
            var user = users.find(checkEmail => checkEmail.userEmail === newUserEmail.value );
            console.log(user.userEmail);
            checkPasswordISCorrect();
            return true;
        }else{
            document.getElementById("successMessage").innerHTML = 
            `
            <div class="text-decoration-underline">Invalid Email</div>
            Theis Email is Not Registerd yet.... please sign up !! 
            `;
            document.querySelector('.successOrFailedMessage').classList.replace("d-none" ,"d-block");
            document.querySelector('.successOrFailedMessage').classList.add("bg-danger");
        }
        
        
}

function checkPasswordISCorrect() {
    users = JSON.parse(localStorage.getItem("users"));
    var user = users.find(checkEmail => checkEmail.userEmail === newUserEmail.value );
    console.log(userPassword.value , user.userPassword);
    if (  userPassword.value === user.userPassword ){
        return true;
    }
    else{
        document.getElementById("successMessage").innerHTML = 
            `
            <div class="text-decoration-underline">Wrong password</div>
            `;
            document.querySelector('.successOrFailedMessage').classList.replace("d-none" ,"d-block");
            document.querySelector('.successOrFailedMessage').classList.add("bg-danger");
    }
}

function logOut(){
    youAreLogOut();
    clear();
}

function welcome(){
    users = JSON.parse(localStorage.getItem("users"));
    var user = users.find(checkEmail => checkEmail.userEmail === newUserEmail.value );
    var welcomeName = user.userName;

    if (checkEmailIsCorrect() && checkPasswordISCorrect()){
        document.getElementById("welcomeName").innerHTML = `
        <div class="text-decoration-underline pb-3">welcome <span > ${welcomeName} </span> </div>
        `;

        document.querySelector(".successOrFailedMessage").classList.add("d-none");
    }
    return false;
    
    
}