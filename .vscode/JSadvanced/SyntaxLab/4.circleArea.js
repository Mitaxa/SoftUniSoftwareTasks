function circleArea(input) {
    let result;
    let inputType = typeof(input);
    if (inputType === 'number') {
        let circleArea = Math.PI * input * input;
        console.log(circleArea.toFixed(2));
    } else console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}
circleArea(5)
circleArea('name')