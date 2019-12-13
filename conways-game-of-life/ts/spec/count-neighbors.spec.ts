import { getNeighborCount } from "../game-of-life/count-neighbors";

describe('count-neighbors', () => {
    it('should return 0 when there are no living neighbors', () => {
        const grid = [
            ['-', '-', '-'],
            ['-', '*', '-'],
            ['-', '-', '-']
        ]

        const expectedResult: number = 0;

        const result = getNeighborCount(grid, 1, 1);

        expect(result).toEqual(expectedResult);
    });

    it('should return 1 when there is one living neighbor', () => {
        const oneLivingNeighbor = [
            ['-', '-', '-'],
            ['-', '*', '-'],
            ['-', '*', '-']
        ];

        const result = getNeighborCount(oneLivingNeighbor, 1, 1);

        expect(result).toEqual(1);
    })

    it('should return 8 when there is 8 living neighbors', () => {
        const eightLivingNeighbors = [
            ['*', '*', '*'],
            ['*', '*', '*'],
            ['*', '*', '*']
        ];

        const result = getNeighborCount(eightLivingNeighbors, 1, 1);

        expect(result).toEqual(8);
    })

    it('should return 5 when there are 5 living neighbors and dot on the edge', () => {
        const eightLivingNeighbors = [
            ['-', '*', '*'],
            ['-', '*', '*'],
            ['-', '*', '*']
        ];

        const result = getNeighborCount(eightLivingNeighbors, 1, 2);

        expect(result).toEqual(5);
    })

    it('should return 0 when not touching any neighbors but there is a live non-neighbor', () => {
        const eightLivingNeighbors = [
            ['-', '-', '-','*','-'],
            ['-', '-', '-','-','-'],
            ['-', '-', '-','-','-'],
            ['-', '*', '-','-','-'],
            ['-', '-', '-','-','-']
        ];

        const result = getNeighborCount(eightLivingNeighbors, 3, 1);

        expect(result).toEqual(0);
    });
});
