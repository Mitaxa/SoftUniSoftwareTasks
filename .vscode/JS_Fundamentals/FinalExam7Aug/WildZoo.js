function wildZoo(arr) {

    
    let comArr = arr.shift();
    let command = comArr.split(': ')
    
    console.log(command[0]);

    while (command !== "EndDay") {

        switch (comArr[0]) {
            case "Add":

            break;
            case "Feed":

            break;
        }
    }
}
wildZoo(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])