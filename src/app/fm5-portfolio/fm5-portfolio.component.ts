import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FM5PortfolioService } from './../services/fm5-portfolio.service';

@Component({
  selector: 'fm5-portfolio-section',
  templateUrl: './fm5-portfolio.component.html',
  styleUrls: ['./fm5-portfolio.component.css']
})
export class FM5PortfolioComponent implements OnInit {
  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
  constructor(
    private theService:FM5PortfolioService,  
    meta: Meta, 
    title: Title
   ) {
    title.setTitle('Portfolio - Fermoto5HD');
  }

  portfolio: any = [];

  ngOnInit() {
    //console.log(this.theService.getPortfolio());
    //this.portfolio = this.theService.getPortfolio();

    this.theService.getPortfolio().subscribe(portfolio => {
      this.portfolio = portfolio;
    });
  }

}
