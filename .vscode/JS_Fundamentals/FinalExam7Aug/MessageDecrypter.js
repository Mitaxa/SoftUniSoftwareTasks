function messageDecrypter(arr) {
    let numInput = arr.shift();
    let validMessages = [];
    let pattern = /(%)([A-Z][a-z]{2,})($|%): \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|/gm;
    for (let i = 0; i < arr.lenght; i++) {
        let currentInput = arr.shift();
        if (pattern.exec(currentInput) !== null) {
            validMessages.push(currentInput);
            console.log(validMessages);
        } else {
            console.log("Valid message not found!");
        }
    }
    
}
messageDecrypter(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"])