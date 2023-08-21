import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeState } from './reducers/home.reducers';
import { selectAllTables, selectBackground, selectCompactMode, selectFilteredTables } from './selectors/home.selectors';
import { loadTables, setBackground, setCompactMode, setFilterValue, updateTable } from './actions/home.actions';
import { ITable } from '../model/table.interface';


@Injectable({
  providedIn: 'root'
})
export class HomeFacade {

  backgroundSelector$ = this.store.select(selectBackground);
  compactMode$ = this.store.select(selectCompactMode);
  selectTables$ = this.store.select(selectFilteredTables);
  selectAllTables$ = this.store.select(selectAllTables);

  constructor(private store: Store<HomeState>) {
  }


  setFilterValue(filterValue: string): void {
    this.store.dispatch(setFilterValue({filterValue}));
  }

  updateTable(table: ITable): void {
    this.store.dispatch(updateTable({table}));
  }

  updateBackground(background: boolean): void {
    this.store.dispatch(setBackground({background}));
  }

  updateCompactMode(compactMode: boolean): void {
    this.store.dispatch(setCompactMode({compactMode}));
  }

  loadTables(): void {
    this.store.dispatch(loadTables());
  }
}
