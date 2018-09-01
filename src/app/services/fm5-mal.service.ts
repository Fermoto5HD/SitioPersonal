import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()

export class FM5MALService {

  constructor(private http: Http) { }

  getAnime() {
    return this.http.get(environment.api_url + '/mal/anime').map(res => res.json());
  }
  getManga() {
    return this.http.get(environment.api_url + '/mal/manga').map(res => res.json());
  }
}
