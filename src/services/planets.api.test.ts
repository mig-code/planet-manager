import { getAllPlanets } from './planets.api';
import { mockApiDataResponse, mockPlanet1 } from './../mocks/planets.mocks';
import * as debug from '../utils/debug';

describe('Given Planets Api Service', () => {
    describe('When we use getAllPlanets', () => {
        test('When response is valid we receive a list of Planets', async () => {
            const mockRespone = mockApiDataResponse;

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockRespone),
            });
            const planets = await getAllPlanets();
            expect(global.fetch).toHaveBeenCalled();
            const adapatedPlanets = [mockPlanet1];
            expect(planets).toEqual(adapatedPlanets);
        });
        test('When response is invalid we receive an error', async () => {
            const error = new Error('Testing errors');
            const spyConsole = jest.spyOn(debug, 'consoleDebug');
            global.fetch = jest.fn().mockRejectedValue(error);
            await getAllPlanets();
           
            expect(global.fetch).toHaveBeenCalled();
            expect(spyConsole).toHaveBeenCalledWith(error);
        });
    });
});
