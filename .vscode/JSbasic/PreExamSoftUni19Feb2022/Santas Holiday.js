function santasHoliday(input) {
    const daysStay = Number(input[0]);
    const roomType = input[1];
    const rating = input[2];
    const roomForOnePersonPrice = 18;
    const aparatmnePrice = 25;
    const presidentApartmentPrice = 35;
    let totalPrice = 0;
   
    if (roomType === "room for one person") {
        if (daysStay < 10) {
            totalPrice = (daysStay - 1) * roomForOnePersonPrice;
        }
      
    } else if (roomType === "apartment") {
      totalPrice = (daysStay - 1) * aparatmnePrice;
      if (daysStay < 10) {
        totalPrice *= 0.7;
      } else if (daysStay >= 10 && daysStay <= 15) {
        totalPrice *= 0.65;
      } else {
        totalPrice *= 0.5;
      }
    } else if (roomType === "president apartment") {
      totalPrice = (daysStay - 1) * presidentApartmentPrice;
      if (daysStay < 10) {
        totalPrice *= 0.9;
      } else if (daysStay >= 10 && daysStay <= 15) {
        totalPrice *= 0.85;
      } else {
        totalPrice *= 0.8;
      }
    }
    if (rating === "positive") {
      totalPrice = (totalPrice * 1.25).toFixed(2);
    } else {
      totalPrice = (totalPrice * 0.9).toFixed(2);
    }
   
    console.log(totalPrice);
  }
  santasHoliday(["30", "president apartment", "negative"])