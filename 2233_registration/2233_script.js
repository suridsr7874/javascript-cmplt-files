let validateForm=()=>{
    let isFormValid=validateUser()
                    &&validateEmail()
                    &&validatePassword()
                    &&validateConfirmPassword()
                    &&validatePasswordsMatch();

    //logic here
    if(isFormValid){
        alert('form submitted sucessfully');
        return true;
    }
    else {
        return false;
    }
};


//validateUser
let validateUser=()=> {
    let username = document.querySelector('#username').value;
    if (username === '') {
        applyColors('#username');
        displayErrorMessage('username is required');
        return false;
    }
    else if(!username.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors('#username');
        displayErrorMessage(' no special characters ');
        return false;
    }
    else if(username.length<5){
        applyColors('#username');
        displayErrorMessage('enter  atleast 5 letters ');
        return false;
    }
    else {
        removeColors('#username');
        return true;
    }
};


//validateEmail
let validateEmail=()=>{
    let email=document.querySelector('#email').value;
    if (email === '') {
        applyColors('#email');
        displayErrorMessage('email is required');
        return false;
    }
    else{
            removeColors('#email');
            return true;
    }

};



//validatePassword
let validatePassword=()=>{
    let password=document.querySelector('#password').value;
    if(password===''){
        applyColors('#password');
        displayErrorMessage('password is required');
        return false;
    }
    else {
        removeColors('#password');
        return true;
    }
};


//validateconPassword
let validateConfirmPassword=()=>{
    let c_password=document.querySelector('#c_password').value;
    if(c_password===''){
        applyColors('#c_password');
        displayErrorMessage('confirm password is required');
        return false;
    }
    else{
      removeColors('#c_password ');
      return true;
    }
};

//pswdmch
let validatePasswordsMatch=()=>{
    let password=document.querySelector('#password').value;
        let c_password=document.querySelector('#c_password ').value;
    if(c_password!==password){
        applyColors('#c_password');
        applyColors('#password');
        displayErrorMessage('Passwords not matched');
        return false;
    }
    else {
        removeColors('#c_password');
        removeColors('#password');
        return true;
    }
};

//apply colors
let applyColors=(fieldId)=>{
    let inputField=document.querySelector(`${fieldId}`);
    inputField.style.border='2px solid red';
    inputField.style.boxShadow='0 0 10px red';
};

//removecolors
let removeColors=(fieldId)=>{
    let inputField=document.querySelector(`${fieldId}`);
    inputField.style.border='2px solid green';
    inputField.style.boxShadow='0 0 10px green';
};


//
let displayErrorMessage = (message) => {
    let errorMsgDiv = document.querySelector('#error-msg');
    let h3Tag = document.createElement('h3');
    h3Tag.textContent = message;
    h3Tag.style.backgroundColor = 'red';
    errorMsgDiv.appendChild(h3Tag);
    setTimeout(removeErrorMessage,3000);
};


// remove Error Message
// remove Error Message
let removeErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};

