const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    winner = "tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
  }
}
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
rockBtn.addEventListener("click", () => clickHandler("Rock"));
paperBtn.addEventListener("click", () => clickHandler("Paper"));
scissorsBtn.addEventListener("click", () => clickHandler("Scissors"));

function clickHandler(playerSelection) {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}
