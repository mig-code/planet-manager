import { useEffect } from 'react';
import { DetailsModal } from '../../components/details.modal/details.modal';
import { PlanetFormModal } from '../../components/planet.form.modal/planet.form.modal';
import { PlanetsList } from '../../components/planets.list/planets.list';
import { usePlanets } from '../../hooks/use.planets';
import './home.page.scss';

export function HomePage() {
    const { handleLoadAllPlanets } = usePlanets();

    useEffect(() => {
        handleLoadAllPlanets();
    }, [handleLoadAllPlanets]);

    return (
        <>
            <h2 className="home-page__title">
                The ultimate Star Wars app for managing your planets
            </h2>

            <PlanetsList></PlanetsList>
            <DetailsModal></DetailsModal>
            <PlanetFormModal></PlanetFormModal>
        </>
    );
}
