import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as ac from '../../reducers/action.creator';

import './filters.scss';


export function Filters() {
    const { filters } = useSelector((state: RootState) => state);
    const dispatcher = useDispatch();

    const handleTextInput = (ev: SyntheticEvent) => {
        const searchInput = ev.target as HTMLFormElement;
        dispatcher(ac.setSearchQueryActionCreatorFilters(searchInput.value));
    };

    const handleSortBy = (ev: SyntheticEvent) => {
        const selectInput = ev.target as HTMLFormElement;
        dispatcher(ac.setSortByActionCreatorFilters(selectInput.value));
    };

    return (
        <div className="filters-container">
            <div className="filters-container__search-box">
                <label htmlFor="search"></label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={filters.searchQuery}
                    onInput={handleTextInput}
                    placeholder="Find your planet"
                />
            </div>
            <div className="filters-container__sort-by">
                <select
                    name="sortBy"
                    id="filterBy"
                    value={filters.sortBy}
                    onInput={handleSortBy}
                    placeholder="Sort by"
                >
                    <option value="latest-added">Latest Added</option>
                    <option value="diameter-largest">Largest Diameter</option>
                    <option value="population-more"> More Populated</option>
                </select>
            </div>
        </div>
    );
}
