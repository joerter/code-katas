import { Grid } from "../game-of-life/grid";
import { getNeighborCount } from "../game-of-life/count-neighbors";

describe('count-neighbors', () => {
    it('should return 0 when there are no living neighbors', () => {
        const grid = [
            ['-', '-', '-'],
            ['-', '*', '-'],
            ['-', '-', '-']
        ]

        const expectedResult: number = 0;

        const result = getNeighborCount(grid, 1, 1);

        expect(result).toEqual(expectedResult);
    })
});
