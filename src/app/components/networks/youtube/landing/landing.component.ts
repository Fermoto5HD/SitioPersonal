import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { APIService } from './../../../../services/api.service';
import { NetworksService } from './../../../../services/networks.service';

@Component({
	selector: 'networks-youtube-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css']
})
export class NetworkYouTubeLandingComponent implements OnInit {

	section = {
		title: "YouTube",
		cover_title: "YouTube",
		lead: 'Una puerta hacia el contenido original.',
		description: 'Transporte ferroviario, eventos y más son las temáticas que enfoco en los videos de mi canal, con licencia Creative Commons para que lo reutilices como quieras.'
	}

	constructor(
		private apiService:APIService,
		private theService:NetworksService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle(this.section.title + ' - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, youtube, buenos aires, argentina'},
			{ name: 'description', content: this.section.lead + ' ' + this.section.description }
		]);
	}
	variables: any = [];
	main: any = [];
	items: any = [];
	stats: any = [];

	ngOnInit() {
		this.apiService.variables('youtube').subscribe(theItems => {
			this.variables = theItems;
		})
		this.theService.youtube("latest").subscribe(theItems => {
			this.main = theItems;
		});
		this.theService.youtube("last10").subscribe(theItems => {
			this.items = theItems;
		});
		this.theService.youtube("stats").subscribe(theItems => {
			this.stats = theItems;
		});
	}

	public showVideoList(slug: any = null, subslug: any = null) {
		this.items = [];
		this.theService.youtube("playlist", slug, subslug).subscribe(theItems => {
			this.items = theItems;
		});
	}
}
