function numberPyramid(input){
    let targetNum = Number(input[0]);
    let curNum = 0;
    let isEqual =false;

    for (let rows = 1; rows <= targetNum; rows++){
        let printLine = '';
            for (let cols = 1; cols <= rows; cols++){
                curNum++;
                printLine += curNum + " ";
                if (curNum === targetNum) {
                    isEqual =true;
                    break;
                }
            }
            console.log(printLine);
            if (isEqual){
                break;
            }
    }
}
numberPyramid(['15'])