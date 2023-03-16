import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { planetsReducer } from '../reducers/planets.reducer/planets.reducer';

export const store = configureStore({
    reducer: {
        planets: planetsReducer,
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
