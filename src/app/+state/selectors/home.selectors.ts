import { createFeatureSelector, createSelector } from '@ngrx/store';
import { homeKey, HomeState } from '../reducers/home.reducers';


export const selectHomeState = createFeatureSelector<HomeState>(
  homeKey);


export const selectBackground = createSelector(selectHomeState, (state: HomeState) => state.background);
export const selectCompactMode = createSelector(selectHomeState, (state: HomeState) => state.compactMode);

export const selectAllTables = createSelector(selectHomeState, (state: HomeState) => state.tables);

export const selectFilteredTables = createSelector(selectHomeState, (state: HomeState) =>
  state.tables.filter(table => table.status.toLowerCase().includes(state.filterValue.toLowerCase())));

