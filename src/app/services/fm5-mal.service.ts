import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class FM5MALService {

  constructor(private http: Http) { }

  getAnime() {
    return this.http.get('/api/mal/anime').map(res => res.json());
  }
  getManga() {
    return this.http.get('/api/mal/manga').map(res => res.json());
  }
}
