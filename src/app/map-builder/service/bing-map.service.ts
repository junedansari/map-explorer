import { Injectable } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';

@Injectable({
  providedIn: 'root'
})
export class BingMapService {

  private styles: string[];
  private layers: any;

  constructor() { }

  private getStyles() {
    return [
      'RoadOnDemand',
      'Aerial',
      'AerialWithLabelsOnDemand',
      'CanvasDark',
      'OrdnanceSurvey'
    ];
  }

  setLayers() {
    this.layers = [];
    const styles = this.getStyles();
    if (styles.length > 0) {
      styles.forEach((style) => {
        this.layers.push(new TileLayer({
          visible: (style === 'AerialWithLabelsOnDemand') ? true : false,
          preload: Infinity,
          source: new BingMaps({
            key: 'AtGC9_TH_MBGFrCeM7WHy2viUh8JXbP065EphpeoINiIC4N3CAoiKQR1nmCvMTQp',
            imagerySet: style
            // use maxZoom 19 to see stretched tiles instead of the BingMaps
            // "no photos at this zoom level" tiles
            // maxZoom: 19
          })
        }));
      });
    }
  }

  getBingLayers() {
    console.log(this.layers);
    return this.layers;
  }
}
