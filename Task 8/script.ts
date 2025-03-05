/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("meter") as HTMLInputElement;
    const output = document.getElementById("output") as HTMLDivElement;
  
    input.addEventListener("input", () => {
      output.replaceChildren();
  
      const meters = parseFloat(input.value);
      if (isNaN(meters)) return;
  
      // Konvertavimo formulės
      const centimeters = meters * 100;
      const inches = meters * 39.37;
      const feet = meters * 3.281;
      const miles = meters / 1609;
      const yards = meters * 1.094;
  
      const results: string[] = [
        `Centimetrus (cm): ${centimeters.toFixed(2)}`,
        `Colius (in): ${inches.toFixed(2)}`,
        `Pėdos (ft): ${feet.toFixed(2)}`,
        `Mylias (mi): ${miles.toFixed(2)}`,
        `Jardai (yd): ${yards.toFixed(2)}`
      ];
  
      results.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        output.appendChild(p);
      });
    });
  });
  