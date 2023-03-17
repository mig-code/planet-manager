import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as ac from '../../reducers/action.creator';
import './planet.form.modal.scss';

export function PlanetFormModal() {
    const currentPlanet = useSelector(
        (state: RootState) => state.planets.currentPlanet
    );

    const isPlanetFormModalOpen = useSelector(
        (state: RootState) => state.modals.isPlanetFormModalOpen
    );

    const dispatcher = useDispatch();

    const handleCloseModal = () => {
        dispatcher(ac.closePlanetFormModalActionCreatorModals());
    };
    return (
        <>
            {isPlanetFormModalOpen && (
                <div className="planet-form-modal">
                    <div className="planet-form-modal__content">
                        <h2>{currentPlanet ? 'Edit' : 'Add'} Planet MODE</h2>
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
