function dayOfWeek(input) {
    const day = Number([0]);
   
    switch(day)  {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednsday"); break;
        case 4: console.log("Thursdasy"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error"); break;
    }
   }

   dayOfWeek(["5"])