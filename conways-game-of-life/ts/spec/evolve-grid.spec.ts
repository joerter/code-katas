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

    it('should return a grid with cells living to the next generation when each has 2 neighbors', () => {
        const twoNeighbors = [
            ['-', '*', '*'],
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

    it('return a grid with a singe alive cell when there are three live cells in a diagonal line (y=-x for the math people)', () => {
        const diagonal = [
            ['*', '-', '-'],
            ['-', '*', '-'],
            ['-', '-', '*']
        ];
        const singleLiveCell = [
            ['-', '-', '-'],
            ['-', '*', '-'],
            ['-', '-', '-']
        ];

        const result = evolveGrid(diagonal);

        expect(result).toEqual(singleLiveCell);
    });

    it('should return a block when there are three live cells surrounding a dead cell', () => {
        const lShape = [
            ['*', '*', '-'],
            ['*', '-', '-'],
            ['-', '-', '-']
        ];
        const block = [
            ['*', '*', '-'],
            ['*', '*', '-'],
            ['-', '-', '-']
        ];

        const result = evolveGrid(lShape);

        expect(result).toEqual(block);
    });

    it('should return a horizontalLine when fed a verticalLine', () => {
        const verticalLine = [
            ['-', '*', '-'],
            ['-', '*', '-'],
            ['-', '*', '-']
        ];
        const horizontalLine = [
            ['-', '-', '-'],
            ['*', '*', '*'],
            ['-', '-', '-']
        ];

        const testHorizontal = evolveGrid(verticalLine);
        expect(testHorizontal).toEqual(horizontalLine);

        const testVertical = evolveGrid(testHorizontal);
        expect(testVertical).toEqual(verticalLine);
    });
});
