"use strict";
const tekstasSkaicius = (text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += (i % 2 === 0) ? '1' : '0';
    }
    return Number(result);
};
console.log(tekstasSkaicius("labas"));
console.log(tekstasSkaicius("kebabas"));
console.log(tekstasSkaicius("a"));
