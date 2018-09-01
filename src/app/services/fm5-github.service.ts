import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()

export class FM5GithubService {

  constructor(private http: Http) { }

  get() {
    return this.http.get(environment.api_url + '/github')
      .map(res => res.json());
  }

}
