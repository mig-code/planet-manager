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
            <h4 className="planets-list__title">
                Remaining Planets {planets.length}
            </h4>
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
