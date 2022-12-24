function inventory(input) {
 
    let items = input.shift().split(', ');
    let count = input.length;
 
    for (let i = 0; i < count; i++) {
        let command = input.shift().split(' - ');
        let action = command.shift();
 
        switch (action) {
            case 'Collect':
                {
                    let collectItem = command.shift();
                    for (let i = 0; i < items.length; i++) {
                        if (collectItem === items[i]) {
                            break;
                        } else {
                            items.push(collectItem);
                            break;
                        }
                    }
                    break;
                }
            case 'Drop':
                {
                    let itemDrop = command.shift();
                    for (let i = 0; i < items.length; i++) {
                        if (itemDrop === items[i]) {
                            items.splice(i, 1);
                            break;
                        }
                    }
                    break;
                }
            case 'Combine Items':
                {
                    let splitted = command.shift().split(':');
                    let oldItem = splitted.shift();
                    let newItem = splitted.shift();
                    for (let i = 0; i < items.length; i++) {
                        if (oldItem === items[i]) {
                            items.splice(i + 1, 0, newItem);
                            break;
                        }
                    }
                    break;
                }
            case 'Renew':
                {
                    let renewItem = command.shift();
                    for (let i = 0; i < items.length; i++) {
 
                        if (renewItem === items[i]) {
                            items.splice(i, 1);
                            items.push(renewItem);
                            break;
                        }
                    }
                    break;
                }
        }
 
        if (action === 'Craft!') {
            console.log(items.join(', '));
            break;
        }
 
    }
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])