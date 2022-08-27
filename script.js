// Assignment Code
var generateBtn = document.querySelector("#generate");

// Inputs/prompts
var passwordLength;
var symbols;
var numbers;
var uppercase;
var lowercase;

//Password character criteria
// Password character criteria
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {

    let password = "";
    var passwordChar = "";
    // First prompt asking for users password length
    while (true) {
      passwordLength = parseInt(prompt("Choose the length of your password. This needs to be between 8 - 128"));
      // If user chooses a number equal to or above 8 and equal to or below 128, move on
      if (passwordLength >= 8 && passwordLength <= 128) {
        break;
      }
      // Else, return this alert and loop back to the start so they can choose a valid number
      alert("Please select a number between 8 - 128");
    }
    // Once user has chosen a valid number, they will choose the rest of their criteria
    symbols = confirm("Select 'OK' if you would like to include special characters");
    numbers = confirm("Select 'OK' if you would like to include numbers");
    uppercase = confirm("Select 'OK' if you would like to include uppercase letters");
    lowercase = confirm("Select 'OK' if you would like to include lowercase letters");
  
    // Function to concat all possible true options and pass them to the passwordChar variable
    if (symbols) {
      passwordChar = sym;
    } else if (numbers) {
      passwordChar = num;
    } else if (uppercase) {
      passwordChar = upper;
    } else if (lowercase) {
      passwordChar = lower;
    } else if (symbols && numbers) {
      passwordChar = sym += num;
    } else if (symbols && uppercase) {
      passwordChar = sym += upper;
    } else if (symbols && lowercase) {
      passwordChar = sym += lower;
    } else if (numbers && uppercase) {
      passwordChar = num += upper;
    } else if (numbers && lowercase) {
      passwordChar = num += lower;
    } else if (uppercase && lowercase) {
      passwordChar = upper += lower;
    } else if (symbols && numbers && uppercase) {
      passwordChar = sym += num += upper;
    } else if (symbols && numbers && lowercase) {
      passwordChar = sym += num += lower;
    } else if (symbols && uppercase && lowercase) {
      passwordChar = sym += upper += lower;
    } else if (lowercase && numbers && uppercase) {
      passwordChar = lower += num += upper;
    } else if (symbols && numbers && uppercase && lowercase) {
      passwordChar = sym += num += upper += lower;
    } else if (!symbols && !numbers && !uppercase && !lowercase)
      alert("You must select at least one criterie, please start again!")

      // For loop to select random characters from the criteria strings
      for (let i = 0; i < passwordLength; i++) {password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
      }
    
      return (password);
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
