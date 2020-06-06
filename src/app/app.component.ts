import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MapSettingsComponent} from '../app/map-settings/map-settings.component';
@Component({
  selector: 'ja-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'Map explorer';

  openSettings() {
    const dialogRef = this.dialog.open(MapSettingsComponent);
  }
}
