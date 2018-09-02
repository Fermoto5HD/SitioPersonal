import { Component, OnInit, Input } from '@angular/core';
import { APIService } from './../../../services/api.service';

@Component({
	selector: 'portfolio-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.css']
})

export class PortfolioItemsComponent implements OnInit {

	@Input() size: string;
	@Input() limit: number;
	@Input() category: string;
	@Input() featured: boolean;

	onActivate(e, outlet){
	outlet.scrollTop = 0;
	}
	constructor(private theService:APIService) {}

	portfolio: any = [];

	ngOnInit() {
		//console.log(this.theService.getPortfolio());
		//this.portfolio = this.theService.getPortfolio();

		let category = this.category;
		let params = {
			featured: false
		};

		if (this.featured) {
			params.featured = this.featured;
		}

		if (this.category) {
			this.theService.portfolioCategory(this.category).subscribe(portfolio => {
				if (this.limit) {
					this.portfolio = portfolio.filter((item, index) => index < this.limit );
				} else {
					this.portfolio = portfolio;
				}
			});
		} else {
			this.theService.portfolio(params).subscribe(portfolio => {
				if (this.limit) {
					this.portfolio = portfolio.filter((item, index) => index < this.limit );
				} else {
					this.portfolio = portfolio;
				}
			});
		}

	}
}
