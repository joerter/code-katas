import { Grid } from './grid';

export function evolveGrid(grid: Grid): Grid {
    const evolvedGrid: Grid = [];

    grid.forEach(line => {
        const evolvedLine = [];
        line.forEach(() => {
            evolvedLine.push('-');
        });
        evolvedGrid.push(evolvedLine);
    });

    return evolvedGrid;
}
