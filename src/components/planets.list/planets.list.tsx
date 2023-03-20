import { useSelector } from 'react-redux';
import { usePlanets } from '../../hooks/use.planets';
import { RootState } from '../../store/store';

import { filterPlanetsByQueryAndSort } from '../../utils/planet.filters';
import { PlanetCard } from '../planet.card/planet.card';
import './planets.list.scss';

export function PlanetsList() {
    const planets = useSelector((state: RootState) => state.planets.allPlanets);
    const filters = useSelector((state: RootState) => state.filters);
    const { handleRemovePlanet } = usePlanets();

    const filteredPlanets = filterPlanetsByQueryAndSort(
        planets,
        filters.searchQuery,
        filters.sortBy
    );

    return (
        <>
            <h4 className="planets-list__title">
                Remaining Planets {planets.length}
            </h4>
            <div className="planets-list">
                {filteredPlanets.map((planet) => (
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
