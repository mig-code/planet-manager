import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './home.page';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

jest.mock('../../components/planets.list/planets.list', () => {
    return {
        PlanetsList: () => {
            return <div>PlanetsList</div>;
        },
    };
});

describe('When render Home page component', () => {
    test('It should render the PlanetsList component', () => {
        render(
            <Provider store={store}>
                <HomePage></HomePage>
            </Provider>
        );

        const planetsListMock = screen.getByText('PlanetsList');
        expect(planetsListMock).toBeInTheDocument();
    });
});
