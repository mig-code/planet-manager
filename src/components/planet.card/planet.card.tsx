import React from 'react';
import { PlanetInfo } from '../../types/planet';
import './planet.card.scss';
export function PlanetCard({
    planet,
    handleRemovePlanet,
}: {
    planet: PlanetInfo;
    handleRemovePlanet: (id: PlanetInfo['id']) => void;
}) {
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
                <button>View</button>
                <button>Edit</button>
                <button onClick={handleRemoveClick}>Destroy</button>
            </div>
        </div>
    );
}
