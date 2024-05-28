'use strict';

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1){
    console.log('Rock');
  } else if (computerChoice === 2) {
    console.log('Paper');
  } else {
    console.log('Scissors');
  } 
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?: ");
  if (humanChoice === ' ' || humanChoice === '') {
    console.log('Not a valid input! Please enter rock, paper or scissors');
  } else {
    console.log(humanChoice);
  }
}
