function roadRadar(currentSpeed, location) {
    let allowedSpeed = {
        'city': 50,
        'interstate': 90,
        'motorway': 130,
        'residential':20
     }
     if ( currentSpeed > allowedSpeed[location]){
        let aboveSpeed = currentSpeed - allowedSpeed[location];
        punishment(aboveSpeed);
     }else{
        console.log(`Driving ${currentSpeed} km/h in a ${allowedSpeed[location]} zone`);
     }
        function punishment(aboveSpeed){
            if (aboveSpeed <= 20){
                console.log(`The speed is ${aboveSpeed} km/h faster than the allowed speed of ${allowedSpeed[location]} - speeding`);
            }else if (aboveSpeed <=40){
                console.log(`The speed is ${aboveSpeed} km/h faster than the allowed speed of ${allowedSpeed[location]} - excessive speeding`);
            }else{
                console.log(`The speed is ${aboveSpeed} km/h faster than the allowed speed of ${allowedSpeed[location]} - reckless driving`);
            }
        }
    
    }
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')