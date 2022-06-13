let computerPlay = function () {
  let choice = Math.floor(Math.random() * 12) + 1;
  if (choice <= 4) {
    return "Rock";
  } else if (choice < 8 && choice > 4) {
    return "Paper";
  } else {
    return "Scissors";
  }
};
let computerSelection = computerPlay().toUpperCase();
let playerSelection = prompt(
  "What is your Rock,Paper,Scissors Selection?"
).toUpperCase();

let playRound = function (playerSelection, computerSelection) {
  if (computerSelection === "ROCK" && playerSelection === "PAPER") {
    console.log(`You Win! ${playerSelection} beats            
      ${computerSelection}}`);
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    console.log(`You Lose ${computerSelection} beats            
      ${playerSelection}}`);
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    console.log(`You Lose! ${computerSelection} beats            
      ${playerSelection}}`);
  } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
    console.log(`You Win! ${playerSelection} beats            
      ${computerSelection}}`);
  } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
    console.log(`You Win! ${playerSelection} beats            
      ${computerSelection}}`);
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    console.log(`You Lose! ${computerSelection} beats            
      ${playerSelection}}`);
  } else {
    console.log(`You tie! ${playerSelection} equals ${computerSelection}`);
  }
};
