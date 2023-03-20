import { filtersReducer } from './../reducers/filters.reducers/filters.reducer';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { modalsReducer } from '../reducers/modals.reducer/modals.reducer';
import { planetsReducer } from '../reducers/planets.reducer/planets.reducer';

export const store = configureStore({
    reducer: {
        planets: planetsReducer,
        modals: modalsReducer,
        filters: filtersReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
