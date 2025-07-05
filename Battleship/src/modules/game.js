import Ship from "./ships.js";
import Player from "./player.js";

let player; // current

const armadas = [], targets = [], queue = [];

// PERFORM ACTION

function performAction(area) {

    for (let i = 0; i < area**2; i++) {
        // map auto targets
        targets.push([Math.floor(i / area), i % area]);
    }

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

            const action = player ?
                  new Player(area, target).human() :
                  new Player(area, targets, queue).computer(armadas[0]);

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

            for (const data of [armadas, targets, queue]) {
                data.length = 0;
            }
            for (let i = 0; i < area**2; i++) {
                targets.push([Math.floor(i / area), i % area]);
            } // re-map auto targets
        },
    };
}
export default performAction;