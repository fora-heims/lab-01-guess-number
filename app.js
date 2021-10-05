// import functions and grab DOM elements
let input = document.getElementById('user-input');
const guess = document.getElementById('guess-button');
const replay = document.getElementById('reset-button');
let results = document.getElementById('guess-results');
const table = document.getElementById('wins-losses');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
// console.log(input, guess, replay, results, wins, losses);

// initialize global state
let rndNum = Math.floor(Math.random() * 20) +1;
let attempt = 0;
console.log(rndNum, attempt);

// set event listeners
guess.addEventListener('click', ()=> {
    // get user input
    // use user input to update state 
    attempt++;
    // console.log(attempt);
    results.style.display = 'vis';
    table.style.display = 'vis';
    replay.style.display = 'vis';
    let num = Number(input.value);
    if (num === rndNum) {
        let message = 'You Win!';
        results.textContent = message;
    } else if (attempt >= 4) {
        let message = 'Out of attempts. You Lose. Try again.';
        results.textContent = message;
    } else if (num > rndNum) {
        let message = 'Too high.';
        results.textContent = message;
    } else if (num < rndNum) {
        let message = 'Too low.';
        results.textContent = message;
    }
    // update DOM to reflect the new state
});
