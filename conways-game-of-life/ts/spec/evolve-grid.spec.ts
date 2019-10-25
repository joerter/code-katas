import { Grid } from "../game-of-life/grid";
import { evolveGrid } from "../game-of-life/evolve-grid";

describe('evolve-grid', () => {
    it('should return a dead grid when there are no alive cells', () => {
        const dead: Grid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];

        const result = evolveGrid(dead);

        expect(result).toEqual(dead);
    });

    it('should return a dead grid when there is one alive cell', () => {
        const grid = [
            ['-', '-', '-'],
            ['-', '*', '-'],
            ['-', '-', '-']
        ]

        const expectedResult: Grid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];

        const result = evolveGrid(grid);

        expect(result).toEqual(expectedResult);
    })

    it('should return a dead 5x5 grid when there is a 5x5 grid with no alive cells', () => {
        const dead: Grid = [
            ['-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-']
        ];

        const result = evolveGrid(dead);

        expect(result).toEqual(dead);
    });

    // turn Grid into a class with constructor
    it('should return a grid with cells living to the next generation when each has 2 neighbors', () => {
        const twoNeighbors = [
            ['-', '-', '*'],
            ['-', '*', '*'],
            ['-', '-', '-']
        ];
        const expected = [
            ['-', '*', '*'],
            ['-', '*', '*'],
            ['-', '-', '-']
        ]

        const result = evolveGrid(twoNeighbors);

        expect(result).toEqual(expected);
    });
});
