import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FM5YoutubeService } from './../services/fm5-youtube.service';

@Component({
	selector: 'fm5-youtube',
	templateUrl: './fm5-youtube.component.html',
	styleUrls: ['./fm5-youtube.component.css']
})
export class FM5YoutubeComponent implements OnInit {

	section = {
		title: "YouTube",
		cover_title: "YouTube",
		lead: 'Una puerta hacia el contenido original.',
		description: 'Transporte ferroviario, eventos y más son las temáticas que enfoco en los videos de mi canal, con licencia Creative Commons para que lo reutilices como quieras.'
	}

	constructor(
		private theService:FM5YoutubeService,
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
	main: any = [];
	items: any = [];
	stats: any = [];

	ngOnInit() {
		this.theService.get("latest").subscribe(theItems => {
			this.main = theItems;
		});
		this.theService.get("last10").subscribe(theItems => {
			this.items = theItems;
		});
		this.theService.get("stats").subscribe(theItems => {
			this.stats = theItems;
		});
	}

}
