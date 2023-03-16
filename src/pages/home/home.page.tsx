import { useEffect } from 'react';

import { PlanetsList } from '../../components/planets.list/planets.list';
import { usePlanets } from '../../hooks/usePlanets';

export function HomePage() {
    const { handleLoadAllPlanets } = usePlanets();
    console.log('laod home page');

    useEffect(() => {
        handleLoadAllPlanets();
    }, [handleLoadAllPlanets]);

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
