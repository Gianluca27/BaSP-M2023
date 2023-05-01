var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var emailField = document.getElementById('email-field');
var passField = document.getElementById('pass-field');
var submitButton = document.getElementById('sign-in');
var displaySidebar = document.getElementById('sidebar-button');
var sidebar = document.getElementById('sidebar')
var header = document.getElementById('header')
var homeButton = document.getElementById('home-button')
var loginRedir = document.getElementById('login-redir')
var signUpRedir = document.getElementById('sign-up-redir')
var signUpButton = document.getElementById('sign-up-button')
var main = document.getElementById('main')

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

displaySidebar.onclick = function() {
    if (sidebar.classList.length == 0) {
        sidebar.classList.add('displayed-sidebar')
        header.classList.add('header')
        main.classList.add('hidden-sidebar')
    }
    else {
        sidebar.classList.remove('displayed-sidebar')
        header.classList.remove('header')
        main.classList.remove('hidden-sidebar')
    }
};

homeButton.onclick = function() {
    location.href = "../views/index.html"
}

signUpRedir.onclick = function() {
    location.href = "../views/sign-up.html"
}

loginRedir.onclick = function() {
    location.href = "../views/login.html"
}

signUpButton.onclick = function() {
    location.href = "../views/sign-up.html"
}

emailInput.onblur = function() {
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    if (emailInput.value.length == 0) {
        invalidEmail.innerText = 'Email is required'
        emailField.appendChild(invalidEmail)
    }
    if (!validateEmail.test(emailInput.value)) {
        invalidEmail.innerText = 'Invalid email'
        emailField.appendChild(invalidEmail)
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
    if ((!isAlphanumeric(passwordInput.value)) || (password.value.length < 8)) {
        invalidPass.innerText = 'Invalid password'
        passField.appendChild(invalidPass)
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
        fetch("https://api-rest-server.vercel.app/login")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log("error", error)
        })
    }
};