'use strict';

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const results = document.querySelector('.results');

const yourScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');

let humanScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();

function getComputerChoice() {
  const random = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * random.length);
  return random[randomChoice];
}

function createDomElements() {
  const par = document.createElement('p');
}
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    const par = document.createElement('p');
    par.classList.add('par');
    par.textContent = `${humanChoice} beats ${computerChoice}`;
    results.appendChild(par);
    return humanScore++;
  } else if (humanChoice === computerChoice) {
    return;
  } else {
    return computerScore++;
  }
}

rockBtn.addEventListener('click', () => {
  playRound('rock', computerSelection);
});
paperBtn.addEventListener('click', () => {
  playRound('paper', computerSelection);
});
scissorsBtn.addEventListener('click', () => {
  playRound('scissors', computerSelection);
});

// function getHumanChoice() {
//   const human = prompt('Enter rock, paper or scissors: ').toLowerCase();
//   return human;
// }

function playGame() {
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
