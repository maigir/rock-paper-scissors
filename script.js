'use strict';

let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3 + 1);
  if (computer === 1) return 'rock';
  else if (computer === 2) return 'paper';
  else return 'scissors';
}

function getHumanChoice() {
  let human = prompt('Enter rock, paper or scissors: ').toLowerCase();
  return human;
}

function playGame() {
  let round = 1;

  while (round <= 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(`You - ${humanSelection}, computer - ${computerSelection}`);
    
    
    if (humanSelection === computerSelection) {
      humanScore += 0;
      computerScore += 0;
    }
    else if (humanSelection === 'rock' && computerSelection === 'scissors' ||
      humanSelection === 'paper' && computerSelection === 'rock' ||
      humanSelection === 'scissors' && computerSelection === 'paper') 
    {
      humanScore += 1;
    }
    else {
      computerScore += 1;
    }
    round++;
  }

  if (humanScore > computerScore) {
    return (`You: ${humanScore}, computer: ${computerScore}. You won!`);
  } else if (humanScore < computerScore) {
    return (`You: ${humanScore}, computer: ${computerScore}. Computer won!`);
  } else if (humanScore === computerScore) {
    return (`You: ${humanScore}, computer: ${computerScore}. It's a tie!`);
  }
 
}

console.log(playGame());
