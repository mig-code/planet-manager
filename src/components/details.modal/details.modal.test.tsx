import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { DetailsModal } from './details.modal';
import { mockStoreDetailsModalTest } from '../../mocks/store.mock';

describe('When render DetailsModal component', () => {
    const mockStore = mockStoreDetailsModalTest;

    test('It should render the current planet Name and habitants', () => {
        render(
            <Provider store={mockStore}>
                <DetailsModal></DetailsModal>
            </Provider>
        );

        const name = screen.getByRole('heading', { name: 'Tatooine' });
        expect(name).toBeInTheDocument();

        const habitants = screen.getByText(
            'Luke Skywalker C-3PO R2-D2 Darth Vader'
        );
        expect(habitants).toBeInTheDocument();
    });

    test('button close can be clicked', () => {
        render(
            <Provider store={mockStore}>
                <DetailsModal></DetailsModal>
            </Provider>
        );

        const buttonClose = screen.getAllByRole('button');
        fireEvent.click(buttonClose[0]);

        const detailsModalState = store.getState().modals.isDetailsModalOpen;
        expect(detailsModalState).toBe(false);
    });
});
