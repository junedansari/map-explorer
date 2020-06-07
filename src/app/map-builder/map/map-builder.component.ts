import { Component, OnInit } from '@angular/core';
import {MapBuilderService} from '../service/map-builder.service';
import 'ol/ol.css';
@Component({
  selector: 'ja-map-builder',
  templateUrl: './map-builder.component.html',
  styleUrls: ['./map-builder.component.css']
})
export class MapBuilderComponent implements OnInit {

  constructor(private mapBuilderService: MapBuilderService) { }

  ngOnInit(): void {
    this.mapBuilderService.setMap();
    this.mapBuilderService.getMap();
  }

}
