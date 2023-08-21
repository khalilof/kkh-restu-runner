import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './+state/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './+state/effects/home.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([HomeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
