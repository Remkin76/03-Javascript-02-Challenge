// Assign the button element to a variable
var generateBtn = document.querySelector("#generate");


// Add event listener to the button
generateBtn.addEventListener("click", writePassword);

// Function to generate and display the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;  
}

// Generate password based on selected criteria
function generatePassword() {
  // Prompt the user for password criteria and validate the inputs
  var passwordLength = parseInt(prompt("Enter the length of the password (8-128 characters):"));

  // Check if the length is valid
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Check if at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

  var availableChars = "";
  
  // Add selected character sets to the available characters
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumeric) {
    availableChars += numericChars;
  }
  if (includeSpecial) {
    availableChars += specialChars;
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
}