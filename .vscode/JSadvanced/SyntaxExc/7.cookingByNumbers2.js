function cookingByNumbers(...commands){
    let initial = Number(commands.shift());
    
        // решение чрез Object, а не case
        const parser = {
            chop: x => x /=2,
            dice: x => Math.sqrt(num),
            spice: x => x + 1,
            bake: x => x* 3,
            fillet: x => x * 0.80 
        };

        for (let command of commands) {
            initial = parser[command](initial);
            console.log(initial);
        }
    }
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')