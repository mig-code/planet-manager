import { actionTypesFilters } from '../action.types';
import {
    FiltersState,
    initialFiltersState,
    filtersReducer,
} from './filters.reducer';

describe('Given the function filtersReducer', () => {
    let action: {
        type: string;
        payload: string;
    };
    let state: FiltersState;

    describe('When the action is setSearchQuery', () => {
        beforeEach(() => {
            action = {
                type: actionTypesFilters.setSearchQuery,
                payload: 'query',
            };
            state = initialFiltersState;
        });
        test('Then state should be the query', () => {
            const result = filtersReducer(state, action);
            expect(result.searchQuery).toEqual('query');
        });
    });

    describe('When the action is setSortBy', () => {
        beforeEach(() => {
            action = {
                type: actionTypesFilters.setSortBy,
                payload: 'latest-added',
            };
            state = initialFiltersState;
        });
        test('Then state should be the sortBy', () => {
            const result = filtersReducer(state, action);
            expect(result.sortBy).toEqual('latest-added');
        });
    });
});
