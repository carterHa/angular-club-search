import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClubsService } from './clubs.service';
import { MaterialsModule } from './material';
import { ClubFinderComponent } from './clubFinder/clubFinder.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { ListFilterPipe } from './list/list-filter.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,MaterialsModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, ClubFinderComponent, ListComponent, DetailsComponent, SearchComponent, ListFilterPipe],
  bootstrap:    [ AppComponent ],
  providers: [ClubsService]
})
export class AppModule { }
