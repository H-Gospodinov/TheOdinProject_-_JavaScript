
// HTML INJECTION

const gameBoard = document.querySelector('#gameBoard');
const restartGame = document.querySelector('#restartButton');

for (let i = 0; i < 9; i++) {
    gameBoard.insertAdjacentHTML('beforeend', '<div class="segment"></div>');
}

// GAMEBOARD EVENTS

const boardSegment = gameBoard.querySelectorAll('.segment');
const playerName = document.querySelector('#playerName');

let currentPlayer = 'X';

function takeTurn(clickTarget) {

    clickTarget.style.setProperty('pointer-events', 'none');
    playerName.classList.remove('blink');
    setTimeout(() => {playerName.classList.add('blink')}, 0);

    if (currentPlayer === 'X') {
        clickTarget.classList.add('X');
        currentPlayer = 'O';
        setTimeout(() => {
            playerName.classList.remove('player-1');
            playerName.classList.add('player-2');
        }, 100);
    }
    else {
        clickTarget.classList.add('O');
        currentPlayer = 'X';
        setTimeout(() => {
            playerName.classList.remove('player-2');
            playerName.classList.add('player-1');
        }, 100);
    }
}
boardSegment.forEach((segment) => {

    segment.addEventListener('click', () => {
        takeTurn(segment);
    });
});

// RESTART GAME

restartGame.addEventListener('click', () => {

    boardSegment.forEach((segment) => {
        segment.classList.remove('X','O');
        segment.removeAttribute('style');
    });
});