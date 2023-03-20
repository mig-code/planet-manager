/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';

import { Provider } from 'react-redux';

import { mockStoreListEmptyFilters } from '../../mocks/store.mock';
import userEvent from '@testing-library/user-event';
import { Filters } from './filters';

describe('When render Filters component', () => {
    describe('Using search text input', () => {
        const mockStore = mockStoreListEmptyFilters;
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Filters></Filters>
                </Provider>
            );
        });

        test('Search text input is rendered', () => {
            const searchInput = screen.getByPlaceholderText('Find your planet');
            expect(searchInput).toBeInTheDocument();
        });

        test('User can type search query should be updated', async () => {
            const searchInput = screen.getByPlaceholderText('Find your planet');

            act(() => {
                userEvent.type(searchInput, 'Tatooine');
            });

            await waitFor(() => {
                expect(searchInput).toHaveValue('Tatooine');
            });

            const searchQuery = mockStore.getState().filters.searchQuery;
            expect(searchQuery).toBe('Tatooine');
        });
    });

    describe('Using sort by select input', () => {
        const mockStore = mockStoreListEmptyFilters;
        beforeEach(() => {
            render(
                <Provider store={mockStore}>
                    <Filters></Filters>
                </Provider>
            );
        });

        test('Sort by select input is rendered', () => {
            const selectInput = screen.getByPlaceholderText('Sort by');
            expect(selectInput).toBeInTheDocument();
        });

        test('User can select sort by should be updated', async () => {
            const selectInput = screen.getByPlaceholderText('Sort by');

            act(() => {
                userEvent.selectOptions(selectInput, 'diameter-largest');
            });

            await waitFor(() => {
                expect(selectInput).toHaveValue('diameter-largest');
            });

            const sortBy = mockStore.getState().filters.sortBy;
            expect(sortBy).toBe('diameter-largest');
        });
    });
});
