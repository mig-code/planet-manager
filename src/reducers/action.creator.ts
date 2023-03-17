import { PlanetInfo } from './../types/planet';
import { createAction } from '@reduxjs/toolkit';
import { actionTypesPlanets, actionTypesModals } from './action.types';

// Planets reducer action creators

export const loadAllActionCreatorPlanets = createAction<Array<PlanetInfo>>(
    actionTypesPlanets.loadAll
);

export const removePlanetActionCreatorPlanets = createAction<PlanetInfo['id']>(
    actionTypesPlanets.removePlanet
);

export const setCurrentPlanetActionCreatorPlanets =
    createAction<PlanetInfo | null>(actionTypesPlanets.setCurrentPlanet);

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
