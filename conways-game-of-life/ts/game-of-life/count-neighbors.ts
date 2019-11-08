import { Grid } from "./grid";

// export function getNeighborCount(grid: Grid, yCoordinate: number, xCoordinate: number) {
//     let xOffset = -1;
//     let yOffset = -1;
//     let neighborCount = 0;
//     while (yOffset < 2) {
//         console.log('yCounter', yOffset);
//         let derivedY = yCoordinate + yOffset;
//         console.log('derivedY', derivedY);
//         if (derivedY < 0 || derivedY > grid.length) {
//             yOffset++;
//             console.log('yCounter++ result', yOffset);
//             continue;
//         }
//         while (xOffset < 2) {
//             console.log('xCounter', xOffset);
//             let derivedX = xCoordinate + xOffset;
//             console.log('derivedX', derivedX);

//             if (derivedX < 0 || derivedX > grid[0].length) {
//                 xOffset++;
//                 console.log('xCounter++  line 5 result', xOffset);
//                 continue;
//             }
//             if (xOffset === 0 && yOffset === 0) {
//                 xOffset++;
//                 console.log('xCounter++ line 28 result', xOffset);
//                 continue;
//             }
//             let currentCoordinate = grid[derivedY][derivedX];
//             console.log('currentCoordinate', currentCoordinate);
//             if (currentCoordinate === '*') {
//                 neighborCount++;
//                 console.log('neighborCount', neighborCount);
//             }
//             xOffset++;
//             console.log('xCounter++ line 38', xOffset);
//         }
//         xOffset = -1;
//         yOffset++;
//         console.log('yCounter++ line 41', yOffset);
//     }
//     return neighborCount;
// }



export function getNeighborCount(grid: Grid, yCoordinate: number, xCoordinate: number) {
    let neighborCount = 0;

    for (let yOffset = -1; yOffset < 2; yOffset++) {
        console.log('yCounter', yOffset);
        let derivedY = yCoordinate + yOffset;
        console.log('derivedY', derivedY);
        if (derivedY < 0 || derivedY > grid.length) {
            console.log('yCounter++ result', yOffset);
            continue;
        }
        for (let xOffset = -1; xOffset < 2; xOffset++) {
            console.log('xCounter', xOffset);
            let derivedX = xCoordinate + xOffset;
            console.log('derivedX', derivedX);

            if (derivedX < 0 || derivedX > grid[0].length) {
                console.log('xCounter++  line 5 result', xOffset);
                continue;
            }
            if (xOffset === 0 && yOffset === 0) {
                console.log('xCounter++ line 28 result', xOffset);
                continue;
            }
            let currentCoordinate = grid[derivedY][derivedX];
            console.log('currentCoordinate', currentCoordinate);
            if (currentCoordinate === '*') {
                neighborCount++;
                console.log('neighborCount', neighborCount);
            }
            console.log('xCounter++ line 38', xOffset);
        }
        console.log('yCounter++ line 41', yOffset);
    }

    return neighborCount;
}
