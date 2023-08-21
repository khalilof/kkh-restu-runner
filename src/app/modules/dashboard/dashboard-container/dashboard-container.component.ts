import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { HomeFacade } from '../../../+state/home.facade';
import { ITable } from '../../../model/table.interface';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent {

  backgroundSelector$ = this.homeFacade.backgroundSelector$;
  compactMode$ = this.homeFacade.compactMode$;
  selectTables$ = this.homeFacade.selectTables$;
  selectAllTables$ = this.homeFacade.selectAllTables$;

  constructor(private dashboardService: DashboardService, private homeFacade: HomeFacade) {
  }

  filterChangeHandler($event: string) {
    this.homeFacade.setFilterValue($event);
  }

  updateTableHandler($event: ITable) {
    this.homeFacade.updateTable($event);
  }
}
