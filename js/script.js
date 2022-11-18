const gameOptions = ['rock', 'paper', 'scissors'];
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const result = document.getElementById('results');
const gameScreen = document.getElementById('gameScreen');
const container = document.getElementById('container');
const gameOverScreen = document.createElement('div');
const winner = document.createElement('div')
const newGame = document.createElement('button');

gameOverScreen.setAttribute('id', 'gameOverScreen');
winner.setAttribute('id', 'winner');
newGame.setAttribute('id', 'newGame');
newGame.textContent = 'New Game';

gameOverScreen.appendChild(winner)
gameOverScreen.appendChild(newGame);


function computerPlay() {
    return gameOptions[Math.floor(Math.random()* 3)];
}

let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

function gameOver() {
	container.removeChild(gameScreen)
	container.appendChild(gameOverScreen);

	pScore.textContent = 'Player Score: ' + 0; 
	cScore.textContent = 'Computer Score: ' + 0;

	result.textContent = 'Select an option to Start';
}

const  playRound = (playerSelection, computerSelection) => {

  computerSelection = computerPlay();

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    roundWinner = 'player';
  }else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    roundWinner = 'player';
  }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    roundWinner = 'player';
  }else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore ++;
    roundWinner = 'computer';
  }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    roundWinner = 'computer';
  }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    roundWinner = 'computer';
  }else if (playerSelection === computerSelection) {
    roundWinner = 'Draw';
  }

  pScore.textContent = 'Player Score: ' + playerScore;    
  cScore.textContent = 'Computer Score: ' + computerScore;

  
  if (roundWinner === 'Draw') {
    result.textContent = 'TIE!'
  }else if (roundWinner === 'player') {
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  }else if (roundWinner === 'computer') {
    result.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
  }else {
    result.textContent = roundWinner.toUpperCase() + ' WINS!';
  }

  if (playerScore === 5) {
    gameOver();
		winner.textContent = 'PLAYER WINS'
  }else if (computerScore === 5) {
    gameOver();
    winner.textContent = 'COMPUTER WINS';
  }
}

const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        playRound(playerSelection);

    })
    button.addEventListener('mousedown', () => {
        button.style = 'transform: scale(1.05)';
    })
    button.addEventListener('mouseup', () => {
        button.style = 'transform: scale(1)';
    })
})

newGame.addEventListener('click', () => {
	container.removeChild(gameOverScreen);
	container.appendChild(gameScreen)
})




