import React from 'react';
import './planet.card.scss';
export function PlanetCard() {
    return (
        <div className="planet-card">
            <h2>Planet Name</h2>

            <div className="planet-card__info">
                <p>Diameter: 1000km</p>
                <p>Population: 100000</p>
                <p>Climate: Hot</p>
                <p>Terrain: Desert</p>
            </div>
        </div>
    );
}
