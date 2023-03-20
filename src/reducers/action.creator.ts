import { PlanetInfo } from './../types/planet';
import { createAction } from '@reduxjs/toolkit';
import {
    actionTypesPlanets,
    actionTypesModals,
    actionTypesFilters,
} from './action.types';

// Planets reducer action creators

export const loadAllActionCreatorPlanets = createAction<Array<PlanetInfo>>(
    actionTypesPlanets.loadAll
);

export const removePlanetActionCreatorPlanets = createAction<PlanetInfo['id']>(
    actionTypesPlanets.removePlanet
);

export const addPlanetActionCreatorPlanets = createAction<PlanetInfo>(
    actionTypesPlanets.addPlanet
);

export const updatePlanetActionCreatorPlanets = createAction<PlanetInfo>(
    actionTypesPlanets.updatePlanet
);

export const setCurrentPlanetDetailsActionCreatorPlanets =
    createAction<PlanetInfo | null>(actionTypesPlanets.setCurrentDetailsPlanet);

export const setCurrentPlanetEditableActionCreatorPlanets =
    createAction<PlanetInfo | null>(
        actionTypesPlanets.setCurrentEditablePlanet
    );

// Modals reducer action creators

export const openDetailsModalActionCreatorModals = createAction(
    actionTypesModals.openDetailsModal
);

export const closeDetailsModalActionCreatorModals = createAction(
    actionTypesModals.closeDetailsModal
);

export const openPlanetFormModalActionCreatorModals = createAction(
    actionTypesModals.openPlanetFormModal
);

export const closePlanetFormModalActionCreatorModals = createAction(
    actionTypesModals.closePlanetFormModal
);

// Filters reducer action creators

export const setSearchQueryActionCreatorFilters = createAction<string>(
    actionTypesFilters.setSearchQuery
);

export const setSortByActionCreatorFilters = createAction<string>(
    actionTypesFilters.setSortBy
);
