/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */
type Vaskinimas = "rock" | "paper" | "scissors";

const zaidimas = (player1: Vaskinimas, player2: Vaskinimas): string => {
  if (player1 === player2) {
    return "Draw!";
  } else if (player1 === "rock" && player2 === "scissors") {
    return 'Player 1 laimejo';
  } else if (player1 === "paper" && player2 === "rock") {
    return 'Player 1 laimejo';
  } else if (player1 === "scissors" && player2 === "paper") {
    return 'Player 1 laimejo';
  } else {
    return 'Player 2 laimejo';
  }
};

// console.log(zaidimas("scissors", "paper")); // "Player 1 laimejo"
// console.log(zaidimas("rock", "scissors"));    // "Player 1 laimejo"
// console.log(zaidimas("paper", "paper"));      // "Draw!"
// console.log(zaidimas("paper", "scissors"));   // "Player 2 laimejo"