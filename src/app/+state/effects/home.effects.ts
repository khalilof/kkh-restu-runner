import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTables, loadTablesSuccess, updateTable, updateTableSuccess } from '../actions/home.actions';
import { of, switchMap } from 'rxjs';
import { MOCK_TABLES, TableStatus } from '../../model/table.interface';
import { DashboardService } from '../../modules/dashboard/services/dashboard.service';
import { HomeState } from '../reducers/home.reducers';
import { Store } from '@ngrx/store';


@Injectable()
export class HomeEffects {

  loadTables$ = createEffect(() => this.actions$.pipe(
    ofType(loadTables),
    switchMap(() => this.dashboardService.getTables()),
    switchMap((response) => of(loadTablesSuccess({tables: response})))
  ));

/*
  ofType(loadTables),
    switchMap(() => of(loadTablesSuccess({tables: [...MOCK_TABLES]})))

   switchMap(() => this.dashboardService.getTables()),
   switchMap((response) => of(loadTablesSuccess({tables: response})))
 */

  updateTable$ = createEffect(() => this.actions$.pipe(
    ofType(updateTable),
    switchMap((action) => {
      if (action.table.status === TableStatus.ORDERED) {
        this.dashboardService.addMealToCookingQueue(action.table).subscribe(
          () => {
            this.store.dispatch(updateTableSuccess({table: {...action.table, notify: true}}))
          }
        );
      }
      return of(updateTableSuccess({table: {...action.table, notify: false}}))
    })
  ));


  constructor(private actions$: Actions, private dashboardService: DashboardService, private store: Store<HomeState>) {
  }

}
