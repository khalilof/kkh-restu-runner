import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUiComponent } from './dashboard-ui/dashboard-ui.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { FormsModule } from '@angular/forms';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { StatusCounterPipe } from './status-counter.pipe';


@NgModule({
  declarations: [
    DashboardUiComponent,
    DashboardItemComponent,
    DashboardContainerComponent,
    StatusCounterPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
}
