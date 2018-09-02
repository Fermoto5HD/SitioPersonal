import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { DollarsService } from './../../../../services/dollars.service';

@Component({
  selector: 'fm5-dollars-blog',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DollarsBlogComponent implements OnInit {

	section = {
		title: "Blog",
		cover_title: "Blog",
		lead: 'Publicaciones de la página.',
		description: 'Crear descripción.'
	}

	constructor(
		private theService:DollarsService,
		title: Title
	) {
		title.setTitle('[The Dollars] ' + this.section.title + ' - Fermoto5HD');
	}

	items: any = [];

	ngOnInit() {
		this.theService.getBlog().subscribe(theItems => {
			this.items = theItems;
		});
	}

}
