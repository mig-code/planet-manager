import { mockPlanet1 } from './planets.mocks';
import {
    planetsReducer,
    PlanetsState,
} from './../reducers/planets.reducer/planets.reducer';
import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export const mockPlanetsState: PlanetsState = {
    allPlanets: [mockPlanet1],
    currentPlanet: null,
};
export const preloadedPlanetsState: Partial<RootState> = {
    planets: mockPlanetsState,
};

export const mockPlanetsStore = configureStore({
    reducer: {
        planets: planetsReducer,
    },
    preloadedState: preloadedPlanetsState,
});
