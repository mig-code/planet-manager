import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { consoleDebug } from '../utils/debug';

import * as ac from '../reducers/action.creator';

import { getAllPlanets } from '../services/planets.api';
import { PlanetInfo } from '../types/planet';
import {
    getDataLocalStorage,
    persistDataLocalStorage,
} from '../services/local.storage';
import { RootState } from '../store/store';

export interface UsePlanetsStructure {
    handleLoadAllPlanets: () => Promise<void>;
    handleRemovePlanet: (id: string) => void;
    handleAddPlanet: (planet: PlanetInfo) => void;
    handleUpdatePlanet: (planet: PlanetInfo) => void;
}

export function usePlanets(): UsePlanetsStructure {
    const dispatcher = useDispatch();
    const allPlanetsStorageKey = 'AllPlanets';
    const allPlanets = useSelector(
        (state: RootState) => state.planets.allPlanets
    );

    const handleLoadAllPlanets = useCallback(async () => {
        const localStoragePlanetData = getDataLocalStorage(
            allPlanetsStorageKey
        ) as Array<PlanetInfo>;

        if (localStoragePlanetData.length > 0) {
            dispatcher(ac.loadAllActionCreatorPlanets(localStoragePlanetData));
            return;
        }
        try {
            const planets = (await getAllPlanets()) as Array<PlanetInfo>;
            dispatcher(ac.loadAllActionCreatorPlanets(planets));

            persistDataLocalStorage(allPlanetsStorageKey, planets);
        } catch (error) {
            handleError(error as Error);
        }
    }, [dispatcher]);

    const handleRemovePlanet = useCallback(
        (id: PlanetInfo['id']) => {
            dispatcher(ac.removePlanetActionCreatorPlanets(id));
            const newPlanets = allPlanets.filter((planet) => planet.id !== id);
            persistDataLocalStorage(allPlanetsStorageKey, newPlanets);
        },
        [dispatcher, allPlanets]
    );

    const handleAddPlanet = useCallback(
        (planet: PlanetInfo) => {
            dispatcher(ac.addPlanetActionCreatorPlanets(planet));
            const newPlanets = [...allPlanets, planet];
            persistDataLocalStorage(allPlanetsStorageKey, newPlanets);
        },
        [dispatcher, allPlanets]
    );

    const handleUpdatePlanet = useCallback(
        (planetPayload: PlanetInfo) => {
            dispatcher(ac.updatePlanetActionCreatorPlanets(planetPayload));
            const newPlanets = allPlanets.map((planet) =>
                planet.id === planetPayload.id ? planetPayload : planet
            );

            persistDataLocalStorage(allPlanetsStorageKey, newPlanets);
        },
        [dispatcher, allPlanets]
    );

    const handleError = (error: Error) => {
        consoleDebug(error.message);
    };

    return {
        handleLoadAllPlanets,
        handleRemovePlanet,
        handleAddPlanet,
        handleUpdatePlanet,
    };
}
