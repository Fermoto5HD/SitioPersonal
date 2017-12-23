import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class FM5TwitterService {

	constructor(private http: Http) { }

	profile() {
		return this.http.get('/api/tw/profile').map(res => res.json());
	}
	tweets() {
		return this.http.get('/api/tw/latest').map(res => res.json());
	}

}