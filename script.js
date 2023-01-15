/* HAMBURGER MENU */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeImg = document.querySelector('.close-img');
const closeA = document.querySelector('.close-a');

/* Add class active */
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})
/* Remove class active with X */
closeImg.addEventListener('click', () => {
  navMenu.classList.remove('active');
})
/* Remove class active with Loopstudios */
closeA.addEventListener('click', () => {
  navMenu.classList.remove('active');
})
/* Remove class active with navbar links */
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener ('click', () => {
  navMenu.classList.remove('active');
}));


/* LOGIN AND SIGNUP FORM */
let modalSignIn = document.querySelector('#modal-signin');
let signup = document.querySelector('#signup');
let modalSignUp = document.querySelector('#modal-signup');
let overlay = document.querySelector('#overlay');

/* Login fot two login links */
document.querySelectorAll('.login').forEach(n => n.addEventListener ('click', () => {
  modalSignIn.classList.toggle('active');
  overlay.style.display = 'block';
}));
/* Signup */
signup.addEventListener('click', () => {
  modalSignUp.classList.toggle('active');
  modalSignIn.classList.remove('active');
  overlay.style.display = 'block';
});
/* Close Signin and Signup modal with X img */
document.querySelectorAll('.close-modal').forEach(n => n.addEventListener ('click', () => {
  modalSignIn.classList.remove('active');
  modalSignUp.classList.remove('active');
  overlay.style.display = 'none';
}));
/* Close Signin and Signup modal with button */
document.querySelectorAll('.btn').forEach(n => n.addEventListener ('click', () => {
  modalSignIn.classList.remove('active');
  modalSignUp.classList.remove('active');
  overlay.style.display = 'none';
}));

/* VALIDATION FORM */
let inputs = document.querySelectorAll('input'); // inputs = 7 arrays;
let errors = {                                   // the "errors" consists of strings;
    "first_name": [],
    "last_name": [],
    "email": [],                                 // key = "email", value = [];
    "password": [],
    "email-signup": [],
    "password-signup": [],
    "retype_password": []
};

inputs.forEach(element => {                  // for Loop: for all inputs;
  element.addEventListener('keyup', e => {
    let currentInput = e.target;             // the input that we changed;
    let inputValue = currentInput.value;     // value in the input;
    let inputName = currentInput.getAttribute('name');

    if(inputValue.length > 4) {              
      errors[inputName] = [];                // empty all errors for input;
          
      switch(inputName) {
        case 'email':
        case 'email-signup':
          if(!validateEmail(inputValue)) {
            errors[inputName].push('Invalid email address!');
          }
        break;

        case 'retype_password':
              let password = document.querySelector('input[name="password"]').value;
              if(inputValue !== password) {
                  errors[inputName].push("Passwords don't match!");
              }
        break;

      }

    } else {
        errors[inputName] = ['The field cannot have less than 5 characters!'];
      }

    populateErrors();

  });
});

const populateErrors = () => {                   // function for printing errors;

    for(let elem of document.querySelectorAll('.valid-errors')) { // empty errors in ul;
        elem.remove();
    };

    for(let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name="${key}"]`); // printing inputs singly;
        let parentElement = input.parentElement;
        let errorsElement = document.createElement('ul'); // create ul for printing errors;
        errorsElement.classList.toggle('valid-errors');
        parentElement.appendChild(errorsElement);

        errors[key].forEach(error => {          // for Loop for all errors;
            let li = document.createElement('li');
            li.innerText = error;

            errorsElement.appendChild(li);
        });
    }
}

const validateEmail = email => {               // function for email validation;
    if(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(email)) {
        return true;
    }
    return false;
}
