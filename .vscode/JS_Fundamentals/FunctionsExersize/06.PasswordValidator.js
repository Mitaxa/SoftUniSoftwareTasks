function passwordValidator(input) {
 
    let passwordLength = input.length;
    let consistOfLetters = 0;
    let consistOfDigits = 0;
    let passwordValid = true;
    //ascii-range - digits => 48-57, 65-90, 97-122;
 
    for (let i = 0; i < passwordLength; i++) {
        let currentChar = String(input[i].charCodeAt(0))
 
        if (Number(currentChar) > 47 && Number(currentChar) < 58
            || Number(currentChar) > 64 && Number(currentChar) < 91
            || Number(currentChar) > 96 && Number(currentChar) < 123) {
 
            consistOfLetters++;
        }
 
        if (Number(currentChar) > 47 && Number(currentChar) < 58) {
 
            consistOfDigits++;
        }
    }
 
    if (passwordLength > 10 || passwordLength < 6) {
        console.log("Password must be between 6 and 10 characters");
        passwordValid = false;
    }
 
    if (passwordLength !== consistOfLetters) {
        console.log("Password must consist only of letters and digits");
        passwordValid = false;
    }
 
    if (consistOfDigits < 2) {
        console.log("Password must have at least 2 digits");
        passwordValid = false;
    }
 
    if(passwordValid) {
        console.log("Password is valid");
    }
}
passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')