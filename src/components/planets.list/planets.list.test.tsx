import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanetsList } from './planets.list';

describe('When render PlanetsList component', () => {
    test('It should render the title', () => {
        render(<PlanetsList></PlanetsList>);

        const title = screen.getByRole('heading', { name: 'Planets List' });
        expect(title).toBeInTheDocument();
    });
});
