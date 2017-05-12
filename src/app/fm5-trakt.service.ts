import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class FM5TraktService {

  constructor(private http: Http) { }

  portfolio = [
    '1', '2', '3', '4'
  ]

  getList() {
    return this.http.get('/api/trakt')
      .map(res => res.json());
  }
  getLast() {
    return this.http.get('/api/trakt/last')
      .map(res => res.json());
  }
  getHistory() {
    return this.http.get('/api/trakt/history')
      .map(res => res.json());
  }

}
