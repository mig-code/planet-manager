import { createReducer } from '@reduxjs/toolkit';
import { PlanetInfo } from '../../types/planet';

import * as ac from '../action.creator';

export type PlanetsState = {
    allPlanets: Array<PlanetInfo>;
};

const initialState: PlanetsState = {
    allPlanets: [],
};

export const planetsReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadAllActionCreatorPlanets, (state, action) => {
        state.allPlanets = action.payload;
    });

    builder.addDefaultCase((state) => state);
});
