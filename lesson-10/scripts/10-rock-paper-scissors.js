let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}
//getItem will get the score from localStorage, .parse will get the string that is returned and make it an object

//the following code is the same thing as the code with || above (it does the same thing, the above thing is just faster to type)
// if (score === null) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     }
// }
function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties ${score.ties}`;
}

updateScoreElement();

function playGame(playerMove) {
const computerMove = pickComputerMove()

if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
        result = 'You lose.';
    } else if (computerMove === 'paper') {
        result = 'You win.'
    } else {
        result = 'Tie.'
    }
} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
        result = 'Tie.';
    } else if (computerMove === 'paper') {
        result = 'You lose.'
    } else {
        result = 'You win.'
    }
} else {
    if (computerMove === 'rock') {
        result = 'You win.';
    } else if (computerMove === 'paper') {
        result = 'Tie.'
    } else {
        result = 'You lose.'
    }
}

if (result === 'You win.') {
    score.wins += 1;
} else if (result === 'You lose.') {
    score.losses += 1;
} else {
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));
//this will make it so that we can save the score, so the score is not lost when we reload the page


//alert(`You picked ${playerMove}, Computer picked ${computerMove}, ${result}`);

document.querySelector('.js-result').innerHTML
= result;

document.querySelector('.js-moves').innerHTML
= `You <img src="images/${playerMove}-emoji.png" class="move-icon"> 
    <img src="images/${computerMove}-emoji.png" class="move-icon"> 
    Computer`;

updateScoreElement();

console.log(score);

}

function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = ''

if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
} else {
    computerMove = 'scissors';
}

return computerMove;
}

function resetScore() {
score.wins = 0;
score.losses = 0;
score.ties = 0;
updateScoreElement();
localStorage.removeItem('score')
}
