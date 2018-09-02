import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FM5MALService } from './../../../services/fm5-mal.service';

@Component({
	selector: 'FM5-mal',
	templateUrl: './fm5-mal.component.html',
	styleUrls: ['./fm5-mal.component.css']
})
export class FM5MALComponent implements OnInit {

	section = {
		title: "MyAnimeList",
		cover_title: "MyAnimeList!",
		lead: 'El tracker de animé (y manga) preferido por muchos.',
		description: 'Un seguimiento de episodios y series que ví, completé, dejé de lado y que planeo ver más adelante.'
	}

	constructor(
		private theService:FM5MALService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle(this.section.title + ' - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, myanimelist, manga, anime, hentai, fanservice, why are you reading these tags?, get off!, you..., iiihh!1!, buenos aires, argentina'},
			{ name: 'description', content: this.section.lead + ' ' + this.section.description }
		]);
	}

	items_anime: any = [];
	items_manga: any = [];

	ngOnInit() {
		this.theService.getAnime().subscribe(theItems => {
			this.items_anime = theItems;
		});
		this.theService.getManga().subscribe(theItems => {
			this.items_manga = theItems;
		});
	}

}
