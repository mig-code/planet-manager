import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './home.page';

jest.mock('../../components/planets.list/planets.list', () => {
    return {
        PlanetsList: () => {
            return <div>PlanetsList</div>;
        },
    };
});

describe('When render Home page component', () => {
    test('It should render the PlanetsList component', () => {
        render(<HomePage></HomePage>);

        const planetsListMock = screen.getByText('PlanetsList');
        expect(planetsListMock).toBeInTheDocument();
    });
});
