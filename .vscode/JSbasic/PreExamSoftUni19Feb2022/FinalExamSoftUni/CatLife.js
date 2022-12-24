function catLife(input) {
    let catPoroda = input[0];
    let pol = input[1];
    let catMonths = 0;
    let humanMonths = 0;
    let totalCatMonths = 0;
    let catPorod = true;
    switch(catPoroda) {
        case "British Shorthair":
            if (pol === 'm') {
                catMonths = 13 * 12 / 6;
            } else catMonths = 14 * 12 / 6;
            catMonths = Math.floor(catMonths);
        break;

        case "Siamese":
            if (pol === 'm') {
                catMonths = 15 * 12 / 6;
            } else catMonths = 16 * 12 / 6;
            catMonths = Math.floor(catMonths);
        break;

        case "Persian":
            if (pol ==='m') {
                if (pol === 'm') {
                    catMonths = 14 * 12 / 6;
            } else catMonths = 15 * 12 / 6;
              catMonths = Math.floor(catMonths);
        break;

        case "Ragdoll":
            if (pol === 'm') {
                catMonths = 16 * 12 / 6;
            } else catMonths = 17 * 12 / 6;  
            catMonths = Math.floor(catMonths);  
        break; 

        case "American Shorthair":
            if (pol === 'm') {
                catMonths = 12 * 12 / 6;
            } else catMonths = 13 * 12 / 6;
                catMonths = Math.floor(catMonths);
        break; 
        
        case "Siberian":
            if (pol === 'm') {
                catMonths = 11 * 12 / 6;
            } else catMonths = 12 * 12 / 6;
                catMonths = Math.floor(catMonths);
        break;             
    }
    if (catPorod) {
        console.log(`${catMonths} cat months`)
    } else console.log(`${catPoroda} is invalid cat!`)
}
catLife(["Tom",
"m"])