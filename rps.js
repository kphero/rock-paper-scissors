function computerPlay() {
    computerSelection = Math.floor((Math.random() * 3) + 1);
    return computerSelection;
}

function userPlay() {
    userSelection = window.prompt("Rock, Paper or Scissors?")
    return userSelection;
}

function game() {
    userPlay();
    computerPlay();
    if (userSelection == "Rock" && computerSelection == 1) {
        window.alert("You tied, both chose Rock")
    } else if (userSelection == "Rock" && computerSelection == 2) {
        window.alert("You lost, Rock loses to Paper")
    } else if (userSelection == "Rock" && computerSelection == 3) {
        window.alert("You won! Rock beats Scissors")
    } else if (userSelection == "Paper" && computerSelection == 1) {
        window.alert("You won! Paper beats Rock")
    } else if (userSelection == "Paper" && computerSelection == 2) {
        window.alert("You tied, both chose Paper")
    } else if (userSelection == "Paper" && computerSelection == 3) {
        window.alert("You lost, Paper loses to Scissors")
    } else if (userSelection == "Scissors" && computerSelection == 1) {
        window.alert("You lost, Scissors loses to Rock")
    } else if (userSelection == "Scissors" && computerSelection == 2) {
        window.alert("You won! Scissors beats Paper")
    } else if (userSelection == "Scissors" && computerSelection == 3) {
        window.alert("You tied, both chose Scissors")
    } else {
        window.alert("Try again")
    }
}