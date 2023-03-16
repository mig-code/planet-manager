import { mockPlanet1 } from './../../mocks/planets.mocks';
import { PlanetInfo } from './../../types/planet';

import { actionTypesPlanets } from '../action.types';

import { planetsReducer, PlanetsState } from './planets.reducer';

describe('Given the function planetReducer', () => {
    let action: { type: string; payload: Array<PlanetInfo> };
    let state: PlanetsState;

    const mockPayload = [mockPlanet1];

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypesPlanets.loadAll,
                payload: mockPayload,
            };
            state = {
                allPlanets: [],
            };
        });
        test('Then the returned state should be the action payload', () => {
            const result = planetsReducer(state, action);
            expect(result.allPlanets).toEqual(mockPayload);
        });
    });
});
