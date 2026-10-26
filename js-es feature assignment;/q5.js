"use strict";

console.log(score);
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}

// Arrow function comparison
const startArrow = () => {
    console.log("Arrow game started");
};

startArrow();