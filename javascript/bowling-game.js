class Game {
    constructor() {
        this.currentRoll = 0;
        this.rolls = [];
    }

    get score() {
        let score = 0;
        let roll = 0;
        for (let frame = 0; frame < 10; frame++) {
            score += this.rolls[roll] + this.rolls[roll + 1];
            roll += 2;
        }

        return score;
    }

    roll(pins) {
        this.rolls[this.currentRoll++] = pins;
    }
}

module.exports = Game;
