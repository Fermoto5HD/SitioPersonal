import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FM5NoEncontradoService } from './../services/fm5-noencontrado.service';

@Component({
	selector: 'fm5-error404',
	templateUrl: './fm5-error404.component.html',
	styleUrls: ['./fm5-error404.component.css']
})
export class FM5Error404Component implements OnInit {

	constructor(
		private theService:FM5NoEncontradoService,  
		meta: Meta, 
		title: Title
	) {
		title.setTitle('Error 404 - Fermoto5HD');
	}

	people: any;

	ngOnInit() {
		this.theService.get().subscribe(people => {
			this.people = people;
		});
	}

}
