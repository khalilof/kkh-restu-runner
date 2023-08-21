import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsUiComponent } from './settings-ui/settings-ui.component';

const routes: Routes = [
  { path: '', component: SettingsUiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
