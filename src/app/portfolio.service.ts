import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PortfolioService {

  constructor(private http: Http) { }

  portfolio = [
    '1', '2', '3', '4'
  ]

  /*myData() {
    return true;
  }*/
  getPortfolio() {
    return this.http.get('/api/portfolio')
    .map(res => res.json());
  }

}
