import { PlanetInfo } from '../types/planet';

const filteredByQuery = (planets: PlanetInfo[], query: string) => {
    return planets.filter((planet) => {
        return planet.name.toLowerCase().includes(query.toLowerCase());
    });
};

const filteredBySort = (filteredByQuery: PlanetInfo[], filter: string) => {
    switch (filter) {
        case 'latest-added':
            return filteredByQuery.slice(0).reverse();
        case 'diameter-largest':
            return filteredByQuery.sort((a, b) => {
                return b.diameter - a.diameter;
            });
        case 'population-more':
            return filteredByQuery.sort((a, b) => {
                return b.population - a.population;
            });
        default:
            return filteredByQuery;
    }
};

export const filterPlanetsByQueryAndSort = (
    planets: PlanetInfo[],
    searchQuery: string,
    filters: string
) => {
    const filteByQuery = filteredByQuery(planets, searchQuery);

    return filteredBySort(filteByQuery, filters);
};
