import { createReducer } from '@reduxjs/toolkit';
import { PlanetInfo } from '../../types/planet';

import * as ac from '../action.creator';

export type PlanetsState = {
    allPlanets: Array<PlanetInfo>;
    currentPlanet: PlanetInfo | null;
};

const initialState: PlanetsState = {
    allPlanets: [],
    currentPlanet: null,
};

export const planetsReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadAllActionCreatorPlanets, (state, action) => {
        state.allPlanets = action.payload;
    });
    builder.addCase(ac.removePlanetActionCreatorPlanets, (state, action) => {
        state.allPlanets = state.allPlanets.filter(
            (planet) => planet.id !== action.payload
        );
    });
    builder.addCase(
        ac.setCurrentPlanetActionCreatorPlanets,
        (state, action) => {
            state.currentPlanet = action.payload;
        }
    );

    builder.addDefaultCase((state) => state);
});
