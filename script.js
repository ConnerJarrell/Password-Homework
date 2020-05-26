// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var length = Number(prompt("How many characters would you like your password to be?"));
    while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like?"));

    var lower = confirm("Would you like to use lowercase letters?");
    var upper = confirm("Would you like to use uppercase letters?");
    var number = confirm("Would you like to use numbers?");
    var symbol = confirm("Would you like to use special characters?");

    while (!uppers && !lowers && !numbers && !symbols) {
        alert("You must select at least one character type!");
        lower = confirm("Would you like to use lowercase letters?");
        upper = confirm("Would you like to use uppercase letters?")
        number = confirm("Would you like to use numbers?");
        symbol = confirm("Would you like to use special characters?");
    }


    //   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    function generatePassword() {
        var pString = "";
        var password = "";
        var lowers = "abcdefghijklmnopqrstuvwxyz";
        var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "1234567890";
        var symbols = "@!#$%^&*()_+";

        if ((number == true) && (symbol == false) && (lower == false) && (upper == false)){
            pString += numbers;
        } else if ((number == true) && (symbol == true) && (lower == false) && (upper == false)){
            pString += numbers += symbols;
        } else if((number == true) && (symbol == true) && (lower == true) && (upper == false)){
            pString += numbers += symbols += lowers
        } else{
            pString += numbers += symbols += lowers += uppers;
        }

        for (var i =0; i < length; i++){
            var j = Math.floor(Math.random() * pString.length);
            var k = pString.charAt(j);
            console.log(k)
            password += k;
        }

        return password;
    }

    console.log("password: " + password);
    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);