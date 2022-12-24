function computerRoom(input) {
    let month = input[0];
    let spentHours = Number(input[1]);
    let groupNum = Number(input[2]);
    let time = input[3];
    let pricePerHour = 0;
    let totalPrice = 0;
    if (month == "march" || month == "april" || month == "may") {
            if (time == "day") {
                pricePerHour = 10.50;
                if (groupNum >= 4) {
                    pricePerHour = pricePerHour * 0.9;
                }
                if (time >= 5) {
                    pricePerHour = pricePerHour * 0.5;
                }          
            totalPrice = pricePerHour * groupNum * spentHours;
            } else {
                pricePerHour = 8.40;
            }
            console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
            console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
        }
        if (month == "june" || month == "july" || month == "august") {
                if (time == "day") {
                    pricePerHour = 12.60;
                    if (groupNum >= 4) {
                        pricePerHour = pricePerHour * 0.9;
                    }
                    if (time >= 5) {
                        pricePerHour = pricePerHour * 0.5;
                    }               
                totalPrice = pricePerHour * groupNum * spentHours;
                } else {
                    pricePerHour = 10.20;
                }
            console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
            console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
            }           
    }
computerRoom(["march", "3", "3", "day"])
computerRoom(["july",
"5",
"5",
"night"])