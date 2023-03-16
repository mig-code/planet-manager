import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { consoleDebug } from '../utils/debug';

import * as ac from '../reducers/action.creator';

import { getAllPlanets } from '../services/planets.api';
import { PlanetInfo } from '../types/planet';
import {
    getDataLocalStorage,
    persistDataLocalStorage,
} from '../services/local.storage';

export interface UsePlanetsStructure {
    handleLoadAllPlanets: () => Promise<void>;
}

export function usePlanets(): UsePlanetsStructure {
    const dispatcher = useDispatch();
    const allPlanetsStorageKey = 'AllPlanets';

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

    const handleError = (error: Error) => {
        consoleDebug(error.message);
    };

    return {
        handleLoadAllPlanets,
    };
}
