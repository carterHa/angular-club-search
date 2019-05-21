import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { IClubs} from '../models';

@Component({
  selector: 'app-pseudo-calendar',
  templateUrl: './pseudo-calendar.component.html',
  styleUrls: ['./pseudo-calendar.component.css']
})
export class PseudoCalendarComponent {
  @Input()
  public club;

  constructor(public dialog: MatDialog) {

  }

}