/* ------------------------------ TASK 2 -----------------------------------
Aprašykite type'us, kad kintamieji, kuriems jie priskirti būtų teisingai aprašyti ir visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.-------------------------------------------------------------------------- */
type One = {
  vardas: string,
  pavarde: string,
  amzius: number
}
let one: One = {
  vardas: '',
  pavarde: '',
  amzius: 0
};
type Two = {
  vardas: string,
  pavarde: string,
  amzius: number,
    ugis?: number,
    svoris?: number,
}
let two: Two = {
  vardas: '',
  pavarde: '',
  amzius: 0
};
two = {
  vardas: '',
  pavarde: '',
  amzius: 0,
  ugis: 0,
  svoris: 0
};
type Three = {
  vardas: string,
  pavarde: string,
  lytis: string
}
let three: Three = {
  vardas: '',
  pavarde: '',
  lytis: 'vyras'
};
three = {
  vardas: '',
  pavarde: '',
  lytis: 'moteris'
};
three = {
  vardas: '',
  pavarde: '',
  lytis: 'sraigtasparnis' // error
};

console.log("one:", one);
console.log("two:", two);
console.log("three:", three);