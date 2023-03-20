import React from 'react';
import { useDispatch } from 'react-redux';
import * as ac from '../../reducers/action.creator';
import './header.scss';

export function Header() {
    const dispatcher = useDispatch();

    const handleAddClick = () => {
        dispatcher(ac.setCurrentPlanetEditableActionCreatorPlanets(null));
        dispatcher(ac.openPlanetFormModalActionCreatorModals());
    };
    return (
        <header className="app-header">
            <h1 className="app-header__title">Planet Manager System</h1>
            <button className="app-header__button" onClick={handleAddClick}>
                Add your Planet
            </button>
        </header>
    );
}
