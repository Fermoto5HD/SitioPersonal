import { Component, OnInit, Input } from '@angular/core';
import { FM5PortfolioService } from './../services/fm5-portfolio.service';

@Component({
	selector: 'FM5-portfolio',
	templateUrl: './fm5-portfolio-grid.component.html',
	styleUrls: ['./fm5-portfolio-grid.component.css']
})

export class FM5PortfolioGridComponent implements OnInit {

	@Input() size: string;
	@Input() limit: number;

	onActivate(e, outlet){
	outlet.scrollTop = 0;
	}
	constructor(private theService:FM5PortfolioService) {}

	portfolio: any = [];

	ngOnInit() {
		//console.log(this.theService.getPortfolio());
		//this.portfolio = this.theService.getPortfolio();

		this.theService.getPortfolio().subscribe(portfolio => {
			if (this.limit) {
				this.portfolio = portfolio.filter((item, index) => index < this.limit );
			} else {
				this.portfolio = portfolio;
			}
		});
	}
}
