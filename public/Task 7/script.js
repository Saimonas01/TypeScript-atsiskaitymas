"use strict";
const ENDPOINT = './NBA.json';
fetch(ENDPOINT);
document.addEventListener("DOMContentLoaded", () => {
    fetch("./NBA.json")
        .then((response) => {
        console.log("Gautas atsakymas:", response);
        return response.json();
    })
        .then((data) => {
        console.log("Duomenys is JSON:", data);
        const output = document.getElementById("output");
        if (!output)
            return;
        data.teams.forEach((team) => {
            console.log("Apdorojama komanda:", team.name);
            const teamCard = document.createElement("div");
            teamCard.classList.add("team-card");
            const teamName = document.createElement("h2");
            teamName.textContent = team.name;
            teamCard.appendChild(teamName);
            const playersContainer = document.createElement("div");
            playersContainer.classList.add("players-container");
            team.players.forEach((player) => {
                console.log("Prideti zaideja", player.firstName, player.lastName);
                const playerCard = document.createElement("div");
                playerCard.classList.add("player-card");
                const playerName = document.createElement("p");
                playerName.textContent = `${player.firstName} ${player.lastName}`;
                playerCard.appendChild(playerName);
                const link = document.createElement("a");
                link.href = player.googleSearch;
                link.target = "_blank";
                link.textContent = "Daugiau informacijos";
                playerCard.appendChild(link);
                playersContainer.appendChild(playerCard);
            });
            teamCard.appendChild(playersContainer);
            output.appendChild(teamCard);
        });
    })
        .catch((error) => console.error("Klaida:", error));
});
