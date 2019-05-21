
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { IClubs} from '../models';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {
  @Input()
  public club;

  constructor(public dialog: MatDialog) {}


}