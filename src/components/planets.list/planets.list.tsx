import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { PlanetCard } from '../planet.card/planet.card';
import './planets.list.scss';

export function PlanetsList() {
    const planets = useSelector((state: RootState) => state.planets.allPlanets);
    return (
        <>
            <h1>Planets List</h1>
            <div className="planets-list">
                {planets.map((planet) => (
                    <PlanetCard key={planet.id} planet={planet}></PlanetCard>
                ))}
            </div>
        </>
    );
}
