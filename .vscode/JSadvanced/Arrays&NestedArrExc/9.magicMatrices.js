function magicMatrices(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRow1 = matrix[i].reduce((acc, el) => acc + el);
        let sumRow2 = matrix[i + 1].reduce((acc, el) => acc + el);
        let sumCol1 = 0;
        let sumCol2 = 0;
        for (let col = 0; col < matrix.length; col++) {
            sumCol1 += matrix[i][col];
            sumCol2 += matrix[i + 1][col];
        }
        if (sumRow1 !== sumRow2 || sumCol1 !== sumCol2){
            return false
        }
    }
    return true
}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]])
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])