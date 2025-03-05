/* ------------------------------ TASK 1 -----------------------------------
Priskirkite tipus VISIEMS pateiktiems kintamiesiems, kad kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.
-------------------------------------------------------------------------- */

let one1: number = 654;
let two1: boolean = true;
let three1: boolean = true;
let four: boolean | string = true;
four = '123';
let five: (number | string | boolean)[] = [1,2,3];
five = [21,22,23,24];
five = ['a', 'b']; 
five = [true, true, false]; 
let six: (number | string | boolean)[] = [1,2,3,4];
six = ['a','b','c','d'];
six = ['a',2,3,'d'];
six = [true, false]; 
let seven: (number | string | boolean)[] = [1,2,3,4];
seven = ['a','b','c','d'];
seven = ['a',2,3,'d'];
seven = [true, false]; 
let eight: (string | number)[] = ['hi', 1];
eight = ['bye', 2];
eight = [1,2];
eight = ['a','b','c'];