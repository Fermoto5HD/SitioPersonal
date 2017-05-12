import { Component, OnInit } from '@angular/core';
import { FM5TraktService } from './../fm5-trakt.service';

@Component({
  selector: 'fm5-trakt',
  templateUrl: './fm5-trakt.component.html',
  styleUrls: ['./fm5-trakt.component.css']
})
export class FM5TraktComponent implements OnInit {

  constructor(private traktService:FM5TraktService) {}

  last: any = [];
  list: any = [];
  history: any = [];

  ngOnInit() {
    //console.log(this.portfolioService.getPortfolio());
    //this.portfolio = this.portfolioService.getPortfolio();

    this.traktService.getLast().subscribe(last => {
      this.last = last;
    });

    this.traktService.getList().subscribe(list => {
      this.list = list;
    });

    this.traktService.getHistory().subscribe(history => {
      this.history = history;
    });
  }

}
