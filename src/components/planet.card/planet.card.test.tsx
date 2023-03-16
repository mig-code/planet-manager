import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanetCard } from './planet.card';
import { mockPlanet1 } from '../../mocks/planets.mocks';

describe('When render PlanetCard component', () => {
    const mockPlanet = mockPlanet1;
    test('It should render the planet Name', () => {
        render(<PlanetCard planet={mockPlanet}></PlanetCard>);

        const name = screen.getByRole('heading', { name: 'Tatooine' });
        expect(name).toBeInTheDocument();
    });
});
