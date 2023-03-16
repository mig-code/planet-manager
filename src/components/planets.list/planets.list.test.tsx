import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanetsList } from './planets.list';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('When render PlanetsList component', () => {
    test('It should render the title', () => {
        render(
            <Provider store={store}>
                <PlanetsList></PlanetsList>
            </Provider>
        );

        const title = screen.getByRole('heading', { name: 'Planets List' });
        expect(title).toBeInTheDocument();
    });
});
