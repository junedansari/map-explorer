import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MapBuilderModule } from '../app/map-builder/map-builder.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MapSettingsComponent } from './map-settings/map-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MapSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MapBuilderModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
