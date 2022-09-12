const gameOptions = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return gameOptions[Math.floor(Math.random()* 3)];
}

let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

function  playRound(playerSelection) {

    function gameOver() {
        playerScore = 0;
        computerScore = 0;
        result.textContent = 'Game over'
    }

    let computerSelection = computerPlay();
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
    const pScore = document.getElementById('playerScore');
    pScore.textContent = 'Player Score: ' + playerScore;

    const cScore = document.getElementById('computerScore');
    cScore.textContent = 'Computer Score: ' + computerScore;

    const result = document.getElementById('results');
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
        confirm('PLAYER WINS THE GAME');
        confirm('Play Again?');

    }else if (computerScore === 5) {
        gameOver();
        confirm('COMPUTER WINS THE GAME');
        confirm('Play Again?');
    }
}

const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        playRound(playerSelection);

    })
})






