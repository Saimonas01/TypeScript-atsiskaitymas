/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

class Potion {
  color: [number, number, number];
  volume: number;

  constructor(color: [number, number, number], volume: number) {
    this.color = color;
    this.volume = volume;
    this.render();
  }
  
  render(): void {
    if (!this.color.every(subColor => subColor >= 0 && subColor <= 255)) {
      console.error("Negalima funkcija");
    }
  }

  mix(other: Potion): Potion {
    const totalVolume = this.volume + other.volume;
    const newColor: [number, number, number] = [
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

