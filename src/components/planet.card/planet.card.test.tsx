import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PlanetCard } from './planet.card';
import { mockPlanet1 } from '../../mocks/planets.mocks';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('When render PlanetCard component', () => {
    const mockPlanet = mockPlanet1;
    const mockHandleRemovePlanet = jest.fn();
    test('It should render the planet Name', () => {
        render(
            <Provider store={store}>
                <PlanetCard
                    planet={mockPlanet}
                    handleRemovePlanet={mockHandleRemovePlanet}
                ></PlanetCard>
            </Provider>
        );

        const name = screen.getByRole('heading', { name: 'Tatooine' });
        expect(name).toBeInTheDocument();
    });
    test('button remove can be clicked', () => {
        render(
            <Provider store={store}>
                <PlanetCard
                    planet={mockPlanet}
                    handleRemovePlanet={mockHandleRemovePlanet}
                ></PlanetCard>
            </Provider>
        );

        const buttonRemove = screen.getByRole('button', { name: 'Destroy' });
        fireEvent.click(buttonRemove);
        expect(mockHandleRemovePlanet).toHaveBeenCalled();
    });

    test('button view can be clicked', () => {
        render(
            <Provider store={store}>
                <PlanetCard
                    planet={mockPlanet}
                    handleRemovePlanet={mockHandleRemovePlanet}
                ></PlanetCard>
            </Provider>
        );

        const buttonDetails = screen.getByRole('button', { name: 'View' });
        fireEvent.click(buttonDetails);

        const detailsModalState = store.getState().modals.isDetailsModalOpen;
        expect(detailsModalState).toBe(true);
    });
});
