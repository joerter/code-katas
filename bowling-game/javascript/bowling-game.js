class Game {
    constructor() {
        this.rolls = [];
        this.rollIndex = 0;
    }

    roll(pins) {
        this.rolls[this.rollIndex++] = pins;
    }

    get score() {
        let gameScore = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

            if (this.isStrike(this.rolls[rollIndex])) {
                gameScore += this.strikeBonus(rollIndex);
                rollIndex += 1;
                continue;
            }

            if (this.isSpare(frameScore)) {
                gameScore += this.spareBonus(rollIndex);
            } else {
                gameScore += frameScore;
            }

            rollIndex += 2;
        }

        return gameScore;
    }

    isStrike(pins) {
        return pins === 10;
    }

    isSpare(frameScore) {
        return frameScore === 10;
    }

    spareBonus(index) {
        return 10 + this.rolls[index + 2];
    }

    strikeBonus(index) {
        return 10 + this.rolls[index + 1] + this.rolls[index + 2];
    }
}

module.exports = Game;
