import { useSelector } from 'react-redux';
import { usePlanets } from '../../hooks/use.planets';
import { RootState } from '../../store/store';
import { PlanetCard } from '../planet.card/planet.card';
import './planets.list.scss';

export function PlanetsList() {
    const planets = useSelector((state: RootState) => state.planets.allPlanets);
    const { handleRemovePlanet } = usePlanets();

    return (
        <>
            <h1>Planets List</h1>
            <p>Remaining Planets {planets.length}</p>
            <div className="planets-list">
                {planets.map((planet) => (
                    <PlanetCard
                        key={planet.id}
                        planet={planet}
                        handleRemovePlanet={handleRemovePlanet}
                    ></PlanetCard>
                ))}
            </div>
        </>
    );
}
