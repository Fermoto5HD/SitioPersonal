import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()

export class NetworksService {

	constructor(private http: Http) { }

	instagram() {
		return this.http.get(environment.api_url + '/instagram').map(res => res.json());
	}

	flickr(type) {
		switch (type) {
			case "list": 	return this.http.get(environment.api_url + '/flickr').map(res => res.json());
			case "last": 	return this.http.get(environment.api_url + '/flickr/last').map(res => res.json());
		}
	}

	youtube(type, slug = null, subslug = null) {
		switch(type) {
			case "last10": 	return this.http.get(environment.api_url + '/youtube').map(res => res.json()); 
			case "latest": 	return this.http.get(environment.api_url + '/youtube/latest').map(res => res.json()); 
			case "stats": 	return this.http.get(environment.api_url + '/youtube/stats').map(res => res.json()); 
			case "details": return this.http.get(environment.api_url + '/youtube/details').map(res => res.json());
			case "playlist": {
				if (!slug || !subslug) {
					return this.http.get(environment.api_url + '/youtube').map(res => res.json()); 
				} else {
					return this.http.get(environment.api_url + '/youtube/' + slug + '/' + subslug).map(res => res.json());
				}
			}
		}
	}

	twitter(type) {
		switch (type) {
			case "profile": return this.http.get(environment.api_url + '/tw/info').map(res => res.json());
			case "list": 	return this.http.get(environment.api_url + '/tw/latest').map(res => res.json());
		}
	}


	facebook() {
		return this.http.get(environment.api_url + '/fb').map(res => res.json());
	}
}
