import { PlanetsList } from '../../components/planets.list/planets.list';

export function HomePage() {
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
