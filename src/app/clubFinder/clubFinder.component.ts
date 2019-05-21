import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatListOption, MatSelectionList} from '@angular/material';
import { IClubs} from '../models';
@Component({
  selector: 'app-customer',
  templateUrl: './clubFinder.component.html',
  styleUrls: ['./clubFinder.component.css']
})
export class ClubFinderComponent implements OnInit {
  clubs: IClubs[];
  constructor(private myService: ClubsService,
  public dialog: MatDialog) { }

  ngOnInit() {
    this.myService.getClubs()
      .subscribe(res => this.clubs = res as any);
  }

}