import { useEffect } from 'react';
import { Modal } from '../../components/details.modal/details.modal';

import { PlanetsList } from '../../components/planets.list/planets.list';
import { usePlanets } from '../../hooks/use.planets';

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
            <Modal></Modal>
        </>
    );
}
