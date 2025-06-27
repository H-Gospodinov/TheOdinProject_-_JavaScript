//import "./styles/styles.css"; // do NOT include
import "./styles/media.css"; // always include

import {createBoard, updateBoard} from "./modules/render.js";

const boards = document.querySelectorAll('.board');
const [humanBoard, computerBoard] = boards;


// HTML INJECTION

const boardSize = 10; // default
const gameBoard = createBoard(boardSize);

for (const board of boards) {

    const labels = board.querySelector('.labels');
    const grid = board.querySelector('.grid');

    board.style.setProperty('--cell-size', 100 / boardSize +'%');

    gameBoard.createLabels(labels);
    gameBoard.createGrid(grid);

    gameBoard.startGame(grid);
}

// EVENT HANDLERS

const autoStart = humanBoard;
gameBoard.firstPlayer(autoStart);

computerBoard.addEventListener('click', (e) => {

    const target = e.target;

    if (!target.classList.contains('cell')) return;
    updateBoard(boardSize).humanStrike(computerBoard, e.target);
});