import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('../layout/layout', () => {
    return {
        Layout: () => {
            return <div>Layout</div>;
        },
    };
});
describe('When render App component', () => {
    test('It should render the Layout component', () => {
        render(<App></App>);

        const layoutMock = screen.getByText('Layout');
        expect(layoutMock).toBeInTheDocument();
    });
});
