import { mockPlanet1 } from './planets.mocks';
import {
    planetsReducer,
    PlanetsState,
} from './../reducers/planets.reducer/planets.reducer';
import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { modalsReducer } from '../reducers/modals.reducer/modals.reducer';
import { filtersReducer } from '../reducers/filters.reducers/filters.reducer';

export const mockPlanetsState: PlanetsState = {
    allPlanets: [mockPlanet1],
    currentPlanetDetails: null,
    currentPlanetEditable: null,
};

export const mockEmpyPlanetsState: PlanetsState = {
    allPlanets: [],
    currentPlanetDetails: null,
    currentPlanetEditable: null,
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

// Store for testing modals

export const mockPlanetStateWithCurrentPlanet: PlanetsState = {
    allPlanets: [mockPlanet1],
    currentPlanetDetails: mockPlanet1,
    currentPlanetEditable: mockPlanet1,
};

export const mockPlanetsStateEmptyCurrentPlanet: PlanetsState = {
    allPlanets: [mockPlanet1],
    currentPlanetDetails: null,
    currentPlanetEditable: null,
};

export const preloadedStateDetailsModalTest: Partial<RootState> = {
    planets: mockPlanetStateWithCurrentPlanet,
    modals: {
        isDetailsModalOpen: true,
        isPlanetFormModalOpen: false,
    },
};

export const mockStoreDetailsModalTest = configureStore({
    reducer: {
        planets: planetsReducer,
        modals: modalsReducer,
    },
    preloadedState: preloadedStateDetailsModalTest,
});

export const preloadedStatePlanetFormModalTest: Partial<RootState> = {
    planets: mockPlanetStateWithCurrentPlanet,
    modals: {
        isDetailsModalOpen: false,
        isPlanetFormModalOpen: true,
    },
};

export const mockStorePlanetFormModalTest = configureStore({
    reducer: {
        planets: planetsReducer,
        modals: modalsReducer,
    },
    preloadedState: preloadedStatePlanetFormModalTest,
});

export const preloadedStateEmptyPlanetFormModalTest: Partial<RootState> = {
    planets: mockPlanetsStateEmptyCurrentPlanet,
    modals: {
        isDetailsModalOpen: false,
        isPlanetFormModalOpen: true,
    },
};

export const mockStoreEmptyPlanetFormModalTest = configureStore({
    reducer: {
        planets: planetsReducer,
        modals: modalsReducer,
    },
    preloadedState: preloadedStateEmptyPlanetFormModalTest,
});

// Store for testing list

export const preloadedStateListEmptyFilters: Partial<RootState> = {
    planets: mockPlanetsState,

    filters: {
        searchQuery: '',
        sortBy: '',
    },
};

export const mockStoreListEmptyFilters = configureStore({
    reducer: {
        planets: planetsReducer,
        filters: filtersReducer,
    },
    preloadedState: preloadedStateListEmptyFilters,
});
