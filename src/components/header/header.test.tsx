import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('When render Header component', () => {
    test('It should render the title', () => {
        render(<Header></Header>);

        const title = screen.getByRole('heading', { name: 'Planet Manager' });
        expect(title).toBeInTheDocument();
    });
});
