import performAction from "./game.js";

let newAction; // TO DO


// CREATE BOARD

function createBoard(size) {

    newAction = performAction(size);

    return {

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

        startGame: (grid) => {

            const ships = newAction.createShips();

            for (const ship of ships) {

                for (const segment of ship) {

                    const index = segment.y * size + segment.x;
                    const cell = grid.querySelector(`div[data-id="${index}"]`);

                    cell.classList.add('occupied');
                }
            } // both are arrays
        },
    };
}
// UPDATE BOARD

function updateBoard(board) {

    let target; // both boards

    return {

        async humanStrike(event) {

            target = event.target;
            this.displayStrike(target);

            const attack = await newAction.performAttack(target);

            board.style.pointerEvents = 'none';
            target.style.pointerEvents = 'none';

            setTimeout(async () => {
                await this.computerStrike();
            }, 500);
        },

        async computerStrike() {

            const attack = await newAction.performAttack();
            const index = attack.y * 10 + attack.x;

            target = board.previousElementSibling;
            target = target.querySelector(`div[data-id="${index}"]`);

            this.displayStrike(target);
            board.removeAttribute('style');
        },

        displayStrike(target) {

            if (target.classList.contains('occupied')) {
                target.classList.add('destroyed');
            }
            else {
                target.classList.add('missed')
            }
        },
    };
}
export {createBoard, updateBoard};