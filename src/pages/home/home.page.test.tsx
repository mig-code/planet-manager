import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './home.page';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('When render Home page component', () => {
    test('It should render the HomePage title', () => {
        render(
            <Provider store={store}>
                <HomePage></HomePage>
            </Provider>
        );

        const title = screen.getByText('The app for managing your planets');

        expect(title).toBeInTheDocument();
    });
});
