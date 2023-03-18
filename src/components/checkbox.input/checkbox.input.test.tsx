/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { CheckboxInput } from './checkbox.input';

describe('When render CheckboxInput component', () => {
    const mockOnSelectionChange = jest.fn();

    describe('And options are provided', () => {
        beforeEach(() => {
            render(
                <Provider store={store}>
                    <CheckboxInput
                        options={['a', 'b', 'c']}
                        checkedOptions={['a']}
                        onSelectionChange={mockOnSelectionChange}
                    ></CheckboxInput>
                </Provider>
            );
        });
        test('It should render inputs', () => {
            const checkboxA = screen.getByRole('checkbox', { name: 'a' });
            const checkboxB = screen.getByRole('checkbox', { name: 'b' });
            const checkboxC = screen.getByRole('checkbox', { name: 'c' });

            expect(checkboxA).toBeInTheDocument();
            expect(checkboxB).toBeInTheDocument();
            expect(checkboxC).toBeInTheDocument();
        });

        test('It should call onSelectionChange when checkbox is clicked', () => {
            const checkboxB = screen.getByRole('checkbox', { name: 'b' });

            fireEvent.click(checkboxB);

            expect(mockOnSelectionChange).toHaveBeenCalledTimes(1);
            expect(mockOnSelectionChange).toHaveBeenCalledWith(['a', 'b']);
        });

        test('It should call onSelectionChange when checkbox and not select that option', () => {
            const checkboxA = screen.getByRole('checkbox', { name: 'a' });

            fireEvent.click(checkboxA);

            expect(mockOnSelectionChange).toHaveBeenCalledTimes(1);
            expect(mockOnSelectionChange).toHaveBeenCalledWith([]);
        });
    });

    describe('And options are not provided', () => {
        test('It should render no inputs', () => {
            render(
                <Provider store={store}>
                    <CheckboxInput
                        options={[]}
                        checkedOptions={null}
                        onSelectionChange={mockOnSelectionChange}
                    ></CheckboxInput>
                </Provider>
            );

            const checkboxA = screen.queryByRole('checkbox', { name: 'a' });

            expect(checkboxA).not.toBeInTheDocument();
        });
    });
});
