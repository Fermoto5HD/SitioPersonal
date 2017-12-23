import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class FM5NoEncontradoService {

  constructor(private http: Http) { }

  get() {return this.http.get('/api/noencontrado').map(res => res.json());}
}
