import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PlanetCard } from './planet.card';
import {
    mockPlanet1,
    mockPlanetWithUnknownInfo,
} from '../../mocks/planets.mocks';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('When render PlanetCard component', () => {
    const mockPlanet = mockPlanet1;
    const planetWithUnkonwnInfo = mockPlanetWithUnknownInfo;
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

        const name = screen.getByRole('heading', { name: 'TATOOINE' });
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

        const buttonDetails = screen.getByRole('button', { name: 'Details' });
        fireEvent.click(buttonDetails);

        const detailsModalState = store.getState().modals.isDetailsModalOpen;
        expect(detailsModalState).toBe(true);
    });

    test('button edit  can be clicked', () => {
        render(
            <Provider store={store}>
                <PlanetCard
                    planet={mockPlanet}
                    handleRemovePlanet={mockHandleRemovePlanet}
                ></PlanetCard>
            </Provider>
        );

        const buttonEdit = screen.getByRole('button', { name: 'Edit' });
        fireEvent.click(buttonEdit);

        const editModalState = store.getState().modals.isPlanetFormModalOpen;
        expect(editModalState).toBe(true);
    });

    test("When planet has unknown info, it should render 'Unknown' text", () => {
        render(
            <Provider store={store}>
                <PlanetCard
                    planet={planetWithUnkonwnInfo}
                    handleRemovePlanet={mockHandleRemovePlanet}
                ></PlanetCard>
            </Provider>
        );

        const unknownText = screen.getByText('unknown');
        expect(unknownText).toBeInTheDocument();
    });
});
