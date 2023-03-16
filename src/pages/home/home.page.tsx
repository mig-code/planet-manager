import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import * as ac from '../../../src/reducers/action.creator';
import { getAllPlanets } from '../../services/planets.api';
import { PlanetsList } from '../../components/planets.list/planets.list';

export function HomePage() {
    const planets = useSelector((state: RootState) => state.planets.allPlanets);
    const dispatcher = useDispatch();
    console.log(planets);

    const handleLoadPlanets = useCallback(async () => {
        const planets = await getAllPlanets();
        if (planets) dispatcher(ac.loadAllActionCreatorPlanets(planets));
    }, [dispatcher]);

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
