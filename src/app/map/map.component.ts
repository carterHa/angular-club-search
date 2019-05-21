import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { IClubs} from '../models';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent{
  @Input()
  public club;

  constructor(public dialog: MatDialog) {

  }

}