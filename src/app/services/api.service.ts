import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class APIService {

  constructor(private http: Http) { }

  sample = [
    '1', '2', '3', '4'
  ]

  /*myData() {
    return true;
  }*/
  variables(slug: string) {
    return this.http.get(environment.api_url + '/variables/' + slug)
    .map(res => res.json());
  }
  blog() {
    return this.http.get(environment.api_url + '/blog').map(res => res.json());
  }
  blogPost(slug: string) {
    return this.http.get(environment.api_url + '/blog/' + slug).map(res => res.json());
  }
  blogVote(slug: string, vote: number) {
    return this.http.get(environment.api_url + '/blog/' + slug + '/voting/' + vote).map(res => res.json());
  }

  portfolio(params) {
    return this.http.get(environment.api_url + '/portfolio', params)
    .map(res => res.json());
  }
  portfolioCategory(slug: string) {
    return this.http.get(environment.api_url + '/portfolio/category/' + slug)
    .map(res => res.json());
  }
  portfolioItem(slug: string, version: string = null) {
    return this.http.get(environment.api_url + '/portfolio/work/' + slug + '/' + version)
    .map(res => res.json());
  }

  ias() {
    return this.http.get(environment.api_url + '/ias').map(res => res.json());
  }
}
