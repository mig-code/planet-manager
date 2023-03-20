import { mockPlanets } from '../mocks/planets.mocks';
import { filterPlanetsByQueryAndSort } from './planet.filters';

describe('Given filterPlanetsByQueryAndSort function', () => {
    const planets = mockPlanets;
    const empytQuery = '';
    const query = 'tatooine';
    const sortByLastAdded = 'latest-added';
    const sortByLargestDiameter = 'diameter-largest';
    const sortByMorePopulated = 'population-more';

    describe('When is invoked with a query and a sort', () => {
        test('with empty query and sort by last added, then should return an array of planets sorted by last added', () => {
            const result = filterPlanetsByQueryAndSort(
                planets,
                empytQuery,
                sortByLastAdded
            );
            expect(result).toEqual([planets[1], planets[0]]);
        });

        test('with query and sort by last added, then should return an array of planets filtered by query and sorted by last added', () => {
            const result = filterPlanetsByQueryAndSort(
                planets,
                query,
                sortByLastAdded
            );
            expect(result).toEqual([planets[0]]);
        });

        test('with empty query and sort by largest diameter, then should return an array of planets sorted by largest diameter', () => {
            const result = filterPlanetsByQueryAndSort(
                planets,
                empytQuery,
                sortByLargestDiameter
            );
            expect(result).toEqual([planets[1], planets[0]]);
        });

        test('with empty query and sort by more populated, then should return an array of planets sorted by more populated', () => {
            const result = filterPlanetsByQueryAndSort(
                planets,
                empytQuery,
                sortByMorePopulated
            );
            expect(result).toEqual([planets[1], planets[0]]);
        });
        test("with wrong sort, then should return an array of filtered by query planets and don't sort", () => {
            const result = filterPlanetsByQueryAndSort(
                planets,
                empytQuery,
                'wrong-sort'
            );
            expect(result).toEqual([planets[0], planets[1]]);
        });
    });
});
