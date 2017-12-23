import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'FM5-website',
  templateUrl: './fm5-website.component.html',
  styleUrls: ['./fm5-website.component.css']
})
export class FM5WebsiteComponent implements OnInit {

	constructor(meta: Meta, title: Title) {
		title.setTitle('Sobre el sitio - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: 'No es sólo un portfolio, es un campo de aprendizaje muy interesante. Por este sitio pasaron varios desafíos que derivaron en estas versiones.' }
		]);
	}

	ngOnInit() {
	}

}
