// Assignment Code
var generateBtn = document.querySelector("#generate")

var numberString = "123456";
var numberArray = numberString.split("");
var lowerCase = "dcgheofgrw";
var upperCase = "SJIGTINDF";
var specialCase = "#$&@^$)(";


function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  if(isNaN(length) === true) {
    alert("Click ok to continue.")
    return;
  }
  if(length>128) {
    alert("Less numbers please!");
    return;
  }
  if(length<8) {
    alert("More numbers please!");
    return;
  }
  var isNum = confirm("Click ok to confirm numbers.");


  function getPasswordOptions() {
    var length = parseInt(prompt("Type an uppercase character."));
    if(isNaN(upperCase) === true) {
      alert("Click ok to continue.")
      return;
    }
    if(lowerCase = )


  
  if(isNum === false && isUpper === false && isLower === false && isSymbol ===false) {
    alert("please choice one char type");
    return;
  }

  var passwordOptions = {
    length,
    isNum,
    isUpper,
    isLower,
    isSymbol
  }
  return passwordOptions;
}

// Write password to the #password input
function writePassword() {
  var options = getPasswordOptions();
  console.log(options);
  var passwordArray = [];
  var results = [];
  if(options.isNum === true) {
    passwordArray = passwordArray.concat(numberArray)
  }
// if statements to create array go here


for(var i = 0; i < options.length; i++) {
  var index = Math.floor(Math.random() * passwordArray.length);
  var digit = passwordArray[index];
  results.push(digit)
  console.log(results)

}
  var password = results.join("")
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function sumUp(a,b) {
//   return a + b 

// }
// sumUp(10,2)
// confirm("how are you?")

