//import "./styles/styles.css"; // do NOT include
//import "./styles/media.css"; // always include

import createBoard from "./modules/render.js";
import performAction from "./modules/game.js";

const boards = document.querySelectorAll('.board');


// HTML INJECTION

const boardSize = 10; // default size
const gameBoard = createBoard(boards, boardSize);

for (const board of boards) {

    const labels = board.querySelector('.labels');
    const grid = board.querySelector('.grid');

    gameBoard.createLabels(labels);
    gameBoard.createGrid(grid);

    gameBoard.startGame(grid);
}

// EVENT HANDLERS

boards[1].addEventListener('click', () => {
    performAction().humanAttack();
});