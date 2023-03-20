import { ApiPlanetInfo, ApiDataResponse } from './../adapters/planet.adapter';
import { PlanetInfo } from '../types/planet';
export const mockPlanet1: PlanetInfo = {
    id: '1',
    name: 'Tatooine',
    population: 200000,
    terrains: ['desert'],
    climates: ['arid'],
    diameter: 10465,
    residents: ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader'],
};

export const mockPlanet1Updated: PlanetInfo = {
    id: '1',
    name: 'Tatooine Updated',
    population: 200000,
    terrains: ['desert'],
    climates: ['arid'],
    diameter: 10465,
    residents: ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader'],
};
export const mockPlanet2: PlanetInfo = {
    id: '2',
    name: 'Alderaan',
    population: 2000000000,
    terrains: ['grasslands', 'mountains'],
    climates: ['temperate'],
    diameter: 12500,
    residents: ['Leia Organa', 'Bail Prestor Organa', 'Raymus Antilles'],
};
export const mockPlanetWithUnknownInfo: PlanetInfo = {
    id: '3',
    name: 'Unknown',
    population: 0,
    terrains: [],
    climates: [],
    diameter: 0,
    residents: [],
};
export const mockPlanets: Array<PlanetInfo> = [mockPlanet1, mockPlanet2];

export const mockApiPlanet1: ApiPlanetInfo = {
    id: '1',
    name: 'Tatooine',
    population: 200000,
    terrains: ['desert'],
    climates: ['arid'],
    diameter: 10465,
    residentConnection: {
        residents: [
            { name: 'Luke Skywalker' },
            { name: 'C-3PO' },
            { name: 'R2-D2' },
            { name: 'Darth Vader' },
        ],
    },
};

export const mockApiDataResponse: ApiDataResponse = {
    data: {
        allPlanets: {
            planets: [mockApiPlanet1],
        },
    },
};
