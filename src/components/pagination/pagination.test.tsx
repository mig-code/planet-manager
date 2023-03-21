import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Pagination } from './pagination';

describe('When render Pagination component', () => {
    let currentPage: number;
    let totalPages: number;
    let planetsInCurrentPage: number;
    let setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    test('It should render the pagination and navigate to next', () => {
        currentPage = 1;
        totalPages = 2;
        planetsInCurrentPage = 1;
        setCurrentPage = jest.fn();
        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                planetsInCurrentPage={planetsInCurrentPage}
                setCurrentPage={setCurrentPage}
            ></Pagination>
        );
        const currentPageElement = screen.getByText('1 / 2');
        expect(currentPageElement).toBeInTheDocument();

        const nextButton = screen.getByText('>');
        expect(nextButton).toBeInTheDocument();

        fireEvent.click(nextButton);
        expect(setCurrentPage).toHaveBeenCalledWith(2);
    });

    test('It should render the pagination and navigate to previous', () => {
        currentPage = 2;
        totalPages = 2;
        planetsInCurrentPage = 1;
        setCurrentPage = jest.fn();
        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                planetsInCurrentPage={planetsInCurrentPage}
                setCurrentPage={setCurrentPage}
            ></Pagination>
        );

        const currentPageElement = screen.getByText('2 / 2');
        expect(currentPageElement).toBeInTheDocument();

        const previousButton = screen.getByText('<');
        expect(previousButton).toBeInTheDocument();

        fireEvent.click(previousButton);

        expect(setCurrentPage).toHaveBeenCalledWith(1);
    });

    test("When there's no planets in the current page, it should navigate to previous page", () => {
        currentPage = 2;
        totalPages = 2;
        planetsInCurrentPage = 0;
        setCurrentPage = jest.fn();
        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                planetsInCurrentPage={planetsInCurrentPage}
                setCurrentPage={setCurrentPage}
            ></Pagination>
        );

        expect(setCurrentPage).toHaveBeenCalledWith(1);
    });
});
