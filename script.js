'use strict';

// Complete logic of game inside this function
const game = () => {
  let humanScore = 0;
  let compScore = 0;
  let gameCount = 0;

  const playGame = () => {
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.scoreCount');
        gameCount++;
        movesLeft.innerText = `Moves left: ${5 - gameCount}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice);

        // Calling gameOver function after 5 moves
        if (gameCount === 5) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  //Function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector('.result-text');
    const playerScoreBoard = document.querySelector('.score-h');
    const computerScoreBoard = document.querySelector('.score-c');
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
      result.textContent = 'Tie';
    } else if (player === 'rock') {
      if (computer === 'paper') {
        result.textContent = 'Computer Won';
        compScore++;
        computerScoreBoard.textContent = `Computer: ${compScore}`;
      } else {
        result.textContent = 'You won';
        humanScore++;
        playerScoreBoard.textContent = `You: ${humanScore}`;
      }
    } else if (player === 'paper') {
      if (computer === 'scissors') {
        result.textContent = 'Computer Won';
        compScore++;
        computerScoreBoard.textContent = `Computer: ${compScore}`;
      } else {
        result.textContent = 'You won';
        humanScore++;
        playerScoreBoard.textContent = `You: ${humanScore}`;
      }
    } else if (player === 'scissors') {
      if (computer === 'paper') {
        result.textContent = 'Computer Won';
        compScore++;
        computerScoreBoard.textContent = `Computer: ${compScore}`;
      } else {
        result.textContent = 'You won';
        humanScore++;
        playerScoreBoard.textContent = `You: ${humanScore}`;
      }
    }
  };

  // Function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const result = document.querySelector('.result-text');
    const reloadBtn = document.querySelector('.newGame');

    movesLeft.style.display = 'none';

    if (humanScore > compScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'You Won The Game';
      result.style.color = '#308D46';
    } else if (humanScore < compScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'You Lost The Game';
      result.style.color = 'red';
    } else {
      result.style.fontSize = '2rem';
      result.innerText = 'Tie';
      result.style.color = 'grey';
    }

    reloadBtn.addEventListener('click', () => {
      window.location.reload();
    });
  };

  // Calling playGame function inside game
  playGame();
};

// Calling the game function
game();
