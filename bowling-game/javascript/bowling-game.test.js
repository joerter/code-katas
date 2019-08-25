const Game = require('./bowling-game');

let game;

beforeEach(() => {
    game = new Game();
})

test('all gutter balls', () => {
    rollMany(20, 0);

    expect(game.score).toEqual(0);
})

test('all Ones', () => {
    rollMany(20, 1);

    expect(game.score).toEqual(20);
})

test('one spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0);

    expect(game.score).toEqual(16);
})

test('one stike', () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollMany(17, 0);

    expect(game.score).toEqual(14);
})

test('perfect game', () => {
    rollMany(12, 10);

    expect(game.score).toEqual(300);
})

const rollMany = (rolls, pins) => {
    for (let roll = 0; roll < rolls; roll++) {
        game.roll(pins);
    }
}