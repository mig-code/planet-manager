import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as ac from '../../reducers/action.creator';
import './details.modal.scss';

export function DetailsModal() {
    const currentPlanet = useSelector(
        (state: RootState) => state.planets.currentPlanetDetails
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
                        <div className="details-modal__card-info">
                            <h2 className="details-modal__title">
                                {currentPlanet.name}
                            </h2>
                            <div className="details-modal__property-title">
                                Diameter
                            </div>
                            <div className="details-modal__property-value">
                                {currentPlanet.diameter}km
                            </div>
                            <div className="details-modal__property-title">
                                Climate
                            </div>
                            <div className="details-modal__property-value">
                                {currentPlanet.climates.map(
                                    (climate) => `${climate} `
                                )}
                            </div>
                            <div className="details-modal__property-title">
                                Terrain
                            </div>
                            <div className="details-modal__property-value">
                                {currentPlanet.terrains.map(
                                    (terrain) => `${terrain} `
                                )}
                            </div>
                            <div className="details-modal__property-title">
                                Population
                            </div>
                            <div className="details-modal__property-value">
                                {currentPlanet.population
                                    ? currentPlanet.population
                                    : 'unknown'}
                            </div>
                            <div className="details-modal__property-title">
                                Habitants
                            </div>
                            <div className="details-modal__property-value">
                                {currentPlanet.residents.map(
                                    (resident) => `${resident} `
                                )}
                            </div>
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
