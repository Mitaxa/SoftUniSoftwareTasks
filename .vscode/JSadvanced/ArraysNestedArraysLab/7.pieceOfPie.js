function pieceOfPie(pies, startFlavor, endFlavor){
    const start = pies.indexOf(startFlavor);
    const end = pies.indexOf(endFlavor) + 1;

    const result = pies.slice(start, end);

    return result;
}
pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')