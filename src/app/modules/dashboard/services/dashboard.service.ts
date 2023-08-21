import { Injectable } from '@angular/core';
import { ITable, TableStatus } from '../../../model/table.interface';
import { map, Observable, of, switchMap, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FirebaseDashboardDocument } from '../../../model/firebase.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  API_URL = "https://firestore.googleapis.com/v1/projects/ausy-germany/databases/(default)/documents/restu-runner/dashboard";
  constructor(private http: HttpClient) {
  }
  addMealToCookingQueue(table: ITable): Observable<ITable> {
    return timer(5000).pipe(switchMap(() => {
      return of(table);
    }));
  }


  public getMenu(): Observable<string[]> {
    return this.http
      .get<FirebaseDashboardDocument>(this.API_URL)
      .pipe(
        map(response => response.fields.menu.arrayValue.values.map(it => it.stringValue))
      );
  }

  public getTables(): Observable<ITable[]> {
    return this.http
      .get<FirebaseDashboardDocument>(this.API_URL)
      .pipe(
        map(response => response.fields.tables.arrayValue.values.map(it => {
          return {
            id: it.stringValue,
            status: TableStatus.AVAILABLE
          }
        }))
      );
  }

}
