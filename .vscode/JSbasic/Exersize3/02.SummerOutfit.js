function summerOutfit(input){
    const degrees = Number(input[0]);
    const dayPeriod = input[1];
    let outfit = "";
    let shoes = "";
 
    if(degrees >= 10 && degrees <= 18){
        switch(dayPeriod){
            case "Morning": outfit = "Sweatshirt"; shoes = "Sneakers"; break;
            case "Afternoon": outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
        }
    }else if(degrees > 18 && degrees <= 24){
        switch(dayPeriod){
            case "Morning": outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Afternoon": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
        }
    }else if(degrees >= 25){
        switch(dayPeriod){
            case "Morning": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Afternoon": outfit = "Swim Suit"; shoes = "Barefoot"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
        }
    }
 
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
 
}
summerOutfit()