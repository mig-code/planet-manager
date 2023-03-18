/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from '../store/store';
import { usePlanets } from './use.planets';

import * as debug from '../utils/debug';
import {
    mockPlanet1,
    mockPlanet1Updated,
    mockPlanet2,
} from '../mocks/planets.mocks';

jest.mock('../utils/debug');

const mockPersistDataLocalStorage = jest.fn();
const mockGetDataLocalStorage = jest.fn();

jest.mock('../services/local.storage', () => ({
    persistDataLocalStorage: () => mockPersistDataLocalStorage(),
    getDataLocalStorage: () => mockGetDataLocalStorage(),
}));

const mockGetAllPlanets = jest.fn();
jest.mock('../services/planets.api', () => ({
    getAllPlanets: () => mockGetAllPlanets(),
}));

describe(`Given usePlanets custom hook and render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let buttons: Array<HTMLElement>;

    const mockPlanet = mockPlanet1;
    const mockUpdatedPlanet = mockPlanet1Updated;
    const mockAddedPlanet = mockPlanet2;

    beforeEach(() => {
        TestComponent = () => {
            const {
                handleLoadAllPlanets,
                handleRemovePlanet,
                handleUpdatePlanet,
                handleAddPlanet,
            } = usePlanets();
            const { planets } = useSelector((state: RootState) => state);
            return (
                <>
                    <button onClick={handleLoadAllPlanets}>Load Planets</button>
                    <button onClick={() => handleRemovePlanet(mockPlanet.id)}>
                        Remove
                    </button>
                    <button
                        onClick={() => handleUpdatePlanet(mockUpdatedPlanet)}
                    >
                        Update
                    </button>
                    <button onClick={() => handleAddPlanet(mockAddedPlanet)}>
                        Add
                    </button>

                    <div>{planets.allPlanets[0]?.name}</div>
                </>
            );
        };

        render(
            <Provider store={store}>
                <TestComponent />
            </Provider>
        );
        buttons = screen.getAllByRole('button');
    });

    describe(`When load planets is not successful`, () => {
        const spyConsole = jest.spyOn(debug, 'consoleDebug');
        beforeEach(() => {
            mockGetAllPlanets.mockRejectedValue(new Error('error test'));
            mockGetDataLocalStorage.mockReturnValue(null);
        });
        test('Then its function getAllPlanets should be called and recieved an Error', async () => {
            await act(async () => {
                userEvent.click(buttons[0]);
            });

            await waitFor(() => {
                expect(mockGetAllPlanets).toHaveBeenCalled();
            });

            await waitFor(() => {
                expect(store.getState().planets.allPlanets[0]?.name).toBe(
                    undefined
                );
            });

            await waitFor(() => {
                expect(spyConsole).toHaveBeenCalledWith('error test');
            });
        });
    });

    describe(`When load planets is successful`, () => {
        beforeEach(() => {
            mockGetAllPlanets.mockResolvedValue([
                {
                    name: 'planet name from api',
                },
            ]);
            mockGetDataLocalStorage.mockReturnValue(null);
        });
        test('Then its function getAllPlanets should be called and update the store', async () => {
            await act(async () => {
                userEvent.click(buttons[0]);
            });

            await waitFor(() => {
                expect(mockGetAllPlanets).toHaveBeenCalled();
            });

            await waitFor(() => {
                expect(store.getState().planets.allPlanets[0]?.name).toBe(
                    'planet name from api'
                );
            });

            await waitFor(() => {
                expect(mockPersistDataLocalStorage).toHaveBeenCalled();
            });

            await waitFor(() => {
                const planetName = screen.getByText('planet name from api');
                expect(planetName).toBeInTheDocument();
            });
        });
    });

    describe(`When the data is already in the local storage`, () => {
        beforeEach(() => {
            mockGetDataLocalStorage.mockReturnValue([
                {
                    name: 'planet name from local storage',
                },
            ]);
        });
        test('Then the store its updated with local storage data', async () => {
            await act(async () => {
                userEvent.click(buttons[0]);
            });

            await waitFor(() => {
                expect(mockGetAllPlanets).not.toHaveBeenCalled();
            });

            await waitFor(() => {
                expect(mockGetDataLocalStorage).toHaveBeenCalled();
            });

            await waitFor(() => {
                const planetName = screen.getByText(
                    'planet name from local storage'
                );
                expect(planetName).toBeInTheDocument();
            });
        });
    });
    describe(`When update planet is called`, () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });
        test('if planet exists its updated', async () => {
            mockGetDataLocalStorage.mockReturnValue([mockPlanet]);
            await act(async () => {
                userEvent.click(buttons[0]);
            });

            await act(async () => {
                userEvent.click(buttons[2]);
            });

            await waitFor(() => {
                expect(mockPersistDataLocalStorage).toHaveBeenCalled();
            });

            await waitFor(() => {
                expect(store.getState().planets.allPlanets[0]?.name).toBe(
                    mockUpdatedPlanet.name
                );
            });
        });
        test('if planet does not exists its not updated', async () => {
            mockGetDataLocalStorage.mockReturnValue([mockPlanet2]);
            await act(async () => {
                userEvent.click(buttons[0]);
            });

            await act(async () => {
                userEvent.click(buttons[2]);
            });

            await waitFor(() => {
                expect(mockPersistDataLocalStorage).toHaveBeenCalled();
            });

            await waitFor(() => {
                expect(store.getState().planets.allPlanets[0]?.name).toBe(
                    mockPlanet2.name
                );
            });
        });
    });

    describe(`When add planet is called`, () => {
        beforeEach(() => {
            mockGetDataLocalStorage.mockReturnValue([mockPlanet]);
        });
        test('Then a planet its added', async () => {
            await act(async () => {
                userEvent.click(buttons[0]);
            });

            await act(async () => {
                userEvent.click(buttons[3]);
            });

            await waitFor(() => {
                expect(mockPersistDataLocalStorage).toHaveBeenCalled();
            });

            await waitFor(() => {
                expect(store.getState().planets.allPlanets[1]?.name).toBe(
                    mockPlanet2.name
                );
            });
        });
    });

    describe(`When remove planet is called`, () => {
        beforeEach(() => {
            mockGetDataLocalStorage.mockReturnValue([mockPlanet]);
        });
        test('Then a planet its deleted', async () => {
            await act(async () => {
                userEvent.click(buttons[0]);
            });

            await act(async () => {
                userEvent.click(buttons[1]);
            });

            await waitFor(() => {
                expect(mockPersistDataLocalStorage).toHaveBeenCalled();
            });

            await waitFor(() => {
                expect(store.getState().planets.allPlanets[0]?.name).toBe(
                    undefined
                );
            });
        });
    });
});
