"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
        this.render();
    }
    render() {
        if (!this.color.every(subColor => subColor >= 0 && subColor <= 255)) {
            console.error("Negalima funkcija");
        }
    }
    mix(other) {
        const totalVolume = this.volume + other.volume;
        const newColor = [
            Math.round((this.color[0] * this.volume + other.color[0] * other.volume) / totalVolume),
            Math.round((this.color[1] * this.volume + other.color[1] * other.volume) / totalVolume),
            Math.round((this.color[2] * this.volume + other.color[2] * other.volume) / totalVolume),
        ];
        return new Potion(newColor, totalVolume);
    }
}
const felix_felicis = new Potion([255, 255, 255], 7);
const polyjuice = new Potion([51, 102, 51], 12);
const newPotion = felix_felicis.mix(polyjuice);
console.log(newPotion.color);
console.log(newPotion.volume);
