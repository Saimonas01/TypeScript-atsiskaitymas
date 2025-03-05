"use strict";
const zaidimas = (player1, player2) => {
    if (player1 === player2) {
        return "Draw!";
    }
    else if (player1 === "rock" && player2 === "scissors") {
        return 'Player 1 laimejo';
    }
    else if (player1 === "paper" && player2 === "rock") {
        return 'Player 1 laimejo';
    }
    else if (player1 === "scissors" && player2 === "paper") {
        return 'Player 1 laimejo';
    }
    else {
        return 'Player 2 laimejo';
    }
};
console.log(zaidimas("scissors", "paper"));
console.log(zaidimas("rock", "scissors"));
console.log(zaidimas("paper", "paper"));
console.log(zaidimas("paper", "scissors"));
