import { useCallback, useEffect, useState } from 'react';
import { PlanetsList } from '../../components/planets.list/planets.list';
import { getAllPlanets } from '../../services/planets.api';
import { PlanetInfo } from '../../types/planet';

export function HomePage() {
    const [planets, setPlanets] = useState<Array<PlanetInfo>>([]);
    console.log(planets);

    const handleLoadPlanets = useCallback(async () => {
        const planets = await getAllPlanets();
        if (planets) setPlanets(planets);
    }, []);

    useEffect(() => {
        handleLoadPlanets();
    }, [handleLoadPlanets]);

    return (
        <>
            <p>
                The ultimate Star Wars app for managing your own planet,
                building infrastructure, and defending against invaders.
            </p>
            <PlanetsList></PlanetsList>
        </>
    );
}
