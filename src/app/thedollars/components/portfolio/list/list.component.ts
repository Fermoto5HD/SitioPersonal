import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { DollarsService } from './../../../../services/dollars.service';

@Component({
  selector: 'dollars-portfolio',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DollarsPortfolioListComponent implements OnInit {

	section = {
		title: "Portfolio",
		cover_title: "Administración del portfolio",
		lead: 'Trabajos realizados hasta el momento.',
		description: 'Crear descripción.'
	}

	constructor(
		private theService:DollarsService,
		title: Title
	) {
		title.setTitle('[The Dollars] ' + this.section.title + ' - Fermoto5HD');
	}

	items: any = [];

	ngOnInit() {
		this.theService.getPortfolio().subscribe(theItems => {
			this.items = theItems;
		});
	}
}
