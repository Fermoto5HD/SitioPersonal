import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class FM5BlogService {

  constructor(private http: Http) { }

  post = [
    '1', '2', '3', '4'
  ]

  /*myData() {
    return true;
  }*/
  getBlog() {
    return this.http.get('/api/blog').map(res => res.json());
  }
  getBlogPost(slug: string) {
    return this.http.get('/api/blog/'+slug).map(res => res.json());
  }
  vote(slug: string, vote: number) {
    return this.http.get('/api/blog/'+slug+'/voting/'+vote).map(res => res.json());
  }
}