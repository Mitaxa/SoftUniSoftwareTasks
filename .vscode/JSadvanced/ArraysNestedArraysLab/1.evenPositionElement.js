function evenPositionElement(arrOfStr){
    let prtArr = '';
    for (let i = 0; i < arrOfStr.length; i++){
        if (i % 2 === 0) {
            prtArr += arrOfStr[i] + " ";
        }
    }
    console.log(prtArr);
}
evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement(['5', '10'])