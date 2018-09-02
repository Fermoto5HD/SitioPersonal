import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'portfolio-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class PortfolioLandingComponent implements OnInit {
  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
  constructor(
    meta: Meta, 
    title: Title
   ) {
    title.setTitle('Portfolio - Fermoto5HD');
  }

  portfolio: any = [];

  ngOnInit() {
  }

}
