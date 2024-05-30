'use strict';

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3 + 1);
  if (computer === 1) return('rock');
  else if (computer === 2) return('paper');
  else return('scissors');
}

function getHumanChoice() {
  let human = prompt('Enter rock, paper or scissors: ').toLowerCase();
  return human;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return (`tie!`);
  }
  else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    return ('You win!');
    humanScore++;
  }
  else {
    return ('Computer wins!');
  }
}
}