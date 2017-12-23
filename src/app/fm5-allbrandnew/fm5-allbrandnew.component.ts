import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
	selector: 'FM5-allbrandnew',
	templateUrl: './fm5-allbrandnew.component.html',
	styleUrls: ['./fm5-allbrandnew.component.css']
})
export class FM5AllbrandnewComponent implements OnInit {

	constructor(
		meta: Meta, 
		title: Title
	) {
		title.setTitle('0 KM, y con olorcito a nuevo! - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: 'Descubrí las mejoras que hice a mi página personal en la sexta versión de desarrollo.' }
		]);
	}

	ngOnInit() {
	}

}
