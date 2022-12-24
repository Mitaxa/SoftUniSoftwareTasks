function forOfArray() {
    let numbers = [ 1, 2, 3, 4, 5 ];
    let output = '';
for (let number of numbers)  
    output += `${number} `;
  console.log(output);
}
forOfArray()