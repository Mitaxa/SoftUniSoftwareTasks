function solve(input) {
 
    let token = input.toLowerCase().split(" ")
    let map = new Map();
    let counter = 1;
 
    for(let el of token){
        if(map.has(el)){
            let oldCounter = map.get(el);
            map.set(el,oldCounter + 1);
        }else{
            map.set(el,counter);
        }
    }
    let result = [];
    for(let [k,v] of map) {
        if(v % 2 !== 0) {
            result.push(k);
        }
    }
 
    console.log(result.join(" "));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')