import performAction from "./game.js";

// SET GAMEBOARD

function createBoard(boards, size) {

    return {

        createLabels: (wrapper) => {

            for (let i = 1; i <= size; i++) {

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

            const ships = performAction().createShips(size);

            for (const ship of ships) {

                for (const segment of ship) {

                    const index = segment.y * size + segment.x;
                    const cell = grid.querySelector(`div[data-id="${index}"]`);

                    cell.classList.add('occupied');
                }
            } // both are arrays
        },
    }; // return functions
}
function updateBoard() {

}
export default createBoard;