const gameOptions = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return gameOptions[Math.floor(Math.random()* 3)];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock'
    }else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors'
    }else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock'
    }else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beat Paper'
    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissor beats paper'
    }else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors'
    } else return 'draw';
}
const playerSelection = prompt('Rock, Paper or scissors?');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));