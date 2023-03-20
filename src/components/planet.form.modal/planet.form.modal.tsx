import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as ac from '../../reducers/action.creator';
import './planet.form.modal.scss';
import { PlanetInfo } from '../../types/planet';
import { SyntheticEvent, useEffect, useState } from 'react';
import { CheckboxInput } from '../checkbox.input/checkbox.input';
import { climates, residents, terrains } from '../../models/planets.models';

export function PlanetFormModal() {
    const currentPlanet = useSelector(
        (state: RootState) => state.planets.currentPlanetEditable
    );
    const isPlanetFormModalOpen = useSelector(
        (state: RootState) => state.modals.isPlanetFormModalOpen
    );

    const [planetForm, setPlanetForm] = useState({} as Partial<PlanetInfo>);

    const dispatcher = useDispatch();

    const handleCloseModal = () => {
        dispatcher(ac.closePlanetFormModalActionCreatorModals());
    };

    const handleInputChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        console.log('TypingSomething');
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

                climates: planetForm.climates as string[],
                residents: planetForm.residents as string[],
                terrains: planetForm.terrains as string[],
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
                terrains: currentPlanet?.terrains || [],
                climates: currentPlanet?.climates || [],
                residents: currentPlanet?.residents || [],
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
                                    maxLength={15}
                                    onInput={handleInputChange}
                                    data-testid="planetNameInput"
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
                                    data-testid="planetDiameterInput"
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
                                    data-testid="planetPopulationInput"
                                    required
                                />
                            </div>

                            <div>
                                <p>TERRAINS</p>
                                <CheckboxInput
                                    options={terrains}
                                    checkedOptions={
                                        currentPlanet?.terrains || null
                                    }
                                    onSelectionChange={(selectedOptions) => {
                                        setPlanetForm({
                                            ...planetForm,
                                            terrains: selectedOptions,
                                        });
                                    }}
                                />
                            </div>

                            <div>
                                <p>CLIMATES</p>
                                <CheckboxInput
                                    options={climates}
                                    checkedOptions={
                                        currentPlanet?.climates || null
                                    }
                                    onSelectionChange={(selectedOptions) => {
                                        setPlanetForm({
                                            ...planetForm,
                                            climates: selectedOptions,
                                        });
                                    }}
                                />
                            </div>
                            <div>
                                <p>RESIDENTS</p>
                                <CheckboxInput
                                    options={residents}
                                    checkedOptions={
                                        currentPlanet?.residents || null
                                    }
                                    onSelectionChange={(selectedOptions) => {
                                        setPlanetForm({
                                            ...planetForm,
                                            residents: selectedOptions,
                                        });
                                    }}
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
