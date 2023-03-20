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
        dispatcher(ac.setCurrentPlanetDetailsActionCreatorPlanets(planet));
        dispatcher(ac.openDetailsModalActionCreatorModals());
    };
    const handleEditClick = () => {
        dispatcher(ac.setCurrentPlanetEditableActionCreatorPlanets(planet));
        dispatcher(ac.openPlanetFormModalActionCreatorModals());
    };

    const handleRemoveClick = () => {
        handleRemovePlanet(planet.id);
    };

    return (
        <div className="planet-card">
            <h2 className="planet-card__name">{planet.name.toUpperCase()}</h2>

            <div className="planet-card__info">
                <p>
                    <span className="planet-card__property">Diameter:</span>{' '}
                    {planet.diameter ? planet.diameter : 'unknown'} km
                </p>
                <p className="planet-card__info-truncate">
                    {' '}
                    <span className="planet-card__property">Terrain:</span>{' '}
                    {planet.terrains.map((terrain) => `${terrain} `)}
                </p>
                <p className="planet-card__info-truncate">
                    {' '}
                    <span className="planet-card__property">Climate:</span>{' '}
                    {planet.climates.map((climate) => `${climate} `)}
                </p>

                <p>
                    {' '}
                    <span className="planet-card__property">
                        Population:
                    </span>{' '}
                    {planet.population ? planet.population : 'unknown'}
                </p>
            </div>
            <div className="planet-card__actions">
                <button
                    className="planet-card__button"
                    onClick={handleViewDetailsClick}
                >
                    Details
                </button>
                <button
                    className="planet-card__button"
                    onClick={handleEditClick}
                >
                    Edit
                </button>
                <button
                    className="planet-card__button"
                    onClick={handleRemoveClick}
                >
                    Destroy
                </button>
            </div>
        </div>
    );
}
