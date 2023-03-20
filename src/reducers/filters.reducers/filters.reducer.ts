import { createReducer } from '@reduxjs/toolkit';

import * as ac from '../action.creator';

export type FiltersState = {
    searchQuery: string;
    sortBy: string;
};

const initialState: FiltersState = {
    searchQuery: 'mig',
    sortBy: 'latest-added',
};

export const filtersReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.setSearchQueryActionCreatorFilters, (state, action) => {
        state.searchQuery = action.payload;
    });
    builder.addCase(ac.setSortByActionCreatorFilters, (state, action) => {
        state.sortBy = action.payload;
    });

    builder.addDefaultCase((state) => state);
});
