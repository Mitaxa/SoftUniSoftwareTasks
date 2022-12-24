function aMinerTask(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
// let resource = arr[i];
            if(!obj.hasOwnProperty(arr[i])) {
                obj[arr[i]] = 0;
            }

        } else {
            arr[i] = Number(arr[i]);
        if (obj.hasOwnProperty(arr[i - 1])) {
            obj[arr[i - 1]] += arr[i]

            }
        }
    }
    for (const key in obj) {
        console.log(key, '->', obj[key]);
    }
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17'])