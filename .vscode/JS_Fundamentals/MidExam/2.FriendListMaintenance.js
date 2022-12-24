function friendListMaintenance(arr) {
    let listNames = arr.shift().split(', ');
    let commandsList = [];
    blacklistedCount = 0;
    let blacklistedNames = [];
    lostNamesNum = 0;
    for (let i = 0; i < arr.length; i++) {
        let command = arr.shift().split(' ');
        let commandName = command[0];
        let name = command[1];
        let lost = [];
        
        
        if (command !== "Report") {
            switch (command) {
                case "Blacklist":
                    if (listNames.includes(name)) {
                    console.log(`${name} was blacklisted.`);
                    blacklistedNames.unshift(name);
                    name = "Blacklisted";
                    blacklistedCount += 1;
                    }
                    else {
                        console.log(`${name} was not found.`);
                    }
        
                    break;
                    case "Error":
                    
                        break;
                    case "Change":
                    
                        break;
            
                
            }
        
    }
    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostNamesNum}`);
    console.log(listNames);
    }


}
friendListMaintenance(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"])
friendListMaintenance(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])