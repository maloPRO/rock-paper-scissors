const gameOptions = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return gameOptions[Math.floor(Math.random()* 3)];
}
function game() {
for (let i = 0; i < 5; i++) {
function  playRound(playerSelection ,computerSelection) {
            if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'You win! Rock beats scissors';
            }else if (playerSelection === 'paper' && computerSelection === 'rock') {
                return 'You win! Paper beats rock';
            }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                return 'You win! Scissor beats paper';
            }else if (playerSelection === 'rock' && computerSelection === 'paper') {
                return 'You lose! Paper beats rock';
            }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                return 'You lose! Scissor beats paper';
            }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
               return 'You lose! Rock beats scissors';
            }else if (playerSelection === computerSelection) {
                return 'Draw!';
            }else {
                return 'Enter a valid Selection'
            }
        };
        let playerSelection = prompt('Rock paper or scissors').toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
        alert('GAME OVER!!!');
        
    }

console.log(game());




