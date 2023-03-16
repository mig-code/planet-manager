import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanetsList } from './planets.list';
import { Provider } from 'react-redux';

import { mockPlanetsStore } from '../../mocks/store.mock';

describe('When render PlanetsList component', () => {
    test('It should render the list of planets', () => {
        const mockStore = mockPlanetsStore;

        render(
            <Provider store={mockStore}>
                <PlanetsList></PlanetsList>
            </Provider>
        );

        const mockPlanetName = screen.getByText('Tatooine');
        expect(mockPlanetName).toBeInTheDocument();
    });
});
