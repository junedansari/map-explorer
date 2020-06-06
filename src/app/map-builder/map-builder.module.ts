import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapBuilderComponent } from './map/map-builder.component';



@NgModule({
  declarations: [MapBuilderComponent],
  imports: [
    CommonModule
  ],
  exports: [MapBuilderComponent]
})
export class MapBuilderModule { }
