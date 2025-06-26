
function Player(boardSize) {

    return {

        human(target) {

            const index = target.dataset.id;

            const x = index % boardSize;
            const y = Math.floor(index / boardSize);

            return {x, y};
        },

        computer() {

            const strikes = new Set();
            let x, y, key;

            do {
                x = Math.floor(Math.random() * boardSize);
                y = Math.floor(Math.random() * boardSize);

                key = `${x}, ${y}`;
            }
            while (strikes.has(key));

            strikes.add(key); return {x, y};
        },

        attack(target, player) {

            switch (player) {

                case 0: // human
                    return this.human(target);

                case 1: // computer
                    return this.computer();
            }
        },
    };
}
export default Player;