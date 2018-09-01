import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import * as moment from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	constructor(
		meta: Meta, 
		title: Title
	) {
		title.setTitle('Sobre mí - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: 'Conocé un poco más de lo que vengo haciendo hasta hoy en día.' }
		]);
	}

	age = 0;

	ngOnInit() {
		const birth = moment("1994-11-05");
		const todaysdate = moment();
		this.age = todaysdate.diff(birth, 'years');
	}

}