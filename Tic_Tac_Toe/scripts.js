
// HTML INJECTION

const gameBoard = document.querySelector('#gameBoard');
const restartGame = document.querySelector('#restartGame');
const preventClick = (el) => el.style.pointerEvents = 'none';

for (let i = 0; i < 9; i++) {
    gameBoard.insertAdjacentHTML('beforeend', '<div class="segment"></div>');
}

// GAMEBOARD EVENTS

const boardSegment = gameBoard.querySelectorAll('.segment');
const playerName = document.querySelector('#playerName');
const playStatus = document.querySelector('#playStatus');

let currentPlayer = 'X';
let currentWinner = '';
let turnCounter = new Set();

const selected_X = []; // Player X
const selected_O = []; // Player O

function takeTurn(clickTarget, targetIndex) {

    preventClick(clickTarget);

    playerName.classList.remove('blink');
    setTimeout(() => {playerName.classList.add('blink')}, 0);

    if (currentPlayer === 'X') {

        clickTarget.classList.add('X');
        selected_X.push(targetIndex);

        if (determineWinner(selected_X)) {
            currentWinner = 'X';
            preventClick(gameBoard);
            return;
        }
        currentPlayer = 'O';
        setTimeout(() => {
            playerName.classList.remove('player-1');
            playerName.classList.add('player-2');
        }, 100);
    }
    else {
        clickTarget.classList.add('O');
        selected_O.push(targetIndex);

        if (determineWinner(selected_O)) {
            currentWinner = 'O';
            preventClick(gameBoard);
            return;
        }
        currentPlayer = 'X';
        setTimeout(() => {
            playerName.classList.remove('player-2');
            playerName.classList.add('player-1');
        }, 100);
    }
}
boardSegment.forEach((segment, index) => {

    segment.addEventListener('click', () => {

        takeTurn(segment, index); // main action

        playStatus.innerText = currentWinner ? 'wins' : 'go';

        turnCounter.add(index);
        if(turnCounter.size === boardSegment.length && !currentWinner) {
            playStatus.innerText = 'No winner';
            playStatus.classList.add('no-winner');
        }
    });
});

// DETERMINE WINNER

function determineWinner(selection) {

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    return winPatterns.some(pattern =>
        pattern.every(index => selection.includes(index))
    );
}

// RESTART GAME

restartGame.addEventListener('click', () => {

    gameBoard.removeAttribute('style');

    boardSegment.forEach((segment) => {
        segment.classList.remove('X','O');
        segment.removeAttribute('style');
    });
    currentWinner = '';
    playStatus.innerText = 'go';
    playStatus.removeAttribute('class');
    turnCounter.clear();
    selected_X.length = 0;
    selected_O.length = 0;
});