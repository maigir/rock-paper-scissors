'use strict';

function getComputerChoice() {
  const random = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * random.length);
  return random[randomChoice];
}

function getHumanChoice() {
  const human = prompt('Enter rock, paper or scissors: ').toLowerCase();
  return human;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return humanScore++;
    } else if (humanChoice === computerChoice) {
      return;
    } else {
      return computerScore++;
    }
  }

  for (let i = 1; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log(
      `You win! Your score: ${humanScore}, computer score: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Computer wins! Your score: ${humanScore}, computer score: ${computerScore}`
    );
  } else if (humanScore === computerScore) {
    console.log(
      `It\'s a tie! Your score: ${humanScore}, computer score: ${computerScore}`
    );
  }
}

playGame();
