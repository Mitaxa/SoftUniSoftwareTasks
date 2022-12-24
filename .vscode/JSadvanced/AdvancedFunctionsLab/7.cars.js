function cars(commands) {
    let cars = {};

    let obj = {
        create: (name, inherits, value) =>
            (cars[name] = inherits ? Object.create(cars[value]) : {}),

        set: (name, key, value) => (cars[name][key] = value),
        print: name => {
            let entry = []
            for (let key in cars[name]) {
                entry.push(`${key}:${cars[name][key]}`)
            }
            console.log(entry.join(","))
        }
    }
    
    for (let command of commands) {
        let [cmd, name, key, value] = command.split(" ");
        obj[cmd](name, key, value)
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)