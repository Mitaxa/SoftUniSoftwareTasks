function cats(catsData) {
     class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

       meow(){
         console.log(`${this.name}, age ${this.age} says Meow`);
       }
     }

     let cats = [];

    for (let catData of catsData) {
        let token = catData.split(" ");
        let catName = token [0];
        let catAge = token[1];
        let myCat = new Cat(catName, catAge);
        cats.push(myCat);
      }
      for (let myCat of cats) {
        myCat.meow()
      }
    }  
cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])