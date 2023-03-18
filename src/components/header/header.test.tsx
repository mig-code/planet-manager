import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './header';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('When render Header component', () => {
    test('It should render the title', () => {
        render(
            <Provider store={store}>
                <Header></Header>
            </Provider>
        );

        const title = screen.getByRole('heading', { name: 'Planet Manager' });
        expect(title).toBeInTheDocument();
    });

    test('It should render the button and can be clicked', () => {
        render(
            <Provider store={store}>
                <Header></Header>
            </Provider>
        );

        const button = screen.getByRole('button', { name: 'Add your Planet' });
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        const currentPlanet = store.getState().planets.currentPlanetEditable;
        expect(currentPlanet).toBeNull();

        const isPlanetFormModalOpen =
            store.getState().modals.isPlanetFormModalOpen;
        expect(isPlanetFormModalOpen).toBe(true);
    });
});
