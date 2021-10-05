// import functions and grab DOM elements
let input = document.getElementById('user-input');
const guess = document.getElementById('guess-button');
const replay = document.getElementById('reset-button');
const results = document.getElementById('guess-results');
const table = document.getElementById('wins-losses');
let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
// console.log(input, guess, replay, results, wins, losses);

// initialize global state
let rndNum = Math.floor(Math.random() * 20) + 1;
let attempt = 0;
// console.log(rndNum, attempt);

// set event listeners
guess.addEventListener('click', ()=> {
    // get user input
    // use user input to update state 
    attempt++;
    // console.log(attempt);
    results.style.display = 'inline';
    console.log(results.style.display);
    table.style.display = 'table';
    let num = Number(input.value);
    if (num === rndNum) {
        let message = 'You Win!';
        results.textContent = `${message}`;
        let newWins = Number(wins) + 1;
        wins.textContent = newWins;
    } else if (attempt >= 4) {
        let message = 'Out of attempts. You Lose. Try again.';
        results.textContent = `${message}`;
        let newLosses = Number(losses) + 1;
        wins.textContent = newLosses;
        replay.style.display = 'block';
    } else if (num > rndNum) {
        let message = `Too high. You have ${4 - attempt} attempts left.`;
        results.textContent = `${message}`;
    } else if (num < rndNum) {
        let message = `Too low. You have ${4 - attempt} attempts left.`;
        results.textContent = `${message}`;
    }

    // update DOM to reflect the new state
});
