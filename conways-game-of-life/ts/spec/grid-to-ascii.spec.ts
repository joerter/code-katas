import { Grid } from "../game-of-life/grid";
import { gridToAscii } from "../game-of-life/grid-to-ascii";

describe('gridToAscii', () => {
    it('should return empty string when given a null grid', () => {
        const actual = gridToAscii(null);

        expect(actual).toEqual('');
    });

    it('should parse a Grid into ascii', () => {
        const grid: Grid = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

        const line1 = '---\n';
        const line2 = '---\n';
        const line3 = '---';
        const expected = `${line1}${line2}${line3}`;

        const actual = gridToAscii(grid);

        expect(actual).toEqual(expected);
    });
});
