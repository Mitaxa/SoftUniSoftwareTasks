function vacation(number, type, day) {

    let totalPrice = 0;

    if (type === 'Students') {

        switch(day) {
            case 'Friday': totalPrice = number * 8.45; break;
            case 'Saturday': totalPrice = number * 9.80; break;
            case 'Sunday': totalPrice = number * 10.46; break;
        }
        if (number >= 30) {
            totalPrice *= 0.85;
        }

    } 
    else if (type === 'Business') {
        if (number >= 100) {
        switch(day) {
            case 'Friday': totalPrice = (number - 10) * 10.90; break;
            case 'Saturday': totalPrice = (number - 10) * 15.60; break;
            case 'Sunday': totalPrice = (number - 10) * 16; break;
                    }
            } else {
                switch(day) {
                    case 'Friday': totalPrice = number * 10.90; break;
                    case 'Saturday': totalPrice = number * 15.60; break;
                    case 'Sunday': totalPrice = number * 16; break;
        }
      }
      
    } else if (type === 'Regular') {
        switch(day) {
            case 'Friday': totalPrice = number * 15; break;
            case 'Saturday': totalPrice = number * 20; break;
            case 'Sunday': totalPrice = number * 22.50; break;
        }
            if (number >= 10 && number <= 20) {
                totalPrice *= 0.95;
            }
        }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,"Students","Sunday")