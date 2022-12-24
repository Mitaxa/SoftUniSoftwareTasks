function garage(array) {
    let obj = {};
    for (let el of array) {
        el = el.split(" - ");
        let name = el.shift(0);
        if (!obj[name]) {
            obj[name] = el;
        } else {
            obj[name].push(...el);
        }
    }
    let key = Object.keys(obj);
    for (let el of key) {
        console.log(`Garage № ${el}`);
        let info = obj[el];
        for (let elem of info) {
            while(elem.includes(":")) {
                elem = elem.replace(":", " -")
            }
            console.log(`--- ${elem}`);
        }
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diese, mmanufacture: Fiat'])