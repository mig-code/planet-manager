import { PlanetInfo } from './../types/planet';
import { createAction } from '@reduxjs/toolkit';
import { actionTypesPlanets } from './action.types';

export const loadAllActionCreatorPlanets = createAction<Array<PlanetInfo>>(
    actionTypesPlanets.loadAll
);
