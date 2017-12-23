import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class FM5InstagramService {

  constructor(private http: Http) { }

  getList() {
    return this.http.get('/api/instagram').map(res => res.json());
  }
}
