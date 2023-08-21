import { createAction, props } from '@ngrx/store';
import { ITable } from '../../model/table.interface';


export const setBackground = createAction(
  '[Home] Set Background',
  props<{ background: boolean }>()
);

export const setCompactMode = createAction(
  '[Home] Set Compact Mode',
  props<{ compactMode: boolean }>()
);


export const setFilterValue = createAction(
  '[Home] Set Filter Value',
  props<{ filterValue: string }>()
);


export const loadTables = createAction(
  '[Home] Load Tables'
);

export const loadTablesSuccess = createAction(
  '[Home] Load Tables Success',
  props<{ tables: ITable[] }>()
);

export const updateTable = createAction(
  '[Home] Update Table',
  props<{ table: ITable }>()
);

export const updateTableSuccess = createAction(
  '[Home] Update Table Success',
  props<{ table: ITable }>()
);

