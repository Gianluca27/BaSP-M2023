var nameInput = document.getElementById('name')
var nameField = document.getElementById('name-field')
var lastNameInput = document.getElementById('last-name')
var lastNameField = document.getElementById('last-name-field')
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
var repeatPassInput = document.getElementById('repeat-pass')
var repeatPassField = document.getElementById('repeat-pass-field')
var submitButton = document.getElementById('sign-up');

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
invalidRepeatPass.classList.add('error')

var validateForm = false

function isAlphanumericWithSpaces(str) {
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if ((charCode < 48 || charCode > 57) &&
            (charCode < 65 || charCode > 90) &&
            (charCode < 97 || charCode > 122) &&
            charCode !== 32) {
        return false;
      }
    }
    return true;
  }

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


function isNumeric(str) {
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode < 48 || charCode > 57) {
        return false;
      } else if (charCode == 32 || (charCode < 48 && charCode > 57)) {
        return false;
      }
    }
    return true;
};

function isAlphabetic(str) {
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32) {
        return false;
      }
    }
    return true;
};

function isValidDate(str) {
    var date = new Date(str);
    return !isNaN(date.getTime());
  }

nameInput.onblur = function() {
    if (nameInput.value.length == 0) {
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
    console.log(dniInput.value)
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
    if (!isValidDate(bdayDateInput.value)) {
        invalidBdayDate.innerText = 'Invalid birthday date'
    }
};

bdayDateInput.onfocus = function() {
    invalidBdayDate.innerText = ''
};

telNumberInput.onblur = function() {
    if (telNumberInput.value.length == 0) {
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
    if (addressInput.value.length == 0) {
        invalidAddress.innerText = 'Address is required'
        addressField.appendChild(invalidAddress)
    }
    else if (addressInput.value.length < 5) {
        invalidAddress.innerText = 'Address must have at least 5 characters \n'
        addressField.appendChild(invalidAddress)
    }
    if (!isAlphanumericWithSpaces(addressInput.value)) {
        invalidAddress.innerText += 'Address can only contain alphanumeric characters'
    }
};

addressInput.onfocus = function() {
    invalidAddress.innerText = ''
};

localityInput.onblur = function() {
    if (localityInput.value.length == 0) {
        invalidLocality.innerText = 'Locality required'
        localityField.appendChild(invalidLocality)
    }
    else if (localityInput.value.length < 3) {
        invalidLocality.innerText = 'Locality must contain at least 3 characters \n'
        localityField.appendChild(invalidLocality)
    }
    if (!isAlphanumericWithSpaces(localityInput.value)) {
        invalidLocality.innerText += 'Locality can only contain alphabetic characters'
        localityField.appendChild(invalidLocality)
    }
};

localityInput.onfocus = function() {
    invalidLocality.innerText = ''
}

postalCodeInput.onblur = function() {
    if (postalCodeInput.value.length == 0) {
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
}

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
    if (passwordInput.value.length == 0) {
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
    if (repeatPassInput.value.length == 0) {
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

var formFields = [nameInput.value, lastNameInput.value, dniInput.value, telNumberInput.value, addressInput.value,
localityInput.value, postalCodeInput.value, emailInput.value, passwordInput.value, repeatPassInput.value]

submitButton.onclick = function() {
    event.preventDefault()
    for (var i = 0; i < formFields.length; i++) {
        if (formFields[i] == '') {
            i = 12
            alert('The form has errors')
        }
        else {
            alert('User registered!')
        }
    }
};