import { PlanetCard } from '../planet.card/planet.card';
import './planets.list.scss';

export function PlanetsList() {
    return (
        <>
            <h1>Planets List</h1>
            <div className="planets-list">
                <PlanetCard></PlanetCard>
                <PlanetCard></PlanetCard>
                <PlanetCard></PlanetCard>
                <PlanetCard></PlanetCard>
                <PlanetCard></PlanetCard>
                <PlanetCard></PlanetCard>
            </div>
        </>
    );
}
