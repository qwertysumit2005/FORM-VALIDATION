const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailerror = document.getElementById('emailError');
const passerror = document.getElementById('passError');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword()){
       alert("Form Submitted Successfully");
    
});

function validateName(){
    let name = document.getElementById('name').value;

    if(name.lenght == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!name.match){
    nameError.innerHTML = "Write Full Name";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.lenght == 0){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!email.match){
    emailError.innerHTML = "Enter Valid email";
    emailError.previousElementSibling.classList.add('fa-xmark');
    return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}
function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.lenght == 0){
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!password.match){
    passError.innerHTML = " Enter Password";
    passError.previousElementSibling.classList.add('fa-xmark');
    return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}