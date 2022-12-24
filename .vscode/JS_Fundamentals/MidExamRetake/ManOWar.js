function manOWar(arr){
 
    let pirateShip = arr.shift().split(">").map(Number);
    let warship = arr.shift().split(">").map(Number);
     
    let maximumHealth = Number(arr.shift())

    while(arr[0] !== "Retire"){
        let commands = arr.shift().split(" ");
        
        if(commands[0] === "Fire"){
            let index = Number(commands[1]);
            if(index >= 0 && index <= warship.length - 1){
                warship[index] -= Number(commands[2]);
                if(warship[index] <= 0){
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        }else if(commands[0] === "Defend"){
            let index1 = Number(commands[1]);
            let index2 = Number(commands[2]);
            if(index1 >= 0 && index1 <= pirateShip.length -1 && index2 >=0 && index2 <= pirateShip.length - 1){
                for(let i = index1; i <= index2; i++){
                    pirateShip[i] -= Number(commands[3]);
     
                    if(pirateShip[i] <= 0){
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        }else if(commands[0] === "Repair"){
            let i = Number(commands[1])
            if(i >= 0 && i <= pirateShip.length - 1){
                pirateShip[i] += Number(commands[2]);
                if(pirateShip[i] > maximumHealth){
                    pirateShip[i] = maximumHealth;
                }
            }
        }else if(commands[0] === "Status"){
            let counter = 0;
            for(let i = 0; i < pirateShip.length; i++){
                if(pirateShip[i] < maximumHealth * 0.2){
                    counter++;
                }
            }
        console.log(`${counter} sections need repair.`);
        }
     
    }
    let sum1 = pirateShip.reduce((a, b) => a + b,0);
    let sum2 = warship.reduce((a, b) => a + b, 0);
     
    console.log(`Pirate ship status: ${sum1}`);
    console.log(`Warship status: ${sum2}`)
    }
    manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])