import { planetsAdapter } from './../adapters/planet.adapter';
import { consoleDebug } from '../utils/debug';

const url = process.env.REACT_APP_PLANETS_API_URL as string;

const allPlanetsQuery = `query {
  allPlanets {
  planets {
  population
  terrains
  id
  diameter
  climates
  name
  residentConnection {
  residents {
  name
  }
  }
  }
  }
}`;

export const getAllPlanets = async () => {
    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: allPlanetsQuery }),
        });
        const result = await resp.json();
        return planetsAdapter(result);
    } catch (error) {
        consoleDebug(error);
    }
};
