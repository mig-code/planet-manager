import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as ac from '../../reducers/action.creator';
import './planet.form.modal.scss';
import { PlanetInfo } from '../../types/planet';
import { SyntheticEvent, useEffect, useState } from 'react';

export function PlanetFormModal() {
    const dispatcher = useDispatch();

    const currentPlanet = useSelector(
        (state: RootState) => state.planets.currentPlanetEditable
    );
    const isPlanetFormModalOpen = useSelector(
        (state: RootState) => state.modals.isPlanetFormModalOpen
    );

    const [planetForm, setPlanetForm] = useState({} as Partial<PlanetInfo>);

    console.log('planet form', planetForm);

    const handleInputChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        if (element.name === 'diameter' || element.name === 'population') {
            setPlanetForm({
                ...planetForm,
                [element.name]: parseFloat(element.value),
            });
            return;
        }
        setPlanetForm({
            ...planetForm,
            [element.name]: element.value,
        });
    };

    const handleCloseModal = () => {
        dispatcher(ac.closePlanetFormModalActionCreatorModals());
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (currentPlanet) {
            dispatcher(
                ac.updatePlanetActionCreatorPlanets({
                    ...currentPlanet,
                    ...planetForm,
                })
            );
        } else {
            const planetFormWithId: PlanetInfo = {
                name: planetForm.name as string,
                diameter: planetForm.diameter as number,
                population: planetForm.population as number,
                id: Math.random().toString(36).substr(2, 9),

                climates: [],
                residents: [],
                terrains: ['unknown'],
            };
            dispatcher(ac.addPlanetActionCreatorPlanets(planetFormWithId));
        }
        handleCloseModal();
    };

    useEffect(() => {
        if (isPlanetFormModalOpen) {
            const initialPlanetForm: Partial<PlanetInfo> = {
                name: currentPlanet?.name || '',
                diameter: currentPlanet?.diameter || 0,

                population: currentPlanet?.population || 0,
            };
            setPlanetForm(initialPlanetForm);
        }
    }, [currentPlanet, isPlanetFormModalOpen]);

    return (
        <>
            {isPlanetFormModalOpen && (
                <div className="planet-form-modal">
                    <div className="planet-form-modal__content">
                        <h2>{currentPlanet ? 'Edit' : 'Add'} Planet MODE</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    defaultValue={currentPlanet?.name}
                                    onInput={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="diameter">Diameter</label>
                                <input
                                    type="number"
                                    id="diameter"
                                    name="diameter"
                                    min={0}
                                    defaultValue={currentPlanet?.diameter}
                                    onInput={handleInputChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="population">Population</label>
                                <input
                                    type="number"
                                    id="population"
                                    name="population"
                                    defaultValue={currentPlanet?.population}
                                    min={0}
                                    onInput={handleInputChange}
                                    required
                                />
                            </div>
                            {currentPlanet ? (
                                <button type="submit">Edit</button>
                            ) : (
                                <button type="submit">Add</button>
                            )}
                        </form>
                        <button
                            onClick={handleCloseModal}
                            className="planet-form-modal__close-button"
                        >
                            x
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
