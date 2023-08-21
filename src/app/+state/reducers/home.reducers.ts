import { Action, createReducer, on } from '@ngrx/store';
import {
  loadTablesSuccess,
  setBackground,
  setCompactMode,
  setFilterValue,
  updateTableSuccess
} from '../actions/home.actions';
import { ITable } from '../../model/table.interface';

export const homeKey = 'home';

export interface RootState {
  homeState: HomeState;
}

export interface HomeState {
  background: boolean;
  compactMode: boolean;
  filterValue: string;
  tables: ITable[];
}

export const initialState: HomeState = {
  background: true,
  compactMode: false,
  filterValue: '',
  tables: [],
}

export const homeReducer = createReducer(
  initialState,
  on(setBackground, (state, action) => ({...state, background: action.background})),
  on(setCompactMode, (state, action) => ({...state, compactMode: action.compactMode})),
  on(setFilterValue, (state, action) => ({...state, filterValue: action.filterValue})),
  on(loadTablesSuccess, (state, action) => ({...state, tables: action.tables})),
  on(updateTableSuccess, (state, action) => ({
    ...state,
    tables: state.tables.map(table => table.id === action.table.id ? action.table : table)
  }))
);

export function reducer(state: HomeState | undefined, action: Action): HomeState {
  return homeReducer(state, action);
}
