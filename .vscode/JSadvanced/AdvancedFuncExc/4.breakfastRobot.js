function solution(){
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavours: 0
    }
    let receipeEnum = {
        apple: {carbohydrate: 1, flavours: 2},
        burger: {carbohydrate: 5, fat: 7, flavours: 3},
        lemonade: {carbohydrate: 10, flavours: 20},
        eggs: {protein: 10, fat: 1, flavours: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavours: 10}
    }
    return function inputHandler(input){
        let actionHandler = cmdOption();
        let [cmd, microelement, quantity] = input.split(" ");
        return actionHandler[cmd](microelement, quantity)
    }
    function cmdOption(microelement, quantity){
        return {
            restock: () => {
                store[microelement] = store[microelement] + Number(quantity);
                return "Success"
            },
            prepare: ( ) => {
                
            },
            report: () => console.log("report")
        }
    }
}

let manager = solution ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in
//stock
