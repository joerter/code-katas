const Game = require('./bowling-game');
let game;

beforeEach(() => {
    game = new Game();
});

test('gutter game', () => {
    rollMany(20, 0);

    expect(game.score).toBe(0);
});

test('all ones', () => {
    rollMany(20, 1);

    expect(game.score).toBe(20);
});

test.skip('spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0);

    expect(game.score).toBe(16);
})

const rollMany = (rolls, pins) => {
    for (let roll = 0; roll < rolls; roll++) {
        game.roll(pins);
    }
}
