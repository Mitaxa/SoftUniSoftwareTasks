function excursion(input){
    const accomodationPrice = 20;
    const transportCardPrice = 1.6;
    const museumTicketPrice = 6;
    let numPeople = Number(input[0]);
    let numNights = Number(input[1]);
    let transportCardsNum = Number(input[2]);
    let museumTicketsNum = Number(input[3]);
    let accomodationExpencessForOne = numNights * accomodationPrice;
    let totalSumForOne = accomodationExpencessForOne + (transportCardsNum * transportCardPrice) + (museumTicketsNum * museumTicketPrice);
    let totalCost = (totalSumForOne * numPeople) + 1/4 * (totalSumForOne * numPeople);
    console.log(totalCost.toFixed(2));
}   
excursion(["20", "14", "30", "6"])