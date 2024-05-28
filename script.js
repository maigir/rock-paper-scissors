'use strict';

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1){
    return 'Rock';
  } else if (computerChoice === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  } 
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?: ");
  if (humanChoice === ' ' || humanChoice === '') {
    console.log('Not a valid input! Please enter rock, paper or scissors');
  } else {
   return humanChoice;
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  if (humanChoice === computerChoice){
    console.log('It\'s a tie!');
  }

  else if 
  (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('You win!'); 
    humanScore++;
  }

  else {
    console.log(`Computer wins!`);
    computerScore++;
  }    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);