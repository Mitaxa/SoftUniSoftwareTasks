function login(input) {

    let index = 0;
    let userName = input[index];
    index++;
    let password = userName.split().reverse().join('');
    let counter = 0;

    for ( let i = userName.length-1; i >= 0; i--) {
        password = password + userName[i];
    }

while (input[index] !== password) {
    counter++;
    if (counter === 4) {
        console.log(`User ${userName} blocked!`);
        return;
    } else {
    console.log("Incorrect password. Try again.");
    }
index++;
}

if (input[index] === password) {
    console.log(`User ${userName} logged in.`);
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])