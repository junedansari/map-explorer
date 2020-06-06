import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { defaults, DragPan, MouseWheelZoom } from 'ol/interaction';
import { BingMapService } from '../service/bing-map.service';

@Injectable({
  providedIn: 'root'
})
export class MapBuilderService {
  private map: Map;

  constructor(private bingMapService: BingMapService) { }

  setMap() {
    this.bingMapService.setLayers();
    const binglayers = this.bingMapService.getBingLayers();
    this.map = new Map({
      target: 'map',
      // layers: [
      //   new TileLayer({
      //     source: new OSM()
      //   })
      // ],
      layers: binglayers,
      view: new View({
        center: [-6655.5402445057125, 6709968.258934638],
        zoom: 13
      })
    });

    // this.bingMapService.getBingLayers()[2].setVisible();
  }

  getMap() {
    return this.map;
  }

}
