import { PlanetInfo } from '../types/planet';

export type ApiDataResponse = {
    data: {
        allPlanets: {
            planets: Array<ApiPlanetInfo>;
        };
    };
};
export type ApiPlanetInfo = {
    id: string;
    name: string;
    population: string;
    terrains: Array<string>;
    climates: Array<string>;
    diameter: number;
    residentConnection: {
        residents: {
            name: string;
        }[];
    };
};

export const planetsAdapter = (
    response: ApiDataResponse
): Array<PlanetInfo> => {
    const planets: Array<PlanetInfo> = response.data.allPlanets.planets.map(
        (planet: ApiPlanetInfo) => {
            return {
                id: planet.id,
                name: planet.name,
                population: planet.population,
                terrains: planet.terrains,
                climates: planet.climates,
                diameter: planet.diameter,
                residents: planet.residentConnection.residents.map(
                    (resident) => resident.name
                ),
            };
        }
    );

    return planets;
};
