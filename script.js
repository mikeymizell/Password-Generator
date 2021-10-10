// Assignment Code
var generateBtn = document.querySelector("#generate");

// pwElement object used to store the possible data for password
var pwElement = {
  ucAlpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lcAlpha: 'abcdefghijklmnopqrstuvwxyz',
  numerics: '0123456789',
  specialChar: '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~',
  randomizer: function(uc, lc, num, spec) {
    var letter;
    var customCharTable = '';

    if (uc) {
      customCharTable += this.ucAlpha;
    }
    
    if (lc) {
      customCharTable += this.lcAlpha;
    }

    if (num) {
      customCharTable += this.numerics;
    }

    if (spec) {
      customCharTable += this.specialChar;
    }

    letter = customCharTable.charAt(Math.floor(Math.random() * customCharTable.length));

    return letter;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  window.alert("Welcome to the Password Generator!");
  window.alert("Please select which filters you would like to apply to your randomly generated password.");

  // create passwordLength object and make it empty to enter while loop
  var passwordLength = "";
  while (passwordLength === "" || passwordLength === null || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = window.prompt("Enter the number of characters you'd like in your password: ");
  }

  // adding filters for password using confirms that present true or false to get out of while loop
  var upperCase = false;
  var lowerCase = false;
  var numbers = false;
  var specChar = false;
  while (!upperCase && !lowerCase && !numbers && !numbers && !specChar) {
    upperCase = window.confirm("Uppercase letters included?");
    lowerCase = window.confirm("Lowercase letters included?");
    numbers = window.confirm("Numbers included?");
    specChar = window.confirm("Special character included?");
  }

  // converts passwordLength into a integer
  passwordLength = parseInt(passwordLength);
  var passString = '';
  for (var i = 0; i < passwordLength; i++) {
    passString += pwElement.randomizer(upperCase, lowerCase, numbers, specChar);
  }

  return passString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);