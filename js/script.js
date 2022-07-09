const gameOptions = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return gameOptions[Math.floor(Math.random()* 3)];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock'
    }else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors'
    }else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock'
    }else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beat Paper'
    }else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'You win! Scissor beats paper'
    }else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors'
    } else return 'draw';
}
const playerSelection = prompt('Rock, Paper or scissors?').toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));