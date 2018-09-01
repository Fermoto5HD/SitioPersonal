import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { NetworksService } from './../../../services/networks.service';

@Component({
	selector: 'network-flickr',
	templateUrl: './flickr.component.html',
	styleUrls: ['./flickr.component.css']
})
export class NetworkFlickrComponent implements OnInit {
	section = {
		title: "Flickr",
		cover_title: "Flickr",
		lead: 'Fotos, pero en el formato original.',
		description: 'Tomas más decentes, junto con el OnePlus 5 y el modo pro, me permiten sacar fotos que luego son utilizadas en lugares más visibles de los proyectos y en la presencia en redes sociales.'
	}

	constructor(
		private theService:NetworksService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle(this.section.title + ' - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, flickr, coffee, energy drink, city life, transport, photos, buenos aires, argentina'},
			{ name: 'description', content: this.section.lead + ' ' + this.section.description }
		]);
	}

	items: any = [];
	cover_url: any;

	ngOnInit() {
		this.theService.flickr("list").subscribe(theItems => {
			this.items = theItems;
			this.cover_url = 'https://farm'+ this.items[0].farm +'.staticflickr.com/' + this.items[0].server + '/' + this.items[0].id + '_' + this.items[0].secret + '_b.jpg';
		});
	}

}
