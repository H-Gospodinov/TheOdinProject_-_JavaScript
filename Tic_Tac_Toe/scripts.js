
// HTML INJECTION

const gameBoard = document.querySelector('#gameBoard');
const playerName = document.querySelector('#playerName');
const playStatus = document.querySelector('#playStatus');
const restartGame = document.querySelector('#restartGame');

for (let i = 0; i < 9; i++) {
    gameBoard.insertAdjacentHTML('beforeend', '<div class="segment"></div>');
}
const boardSegments = gameBoard.querySelectorAll('.segment');

// CLICK HANDLER

boardSegments.forEach((segment, index) => {

    segment.addEventListener('click', () => {

        takeTurn(segment, index); // gameplay
        turnCounter.add(index); // counter

        if (turnCounter.size < boardSegments.length) {
            playStatus.innerText = currentWinner ? 'wins' : 'go';
        }
        else if (currentWinner) {
            playStatus.innerText = 'wins';
        }
        else { // game over
            playStatus.innerText = 'No winner';
            playStatus.classList.add('no-winner');
        }
    });
});

// GAMEPLAY EVENTS

let currentPlayer = 'X';
let currentWinner = '';
let turnCounter = new Set();
let actionAllowed = true;

const selected_X = []; // player X
const selected_O = []; // player O

function takeTurn(clickTarget, targetIndex) {

    clickTarget.classList.add(currentPlayer);

    if (currentPlayer === 'X') {

        selected_X.push(targetIndex);
        if (checkWinner(selected_X)) {
            displayWinner();
            return;
        }
        currentPlayer = 'O';
        displayPlayer('player-1','player-2');
    }
    else {
        selected_O.push(targetIndex);
        if (checkWinner(selected_O)) {
            displayWinner();
            return;
        }
        currentPlayer = 'X';
        displayPlayer('player-2','player-1');
    }
    preventClick(clickTarget);

    function preventClick (element) {
        element.style.pointerEvents = 'none';
    }
    function displayWinner() {
        // just a wrapper
        currentWinner = currentPlayer;
        updateScore(currentWinner);
        preventClick(gameBoard);
    }
}

// DISPLAY PLAYER

function displayPlayer(oldClass, newClass) {

    playerName.classList.remove('blink');
    setTimeout(() => {playerName.classList.add('blink')}, 0);

    setTimeout(() => {
        playerName.classList.remove(oldClass);
        playerName.classList.add(newClass);
    }, 100);
}

// DETERMINE WINNER

function checkWinner(selection) {

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    // old version, works fine but doesn't return the exact winning pattern:
    /*
    return winPatterns.some(pattern =>
        pattern.every(index => selection.includes(index))
    );*/
    // new version, returns the exact winning pattern:

    for (let pattern of winPatterns) {

        if (pattern.every(item => selection.includes(item))) {

            const patternNodes = pattern.map(item => boardSegments[item]);

            patternNodes.forEach((node) => {
                node.style.background = (selection === selected_X) ? '#6ad' : '#d6a';
                node.classList.add('win');
            });
            return pattern; // some winner
        }
    } return null; // no winner
}

// UPDATE SCORE

function updateScore(winner) {

    const score_X = document.querySelector('#score_X .display');
    const score_O = document.querySelector('#score_O .display');

    if (winner && actionAllowed) {
        score_X.insertAdjacentHTML('beforebegin', '<span>X</span>');
        score_X.style.color = '#6ad';
        score_O.insertAdjacentHTML('afterend', '<span>O</span>');
        score_O.style.color = '#d6a';
        actionAllowed = false;
    }
    if (winner === 'X') {
        score_X.innerText = Number(score_X.innerText) + 1;
    }
    else {
        score_O.innerText = Number(score_O.innerText) + 1;
    }
}

// RESTART GAME

restartGame.addEventListener('click', () => {

    gameBoard.removeAttribute('style');

    boardSegments.forEach((segment) => {
        segment.classList.remove('X','O','win');
        segment.removeAttribute('style');
    });
    currentWinner = '';
    playStatus.innerText = 'go';
    playStatus.removeAttribute('class');
    turnCounter.clear();
    selected_X.length = 0;
    selected_O.length = 0;
});