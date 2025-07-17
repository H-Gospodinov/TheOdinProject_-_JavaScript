import performAction, { winner } from "./game.js";

let newAction; // create or update

// CREATE BOARD

function createBoard(size) {

    newAction = performAction(size);

    return { // factory

        createLabels: (wrapper) => {

            for (let i = 0; i < size; i++) {

                const label = document.createElement('span');

                label.classList.add('label');
                label.innerText = i;

                wrapper.append(label);
            }
            const clone = wrapper.cloneNode(true);
            wrapper.parentNode.append(clone);
        },

        createGrid: (wrapper) => {

            for (let i = 0; i < size**2; i++) {

                const cell = document.createElement('div');

                cell.classList.add('cell');
                cell.dataset.id = i;

                wrapper.append(cell);
            }
        },

        startGame: (grid) => { // both

            const ships = newAction.createShips();

            for (const ship of ships) {

                const [x, y] = ship.split(', ').map(Number);

                const index = y * size + x;
                const cell = grid.querySelector(`div[data-id="${index}"]`);

                cell.classList.add('occupied');
            }
        },

        firstPlayer: (target) => {

            const autoStart = !newAction.selectPlayer(true);

            if (autoStart) {
                updateBoard(size).computerStrike(target);
            } // random
        },

        resetBoard: (boards, cells) => {

            for (const board of boards) {
                board.classList.remove('winner');
            }
            for (const cell of [...cells]) {
                cell.className = 'cell';
                cell.style.pointerEvents = '';
            }
            newAction.restartGame();
        },
    };
}
// UPDATE BOARD

function updateBoard(size) {

    let target; // across any board

    return { // factory

        humanStrike(board, target) {

            newAction.performAttack(target);

            this.displayStrike(target, board);

            if (winner) {
                setTimeout(() => {
                    board.classList.add('winner');
                }, 400); return; // stop
            }
            target.style.pointerEvents = 'none';
            board.style.pointerEvents = 'none';

            board = board.previousElementSibling;
            this.computerStrike(board);
        },

        computerStrike(board) {

            const attack = newAction.performAttack();
            const index = attack.y * size + attack.x;

            target = board.querySelector(`div[data-id="${index}"]`);

            this.displayBoard(board); // mobile devices

            setTimeout(() => { // better UX

                this.displayStrike(target);

                if (winner) board.classList.add('winner');

                board = board.nextElementSibling;
                board.style.pointerEvents = '';}, 400);
        },

        displayStrike(target, reveal) {

            const X = target.classList.contains('occupied');
            const mark = X ? 'destroyed' : 'missed';

            target.classList.add(mark);

            reveal ? target.classList.add('visible') : null;
        },

        displayBoard(board) { // mobile devices

            const sibling = board.nextElementSibling;
            const toggle = (board_1, board_2) => {

                board_1.classList.toggle('active');
                board_2.classList.toggle('active');
            }
            toggle(board, sibling);
            if (winner) return;

            setTimeout(() => {
                toggle(board, sibling);
            }, 1600);
        },
    };
}
export {createBoard, updateBoard};