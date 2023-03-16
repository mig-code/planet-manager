import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './home.page';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { mockPlanets } from '../../mocks/planets.mocks';
import { getAllPlanets } from '../../services/planets.api';

// mock the getAllPlanets function

jest.mock('../../services/planets.api', () => ({
    getAllPlanets: jest.fn(),
}));
describe('When render Home page component', () => {
    test('It should render the PlanetsList component', () => {
        render(
            <Provider store={store}>
                <HomePage></HomePage>
            </Provider>
        );

        const planetsListMock = screen.getByText('Planets List');
        expect(planetsListMock).toBeInTheDocument();
    });
    test('When there are planets it should update the store', () => {
        (getAllPlanets as jest.Mock).mockResolvedValueOnce(mockPlanets);
        render(
            <Provider store={store}>
                <HomePage></HomePage>
            </Provider>
        );

        const planetsListMock = screen.getByText('Planets List');
        expect(planetsListMock).toBeInTheDocument();
    });
});
