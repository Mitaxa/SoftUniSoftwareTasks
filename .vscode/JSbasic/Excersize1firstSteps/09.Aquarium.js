function aquarium(input) {
    let length = Number(input[0]);
    let heigth = Number(input[1]);
    let wide = Number(input[2]);
    let percentage = Number(input[3]);
    let aquariumVolume = (length / 10) * (heigth / 10) * (wide / 10);
    let litresWater = aquariumVolume - (aquariumVolume * percentage /100);
    console.log(litresWater);
}
aquarium(["105", "77", "89", "18.5"])