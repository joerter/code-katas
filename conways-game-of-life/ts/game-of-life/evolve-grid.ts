import { Grid } from './grid';
import { getNeighborCount } from './count-neighbors';
import { isAlive } from './is-alive';

export function evolveGrid(grid: Grid): Grid {
    const evolvedGrid: Grid = [];

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        const row = grid[rowIndex];
        const evolvedRow = [];

        for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
            const neighborCount = getNeighborCount(grid, rowIndex, columnIndex);

            const currentCellIsAlive = isAlive(grid[rowIndex][columnIndex]);
            const evolvedCell = getCellValue(neighborCount, currentCellIsAlive);
            evolvedRow.push(evolvedCell);
        }
        evolvedGrid.push(evolvedRow);
    }

    return evolvedGrid;
}



function getCellValue(neighborCount: number, hasALife: boolean) {
    if (hasALife) {
        return neighborCount > 3 || neighborCount < 2 ? '-' : '*';
    }

    return neighborCount === 3 ? '*' : '-'
}
