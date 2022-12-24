function areaOfFigures(input) {
    let type = input[0];
    let num = Number(input[1]);
    switch (type) {
        case "square":
            area = num * num;
            console.log(area.toFixed(3));
            break;
        case "rectangle":
            let secNum = Number(input[2]);
            area = num * secNum;
            console.log(area.toFixed(3));
            break;
        case "circle":
            area = Math.PI * (num * num / 2);
            console.log(area.toFixed(3));
            break;
        case "triangle":
            area = num * secNum / 2;
            console.log(area.toFixed(3));
            break;
    }
}
areaOfFigures["square", "5"]