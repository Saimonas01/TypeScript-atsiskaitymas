"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("meter");
    const output = document.getElementById("output");
    input.addEventListener("input", () => {
        output.replaceChildren();
        const meters = parseFloat(input.value);
        if (isNaN(meters))
            return;
        const centimeters = meters * 100;
        const inches = meters * 39.37;
        const feet = meters * 3.281;
        const miles = meters / 1609;
        const yards = meters * 1.094;
        const results = [
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
