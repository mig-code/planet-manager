import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as ac from '../../reducers/action.creator';
import './details.modal.scss';

export function Modal() {
    const currentPlanet = useSelector(
        (state: RootState) => state.planets.currentPlanet
    );

    const isDetailsModalOpen = useSelector(
        (state: RootState) => state.modals.isDetailsModalOpen
    );

    const dispatcher = useDispatch();

    const handleCloseModal = () => {
        dispatcher(ac.closeDetailsModalActionCreatorModals());
    };
    return (
        <>
            {currentPlanet && isDetailsModalOpen && (
                <div className="details-modal">
                    <div className="details-modal__content">
                        <h2 className="details-modal__title">{currentPlanet.name}</h2>
                        <div className="details-modal-card__info">
                            <p>Diameter {currentPlanet.diameter} km</p>
                            <p>
                                Climate{' '}
                                {currentPlanet.climates.map(
                                    (climate) => `${climate} `
                                )}
                            </p>
                            <p>
                                Terrain{' '}
                                {currentPlanet.terrains.map(
                                    (terrain) => `${terrain} `
                                )}
                            </p>
                            <p>Population {currentPlanet.population}</p>
                            Hanitants{' '}
                            {currentPlanet.residents.map(
                                (resident) => `${resident} `
                            )}
                        </div>
                        <button
                            onClick={handleCloseModal}
                            className="details-modal__close-button"
                        >
                            x
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
