/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './layout';

jest.mock('../header/header', () => {
    return {
        Header: () => {
            return <div>Header</div>;
        },
    };
});

jest.mock('../footer/footer', () => {
    return {
        Footer: () => {
            return <div>Footer</div>;
        },
    };
});

jest.mock('../../pages/home/home.page', () => {
    return {
        HomePage: () => {
            return <div>HomePage</div>;
        },
    };
});

describe('When render Layout Component', () => {
    beforeEach(() => {
        render(<Layout></Layout>);
    });

    test('It should render the Header', () => {
        const headerMock = screen.getByText('Header');
        expect(headerMock).toBeInTheDocument();
    });
    test('It should render the HomePage', () => {
        const homePageMock = screen.getByText('HomePage');
        expect(homePageMock).toBeInTheDocument();
    });

    test('It should render the Footer', () => {
        const footerMock = screen.getByText('Footer');
        expect(footerMock).toBeInTheDocument();
    });
});
