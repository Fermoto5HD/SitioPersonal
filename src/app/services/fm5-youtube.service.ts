import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class FM5YoutubeService {

	constructor(private http: Http) { }

	get(type) {
		switch(type) {
			case "last10": return this.http.get('/api/youtube').map(res => res.json()); 
			case "latest": return this.http.get('/api/youtube/latest').map(res => res.json()); 
			case "stats": return this.http.get('/api/youtube/stats').map(res => res.json()); 
			case "details": return this.http.get('/api/youtube/details').map(res => res.json()); 
		}
	}
}
