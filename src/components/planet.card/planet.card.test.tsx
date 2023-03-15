import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanetCard } from './planet.card';

describe('When render PlanetCard component', () => {
    test('It should render the planet Name', () => {
        render(<PlanetCard></PlanetCard>);

        const name = screen.getByRole('heading', { name: 'Planet Name' });
        expect(name).toBeInTheDocument();
    });
});
