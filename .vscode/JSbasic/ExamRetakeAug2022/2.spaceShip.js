function spaceShip(input) {
    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeigth = Number(input[2]);
    let avrgAstrHaight = Number(input[3]);
    let roomVolume = (avrgAstrHaight + 0.40) * 2 * 2;
    let shipVolume = shipWidth * shipHeigth * shipLength;
    let astrNum = shipVolume / roomVolume;
    if (astrNum >= 3 && astrNum <= 10) {
        console.log(`The spacecraft holds ${Math.floor(astrNum)} astronauts.`);
    } else if (astrNum < 3) {
        console.log("The spacecraft is too small.");
    } else {
        console.log("The spacecraft is too big.");
    }
    
}
spaceShip(["3.5",
"4",
"5",
"1.70"])
spaceShip