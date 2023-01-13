// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt("Choose the length of your password characters")
  )
 
  if(isNaN(length) === true){
    alert("Password must be a number");
    return;
  }

  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }

  
  if (length > 128) {
    alert("password must be less than 128 characters");
    return;
  }

  var hasSpecialCharacters = confirm("Click OK to confirm including special characters"
  )

  var hasNumericCharacters = confirm("click OK to confirm including numeric characters"
  )

  var hasLowerCasedCharacters = confirm( "CLick OK to confirm including lowercase characters"
  )

  var hasUpperCasedCharacters = confirm( "Click OK to confirm including uppercase characters"
  )

  if(hasLowerCasedCharacters ===false &&
    hasUpperCasedCharacters === false &&
    hasSpecialCharacters === false &&
    hasNumericCharacters === false) {
      alert("Please select at least one charecter");
      return;

    }

    var getPasswordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasNumericCharacters: hasNumericCharacters 
    }
    

    return getPasswordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random()*arr.length)
  var randomElement = arr[randomIndex];

  return randomElement;

}

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();
console.log (options);
var result = []

var possibleCharacter = []

var guaranteedCharacter = []

if(options.hasSpecialCharacters){
  possibleCharacter = possibleCharacter.concat(specialCharacters);
  guaranteedCharacter.push(getRandom(specialCharacters))
}

if(options.hasLowerCasedCharacters) {
  possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
  guaranteedCharacter.push(getRandom(lowerCasedCharacterss))
}

if(options.hasUpperCasedCharacters) {
  possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
  guaranteedCharacter.push(getRandom(upperCasedCharacters))
}
 
if(options.hasNumericCharacters){
  possibleCharacter = possibleCharacter.concat(numericCharacters);
  guaranteedCharacter.push(getRandom(numericCharacters))
}


for(var index = 0; index < options.length; index++){
  var generated = getRandom(possibleCharacter);
  console.log(generated);  
  result.push(generated);
}

 

console.log(result);

return result.join("")


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);