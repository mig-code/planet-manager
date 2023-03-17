import React from 'react';
import { useDispatch } from 'react-redux';
import { PlanetInfo } from '../../types/planet';
import './planet.card.scss';
import * as ac from '../../reducers/action.creator';

export function PlanetCard({
    planet,
    handleRemovePlanet,
}: {
    planet: PlanetInfo;
    handleRemovePlanet: (id: PlanetInfo['id']) => void;
}) {
    const dispatcher = useDispatch();

    const handleViewDetailsClick = () => {
        dispatcher(ac.setCurrentPlanetActionCreatorPlanets(planet));
        dispatcher(ac.openDetailsModalActionCreatorModals());
    };
    const handleEditClick = () => {
        dispatcher(ac.setCurrentPlanetActionCreatorPlanets(planet));
        dispatcher(ac.openPlanetFormModalActionCreatorModals());
    };

    const handleRemoveClick = () => {
        handleRemovePlanet(planet.id);
    };

    return (
        <div className="planet-card">
            <h2>{planet.name}</h2>

            <div className="planet-card__info">
                <p>Diameter {planet.diameter} km</p>
                <p>Climate {planet.climates.map((climate) => `${climate} `)}</p>
                <p>Terrain {planet.terrains.map((terrain) => `${terrain} `)}</p>
                <p>Population {planet.population}</p>
            </div>
            <div className="planet-card__actions">
                <button onClick={handleViewDetailsClick}>View</button>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleRemoveClick}>Destroy</button>
            </div>
        </div>
    );
}
