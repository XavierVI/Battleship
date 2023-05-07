import Game from '../src/Game.js';
import { getShipCoords, getCoords } from '../src/lib/coordinates.js';

describe('Generating player ships and coords', () => {
    test('getCoords array size', () => {
        const c1 = getCoords(2, []);
        const c2 = getCoords(3, []);
        const c3 = getCoords(4, []);
        const c4 = getCoords(5, []);
        // expect getCoords to return an array with correct size
        expect( c1.length === 2 
             && c2.length === 3 
             && c3.length === 4 
             && c4.length === 5)
             .toBe(true);
    });

    test('getCoords returns available coordinates', () => {
        const arr = [[1, 4], [6, 6], [7, 8], [1, 1], [4, 8]];
        const size = 4;
        const coords = getCoords(size, arr);
        // coords should not have values from arr
        expect(arr).not.toContain(coords);
    });
});

describe('getShipCoords function', () => {
    // player contains all ships
    test('ship population', () => {
        const playerTest = getShipCoords();
        expect(playerTest).toBeTruthy();
    });

    test('ships coordinates are an array with length 17', () => {
        const playerTest = getShipCoords();
        console.log(playerTest);
        expect(Array.isArray(playerTest) && playerTest.length === 17).toBe(true);
    });
});