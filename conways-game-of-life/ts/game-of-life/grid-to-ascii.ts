import { Grid } from './grid';

export function gridToAscii(grid: Grid) {
    if (grid == null) {
        return '';
    }

    let ascii = '';
    for (let lineIndex = 0; lineIndex < grid.length; lineIndex++) {
        const line = grid[lineIndex];
        const isLastLine = lineIndex === grid.length - 1;

        ascii += `${line.join('')}${isLastLine ? '' : '\n'}`
    }

    return ascii;
}
