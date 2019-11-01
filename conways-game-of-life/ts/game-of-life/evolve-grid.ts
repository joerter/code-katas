import { Grid } from './grid';
import { getNeighborCount } from './count-neighbors';

export function evolveGrid(grid: Grid): Grid {
    const evolvedGrid: Grid = [];

    for (let lineIndex = 0; lineIndex < grid.length; lineIndex++) {
        const line = grid[lineIndex];
        const evolvedLine = [];
        for (let cellIndex = 0; cellIndex < line.length; cellIndex++) {
            const cell = line[cellIndex];
            const neighborCount = getNeighborCount(grid, lineIndex, cellIndex);
            const evolvedCell = getCellValue(neighborCount);
            evolvedLine.push(evolvedCell);
        }
        evolvedGrid.push(evolvedLine);
    }

    return evolvedGrid;
}



function getCellValue(neighborCount: number) {
    return neighborCount > 3 || neighborCount < 2 ? '-' : '*';
}
