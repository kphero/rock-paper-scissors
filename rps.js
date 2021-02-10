const swordButton = document.querySelector("#sword-btn");
const lanceButton = document.querySelector("#lance-btn");
const axeButton = document.querySelector("#axe-btn");
const playerp = document.querySelector("#playerp");
const computerp = document.querySelector("#computerp");
const announcement = document.querySelector("#announcement");
let computerSelection = "";
let pc = 0;
let cc = 0;

swordButton.addEventListener('click', swordPlay);
lanceButton.addEventListener('click', lancePlay);
axeButton.addEventListener('click', axePlay);

function computerPlay() {
    computerRandom = Math.floor((Math.random() * 3) + 1);
    if (computerRandom === 1) {
        computerSelection = "sword"
    } else if (computerRandom === 2) {
        computerSelection = "lance"
    } else {
        computerSelection = "axe"
    }
}

function swordPlay() {
    computerPlay()
    if (computerSelection === 'sword') {
        youTie()
    } else if (computerSelection === 'lance') {
        youLose()
    } else {
        youWin()
    }
}

function lancePlay() {
    computerPlay()
    if (computerSelection === 'sword') {
        youWin()
    } else if (computerSelection === 'lance') {
        youTie()
    } else {
        youLose()
    }
}

function axePlay() {
    computerPlay()
    if (computerSelection === 'sword') {
        youLose()
    } else if (computerSelection === 'lance') {
        youWin()
    } else {
        youTie()
    }
}

function youWin() {
    pc++
    playerp.textContent = pc;
    announcement.textContent = 'You Win!'
}

function youLose() {
    cc++
    computerp.textContent = cc;
    announcement.textContent = 'You Lose!'
}

function youTie() {
    announcement.textContent = 'Tied!'
}