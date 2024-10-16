"use strict";
(function() {

    const buttonEl = document.querySelector(".hamburger-menu");
    const demoEl = document.querySelector('.submenu');

    buttonEl.addEventListener("click", function() {
        demoEl.classList.toggle('open'); // change classname to open/close dropdown menu.
    });
    

    const modalEl = document.querySelector('.modal');
    const openEl = document.querySelector('.cards'); //ancestor
    const cancelEl = document.querySelector('.cancel');

    openEl.addEventListener('click', (e) => {
        if(e.target.classList.contains('card__link')){
            //e.target is the link element in cards
            modalEl.showModal();
        }
    });

    cancelEl.addEventListener('click',() =>{
        modalEl.close();
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
    emailPresent: false,
    emailValue: false,
    emailConfirmPresent: false,
    emailConfirmValue: false,
};


function validateEmail() {
    const email = emailEl.value;
    formValidation.emailPresent = true;
    formValidation.emailValue = true;

    if(!email) {
        formValidation.emailPresent = false;
    }

    if(!email.includes("@")) {
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

    if(emailConfirm !== emailEl.value) {
        formValidation.emailConfirmValue = false;
    }
}

function isFormValid() {
    let isValid = true;
    isValid = isValid && formValidation.emailPresent;
    isValid = isValid && formValidation.emailValue;
    isValid = isValid && formValidation.emailConfirmPresent;
    isValid = isValid && formValidation.emailConfirmValue;
    return isValid;
}


function render() {
    renderEmailError();
    renderEmailConfirmError();
   
}


function renderEmailError() {
    const emailErrorEl = document.querySelector('.register__error--email');
    emailErrorEl.innerHTML = `
    ${ formValidation.emailPresent ? '' : '<p>This field is requird</p>'}
    ${ formValidation.emailValue ? ''  : '<p>This field be a valid email address including a @</p>'}
    ` 
       ;

    // Set the color dynamically
    emailErrorEl.style.color = 'red';

    // Set the font style to italics
    emailErrorEl.style.fontStyle = 'italic';
}

function renderEmailConfirmError() {
    const emailConfirmErrorEl = document.querySelector('.register__error--confirm');
    emailConfirmErrorEl.innerHTML = `
    ${ formValidation.emailConfirmPresent ? '' : '<p>Confirm email is required</p>'}
    ${ formValidation.emailConfirmValue ? ''  : '<p>This field must match the provided email address</p>'}
    ` ;

    // Set the color dynamically
    emailConfirmErrorEl.style.color = 'red';

    // Set the font style to italics
    emailConfirmErrorEl.style.fontStyle = 'italic';

}



})();