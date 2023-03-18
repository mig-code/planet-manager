import { actionTypesModals } from '../action.types';

import { modalsReducer, ModalsState } from './modals.reducer';

describe('Given the function modalsReducer', () => {
    let action: { type: string };
    let state: ModalsState;

    describe('When the action is openDetailsModal', () => {
        beforeEach(() => {
            action = {
                type: actionTypesModals.openDetailsModal,
            };
            state = {
                isDetailsModalOpen: false,
                isPlanetFormModalOpen: false,
            };
        });
        test('Then the returned state should be true', () => {
            const result = modalsReducer(state, action);
            expect(result.isDetailsModalOpen).toEqual(true);
        });
    });

    describe('When the action is closeDetailsModal', () => {
        beforeEach(() => {
            action = {
                type: actionTypesModals.closeDetailsModal,
            };
            state = {
                isDetailsModalOpen: true,
                isPlanetFormModalOpen: false,
            };
        });
        test('Then the returned state should be false', () => {
            const result = modalsReducer(state, action);
            expect(result.isDetailsModalOpen).toEqual(false);
        });
    });
});
