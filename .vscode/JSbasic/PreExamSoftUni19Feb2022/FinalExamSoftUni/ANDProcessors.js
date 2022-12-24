function andProcessors(input){
    let plannedNumOfProcessors = Number(input[0]);
    let emplNumber = Number(input[1]);
    let numWorkingDays = Number(input[2]);
    let profit = 0;
    let losses = 0;
    const pricePerProcessor = 110.10;
    let processorWorkHours = (8 * emplNumber * numWorkingDays / plannedNumOfProcessors);
    let totalWorkingHours = 8 * emplNumber * numWorkingDays;
    let plannedMoney = plannedNumOfProcessors * pricePerProcessor;
    console.log(processorWorkHours);
    let totalProducessedNumOfProcessors = Math.floor(totalWorkingHours / processorWorkHours);
    if (totalProducessedNumOfProcessors >= plannedNumOfProcessors) {
        profit = (totalProducessedNumOfProcessors - plannedNumOfProcessors) * pricePerProcessor;
        console.log(`Profit: -> ${profit} BGN`);
    } else 
    {losses =(plannedNumOfProcessors - totalProducessedNumOfProcessors) * pricePerProcessor;
        console.log(`Losses: -> ${losses} BGN`);
    }
}
andProcessors(["500",
"8",
"20"])