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
const timerReset = document.getElementById('reset-timer');

// initialize global state
let rndNum = Math.floor(Math.random() * 20) + 1;
let attempt = 0;
let lossCount = 0;
let winCount = 0;

function invalidInput() {
    let message = `Input invalid. You have ${4 - attempt} attempts left.`;
    results.textContent = message;
    input.focus();
}

function correctGuess() {
    let message = 'You Win!';
    results.textContent = message;
    let newWins = winCount + 1;
    wins.textContent = newWins;
    replay.style.display = 'block';
    score.textContent = 'Hide Score';
    input.style.display = 'none';
    guess.style.display = 'none';
}


function outOfGuesses() {
    let message = 'Out of attempts. You Lose. Try again.';
    results.textContent = message;
    let newLosses = lossCount + 1;
    losses.textContent = newLosses;
    replay.style.display = 'block';
    score.textContent = 'Hide Score';
    input.style.display = 'none';
    guess.style.display = 'none';
}

function tooHigh() {
    let message = `Too high. You have ${4 - attempt} attempts left.`;
    results.textContent = message;
    input.focus();
}

function tooLow() {
    let message = `Too low. You have ${4 - attempt} attempts left.`;
    results.textContent = message;
    input.focus();
}

function restartGame() {
    attempt = 0;
    rndNum = Math.floor(Math.random() * 20) + 1;
    results.textContent = `You have ${4 - attempt} attempts.`;
    replay.style.display = 'none';
    input.ariaPlaceholder = 'Type Number Here';
    input.style.display = 'block';
    guess.style.display = 'block';
    input.focus();
}

let timerCount = 60;
function timerResetF() {
    timerCount = 60;
    timerDisplay.textContent = timerCount;
    input.ariaPlaceholder = 'Type Number Here';
    input.style.display = 'block';
    guess.style.display = 'block';
    input.focus();
}

function decrementTimer() {
    timerCount--;
    timerDisplay.textContent = timerCount;
}

function timerEnder() {
    setInterval(function() {
        if (timerCount <= 0) {
            results.textContent = 'Times Up!';
            guess.style.display = 'none';
            input.style.display = 'none';
            clearInterval(intervalID);
        }}, 1000);
}

// Add event listeners
guess.addEventListener('click', () => {
    attempt++;
    results.style.display = 'inline';
    let num = Number(input.value);
    if (attempt >= 4) {
        outOfGuesses();
    } else if (num > 20 || isNaN(num) === true || num <= 0) {
        invalidInput();
    } else if (num === rndNum) {
        correctGuess();
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
            if (num === rndNum) {
                correctGuess();
            } else if (attempt >= 4) {
                outOfGuesses();
            } else if (num > 20 || isNaN(num) === true || num <= 0) {
                invalidInput();
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

timerReset.addEventListener('click', () => {
    timerResetF();
    wins.textContent = 0;
    losses.textContent = 0;
    guess.style.display = 'block';
});

let intervalID;

timerButton.addEventListener('click', () => {
    restartGame();
    intervalID = setInterval(decrementTimer, 1000);
    timerEnder();
});