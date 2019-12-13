import { Grid } from "./grid";
import { isAlive } from "./is-alive";

export function getNeighborCount(grid: Grid, row: number, column: number) {
    let neighborCount = 0;

    for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
        const rowToCheck = row + rowOffset;

        if (!isRowInGrid(rowToCheck, grid)) {
            continue;
        }

        for (let columnOffset = -1; columnOffset <= 1; columnOffset++) {
            const columnToCheck = column + columnOffset;

            if (isCellToCheck(columnOffset, rowOffset) || !isColumnInGrid(columnToCheck, grid)) {
                continue;
            }

            const currentCell = grid[rowToCheck][columnToCheck];
            if (isAlive(currentCell)) {
                neighborCount++;
            }
        }
    }

    return neighborCount;
}


function isCellToCheck(columnOffset: number, rowOffset: number) {
    return columnOffset === 0 && rowOffset === 0;
}

function isColumnInGrid(derivedX: number, grid: Grid) {
    return derivedX >= 0 && derivedX < grid[0].length;
}

function isRowInGrid(derivedY: number, grid: Grid) {
    return derivedY >= 0 && derivedY < grid.length;
}
