import {createBoard, updateBoard} from "./modules/render.js";

const boards = document.querySelectorAll('.board');
const [humanBoard, computerBoard] = boards;

const [grids, cells] = [[], []];

const resetBtn = document.querySelector('#reset');
const infoBtn = document.querySelector('#info');
const animateBtn = document.querySelector('#animate');

const modalBox = document.querySelector('.modal');


// HTML INJECTION

const boardSize = 10;
const gameBoard = createBoard(boardSize);

for (const board of boards) {

    const labels = board.querySelector('.labels');
    const grid = board.querySelector('.grid');

    board.style.setProperty('--cell-size', 100 / boardSize +'%');

    gameBoard.createLabels(labels);
    gameBoard.createGrid(grid, cells);

    gameBoard.startGame(grid);

    grids.push(grid); // collect for reset
    cells.push(...grid.querySelectorAll('.cell'));

    document.body.classList.remove('loading');
}

// AUTO START

const autoStart = humanBoard;
// auto start if computer is first
gameBoard.firstPlayer(autoStart);


// UPDATE BOARD

computerBoard.addEventListener('click', (e) => {

    const target = e.target;

    if (!target.classList.contains('cell')) return;
    updateBoard(boardSize).humanStrike(computerBoard, target);
});

// RESET BOARD

resetBtn.addEventListener('click', () => {

    humanBoard.classList.remove('active');
    computerBoard.classList.add('active');

    gameBoard.resetBoard(boards, cells);

    for (const grid of grids) {
        gameBoard.startGame(grid);
    }
    gameBoard.firstPlayer(autoStart);
});

// GAME INFO

infoBtn.addEventListener('click', () => {

    modalBox.showModal();

    const closeBtn = modalBox.querySelector('#close');
    closeBtn.onclick = () => modalBox.close();
});

// toggle animation

animateBtn.addEventListener('click', () => {

    document.body.classList.toggle('animate');
});

// GAME OVER

document.addEventListener('GameOver', () => {

    for (const cell of cells) {
        cell.style.pointerEvents = 'none';

        if (cell.classList.contains('occupied')) {
            cell.classList.add('visible');
        }
    } // lock and reveal
});