import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FM5NoEncontradoService } from './../../services/fm5-noencontrado.service';

@Component({
	selector: 'fm5-error404',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css']
})
export class Error404Component implements OnInit {

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
