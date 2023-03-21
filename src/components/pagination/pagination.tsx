import React, { useEffect } from 'react';

import './pagination.scss';

export function Pagination({
    currentPage,
    totalPages,
    planetsInCurrentPage,
    setCurrentPage,
}: {
    currentPage: number;
    totalPages: number;
    planetsInCurrentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        if (planetsInCurrentPage === 0 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }, [planetsInCurrentPage, currentPage, setCurrentPage]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <button
                    className={'pagination__button'}
                    onClick={handlePreviousPage}
                >
                    {'<'}
                </button>
            )}
            <p className="pagination__pages">{`${currentPage} / ${totalPages}`}</p>

            {currentPage < totalPages && (
                <button
                    className={'pagination__button'}
                    onClick={handleNextPage}
                >
                    {'>'}
                </button>
            )}
        </div>
    );
}
