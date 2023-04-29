var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var emailField = document.getElementById('email-field');
var passField = document.getElementById('pass-field');
var submitButton = document.getElementById('sign-in');
var homeButton = document.getElementById('home')
var redirSignUp = document.getElementById('sign-up')
var redirLogin = document.getElementById('login')

var invalidEmail = document.createElement('p');
invalidEmail.classList.add('error');
var invalidPass = document.createElement('p');
invalidPass.classList.add('error');

function isAlphanumeric(str) {
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (
        !(charCode > 47 && charCode < 58) &&
        !(charCode > 64 && charCode < 91) &&
        !(charCode > 96 && charCode < 123)
      ) {
        return false;
      }
    }
    return true;
};

emailInput.onblur = function() {
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    if (emailInput.value.length == 0) {
        invalidEmail.innerText = 'Email is required'
        emailField.appendChild(invalidEmail)
    }
    else {
        if (!validateEmail.test(emailInput.value)) {
            invalidEmail.innerText = 'Invalid email'
            emailField.appendChild(invalidEmail)
        }
    }
};

emailInput.onfocus = function() {
    invalidEmail.innerText = ''
};

passwordInput.onblur = function() {
    if (passwordInput.value.length == 0) {
        invalidPass.innerText = 'Password is required'
        passField.appendChild(invalidPass)
    }
    else {
        if ((!isAlphanumeric(passwordInput.value)) || (password.value.length < 8)) {
            invalidPass.innerText = 'Invalid password'
            passField.appendChild(invalidPass)
        }
    }
};

passwordInput.onfocus = function() {
    invalidPass.innerText = ''
};

submitButton.onclick = function(event) {
    event.preventDefault()
    var errorMessage = ''
    var validateForm = false
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    if (emailInput.value.length > 0) {
        if (!validateEmail.test(email.value)) {
            errorMessage += 'Invalid email' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Email is required' + '\n'
        validateForm = true
    }
    if (passwordInput > 0) {
        if ((!isAlphanumeric(passwordInput.value)) || (password.value.length < 8)) {
            errorMessage += 'Invalid password'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Password is required'
        validateForm = true
    }
    if (validateForm) {
        alert(errorMessage)
    }
    else {
        alert('Logged in succesfully! \n' + email.value + '\n' + password.value)
    }
};