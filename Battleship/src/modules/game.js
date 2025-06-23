import Ship from "./ships.js";
import Player from "./player.js";

let currentPlayer = Math.random() < 0.5 ? 0 : 1; // random
currentPlayer ? performAction().computerAttack() : null;

function performAction() {

    return {

        createShips: (boardSize) => {

            const ships = []; // predefined lengths
            const lengths = [4, 3, 3, 2, 2, 1, 1, 1];
            const fleet = new Set(); // reserved space

            for (let shipSize of lengths) {

                ships.push(new Ship(
                    boardSize, shipSize).create(fleet)
                );
            } return ships;
        },

        humanAttack: () => {

            alert('human attack');
            new Player(currentPlayer).action();
            performAction().switchPlayer();

            setTimeout(() => {
                performAction().computerAttack();
            }, 1000);
        },

        computerAttack: () => {

                alert('computer attack');
                new Player(currentPlayer).action();
                performAction().switchPlayer();
        },

        switchPlayer: () => {

            switch (currentPlayer) {

                case 0: currentPlayer = 1; break;
                case 1: currentPlayer = 0;
            }
        }
    };
}
export default performAction;