function manOwar(arr){
    let pirateStatus = arr.shift().split('>');
    let warshipStatus = arr.shift().split('>');
    let command = '';
    maxHealth = arr.shift();
    console.log(pirateStatus);
    console.log(warshipStatus);
    console.log(maxHealth);
    for (let i = 0; i < arr.length; i++) {
        command = arr[i].split(' ').shift();
        console.log(command);
        while (arr[i] !== "Retire") {
            switch (command) {
                case "Fire":
                let section = arr[0];
                let damage = arr[1];
                if (section >= 1 && section <= warshipStatus.length) {}
                    break;
            
                default:
                    break;
            }
        }
    }
}
manOwar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]))