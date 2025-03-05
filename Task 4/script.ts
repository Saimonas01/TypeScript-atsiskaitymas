/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

type textToNumber = (text: string) => number;

const tekstasSkaicius: textToNumber = (text) => {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    result += (i % 2 === 0) ? '1' : '0';
  }

  return Number(result);
};

console.log(tekstasSkaicius("labas"));
console.log(tekstasSkaicius("kebabas"));
console.log(tekstasSkaicius("a"))