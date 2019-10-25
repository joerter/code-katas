import { asciiToGrid } from '../game-of-life/ascii-to-grid';
import { Grid } from '../game-of-life/grid';

describe('asciiToGrid', () => {
    it('should parse the ascii world into a Grid', () => {
        const line1 = '---\n';
        const line2 = '---\n';
        const line3 = '---';

        const expected: Grid = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

        const actual = asciiToGrid(`${line1}${line2}${line3}`);

        expect(actual).toEqual(expected);
    });
});
