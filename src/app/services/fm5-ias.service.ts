import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class FM5IASService {

	constructor(private http: Http) { }
	
	get() {
		return this.http.get('/api/ias').map(res => res.json());
	}

}
