import { useEffect } from 'react';
import { DetailsModal } from '../../components/details.modal/details.modal';
import { Filters } from '../../components/filters/filters';
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
                The app for managing your planets
            </h2>
            <Filters></Filters>

            <PlanetsList></PlanetsList>
            <DetailsModal></DetailsModal>
            <PlanetFormModal></PlanetFormModal>
        </>
    );
}
