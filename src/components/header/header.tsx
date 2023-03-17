import React from 'react';
import { useDispatch } from 'react-redux';
import * as ac from '../../reducers/action.creator';
import './header.scss';

export function Header() {
    const dispatcher = useDispatch();

    const handleAddClick = () => {
        dispatcher(ac.setCurrentPlanetActionCreatorPlanets(null));
        dispatcher(ac.openPlanetFormModalActionCreatorModals());
    };
    return (
        <header className="app-header">
            <h1>Planet Manager</h1>
            <button onClick={handleAddClick}>Add your Planet</button>
        </header>
    );
}
