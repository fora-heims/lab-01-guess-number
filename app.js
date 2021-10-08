// import functions and grab DOM elements
let input = document.getElementById('user-input');
const guess = document.getElementById('guess-button');
const replay = document.getElementById('reset-button');
const results = document.getElementById('guess-results');
const table = document.getElementById('wins-losses');
let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
const score = document.getElementById('score-button');
const timerButton = document.getElementById('timer-button');
const timerDisplay = document.getElementById('timer-display');

// initialize global state
let rndNum = Math.floor(Math.random() * 20) + 1;
let attempt = 0;

function invalidInput() {
    let message = `Input invalid. You have ${4 - attempt} attempts left.`;
    results.textContent = message;
}

function correctGuess() {
    let message = 'You Win!';
    results.textContent = message;
    let newWins = Number(wins.textContent) + 1;
    wins.textContent = newWins;
    replay.style.display = 'block';
    table.style.display = 'table';
    score.textContent = 'Hide Score';
    input.style.display = 'none';
    guess.style.display = 'none';
}

function outOfGuesses() {
    let message = 'Out of attempts. You Lose. Try again.';
    results.textContent = message;
    let newLosses = Number(losses.textContent) + 1;
    losses.textContent = newLosses;
    replay.style.display = 'block';
    table.style.display = 'table';
    score.textContent = 'Hide Score';
    input.style.display = 'none';
    guess.style.display = 'none';
}

function tooHigh() {
    let message = `Too high. You have ${4 - attempt} attempts left.`;
    results.textContent = message;
}

function tooLow() {
    let message = `Too low. You have ${4 - attempt} attempts left.`;
    results.textContent = message;
}

function hideScore() {
    table.style.display = 'none';
    score.textContent = 'Display Score';
}

function restartGame() {
    attempt = 0;
    rndNum = Math.floor(Math.random() * 20) + 1;
    results.textContent = `You have ${4 - attempt} attempts.`;
    replay.style.display = 'none';
    input.value = '';
    input.style.display = 'block';
    guess.style.display = 'block';
    hideScore();
}

function showScore() {
    table.style.display = 'table';
    score.textContent = 'Hide Score';
}

// Add event listeners
guess.addEventListener('click', () => {
    attempt++;
    results.style.display = 'inline';
    let num = Number(input.value);
    if (num > 20 || isNaN(num) === true || num <= 0) {
        invalidInput();
    } else if (num === rndNum) {
        correctGuess();
    } else if (attempt >= 4) {
        outOfGuesses();
    } else if (num > rndNum) {
        tooHigh();
    } else if (num < rndNum) {
        tooLow();
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        if (input.style.display === 'block') {
            attempt++;
            results.style.display = 'inline';
            let num = Number(input.value);
            if (num > 20 || isNaN(num) === true || num <= 0) {
                invalidInput();
            } else if (num === rndNum) {
                correctGuess();
            } else if (attempt >= 4) {
                outOfGuesses();
            } else if (num > rndNum) {
                tooHigh();
            } else if (num < rndNum) {
                tooLow();
            }
        } else {
            restartGame();
        }
    }
});

replay.addEventListener('click', () => {
    restartGame();
});

score.addEventListener('click', () => {
    if (table.style.display === 'none') {
        showScore();
    } else {
        hideScore();
    }
});

let timerCount = 60;

timerButton.addEventListener('click', () => {
    setInterval(function () {
        if (timerCount <= 0) {
            clearInterval();
        } else {
            timerCount--;
            timerDisplay.textContent = timerCount;
        }
    }, 1000);
});

//end game when time runs out
//  alert user of game end
//  display score
