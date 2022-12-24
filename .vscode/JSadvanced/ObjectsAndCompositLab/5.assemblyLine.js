function assemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            }
        },
        hasAudio(car) {
            car.currentTrack = null;
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing `${currentTrack.name}` by ${currentTrack.artist}`);
                }
            }
        }

        
    }
}