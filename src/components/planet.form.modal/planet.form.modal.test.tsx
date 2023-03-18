/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';

import { Provider } from 'react-redux';

import { PlanetFormModal } from './planet.form.modal';
import {
    mockStoreEmptyPlanetFormModalTest,
    mockStorePlanetFormModalTest,
} from '../../mocks/store.mock';
import userEvent from '@testing-library/user-event';

describe('When render PlanetFormModal', () => {
    describe('isPlanetFormModalOpen is true with a Planet', () => {
        const mockStoreWithPlanet = mockStorePlanetFormModalTest;
        beforeEach(() => {
            render(
                <Provider store={mockStoreWithPlanet}>
                    <PlanetFormModal></PlanetFormModal>
                </Provider>
            );
        });

        test('Edit Mode should be on', () => {
            const editMode = screen.getByText('Edit');
            expect(editMode).toBeInTheDocument();
        });

        test('Form can be updated', async () => {
            const planetNameInput = screen.getByTestId('planetNameInput');
            const submitButton = screen.getByRole('button', {
                name: 'Edit',
            });

            expect(planetNameInput).toBeInTheDocument();

            act(() => {
                userEvent.type(planetNameInput, 'New Name');
            });

            await waitFor(() => {
                expect(planetNameInput).toHaveValue('TatooineNew Name');
            });

            fireEvent.click(submitButton);

            const isFormModalOpen =
                mockStoreWithPlanet.getState().modals.isPlanetFormModalOpen;
            expect(isFormModalOpen).toBe(false);
        });
    });
    describe('isPlanetFormModalOpen is true without a Planet', () => {
        const mockStoreWithoutPlanet = mockStoreEmptyPlanetFormModalTest;
        beforeEach(() => {
            render(
                <Provider store={mockStoreWithoutPlanet}>
                    <PlanetFormModal></PlanetFormModal>
                </Provider>
            );
        });

        test('Add Mode should be on', () => {
            const addMode = screen.getByText('Add');
            expect(addMode).toBeInTheDocument();
        });

        test('Form can be updated and submit', async () => {
            const mockCheckBoxTerrainDataTestID = 'forests-checkbox';
            const mockCheckBoxClimateDataTestID = 'arid-checkbox';
            const mockCheckBoxResidentDataTestID = 'C-3PO-checkbox';

            const planetNameInput = screen.getByTestId('planetNameInput');
            const planetDiameterInput = screen.getByTestId(
                'planetDiameterInput'
            );
            const planetPopulationInput = screen.getByTestId(
                'planetPopulationInput'
            );
            const planetTerrainCheckBox = screen.getByTestId(
                mockCheckBoxTerrainDataTestID
            );
            const planetClimateCheckBox = screen.getByTestId(
                mockCheckBoxClimateDataTestID
            );
            const planetResidentCheckBox = screen.getByTestId(
                mockCheckBoxResidentDataTestID
            );

            act(() => {
                userEvent.type(planetNameInput, 'New Name');
            });

            await waitFor(() => {
                expect(planetNameInput).toHaveValue('New Name');
            });

            act(() => {
                userEvent.type(planetDiameterInput, '100');
            });

            await waitFor(() => {
                expect(planetDiameterInput).toHaveValue(100);
            });

            act(() => {
                userEvent.type(planetPopulationInput, '100');
            });

            await waitFor(() => {
                expect(planetPopulationInput).toHaveValue(100);
            });

            fireEvent.click(planetTerrainCheckBox);
            fireEvent.click(planetClimateCheckBox);
            fireEvent.click(planetResidentCheckBox);

            const submitButton = screen.getByRole('button', {
                name: 'Add',
            });

            fireEvent.click(submitButton);

            const isFormModalOpen =
                mockStoreWithoutPlanet.getState().modals.isPlanetFormModalOpen;
            expect(isFormModalOpen).toBe(false);
        });
    });
});
