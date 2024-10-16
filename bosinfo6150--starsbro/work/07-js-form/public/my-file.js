"use strict";
(function() {

const nameEl = document.querySelector('.register__name');
nameEl.addEventListener('input',(e) => {
    validateUsername();
    renderUsernameError();;
});

const emailEl = document.querySelector('.register__email');
emailEl.addEventListener('input',(e) => {
    validateEmail();
    renderEmailError();
});

const emailConfirmEl = document.querySelector('.register__confirm');
emailConfirmEl.addEventListener('input',(e) => {
    validateEmailConfirm();
    renderEmailConfirmError();
});


const registerEl = document.querySelector('.register');
registerEl.addEventListener('submit',(e) => {
    render();

    if(!isFormValid()) {
        e.preventDefault();
    }
    
});

const formValidation = {
    usernamePresent: false,
    usernameValid: false,
    emailPresent: false,
    emailValue: false,
    emailConfirmPresent: false,
    emailConfirmValue: false,
};

function validateUsername() {

    const username = nameEl.value;
    formValidation.usernamePresent = true;
    formValidation.usernameValid = true;
    
    if(!username) {
        formValidation.usernamePresent = false;
    }

    if(username.includes(" ")) {
        formValidation.usernameValid = false;
    }
}

function validateEmail() {
    const email = emailEl.value;
    formValidation.emailPresent = true;
    formValidation.emailValue = true;

    if(!email) {
        formValidation.emailPresent = false;
    }

    if(email.includes(" ")) {
        formValidation.emailValue = false;
    }
}

function validateEmailConfirm() {
    const emailConfirm = emailConfirmEl.value;
    formValidation.emailConfirmPresent = true;
    formValidation.emailConfirmValue = true;

    if(!emailConfirm) {
        formValidation.emailConfirmPresent = false;
    }

    // 
    if(emailConfirm !== emailEl.value) {
        formValidation.emailConfirmValue = false;
    }
}

function isFormValid() {
    let isValid = true;
    isValid = isValid && formValidation.usernamePresent;
    isValid = isValid && formValidation.usernameValid;
    isValid = isValid && formValidation.emailPresent;
    isValid = isValid && formValidation.emailValue;
    isValid = isValid && formValidation.emailConfirmPresent;
    isValid = isValid && formValidation.emailConfirmValue;
    return isValid;
}


function render() {
    renderUsernameError();
    renderEmailError();
    renderEmailConfirmError();
   
}

function renderUsernameError() {
    const nameErrorEl = document.querySelector('.register__error--name');
    nameErrorEl.innerHTML = `
    ${ formValidation.usernamePresent ? '' : '<p>Username is required</p>'}
    ${ formValidation.usernameValid ? ''  : '<p>Username cannot contain spaces</p>'}
    ` 
        ;
}

function renderEmailError() {
    const emailErrorEl = document.querySelector('.register__error--email');
    emailErrorEl.innerHTML = `
    ${ formValidation.emailPresent ? '' : '<p>Email is required</p>'}
    ${ formValidation.emailValue ? ''  : '<p>Email cannot contain spaces</p>'}
    ` 
        ;
}

function renderEmailConfirmError() {
    const emailConfirmErrorEl = document.querySelector('.register__error--confirm');
    emailConfirmErrorEl.innerHTML = `
    ${ formValidation.emailConfirmPresent ? '' : '<p>Confirm email is required</p>'}
    ${ formValidation.emailConfirmValue ? ''  : '<p>Email and Confirm Email must match</p>'}
    ` 
        ;
}


})();