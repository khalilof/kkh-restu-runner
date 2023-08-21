import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsUiComponent } from './settings-ui/settings-ui.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    SettingsUiComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
