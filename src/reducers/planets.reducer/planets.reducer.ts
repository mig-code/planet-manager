import { createReducer } from '@reduxjs/toolkit';
import { PlanetInfo } from '../../types/planet';

import * as ac from '../action.creator';

export type PlanetsState = {
    allPlanets: Array<PlanetInfo>;
    currentPlanetDetails: PlanetInfo | null;
    currentPlanetEditable: PlanetInfo | null;
};

const initialState: PlanetsState = {
    allPlanets: [],
    currentPlanetDetails: null,
    currentPlanetEditable: null,
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
        ac.setCurrentPlanetDetailsActionCreatorPlanets,
        (state, action) => {
            state.currentPlanetDetails = action.payload;
        }
    );
    builder.addCase(
        ac.setCurrentPlanetEditableActionCreatorPlanets,
        (state, action) => {
            state.currentPlanetEditable = action.payload;
        }
    );

    builder.addDefaultCase((state) => state);
});
