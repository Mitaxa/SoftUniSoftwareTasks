function radiasToDegrees(input) {
    let rads = Number(input[0]);
    let degrees = rads * 180 / Math.PI;
    console.log(degrees);
}
radiasToDegrees(["3.1416"])