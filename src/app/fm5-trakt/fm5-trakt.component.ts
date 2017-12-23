import { Component, OnInit } from '@angular/core';
import { FM5TraktService } from './../services/fm5-trakt.service';

@Component({
  selector: 'fm5-trakt',
  templateUrl: './fm5-trakt.component.html',
  styleUrls: ['./fm5-trakt.component.css']
})
export class FM5TraktComponent implements OnInit {

  constructor(private theService:FM5TraktService) {}

  last: any = [];
  list: any = [];
  history: any = [];
  imdb: any = [];

  ngOnInit() {
    //console.log(this.portfolioService.getPortfolio());
    //this.portfolio = this.portfolioService.getPortfolio();
    this.theService.loadimdb().subscribe(imdb => {
      this.imdb = imdb;
    });

    this.theService.getLast().subscribe(last => {
      console.log(last);
      this.last = last;
      if (last.show.ids.imdb) {
        this.theService.imgimdb(last.show.ids.imdb).subscribe(imdb => {
          console.log(imdb);
          this.last.cover = imdb.poster_path;
        });
      }
    });

    this.theService.getList().subscribe(list => {
      if (list) {
        list.forEach(function(element, index) {
          list[index].cover = "test";
          if (element.show.ids.imdb) {
            this.theService.imgimdb(element.show.ids.imdb).subscribe(imdb => {
              console.log(imdb);
              this.last.cover = imdb.poster_path;
            });
          }
          console.log(element);
        });
      }
      this.list = list;
    });

    this.theService.getHistory().subscribe(history => {
      this.history = history;
    });
  }

}
