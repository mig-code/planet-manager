import { createReducer } from '@reduxjs/toolkit';

import * as ac from '../action.creator';

export type ModalsState = {
    isDetailsModalOpen: boolean;
    isPlanetFormModalOpen: boolean;
};

const initialState: ModalsState = {
    isDetailsModalOpen: false,
    isPlanetFormModalOpen: false,
};

export const modalsReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.openDetailsModalActionCreatorModals, (state) => {
        state.isDetailsModalOpen = true;
    });
    builder.addCase(ac.closeDetailsModalActionCreatorModals, (state) => {
        state.isDetailsModalOpen = false;
    });
    builder.addCase(ac.openPlanetFormModalActionCreatorModals, (state) => {
        state.isPlanetFormModalOpen = true;
    });
    builder.addCase(ac.closePlanetFormModalActionCreatorModals, (state) => {
        state.isPlanetFormModalOpen = false;
    });

    builder.addDefaultCase((state) => state);
});
