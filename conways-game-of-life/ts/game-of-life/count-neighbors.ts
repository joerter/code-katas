import { Grid } from "./grid";

export function getNeighborCount(grid: Grid, yIndex: number, xIndex: number) {
    let xCounter = -1;
    let yCounter = -1;
    let neighborCount = 0;
    while (yCounter < 2) {
        let derivedY = yIndex + yCounter;
        if (derivedY < 0 || derivedY > grid.length) {
            yCounter++;
            continue;
        }
        while (xCounter < 2) {
            let derivedX = xIndex + xCounter;
            if (derivedX < 0 || derivedX > grid[0].length) {
                xCounter++;
                continue;
            }
            if (xCounter === 0 && yCounter === 0) {
                xCounter++;
                continue;
            }
            let currentCoordinate = grid[derivedY][derivedX];
            if (currentCoordinate === '*') {
                neighborCount++;
            }
            xCounter++;
        }
        yCounter++;
    }
    return neighborCount;
}
