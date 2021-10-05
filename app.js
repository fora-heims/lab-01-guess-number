// import functions and grab DOM elements
let input = document.getElementById('user-input');
const guess = document.getElementById('guess-button');
const replay = document.getElementById('reset-button');
const results = document.getElementById('guess-results');
const table = document.getElementById('wins-losses');
let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
const score = document.getElementById('score-button');

// initialize global state
let rndNum = Math.floor(Math.random() * 20) + 1;
let attempt = 0;

console.log(wins.textContent);

// Add event listeners
guess.addEventListener('click', ()=> {
    attempt++;
    results.style.display = 'inline';
    let num = Number(input.value);
    if (num > 20 || isNaN(num) === 'true') {
        let message = `Input invalid. You have ${4 - attempt} attempts left.`;
        results.textContent = `${message}`;
    } else if (num === rndNum) {
        let message = 'You Win!';
        results.textContent = `${message}`;
        let newWins = Number(wins.textContent) + 1;
        wins.textContent = newWins;
        replay.style.display = 'block';
        table.style.display = 'table';
        input.style.display = 'none';
        guess.style.display = 'none';
    } else if (attempt >= 4) {
        let message = 'Out of attempts. You Lose. Try again.';
        results.textContent = `${message}`;
        let newLosses = Number(losses.textContent) + 1;
        losses.textContent = newLosses;
        replay.style.display = 'block';
        table.style.display = 'table';
        input.style.display = 'none';
        guess.style.display = 'none';
    } else if (num > rndNum) {
        let message = `Too high. You have ${4 - attempt} attempts left.`;
        results.textContent = `${message}`;
    } else if (num < rndNum) {
        let message = `Too low. You have ${4 - attempt} attempts left.`;
        results.textContent = `${message}`;
    }
});

window.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        if (input.style.display === 'block') {
            attempt++;
            results.style.display = 'inline';
            let num = Number(input.value);
            if (num > 20 || isNaN(num) === 'true') {
                let message = `Input invalid. You have ${4 - attempt} attempts left.`;
                results.textContent = `${message}`;
            } else if (num === rndNum) {
                let message = 'You Win!';
                results.textContent = `${message}`;
                let newWins = Number(wins.textContent) + 1;
                wins.textContent = newWins;
                replay.style.display = 'block';
                table.style.display = 'table';
                input.style.display = 'none';
                guess.style.display = 'none';
            } else if (attempt >= 4) {
                let message = 'Out of attempts. You Lose. Try again.';
                results.textContent = `${message}`;
                let newLosses = Number(losses.textContent) + 1;
                losses.textContent = newLosses;
                replay.style.display = 'block';
                table.style.display = 'table';
                input.style.display = 'none';
                guess.style.display = 'none';
            } else if (num > rndNum) {
                let message = `Too high. You have ${4 - attempt} attempts left.`;
                results.textContent = `${message}`;
            } else if (num < rndNum) {
                let message = `Too low. You have ${4 - attempt} attempts left.`;
                results.textContent = `${message}`;
            }} else {
            attempt = 0;
            rndNum = Math.floor(Math.random() * 20) + 1;
            results.textContent = `You have ${4 - attempt} attempts.`;
            replay.style.display = 'none';
            table.style.display = 'none';
            input.value = '';
            input.style.display = 'block';
            guess.style.display = 'block';
        }
    }
});

replay.addEventListener('click', () => {
    attempt = 0;
    rndNum = Math.floor(Math.random() * 20) + 1;
    results.textContent = `You have ${4 - attempt} attempts.`;
    replay.style.display = 'none';
    table.style.display = 'none';
    input.value = '';
    input.style.display = 'block';
    guess.style.display = 'block';
});

score.addEventListener('click', () => {
    if (table.style.display === 'none') {
        table.style.display = 'table';
        score.textContent = 'Hide Score';
    } else {
        table.style.display = 'none';
        score.textContent = 'Display Score';
    }
});