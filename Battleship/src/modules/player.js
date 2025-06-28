
class Player {

    constructor (boardSize, hitTarget) {

        this.board = boardSize;
        this.target = hitTarget;
    }

    human() {

        const index = this.target.dataset.id;

        const x = index % this.board;
        const y = Math.floor(index / this.board);

        return {x, y};
    }

    computer() {

        let x, y, key; // random

        do {
            x = Math.floor(Math.random() * this.board);
            y = Math.floor(Math.random() * this.board);

            key = `${x}, ${y}`;
        }
        while (this.target.has(key));

        this.target.add(key); return {x, y};
    }
}
export default Player;