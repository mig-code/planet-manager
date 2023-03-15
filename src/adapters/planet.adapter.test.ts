import { mockApiDataResponse, mockPlanet1 } from '../mocks/planets.mocks';
import { ApiDataResponse, planetsAdapter } from './planet.adapter';

describe('Given PlanetsAdapter function', () => {
    test('Whent its called, Then it should return an adapted array of planets', () => {
        const mockRespone: ApiDataResponse = mockApiDataResponse;

        const mockAdaptedResponse = [mockPlanet1];

        const result = planetsAdapter(mockRespone);

        expect(result).toEqual(mockAdaptedResponse);
    });
});
