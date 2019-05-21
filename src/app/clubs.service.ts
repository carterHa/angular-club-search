import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClubsService {

  constructor(private httpService: HttpClient) { }

 getClubs() {
    return this.httpService.get('../../assets/clubs.json');
  }
  editContacts() {
    // return this.httpService.post('../../assets/workers.json');
  }
}