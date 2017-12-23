import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
	selector: 'FM5-proximotren',
	templateUrl: './fm5-proximotren.component.html',
	styleUrls: ['./fm5-proximotren.component.css']
})
export class FM5ProximotrenComponent implements OnInit {

	constructor(
		meta: Meta, 
		title: Title
	) {
		title.setTitle('Próximo Tren - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: 'Conocé en cuánto tiempo llega la próxima formación más cercana a vos.' }
		]);
	}

	ngOnInit() {
	}

}
