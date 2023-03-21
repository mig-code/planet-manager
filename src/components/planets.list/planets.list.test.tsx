import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanetsList } from './planets.list';
import { Provider } from 'react-redux';

import {
    mockStoreListEmptyFilters,
    mockStoreListWithWrongQuery,
} from '../../mocks/store.mock';

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

    test("When search and there's no results, it should render a message", () => {
        const mockStore = mockStoreListWithWrongQuery;

        render(
            <Provider store={mockStore}>
                <PlanetsList></PlanetsList>
            </Provider>
        );

        const notFoundMessage = screen.getByText(
            'No results found for your search'
        );
        expect(notFoundMessage).toBeInTheDocument();
    });
});
