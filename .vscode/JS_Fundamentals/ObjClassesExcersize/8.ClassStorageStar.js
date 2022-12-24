function classStorage() {
 
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }
 
        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity;
        }
 
        getProducts() {
            return this.storage.map(product => JSON.stringify(product)).join('\n');
        }
    }
 
    let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
    let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
    let storage = new Storage(30);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    console.log(storage.totalCost);
 
}


let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

let output = storage.getProducts();
// expect(output).to.equal('{"name":"Cucamber","price":1.5,"quantity":15}\n{"name":"Tomato","price":0.9,"quantity":25}\n{"name":"Bread","price":1.1,"quantity":8}');
let actualResult = '{"name":"Cucamber","price":1.5,"quantity":15}\n{"name":"Tomato","price":0.9,"quantity":25}\n{"name":"Bread","price":1.1,"quantity":8}';

console.log(output === actualResult);

// expect(storage.capacity).to.equal(2);
console.log(storage.capacity); // expected result 2
// expect(storage.totalCost).to.equal(53.8);
console.log(storage.totalCost); // expected result 53.8