import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanetsList } from './planets.list';
import { Provider } from 'react-redux';

import { mockStoreListEmptyFilters } from '../../mocks/store.mock';

describe('When render PlanetsList component', () => {
    test('It should render the list of planets', () => {
        const mockStore = mockStoreListEmptyFilters;

        render(
            <Provider store={mockStore}>
                <PlanetsList></PlanetsList>
            </Provider>
        );

        const mockPlanetName = screen.getByText('TATOOINE');
        expect(mockPlanetName).toBeInTheDocument();
    });
});
