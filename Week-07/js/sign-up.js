var nameInput = document.getElementById('name');
var nameField = document.getElementById('name-field');
var lastNameInput = document.getElementById('last-name');
var lastNameField = document.getElementById('last-name-field');
var dniInput = document.getElementById('dni');
var dniField = document.getElementById('dni-field');
var bdayDateInput = document.getElementById('bday-date');
var bdayDateField = document.getElementById('bday-date-field');
var telNumberInput = document.getElementById('tel-number');
var telNumberField = document.getElementById('tel-number-field');
var addressInput = document.getElementById('address');
var addressField = document.getElementById('address-field');
var localityInput = document.getElementById('locality');
var localityField = document.getElementById('locality-field');
var postalCodeInput = document.getElementById('postal-code');
var postalCodeField = document.getElementById('postal-code-field');
var emailInput = document.getElementById('email');
var emailField = document.getElementById('email-field');
var passwordInput = document.getElementById('password');
var passField = document.getElementById('pass-field');
var repeatPassInput = document.getElementById('repeat-pass');
var repeatPassField = document.getElementById('repeat-pass-field');
var submitButton = document.getElementById('sign-up');
var displaySidebar = document.getElementById('sidebar-button');
var sidebar = document.getElementById('sidebar');
var header = document.getElementById('header');
var homeButton = document.getElementById('home-button');
var loginRedir = document.getElementById('login-redir');
var signUpRedir = document.getElementById('sign-up-redir');
var main = document.getElementById('main');
var myForm = document.querySelector('form');

var invalidName = document.createElement('p');
invalidName.classList.add('error');
var invalidLastName = document.createElement('p');
invalidLastName.classList.add('error');
var invalidDni = document.createElement('p');
invalidDni.classList.add('error');
var invalidBdayDate = document.createElement('p');
invalidBdayDate.classList.add('error');
var invalidTelNumber = document.createElement('p');
invalidTelNumber.classList.add('error')
var invalidAddress = document.createElement('p');
invalidAddress.classList.add('error');
var invalidLocality = document.createElement('p');
invalidLocality.classList.add('error');
var invalidPostalCode = document.createElement('p'); 
invalidPostalCode.classList.add('error');
var invalidEmail = document.createElement('p');
invalidEmail.classList.add('error');
var invalidPass = document.createElement('p');
invalidPass.classList.add('error');
var invalidRepeatPass = document.createElement('p');
invalidRepeatPass.classList.add('error');

function isAlphanumericWithSpaces(str) {
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i)
        if ((charCode < 48 || charCode > 57) &&
            (charCode < 65 || charCode > 90) &&
            (charCode < 97 || charCode > 122) &&
            charCode !== 32) {
        return false
      }
    }
    return true
  };

function isAlphanumeric(str) {
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i)
      if (
        !(charCode > 47 && charCode < 58) &&
        !(charCode > 64 && charCode < 91) &&
        !(charCode > 96 && charCode < 123)
      ) {
        return false
      }
    }
    return true
};

function isNumeric(str) {
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode < 48 || charCode > 57) {
        return false;
      } else if (charCode == 32 || (charCode < 48 && charCode > 57)) {
        return false;
      }
    }
    return true
};

function isAlphabetic(str) {
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i)
      if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32) {
        return false;
      }
    }
    return true
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
    location.href = "index.html"
};

signUpRedir.onclick = function() {
    location.href = "sign-up.html"
};

loginRedir.onclick = function() {
    location.href = "login.html"
};

nameInput.onblur = function() {
    if (nameInput.value == '') {
        invalidName.innerText = 'Name is required'
        nameField.appendChild(invalidName)
    }
    else if (nameInput.value.length < 3) {
        invalidName.innerText = 'Name must have at least 3 characters \n'
        nameField.appendChild(invalidName)
    }
    if (!isAlphabetic(nameInput.value)) {
        invalidName.innerText += 'Name can only contain alphabetic characters'
        nameField.appendChild(invalidName)
    }
};

nameInput.onfocus = function() {
    invalidName.innerText = ''
};

lastNameInput.onblur = function() {
    if (lastNameInput.value == '') {
        invalidLastName.innerText = 'Last name is required'
        lastNameField.appendChild(invalidLastName)
    }
    else if (lastNameInput.value.length < 3) {
        invalidLastName.innerText = 'Last name must have at least 3 characters \n'
        lastNameField.appendChild(invalidLastName)
    }
    if (!isAlphabetic(lastNameInput.value)) {
        invalidLastName.innerText += 'Last name can only contain alphabetic characters'
        lastNameField.appendChild(invalidLastName)
    }
};

lastNameInput.onfocus = function() {
    invalidLastName.innerText = ''
};

dniInput.onblur = function() {
    if (dniInput.value == '') {
        invalidDni.innerText = 'DNI is required'
        dniField.appendChild(invalidDni)
    }
    else if (dniInput.value.length < 7) {
        invalidDni.innerText += 'DNI must have at least 7 characters'
        dniField.appendChild(invalidDni)
    }
    if (dniInput.value.length > 8) {
        invalidDni.innerText += 'DNI can not contain more than 9 characters'
        dniField.appendChild(invalidDni)
    }
    if (!isNumeric(dniInput.value)) {
        invalidDni.innerText = 'DNI can only contain numbers \n'
        dniField.appendChild(invalidDni)
    }
};

dniInput.onfocus = function() {
    invalidDni.innerText = ''
};

bdayDateInput.onblur = function() {
    var dateString = bdayDateInput.value
    var selectedDate = dateString.split('-')
    if (dateString == '') {
        invalidBdayDate.innerText = 'Birthday date is required'
        bdayDateField.appendChild(invalidBdayDate)
    }
    if (selectedDate[0] < 1930 || selectedDate[0] > 2010) {
        invalidBdayDate.innerText = 'Birthday date must be between 1930 and 2010'
        console.log(selectedDate)
        bdayDateField.appendChild(invalidBdayDate)
    }
};

bdayDateInput.onfocus = function() {
    invalidBdayDate.innerText = ''
};

telNumberInput.onblur = function() {
    if (telNumberInput.value == '') {
        invalidTelNumber.innerText = 'Telephone number is required'
        telNumberField.appendChild(invalidTelNumber)
    }
    else if (telNumberInput.value.length != 10) {
        invalidTelNumber.innerText = 'Telephone number must be 10 characters long \n'
        telNumberField.appendChild(invalidTelNumber)
    }
    if (!isNumeric(telNumberInput.value)) {
        invalidTelNumber.innerText += 'Telephone number can only contain numeric characters'
        telNumberField.appendChild(invalidTelNumber)
    }
};

telNumberInput.onfocus = function() {
    invalidTelNumber.innerText = ''
};

addressInput.onblur = function() {
    if (addressInput.value == '') {
        invalidAddress.innerText = 'Address is required'
        addressField.appendChild(invalidAddress)
    }
    else if (addressInput.value.length < 5) {
        invalidAddress.innerText = 'Address must have at least 5 characters \n'
        addressField.appendChild(invalidAddress)
    }
    if (!isAlphanumericWithSpaces(addressInput.value)) {
        invalidAddress.innerText += 'Address can only contain alphanumeric characters'
        addressField.appendChild(invalidAddress)
    }
};

addressInput.onfocus = function() {
    invalidAddress.innerText = ''
};

localityInput.onblur = function() {
    if (localityInput.value == '') {
        invalidLocality.innerText = 'Locality required'
        localityField.appendChild(invalidLocality)
    }
    else if (localityInput.value.length < 3) {
        invalidLocality.innerText = 'Locality must contain at least 3 characters \n'
        localityField.appendChild(invalidLocality)
    }
    if (!isAlphanumericWithSpaces(localityInput.value)) {
        invalidLocality.innerText += 'Locality can only contain alphanumeric characters'
        localityField.appendChild(invalidLocality)
    }
};

localityInput.onfocus = function() {
    invalidLocality.innerText = ''
};

postalCodeInput.onblur = function() {
    if (postalCodeInput.value == '') {
        invalidPostalCode.innerText = 'Postal Code is required'
        postalCodeField.appendChild(invalidPostalCode)
    }
    else if (postalCodeInput.value.length < 4) {
        invalidPostalCode.innerText += 'Postal Code must have at least 4 characters \n'
        postalCodeField.appendChild(invalidPostalCode)
    }
    else if (postalCodeInput.value.length > 5) {
        invalidPostalCode.innerText += 'Postal code can only contain 5 characters \n'
        postalCodeField.appendChild(invalidPostalCode)
    }
    else if (!isNumeric(postalCodeInput.value)) {
        invalidPostalCode.innerText = 'Postal code can only contain numeric characters \n'
        postalCodeField.appendChild(invalidPostalCode)
    }
};

postalCodeInput.onfocus = function() {
    invalidPostalCode.innerText = ''
};

emailInput.onblur = function() {
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    if (emailInput.value.length == 0) {
        invalidEmail.innerText = 'Email is required'
        emailField.appendChild(invalidEmail)
    }
    else if (!validateEmail.test(emailInput.value)) {
        invalidEmail.innerText = 'Invalid email'
        emailField.appendChild(invalidEmail)
    }
};

emailInput.onfocus = function() {
    invalidEmail.innerText = ''
};

passwordInput.onblur = function() {
    if (passwordInput.value == '') {
        invalidPass.innerText = 'Password is required \n'
        passField.appendChild(invalidPass)
    }
    else if (passwordInput.value.length < 8) {
        invalidPass.innerText = 'Password must contain at least 8 characters \n'
        passField.appendChild(invalidPass)
    }
    if (!isAlphanumeric(passwordInput.value)){
        invalidPass.innerText += 'Password can only contain alphanumeric characters \n'
        passField.appendChild(invalidPass)
    }
};

passwordInput.onfocus = function() {
    invalidPass.innerText = ''
};

repeatPassInput.onblur = function() {
    if (repeatPassInput.value == '') {
        invalidRepeatPass.innerText = 'Repeat Password is required'
        repeatPassField.appendChild(invalidRepeatPass)
    }
    else if (repeatPassInput.value != passwordInput.value) {
        invalidRepeatPass.innerText = 'Passwords do not match'
        repeatPassField.appendChild(invalidRepeatPass)
    }
};

repeatPassInput.onfocus = function() {
    invalidRepeatPass.innerText = ''
};

submitButton.onclick = function(event) {
    event.preventDefault()
    var errorMessage = ''
    var validateForm = false
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    var dateString = bdayDateInput.value
    var selectedDate = dateString.split('-')
    var formattedDate = selectedDate[1] + '/' + selectedDate[2] + '/' + selectedDate[0]
    if ((nameInput.value.length > 0)) {
        if ((nameInput.value.length < 3) || (!isAlphabetic(nameInput.value))) {
            errorMessage += 'Invalid Name' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Name is required' + '\n'
        validateForm = true
    }
    if (lastNameInput.value.length > 0) {
        if (lastNameInput.value.length < 3 || (!isAlphabetic(lastNameInput.value))) {
            errorMessage += 'Invalid Last Name' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Last name is required' + '\n'
        validateForm = true
    }
    if (dniInput.value.length > 0) {
        if ((dniInput.value.length > 9) || (dniInput.value.length < 7) ||
        (!isNumeric(dniInput.value))) {
            errorMessage += 'Invalid DNI' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'DNI is required' + '\n'
        validateForm = true
    }
    if (bdayDateInput.value.length > 0) {
        if (selectedDate[0] < 1930 || selectedDate[0] > 2010) {
            errorMessage += 'Invalid Birthday date' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Birthday date is required' + '\n'
        validateForm = true
    }
    if (telNumberInput.value.length > 0) {
        if ((telNumberInput.value.length != 10) || (!isNumeric(telNumberInput.value))) {
            errorMessage += 'Invalid Telephone Number' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Telephone Number is required' + '\n'
        validateForm = true
    }
    if (addressInput.value.length > 0) {
        if ((addressInput.value.length < 5) || (!isAlphanumericWithSpaces(addressInput.value))) {
            errorMessage += 'Invalid Address' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Address is required' + '\n'
        validateForm = true
    }
    if (localityInput.value.length > 0) {
        if ((localityInput.value.length < 3) || (!isAlphanumericWithSpaces(localityInput.value))) {
            errorMessage += 'Invalid Locality' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Locality is required' + '\n'
        validateForm = true
    }
    if (postalCodeInput.value.length > 0) {
        if ((postalCodeInput.value.length < 4) || (postalCodeInput.value.length > 5) || (!isNumeric(postalCodeInput.value))) {
            errorMessage += 'Invalid Postal Code' + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Postal Code is required' + '\n'
        validateForm = true
    }
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
    if (passwordInput.value.length > 0) {
        if ((!isAlphanumeric(password.value)) || (password.value.length < 8)) {
            errorMessage += 'Invalid password'  + '\n'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Password is required'  + '\n'
        validateForm = true
    }
    if (repeatPassInput.value.length > 0) {
        if (repeatPassInput.value != passwordInput.value) {
            errorMessage += 'Passwords do not match'
            validateForm = true
        }
    }
    else {
        errorMessage += 'Repeat Password is required'
        validateForm = true
    }
    if (validateForm) {
        alert(errorMessage)
    }
    else {
        alert('User created succesfully! \n' +
        nameInput.value + '\n' +
        lastNameInput.value + '\n' +
        emailInput.value + '\n' +
        dniInput.value + '\n' +
        bdayDateInput.value + '\n' +
        telNumberInput.value + '\n' +
        addressInput.value + '\n' +
        localityInput.value + '\n' +
        postalCodeInput.value + '\n' +
        emailInput.value + '\n' +
        passwordInput.value + '\n' +
        repeatPassInput.value)
        var url = "https://api-rest-server.vercel.app/signup" + 
        "?name=" + nameInput.value +
        "&lastName=" + lastNameInput.value +
        "&dni=" + dniInput.value +
        "&dob=" + formattedDate +
        "&phone=" + telNumberInput.value + 
        "&address=" + addressInput.value + 
        "&city=" + localityInput.value +
        "&zip=" + postalCodeInput.value + 
        "&email=" + emailInput.value + 
        "&password=" + passwordInput.value;
        var formData = new FormData(myForm)
        fetch(`${url}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.success) {
                localStorage.setItem("name", nameInput.value)
                localStorage.setItem("lastName", lastNameInput.value)
                localStorage.setItem("dni", dniInput.value)
                localStorage.setItem("dob", bdayDateInput.value)
                localStorage.setItem("phone", telNumberInput.value)
                localStorage.setItem("address", addressInput.value)
                localStorage.setItem("city", localityInput.value)
                localStorage.setItem("zip", postalCodeInput.value)
                localStorage.setItem("email", emailInput.value)
                localStorage.setItem("password", passwordInput.value)
                localStorage.setItem("repeatPassword", repeatPassInput.value)
            }
            alert(data.msg)
            console.log(data)
        })
        .catch(error => alert(error))
    }
};

window.onload = function () {
    nameInput.value = localStorage.getItem("name")
    lastNameInput.value = localStorage.getItem("lastName")
    dniInput.value = localStorage.getItem("dni")
    bdayDateInput.value = localStorage.getItem("dob")
    telNumberInput.value = localStorage.getItem("phone")
    addressInput.value = localStorage.getItem("address")
    localityInput.value = localStorage.getItem("city")
    postalCodeInput.value = localStorage.getItem("zip")
    emailInput.value = localStorage.getItem("email")
    passwordInput.value = localStorage.getItem("password")
    repeatPassInput.value = localStorage.getItem("repeatPassword")
};