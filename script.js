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

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`You entered ${humanChoice}, computer entered ${computerChoice}. It's a tie!`);

  }
  else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    console.log(`You entered ${humanChoice}, computer entered ${computerChoice}. You win!`);
    humanScore++;
  }
  else {
    console.log(`You entered ${humanChoice}, computer entered ${computerChoice}. It's a tie!`);
    computerScore++;
  }
}

playRound(humanSelection, computerSelection);

// function getHumanChoice() {
//   let humanChoice = prompt("rock, paper or scissors?: ");
//   if (humanChoice === ' ' || humanChoice === '') {
//     console.log('Not a valid input! Please enter rock, paper or scissors');
//   } else {
//    return humanChoice;
//   }
// }

// function playRound(humanChoice, computerChoice) {
//   humanChoice.toLowerCase();
//   if (humanChoice === computerChoice){
//     return 'tie';
//   }

//   else if 
//   (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
//     return 'player';
//   }

//   else {
//     return 'computer';
//   }    
// }

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
//   playRound(humanSelection, computerSelection);

//   for (let i = 1; i <= 5; i++) {

//   }
//   if (humanScore > computerScore) {
//     console.log('You win!');
//   } else if (humanScore === computerScore) {
//     console.log('It\'s a tie!');
//   } else {
//     console.log('Computer wins!');
//   }
// }

// playGame();