import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlanetCard } from './planet.card';
import { mockPlanet1 } from '../../mocks/planets.mocks';

describe('When render PlanetCard component', () => {
    const mockPlanet = mockPlanet1;
    const mockHandleRemovePlanet = jest.fn();
    test('It should render the planet Name', () => {
        render(
            <PlanetCard
                planet={mockPlanet}
                handleRemovePlanet={mockHandleRemovePlanet}
            ></PlanetCard>
        );

        const name = screen.getByRole('heading', { name: 'Tatooine' });
        expect(name).toBeInTheDocument();
    });
    test('button remove can be clicked', () => {
        render(
            <PlanetCard
                planet={mockPlanet}
                handleRemovePlanet={mockHandleRemovePlanet}
            ></PlanetCard>
        );

        const button = screen.getByRole('button', { name: 'Destroy' });
        button.click();
        expect(mockHandleRemovePlanet).toHaveBeenCalled();
    });
});
