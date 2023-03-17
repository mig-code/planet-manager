import { createReducer } from '@reduxjs/toolkit';

import * as ac from '../action.creator';

export type ModalsState = {
    isDetailsModalOpen: boolean;
};

const initialState: ModalsState = {
    isDetailsModalOpen: false,
};

export const modalsReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.openDetailsModalActionCreatorModals, (state) => {
        state.isDetailsModalOpen = true;
    });
    builder.addCase(ac.closeDetailsModalActionCreatorModals, (state) => {
        state.isDetailsModalOpen = false;
    });

    builder.addDefaultCase((state) => state);
});
