function nxnMatrix(n) {
    let matrix = [];
    for (let i = 1; i <= n; i++) {
        let row = [n];
        for (let j = 1; j < n; j++) {
            row.push(n); 
        }
        matrix.push(row.join(` `))
        
        
    }      
    console.log(matrix.join(`\n`)); 
}
nxnMatrix(3)