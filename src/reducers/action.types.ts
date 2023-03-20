export const actionTypesPlanets = {
    loadAll: 'planets@loadAll',
    removePlanet: 'planets@removePlanet',
    updatePlanet: 'planets@updatePlanet',
    addPlanet: 'planets@addPlanet',
    setCurrentDetailsPlanet: 'planets@setCurrentPlanetDetails',
    setCurrentEditablePlanet: 'planets@setCurrentPlanetEditable',
};

export const actionTypesModals = {
    openDetailsModal: 'modals@openDetailsModal',
    closeDetailsModal: 'modals@closeDetailsModal',
    openPlanetFormModal: 'modals@openPlanetFormModal',
    closePlanetFormModal: 'modals@closePlanetFormModal',
};

export const actionTypesFilters = {
    setSearchQuery: 'filters@setSearchQuery',
    setSortBy: 'filters@setSortBy',
};
