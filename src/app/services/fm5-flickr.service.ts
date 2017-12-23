import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class FM5FlickrService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('/api/flickr').map(res => res.json());
  }
  last() {
    return this.http.get('/api/flickr/last').map(res => res.json());
  }
}
