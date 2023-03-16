import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { consoleDebug } from '../utils/debug';

import * as ac from '../reducers/action.creator';

import { getAllPlanets } from '../services/planets.api';
import { PlanetInfo } from '../types/planet';

export interface UsePlanetsStructure {
    handleLoadAllPlanets: () => Promise<void>;
}

export function usePlanets(): UsePlanetsStructure {
    const dispatcher = useDispatch();

    const handleLoadAllPlanets = useCallback(async () => {
        try {
            const planets = (await getAllPlanets()) as Array<PlanetInfo>;
            dispatcher(ac.loadAllActionCreatorPlanets(planets));
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
