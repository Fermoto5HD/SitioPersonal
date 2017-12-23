import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class FM5TraktService {

  constructor(private http: Http) { }

  portfolio = [
    '1', '2', '3', '4'
  ]

  loadimdb() {
    return this.http.get('/api/trakt/imdb_config')
      .map(res => res.json());
  }
  imgimdb(id: string) {
    return this.http.get('/api/trakt/cover_movie/'+id)
      .map(res => res.json());
  }
  getList() {
    return this.http.get('/api/trakt')
      .map(res => res.json());
  }
  getLast() {
    let list = this.http.get('/api/trakt/last')
      .map(res => res.json())

    /*list.forEach(item => {
      if (item.show.ids.imdb) {
        let imdb_data = this.http.get('/api/trakt/cover_movie/'+item.show.ids.imdb).map(res => res.json());
        if (imdb_data.poster_path) {
          item.cover = imdb_data.poster_path;
        }
      }
    });*/
    return list;
  }
  getHistory() {
    return this.http.get('/api/trakt/history')
      .map(res => res.json());
  }

}