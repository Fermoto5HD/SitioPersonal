import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class FM5GithubService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('/api/github')
      .map(res => res.json());
  }

}
