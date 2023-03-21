import { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePlanets } from '../../hooks/use.planets';
import { RootState } from '../../store/store';

import { filterPlanetsByQueryAndSort } from '../../utils/planet.filters';
import { Pagination } from '../pagination/pagination';
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

    const [currentPage, setCurrentPage] = useState(1);
    const planetsPerPage = 10;
    const totalpages = Math.ceil(filteredPlanets.length / planetsPerPage);
    const paginatedPlanets = filteredPlanets.slice(
        (currentPage - 1) * planetsPerPage,
        currentPage * planetsPerPage
    );

    return (
        <>
            {filteredPlanets.length === 0 && planets.length > 0 && (
                <p className="planets-list__no-results">
                    No results found for your search
                </p>
            )}

            <div className="planets-list">
                {paginatedPlanets.map((planet) => (
                    <PlanetCard
                        key={planet.id}
                        planet={planet}
                        handleRemovePlanet={handleRemovePlanet}
                    ></PlanetCard>
                ))}
            </div>
            {filteredPlanets.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalpages}
                    planetsInCurrentPage={paginatedPlanets.length}
                    setCurrentPage={setCurrentPage}
                ></Pagination>
            )}
        </>
    );
}
