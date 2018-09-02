import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { NetworksService } from './../../../services/networks.service';

@Component({
	selector: 'network-instagram',
	templateUrl: './instagram.component.html',
	styleUrls: ['./instagram.component.css']
})
export class NetworkInstagramComponent implements OnInit {

	section = {
		title: "Instagram",
		cover_title: "Instagram",
		lead: 'Fotos (y alguno que otro video) de parte de mi vida diaria.',
		description: 'Podrás encontrar muchas latas de energizantes y cafés cada tanto, aunque también voy variando.'
	}

	constructor(
		private theService:NetworksService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle(this.section.title + ' - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, instagram, coffee, energy drink, anime, manga, photos, buenos aires, argentina'},
			{ name: 'description', content: this.section.lead + ' ' + this.section.description }
		]);
	}

	items: any = [];

	ngOnInit() {
		this.theService.instagram().subscribe(theItems => {
			this.items = theItems;
		});
	}
}
