import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('When render Footer component', () => {
    test('It should render the creator link', () => {
        render(<Footer></Footer>);
        const link = screen.getByRole('link', {
            name: /Miguel PGómez/i,
        });
        expect(link).toBeInTheDocument();
    });
});
