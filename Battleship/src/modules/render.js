import performAction from "./game.js";

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

        startGame: (grid, first) => {

            const ships = newAction.createShips();
            const autoStart = newAction.selectPlayer();

            for (const ship of ships) {

                const [x, y] = ship.split(', ').map(Number);

                const index = y * size + x;
                const cell = grid.querySelector(`div[data-id="${index}"]`);

                cell.classList.add('occupied');
            }
            if (autoStart) {
                updateBoard(size).computerStrike(first);
            }
        },
    };
}
// UPDATE BOARD

function updateBoard(size) {

    let target; // across any board

    return { // factory

        humanStrike(board, target) {

            newAction.performAttack(target);

            target.style.pointerEvents = 'none';
            board.style.pointerEvents = 'none';

            this.displayStrike(board, target);

            board = board.previousElementSibling;
            this.computerStrike(board);
        },

        computerStrike(board) {

            const attack = newAction.performAttack();
            const index = attack.y * size + attack.x;

            target = board.querySelector(`div[data-id="${index}"]`);
            board = board.nextElementSibling;

            setTimeout(() => {
                this.displayStrike(null, target);
                board.removeAttribute('style');
            }, 500);
        },

        displayStrike(reveal, target) {

            const X = target.classList.contains('occupied');
            const mark = X ? 'destroyed' : 'missed';

            target.classList.add(mark);

            reveal ? target.classList.add('visible') : null;
        },
    };
}
export {createBoard, updateBoard};