import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './home.page';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { usePlanets } from '../../hooks/use.planets';

jest.mock('../../hooks/use.planets');

describe('When render Home page component', () => {
    test('It should render the PlanetsList component', () => {
        const mockHandleLoadAllPlanets = jest.fn();
        (usePlanets as jest.Mock).mockReturnValue({
            handleLoadAllPlanets: mockHandleLoadAllPlanets,
        });
        render(
            <Provider store={store}>
                <HomePage></HomePage>
            </Provider>
        );

        const planetsListTitle = screen.getByText('Remaining Planets 0');
        expect(planetsListTitle).toBeInTheDocument();

        expect(mockHandleLoadAllPlanets).toHaveBeenCalled();
    });
});
