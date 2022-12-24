function aMinerTask(array) {
 
    let resources = {};
 
    for (let i = 0; i < array.length; i+=2){
        let resource = array[i];
 
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0
        }
        resources[resource] +=Number(array[i+1])
    }
 
    for (let resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`)
    }
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17'])