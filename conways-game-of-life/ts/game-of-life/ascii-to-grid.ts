import { Grid } from './grid';

export function asciiToGrid(asciiWorld: string) {
    const worldGrid: Grid = [];

    const lines = asciiWorld.split('\n');

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex];
        worldGrid.push([]);

        for (let cellIndex = 0; cellIndex < line.length; cellIndex++) {
            const cell = line[cellIndex];
            worldGrid[lineIndex].push(cell);
        }
    }

    return worldGrid;
}
