import { mockEmpyPlanetsState } from './../../mocks/store.mock';
import {
    mockPlanet1,
    mockPlanet2,
    mockPlanet1Updated,
} from './../../mocks/planets.mocks';
import { PlanetInfo } from './../../types/planet';

import { actionTypesPlanets } from '../action.types';

import { planetsReducer, PlanetsState } from './planets.reducer';

describe('Given the function planetReducer', () => {
    let action: {
        type: string;
        payload: Array<PlanetInfo> | PlanetInfo['id'] | PlanetInfo;
    };
    let state: PlanetsState;

    const mockPayload = [mockPlanet1];
    const mockEmpyState = mockEmpyPlanetsState;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypesPlanets.loadAll,
                payload: mockPayload,
            };
            state = mockEmpyState;
        });
        test('Then the returned state should be the action payload', () => {
            const result = planetsReducer(state, action);
            expect(result.allPlanets).toEqual(mockPayload);
        });
    });

    describe('When the action is remove', () => {
        beforeEach(() => {
            action = {
                type: actionTypesPlanets.removePlanet,
                payload: mockPlanet1.id,
            };
            state = {
                allPlanets: mockPayload,
                currentPlanetDetails: null,
                currentPlanetEditable: null,
            };
        });
        test('Then the returned state should be empty array', () => {
            const result = planetsReducer(state, action);
            expect(result.allPlanets).toEqual([]);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypesPlanets.addPlanet,
                payload: [mockPlanet1],
            };
            state = mockEmpyState;
        });
        test('Then the returned state should be an array with payload', () => {
            const result = planetsReducer(state, action);
            expect(result.allPlanets).toEqual([mockPayload]);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypesPlanets.updatePlanet,
                payload: mockPlanet1Updated,
            };
            state = {
                allPlanets: mockPayload,
                currentPlanetDetails: null,
                currentPlanetEditable: null,
            };
        });
        describe('When the planet id matches', () => {
            test('it should return the planet with the updated values', () => {
                const result = planetsReducer(state, action);
                expect(result.allPlanets).toEqual([mockPlanet1Updated]);
            });
        });

        describe('When the planet id does not match', () => {
            beforeEach(() => {
                action = {
                    type: actionTypesPlanets.updatePlanet,
                    payload: mockPlanet2,
                };
                state = {
                    allPlanets: mockPayload,
                    currentPlanetDetails: null,
                    currentPlanetEditable: null,
                };
            });
            test('When id doesnt not match its should return the original array', () => {
                const result = planetsReducer(state, action);
                expect(result.allPlanets).toEqual(mockPayload);
            });
        });
    });
});
