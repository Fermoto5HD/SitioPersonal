import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meta, Title, DomSanitizer } from "@angular/platform-browser";
import { APIService } from './../../../services/api.service';

@Component({
  selector: 'portfolio-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class PortfolioItemComponent implements OnInit {

	item: any = [];

	constructor(
		private theService: APIService,
		private route: ActivatedRoute,
		private meta: Meta, 
		private title: Title,
		private domsanitizer: DomSanitizer
	) {
		
	}

	ngOnInit(): void {
		this.route.params
			.pipe(
				switchMap((params: Params) => this.theService.portfolioItem(params['slug'], params['version']))
			)
			.subscribe(
				item => {
					this.item = item,

					this.title.setTitle(item.name + ' - Fermoto5HD');
					this.meta.addTags([
						{ name: 'author',   content: 'Fernando Osorio'},
						{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
						{ name: 'description', content: item.description.excerpt }
					]);
				}
			);
	}

}
