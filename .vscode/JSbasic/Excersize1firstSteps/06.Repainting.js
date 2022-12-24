function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let litresRazred = Number(input[2]);
    let workHours = Number(input[3]);
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + 1/10 * paint) * 14.50;
    let razredPrice = litresRazred * 5;
    let sumMaterials = nylonPrice + paintPrice + razredPrice + 0.40;
    let sumMaistory = (sumMaterials * 30 / 100) * workHours;
    let totalSum = sumMaterials + sumMaistory;
    console.log(totalSum);
}
repainting(["5", "10", "10", "1"])