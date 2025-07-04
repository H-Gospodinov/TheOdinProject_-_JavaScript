
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

        const index = Math.floor(Math.random() * this.target.length);

        const [x, y] = this.target[index];
        this.target.splice(index, 1);

        return {x, y};
    }
}
export default Player;