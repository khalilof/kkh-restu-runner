import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITable, TableStatus } from '../../../model/table.interface';
import { statusToDescriptionMap, statusToIconMap } from '../../../helper/status-icon-mapper';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input() table!: ITable;
  @Input() menu: string[] | null = [];
  @Output() updateTable = new EventEmitter<ITable>();
  expanded = false;
  iconName = '';
  TableStatus = TableStatus;
  selectedMenuItem: string = '';
  tableStatusDescription = '';

  ngOnInit(): void {
    this.iconName = statusToIconMap.get(this.table.status) ?? '';
    this.tableStatusDescription = statusToDescriptionMap.get(this.table.status) ?? '';
  }

  expand(): void {
    this.expanded = !this.expanded;
  }

  updateStatus(status: TableStatus) {
    if (this.selectedMenuItem.length > 0) {
      this.updateTable.emit({...this.table, status: status, currentOrder: this.selectedMenuItem});
    } else {
      this.updateTable.emit({...this.table, status: status});
    }
  }
}
