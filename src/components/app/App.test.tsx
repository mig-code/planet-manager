import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('When render App component', () => {
    test('It should rednder the title', () => {
        render(<App></App>);

        const title = screen.getByText('Planet Manager');
        expect(title).toBeInTheDocument();
    });
});
