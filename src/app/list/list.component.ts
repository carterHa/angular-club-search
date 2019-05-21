import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { IClubs } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

@Input()
public clubs:  IClubs[] ;

public currentClub: IClubs;

searchModel: string;


@Output() public select: EventEmitter<{}> = new EventEmitter();

public onSelect(club: IClubs): void {
  this.currentClub = club; 
  this.select.emit(club);
  
}

}