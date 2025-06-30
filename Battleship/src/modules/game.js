import Ship from "./ships.js";
import Player from "./player.js";

let player; // current

const armadas = [], targets = new Set();

// PERFORM ACTION

function performAction(area) {

    return { // factory

        createShips: () => {

            const fleet = new Set();
            const sizes = [4, 3, 3, 2, 2, 1, 1, 1];

            for (let size of sizes) {

                new Ship(area, size).create(fleet);
            }
            armadas.push(fleet);
            return fleet;
        },

        selectPlayer: (initial) => {

            if (initial) { // random first

                // 1 = human, 0 = computer
                return player = Math.random() < 0.5 ? 0 : 1;
            }
            player ? player = 0 : player = 1;
        },

        performAttack(target) { // no arrow

            if (!player) target = targets; // computer

            const action = new Player(area, target)[player ? 'human' : 'computer']();

            this.takeDamage(action, player);
            this.selectPlayer();

            return action;
        },

        takeDamage: (action, player) => {

            const target = `${action.x}, ${action.y}`;
            const enemy = player ? armadas[1] : armadas[0];

            if (enemy.has(target)) enemy.delete(target);
            if (!enemy.size) alert('Game over');
        },

        restartGame: () => {

            armadas.length = 0;
            targets.clear();
        },
    };
}
export default performAction;