import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../portfolio.service';

@Component({
  selector: 'fm5-portfolio',
  templateUrl: './fm5-portfolio.component.html',
  styleUrls: ['./fm5-portfolio.component.css']
})
export class FM5PortfolioComponent implements OnInit {

  constructor(private portfolioService:PortfolioService) {}

  portfolio: any = [];

  ngOnInit() {
    //console.log(this.portfolioService.getPortfolio());
    //this.portfolio = this.portfolioService.getPortfolio();

    this.portfolioService.getPortfolio().subscribe(portfolio => {
      this.portfolio = portfolio;
    });
  }

}
